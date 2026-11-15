// Benjakitti Forest Park Website Application Logic
// Features: Leaflet GIS Map, Route Polylines, Sports Center Facilities, Flora/Fauna Explorer,
// Complete Multilingual (TH/EN) Translator, Audio Ambience, FAQ Accordion, and Real-time Status.

let currentLang = 'th';
window.currentLang = currentLang;
let mapInstance = null;
let mapMarkers = [];
let activePolyline = null;
let currentMapFilter = 'all';
let currentFloraFilter = 'all';

// Route coordinates within Benjakitti Park for visual polylines
const routeCoordinates = {
  'running-outer': [
    [13.7268, 100.5565],
    [13.7275, 100.5582],
    [13.7315, 100.5588],
    [13.7345, 100.5575],
    [13.7358, 100.5552],
    [13.7330, 100.5528],
    [13.7290, 100.5535],
    [13.7268, 100.5565]
  ],
  'cycling-track': [
    [13.7265, 100.5568],
    [13.7272, 100.5585],
    [13.7318, 100.5590],
    [13.7348, 100.5578],
    [13.7360, 100.5550],
    [13.7328, 100.5524],
    [13.7288, 100.5532],
    [13.7265, 100.5568]
  ],
  'skywalk-trail': [
    [13.7278, 100.5566],
    [13.7292, 100.5558],
    [13.7305, 100.5548],
    [13.7322, 100.5552],
    [13.7338, 100.5542],
    [13.7325, 100.5535]
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  initRealtimeStatus();
  initMap();
  renderAllSections();
  setupEventListeners();
  initAmbientAudio();
  lucide.createIcons();
});

// Check if park is open (04:30 - 22:00)
function initRealtimeStatus() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const timeVal = hours + minutes / 60;
  const isOpen = timeVal >= 4.5 && timeVal < 22;

  const statusPill = document.getElementById('park-status-pill');
  if (statusPill) {
    if (isOpen) {
      statusPill.textContent = parkData[currentLang].hero.statusOpen;
      statusPill.className = 'font-medium text-emerald-300';
    } else {
      statusPill.textContent = parkData[currentLang].hero.statusClosed;
      statusPill.className = 'font-medium text-amber-300';
    }
  }
}

// Initialize Google Map
function initMap() {
  const mapElement = document.getElementById('benjakitti-map');
  if (!mapElement || !window.google || !window.google.maps) return;
  if (mapInstance) return;

  const parkCenter = { lat: 13.7295, lng: 100.5562 };
  mapInstance = new window.google.maps.Map(mapElement, {
    center: parkCenter,
    zoom: 15.5,
    mapTypeControl: true,
    streetViewControl: true,
    fullscreenControl: true,
    zoomControl: true,
    scrollwheel: false,
    mapTypeControlOptions: {
      style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: window.google.maps.ControlPosition.TOP_RIGHT
    }
  });

  renderMapMarkers();
}
window.initMap = initMap;

// Render Google Map Markers
function renderMapMarkers() {
  if (!mapInstance || !window.google || !window.google.maps) return;

  // Clear existing markers
  mapMarkers.forEach(marker => marker.setMap(null));
  mapMarkers = [];

  const points = parkData[currentLang].mapPoints;

  points.forEach(point => {
    if (currentMapFilter !== 'all' && point.category !== currentMapFilter) {
      return;
    }

    const marker = new window.google.maps.Marker({
      position: { lat: point.lat, lng: point.lng },
      map: mapInstance,
      title: point.name,
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        scale: 11,
        fillColor: getMarkerColor(point.category),
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeWeight: 3
      }
    });

    const infoWindow = new window.google.maps.InfoWindow({
      content: `
        <div style="font-family: Arial, sans-serif; color: #0f172a; min-width: 180px;">
          <div style="font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #15803d; margin-bottom: 4px;">${getCategoryLabel(point.category)}</div>
          <div style="font-size: 14px; font-weight: 700; margin-bottom: 6px;">${point.name}</div>
          <div style="font-size: 12px; line-height: 1.5; color: #475569;">${point.desc}</div>
          <div style="font-size: 11px; color: #64748b; margin-top: 8px; display: flex; align-items: center; gap: 6px;">🕒 ${point.hours}</div>
        </div>
      `
    });

    marker.addListener('click', () => {
      infoWindow.open({
        anchor: marker,
        map: mapInstance,
        shouldFocus: false
      });
      selectMapPoint(point);
    });

    mapMarkers.push(marker);
  });
}

function getPinIconHtml(category) {
  let cls = 'pin-gate';
  let emoji = '🚪';
  if (category === 'parking') { cls = 'pin-parking'; emoji = '🅿️'; }
  else if (category === 'sports') { cls = 'pin-sports'; emoji = '🏸'; }
  else if (category === 'facility') { cls = 'pin-facility'; emoji = '🚻'; }
  else if (category === 'landmark') { cls = 'pin-landmark'; emoji = '📸'; }

  return `<div class="pin-badge ${cls}">${emoji}</div>`;
}

function getMarkerColor(category) {
  const colors = {
    gate: '#2563eb',
    parking: '#0284c7',
    sports: '#d97706',
    facility: '#059669',
    landmark: '#7c3aed'
  };

  return colors[category] || '#2563eb';
}

function getCategoryLabel(category) {
  const labels = {
    gate: currentLang === 'th' ? 'ทางเข้า-ออก' : 'Gate & Entrance',
    parking: currentLang === 'th' ? 'ที่จอดรถ' : 'Parking Area',
    sports: currentLang === 'th' ? 'ศูนย์กีฬา' : 'Sports Court',
    facility: currentLang === 'th' ? 'สิ่งอำนวยความสะดวก' : 'Facility & Aid',
    landmark: currentLang === 'th' ? 'จุดไฮไลต์' : 'Scenic Landmark'
  };
  return labels[category] || category;
}

function selectMapPoint(point) {
  const nameEl = document.getElementById('detail-name');
  const descEl = document.getElementById('detail-desc');
  const hoursEl = document.getElementById('detail-hours');
  const catEl = document.getElementById('detail-category-badge');
  const mapsLink = document.getElementById('detail-google-maps');

  if (nameEl) nameEl.textContent = point.name;
  if (descEl) descEl.textContent = point.desc;
  if (hoursEl) hoursEl.textContent = point.hours;
  if (catEl) catEl.textContent = getCategoryLabel(point.category);
  if (mapsLink) mapsLink.href = `https://maps.google.com/?q=${point.lat},${point.lng}`;

  if (mapInstance) {
    mapInstance.panTo({ lat: point.lat, lng: point.lng });
    mapInstance.setZoom(16.5);
  }
}

// Render Route Polyline on Map
function highlightRouteOnMap(routeId) {
  if (!mapInstance || !window.google || !window.google.maps) return;

  if (activePolyline) {
    activePolyline.setMap(null);
    activePolyline = null;
  }

  const coords = routeCoordinates[routeId];
  if (!coords) return;

  let color = '#15803d'; // green
  if (routeId === 'cycling-track') color = '#0284c7'; // blue
  if (routeId === 'skywalk-trail') color = '#9333ea'; // purple

  const path = coords.map(([lat, lng]) => ({ lat, lng }));
  activePolyline = new window.google.maps.Polyline({
    path,
    geodesic: true,
    strokeColor: color,
    strokeOpacity: 0.85,
    strokeWeight: 6,
    map: mapInstance,
    icons: routeId === 'skywalk-trail' ? [{ icon: { path: 'M 0,-1 0,1', strokeOpacity: 1, scale: 4 }, offset: '0', repeat: '12px' }] : undefined
  });

  const bounds = new window.google.maps.LatLngBounds();
  path.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
  mapInstance.fitBounds(bounds, 50);

  const mapSection = document.getElementById('interactive-map');
  if (mapSection) {
    mapSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Comprehensive i18n Dictionary Applicator
function applyI18n() {
  const ui = parkData[currentLang].ui;
  if (!ui) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (ui[key] !== undefined) {
      el.innerHTML = ui[key];
    }
  });

  // Language label on toggle button
  const currentLangLabel = document.getElementById('current-lang-label');
  if (currentLangLabel) {
    currentLangLabel.textContent = currentLang === 'th' ? 'TH / EN' : 'EN / TH';
  }
}

// Render All Sections Data
function renderAllSections() {
  const d = parkData[currentLang];
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el && value !== undefined && value !== null) {
      el.textContent = value;
    }
  };

  // Apply unified UI dictionary translations
  applyI18n();

  // Hero & Quick Info texts
  setText('hero-tagline', d.hero.tagline);
  setText('hero-title', d.hero.title);
  setText('hero-subtitle', d.hero.subtitle);
  setText('hero-explore-btn', d.hero.exploreBtn);
  setText('hero-events-btn', d.hero.eventsBtn);

  setText('qi-hours-title', d.quickInfo.hoursTitle);
  setText('qi-hours-time', d.quickInfo.hoursTime);
  setText('qi-hours-detail', d.quickInfo.hoursDetail);

  setText('qi-weather-title', d.quickInfo.weatherTitle);
  setText('qi-weather-temp', d.quickInfo.weatherTemp);
  setText('qi-weather-hum', d.quickInfo.weatherHum);

  setText('qi-aqi-title', d.quickInfo.aqiTitle);
  setText('qi-aqi-value', d.quickInfo.aqiValue);
  setText('qi-aqi-pm', d.quickInfo.aqiPm);

  setText('qi-entry-title', d.quickInfo.entryTitle);
  setText('qi-entry-value', d.quickInfo.entryValue);
  setText('qi-entry-detail', d.quickInfo.entryDetail);

  // Render Highlight Zones
  renderHighlightZones(d.highlightZones);

  // Render Map Filter Chips
  renderMapFilterChips(d.mapFilters);

  // Render Routes
  renderRoutes(d.routes);

  // Render Getting Here Cards
  renderGettingHere(d.gettingHere);

  // Render Events
  renderEvents(d.events);

  // Render Flora Category Filter Buttons
  renderFloraFilters();

  // Render Flora & Fauna
  renderFloraFauna(d.floraFauna);

  // Render Sustainability Story
  renderSustainability(d.sustainability);

  // Render Rules
  renderRules(d.rules);

  // Render FAQs
  renderFAQs(d.faqs);

  // Re-render markers if map initialized
  renderMapMarkers();
}

function renderHighlightZones(zones) {
  const container = document.getElementById('zones-container');
  if (!container) return;

  container.innerHTML = zones.map(z => `
    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group">
      <div class="relative h-56 overflow-hidden">
        <img src="${z.img}" alt="${z.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
        <span class="absolute top-4 left-4 bg-forest-900/80 backdrop-blur-md text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-400/30">
          ${z.badge}
        </span>
        <span class="absolute bottom-3 left-4 text-white text-xs font-medium flex items-center gap-1.5">
          <i data-lucide="info" class="w-3.5 h-3.5 text-emerald-300"></i>
          ${z.stats}
        </span>
      </div>
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-xl font-bold text-slate-900 group-hover:text-forest-700 transition-colors">${z.name}</h3>
          <div class="text-xs text-slate-400 font-semibold mb-3 uppercase tracking-wider">${z.nameEn}</div>
          <p class="text-slate-600 text-sm leading-relaxed">${z.desc}</p>
        </div>
        <div class="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
          <a href="#interactive-map" class="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 group-hover:underline">
            <span>${currentLang === 'th' ? 'ดูตำแหน่งบนแผนที่' : 'Locate on Map'}</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

function renderMapFilterChips(filters) {
  const container = document.getElementById('map-filters-container');
  if (!container) return;

  container.innerHTML = filters.map(f => `
    <button class="map-filter-btn px-4 py-2 rounded-full text-xs font-semibold transition-all ${currentMapFilter === f.id ? 'bg-forest-800 text-white shadow-sm' : 'bg-white text-slate-700 hover:bg-forest-50 border border-slate-200'}" data-filter="${f.id}">
      ${f.name}
    </button>
  `).join('');

  container.querySelectorAll('.map-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      currentMapFilter = e.currentTarget.getAttribute('data-filter');
      renderMapFilterChips(parkData[currentLang].mapFilters);
      renderMapMarkers();
    });
  });
}

function renderRoutes(routes) {
  const container = document.getElementById('routes-container');
  if (!container) return;

  container.innerHTML = routes.map(r => `
    <div class="route-card bg-white rounded-3xl p-6 shadow-md border border-slate-200 flex flex-col justify-between cursor-pointer" onclick="highlightRouteOnMap('${r.id}')">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold uppercase tracking-wider ${r.type === 'running' ? 'text-emerald-700 bg-emerald-50' : r.type === 'cycling' ? 'text-blue-700 bg-blue-50' : 'text-purple-700 bg-purple-50'} px-3 py-1 rounded-full">
            ${r.typeLabel}
          </span>
          <span class="text-2xl font-black text-forest-950">${r.distance}</span>
        </div>

        <h3 class="text-lg font-bold text-slate-900 mb-2">${r.title}</h3>
        <p class="text-xs text-slate-500 font-medium mb-4">${currentLang === 'th' ? 'ระดับ' : 'Level'}: ${r.level}</p>

        <div class="bg-slate-50 rounded-xl p-3 mb-4 text-xs text-slate-700">
          <strong class="text-slate-900">${currentLang === 'th' ? 'ผิวทาง' : 'Surface'}:</strong> ${r.surface}
        </div>

        <ul class="space-y-1.5 text-xs text-slate-600 mb-6">
          ${r.features.map(f => `<li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i> ${f}</li>`).join('')}
        </ul>
      </div>

      <button class="w-full py-2.5 px-4 bg-forest-50 hover:bg-forest-100 text-forest-900 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors">
        <i data-lucide="eye" class="w-4 h-4 text-emerald-700"></i>
        <span>${currentLang === 'th' ? 'แสดงเส้นทางบนแผนที่' : 'Preview Route on Map'}</span>
      </button>
    </div>
  `).join('');
}

function renderGettingHere(transitList) {
  const container = document.getElementById('getting-here-container');
  if (!container || !transitList) return;

  container.innerHTML = transitList.map(item => `
    <div class="bg-white rounded-2xl p-6 shadow-md border border-slate-200 flex flex-col justify-between">
      <div>
        <div class="w-12 h-12 rounded-2xl bg-${item.color}-50 text-${item.color}-600 flex items-center justify-center mb-4">
          <i data-lucide="${item.icon}" class="w-6 h-6"></i>
        </div>
        <h4 class="text-lg font-bold text-slate-900 mb-2">${item.title}</h4>
        <p class="text-sm text-slate-600 leading-relaxed mb-4">${item.desc}</p>
      </div>
      <div>
        <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-${item.color}-700 bg-${item.color}-50 px-3 py-1 rounded-full">
          ${item.badge}
        </span>
      </div>
    </div>
  `).join('');
}

function renderEvents(events) {
  const container = document.getElementById('events-container');
  if (!container) return;

  container.innerHTML = events.map(ev => `
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-5 items-start">
      <div class="bg-forest-800 text-white rounded-2xl p-4 text-center shrink-0 w-full sm:w-28">
        <i data-lucide="calendar" class="w-6 h-6 mx-auto text-emerald-300 mb-1"></i>
        <div class="text-xs font-semibold uppercase text-emerald-200">${ev.free ? (currentLang === 'th' ? 'ฟรี' : 'Free') : (currentLang === 'th' ? 'มีค่าสมัคร' : 'Register')}</div>
      </div>
      <div class="flex-1">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">${ev.category}</span>
          <span class="text-xs text-slate-500">${ev.date} • ${ev.time}</span>
        </div>
        <h4 class="text-lg font-bold text-slate-900 mb-1">${ev.title}</h4>
        <p class="text-xs text-slate-600 leading-relaxed mb-3">${ev.desc}</p>
        <div class="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
          <i data-lucide="map-pin" class="w-3.5 h-3.5 text-emerald-600"></i>
          <span>${ev.location}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderFloraFilters() {
  const container = document.getElementById('flora-filters-container');
  if (!container) return;

  const ui = parkData[currentLang].ui;
  const categories = [
    { cat: 'all', label: ui.catAll },
    { cat: 'wetland', label: ui.catWetland },
    { cat: 'trees', label: ui.catTrees },
    { cat: 'birds', label: ui.catBirds },
    { cat: 'fauna', label: ui.catFauna }
  ];

  container.innerHTML = categories.map(c => `
    <button class="flora-filter-btn px-4 py-2 rounded-full text-xs font-semibold transition-all ${currentFloraFilter === c.cat ? 'bg-forest-800 text-white shadow-sm font-bold' : 'bg-white text-slate-700 hover:bg-forest-50 border border-slate-200'}" data-cat="${c.cat}">
      ${c.label}
    </button>
  `).join('');

  container.querySelectorAll('.flora-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      currentFloraFilter = e.currentTarget.getAttribute('data-cat');
      renderFloraFilters();
      renderFloraFauna(parkData[currentLang].floraFauna);
      lucide.createIcons();
    });
  });
}

function renderFloraFauna(list) {
  const container = document.getElementById('flora-container');
  if (!container) return;

  const ui = parkData[currentLang].ui;
  const filtered = currentFloraFilter === 'all'
    ? list
    : list.filter(item => item.category === currentFloraFilter);

  container.innerHTML = filtered.map(item => `
    <div class="eco-card bg-white rounded-2xl p-6 shadow-md border border-slate-200 flex flex-col justify-between cursor-pointer" onclick="openFloraModal('${item.id}')">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="text-4xl">${item.icon}</span>
          <span class="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
            ${getCategoryName(item.category)}
          </span>
        </div>
        <h4 class="text-lg font-bold text-slate-900 mb-0.5">${item.name}</h4>
        <div class="text-xs italic text-slate-400 font-serif mb-3">${item.sciName}</div>
        <div class="text-xs font-semibold text-emerald-800 bg-emerald-50/70 p-2.5 rounded-xl mb-3">
          🌱 ${item.role}
        </div>
        <p class="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">${item.desc}</p>
      </div>

      <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span class="flex items-center gap-1">
          <i data-lucide="map-pin" class="w-3.5 h-3.5 text-emerald-600"></i>
          ${item.zone}
        </span>
        <span class="text-emerald-700 font-bold hover:underline">
          ${ui.floraViewDetail} &rarr;
        </span>
      </div>
    </div>
  `).join('');
}

function getCategoryName(category) {
  const names = {
    wetland: currentLang === 'th' ? 'พืชชุ่มน้ำบำบัด' : 'Wetland Flora',
    trees: currentLang === 'th' ? 'ไม้ยืนต้นประจำถิ่น' : 'Native Tree',
    birds: currentLang === 'th' ? 'นกในสวน' : 'Park Birds',
    fauna: currentLang === 'th' ? 'สัตว์และแมลง' : 'Urban Wildlife'
  };
  return names[category] || category;
}

function openFloraModal(id) {
  const item = parkData[currentLang].floraFauna.find(f => f.id === id);
  if (!item) return;

  document.getElementById('flora-modal-icon').textContent = item.icon;
  document.getElementById('flora-modal-cat').textContent = getCategoryName(item.category);
  document.getElementById('flora-modal-name').textContent = item.name;
  document.getElementById('flora-modal-sci').textContent = item.sciName;
  document.getElementById('flora-modal-role').textContent = item.role;
  document.getElementById('flora-modal-desc').textContent = item.desc;
  document.getElementById('flora-modal-zone').textContent = item.zone;

  const modal = document.getElementById('flora-modal');
  if (modal) modal.classList.remove('hidden');
}

function renderSustainability(data) {
  document.getElementById('story-title').textContent = data.title;
  document.getElementById('story-subtitle').textContent = data.subtitle;

  const grid = document.getElementById('sustainability-grid');
  if (!grid) return;

  grid.innerHTML = data.principles.map(p => `
    <div class="bg-forest-50/50 rounded-2xl p-6 border border-forest-100/60">
      <span class="text-2xl font-black text-emerald-600 block mb-2">${p.num}</span>
      <h4 class="text-base font-bold text-forest-950 mb-2">${p.title}</h4>
      <p class="text-xs text-slate-600 leading-relaxed">${p.desc}</p>
    </div>
  `).join('');
}

function renderRules(rules) {
  const container = document.getElementById('rules-container');
  if (!container) return;

  container.innerHTML = rules.map(r => `
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
      <div class="text-3xl mb-3">${r.icon}</div>
      <h4 class="text-base font-bold text-slate-900 mb-2">${r.title}</h4>
      <p class="text-xs text-slate-600 leading-relaxed">${r.desc}</p>
    </div>
  `).join('');
}

function renderFAQs(faqs) {
  const container = document.getElementById('faq-container');
  if (!container) return;

  container.innerHTML = faqs.map((f, idx) => `
    <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
      <button class="faq-btn w-full px-6 py-4 text-left font-bold text-sm sm:text-base text-slate-900 hover:text-emerald-700 flex items-center justify-between gap-4 transition-colors">
        <span>${f.q}</span>
        <i data-lucide="chevron-down" class="faq-chevron w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200"></i>
      </button>
      <div class="faq-content px-6 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed">
        ${f.a}
      </div>
    </div>
  `).join('');

  // Add click events to FAQ buttons
  container.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const content = btn.nextElementSibling;
      const chevron = btn.querySelector('.faq-chevron');
      const isOpen = content.classList.contains('open');

      // Close other open faqs
      container.querySelectorAll('.faq-content').forEach(c => c.classList.remove('open'));
      container.querySelectorAll('.faq-chevron').forEach(ch => ch.style.transform = 'rotate(0deg)');

      if (!isOpen) {
        content.classList.add('open');
        chevron.style.transform = 'rotate(180deg)';
      }
    });
  });
}

// Event Listeners setup
function setupEventListeners() {
  // Language switcher toggle
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'th' ? 'en' : 'th';
      window.currentLang = currentLang;
      renderAllSections();
      initRealtimeStatus();
      window.dispatchEvent(new Event('languageChanged'));
      lucide.createIcons();
    });
  }

  // Recenter map button
  const recenterBtn = document.getElementById('map-recenter-btn');
  if (recenterBtn && mapInstance) {
    recenterBtn.addEventListener('click', () => {
      mapInstance.panTo({ lat: 13.7295, lng: 100.5562 });
      mapInstance.setZoom(15.5);
      if (activePolyline) {
        activePolyline.setMap(null);
        activePolyline = null;
      }
    });
  }

  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Close flora modal
  const closeFloraModalBtn = document.getElementById('close-flora-modal-btn');
  if (closeFloraModalBtn) {
    closeFloraModalBtn.addEventListener('click', () => {
      document.getElementById('flora-modal').classList.add('hidden');
    });
  }
}

// Ambient Nature Sound Synthesizer via Web Audio API
// Procedurally generates gentle wind rustle and sporadic bird chirps without external audio assets!
let audioCtx = null;
let isAudioPlaying = false;
let windNode = null;
let birdInterval = null;

function initAmbientAudio() {
  const btn = document.getElementById('ambient-audio-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    isAudioPlaying = !isAudioPlaying;

    const icon = document.getElementById('audio-icon');
    const status = document.getElementById('audio-status');
    const ui = parkData[currentLang].ui;

    if (isAudioPlaying) {
      startAmbientSound();
      icon.setAttribute('data-lucide', 'volume-x');
      status.textContent = ui.audioStatusPlay;
    } else {
      stopAmbientSound();
      icon.setAttribute('data-lucide', 'volume-2');
      status.textContent = ui.audioStatusStop;
    }
    lucide.createIcons();
  });
}

function startAmbientSound() {
  if (!audioCtx) return;

  // 1. Soft wind breeze synthesis (pink noise through resonant lowpass)
  const bufferSize = audioCtx.sampleRate * 2;
  const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  let b0 = 0, b1 = 0, b2 = 0;

  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.96900 * b2 + white * 0.1538520;
    output[i] = (b0 + b1 + b2) * 0.04;
  }

  const whiteNoise = audioCtx.createBufferSource();
  whiteNoise.buffer = noiseBuffer;
  whiteNoise.loop = true;

  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(320, audioCtx.currentTime);

  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(0.3, audioCtx.currentTime);

  whiteNoise.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);
  whiteNoise.start();
  windNode = { source: whiteNoise, gain: gain };

  // 2. Procedural bird chirp scheduler
  birdInterval = setInterval(() => {
    if (isAudioPlaying && Math.random() > 0.4) {
      playBirdChirp();
    }
  }, 3500);
}

function playBirdChirp() {
  if (!audioCtx || !isAudioPlaying) return;

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  const startFreq = 2200 + Math.random() * 800;
  osc.type = 'sine';
  osc.frequency.setValueAtTime(startFreq, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(startFreq + 1200, audioCtx.currentTime + 0.1);
  osc.frequency.exponentialRampToValueAtTime(startFreq - 200, audioCtx.currentTime + 0.22);

  gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + 0.26);
}

function stopAmbientSound() {
  if (windNode) {
    try {
      windNode.source.stop();
    } catch (e) {}
    windNode = null;
  }
  if (birdInterval) {
    clearInterval(birdInterval);
    birdInterval = null;
  }
}
