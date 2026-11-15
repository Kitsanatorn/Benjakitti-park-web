// Benjakitti Park Website Data
// Comprehensive database for zones, facilities, flora/fauna, events, FAQs, and full UI translations in Thai & English

const parkData = {
  th: {
    ui: {
      tickerAqi: 'คุณภาพอากาศวันนี้: <strong class="text-white">AQI 28 (ดีเยี่ยม)</strong> • PM 2.5: 6.8 µg/m³',
      tickerWeather: '29°C มีเมฆโปร่ง',
      navBrand: 'สวนป่าเบญจกิติ',
      navBrandSub: 'BENJAKITTI FOREST PARK',
      navHighlights: 'ไฮไลต์ & โซน',
      navMap: 'แผนที่ & นำทาง',
      navRoutes: 'วิ่ง & ปั่น',
      navSports: 'ศูนย์กีฬา',
      navTournament: 'สำรวจมุมโปรด',
      heroTournamentBtn: 'สำรวจมุมโปรด',
      navEvents: 'กิจกรรม',
      navEco: 'แหล่งเรียนรู้นิเวศ',
      navDirections: 'การเดินทาง & กฎ',
      ctaMap: 'เปิดแผนที่นำทาง',
      quickDirections: 'การเดินทาง (MRT/BTS)',
      zonesBadge: 'สำรวจพื้นที่ 450 ไร่',
      zonesTitle: 'โซนไฮไลต์ประจำสวนเบญจกิติ',
      zonesSubtitle: 'ผสมผสานระหว่างธรรมชาติสมบูรณ์แบบ แหล่งน้ำบำบัดชีวภาพ ทางเดินลอยฟ้า และสนามกีฬาครบวงจร',
      mapBadge: 'Interactive GIS Map',
      mapTitle: 'แผนที่แบบโต้ตอบและจุดอำนวยความสะดวก',
      mapSubtitle: 'คลิกที่หมุดบนแผนที่เพื่อดูรายละเอียดประตูทางเข้า-ออก จุดจอดรถ ห้องน้ำ ศูนย์กีฬา และจุดชมวิวพระอาทิตย์ตก',
      mapRecenter: 'ตำแหน่งสวนกลาง',
      mapLegendTitle: 'สัญลักษณ์:',
      legendGate: 'ประตูทางเข้า',
      legendParking: 'ลานจอดรถ',
      legendSports: 'ศูนย์กีฬา',
      legendFacility: 'ห้องน้ำ/บริการ',
      legendLandmark: 'จุดชมวิว Skywalk',
      detailBadge: 'ข้อมูลจุดที่เลือก',
      detailHint: 'คลิกหมุดเพื่อเปลี่ยน',
      detailDefaultTitle: 'เลือกจุดบนแผนที่',
      detailDefaultDesc: 'คลิกหมุดใดก็ได้บนแผนที่เพื่อดูรายละเอียดของประตูทางเข้า-ออก, ลานจอดรถยนต์, ห้องน้ำอารยสถาปัตย์ หรือศูนย์กีฬา',
      detailHours: 'เวลาบริการ:',
      detailAccess: 'การเข้าถึง:',
      detailAccessVal: 'Universal Design (รองรับวีลแชร์)',
      openGoogleMaps: 'นำทางด้วย Google Maps',
      routesBadge: 'เส้นทางออกกำลังกาย',
      routesTitle: 'เส้นทางวิ่ง ปั่นจักรยาน และเดินชมธรรมชาติ',
      routesSubtitle: 'แยกเส้นทางวิ่งและเลนจักรยานออกจากกันอย่างชัดเจน เพื่อความปลอดภัยสูงสุดของนักวิ่งและนักปั่นทุกคน',
      sportsBadge: 'ศูนย์กีฬาและสันทนาการสาธารณะ',
      sportsTitle: 'ศูนย์กีฬาเบญจกิติ (Benjakitti Sports Center)',
      sportsDesc: 'อาคารโกดังเก่าของโรงงานยาสูบที่ได้รับการปรับปรุงเป็นศูนย์กีฬาในร่มขนาดใหญ่ มีระบบระบายอากาศแบบธรรมชาติ (Cross Ventilation) เพื่อสุขภาพของคนเมือง เปิดให้ประชาชนทั่วไป <strong>เข้าใช้งานฟรีทุกสนามโดยไม่ต้องจองล่วงหน้า (Walk-in)</strong>',
      sportsHoursLabel: 'เวลาเปิดบริการ',
      sportsHoursVal: '05:00 - 21:00 น.',
      sportsHoursSub: 'เปิดบริการทุกวัน',
      sportsFeeLabel: 'ค่าบริการ',
      sportsFeeVal: 'ฟรี 100%',
      sportsFeeSub: 'เพื่อสุขภาพของทุกคน',
      sportsFacilityTitle: 'สนามกีฬาและสิ่งอำนวยความสะดวก',
      sportsBadmintonTitle: 'สนามแบดมินตัน',
      sportsBadmintonDesc: '10 คอร์ต พื้นยางมาตรฐาน',
      sportsBasketballTitle: 'สนามบาสเกตบอล',
      sportsBasketballDesc: '3 สนามมาตรฐาน FIBA',
      sportsFutsalTitle: 'สนามฟุตซอล',
      sportsFutsalDesc: '2 สนาม พื้นยางในร่ม',
      sportsSkateTitle: 'ลานสเก็ตบอร์ด',
      sportsSkateDesc: 'Outdoor Skate Park & Bowl',
      sportsPickleTitle: 'พิกเคิลบอล & ปิงปอง',
      sportsPickleDesc: 'พร้อมตาข่ายและโต๊ะมาตรฐาน',
      sportsShowerTitle: 'ห้องเปลี่ยนชุด & ล็อกเกอร์',
      sportsShowerDesc: 'ห้องน้ำสะอาดและจุดดื่มน้ำฟรี',
      sportsRules: '<strong>กติกาการใช้งาน:</strong> นำอุปกรณ์และลูกกีฬามาเอง สวมรองเท้ากีฬาที่เหมาะสม และผลัดเปลี่ยนหมุนเวียนกันเล่นเพื่อความทั่วถึงของประชาชนทุกคน',
      eventsBadge: 'กิจกรรมและเทศกาล',
      eventsTitle: 'ปฏิทินกิจกรรมในสวน (Events Calendar)',
      ecoBadge: 'ห้องเรียนธรรมชาติใจกลางเมือง',
      ecoTitle: 'ฐานข้อมูลพรรณไม้และสัตว์ในระบบนิเวศ',
      ecoSubtitle: 'สวนป่าเบญจกิติเป็นแหล่งที่อยู่ของนกน้ำกว่า 50 ชนิด พืชชุ่มน้ำดูดซับสารพิษ และต้นไม้ใหญ่ดูดซับคาร์บอน',
      catAll: 'ทั้งหมด',
      catWetland: '🌿 พืชชุ่มน้ำบำบัด',
      catTrees: '🌳 ต้นไม้ใหญ่ประจำถิ่น',
      catBirds: '🦅 นกในสวน',
      catFauna: '🦋 สัตว์และแมลง',
      storyBadge: 'เรื่องราวความยั่งยืน',
      visitBadge: 'คู่มือผู้มาเยือน',
      visitTitle: 'ข้อมูลการเดินทางและกฎระเบียบของสวน',
      visitSubtitle: 'เตรียมความพร้อมก่อนมาเยือน เพื่อความปลอดภัยและความสุขในการใช้งานร่วมกันของทุกคน',
      rulesTitle: 'กฎระเบียบและข้อควรปฏิบัติในสวน',
      faqTitle: 'คำถามที่พบบ่อย (FAQ)',
      audioLabel: 'เสียงธรรมชาติในสวน',
      audioStatusPlay: 'กำลังเล่นเสียงลม & นก (คลิกเพื่อปิด)',
      audioStatusStop: 'คลิกเพื่อฟังเสียงลม & นก',
      footerBio: 'พื้นที่ชุ่มน้ำใจกลางกรุงเทพมหานคร เชื่อมต่อสวนลุมพินีด้วยสะพานเขียว ออกแบบภายใต้แนวคิดเมืองฟองน้ำ (Sponge City) และการฟื้นฟูระบบนิเวศเมืองเพื่อประชาชนทุกคน',
      footerPhone: 'ศูนย์ประสานงานสวน: 02-254-1263 (04:30 - 22:00 น.)',
      footerQuickTitle: 'เมนูลัด',
      footerEmergencyTitle: 'บริการฉุกเฉิน',
      footerHours: '<strong>เวลาทำการ:</strong> 04:30 - 22:00 น. ทุกวัน',
      footerSec: '<strong>หน่วยพยาบาลและ รปภ.:</strong> ประจำการตลอด 24 ชั่วโมง',
      footerBma: '<strong>สายด่วน กทม.:</strong> 1555',
      footerMapsBtn: 'เปิดใน Google Maps',
      footerCopy: '© 2026 สวนป่าเบญจกิติ (Benjakitti Forest Park) • กรุงเทพมหานคร (BMA)',
      footerTag1: 'ออกแบบเพื่อคนเมืองและสิ่งแวดล้อม',
      footerTag2: 'Zero-Waste & Clean Air',
      floraRoleLabel: 'บทบาทต่อระบบนิเวศ',
      floraZoneLabel: 'พิกัดในสวน: ',
      floraViewDetail: 'ดูข้อมูล'
    },
    hero: {
      tagline: "",
      title: "สวนป่าเบญจกิติ",
      subtitle: "พื้นที่ชุ่มน้ำในเมือง แหล่งเรียนรู้นิเวศ และพื้นที่พักผ่อนหย่อนใจระดับโลก บนพื้นที่กว่า 450 ไร่",
      exploreBtn: "สำรวจแผนที่ & โซน",
      eventsBtn: "ปฏิทินกิจกรรมในสวน",
      hours: "04:30 - 22:00 น. (เปิดทุกวัน)",
      statusOpen: "เปิดให้บริการอยู่ในขณะนี้ (04:30 - 22:00 น.)",
      statusClosed: "ปิดทำการชั่วคราว (เปิด 04:30 น.)",
    },
    quickInfo: {
      hoursTitle: "เวลาเปิดทำการ",
      hoursTime: "04:30 - 22:00 น.",
      hoursDetail: "เปิดทุกวัน ไม่มีวันหยุด",
      weatherTitle: "สภาพอากาศสวน",
      weatherTemp: "29°C ลมพัดสบาย",
      weatherHum: "ความชื้น 68% • UV ปานกลาง",
      aqiTitle: "ดัชนีคุณภาพอากาศ",
      aqiValue: "28 AQI (ดีมาก)",
      aqiPm: "PM 2.5: 6.8 µg/m³ • อากาศบริสุทธิ์",
      entryTitle: "ค่าเข้าชม",
      entryValue: "เข้าฟรีทุกคน",
      entryDetail: "สวนสาธารณะเพื่อทุกคน"
    },
    highlightZones: [
      {
        id: "forest-wetland",
        name: "สวนป่าและพื้นที่ชุ่มน้ำ",
        nameEn: "Forest & Wetland Park",
        badge: "ไฮไลต์ธรรมชาติ",
        desc: "เกาะระบบนิเวศและพื้นที่ชุ่มน้ำ 4 บึงใหญ่ ทำหน้าที่หน่วงน้ำฝนและบำบัดน้ำเสียธรรมชาติ พร้อมพรรณไม้ชายน้ำกว่า 300 ชนิด",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Benjakitti_Park%2C_Bangkok_2.jpg",
        stats: "พื้นที่ 320 ไร่ | 4 บึงบำบัด"
      },
      {
        id: "skywalk",
        name: "ทางเดินลอยฟ้า Skywalk",
        nameEn: "Elevated Skywalk (1.6 km)",
        badge: "จุดถ่ายรูปยอดนิยม",
        desc: "สะพานคนเดินยกระดับทอดยาว 1.6 กิโลเมตร ชมทิวทัศน์ป่าในเมืองแบบพาโนรามา เชื่อมต่อจุดชมวิวพระอาทิตย์ตกดินอันงดงาม",
        img: "https://upload.wikimedia.org/wikipedia/commons/f/f5/2013-10-12_10.37.29_%28600x800%29.jpg",
        stats: "ยาว 1.6 กม. | สูง 5-8 เมตร"
      },
      {
        id: "sports-center",
        name: "ศูนย์กีฬาเบญจกิติ",
        nameEn: "Sports Center",
        badge: "ฟิตเนส & สันทนาการ",
        desc: "รีโนเวทจากโกดังโรงงานยาสูบเดิม สู่สนามกีฬาระดับมาตรฐานทั้งบาสเกตบอล แบดมินตัน ฟุตซอล พิกเคิลบอล เทเบิลเทนนิส และลานสเก็ต",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Benjakitti_Park_Panorama%2C_Bangkok.jpg",
        stats: "7 ชนิดกีฬา | เข้าใช้งานฟรี Walk-in"
      },
      {
        id: "water-park",
        name: "สวนน้ำและเลนจักรยาน",
        nameEn: "Water Park & Cycling Track",
        badge: "ออกกำลังกายริมน้ำ",
        desc: "สระน้ำขนาดใหญ่ 130 ไร่ พร้อมเลนจักรยานและลู่วิ่งยางสังเคราะห์รอบบึง มีวิวตึกระฟ้าสะท้อนผิวน้ำที่สวยที่สุดในกรุงเทพฯ",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Benjakitti_Park%2C_Bangkok.jpg",
        stats: "ลู่ปั่น 2.8 กม. | ลู่วิ่ง 1.8 กม."
      },
      {
        id: "dog-park",
        name: "สวนสุนัขเบญจกิติ (Dog Park)",
        nameEn: "Benjakitti Dog Park",
        badge: "สัตว์เลี้ยงเข้าได้เฉพาะโซนนี้",
        desc: "พื้นที่สำหรับพาน้องหมามาวิ่งเล่นอย่างปลอดภัย มีรั้วรอบขอบชิด ถุงเก็บมูลสุนัข และจุดบริการน้ำดื่มสัตว์เลี้ยง (ต้องลงทะเบียน)",
        img: "https://upload.wikimedia.org/wikipedia/commons/a/af/Beagle_at_Benjakitti_Dog_Park.jpg",
        stats: "เปิด 05:00 - 21:00 น. | ฟรี"
      },
      {
        id: "amphitheater",
        name: "ลานหญ้าริมน้ำสำหรับกิจกรรมกลางแจ้ง",
        nameEn: "Lakeside Lawn for Outdoor Events",
        badge: "กิจกรรมชุมชน",
        desc: "ลานหญ้าริมบึงสำหรับกิจกรรมชุมชน ปิกนิกยามเย็น และการจัดแสดงกลางแจ้งที่เปิดโล่งต่อผู้คนมากมาย",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Panorama_of_Benjakitti_Park%2C_Bangkok_2.jpg",
        stats: "จุได้ 2,000+ คน | ฟรีอีเวนต์"
      }
    ],
    mapFilters: [
      { id: "all", name: "ทั้งหมด" },
      { id: "gate", name: "🚪 ทางเข้า-ออก & เชื่อมต่อ" },
      { id: "parking", name: "🅿️ ที่จอดรถ" },
      { id: "sports", name: "🏸 ศูนย์กีฬา & สันทนาการ" },
      { id: "facility", name: "🚻 ห้องน้ำ & จุดปฐมพยาบาล" },
      { id: "landmark", name: "📸 จุดไฮไลต์ & ชมวิว" }
    ],
    mapPoints: [
      {
        id: "p1",
        lat: 13.7275,
        lng: 100.5568,
        category: "gate",
        name: "ประตู 1: ฝั่ง MRT ศูนย์ฯ สิริกิติ์ (QSNCC)",
        desc: "ทางเข้าหลักยอดนิยม เดินเพียง 200 ม. จาก MRT ประตู 3 มีลานเชื่อมต่อกว้างขวาง และทางเข้า Skywalk",
        hours: "04:30 - 22:00 น."
      },
      {
        id: "p2",
        lat: 13.7335,
        lng: 100.5582,
        category: "gate",
        name: "ประตู 2: ฝั่งถนนรัชดาภิเษก / ซอยไผ่สิงโต",
        desc: "ทางเข้าฝั่งทิศตะวันออก ใกล้จุดจอดรถยนต์ และทางเชื่อมเลนจักรยาน",
        hours: "04:30 - 22:00 น."
      },
      {
        id: "p3",
        lat: 13.7315,
        lng: 100.5525,
        category: "gate",
        name: "ประตู 3: ทางเชื่อมสะพานเขียว (Green Mile to Lumphini)",
        desc: "ทางเดินลอยฟ้าเชื่อมไปยังสวนลุมพินี ระยะทาง 1.6 กม. เหมาะสำหรับวิ่งและปั่นจักรยานข้ามสวน",
        hours: "05:00 - 21:00 น."
      },
      {
        id: "p4",
        lat: 13.7360,
        lng: 100.5558,
        category: "gate",
        name: "ประตู 4: ฝั่งสุขุมวิท ซอย 10",
        desc: "ทางเข้าคนเดินและจักรยานจากถนนสุขุมวิท ร่มรื่นและเงียบสงบ",
        hours: "05:00 - 20:00 น."
      },
      {
        id: "p5",
        lat: 13.7282,
        lng: 100.5580,
        category: "parking",
        name: "ลานจอดรถยนต์ 1 (ลานจอดฝั่งศูนย์ประชุม)",
        desc: "รองรับรถยนต์ประมาณ 180 คัน มีจุดจอดรถคนพิการ และสถานีชาร์จ EV (ฟรี 2 ชม. แรก)",
        hours: "04:30 - 22:00 น."
      },
      {
        id: "p6",
        lat: 13.7340,
        lng: 100.5560,
        category: "parking",
        name: "ลานจอดรถยนต์ 2 (ฝั่งสวนป่า/รพ.ยาสูบ)",
        desc: "รองรับรถยนต์ประมาณ 120 คัน และที่จอดรถจักรยาน/จักรยานยนต์ สะดวกต่อการเข้าสู่โซนกีฬา",
        hours: "04:30 - 22:00 น."
      },
      {
        id: "p7",
        lat: 13.7325,
        lng: 100.5550,
        category: "sports",
        name: "ศูนย์กีฬาในร่มเบญจกิติ (Indoor Sports Arena)",
        desc: "สนามแบดมินตัน (10 คอร์ต), บาสเกตบอล (3 สนาม), ฟุตซอล (2 สนาม), เทเบิลเทนนิส และพิกเคิลบอล ติดแอร์ระบายอากาศธรรมชาติ เปิดให้ประชาชนเข้าใช้ฟรีแบบ Walk-in",
        hours: "05:00 - 21:00 น. (เปิดทุกวัน)"
      },
      {
        id: "p8",
        lat: 13.7330,
        lng: 100.5540,
        category: "sports",
        name: "ลานสเก็ตบอร์ด & โรลเลอร์เบลด (Skate Park)",
        desc: "ลานสเก็ตมาตรฐานกลางแจ้ง พร้อม Bowl, Rail, Ledge เหมาะสำหรับทั้งมือใหม่และมือโปร",
        hours: "05:00 - 21:30 น."
      },
      {
        id: "p9",
        lat: 13.7302,
        lng: 100.5545,
        category: "landmark",
        name: "จุดชมวิวพระอาทิตย์ตกบน Skywalk",
        desc: "จุดชมวิวพระอาทิตย์ตกยอดนิยมบนทางเดินลอยฟ้าชมบึงน้ำ ร่มเงาต้นไม้ และฉากหลังตึกระฟ้าสุขุมวิทได้แบบกว้าง",
        hours: "05:00 - 21:30 น."
      },
      {
        id: "p10",
        lat: 13.7290,
        lng: 100.5552,
        category: "facility",
        name: "ศูนย์บริการนักท่องเที่ยว & หน่วยปฐมพยาบาล",
        desc: "มีเจ้าหน้าที่ประจำการ เจ้าหน้าที่รักษาความปลอดภัย รถกอล์ฟพยาบาลฉุกเฉิน และจุดแจกแผนที่",
        hours: "04:30 - 22:00 น."
      },
      {
        id: "p11",
        lat: 13.7288,
        lng: 100.5570,
        category: "facility",
        name: "สุขาและห้องน้ำอารยสถาปัตย์ (Universal Design Restrooms)",
        desc: "ห้องน้ำสะอาด ติดเครื่องปรับอากาศ รองรับเก้าอี้รถเข็น มีห้องให้นมบุตร และจุดบริการน้ำดื่มฟรี",
        hours: "04:30 - 22:00 น."
      },
      {
        id: "p12",
        lat: 13.7310,
        lng: 100.5575,
        category: "landmark",
        name: "ลานอัฒจันทร์หญ้าริมน้ำ (Outdoor Amphitheater)",
        desc: "สถานที่จัดคอนเสิร์ตในสวนและเวทีแสดงศิลปวัฒนธรรม บรรยากาศโปร่งสบายริมผืนน้ำใหญ่",
        hours: "04:30 - 22:00 น."
      }
    ],
    routes: [
      {
        id: "running-outer",
        type: "running",
        typeLabel: "🏃‍♂️ ทางวิ่ง",
        title: "เส้นทางวิ่งรอบใหญ่ (Forest & Water Park Loop)",
        distance: "5.8 กม.",
        surface: "พื้นยางโพลียูรีเทนซับแรง & ทางเรียบ",
        level: "ระดับปานกลาง - นักวิ่งระยะ 5k / 10k",
        features: ["มีหลักบอกระยะทุก 100 เมตร", "ไฟส่องสว่างตลอดทาง", "จุดน้ำดื่ม 4 จุด", "ไม่มีจักรยานปน"]
      },
      {
        id: "cycling-track",
        type: "cycling",
        typeLabel: "🚴 เลนจักรยาน",
        title: "เลนจักรยานเฉพาะรอบสวนป่าและสวนน้ำ",
        distance: "3.2 กม.",
        surface: "แอสฟัลต์เรียบเคลือบสีกันลื่น (สีฟ้า/เขียว)",
        level: "ทุกระดับ (จำกัดความเร็ว 25 กม./ชม.)",
        features: ["ทางวันเวย์ปลอดภัย", "แยกจากทางคนเดินเด็ดขาด", "จุดจอดจักรยาน", "ห้ามเดินหรือวิ่งในเลนนี้"]
      },
      {
        id: "skywalk-trail",
        type: "walking",
        typeLabel: "🚶‍♀️ ทางเดิน Skywalk",
        title: "เส้นทางเดินศึกษาธรรมชาติบน Skywalk",
        distance: "1.6 กม.",
        surface: "โครงสร้างสะพานเหล็กโปร่งและราวจับสแตนเลส",
        level: "ง่าย / Universal Design (มีทางลาดสำหรับวีลแชร์)",
        features: ["ชมวิวพื้นที่ชุ่มน้ำมุมสูง", "ป้าย QR ข้อมูลพืชและนก", "จุดพักร่มเงา", "ห้ามนำจักรยานขึ้น"]
      }
    ],
    gettingHere: [
      {
        icon: "train",
        color: "blue",
        title: "รถไฟฟ้า MRT สายสีน้ำเงิน",
        desc: "ลงที่สถานี <strong>ศูนย์การประชุมแห่งชาติสิริกิติ์ (QSNCC)</strong> ออกทางออกที่ 3 เดินเลี้ยวซ้ายเพียง 200 เมตร เข้าสู่ประตู 1 ของสวนป่าเบญจกิติได้ทันที",
        badge: "⚡ แนะนำ สะดวกและเร็วที่สุด"
      },
      {
        icon: "footprints",
        color: "emerald",
        title: "BTS อโศก & สะพานเขียว",
        desc: "จาก BTS อโศก เดินทะลุซอยสุขุมวิท 10 หรือเดิน/ปั่นจักรยานข้ามมาจาก <strong>สวนลุมพินี</strong> ผ่านทางเดินลอยฟ้า \"สะพานเขียว (Green Mile)\" ระยะทาง 1.6 กม.",
        badge: "🚲 วิวสวย เหมาะสำหรับสายปั่น"
      },
      {
        icon: "car",
        color: "amber",
        title: "รถยนต์ส่วนตัว & ที่จอดรถ",
        desc: "มีลานจอดรถยนต์ 2 จุด (ฝั่งศูนย์ฯ สิริกิติ์ และฝั่งโรงงานยาสูบ) รองรับกว่า 300 คัน จอดฟรีในช่วงเวลาเปิดทำการ พร้อมจุดจอดรถคนพิการและสถานีชาร์จ EV",
        badge: "🅿️ ที่จอดฟรี 04:30 - 22:00 น."
      }
    ],
    floraFauna: [
      {
        id: "f1",
        category: "wetland",
        name: "กกอียิปต์ / กกกลม",
        sciName: "Cyperus papyrus",
        role: "บำบัดน้ำเสีย & ดักตะกอน",
        desc: "พืชน้ำที่มีระบบรากหนาแน่น ดูดซับสารอินทรีย์ ไนโตรเจน และฟอสฟอรัสในน้ำเสียจากชุมชน ช่วยให้น้ำในบึงใสสะอาดอย่างเป็นธรรมชาติ",
        zone: "บึงชุ่มน้ำหมายเลข 2 และ 3",
        icon: "🌿"
      },
      {
        id: "f2",
        category: "trees",
        name: "ต้นจิกน้ำ (Barringtonia acutangula)",
        sciName: "Barringtonia acutangula",
        role: "ต้นไม้ชายน้ำ & ดอกห้อยระย้า",
        desc: "ไม้ต้นผลัดใบที่ชอบพื้นที่ชุ่มน้ำ ออกช่อดอกสีแดงสดห้อยระย้าสวยงามในยามเช้า มีความทนทานต่อน้ำท่วมขังสูง",
        zone: "ริมขอบเกาะดินและแนวทางเดิน Skywalk",
        icon: "🌸"
      },
      {
        id: "f3",
        category: "birds",
        name: "นกกาน้ำเล็ก (Little Cormorant)",
        sciName: "Microcarbo niger",
        role: "ดัชนีชี้วัดความอุดมสมบูรณ์ของปลา",
        desc: "นกน้ำที่ชอบดำน้ำจับปลา มักเกาะกางปีกผึ่งแดดบนกิ่งไม้แห้งกลางบึงน้ำเบญจกิติ สะท้อนถึงห่วงโซ่อาหารทางน้ำที่สมบูรณ์",
        zone: "เกาะกลางน้ำและบึงใหญ่",
        icon: "🦅"
      },
      {
        id: "f4",
        category: "birds",
        name: "นกกระเต็นอกขาว (White-throated Kingfisher)",
        sciName: "Halcyon smyrnensis",
        role: "นักล่าแมลงและสัตว์น้ำตัวเล็ก",
        desc: "นกสีสันสดใส มีหัวและอกสีขาว ปีกสีฟ้าคราม มักเกาะนิ่งบนราวสะพานหรือกิ่งไม้เพื่อพุ่งจับเหยื่อ",
        zone: "พุ่มไม้ริมพื้นที่ชุ่มน้ำ",
        icon: "🐦"
      },
      {
        id: "f5",
        category: "trees",
        name: "ต้นทองกวาว (Flame of the Forest)",
        sciName: "Butea monosperma",
        role: "ดูดซับคาร์บอน & ให้ร่มเงา",
        desc: "ไม้ยืนต้นประจำถิ่น ผลิดอกสีส้มสดสะพรั่งช่วงเดือนมกราคม - มีนาคม สร้างทัศนียภาพสีส้มตัดกับผืนฟ้าใจกลางกรุง",
        zone: "โซนเนินดินสวนป่าทิศเหนือ",
        icon: "🍁"
      },
      {
        id: "f6",
        category: "fauna",
        name: "ผีเสื้อหนอนคูณธรรมดา (Common Grass Yellow)",
        sciName: "Eurema hecabe",
        role: "ผู้ผสมเกสรในระบบนิเวศเมือง",
        desc: "ผีเสื้อปีกสีเหลืองสดใส บินตอมดอกหญ้าและพืชคลุมดินในสวน เป็นดัชนีชี้วัดว่าสวนแห่งนี้ปลอดสารเคมีและยาฆ่าแมลง 100%",
        zone: "ทุ่งหญ้าและลานดอกไม้ป่า",
        icon: "🦋"
      }
    ],
    sustainability: {
      title: "จากโรงงานยาสูบ สู่ 'ฟองน้ำซับน้ำ' ของกรุงเทพฯ",
      subtitle: "The Sponge City Concept & Ecological Restoration",
      principles: [
        {
          num: "01",
          title: "เมืองฟองน้ำ (Sponge City)",
          desc: "พื้นที่ลุ่มต่ำ 4 บึง รองรับน้ำฝนชะลอน้ำหลากได้กว่า 128,000 ลูกบาศก์เมตร ป้องกันน้ำท่วมพื้นที่อโศก-คลองเตย"
        },
        {
          num: "02",
          title: "บำบัดน้ำเสียชีวภาพ (Phytoremediation)",
          desc: "นำน้ำเสียจากคลองไผ่สิงโตวันละ 1,600 ลบ.ม. ผ่านพืชบำบัดน้ำและชั้นกรวดทราย จนกลายเป็นน้ำสะอาดกลับคืนสู่เมือง"
        },
        {
          num: "03",
          title: "ป่ากักเก็บคาร์บอน (Carbon Sink)",
          desc: "ปลูกต้นไม้ใหม่กว่า 8,700 ต้น ร่วมกับพรรณไม้เดิม ช่วยลดอุณหภูมิเกาะความร้อนเมือง (Heat Island Effect) ได้ 2-3°C"
        },
        {
          num: "04",
          title: "Circular Economy (รักษ์โลก)",
          desc: "นำโครงสร้างคอนกรีตและโกดังเดิมของโรงงานยาสูบมารีไซเคิลเป็นทางเดิน กำแพงกันดิน และอาคารศูนย์กีฬา"
        }
      ]
    },
    events: [
      {
        id: "ev1",
        date: "เสาร์ที่ 21 พ.ย. 2026",
        time: "17:00 - 19:30 น.",
        title: "ดนตรีในสวนเบญจกิติ (Symphony in the Park)",
        location: "ลานอัฒจันทร์กลางแจ้ง (Amphitheater)",
        category: "ดนตรี & ศิลปะ",
        desc: "การแสดงดนตรีคลาสสิกและแจ๊สฟังสบายยามอาทิตย์อัสดง นำเสื่อมาปิกนิกใต้แสงดาวได้ฟรี",
        free: true
      },
      {
        id: "ev2",
        date: "อาทิตย์ที่ 29 พ.ย. 2026",
        time: "06:30 - 08:30 น.",
        title: "Bird Watching Walk: นักสืบนกในป่าเมือง",
        location: "จุดนัดพบ ศูนย์บริการนักท่องเที่ยว",
        category: "เวิร์กชอปนิเวศ",
        desc: "เดินชมนกประจำถิ่นและนกอพยพพร้อมวิทยากรผู้เชี่ยวชาญจากสมาคมอนุรักษ์นก (มีกล้องส่องทางไกลให้ยืม)",
        free: true
      },
      {
        id: "ev3",
        date: "เสาร์ที่ 5 ธ.ค. 2026",
        time: "05:00 - 08:00 น.",
        title: "Benjakitti Eco Night/Morning Run 5K & 10K",
        location: "ลู่ยางรอบสวนป่า",
        category: "กีฬา & สุขภาพ",
        desc: "งานวิ่งเพื่อการกุศลและอนุรักษ์พื้นที่สีเขียว วิ่งรับลมหนาวใจกลางกรุง (รับสมัครล่วงหน้า)",
        free: false
      },
      {
        id: "ev4",
        date: "ทุกวันพุธและศุกร์",
        time: "17:30 - 18:30 น.",
        title: "คลาสโยคะและยืดเหยียดบนสนามหญ้า (Sunset Yoga)",
        location: "สนามหญ้าริมบึงน้ำ",
        category: "กีฬา & สุขภาพ",
        desc: "ชาร์จพลังกายและคลายเครียดหลังเลิกงานกับครูฝึกมืออาชีพ นำเสื่อโยคะส่วนตัวมาเข้าร่วมได้ฟรี",
        free: true
      }
    ],
    rules: [
      {
        icon: "🚭",
        title: "ห้ามสูบบุหรี่และบุหรี่ไฟฟ้า",
        desc: "พื้นที่สวนทั้งหมดเป็นเขตปลอดบุหรี่ 100% ตามกฎหมาย ฝ่าฝืนมีโทษปรับสูงสุด 5,000 บาท"
      },
      {
        icon: "🐕",
        title: "สัตว์เลี้ยงเข้าเฉพาะโซน Dog Park",
        desc: "ไม่อนุญาตให้นำสัตว์เลี้ยงเข้าในโซนสวนป่าและ Skywalk สามารถเข้าได้เฉพาะที่ Benjakitti Dog Park (ฝั่งสวนน้ำ) โดยต้องใส่สายจูงเสมอ"
      },
      {
        icon: "🛸",
        title: "การบินโดรนต้องได้รับอนุญาต",
        desc: "ห้ามบินโดรนทุกชนิด เว้นแต่ได้รับอนุญาตเป็นลายลักษณ์อักษรจากกรุงเทพมหานครและ กพท. ล่วงหน้า"
      },
      {
        icon: "🚲",
        title: "ปฏิบัติตามเลนวิ่งและปั่น",
        desc: "ห้ามวิ่งหรือเดินบนเลนจักรยาน และห้ามนำจักรยานขึ้นบน Skywalk เพื่อความปลอดภัยของผู้ใช้บริการทุกคน"
      },
      {
        icon: "♻️",
        title: "สวนปลอดขยะ (Zero Waste Policy)",
        desc: "กรุณานำขยะของท่านกลับไปทิ้ง หรือแยกทิ้งลงในถังขยะคัดแยก 4 สีที่จัดเตรียมไว้ตามจุดบริการ"
      },
      {
        icon: "📷",
        title: "การถ่ายภาพเชิงพาณิชย์",
        desc: "ถ่ายภาพเล่น/มือถือทั่วไปฟรี หากเป็นการถ่ายโฆษณา Pre-wedding หรือใช้อุปกรณ์จัดไฟใหญ่ ต้องทำเรื่องขออนุญาตสำนักงานสวนล่วงหน้า"
      }
    ],
    faqs: [
      {
        q: "มีบริการเช่าจักรยานในสวนเบญจกิติหรือไม่?",
        a: "ปัจจุบันในสวนเบญจกิติมีจุดจอดจักรยาน แต่ไม่มีบริการร้านเช่าจักรยานภายในสวน แนะนำให้นำจักรยานส่วนตัวมา หรือใช้บริการจักรยานสาธารณะจากจุดเชื่อมต่อภายนอก"
      },
      {
        q: "มีที่จอดรถยนต์หรือไม่ และคิดค่าบริการอย่างไร?",
        a: "มีลานจอดรถยนต์ 2 จุดหลัก (ฝั่งศูนย์ฯ สิริกิติ์ และฝั่งโรงงานยาสูบเดิม) รองรับรวมกว่า 300 คัน จอดฟรีในช่วงเวลาเปิดทำการ (04:30 - 22:00 น.) ทั้งนี้ วันที่มีงานใหญ่ที่ศูนย์ฯ สิริกิติ์ ที่จอดอาจเต็มเร็ว"
      },
      {
        q: "สนามกีฬาในร่มใช้งานอย่างไร ต้องจองล่วงหน้าไหม?",
        a: "สนามกีฬาในร่ม (แบดมินตัน, บาสเกตบอล, ฟุตซอล, เทเบิลเทนนิส) เปิดให้บริการฟรีแก่ประชาชนทั่วไปแบบ Walk-in (05:00 - 21:00 น.) สามารถเข้ามาลงชื่อและผลัดเปลี่ยนหมุนเวียนกันเล่นได้ตามกติกาสนาม โดยเตรียมอุปกรณ์ส่วนตัวมาเอง"
      },
      {
        q: "มีห้องอาบน้ำและล็อกเกอร์ฝากของหรือไม่?",
        a: "บริเวณอาคารศูนย์กีฬาในร่ม มีห้องเปลี่ยนเสื้อผ้า ห้องน้ำ และตู้ล็อกเกอร์ให้บริการฟรี (แนะนำพกแม่กุญแจส่วนตัวมาสำหรับล็อกเกอร์บางจุด)"
      },
      {
        q: "เดินทางด้วยรถไฟฟ้าสายไหนสะดวกที่สุด?",
        a: "สะดวกที่สุดคือ รถไฟฟ้า MRT สายสีน้ำเงิน ลงสถานี 'ศูนย์การประชุมแห่งชาติสิริกิติ์' ออกทางออก 3 เดินเพียง 2-3 นาทีเข้าสู่ประตู 1 ของสวนได้ทันที"
      },
      {
        q: "ผู้ใช้วีลแชร์หรือรถเข็นเด็กสามารถใช้งานได้สะดวกไหม?",
        a: "สวนถูกออกแบบตามหลัก Universal Design 100% มีทางลาดมาตรฐานเชื่อมต่อขึ้น Skywalk ทุกจุด มีห้องน้ำคนพิการ และพื้นทางเดินเรียบ ปลอดภัยสำหรับวีลแชร์และรถเข็นเด็ก"
      },
      {
        q: "เปิดไฟตอนกลางคืนถึงกี่โมง และมีความปลอดภัยไหม?",
        a: "สวนเปิดไฟส่องสว่างทั่วบริเวณ Skywalk ลู่วิ่ง และเลนจักรยาน ตั้งแต่เวลา 18:00 - 22:00 น. มีเจ้าหน้าที่รักษาความปลอดภัยตรวจตราตลอด 24 ชั่วโมง และมีกล้องวงจรปิด CCTV ครอบคลุมทั่วสวน"
      }
    ]
  },
  en: {
    ui: {
      tickerAqi: 'Air Quality Today: <strong class="text-white">AQI 28 (Good)</strong> • PM 2.5: 6.8 µg/m³',
      tickerWeather: '29°C Partly Cloudy',
      navBrand: 'Benjakitti Forest Park',
      navBrandSub: 'BANGKOK URBAN OASIS',
      navHighlights: 'Highlights',
      navMap: 'Map',
      navRoutes: 'Routes',
      navSports: 'Sports',
      navTournament: 'Explore the Park',
      heroTournamentBtn: 'Explore the Park',
      navEvents: 'Events',
      navEco: 'Eco',
      navDirections: 'Visit',
      ctaMap: 'Open Park',
      quickDirections: 'Getting Here (MRT/BTS)',
      zonesBadge: 'Explore 450 Rai',
      zonesTitle: 'Benjakitti Highlight Zones',
      zonesSubtitle: 'A harmonious blend of urban wetlands, elevated skywalks, and sports pavilions.',
      mapBadge: 'Interactive GIS Map',
      mapTitle: 'Interactive Map & Park Amenities',
      mapSubtitle: 'Click markers on the map to explore gates, parking, restrooms, sports courts, and sunset viewpoints.',
      mapRecenter: 'Center Park',
      mapLegendTitle: 'Legend:',
      legendGate: 'Entrances',
      legendParking: 'Parking',
      legendSports: 'Sports Arena',
      legendFacility: 'Restrooms/Help',
      legendLandmark: 'Skywalk Views',
      detailBadge: 'Selected Location Info',
      detailHint: 'Click pin to switch',
      detailDefaultTitle: 'Select a Point on Map',
      detailDefaultDesc: 'Click any marker to view details about entrances, parking lots, accessible restrooms, or sports courts.',
      detailHours: 'Hours:',
      detailAccess: 'Access:',
      detailAccessVal: 'Universal Design (Wheelchair Accessible)',
      openGoogleMaps: 'Navigate in Google Maps',
      routesBadge: 'Fitness Routes',
      routesTitle: 'Running, Cycling & Nature Walk Routes',
      routesSubtitle: 'Strictly separated running and cycling lanes to ensure safety for all athletes and visitors.',
      sportsBadge: 'Public Sports & Recreation Center',
      sportsTitle: 'Benjakitti Sports Center',
      sportsDesc: 'Transformed from heritage tobacco factory warehouses into a vast indoor sports pavilion with natural cross-ventilation. <strong>Free walk-in access for all public visitors with no advance booking required.</strong>',
      sportsHoursLabel: 'Operating Hours',
      sportsHoursVal: '05:00 AM - 09:00 PM',
      sportsHoursSub: 'Open Daily',
      sportsFeeLabel: 'Admission Fee',
      sportsFeeVal: '100% Free',
      sportsFeeSub: 'For Public Wellness',
      sportsFacilityTitle: 'Courts & Facilities Breakdown',
      sportsBadmintonTitle: 'Badminton Courts',
      sportsBadmintonDesc: '10 standard rubber courts',
      sportsBasketballTitle: 'Basketball Courts',
      sportsBasketballDesc: '3 FIBA standard courts',
      sportsFutsalTitle: 'Futsal Pitches',
      sportsFutsalDesc: '2 indoor pitches',
      sportsSkateTitle: 'Skate Park',
      sportsSkateDesc: 'Outdoor skate park & bowl',
      sportsPickleTitle: 'Pickleball & Table Tennis',
      sportsPickleDesc: 'Equipped with nets and tables',
      sportsShowerTitle: 'Locker & Shower Rooms',
      sportsShowerDesc: 'Restrooms and chilled refill water',
      sportsRules: '<strong>Court Rules:</strong> Bring your own sports gear and balls, wear proper non-marking sports shoes, and rotate games fairly.',
      eventsBadge: 'Events & Community',
      eventsTitle: 'Park Events Calendar',
      ecoBadge: 'Urban Living Classroom',
      ecoTitle: 'Flora, Fauna & Biodiversity Sanctuary',
      ecoSubtitle: 'Benjakitti is a sanctuary for over 50 species of wetland birds, water-cleansing sedges, and carbon-absorbing native trees.',
      catAll: 'All',
      catWetland: '🌿 Wetland Plants',
      catTrees: '🌳 Native Heritage Trees',
      catBirds: '🦅 Park Birds',
      catFauna: '🦋 Urban Wildlife',
      storyBadge: 'Sustainability Story',
      visitBadge: 'Visitor Guide',
      visitTitle: 'Getting Here & Park Regulations',
      visitSubtitle: 'Essential information for a smooth, safe, and enjoyable visit.',
      rulesTitle: 'Park Rules & Guidelines',
      faqTitle: 'Frequently Asked Questions (FAQ)',
      audioLabel: 'Park Ambient Sounds',
      audioStatusPlay: 'Playing nature sound (Click to mute)',
      audioStatusStop: 'Click to play nature sounds',
      footerBio: 'An urban wetland sanctuary in downtown Bangkok connecting to Lumphini Park via the Green Mile. Engineered as a Sponge City reservoir and biodiversity haven for all.',
      footerPhone: 'Park Administration: 02-254-1263 (04:30 AM - 10:00 PM)',
      footerQuickTitle: 'Quick Links',
      footerEmergencyTitle: 'Hours & Security',
      footerHours: '<strong>Operating Hours:</strong> 04:30 AM - 10:00 PM Daily',
      footerSec: '<strong>Medical & Security:</strong> On duty 24/7',
      footerBma: '<strong>BMA Hotline:</strong> 1555',
      footerMapsBtn: 'Open in Google Maps',
      footerCopy: '© 2026 Benjakitti Forest Park • Bangkok Metropolitan Administration (BMA)',
      footerTag1: 'Designed for Citizens & Nature',
      footerTag2: 'Zero-Waste & Clean Air',
      floraRoleLabel: 'Ecological Role',
      floraZoneLabel: 'Park Location: ',
      floraViewDetail: 'View Details'
    },
    hero: {
      tagline: "The Green Oasis of Bangkok",
      title: "Benjakitti Forest Park",
      subtitle: "A world-class urban wetland, biodiversity sanctuary, and eco-recreation haven spanning over 450 rai in the heart of downtown Bangkok.",
      exploreBtn: "Interactive Map & Zones",
      eventsBtn: "Events & Calendar",
      hours: "04:30 AM - 10:00 PM (Daily)",
      statusOpen: "Park is currently OPEN (04:30 AM - 10:00 PM)",
      statusClosed: "Park is currently CLOSED (Opens 04:30 AM)",
    },
    quickInfo: {
      hoursTitle: "Operating Hours",
      hoursTime: "04:30 AM - 10:00 PM",
      hoursDetail: "Open daily all year round",
      weatherTitle: "Park Weather",
      weatherTemp: "29°C Pleasant Breeze",
      weatherHum: "Humidity 68% • Moderate UV",
      aqiTitle: "Air Quality Index",
      aqiValue: "28 AQI (Good)",
      aqiPm: "PM 2.5: 6.8 µg/m³ • Pure Air",
      entryTitle: "Admission",
      entryValue: "Free Admission",
      entryDetail: "Open to all visitors"
    },
    highlightZones: [
      {
        id: "forest-wetland",
        name: "Forest & Wetland Sanctuary",
        nameEn: "Wetland Ecosystem",
        badge: "Eco Highlight",
        desc: "Four major retention ponds acting as natural stormwater basins and bio-filters with over 300 wetland flora species.",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Benjakitti_Park%2C_Bangkok_2.jpg",
        stats: "320 Rai | 4 Wetlands"
      },
      {
        id: "skywalk",
        name: "Elevated Skywalk",
        nameEn: "1.6 km Canopy Walk",
        badge: "Top Photography Spot",
        desc: "A 1.6-kilometer elevated walkway winding gracefully above the wetlands, offering panoramic skyline and sunset vistas.",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/94/Benjakitti_Forest_Park_%28I%29.jpg",
        stats: "1.6 km Length | 5-8 m Height"
      },
      {
        id: "sports-center",
        name: "Benjakitti Sports Center",
        nameEn: "Indoor & Outdoor Arena",
        badge: "Fitness & Recreation",
        desc: "Transformed tobacco warehouse into modern courts for basketball, badminton, futsal, pickleball, and outdoor skatepark.",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Benjakitti_Park_Panorama%2C_Bangkok.jpg",
        stats: "7 Sports | Free Public Walk-in"
      },
      {
        id: "water-park",
        name: "Water Park & Cycling Tracks",
        nameEn: "Lake & Bike Loop",
        badge: "Waterside Cardio",
        desc: "Large 130-rai lake with dedicated rubberized running tracks and smooth cycling lane mirroring the city's highest skyscrapers.",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Benjakitti_Park%2C_Bangkok.jpg",
        stats: "2.8 km Bike | 1.8 km Run"
      },
      {
        id: "dog-park",
        name: "Benjakitti Dog Park",
        nameEn: "Pet Friendly Zone",
        badge: "Pets Allowed Here Only",
        desc: "Secure fenced green area for dogs to socialize and exercise, equipped with waste stations and drinking water.",
        img: "https://upload.wikimedia.org/wikipedia/commons/a/af/Beagle_at_Benjakitti_Dog_Park.jpg",
        stats: "05:00 - 21:00 | Free"
      },
      {
        id: "amphitheater",
        name: "Outdoor Amphitheater & Museum",
        nameEn: "Culture Lawn",
        badge: "Music & Events",
        desc: "Sloping lakeside lawn host to 'Concerts in the Park', open-air cinema, and preserved heritage tobacco warehouses.",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Panorama_of_Benjakitti_Park%2C_Bangkok_2.jpg",
        stats: "2,000+ Capacity | Free Events"
      }
    ],
    mapFilters: [
      { id: "all", name: "All" },
      { id: "gate", name: "🚪 Entrances & Links" },
      { id: "parking", name: "🅿️ Parking Areas" },
      { id: "sports", name: "🏸 Sports & Recreation" },
      { id: "facility", name: "🚻 Restrooms & First Aid" },
      { id: "landmark", name: "📸 Highlights & Views" }
    ],
    mapPoints: [
      {
        id: "p1",
        lat: 13.7275,
        lng: 100.5568,
        category: "gate",
        name: "Gate 1: MRT QSNCC Entrance",
        desc: "Main pedestrian entrance, 200m from MRT Exit 3. Direct access to Skywalk start point.",
        hours: "04:30 AM - 10:00 PM"
      },
      {
        id: "p2",
        lat: 13.7335,
        lng: 100.5582,
        category: "gate",
        name: "Gate 2: Ratchadaphisek Road",
        desc: "Eastern access point adjacent to car parking lots and cycling lane entry.",
        hours: "04:30 AM - 10:00 PM"
      },
      {
        id: "p3",
        lat: 13.7315,
        lng: 100.5525,
        category: "gate",
        name: "Gate 3: Green Mile Link (to Lumphini Park)",
        desc: "Elevated walkway and bike path directly connecting to Lumphini Park (1.6 km).",
        hours: "05:00 AM - 09:00 PM"
      },
      {
        id: "p4",
        lat: 13.7360,
        lng: 100.5558,
        category: "gate",
        name: "Gate 4: Sukhumvit Soi 10 Access",
        desc: "Quiet pedestrian and bicycle entry from Sukhumvit Road neighborhood.",
        hours: "05:00 AM - 08:00 PM"
      },
      {
        id: "p5",
        lat: 13.7282,
        lng: 100.5580,
        category: "parking",
        name: "Parking Area 1 (QSNCC Side)",
        desc: "Space for ~180 cars, accessible parking spots, and EV charging stations.",
        hours: "04:30 AM - 10:00 PM"
      },
      {
        id: "p6",
        lat: 13.7340,
        lng: 100.5560,
        category: "parking",
        name: "Parking Area 2 (Forest/Hospital Side)",
        desc: "Capacity for ~120 vehicles, bicycle stands, and motorcycle parking.",
        hours: "04:30 AM - 10:00 PM"
      },
      {
        id: "p7",
        lat: 13.7325,
        lng: 100.5550,
        category: "sports",
        name: "Indoor Sports Center Arena",
        desc: "Badminton (10 courts), Basketball (3 courts), Futsal (2 courts), Table Tennis & Pickleball. Open for free public walk-in.",
        hours: "05:00 AM - 09:00 PM (Daily)"
      },
      {
        id: "p8",
        lat: 13.7330,
        lng: 100.5540,
        category: "sports",
        name: "Outdoor Skate Park & Pump Track",
        desc: "Open concrete skate park with bowls, ledges, and rails for skateboards, inline skates, and surf skates.",
        hours: "05:00 AM - 09:30 PM"
      },
      {
        id: "p9",
        lat: 13.7302,
        lng: 100.5545,
        category: "landmark",
        name: "Skywalk Sunset Viewpoint",
        desc: "Prime sunset spot overlooking the central wetlands and Sukhumvit skyline.",
        hours: "05:00 AM - 09:30 PM"
      },
      {
        id: "p10",
        lat: 13.7290,
        lng: 100.5552,
        category: "facility",
        name: "Visitor Information & First Aid Post",
        desc: "Ranger desk, security command, emergency electric carts, and park guide brochures.",
        hours: "04:30 AM - 10:00 PM"
      },
      {
        id: "p11",
        lat: 13.7288,
        lng: 100.5570,
        category: "facility",
        name: "Universal Design Restrooms & Water Station",
        desc: "Accessible restrooms with wheelchair ramps, nursing baby room, and chilled filtered water refills.",
        hours: "04:30 AM - 10:00 PM"
      },
      {
        id: "p12",
        lat: 13.7310,
        lng: 100.5575,
        category: "landmark",
        name: "Lakeside Amphitheater Lawn",
        desc: "Outdoor lawn stage for orchestral concerts, cultural showcases, and leisure community gatherings.",
        hours: "04:30 AM - 10:00 PM"
      }
    ],
    routes: [
      {
        id: "running-outer",
        type: "running",
        typeLabel: "🏃‍♂️ Running Track",
        title: "Grand Forest & Lake Loop",
        distance: "5.8 km",
        surface: "Shock-absorbing PU rubber & asphalt",
        level: "Intermediate - 5K & 10K Runners",
        features: ["100m interval markers", "Well-lit at night", "4 water stations", "Zero bike interference"]
      },
      {
        id: "cycling-track",
        type: "cycling",
        typeLabel: "🚴 Cycling Highway",
        title: "Dedicated Bicycle Highway",
        distance: "3.2 km",
        surface: "Smooth anti-slip painted asphalt",
        level: "All skill levels (Speed limit 25 km/h)",
        features: ["One-way safety design", "Strictly separated from walkers", "Bike parking stands", "No pedestrians allowed"]
      },
      {
        id: "skywalk-trail",
        type: "walking",
        typeLabel: "🚶‍♀️ Skywalk Trail",
        title: "Elevated Wetland Nature Skywalk",
        distance: "1.6 km",
        surface: "Open-grating steel deck & stainless steel handrails",
        level: "Easy / Universal Access (Wheelchair accessible)",
        features: ["High-angle biodiversity viewing", "QR flora & bird markers", "Shaded resting pods", "No bicycles allowed"]
      }
    ],
    gettingHere: [
      {
        icon: "train",
        color: "blue",
        title: "MRT Blue Line",
        desc: "Alight at <strong>Queen Sirikit National Convention Centre (QSNCC)</strong> station, Exit 3. Turn left and walk 200m directly to Gate 1 of Benjakitti Forest Park.",
        badge: "⚡ Recommended - Fastest Transit"
      },
      {
        icon: "footprints",
        color: "emerald",
        title: "BTS Asok & Green Mile",
        desc: "From BTS Asok, walk through Sukhumvit Soi 10, or walk/cycle from <strong>Lumphini Park</strong> via the elevated 'Green Mile' pedestrian & cycling bridge (1.6 km).",
        badge: "🚲 Scenic Bicycle Route"
      },
      {
        icon: "car",
        color: "amber",
        title: "Private Car & Parking",
        desc: "Two main parking lots (QSNCC gate & Tobacco Factory gate) with over 300 spaces. Free parking during operating hours with EV charging and accessible spots.",
        badge: "🅿️ Free Parking 04:30 - 22:00"
      }
    ],
    floraFauna: [
      {
        id: "f1",
        category: "wetland",
        name: "Papyrus Sedge",
        sciName: "Cyperus papyrus",
        role: "Bio-Filtration & Sediment Trapping",
        desc: "Dense root clusters that actively absorb excess nutrients, nitrogen, and phosphorus from urban runoff, purifying water naturally.",
        zone: "Wetland Ponds 2 & 3",
        icon: "🌿"
      },
      {
        id: "f2",
        category: "trees",
        name: "Freshwater Mangrove",
        sciName: "Barringtonia acutangula",
        role: "Riparian Tree & Hanging Red Blooms",
        desc: "Native flood-tolerant wetland tree displaying spectacular cascading red floral racemes in the early mornings.",
        zone: "Island shores and Skywalk borders",
        icon: "🌸"
      },
      {
        id: "f3",
        category: "birds",
        name: "Little Cormorant",
        sciName: "Microcarbo niger",
        role: "Indicator of Fish Biomass",
        desc: "Agile water diving bird commonly spotted perched with wings outstretched to dry upon submerged logs in the lake.",
        zone: "Central retention islands & main lake",
        icon: "🦅"
      },
      {
        id: "f4",
        category: "birds",
        name: "White-throated Kingfisher",
        sciName: "Halcyon smyrnensis",
        role: "Micro-predator & Insect Hunter",
        desc: "Vibrantly colored kingfisher with turquoise wings and chocolate head, perching along railings before swooping for prey.",
        zone: "Marsh reed beds and shrub borders",
        icon: "🐦"
      },
      {
        id: "f5",
        category: "trees",
        name: "Flame of the Forest",
        sciName: "Butea monosperma",
        role: "Carbon Sequestration & Canopy",
        desc: "Native heritage tree bursting into brilliant fiery orange blossoms between January and March against the skyline.",
        zone: "Northern woodland mounds",
        icon: "🍁"
      },
      {
        id: "f6",
        category: "fauna",
        name: "Common Grass Yellow",
        sciName: "Eurema hecabe",
        role: "Urban Pollinator & Bio-Indicator",
        desc: "Bright yellow butterfly flitting through wild clover and groundcovers, validating the park's strict 100% pesticide-free status.",
        zone: "Meadows and wildflower lawns",
        icon: "🦋"
      }
    ],
    sustainability: {
      title: "From Tobacco Plant to Bangkok's Living Sponge",
      subtitle: "The Sponge City Concept & Ecological Transformation",
      principles: [
        {
          num: "01",
          title: "Sponge City Reservoir",
          desc: "Four wetland basins hold over 128,000 cubic meters of rainwater, significantly mitigating flash floods in central Bangkok."
        },
        {
          num: "02",
          title: "Biological Phytoremediation",
          desc: "Filters 1,600 cubic meters of polluted canal runoff daily using tiered wetland plants and gravel filtration systems."
        },
        {
          num: "03",
          title: "Urban Heat Island Mitigation",
          desc: "8,700 newly planted trees alongside preserved heritage flora cool the local microclimate by 2-3°C."
        },
        {
          num: "04",
          title: "Adaptive Reuse & Circularity",
          desc: "Existing industrial foundations and concrete structures were crushed and reused as soil retention walls and sports arenas."
        }
      ]
    },
    events: [
      {
        id: "ev1",
        date: "Saturday, Nov 21, 2026",
        time: "05:00 - 07:30 PM",
        title: "Symphony in the Forest Park",
        location: "Outdoor Amphitheater",
        category: "Music & Arts",
        desc: "Classical and mellow jazz sunset concert. Free open-lawn picnic under the twilight skyline.",
        free: true
      },
      {
        id: "ev2",
        date: "Sunday, Nov 29, 2026",
        time: "06:30 - 08:30 AM",
        title: "Bird Watching Walk & Urban Safari",
        location: "Meeting at Visitor Center",
        category: "Eco Workshop",
        desc: "Guided birding expedition spotting resident and migratory waterfowl with binoculars provided.",
        free: true
      },
      {
        id: "ev3",
        date: "Saturday, Dec 5, 2026",
        time: "05:00 - 08:00 AM",
        title: "Benjakitti Eco Run (5K / 10K)",
        location: "Forest Rubber Loop",
        category: "Sports & Fitness",
        desc: "Charity morning run celebrating clean air and urban green conservation. Advance registration required.",
        free: false
      },
      {
        id: "ev4",
        date: "Every Wednesday & Friday",
        time: "05:30 - 06:30 PM",
        title: "Lakeside Sunset Yoga & Stretch",
        location: "Waterside Lawn",
        category: "Wellness",
        desc: "Wind down your workday with open-air yoga guided by certified instructors. Bring your own mat.",
        free: true
      }
    ],
    rules: [
      {
        icon: "🚭",
        title: "No Smoking or Vaping",
        desc: "Strictly smoke-free park according to Thai environmental law. Fine up to 5,000 THB."
      },
      {
        icon: "🐕",
        title: "Pets Restricted to Dog Park Only",
        desc: "Pets are not permitted on the Skywalk or Forest trails. They are welcomed solely within the designated Dog Park on leashes."
      },
      {
        icon: "🛸",
        title: "Drone Flights Require Permit",
        desc: "Recreational drones are prohibited without written authorization from BMA and CAAT."
      },
      {
        icon: "🚲",
        title: "Honor Separated Running/Bike Lanes",
        desc: "No pedestrians on bicycle tracks; no bicycles on the elevated Skywalk for everyone's safety."
      },
      {
        icon: "♻️",
        title: "Zero Waste & Leave No Trace",
        desc: "Please carry out what you carry in or utilize the color-coded waste separation stations."
      },
      {
        icon: "📷",
        title: "Commercial Photography Permits",
        desc: "Casual mobile photography is welcome. Commercial video productions and bridal shoots require prior clearance from the park office."
      }
    ],
    faqs: [
      {
        q: "Are bike rental services available inside the park?",
        a: "Currently, there is no bicycle rental shop operating inside Benjakitti Park. Visitors are encouraged to bring their own bicycles or rent from nearby transit hubs."
      },
      {
        q: "Where can I park my car and is parking free?",
        a: "Two parking lots (QSNCC gate and Tobacco factory gate) accommodate 300+ vehicles with free parking during operating hours (04:30 AM - 10:00 PM)."
      },
      {
        q: "How can I access the indoor sports facilities?",
        a: "The Indoor Sports Arena (badminton, basketball, futsal, table tennis) is open free to the public on a walk-in basis daily (05:00 AM - 09:00 PM). Please bring your own gear."
      },
      {
        q: "Are there shower facilities and lockers available?",
        a: "Yes, the Indoor Sports Center offers clean changing rooms, restrooms, and complimentary day lockers (bring your own padlock)."
      },
      {
        q: "Which train station is nearest to Benjakitti Park?",
        a: "MRT Blue Line 'Queen Sirikit National Convention Centre' (Exit 3) is just a 2-minute stroll to Gate 1."
      },
      {
        q: "Is the park accessible for wheelchairs and strollers?",
        a: "100% accessible via Universal Design principles with gentle ramps up the Skywalk, accessible restrooms, and smooth level tracks."
      },
      {
        q: "Is it safe to visit at night?",
        a: "The park is illuminated brightly from 6:00 PM to 10:00 PM with 24-hour security guards on patrol and complete CCTV surveillance."
      }
    ]
  }
};
