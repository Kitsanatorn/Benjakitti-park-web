// Nature Reflection Tournament Controller
// Manages the 4 distinct application states:
// 1. STATE_INTRO
// 2. STATE_TOURNAMENT (5 Rounds)
// 3. STATE_RESULT (Reflection Form)
// 4. STATE_DASHBOARD (Public Postcard Wall)

class NatureTournament {
  constructor() {
    this.totalRounds = 5;
    this.currentRound = 1;
    this.currentWinner = null;
    this.currentChallenger = null;
    this.shownPhotoIds = new Set();
    this.selectedDashboardFilter = 'all';

    this.container = document.getElementById('tournament-app-root');
    this.init();
  }

  init() {
    if (!this.container) return;
    this.renderIntroState();

    // Listen to global language change if available
    window.addEventListener('languageChanged', () => {
      this.reRenderCurrentState();
    });
  }

  getLang() {
    return window.currentLang || 'th';
  }

  reRenderCurrentState() {
    const activeState = this.container.getAttribute('data-active-state') || 'intro';
    if (activeState === 'intro') this.renderIntroState();
    else if (activeState === 'tournament') this.renderTournamentRound();
    else if (activeState === 'result') this.renderResultState();
    else if (activeState === 'dashboard') this.renderDashboardState();
  }

  // =========================================================================
  // 1. INTRO STATE
  // =========================================================================
  renderIntroState() {
    this.container.setAttribute('data-active-state', 'intro');
    const isTh = this.getLang() === 'th';

    this.container.innerHTML = `
      <div class="relative bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800 text-white rounded-3xl p-8 sm:p-14 shadow-2xl overflow-hidden border border-emerald-500/20">
        <!-- Ambient Decorative Elements -->
        <div class="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-leaf/10 blur-3xl pointer-events-none"></div>

        <div class="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-xs font-semibold tracking-wide">
            <i data-lucide="compass" class="w-4 h-4 text-emerald-300"></i>
            <span>${isTh ? 'กิจกรรมสะท้อนความรู้สึกประจำสวน' : 'Interactive Nature Reflection Game'}</span>
          </div>

          <h3 class="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
            ${isTh ? 'Nature Reflection Tournament' : 'Nature Reflection Tournament'}
          </h3>

          <p class="text-forest-100 text-sm sm:text-lg leading-relaxed font-light">
            ${isTh
              ? 'เปิดประสาทสัมผัสและค้นพบ "มุมโปรดที่ตรงใจคุณที่สุด" ในสวนป่าเบญจกิติ ผ่านการเลือกภาพสถานที่ 5 รอบ พร้อมส่งต่อความรู้สึกของคุณลงบนกระดานโปสการ์ดธรรมชาติ'
              : 'Tune into nature and discover your most resonant spot in Benjakitti Forest Park across 5 visual face-off rounds. Conclude by penning your heartfelt reflection to the public community board.'}
          </p>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button id="btn-start-tournament" class="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-forest-950 font-bold text-base shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
              <i data-lucide="play" class="w-5 h-5 fill-current"></i>
              <span>${isTh ? 'เริ่มสำรวจมุมโปรด (5 รอบ)' : 'Start Exploring (5 Rounds)'}</span>
            </button>

            <button id="btn-view-dashboard" class="w-full sm:w-auto px-6 py-4 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2">
              <i data-lucide="messages-square" class="w-4 h-4 text-emerald-300"></i>
              <span>${isTh ? 'ดูกระดานความรู้สึกชุมชน' : 'View Community Reflections'}</span>
            </button>
          </div>
        </div>
      </div>
    `;

    lucide.createIcons();

    document.getElementById('btn-start-tournament')?.addEventListener('click', () => {
      this.startTournament();
    });

    document.getElementById('btn-view-dashboard')?.addEventListener('click', () => {
      this.renderDashboardState();
    });
  }

  // =========================================================================
  // 2. TOURNAMENT LOGIC (5 Rounds)
  // =========================================================================
  startTournament() {
    this.currentRound = 1;
    this.currentWinner = null;
    this.currentChallenger = null;
    this.shownPhotoIds.clear();

    // Round 1: Select 2 distinct random photos from the pool
    const pool = [...tournamentSpots];
    const firstIdx = Math.floor(Math.random() * pool.length);
    const candidateA = pool.splice(firstIdx, 1)[0];

    const secondIdx = Math.floor(Math.random() * pool.length);
    const candidateB = pool.splice(secondIdx, 1)[0];

    this.currentWinner = candidateA;
    this.currentChallenger = candidateB;

    this.shownPhotoIds.add(candidateA.id);
    this.shownPhotoIds.add(candidateB.id);

    this.renderTournamentRound();
  }

  advanceToNextRound(chosenPhoto) {
    this.currentWinner = chosenPhoto;

    if (this.currentRound >= this.totalRounds) {
      // Completed all 5 rounds -> go to Final Reflection State!
      this.renderResultState();
      return;
    }

    this.currentRound++;

    // Pick 1 new unshown photo from remaining pool
    const availablePool = tournamentSpots.filter(item => !this.shownPhotoIds.has(item.id));
    if (availablePool.length === 0) {
      // Fallback if pool exhausted
      this.renderResultState();
      return;
    }

    const randomPick = availablePool[Math.floor(Math.random() * availablePool.length)];
    this.shownPhotoIds.add(randomPick.id);
    this.currentChallenger = randomPick;

    this.renderTournamentRound(true);
  }

  renderTournamentRound(animate = false) {
    this.container.setAttribute('data-active-state', 'tournament');
    const isTh = this.getLang() === 'th';
    const percent = Math.round((this.currentRound / this.totalRounds) * 100);

    const leftPhoto = this.currentWinner;
    const rightPhoto = this.currentChallenger;

    const leftZone = isTh ? leftPhoto.zoneNameTh : leftPhoto.zoneNameEn;
    const leftTitle = isTh ? leftPhoto.titleTh : leftPhoto.titleEn;
    const leftDesc = isTh ? leftPhoto.descTh : leftPhoto.descEn;
    const leftTags = isTh ? leftPhoto.tagsTh : leftPhoto.tagsEn;

    const rightZone = isTh ? rightPhoto.zoneNameTh : rightPhoto.zoneNameEn;
    const rightTitle = isTh ? rightPhoto.titleTh : rightPhoto.titleEn;
    const rightDesc = isTh ? rightPhoto.descTh : rightPhoto.descEn;
    const rightTags = isTh ? rightPhoto.tagsTh : rightPhoto.tagsEn;

    const isRound1 = this.currentRound === 1;

    this.container.innerHTML = `
      <div class="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-emerald-900/10">
        <!-- Header & Progress Bar -->
        <div class="max-w-4xl mx-auto mb-8">
          <div class="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
            <span class="flex items-center gap-1.5 text-forest-800 font-bold">
              <i data-lucide="flame" class="w-4 h-4 text-emerald-600"></i>
              <span>${isTh ? `รอบที่ ${this.currentRound} จาก ${this.totalRounds}` : `Round ${this.currentRound} of ${this.totalRounds}`}</span>
            </span>
            <span>${isTh ? 'คลิกเลือกภาพที่คุณรู้สึกเชื่อมโยงที่สุด' : 'Choose the spot that speaks to you most'}</span>
            <span class="font-mono text-emerald-700 font-bold">${percent}%</span>
          </div>

          <!-- Animated Progress Track -->
          <div class="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
            <div class="bg-gradient-to-r from-emerald-500 to-forest-700 h-full rounded-full transition-all duration-500" style="width: ${percent}%"></div>
          </div>
        </div>

        <!-- Face-off Arena (Side by side on Desktop, Top & Bottom on Mobile) -->
        <div class="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-5xl mx-auto ${animate ? 'animate-fade-in' : ''}">
          <!-- Center VS Badge -->
          <div class="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-forest-950 text-emerald-300 font-black text-lg border-4 border-white shadow-xl items-center justify-center select-none pointer-events-none">
            VS
          </div>

          <!-- CARD LEFT (Candidate A / Current Champion) -->
          <div id="card-pick-left" class="tournament-pick-card group relative bg-stone-50 rounded-2xl overflow-hidden border-2 border-transparent hover:border-emerald-600 transition-all duration-300 shadow-md hover:shadow-2xl flex flex-col cursor-pointer transform hover:-translate-y-1.5">
            <!-- Badge: Current Winner (Rounds 2-5) -->
            ${!isRound1 ? `
              <div class="absolute top-4 left-4 z-10 bg-emerald-700 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                <i data-lucide="crown" class="w-3.5 h-3.5 text-amber-300"></i>
                <span>${isTh ? 'มุมโปรดปัจจุบันของคุณ' : 'Your Current Winner'}</span>
              </div>
            ` : ''}

            <div class="relative h-64 sm:h-80 overflow-hidden">
              <img src="${leftPhoto.imageUrl}" alt="${leftTitle}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4 text-white">
                <span class="inline-block text-[11px] font-bold uppercase tracking-wider text-emerald-300 bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full mb-1.5">
                  ${leftZone}
                </span>
                <h4 class="text-xl sm:text-2xl font-bold leading-snug drop-shadow-sm">${leftTitle}</h4>
              </div>
            </div>

            <div class="p-5 flex-1 flex flex-col justify-between bg-white">
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">${leftDesc}</p>
              <div class="flex items-center justify-between pt-3 border-t border-slate-100">
                <div class="flex gap-1.5 flex-wrap">
                  ${leftTags.map(tag => `<span class="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">#${tag}</span>`).join('')}
                </div>
                <span class="text-xs font-bold text-emerald-700 group-hover:text-emerald-800 flex items-center gap-1">
                  <span>${isTh ? 'เลือกมุมนี้' : 'Vote This'}</span>
                  <i data-lucide="check" class="w-4 h-4"></i>
                </span>
              </div>
            </div>
          </div>

          <!-- CARD RIGHT (Candidate B / New Challenger) -->
          <div id="card-pick-right" class="tournament-pick-card group relative bg-stone-50 rounded-2xl overflow-hidden border-2 border-transparent hover:border-emerald-600 transition-all duration-300 shadow-md hover:shadow-2xl flex flex-col cursor-pointer transform hover:-translate-y-1.5">
            <!-- Badge: New Challenger -->
            ${!isRound1 ? `
              <div class="absolute top-4 left-4 z-10 bg-amber-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                <i data-lucide="sparkles" class="w-3.5 h-3.5 text-amber-200"></i>
                <span>${isTh ? 'มุมท้าทายใหม่' : 'New Challenger'}</span>
              </div>
            ` : ''}

            <div class="relative h-64 sm:h-80 overflow-hidden">
              <img src="${rightPhoto.imageUrl}" alt="${rightTitle}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4 text-white">
                <span class="inline-block text-[11px] font-bold uppercase tracking-wider text-emerald-300 bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full mb-1.5">
                  ${rightZone}
                </span>
                <h4 class="text-xl sm:text-2xl font-bold leading-snug drop-shadow-sm">${rightTitle}</h4>
              </div>
            </div>

            <div class="p-5 flex-1 flex flex-col justify-between bg-white">
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">${rightDesc}</p>
              <div class="flex items-center justify-between pt-3 border-t border-slate-100">
                <div class="flex gap-1.5 flex-wrap">
                  ${rightTags.map(tag => `<span class="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">#${tag}</span>`).join('')}
                </div>
                <span class="text-xs font-bold text-emerald-700 group-hover:text-emerald-800 flex items-center gap-1">
                  <span>${isTh ? 'เลือกมุมนี้' : 'Vote This'}</span>
                  <i data-lucide="check" class="w-4 h-4"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Controls / Cancel -->
        <div class="mt-8 text-center">
          <button id="btn-cancel-tournament" class="text-xs text-slate-400 hover:text-slate-600 transition-colors underline">
            ${isTh ? 'ยกเลิกการสำรวจและกลับหน้าหลัก' : 'Cancel and return to intro'}
          </button>
        </div>
      </div>
    `;

    lucide.createIcons();

    // Event handlers for voting
    document.getElementById('card-pick-left')?.addEventListener('click', () => {
      this.advanceToNextRound(leftPhoto);
    });

    document.getElementById('card-pick-right')?.addEventListener('click', () => {
      this.advanceToNextRound(rightPhoto);
    });

    document.getElementById('btn-cancel-tournament')?.addEventListener('click', () => {
      this.renderIntroState();
    });
  }

  // =========================================================================
  // 3. FINAL REFLECTION STATE (Winner & Note Writing)
  // =========================================================================
  renderResultState() {
    this.container.setAttribute('data-active-state', 'result');
    const isTh = this.getLang() === 'th';
    const winner = this.currentWinner;

    const winnerZone = isTh ? winner.zoneNameTh : winner.zoneNameEn;
    const winnerTitle = isTh ? winner.titleTh : winner.titleEn;
    const winnerDesc = isTh ? winner.descTh : winner.descEn;

    this.container.innerHTML = `
      <div class="bg-gradient-to-br from-emerald-50/70 to-stone-50 rounded-3xl p-6 sm:p-12 shadow-xl border border-emerald-800/10 max-w-4xl mx-auto">
        <!-- Top Celebration Banner -->
        <div class="text-center mb-8">
          <div class="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3 shadow-inner">
            <i data-lucide="trophy" class="w-7 h-7 text-emerald-600"></i>
          </div>
          <span class="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full">
            ${isTh ? 'ผลลัพธ์การสำรวจของคุณ' : 'Your Tournament Champion'}
          </span>
          <h3 class="text-2xl sm:text-4xl font-extrabold text-forest-950 mt-2">
            ${isTh ? 'นี่คือมุมโปรดอันดับหนึ่งของคุณในสวนเบญจกิติ' : 'Your Top Resonant Spot in Benjakitti'}
          </h3>
        </div>

        <!-- Winning Photo Spotlight Card -->
        <div class="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 mb-8 grid grid-cols-1 md:grid-cols-12">
          <div class="md:col-span-5 h-64 md:h-full relative overflow-hidden">
            <img src="${winner.imageUrl}" alt="${winnerTitle}" class="w-full h-full object-cover">
            <div class="absolute top-3 left-3 bg-forest-950/80 backdrop-blur-md text-emerald-300 text-xs font-bold px-3 py-1 rounded-full">
              👑 ${isTh ? 'ภาพชนะเลิศ' : 'Winner'}
            </div>
          </div>
          <div class="md:col-span-7 p-6 flex flex-col justify-between">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-emerald-700">${winnerZone}</span>
              <h4 class="text-xl font-bold text-slate-900 mt-1 mb-2">${winnerTitle}</h4>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${winnerDesc}</p>
            </div>
            <div class="pt-4 mt-4 border-t border-slate-100 text-xs text-slate-400 flex items-center gap-1.5">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 text-emerald-600"></i>
              <span>${isTh ? 'สวนป่าเบญจกิติ กรุงเทพมหานคร' : 'Benjakitti Forest Park, Bangkok'}</span>
            </div>
          </div>
        </div>

        <!-- Reflection Form -->
        <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-200">
          <h4 class="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
            <i data-lucide="feather" class="w-5 h-5 text-emerald-600"></i>
            <span>${isTh ? 'เขียนความรู้สึกสั้นๆ ถึงมุมนี้' : 'Pen Your Reflection'}</span>
          </h4>
          <p class="text-xs text-slate-500 mb-4">
            ${isTh
              ? 'ข้อความของคุณจะถูกนำไปติดบน "กระดานโปสการ์ดชุมชน" ให้ผู้มาเยือนคนอื่นๆ ได้อ่านและส่งต่อพลังบวก'
              : 'Your postcard note will be pinned to the Public Community Wall to inspire fellow visitors.'}
          </p>

          <form id="form-share-reflection" class="space-y-4">
            <!-- Textarea with counter -->
            <div>
              <div class="flex items-center justify-between text-xs text-slate-700 mb-1 font-semibold">
                <label for="input-reflection-text">${isTh ? 'ความรู้สึกของคุณ (สูงสุด 200 ตัวอักษร)' : 'Your Thoughts (Max 200 chars)'}</label>
                <span id="char-counter" class="text-slate-400 font-mono">0 / 200</span>
              </div>
              <textarea
                id="input-reflection-text"
                required
                maxlength="200"
                rows="3"
                placeholder="${isTh ? 'เช่น ที่ตรงนี้ทำให้รู้สึกว่ากรุงเทพฯ ก็มีมุมที่เงียบสงบและร่มรื่นได้ขนาดนี้...' : 'e.g. Standing here reminded me that tranquility is always within reach in our bustling city...'}"
                class="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-forest-600 focus:outline-none transition-all resize-none"
              ></textarea>
            </div>

            <!-- Author Name -->
            <div>
              <label for="input-author-name" class="block text-xs font-semibold text-slate-700 mb-1">
                ${isTh ? 'ชื่อหรือนามปากกาของคุณ (ไม่บังคับ)' : 'Your Name or Alias (Optional)'}
              </label>
              <input
                type="text"
                id="input-author-name"
                maxlength="50"
                placeholder="${isTh ? 'นักสำรวจนิรนาม' : 'Anonymous Explorer'}"
                class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm focus:ring-2 focus:ring-forest-600 focus:outline-none"
              />
            </div>

            <!-- Submit & Restart -->
            <div class="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="submit"
                id="btn-submit-reflection"
                class="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-forest-800 hover:bg-forest-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <i data-lucide="send" class="w-4 h-4 text-emerald-300"></i>
                <span>${isTh ? 'แชร์ความรู้สึกขึ้นกระดานชุมชน' : 'Pin to Community Wall'}</span>
              </button>

              <button
                type="button"
                id="btn-restart-game"
                class="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
                <span>${isTh ? 'เล่นใหม่อีกครั้ง' : 'Play Again'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    lucide.createIcons();

    // Live character counter
    const textarea = document.getElementById('input-reflection-text');
    const counter = document.getElementById('char-counter');
    textarea?.addEventListener('input', () => {
      const len = textarea.value.length;
      counter.textContent = `${len} / 200`;
      if (len >= 190) {
        counter.className = 'text-amber-600 font-bold font-mono';
      } else {
        counter.className = 'text-slate-400 font-mono';
      }
    });

    // Handle form submit
    const form = document.getElementById('form-share-reflection');
    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const reflection = textarea.value.trim();
      const authorInput = document.getElementById('input-author-name').value.trim();

      if (!reflection || form.dataset.submitting === 'true') return;

      form.dataset.submitting = 'true';
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = isTh ? 'กำลังบันทึก...' : 'Saving...';
      }

      try {
        await window.reflectionService.addReflection({
          spotId: winner.id,
          zoneNameTh: winner.zoneNameTh,
          zoneNameEn: winner.zoneNameEn,
          imageUrl: winner.imageUrl,
          reflection: reflection,
          author: authorInput || (isTh ? 'นักสำรวจนิรนาม' : 'Anonymous Explorer')
        });

        // Navigate directly to community dashboard
        this.renderDashboardState(true);
      } catch (err) {
        console.error('Reflection save failed in Supabase path:', err);
        alert(isTh ? 'เกิดข้อผิดพลาดในการบันทึกข้อมูลกับ Supabase กรุณาตรวจสอบ table / RLS / keys' : 'Supabase save failed. Please check the table, RLS policy, and keys.');
      } finally {
        form.dataset.submitting = 'false';
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = isTh ? 'ส่งขึ้นกระดานชุมชน' : 'Share to Community Wall';
        }
      }
    });

    document.getElementById('btn-restart-game')?.addEventListener('click', () => {
      this.startTournament();
    });
  }

  // =========================================================================
  // 4. PUBLIC COMMUNITY DASHBOARD (Postcard Wall)
  // =========================================================================
  async renderDashboardState(justPosted = false) {
    this.container.setAttribute('data-active-state', 'dashboard');
    const isTh = this.getLang() === 'th';

    const reflections = await window.reflectionService.getAll();

    // Zone filters setup
    const zones = [
      { id: 'all', nameTh: 'ทั้งหมด', nameEn: 'All' },
      { id: 'forest', nameTh: 'สวนป่า & Skywalk', nameEn: 'Forest & Skywalk' },
      { id: 'wetland', nameTh: 'พื้นที่ชุ่มน้ำ', nameEn: 'Wetlands' },
      { id: 'lake', nameTh: 'สวนน้ำ & ทะเลสาบ', nameEn: 'Lake' },
      { id: 'amphitheater', nameTh: 'ลานหญ้าริมน้ำสำหรับกิจกรรมกลางแจ้ง', nameEn: 'Lakeside Lawn for Outdoor Events' },
      { id: 'dogpark', nameTh: 'สวนสุนัข', nameEn: 'Dog Park' }
    ];

    this.container.innerHTML = `
      <div class="space-y-8">
        <!-- Top Banner & Actions -->
        <div class="bg-gradient-to-r from-forest-950 via-forest-900 to-forest-800 text-white rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span class="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-white/10 px-3 py-1 rounded-full inline-block mb-2">
              Community Reflection Wall
            </span>
            <h3 class="text-2xl sm:text-3xl font-black tracking-tight text-white">
              ${isTh ? 'กระดานความรู้สึกจากเพื่อนร่วมทาง' : 'Voices from the Urban Sanctuary'}
            </h3>
            <p class="text-xs sm:text-sm text-forest-200 mt-1 max-w-xl">
              ${isTh
                ? 'รวบรวมโปสการ์ดความประทับใจของทุกคนที่มีต่อมุมต่างๆ ในสวนป่าเบญจกิติ'
                : 'A shared gallery of heartfelt postcard notes left by visitors for their most cherished park spots.'}
            </p>
          </div>

          <div class="flex items-center gap-3 shrink-0">
            <button id="btn-play-tournament-again" class="px-5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-forest-950 font-bold text-xs shadow-md transition-all flex items-center gap-2">
              <i data-lucide="play" class="w-4 h-4 fill-current"></i>
              <span>${isTh ? 'สำรวจมุมโปรดของคุณ' : 'Play Tournament'}</span>
            </button>
          </div>
        </div>

        ${justPosted ? `
          <div class="bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-2xl p-4 text-xs font-semibold flex items-center justify-between shadow-sm animate-fade-in">
            <div class="flex items-center gap-2">
              <i data-lucide="check-circle" class="w-5 h-5 text-emerald-600 shrink-0"></i>
              <span>${isTh ? 'แชร์โปสการ์ดความรู้สึกของคุณขึ้นสู่กระดานเรียบร้อยแล้ว ขอบคุณที่ร่วมส่งต่อพลังบวก!' : 'Your postcard reflection is now pinned to the wall. Thank you for sharing!'}</span>
            </div>
          </div>
        ` : ''}

        <!-- Zone Filters -->
        <div class="flex items-center justify-between flex-wrap gap-4 pb-2">
          <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" id="dashboard-filter-chips">
            ${zones.map(z => `
              <button
                class="dashboard-filter-btn px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${this.selectedDashboardFilter === z.id ? 'bg-forest-800 text-white shadow-sm' : 'bg-white text-slate-700 hover:bg-forest-50 border border-slate-200'}"
                data-zone="${z.id}"
              >
                ${isTh ? z.nameTh : z.nameEn}
              </button>
            `).join('')}
          </div>

          <div class="text-xs text-slate-500 font-medium">
            ${isTh ? `มีทั้งหมด <strong>${reflections.length}</strong> โปสการ์ด` : `Total <strong>${reflections.length}</strong> Postcards`}
          </div>
        </div>

        <!-- Postcard Grid -->
        <div id="postcards-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Rendered dynamically -->
        </div>
      </div>
    `;

    lucide.createIcons();

    // Render cards
    this.renderPostcardsList(reflections);

    // Setup Filter Chips
    this.container.querySelectorAll('.dashboard-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.selectedDashboardFilter = e.currentTarget.getAttribute('data-zone');
        this.container.querySelectorAll('.dashboard-filter-btn').forEach(b => {
          b.className = 'dashboard-filter-btn px-4 py-2 rounded-full text-xs font-semibold bg-white text-slate-700 hover:bg-forest-50 border border-slate-200 whitespace-nowrap';
        });
        e.currentTarget.className = 'dashboard-filter-btn px-4 py-2 rounded-full text-xs font-bold bg-forest-800 text-white shadow-sm whitespace-nowrap';
        this.renderPostcardsList(reflections);
      });
    });

    document.getElementById('btn-play-tournament-again')?.addEventListener('click', () => {
      this.startTournament();
    });
  }

  renderPostcardsList(allReflections) {
    const grid = document.getElementById('postcards-grid');
    if (!grid) return;

    const isTh = this.getLang() === 'th';

    let filtered = allReflections;
    if (this.selectedDashboardFilter !== 'all') {
      filtered = allReflections.filter(item => {
        const spot = tournamentSpots.find(s => s.id === item.spotId);
        return spot && spot.zoneKey === this.selectedDashboardFilter;
      });
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-16 text-center text-slate-400 text-sm">
          <i data-lucide="inbox" class="w-10 h-10 mx-auto mb-2 text-slate-300"></i>
          <p>${isTh ? 'ยังไม่มีโปสการ์ดในหมวดนี้ เป็นคนแรกที่มาเขียนความรู้สึกกัน!' : 'No reflections in this zone yet. Be the first to share one!'}</p>
        </div>
      `;
      lucide.createIcons();
      return;
    }

    grid.innerHTML = filtered.map(item => {
      const zoneName = isTh ? item.zoneNameTh : item.zoneNameEn;
      const reflection = isTh ? (item.reflectionTh || item.reflectionEn) : (item.reflectionEn || item.reflectionTh);
      const author = isTh ? (item.authorTh || item.authorEn) : (item.authorEn || item.authorTh);
      const formattedDate = new Date(item.createdAt).toLocaleDateString(isTh ? 'th-TH' : 'en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });

      return `
        <div class="postcard-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between group">
          <!-- Top Photo & Stamp -->
          <div class="relative h-48 overflow-hidden bg-slate-100">
            <img src="${item.imageUrl}" alt="${zoneName}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
            
            <!-- Zone Badge -->
            <span class="absolute top-3 left-3 bg-forest-950/80 backdrop-blur-md text-emerald-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-400/30">
              ${zoneName}
            </span>

            <!-- Postcard Stamp Style Top Right -->
            <div class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm border border-dashed border-emerald-700/50 rounded-lg px-2 py-1 text-[9px] font-mono text-emerald-900 font-bold uppercase tracking-wider">
              BJK • PARK
            </div>
          </div>

          <!-- Note Content -->
          <div class="p-5 flex-1 flex flex-col justify-between bg-[#fdfdfc]">
            <div class="space-y-2 mb-4">
              <i data-lucide="quote" class="w-4 h-4 text-emerald-600/40"></i>
              <p class="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                "${reflection}"
              </p>
            </div>

            <!-- Author & Like Row -->
            <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <div>
                <span class="font-bold text-slate-800 block text-[11px]">${author}</span>
                <span class="text-[10px] text-slate-400 font-mono">${formattedDate}</span>
              </div>

              <!-- Interactive Like Button -->
              <button
                class="btn-like-reflection flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${item.isLiked ? 'bg-red-50 text-red-600 font-bold' : 'bg-slate-50 text-slate-500 hover:text-red-500'}"
                data-id="${item.id}"
              >
                <i data-lucide="heart" class="w-3.5 h-3.5 ${item.isLiked ? 'fill-current text-red-500' : ''}"></i>
                <span class="likes-count text-[11px]">${item.likes || 0}</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    lucide.createIcons();

    // Attach Like button listeners
    grid.querySelectorAll('.btn-like-reflection').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const id = btn.getAttribute('data-id');
        const res = await window.reflectionService.toggleLike(id);
        if (res) {
          const countEl = btn.querySelector('.likes-count');
          const heartIcon = btn.querySelector('svg') || btn.querySelector('i');
          if (countEl) countEl.textContent = res.likes;

          if (res.isLiked) {
            btn.className = 'btn-like-reflection flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-50 text-red-600 font-bold transition-all';
          } else {
            btn.className = 'btn-like-reflection flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 text-slate-500 hover:text-red-500 transition-all';
          }
          lucide.createIcons();
        }
      });
    });
  }
}

// Instantiate on window load
document.addEventListener('DOMContentLoaded', () => {
  window.natureTournament = new NatureTournament();
});

