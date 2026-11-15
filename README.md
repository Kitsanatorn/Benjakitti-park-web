# 🌿 เว็บไซต์สวนป่าเบญจกิติ (Benjakitti Forest Park Website)

เว็บไซต์สำหรับ **สวนป่าเบญจกิติ (Benjakitti Forest Park)** กรุงเทพมหานคร ได้รับการออกแบบตามแนวคิดทันสมัย รักษ์สิ่งแวดล้อม (Eco-Friendly) และเน้นประสบการณ์ผู้ใช้ (UX/UI) ที่ยอดเยี่ยม รองรับการใช้งานทั้งบนมือถือ แท็บเล็ต และคอมพิวเตอร์

---

## 🌟 ฟีเจอร์หลัก (Key Features)

### 1. หน้าแรก (Home Page & Hero Banner)
- **Hero Banner:** ภาพทิวทัศน์ Skywalk และป่ากลางเมือง พร้อมคำโปรยและปุ่มลัด
- **Quick Info Bar:**
  - สถานะเปิด-ปิดสวนแบบเรียลไทม์ (04:30 - 22:00 น.) พร้อมไฟสถานะ Pulse เขียว/ส้ม
  - สภาพอากาศ อุณหภูมิ และความชื้น
  - **ดัชนีคุณภาพอากาศ & ค่าฝุ่น PM 2.5 เรียลไทม์ (AQI)**
  - ข้อมูลค่าเข้าชม (เข้าฟรีทุกคน)
- **Highlight Zones (6 โซนไฮไลต์):** สวนป่าและพื้นที่ชุ่มน้ำ, Skywalk ลอยฟ้า, ศูนย์กีฬาเบญจกิติ, สวนน้ำ & เลนปั่น, Dog Park (สวนสุนัข) และลานอัฒจันทร์กลางแจ้ง

---

### 2. 🏆 ฟีเจอร์ใหม่: Nature Reflection Tournament (กิจกรรมสำรวจมุมโปรดในสวน)
กิจกรรมค้นหา **"มุมโปรดที่ตรงใจคุณที่สุด"** ในสวนป่าเบญจกิติผ่านกระบวนการเลือกภาพแบบ Tournament 5 รอบ:

- **State 1: หน้าเริ่มต้น (Intro State):** คำแนะนำกิจกรรม ปุ่ม "เริ่มสำรวจมุมโปรด (5 รอบ)" และปุ่มลัดเปิดดูกระดานความรู้สึกสาธารณะ (Community Dashboard)
- **State 2: โหมด Tournament 5 รอบ:**
  - **รอบที่ 1:** สุ่มภาพสถานที่ 2 รูปจากคลัง 10 จุดสำคัญในสวน (ไม่ซ้ำกัน) แสดงประกบคู่ซ้าย-ขวา (Side-by-side)
  - **รอบที่ 2 ถึง 5:** คงภาพที่ชนะเลิศในรอบก่อนไว้ทางฝั่งซ้าย (ติด Badge `🏆 มุมโปรดปัจจุบันของคุณ`) และสุ่มภาพท้าทายใหม่จากคลังที่ยังไม่เคยถูกนำมาแสดงในเซสชันนั้นมาประกบทางฝั่งขวา
  - มี Progress Bar แสดงความคืบหน้ารายรอบ (`รอบที่ 1 / 5` ถึง `5 / 5`)
  - แอนิเมชัน Fade-in นุ่มนวลเวลาเปลี่ยนรอบ
  - **ระบบป้องกันการสุ่มซ้ำ:** ติดตามด้วย `shownPhotoIds (Set)` ทำให้ตลอดการเล่น 5 รอบ ประเมินภาพที่ไม่ซ้ำกันรวม 6 สถานที่
- **State 3: หน้าสรุปผลและเขียนความรู้สึก (Final Reflection):**
  - แสดงภาพแชมป์อันดับ 1 ของผู้เล่น พร้อมชื่อโซนและรายละเอียดสถานที่
  - ฟอร์มเขียนความรู้สึก (Textarea) จำกัดไม่เกิน 200 ตัวอักษร พร้อมตัวนับจำนวนแบบเรียลไทม์ (`0 / 200`)
  - ช่องกรอกชื่อ/นามปากกา (Default: `นักสำรวจนิรนาม` / `Anonymous Explorer`)
  - ปุ่มส่งความรู้สึกขึ้นสู่กระดานชุมชน และปุ่มเล่นใหม่อีกครั้ง
- **State 4: กระดานความรู้สึกสาธารณะ (Community Dashboard):**
  - แสดงโปสการ์ดความรู้สึกจากผู้เยี่ยมชมทุกคนในรูปแบบ **Card Grid / Postcard Wall**
  - แสดงภาพที่ชนะ, ชื่อโซน, ข้อความความรู้สึก, ชื่อผู้เขียน, วันที่โพสต์, และตราประทับ `BJK • PARK`
  - ปุ่มกดหัวใจ (Like Button) พร้อมตัวเลขนับจำนวนไลก์และบันทึกลงฐานข้อมูลทันที
  - ตัวกรองตามโซน (ทั้งหมด, สวนป่า & Skywalk, พื้นที่ชุ่มน้ำ, ทะเลสาบ, ลานอัฒจันทร์, สวนสุนัข)

---

### 3. แผนที่และระบบนำทาง (Interactive GIS Map)
- ขับเคลื่อนด้วย **Leaflet.js** (OpenStreetMap + Esri Satellite View) **ฟรี 100% ไม่มีลายน้ำ API Key**
- หมุดจำแนกสีตามหมวดหมู่: ประตูทางเข้า-ออก, ลานจอดรถ, ศูนย์กีฬา, ห้องน้ำ/บริการ, จุดชมวิว Skywalk
- ตัวกรอง Category Filter Pills และ Side Panel แสดงรายละเอียดพร้อมปุ่มนำทาง Google Maps

### 4. เส้นทางออกกำลังกาย & ศูนย์กีฬา (Activities & Sports)
- 3 เส้นทางออกกำลังกาย: ลู่วิ่งรอบใหญ่ 5.8 กม., เลนจักรยาน 3.2 กม., เส้นทาง Skywalk 1.6 กม.
- คู่มือศูนย์กีฬาในร่ม: เข้าใช้งานฟรีแบบ Walk-in (05:00 - 21:00 น.) 6 ชนิดกีฬา
- ปฏิทินกิจกรรม (Events Calendar)

### 5. แหล่งเรียนรู้นิเวศ & กฎระเบียบ (Eco-Education & Visitor Info)
- ฐานข้อมูลพรรณไม้และสัตว์ พร้อม Modal รายละเอียด
- แนวคิดเมืองฟองน้ำ (Sponge City) และเรื่องราวความยั่งยืน
- วิธีการเดินทางด้วย MRT ศูนย์ฯ สิริกิติ์, BTS อโศก, สะพานเขียว (Green Mile) และรถยนต์ส่วนตัว
- กฎระเบียบของสวน และ FAQ Accordion

---

## 🔌 การเชื่อมต่อ Backend / Database (เช่น Supabase หรือ REST API)

โค้ดส่วน Data Layer ได้รับการออกแบบแยกส่วนแบบ Clean Architecture อยู่ในไฟล์ [`tournament-data.js`](file:///Users/driven/.gemini/antigravity/scratch/benjakitti-park-web/tournament-data.js) ผ่านคลาส `ReflectionDataService`:

```javascript
// ตัวอย่างการเชื่อมต่อกับ Supabase:
class ReflectionDataService {
  async getAll() {
    const { data, error } = await supabase
      .from('user_reflections')
      .select('*')
      .order('created_at', { ascending: false });
    return data;
  }

  async addReflection({ spotId, zoneNameTh, zoneNameEn, imageUrl, reflection, author }) {
    const { data, error } = await supabase
      .from('user_reflections')
      .insert([{
        spot_id: spotId,
        zone_name_th: zoneNameTh,
        zone_name_en: zoneNameEn,
        image_url: imageUrl,
        reflection_th: reflection,
        author_th: author
      }]);
    return data[0];
  }

  async toggleLike(reflectionId) {
    // เรียก RPC หรือ update count ใน Supabase
  }
}
```

ปัจจุบันระบบตั้งค่าเริ่มต้นเป็น **LocalStorage (`benjakitti_reflections_v2`)** ร่วมกับ Mock Data 10 สถานที่และ 5 โปสการ์ดตั้งต้น ทำให้สามารถทดสอบฟีเจอร์ได้ทันทีโดยไม่ต้องตั้งค่า Server!

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```
benjakitti-park-web/
├── index.html            # โครงสร้างหน้าเว็บหลัก + จุด Mount ของ Tournament (#tournament)
├── styles.css            # ดีไซน์ Glassmorphism, แอนิเมชัน Tournament และการ์ดโปสการ์ด
├── data.js              # ฐานข้อมูลข้อมูลสวน, แผนที่, เส้นทาง, UI Translations (TH/EN)
├── tournament-data.js   # คลังภาพ 10 จุดในสวน, ข้อมูลโปสการ์ด, และ Data Service
├── tournament.js        # Controller จัดการ 4 State (Intro, 5-Round Play, Result, Dashboard)
├── app.js               # จัดการแผนที่ Leaflet, เสียงสังเคราะห์ และการแปลภาษา
└── README.md             # เอกสารแนะนำและคู่มือการใช้งาน
```
