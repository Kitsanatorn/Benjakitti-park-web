/* =====================================================================
   SITE CONTENT: edit everything here. No coding knowledge needed:
   just change the text between the quotes "like this".

   Every piece of text has two versions:  { en: "English", th: "ไทย" }
   If a Thai version is missing or empty, the English one is shown.

   Photos: put files in the /assets folders and make sure the file
   names below match exactly (including .jpg).
   ===================================================================== */

window.SITE = {
  // Group code: shown on the landing screen and in the footer (same in both languages)
  group: "INT-33-03",
  course: { en: "GEN241 Real Aesthete", th: "GEN241 Real Aesthete" },

  /* ---------- Interface wording (buttons, labels, screen-reader text) ---------- */
  // {x}, {n}, {label}, {feeling}, {place}, {src}, {count} are filled in automatically.
  ui: {
    siteTitle:       { en: "A Visit to Benjakitti Forest Park", th: "เยือนสวนป่าเบญจกิติ" },
    language:        { en: "Language", th: "ภาษา" },
    brand:           { en: "Benjakitti", th: "เบญจกิติ" },
    backToStart:     { en: "Back to the start", th: "กลับไปหน้าแรก" },
    sections:        { en: "Sections", th: "เมนูหลัก" },
    tabVisit:        { en: "Our Visit", th: "ทริปของเรา" },
    tabPlay:         { en: "Play", th: "เล่นเกม" },
    tabPark:         { en: "The Park", th: "ข้อมูลสวน" },
    photoMissing:    { en: "Add {src}", th: "เพิ่มไฟล์ {src}" },
    heroPhoto:       { en: "Hero photo", th: "ภาพหลัก" },

    // Our Visit
    photosEyebrow:   { en: "Photo diary", th: "บันทึกภาพ" },
    photosTitle:     { en: "Our Day at the Park", th: "วันของเราที่สวน" },
    slideshowRegion: { en: "Photos from our visit", th: "ภาพจากการลงพื้นที่" },
    slideshowStage:  { en: "Photo slideshow. Use the left and right arrow keys to change photo.", th: "สไลด์ภาพ ใช้ปุ่มลูกศรซ้าย–ขวาเพื่อเปลี่ยนรูป" },
    prevPhoto:       { en: "Previous photo", th: "รูปก่อนหน้า" },
    nextPhoto:       { en: "Next photo", th: "รูปถัดไป" },
    pauseSlideshow:  { en: "Pause slideshow", th: "หยุดสไลด์ชั่วคราว" },
    playSlideshow:   { en: "Play slideshow", th: "เล่นสไลด์ต่อ" },
    interviewsEyebrow: { en: "Interviews", th: "บทสัมภาษณ์" },
    interviewsTitle: { en: "What people told us", th: "เสียงจากผู้คนในสวน" },
    whatWeLearned:   { en: "What we learned", th: "สิ่งที่เราได้เรียนรู้" },
    translatedNote:  { en: "", th: "แปลจากภาษาอังกฤษ" },
    commonTheme:     { en: "Common theme", th: "ประเด็นร่วม" },
    reflectionEyebrow: { en: "Reflection", th: "สะท้อนคิด" },
    perceptionsTitle: { en: "Our final perceptions", th: "มุมมองสุดท้ายของเรา" },
    keyTakeaway:     { en: "Key takeaway", th: "ข้อคิดสำคัญ" },

    // Play
    roundQuarter:    { en: "Quarter-final", th: "รอบ 8 ภาพ" },
    roundSemi:       { en: "Semi-final", th: "รอบรองชนะเลิศ" },
    roundFinal:      { en: "Final", th: "รอบชิงชนะเลิศ" },
    stepQuarter:     { en: "Quarters", th: "รอบ 8 ภาพ" },
    stepSemi:        { en: "Semis", th: "รองชนะเลิศ" },
    stepFinal:       { en: "Final", th: "ชิงชนะเลิศ" },
    roundOf:         { en: "{label} {x} of {n}", th: "{label} คู่ที่ {x} จาก {n}" },
    matchOf:         { en: "Match {x} of {n}", th: "คู่ที่ {x} จาก {n}" },
    complete:        { en: "Complete", th: "ครบแล้ว" },
    progressLabel:   { en: "Tournament progress", th: "ความคืบหน้าของเกม" },
    or:              { en: "or", th: "หรือ" },
    choose:          { en: "Choose {label}", th: "เลือก {label}" },
    yourFavourite:   { en: "Your Benjakitti favourite", th: "มุมโปรดของคุณในเบญจกิติ" },
    fromInterviews:  { en: "From our interviews", th: "จากบทสัมภาษณ์ของเรา" },
    feelingPlaceholder: { en: "e.g. Calm", th: "เช่น สงบ" },
    quickPicks:      { en: "Quick picks", th: "ตัวเลือกด่วน" },
    submit:          { en: "Submit", th: "ส่ง" },
    differentWord:   { en: "Please use a different word.", th: "ลองใช้คำอื่นแทนนะ" },
    thanksEyebrow:   { en: "Thank you", th: "ขอบคุณ" },
    thanksTitle:     { en: "Thank you for playing.", th: "ขอบคุณที่ร่วมเล่นนะ" },
    youFelt:         { en: "You felt {feeling} about {place}.", th: "{place} ทำให้คุณรู้สึก {feeling}" },
    wordWall:        { en: "Word wall", th: "กำแพงความรู้สึก" },
    wordWallSub:     { en: "How visitors felt about their favourite", th: "ความรู้สึกของผู้ชมที่มีต่อมุมโปรด" },
    live:            { en: "Live", th: "สด" },
    people:          { en: "{label}, {count} people", th: "{label} ({count} คน)" },
    playAgain:       { en: "Play again", th: "เล่นอีกครั้ง" },

    // The Park
    planEyebrow:     { en: "Plan a visit", th: "วางแผนการเที่ยว" },
    infoTitle:       { en: "Location & visiting info", th: "ข้อมูลการเข้าชม" },
    openMaps:        { en: "Open in Google Maps", th: "เปิดใน Google Maps" },
    newTab:          { en: "(opens in a new tab)", th: "(เปิดในแท็บใหม่)" },
    historyEyebrow:  { en: "History", th: "ประวัติ" },
    historyTitle:    { en: "From factory to forest", th: "จากโรงงานสู่ผืนป่า" },
    todoEyebrow:     { en: "Things to do", th: "กิจกรรม" },
    todoTitle:       { en: "Make the most of it", th: "เที่ยวให้คุ้ม" },
    tipsEyebrow:     { en: "Be a good visitor", th: "เป็นผู้มาเยือนที่ดี" },
    tipsTitle:       { en: "Visitor tips", th: "ข้อควรรู้ก่อนไป" }
  },

  /* ---------- Landing screen ---------- */
  landing: {
    title:    { en: "A Visit to Benjakitti Forest Park", th: "เยือนสวนป่าเบญจกิติ" },
    subtitle: { en: "How an old tobacco factory became Bangkok's living lung", th: "จากโรงงานยาสูบเก่า สู่ปอดสีเขียวของกรุงเทพฯ" },
    // Background photos: crossfade every ~5 seconds (first one shows first)
    // focus: the part of the photo to keep in view when the screen crops it ("x% y%", 0 0 = top-left).
    // mobileFit: "contain" shows the whole photo on portrait phones (over a blurred copy),
    // for photos where cropping would cut people out.
    backgrounds: [
      { src: "assets/hero.jpg", focus: "62% 58%",
        alt: { en: "Wooden boardwalks through the green wetland, with Bangkok skyscrapers behind", th: "ทางเดินไม้ผ่านพื้นที่ชุ่มน้ำสีเขียว มีตึกระฟ้าของกรุงเทพฯ อยู่ด้านหลัง" } },
      { src: "assets/landing/entrance.jpg", focus: "50% 62%", mobileFit: "contain",
        alt: { en: "Our group at the Benjakitti Forest Park entrance sign", th: "กลุ่มของเราที่ป้ายทางเข้าสวนป่าเบญจกิติ" } },
      { src: "assets/landing/railing.jpg", focus: "50% 42%", mobileFit: "contain",
        alt: { en: "Visitors on the skywalk above the wetland", th: "ผู้มาเยือนบนสกายวอล์กเหนือพื้นที่ชุ่มน้ำ" } }
    ],
    button: { en: "Explore", th: "เริ่มสำรวจ" }
  },

  // Soft, blurred park photo behind the main tabs
  backgroundPhoto: "assets/hero.jpg",

  /* ---------- Tab 1: Our Visit ---------- */
  visit: {
    banner: {
      src: "assets/visit/07.jpg",   // skyline view from the skywalk
      eyebrow: { en: "Fieldwork · Nature's Beauty", th: "ลงพื้นที่ · ความงามของธรรมชาติ" },
      title:   { en: "Our Visit", th: "ทริปของเรา" },
      intro:   { en: "What we saw, heard and learned at Benjakitti Forest Park.", th: "สิ่งที่เราได้เห็น ได้ยิน และได้เรียนรู้ที่สวนป่าเบญจกิติ" }
    },

    // Slideshow photos (in /assets/visit/), in the order we took them.
    // "visit" is shown as a small label above the caption. Add or remove lines freely.
    slides: [
      { src: "assets/visit/01.jpg", visit: { en: "Visit 1", th: "ครั้งที่ 1" }, caption: { en: "The lake fountain under a stormy sky", th: "น้ำพุกลางทะเลสาบใต้ท้องฟ้าครึ้มฝน" } },
      { src: "assets/visit/02.jpg", visit: { en: "Visit 1", th: "ครั้งที่ 1" }, caption: { en: "Storm clouds over the lake plaza", th: "เมฆฝนตั้งเค้าเหนือลานริมทะเลสาบ" } },
      { src: "assets/visit/03.jpg", visit: { en: "Visit 1", th: "ครั้งที่ 1" }, caption: { en: "Our group at the park entrance", th: "กลุ่มของเราที่ป้ายทางเข้าสวน" } },
      { src: "assets/visit/04.jpg", visit: { en: "Visit 1", th: "ครั้งที่ 1" }, caption: { en: "The quiet memorial plaza", th: "ลานอนุสรณ์ที่เงียบสงบ" } },
      { src: "assets/visit/05.jpg", visit: { en: "Visit 1", th: "ครั้งที่ 1" }, caption: { en: "Walking the skywalk through the treetops", th: "เดินบนสกายวอล์กผ่านยอดไม้" } },
      { src: "assets/visit/06.jpg", visit: { en: "Visit 1", th: "ครั้งที่ 1" }, caption: { en: "The skywalk winding through the trees", th: "สกายวอล์กที่ทอดตัวคดเคี้ยวไปตามแนวต้นไม้" } },
      { src: "assets/visit/07.jpg", visit: { en: "Visit 1", th: "ครั้งที่ 1" }, caption: { en: "Looking out at the skyline from the skywalk", th: "ชมวิวเมืองจากบนสกายวอล์ก" } },
      { src: "assets/visit/08.jpg", visit: { en: "Visit 1", th: "ครั้งที่ 1" }, caption: { en: "Wetland ponds beneath the skyscrapers", th: "บ่อน้ำในพื้นที่ชุ่มน้ำใต้เงาตึกระฟ้า" } },
      { src: "assets/visit/09.jpg", visit: { en: "Visit 1", th: "ครั้งที่ 1" }, caption: { en: "Open lawns under big old trees", th: "สนามหญ้ากว้างใต้ต้นไม้ใหญ่" } },
      { src: "assets/visit/10.jpg", visit: { en: "Visit 1", th: "ครั้งที่ 1" }, caption: { en: "Crossing the skywalk bridge", th: "ข้ามสะพานสกายวอล์ก" } },
      { src: "assets/visit/11.jpg", visit: { en: "Visit 1", th: "ครั้งที่ 1" }, caption: { en: "The shaded cycle path", th: "ทางจักรยานที่ร่มรื่น" } },
      { src: "assets/visit/12.jpg", visit: { en: "Visit 1", th: "ครั้งที่ 1" }, caption: { en: "Stopping for an interview on the cycle path", th: "แวะสัมภาษณ์บนทางจักรยาน" } },
      { src: "assets/visit/13.jpg", visit: { en: "Visit 1", th: "ครั้งที่ 1" }, caption: { en: "Listening and taking notes", th: "ตั้งใจฟังและจดบันทึก" } },
      { src: "assets/visit/14.jpg", visit: { en: "Visit 1", th: "ครั้งที่ 1" }, caption: { en: "Thank you for talking with us", th: "ขอบคุณที่สละเวลาคุยกับเรา" } },
      { src: "assets/visit/15.jpg", visit: { en: "Visit 1", th: "ครั้งที่ 1" }, caption: { en: "A photo together after our interview", th: "ถ่ายรูปร่วมกันหลังสัมภาษณ์" } },
      { src: "assets/visit/16.jpg", visit: { en: "Visit 1", th: "ครั้งที่ 1" }, caption: { en: "The park sign by the old entrance", th: "ป้ายชื่อสวนที่ทางเข้าเดิม" } },
      { src: "assets/visit/17.jpg", visit: { en: "Visit 1", th: "ครั้งที่ 1" }, caption: { en: "Talking by the lake", th: "พูดคุยกันริมทะเลสาบ" } },
      { src: "assets/visit/18.jpg", visit: { en: "Visit 1", th: "ครั้งที่ 1" }, caption: { en: "Glass towers reflected in the lake", th: "ตึกกระจกสะท้อนบนผิวน้ำ" } },
      { src: "assets/visit/19.jpg", visit: { en: "Visit 1", th: "ครั้งที่ 1" }, caption: { en: "The golden sculpture on the lakeside plaza", th: "ประติมากรรมสีทองบนลานริมทะเลสาบ" } },
      { src: "assets/visit/20.jpg", visit: { en: "Visit 1", th: "ครั้งที่ 1" }, caption: { en: "White towers along the lake", th: "ตึกสีขาวเรียงรายริมทะเลสาบ" } },
      { src: "assets/visit/21.jpg", visit: { en: "Visit 2", th: "ครั้งที่ 2" }, caption: { en: "Boardwalks through the wetland", th: "ทางเดินไม้ผ่านพื้นที่ชุ่มน้ำ" } },
      { src: "assets/visit/22.jpg", visit: { en: "Visit 2", th: "ครั้งที่ 2" }, caption: { en: "A boardwalk zig-zag below the towers", th: "ทางเดินไม้ซิกแซกใต้ตึกสูง" } },
      { src: "assets/visit/23.jpg", visit: { en: "Visit 2", th: "ครั้งที่ 2" }, caption: { en: "The curvy canopy walk over the picnic lawns", th: "ทางเดินลอยฟ้าทรงโค้งเหนือลานปิกนิก" } },
      { src: "assets/visit/24.jpg", visit: { en: "Visit 2", th: "ครั้งที่ 2" }, caption: { en: "A monitor lizard resting under a big tree", th: "ตัวเงินตัวทองนอนพักใต้ต้นไม้ใหญ่" } },
      { src: "assets/visit/25.jpg", visit: { en: "Visit 2", th: "ครั้งที่ 2" }, caption: { en: "A Thai pavilion by the pond", th: "ศาลาไทยริมสระน้ำ" } }
    ],

    // Our interviews, grouped by fieldwork day. "story", "quote2" and "detail" are optional.
    // translated: true shows "แปลจากภาษาอังกฤษ" under the Thai quotes. Set it to false
    // for anyone who actually spoke Thai to us.
    interviewGroups: [
      {
        title: { en: "Visit 1", th: "ลงพื้นที่ครั้งที่ 1" },
        date:  { en: "4 November 2026", th: "4 พฤศจิกายน 2569" },
        interviews: [
          {
            name: { en: "Jogger", th: "นักวิ่ง" },
            detail: { en: "About 30 years old", th: "อายุประมาณ 30 ปี" },
            quote: { en: "The sunset over the lake is my favourite part.", th: "พระอาทิตย์ตกเหนือทะเลสาบคือช่วงที่ฉันชอบที่สุด" },
            story: { en: "Runs here several evenings a week. The trees and water help her relax after work.", th: "มาวิ่งที่นี่หลายเย็นต่อสัปดาห์ ต้นไม้และสายน้ำช่วยให้เธอผ่อนคลายหลังเลิกงาน" },
            takeaway: { en: "Nature here is part of people's daily recovery from city life.", th: "ธรรมชาติที่นี่เป็นส่วนหนึ่งของการพักฟื้นจากชีวิตในเมืองในแต่ละวัน" },
            translated: false
          },
          {
            name: { en: "Park staff member", th: "เจ้าหน้าที่สวน" },
            detail: { en: "Benjakitti Forest Park", th: "สวนป่าเบญจกิติ" },
            quote: { en: "The wetlands are designed to filter water and hold rainwater during floods.", th: "พื้นที่ชุ่มน้ำถูกออกแบบมาให้กรองน้ำ และกักเก็บน้ำฝนในช่วงน้ำท่วม" },
            story: { en: "More birds have come since the trees grew bigger.", th: "มีนกมาอาศัยมากขึ้นตั้งแต่ต้นไม้โตขึ้น" },
            takeaway: { en: "The park's beauty is also in what it does: it cleans water and protects the city.", th: "ความงามของสวนยังอยู่ที่สิ่งที่สวนทำ ทั้งช่วยทำน้ำให้สะอาดและปกป้องเมือง" },
            translated: false
          },
          {
            name: { en: "Security guard", th: "พนักงานรักษาความปลอดภัย" },
            detail: { en: "Here since the park opened", th: "ทำงานที่นี่ตั้งแต่สวนเปิด" },
            quote: { en: "Early morning is the most beautiful time.", th: "ช่วงเช้าตรู่คือเวลาที่สวยที่สุด" },
            story: { en: "Has worked here since the park opened. Loves the mist over the lake and the many birds, and says visitors take good care of the plants.", th: "ทำงานที่นี่มาตั้งแต่สวนเปิด ชอบหมอกที่ลอยเหนือทะเลสาบและฝูงนกจำนวนมาก และบอกว่าผู้มาเยือนช่วยกันดูแลต้นไม้เป็นอย่างดี" },
            takeaway: { en: "People who see the park every day still find it beautiful.", th: "แม้แต่คนที่เห็นสวนทุกวันก็ยังรู้สึกว่าที่นี่สวยงาม" },
            translated: false
          }
        ]
      },
      {
        title: { en: "Visit 2", th: "ลงพื้นที่ครั้งที่ 2" },
        date:  { en: "14 November 2026", th: "14 พฤศจิกายน 2569" },
        interviews: [
          {
            name: { en: "Thomas", th: "โทมัส" },
            attribution: { en: "Thomas, 32", th: "โทมัส, 32" },
            detail: { en: "32 · Urban planner from Lyon, France (on holiday)", th: "32 ปี · นักผังเมืองจากเมืองลียง ประเทศฝรั่งเศส (มาเที่ยวพักผ่อน)" },
            quote: { en: "The park almost feels like a giant air conditioner for the neighbourhood.", th: "สวนแห่งนี้แทบจะเป็นเครื่องปรับอากาศยักษ์ของทั้งย่านเลย" },
            story: { en: "Came to escape the heat after two hours walking among buildings and cars. He found the park on Instagram, through videos of the wooden walkways with skyscrapers behind. He walked around the lake and along the raised walkways above the wetland, watching birds, and was moved to see students in graduation gowns taking photos there, choosing a park for such an important moment.",
                     th: "เขามาที่นี่เพื่อหนีความร้อน หลังจากเดินท่ามกลางตึกและรถยนต์มาสองชั่วโมง เขารู้จักสวนนี้จากอินสตาแกรม ผ่านคลิปทางเดินไม้ที่มีตึกระฟ้าเป็นฉากหลัง เขาเดินรอบทะเลสาบและไปตามทางเดินยกระดับเหนือพื้นที่ชุ่มน้ำพร้อมดูนกไปด้วย และรู้สึกประทับใจเมื่อเห็นนักศึกษาในชุดครุยมาถ่ายรูปบนทางเดิน เลือกสวนสาธารณะเป็นฉากของช่วงเวลาสำคัญในชีวิต" },
            quote2: { en: "It's like entering a little bubble. Everything slows down.", th: "เหมือนได้เข้าไปอยู่ในฟองอากาศเล็ก ๆ ทุกอย่างช้าลง" },
            takeaway: { en: "For a visitor, the park's beauty starts with the body (fresh air, shade and breeze) and then calms the mind.", th: "สำหรับผู้มาเยือน ความงามของสวนเริ่มจากร่างกาย ทั้งอากาศสดชื่น ร่มเงา และสายลม แล้วจึงค่อย ๆ ทำให้ใจสงบ" },
            translated: true
          },
          {
            name: { en: "Stefan", th: "สเตฟาน" },
            attribution: { en: "Stefan, 45", th: "สเตฟาน, 45" },
            detail: { en: "45 · German, works in international trade, living in Bangkok for 12+ years", th: "45 ปี · ชาวเยอรมัน ทำงานด้านการค้าระหว่างประเทศ อาศัยอยู่ในกรุงเทพฯ มากว่า 12 ปี" },
            quote: { en: "Taking care of nature means taking care of ourselves and other people.", th: "การดูแลธรรมชาติ คือการดูแลตัวเราเองและคนอื่น ๆ" },
            story: { en: "Came with his son Lukas to get him away from screens. They walk, rent bikes and sit by the water. He loves the late-afternoon light reflecting on the water before sunset, and remembers getting caught in a tropical rainstorm and running to shelter under a pavilion: soaked, but laughing. Living in a big city taught him to appreciate every tree.",
                     th: "เขาพาลูกชาย ลูคัส มาที่นี่เพื่อให้ห่างจากหน้าจอ พวกเขาเดินเล่น เช่าจักรยาน และนั่งพักริมน้ำ เขาชอบแสงยามบ่ายที่สะท้อนบนผิวน้ำก่อนพระอาทิตย์ตก และยังจำได้ตอนที่เจอพายุฝนเขตร้อนจนต้องวิ่งไปหลบใต้ศาลา ตัวเปียกโชกแต่ก็หัวเราะกันไม่หยุด การใช้ชีวิตในเมืองใหญ่ทำให้เขาเห็นคุณค่าของต้นไม้ทุกต้น" },
            quote2: { en: "It's the green lung of the neighbourhood… a place to relax, whether they're rich or poor.", th: "ที่นี่คือปอดสีเขียวของย่านนี้… เป็นที่พักผ่อนของทุกคน ไม่ว่าจะรวยหรือจน" },
            takeaway: { en: "The park's beauty is in the memories and connections it creates: a shared space for families and everyone.", th: "ความงามของสวนอยู่ที่ความทรงจำและความผูกพันที่เกิดขึ้น เป็นพื้นที่ร่วมกันของครอบครัวและทุกคน" },
            translated: true
          },
          {
            name: { en: "Lukas", th: "ลูคัส" },
            detail: { en: "Stefan's son", th: "ลูกชายของสเตฟาน" },
            quote: { en: "My dad and I often come here to disconnect, walk around, and talk about anything.", th: "ผมกับพ่อมาที่นี่บ่อย ๆ เพื่อพักจากหน้าจอ เดินเล่น และคุยกันได้ทุกเรื่อง" },
            takeaway: { en: "Nature gives families time together without screens.", th: "ธรรมชาติมอบเวลาให้ครอบครัวได้อยู่ด้วยกันโดยไม่มีหน้าจอ" },
            translated: true
          }
        ]
      }
    ],

    // Wrap a word in **double stars** to highlight it
    commonTheme: {
      en: "Across both visits — joggers, staff, tourists and families — everyone described the park as **peaceful**: cooler air, no car horns, only wind and birds. The people who work here see its beauty every day, and the visitors told us the balance between city and nature is **fragile** and worth protecting.",
      th: "จากการลงพื้นที่ทั้งสองครั้ง ไม่ว่าจะเป็นนักวิ่ง เจ้าหน้าที่ นักท่องเที่ยว หรือครอบครัว ทุกคนพูดถึงสวนแห่งนี้ว่า **สงบ** อากาศเย็นกว่า ไม่มีเสียงแตรรถ มีแต่เสียงลมกับเสียงนก คนที่ทำงานที่นี่เห็นความงามของสวนทุกวัน ส่วนผู้มาเยือนบอกเราว่าสมดุลระหว่างเมืองกับธรรมชาติที่นี่ **เปราะบาง** และควรค่าแก่การปกป้อง"
    },

    closingQuote: {
      text: { en: "Keep creating spaces where the city and nature can live together instead of fighting against each other.", th: "ช่วยกันสร้างพื้นที่ที่เมืองและธรรมชาติอยู่ร่วมกันได้ แทนที่จะต่อสู้กันต่อไป" },
      by: { en: "Thomas, 32", th: "โทมัส, 32" },
      translated: true
    },

    perceptions: {
      en: "The beauty of Benjakitti Forest Park comes from nature and city living side by side. Land that used to be a tobacco factory is now wetlands, trees and a lake full of life. From the skywalk you see green treetops against glass towers, and that contrast is what makes the view special. The park is also beautiful because of what it does: its wetlands clean water and hold rain, and its trees cool the air and quiet the noise. For locals and staff it is part of everyday life, a place to recover after work and to watch the birds come back; for tourists, families and students it is a place to slow down and make memories. Everyone we met reminded us that this balance between city and nature is fragile — and worth protecting.",
      th: "ความงามของสวนป่าเบญจกิติเกิดจากธรรมชาติและชีวิตในเมืองที่อยู่เคียงข้างกัน ที่ดินซึ่งเคยเป็นโรงงานยาสูบ วันนี้กลายเป็นพื้นที่ชุ่มน้ำ ต้นไม้ และทะเลสาบที่เต็มไปด้วยชีวิต เมื่อมองจากสกายวอล์ก เราจะเห็นยอดไม้สีเขียวตัดกับตึกกระจกสูง และความต่างนี้เองที่ทำให้วิวพิเศษ สวนแห่งนี้ยังงดงามเพราะสิ่งที่มันทำ พื้นที่ชุ่มน้ำช่วยบำบัดน้ำและรองรับน้ำฝน ต้นไม้ช่วยลดความร้อนและเสียงรบกวน สำหรับคนในพื้นที่และเจ้าหน้าที่ สวนคือส่วนหนึ่งของชีวิตประจำวัน เป็นที่พักใจหลังเลิกงานและที่ที่ได้เห็นนกกลับมา ส่วนนักท่องเที่ยว ครอบครัว และนักศึกษา ที่นี่คือที่ที่ได้ชะลอชีวิตให้ช้าลงและสร้างความทรงจำ ทุกคนที่เราได้พบย้ำเตือนเราว่า สมดุลระหว่างเมืองกับธรรมชาตินั้นเปราะบาง และควรค่าแก่การปกป้อง"
    }
  },

  // Our key takeaway quote (shown in "Our Visit" and at the end of the game)
  takeaway: { en: "Taking care of nature means taking care of ourselves.", th: "การดูแลธรรมชาติ ก็คือการดูแลตัวเราเอง" },

  /* ---------- Tab 2: Play ---------- */
  game: {
    title: { en: "Pick Your Benjakitti Favourite", th: "เลือกมุมโปรดในเบญจกิติ" },
    // Short, friendly instruction shown under the title
    instruction: { en: "Tap the photo you like more. Keep picking until you find your favourite spot in the park.", th: "แตะรูปที่คุณชอบมากกว่า แล้วเลือกต่อไปเรื่อย ๆ จนเจอมุมโปรดของคุณในสวน" },
    // Every play picks 8 of these at random (need at least 8).
    // Game photos are smaller copies in /assets/game/ so each match loads fast.
    pool: [
      { id: "wetland-boardwalks", src: "assets/game/wetland-boardwalks.jpg", label: { en: "Boardwalks through the wetland", th: "ทางเดินไม้ผ่านพื้นที่ชุ่มน้ำ" } },
      { id: "skywalk",            src: "assets/game/skywalk.jpg",            label: { en: "Skywalk through the treetops", th: "สกายวอล์กผ่านยอดไม้" } },
      { id: "lake-towers",        src: "assets/game/lake-towers.jpg",        label: { en: "White towers along the lake", th: "ตึกสีขาวริมทะเลสาบ" } },
      { id: "treetop-walk",       src: "assets/game/treetop-walk.jpg",       label: { en: "Walking among the treetops", th: "เดินเล่นท่ามกลางยอดไม้" } },
      { id: "skywalk-bridge",     src: "assets/game/skywalk-bridge.jpg",     label: { en: "The skywalk bridge", th: "สะพานสกายวอล์ก" } },
      { id: "skyline-view",       src: "assets/game/skyline-view.jpg",       label: { en: "Skyline view from the skywalk", th: "วิวเมืองจากสกายวอล์ก" } },
      { id: "boardwalk-zigzag",   src: "assets/game/boardwalk-zigzag.jpg",   label: { en: "Boardwalk zig-zag below the towers", th: "ทางเดินไม้ซิกแซกใต้ตึกสูง" } },
      { id: "wetland-ponds",      src: "assets/game/wetland-ponds.jpg",      label: { en: "Wetland ponds beneath skyscrapers", th: "บ่อน้ำใต้เงาตึกระฟ้า" } },
      { id: "canopy-walk",        src: "assets/game/canopy-walk.jpg",        label: { en: "The curvy canopy walk", th: "ทางเดินลอยฟ้าทรงโค้ง" } },
      { id: "monitor-lizard",     src: "assets/game/monitor-lizard.jpg",     label: { en: "Monitor lizard under a big tree", th: "ตัวเงินตัวทองใต้ต้นไม้ใหญ่" } },
      { id: "cycle-path",         src: "assets/game/cycle-path.jpg",         label: { en: "The shaded cycle path", th: "ทางจักรยานที่ร่มรื่น" } },
      { id: "open-lawns",         src: "assets/game/open-lawns.jpg",         label: { en: "Open lawns under big trees", th: "สนามหญ้ากว้างใต้ต้นไม้ใหญ่" } },
      { id: "glass-towers",       src: "assets/game/glass-towers.jpg",       label: { en: "Glass towers reflected in the lake", th: "ตึกกระจกสะท้อนผิวน้ำ" } },
      { id: "storm-clouds",       src: "assets/game/storm-clouds.jpg",       label: { en: "Storm clouds over the lake plaza", th: "เมฆฝนเหนือลานริมทะเลสาบ" } },
      { id: "golden-sculpture",   src: "assets/game/golden-sculpture.jpg",   label: { en: "Golden sculpture on the plaza", th: "ประติมากรรมสีทองบนลาน" } },
      { id: "thai-pavilion",      src: "assets/game/thai-pavilion.jpg",      label: { en: "Thai pavilion by the pond", th: "ศาลาไทยริมสระน้ำ" } },
      { id: "memorial-plaza",     src: "assets/game/memorial-plaza.jpg",     label: { en: "The quiet memorial plaza", th: "ลานอนุสรณ์ที่เงียบสงบ" } },
      { id: "lake-fountain",      src: "assets/game/lake-fountain.jpg",      label: { en: "The lake fountain under grey skies", th: "น้ำพุกลางทะเลสาบยามฟ้าครึ้ม" } }
    ],
    feelingPrompt: { en: "Describe how it makes you feel — one word or a short sentence.", th: "ที่นี่ทำให้คุณรู้สึกอย่างไร? พิมพ์คำเดียวหรือประโยคสั้น ๆ ก็ได้" },
    // Quick picks: tapping one fills the box (in the language being shown)
    chips: [
      { en: "Calm", th: "สงบ" },
      { en: "Amazed", th: "ทึ่ง" },
      { en: "Refreshed", th: "สดชื่น" },
      { en: "Grateful", th: "ซาบซึ้ง" },
      { en: "Happy", th: "มีความสุข" }
    ]
  },

  /* ---------- Tab 3: The Park ---------- */
  park: {
    banner: {
      src: "assets/visit/20.jpg",
      eyebrow: { en: "Khlong Toei · Bangkok", th: "คลองเตย · กรุงเทพฯ" },
      title:   { en: "The Park", th: "ข้อมูลสวน" },
      intro:   { en: "Everything you need to plan your own visit.", th: "ทุกอย่างที่ควรรู้ก่อนไปเยือนด้วยตัวเอง" }
    },

    // icon names: pin, train, clock, ticket, sun, bridge, pulse, binoculars,
    //             sunset, route, landmark, camera
    info: [
      { icon: "pin",    label: { en: "Address", th: "ที่อยู่" },
        value: { en: "Ratchadaphisek Road, Khlong Toei, Bangkok (next to Queen Sirikit National Convention Center)", th: "ถนนรัชดาภิเษก เขตคลองเตย กรุงเทพฯ (ติดกับศูนย์การประชุมแห่งชาติสิริกิติ์)" } },
      { icon: "train",  label: { en: "Getting there", th: "การเดินทาง" },
        value: { en: "MRT Queen Sirikit National Convention Centre station", th: "รถไฟฟ้า MRT สถานีศูนย์การประชุมแห่งชาติสิริกิติ์" } },
      { icon: "clock",  label: { en: "Opening hours", th: "เวลาเปิด" },
        value: { en: "Daily, 5:00 AM – 9:00 PM", th: "ทุกวัน 05:00 – 21:00 น." } },
      { icon: "ticket", label: { en: "Entry", th: "ค่าเข้าชม" },
        value: { en: "Free", th: "ฟรี" } },
      { icon: "sun",    label: { en: "Best time to visit", th: "ช่วงเวลาที่แนะนำ" },
        value: { en: "Early morning or late afternoon (cooler, best light, sunset over the lake)", th: "เช้าตรู่หรือช่วงบ่ายแก่ ๆ (อากาศเย็นกว่า แสงสวย และได้ชมพระอาทิตย์ตกเหนือทะเลสาบ)" } }
    ],
    mapsUrl: "https://maps.google.com/?q=Benjakitti+Forest+Park",

    // Thai uses Buddhist Era years (พ.ศ.)
    timeline: [
      { year: { en: "1950s", th: "ทศวรรษ 2490" },
        text: { en: "Land in Khlong Toei used by Thailand's state tobacco factory", th: "ที่ดินย่านคลองเตยเป็นที่ตั้งของโรงงานยาสูบของรัฐ" } },
      { year: { en: "1991", th: "2534" },
        text: { en: "Government decides to move the factory and turn the land into a public park", th: "รัฐบาลมีมติย้ายโรงงานยาสูบ และเปลี่ยนที่ดินให้เป็นสวนสาธารณะ" } },
      { year: { en: "2004", th: "2547" },
        text: { en: "First section (the lake park) opens, named in honour of Queen Sirikit", th: "สวนส่วนแรก (สวนน้ำและทะเลสาบ) เปิดให้บริการ ตั้งชื่อเพื่อเฉลิมพระเกียรติสมเด็จพระนางเจ้าสิริกิติ์" } },
      { year: { en: "2016", th: "2559" },
        text: { en: "More factory land set aside for a new forest park", th: "พื้นที่โรงงานส่วนเพิ่มเติมถูกจัดสรรเพื่อสร้างสวนป่าแห่งใหม่" } },
      { year: { en: "2022", th: "2565" },
        text: { en: "Benjakitti Forest Park opens with wetlands, forest zones and the elevated skywalk; old factory buildings are reused as sports facilities and a museum", th: "สวนป่าเบญจกิติเปิดให้บริการ พร้อมพื้นที่ชุ่มน้ำ โซนป่า และสกายวอล์กลอยฟ้า ส่วนอาคารโรงงานเก่าถูกปรับเป็นศูนย์กีฬาและพิพิธภัณฑ์" } }
    ],

    thingsToDo: [
      { icon: "bridge",     text: { en: "Walk the elevated skywalk over the wetlands and treetops", th: "เดินบนสกายวอล์กลอยฟ้าเหนือพื้นที่ชุ่มน้ำและยอดไม้" } },
      { icon: "pulse",      text: { en: "Jog or cycle the park paths", th: "วิ่งหรือปั่นจักรยานไปตามเส้นทางในสวน" } },
      { icon: "binoculars", text: { en: "Birdwatch: egrets, mynas and more around the ponds", th: "ดูนก ทั้งนกยาง นกเอี้ยง และอีกมากมายรอบบ่อน้ำ" } },
      { icon: "sunset",     text: { en: "Watch the sunset over the lake", th: "ชมพระอาทิตย์ตกเหนือทะเลสาบ" } },
      { icon: "route",      text: { en: "Walk the “Green Mile” connecting to Lumphini Park", th: "เดินตามทางเชื่อมสีเขียว “Green Mile” ไปยังสวนลุมพินี" } },
      { icon: "landmark",   text: { en: "Visit the converted tobacco factory buildings", th: "ชมอาคารโรงงานยาสูบเก่าที่ถูกปรับโฉมใหม่" } },
      { icon: "camera",     text: { en: "Photograph green nature against the city skyline", th: "ถ่ายภาพธรรมชาติสีเขียวตัดกับเส้นขอบฟ้าของเมือง" } }
    ],

    tips: [
      { en: "Bring water, wear comfy shoes and a cap", th: "พกน้ำ ใส่รองเท้าที่ใส่สบาย และสวมหมวก" },
      { en: "Take your trash with you", th: "นำขยะกลับไปทิ้งด้วย" },
      { en: "Stay on paths", th: "เดินตามทางที่จัดไว้" },
      { en: "Don't feed the animals", th: "ไม่ให้อาหารสัตว์" }
    ]
  }
};
