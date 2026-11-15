// Nature Reflection Tournament Data & Service
// Provides photo spots, initial mock community reflections, and abstracted Data Service (LocalStorage / Supabase ready)

const tournamentSpots = [
  {
    id: "spot-skywalk-sunset",
    zoneKey: "forest",
    zoneNameTh: "สวนป่า & Skywalk",
    zoneNameEn: "Forest & Skywalk",
    titleTh: "จุดชมวิวพระอาทิตย์ตกบน Skywalk",
    titleEn: "Skywalk Sunset Viewpoint",
    descTh: "ทางเดินลอยฟ้าทอดยาวเหนือบึงน้ำและร่มเงาต้นไม้ ชมวิวพระอาทิตย์ตกที่ล้อมรอบด้วยทิวทัศน์เมือง",
    descEn: "Elevated skywalk above the wetland and tree canopy, offering a panoramic sunset view over the city",
    imageUrl: "https://img-v2.salehere.co.th/p/1200x0/2024/08/29/w8gptjrg0ett.jpg",
    tagsTh: ["โรแมนติก", "วิวเมือง", "พระอาทิตย์ตก"],
    tagsEn: ["Sunset", "Cityline", "Skywalk"]
  },
  {
    id: "spot-central-wetland",
    zoneKey: "wetland",
    zoneNameTh: "พื้นที่ชุ่มน้ำบำบัด",
    zoneNameEn: "Central Wetland Sanctuary",
    titleTh: "บึงชุ่มน้ำและทุ่งกกบำบัดธรรมชาติ",
    titleEn: "Bio-Retention Wetland & Reedbeds",
    descTh: "เกาะระบบนิเวศจำลองที่เต็มไปด้วยพืชน้ำดักตะกอนและสายลมอ่อนยามเช้า",
    descEn: "Natural phytoremediation ponds filtering urban waters amid morning mist",
    imageUrl: "https://altv-cms-images.s3.amazonaws.com/content/image_1659374040898694774.jpg",
    tagsTh: ["ชุ่มน้ำ", "ระบบนิเวศ", "เงียบสงบ"],
    tagsEn: ["Wetland", "Ecosystem", "Serene"]
  },
  {
    id: "spot-lake-reflection",
    zoneKey: "lake",
    zoneNameTh: "สวนน้ำ & ทะเลสาบ",
    zoneNameEn: "Lake & Waterside Promenade",
    titleTh: "ผืนน้ำกว้างสะท้อนเงาตึกระฟ้า",
    titleEn: "Lake Mirror & Skyline Reflection",
    descTh: "มุมมองริมน้ำ 130 ไร่ที่มีผิวน้ำนิ่งสงบ ดั่งกระจกสะท้อนสถาปัตยกรรมกรุงเทพฯ",
    descEn: "Vast 130-rai tranquil water reflecting modern glass skyscrapers",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Benjakitti_Park%2C_Bangkok.jpg",
    tagsTh: ["ริมน้ำ", "สะท้อนเงา", "กว้างใหญ่"],
    tagsEn: ["Waterfront", "Reflection", "Spacious"]
  },
  {
    id: "spot-forest-canopy",
    zoneKey: "forest",
    zoneNameTh: "สวนป่าเบญจกิติ",
    zoneNameEn: "Native Woodland Trail",
    titleTh: "อุโมงค์ต้นไม้และเนินดินป่าเมือง",
    titleEn: "Mounded Forest & Shade Canopy",
    descTh: "ทางเดินร่มรื่นใต้ร่มเงาต้นทองกวาวและจิกน้ำ สูดอากาศบริสุทธิ์ได้เต็มปอด",
    descEn: "Verdant shade trails under native blooming canopies and cooling mounds",
    imageUrl: "https://s359.kapook.com/pagebuilder/539a1fbb-2085-47cb-b2e2-be4d677093b2.jpg",
    tagsTh: ["ร่มรื่น", "ต้นไม้ใหญ่", "อากาศบริสุทธิ์"],
    tagsEn: ["Shaded", "OldTrees", "FreshAir"]
  },
  {
    id: "spot-amphitheater-lawn",
    zoneKey: "amphitheater",
    zoneNameTh: "ลานหญ้าริมน้ำสำหรับกิจกรรมกลางแจ้ง",
    zoneNameEn: "Lakeside Lawn for Outdoor Events",
    titleTh: "ลานหญ้าริมน้ำสำหรับกิจกรรมกลางแจ้ง",
    titleEn: "Lakeside Lawn for Outdoor Events",
    descTh: "พื้นที่สำหรับชมวิวบึงน้ำ กิจกรรมชุมชน และปิกนิกยามเย็นแบบผ่อนคลาย",
    descEn: "Lakeside grass area for community events, sunset picnics, and relaxed lakeside leisure",
    imageUrl: "https://www.dailynews.co.th/wp-content/uploads/2026/05/1777716129110.jpg",
    tagsTh: ["ปิกนิก", "ริมน้ำ", "ผ่อนคลาย"],
    tagsEn: ["Picnic", "Waterfront", "Relaxation"]
  },
  {
    id: "spot-green-mile",
    zoneKey: "greenmile",
    zoneNameTh: "สะพานเขียว (Green Mile)",
    zoneNameEn: "Green Mile Elevated Link",
    titleTh: "ทางเชื่อมลอยฟ้าสู่สวนลุมพินี",
    titleEn: "Elevated Walkway to Lumphini",
    descTh: "สะพานคนเดินและปั่นจักรยานยกระดับ 1.6 กม. พาดผ่านชุมชนเมืองและแมกไม้",
    descEn: "1.6 km pedestrian & bicycle flyover bridging urban life and ancient trees",
    imageUrl: "https://zipevent.blob.core.windows.net/images/PublicSpace/space/36F46595-DE5A-4A8B-9A9D-30A65F7A3A23/gallery/36F46595-DE5A-4A8B-9A9D-30A65F7A3A23-A4583877-1C54-49F4-AF0E-3BF004CCFD59.jpeg",
    tagsTh: ["สะพานลอยฟ้า", "ปั่นจักรยาน", "เชื่อมต่อ"],
    tagsEn: ["Flyover", "Cycling", "Connected"]
  },
  {
    id: "spot-lotus-pond",
    zoneKey: "wetland",
    zoneNameTh: "พื้นที่ชุ่มน้ำบำบัด",
    zoneNameEn: "Wetland Lotus Cove",
    titleTh: "บึงบัวหลวงและสะพานไม้ชายน้ำ",
    titleEn: "Blooming Lotus & Shoreline Boardwalk",
    descTh: "ดอกบัวสีชมพูบานสะพรั่งเหนือน้ำใส เป็นที่อยู่อาศัยของนกน้ำและแมลงปอ",
    descEn: "Pink sacred lotus blooms attracting dragonflies and resident waterfowl",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Benjakitti_Park%2C_Bangkok_2.jpg",
    tagsTh: ["ดอกบัว", "นกน้ำ", "งดงาม"],
    tagsEn: ["Lotus", "Waterfowl", "Scenic"]
  },
  {
    id: "spot-heritage-warehouse",
    zoneKey: "heritage",
    zoneNameTh: "อาคารอนุรักษ์ประวัติศาสตร์",
    zoneNameEn: "Heritage Brick Warehouse",
    titleTh: "โกดังอิฐเก่าโรงงานยาสูบ",
    titleEn: "Preserved Tobacco Factory Facade",
    descTh: "สถาปัตยกรรมอิฐมอญคลาสสิกที่ถูกปรับเปลี่ยนเป็นพื้นที่ศิลปะและศูนย์กีฬา",
    descEn: "Classic red-brick industrial heritage revitalized into sports and art spaces",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQde_Cg-3BAHbSsvNDAYxYdzAkTztWuf6TBowlktAoedPIMhXjZ5AZ6Kg4&s=10",
    tagsTh: ["ประวัติศาสตร์", "สถาปัตยกรรม", "วินเทจ"],
    tagsEn: ["Heritage", "Architecture", "Vintage"]
  },
  {
    id: "spot-dog-park",
    zoneKey: "dogpark",
    zoneNameTh: "สวนสุนัขเบญจกิติ",
    zoneNameEn: "Benjakitti Dog Park",
    titleTh: "ลานวิ่งเล่นของน้องหมาและเพื่อนสี่ขา",
    titleEn: "Paws Lawn & Pet Play Ground",
    descTh: "สนามหญ้าร่มรื่นพร้อมรั้วปลอดภัย พื้นที่แห่งรอยยิ้มและมิตรภาพของคนรักสัตว์",
    descEn: "Fenced green playground where joyful dogs and pet lovers socialize safely",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/af/Beagle_at_Benjakitti_Dog_Park.jpg",
    tagsTh: ["สัตว์เลี้ยง", "ร่าเริง", "เพื่อนสี่ขา"],
    tagsEn: ["PetFriendly", "Joyful", "DogLovers"]
  },
  {
    id: "spot-skate-arena",
    zoneKey: "sports",
    zoneNameTh: "ศูนย์กีฬา & สเก็ตพาร์ก",
    zoneNameEn: "Skate Park & Arena",
    titleTh: "ลานสเก็ตบอร์ดและกิจกรรมคนรุ่นใหม่",
    titleEn: "Outdoor Skate Park & Pump Track",
    descTh: "ลานคอนกรีตมาตรฐานกลางแจ้ง ท่ามกลางบรรยากาศต้นไม้ใหญ่และเสียงหัวเราะ",
    descEn: "Smooth concrete bowl and rails surrounded by trees and vibrant youth energy",
    imageUrl: "https://www.marketingoops.com/wp-content/uploads/2024/11/resize-RBSkateENT-LS_06.jpg",
    tagsTh: ["พลังชีวิต", "สเก็ต", "คนรุ่นใหม่"],
    tagsEn: ["YouthEnergy", "Skate", "Active"]
  }
];

// Pre-populated initial community reflections
const initialCommunityReflections = [
  {
    id: "ref-101",
    spotId: "spot-skywalk-sunset",
    zoneNameTh: "สวนป่า & Skywalk",
    zoneNameEn: "Forest & Skywalk",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/94/Benjakitti_Forest_Park_%28I%29.jpg",
    reflectionTh: "การได้ยืนมองแสงอาทิตย์สีส้มสะท้อนยอดไม้กลางเมืองหลวง ทำให้ลืมความเหนื่อยล้าจากการทำงานไปหมดสิ้น เป็นมุมที่ฮีลใจได้ดีที่สุดในกรุงเทพฯ",
    reflectionEn: "Watching the twilight glow filter through urban treetops makes all workday fatigue melt away. The most healing sunset in Bangkok.",
    authorTh: "พิมพ์นภัส (นักวิ่งยามเย็น)",
    authorEn: "Pimnaphas (Sunset Runner)",
    likes: 42,
    isLiked: false,
    createdAt: "2026-11-15T18:45:00.000Z"
  },
  {
    id: "ref-102",
    spotId: "spot-central-wetland",
    zoneNameTh: "พื้นที่ชุ่มน้ำบำบัด",
    zoneNameEn: "Central Wetland Sanctuary",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Benjakitti_Park%2C_Bangkok_2.jpg",
    reflectionTh: "ทุ่งกกบำบัดน้ำนี้ไม่ใช่แค่สวย แต่ทำหน้าที่เป็นปอดและไตฟอกน้ำให้เมือง ไม่น่าเชื่อว่าใจกลางสุขุมวิทจะมีระบบนิเวศที่สมบูรณ์ขนาดนี้",
    reflectionEn: "This bio-wetland isn't just picturesque—it's the living kidney of our city. Unbelievable biodiversity right beside Sukhumvit.",
    authorTh: "ต้นกล้า คนรักป่า",
    authorEn: "Tonkla Nature Guardian",
    likes: 35,
    isLiked: false,
    createdAt: "2026-11-15T14:20:00.000Z"
  },
  {
    id: "ref-103",
    spotId: "spot-lake-reflection",
    zoneNameTh: "สวนน้ำ & ทะเลสาบ",
    zoneNameEn: "Lake & Waterside Promenade",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Benjakitti_Park%2C_Bangkok.jpg",
    reflectionTh: "ผิวน้ำนิ่งสงบจนเห็นเงาตึกสุขุมวิทกลับหัว ปั่นจักรยานรอบบึงตอนเช้าตรู่ ลมเย็นสบายเหมือนไม่ได้อยู่ในเมืองใหญ่",
    reflectionEn: "The still lake mirrors the cityscape upside down. Cycling this loop in the cool morning air feels like an idyllic countryside escape.",
    authorTh: "ก้องภพ สายปั่น",
    authorEn: "Kongpop Cyclist",
    likes: 28,
    isLiked: false,
    createdAt: "2026-11-14T07:15:00.000Z"
  },
  {
    id: "ref-104",
    spotId: "spot-amphitheater-lawn",
    zoneNameTh: "ลานอัฒจันทร์ริมน้ำ",
    zoneNameEn: "Lakeside Amphitheater",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Panorama_of_Benjakitti_Park%2C_Bangkok_2.jpg",
    reflectionTh: "ปูเสื่อนั่งฟังดนตรีในสวนกับครอบครัว ลมพัดโชยผิวน้ำ มีความสุขแบบเรียบง่ายและเข้าถึงได้ฟรีสำหรับทุกคน",
    reflectionEn: "Spreading a picnic mat with family listening to acoustic music by the water. Pure, simple public joy accessible to everyone.",
    authorTh: "ครอบครัวใจดี",
    authorEn: "Jaidee Family",
    likes: 51,
    isLiked: true,
    createdAt: "2026-11-13T19:30:00.000Z"
  },
  {
    id: "ref-105",
    spotId: "spot-dog-park",
    zoneNameTh: "สวนสุนัขเบญจกิติ",
    zoneNameEn: "Benjakitti Dog Park",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/af/Beagle_at_Benjakitti_Dog_Park.jpg",
    reflectionTh: "พาน้องโกลเด้นมาวิ่งเล่น ปลอดภัย รั้วรอบขอบชิด เจ้าของสุนัขทุกคนมีน้ำใจและช่วยกันดูแลความสะอาด น่ารักมากๆ ครับ",
    reflectionEn: "Brought my Golden Retriever here to run freely and safely. Fellow pet owners are so friendly and mindful of cleanliness.",
    authorTh: "เตชินท์ & เจ้ามอคค่า",
    authorEn: "Techin & Mocha",
    likes: 19,
    isLiked: false,
    createdAt: "2026-11-12T16:10:00.000Z"
  }
];

/**
 * =========================================================================
 * ReflectionService (Data Layer)
 * -------------------------------------------------------------------------
 * Uses Supabase when configured, otherwise falls back to LocalStorage and mock data.
 * =========================================================================
 */
const REFLECTION_TABLE = 'user_reflections';

function getSupabaseConfig() {
  const config = (typeof window !== 'undefined' && window.SUPABASE_CONFIG) ? window.SUPABASE_CONFIG : {};
  const url = String(config.url || '').trim();
  const anonKey = String(config.anonKey || config.key || '').trim();
  const hasPlaceholder = !url || !anonKey || url.includes('YOUR_') || anonKey.includes('YOUR_');
  return { url, anonKey, hasPlaceholder };
}

function getSupabaseClient() {
  const { url, anonKey, hasPlaceholder } = getSupabaseConfig();

  if (hasPlaceholder || typeof window === 'undefined' || !window.supabase || typeof window.supabase.createClient !== 'function') {
    return null;
  }

  return window.supabase.createClient(url, anonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false
    }
  });
}

function readLocalReflections() {
  try {
    if (typeof localStorage === 'undefined') {
      return [...initialCommunityReflections];
    }

    const json = localStorage.getItem('benjakitti_reflections_v2');
    return json ? JSON.parse(json) : [...initialCommunityReflections];
  } catch (e) {
    return [...initialCommunityReflections];
  }
}

function writeLocalReflections(items) {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('benjakitti_reflections_v2', JSON.stringify(items));
    }
  } catch (e) {
    console.warn('Could not persist local reflection data.', e);
  }
}

function readStoredLikes() {
  try {
    if (typeof localStorage === 'undefined') return [];
    return JSON.parse(localStorage.getItem('benjakitti_user_likes_v2') || '[]');
  } catch (e) {
    return [];
  }
}

function writeStoredLikes(items) {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('benjakitti_user_likes_v2', JSON.stringify(items));
    }
  } catch (e) {
    console.warn('Could not persist like state.', e);
  }
}

function normalizeSupabaseRow(row) {
  const likes = Number(row.likes ?? row.like_count ?? 0);
  return {
    id: row.id,
    spotId: row.spot_id ?? row.spotId,
    zoneNameTh: row.zone_name_th ?? row.zoneNameTh,
    zoneNameEn: row.zone_name_en ?? row.zoneNameEn,
    imageUrl: row.image_url ?? row.imageUrl,
    reflectionTh: row.reflection_th ?? row.reflectionTh ?? row.reflection ?? '',
    reflectionEn: row.reflection_en ?? row.reflectionEn ?? row.reflection ?? '',
    authorTh: row.author_th ?? row.authorTh ?? 'นักสำรวจนิรนาม',
    authorEn: row.author_en ?? row.authorEn ?? 'Anonymous Explorer',
    likes,
    isLiked: false,
    createdAt: row.created_at ?? row.createdAt ?? new Date().toISOString()
  };
}

class ReflectionDataService {
  constructor() {
    this.storageKey = 'benjakitti_reflections_v2';
    this.likesKey = 'benjakitti_user_likes_v2';
    this.supabase = getSupabaseClient();
    this._initStorage();
  }

  _initStorage() {
    this.memoryStore = [...initialCommunityReflections];

    try {
      if (typeof localStorage !== 'undefined') {
        const stored = localStorage.getItem(this.storageKey);
        if (!stored) {
          localStorage.setItem(this.storageKey, JSON.stringify(initialCommunityReflections));
        }
        if (!localStorage.getItem(this.likesKey)) {
          localStorage.setItem(this.likesKey, JSON.stringify(['ref-104']));
        }
      }
    } catch (e) {
      console.warn('LocalStorage not accessible, falling back to memory state', e);
    }
  }

  async getAll() {
    if (this.supabase) {
      try {
        const { data, error } = await this.supabase
          .from(REFLECTION_TABLE)
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        const items = (data || []).map(normalizeSupabaseRow);
        const userLikes = readStoredLikes();

        return items.map(item => ({
          ...item,
          isLiked: userLikes.includes(item.id)
        }));
      } catch (e) {
        console.error('Supabase reflections fetch failed.', e);
        throw e;
      }
    }

    try {
      const items = readLocalReflections();
      const userLikes = readStoredLikes();
      return items.map(item => ({
        ...item,
        isLiked: userLikes.includes(item.id)
      }));
    } catch (e) {
      return this.memoryStore || initialCommunityReflections;
    }
  }

  async addReflection({ spotId, zoneNameTh, zoneNameEn, imageUrl, reflection, author }) {
    if (this.supabase) {
      try {
        const payload = {
          spot_id: spotId,
          zone_name_th: zoneNameTh,
          zone_name_en: zoneNameEn,
          image_url: imageUrl,
          reflection_th: reflection,
          reflection_en: reflection,
          author_th: author || 'นักสำรวจนิรนาม',
          author_en: author || 'Anonymous Explorer',
          likes: 0,
          created_at: new Date().toISOString()
        };

        const { data, error } = await this.supabase
          .from(REFLECTION_TABLE)
          .insert([payload])
          .select()
          .single();

        if (error) throw error;
        return normalizeSupabaseRow(data);
      } catch (e) {
        console.error('Supabase insert failed. Real DB write did not complete.', e);
        throw e;
      }
    }

    try {
      const list = await this.getAll();
      const newEntry = {
        id: 'ref-' + Date.now(),
        spotId,
        zoneNameTh,
        zoneNameEn,
        imageUrl,
        reflectionTh: reflection,
        reflectionEn: reflection,
        authorTh: author || 'นักสำรวจนิรนาม',
        authorEn: author || 'Anonymous Explorer',
        likes: 0,
        isLiked: false,
        createdAt: new Date().toISOString()
      };

      list.unshift(newEntry);
      writeLocalReflections(list);
      return newEntry;
    } catch (e) {
      console.error('Failed to save reflection:', e);
      throw e;
    }
  }

  async toggleLike(reflectionId) {
    const list = await this.getAll();
    let userLikes = readStoredLikes();
    const target = list.find(item => item.id === reflectionId);

    if (!target) return null;

    let isLiked = userLikes.includes(reflectionId);

    if (this.supabase) {
      try {
        const nextLikes = isLiked ? Math.max(0, Number(target.likes || 0) - 1) : Number(target.likes || 0) + 1;
        const { error } = await this.supabase
          .from(REFLECTION_TABLE)
          .update({ likes: nextLikes })
          .eq('id', reflectionId);

        if (!error) {
          if (isLiked) {
            userLikes = userLikes.filter(id => id !== reflectionId);
            isLiked = false;
          } else {
            userLikes = [...new Set([...userLikes, reflectionId])];
            isLiked = true;
          }

          writeStoredLikes(userLikes);
          return { id: reflectionId, likes: nextLikes, isLiked };
        }
      } catch (e) {
        console.warn('Supabase like sync failed, using local fallback.', e);
      }
    }

    if (isLiked) {
      userLikes = userLikes.filter(id => id !== reflectionId);
      target.likes = Math.max(0, (target.likes || 1) - 1);
      isLiked = false;
    } else {
      userLikes.push(reflectionId);
      target.likes = (target.likes || 0) + 1;
      isLiked = true;
    }

    writeStoredLikes(userLikes);
    writeLocalReflections(list);
    return { id: reflectionId, likes: target.likes, isLiked };
  }

  async clearAll() {
    try {
      if (this.supabase) {
        const { error } = await this.supabase
          .from(REFLECTION_TABLE)
          .delete()
          .neq('id', '00000000-0000-0000-0000-000000000000');

        if (error) {
          console.warn('Failed to clear Supabase reflections, continuing with local reset.', error);
        }
      }
    } catch (e) {
      console.warn('Supabase clear failed.', e);
    }

    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem(this.storageKey);
        localStorage.removeItem(this.likesKey);
      }
    } catch (e) {
      console.warn('Failed to clear localStorage reflections.', e);
    }

    this.memoryStore = [...initialCommunityReflections];
    return true;
  }
}

// Global export for spots
if (typeof window !== 'undefined') {
  window.tournamentSpots = tournamentSpots;
} else if (typeof global !== 'undefined') {
  global.tournamentSpots = tournamentSpots;
}

// Global service instance
if (typeof window !== 'undefined') {
  window.reflectionService = new ReflectionDataService();
} else if (typeof global !== 'undefined') {
  global.reflectionService = new ReflectionDataService();
}
