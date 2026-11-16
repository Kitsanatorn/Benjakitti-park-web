/* =====================================================================
   SITE CONTENT: edit everything here. No coding knowledge needed:
   just change the text between the quotes "like this".
   Photos: put files in the /assets folders and make sure the file
   names below match exactly (including .jpg).
   ===================================================================== */

window.SITE = {
  // Group code: shown on the landing screen and in the footer
  group: "INT-33-03",
  course: "GEN241 Real Aesthete",

  /* ---------- Landing screen ---------- */
  landing: {
    title: "A Visit to Benjakitti Forest Park",
    subtitle: "How an old tobacco factory became Bangkok's living lung",
    // Background photos: crossfade every ~5 seconds (first one shows first)
    backgrounds: [
      { src: "assets/hero.jpg",             alt: "Wooden boardwalks through the green wetland, with Bangkok skyscrapers behind" },
      { src: "assets/landing/entrance.jpg", alt: "Our group at the Benjakitti Forest Park entrance sign" },
      { src: "assets/landing/railing.jpg",  alt: "Visitors on the skywalk above the wetland" }
    ],
    button: "Explore"
  },

  // Soft, blurred park photo behind the main tabs
  backgroundPhoto: "assets/hero.jpg",

  /* ---------- Tab 1: Our Visit ---------- */
  visit: {
    banner: {
      src: "assets/visit/06.jpg",
      eyebrow: "Fieldwork · Nature's Beauty",
      title: "Our Visit",
      intro: "What we saw, heard and learned at Benjakitti Forest Park."
    },

    // Slideshow photos (in /assets/visit/), in the order we took them.
    // "visit" is shown as a small label above the caption. Add or remove lines freely.
    slides: [
      { src: "assets/visit/01.jpg", visit: "Visit 1", caption: "The lake fountain under a stormy sky" },
      { src: "assets/visit/02.jpg", visit: "Visit 1", caption: "Storm clouds over the lake plaza" },
      { src: "assets/visit/03.jpg", visit: "Visit 1", caption: "Our group at the park entrance" },
      { src: "assets/visit/04.jpg", visit: "Visit 1", caption: "The quiet memorial plaza" },
      { src: "assets/visit/05.jpg", visit: "Visit 1", caption: "Walking the skywalk through the treetops" },
      { src: "assets/visit/06.jpg", visit: "Visit 1", caption: "The skywalk winding through the trees" },
      { src: "assets/visit/07.jpg", visit: "Visit 1", caption: "Looking out at the skyline from the skywalk" },
      { src: "assets/visit/08.jpg", visit: "Visit 1", caption: "Wetland ponds beneath the skyscrapers" },
      { src: "assets/visit/09.jpg", visit: "Visit 1", caption: "Open lawns under big old trees" },
      { src: "assets/visit/10.jpg", visit: "Visit 1", caption: "Crossing the skywalk bridge" },
      { src: "assets/visit/11.jpg", visit: "Visit 1", caption: "The shaded cycle path" },
      { src: "assets/visit/12.jpg", visit: "Visit 1", caption: "Stopping for an interview on the cycle path" },
      { src: "assets/visit/13.jpg", visit: "Visit 1", caption: "Listening and taking notes" },
      { src: "assets/visit/14.jpg", visit: "Visit 1", caption: "Thank you for talking with us" },
      { src: "assets/visit/15.jpg", visit: "Visit 1", caption: "A photo together after our interview" },
      { src: "assets/visit/16.jpg", visit: "Visit 1", caption: "The park sign by the old entrance" },
      { src: "assets/visit/17.jpg", visit: "Visit 1", caption: "Talking by the lake" },
      { src: "assets/visit/18.jpg", visit: "Visit 1", caption: "Glass towers reflected in the lake" },
      { src: "assets/visit/19.jpg", visit: "Visit 1", caption: "The golden sculpture on the lakeside plaza" },
      { src: "assets/visit/20.jpg", visit: "Visit 1", caption: "White towers along the lake" },
      { src: "assets/visit/21.jpg", visit: "Visit 2", caption: "Boardwalks through the wetland" },
      { src: "assets/visit/22.jpg", visit: "Visit 2", caption: "A boardwalk zig-zag below the towers" },
      { src: "assets/visit/23.jpg", visit: "Visit 2", caption: "The curvy canopy walk over the picnic lawns" },
      { src: "assets/visit/24.jpg", visit: "Visit 2", caption: "A monitor lizard resting under a big tree" },
      { src: "assets/visit/25.jpg", visit: "Visit 2", caption: "A Thai pavilion by the pond" }
    ],

    // Our interviews, grouped by fieldwork day. "story", "quote2" and "detail" are optional.
    interviewGroups: [
      {
        title: "Visit 1",
        date: "4 November 2026",
        interviews: [
          {
            name: "Jogger",
            detail: "About 30 years old",
            quote: "The sunset over the lake is my favourite part.",
            story: "Runs here several evenings a week. The trees and water help her relax after work.",
            takeaway: "Nature here is part of people's daily recovery from city life."
          },
          {
            name: "Park staff member",
            detail: "Benjakitti Forest Park",
            quote: "The wetlands are designed to filter water and hold rainwater during floods.",
            story: "More birds have come since the trees grew bigger.",
            takeaway: "The park's beauty is also in what it does: it cleans water and protects the city."
          },
          {
            name: "Security guard",
            detail: "Here since the park opened",
            quote: "Early morning is the most beautiful time.",
            story: "Has worked here since the park opened. Loves the mist over the lake and the many birds, and says visitors take good care of the plants.",
            takeaway: "People who see the park every day still find it beautiful."
          }
        ]
      },
      {
        title: "Visit 2",
        date: "14 November 2026",
        interviews: [
          {
            name: "Thomas",
            detail: "32 · Urban planner from Lyon, France (on holiday)",
            quote: "The park almost feels like a giant air conditioner for the neighbourhood.",
            story: "Came to escape the heat after two hours walking among buildings and cars. He found the park on Instagram, through videos of the wooden walkways with skyscrapers behind. He walked around the lake and along the raised walkways above the wetland, watching birds, and was moved to see students in graduation gowns taking photos there, choosing a park for such an important moment.",
            quote2: "It's like entering a little bubble. Everything slows down.",
            takeaway: "For a visitor, the park's beauty starts with the body (fresh air, shade and breeze) and then calms the mind."
          },
          {
            name: "Stefan",
            detail: "45 · German, works in international trade, living in Bangkok for 12+ years",
            quote: "Taking care of nature means taking care of ourselves and other people.",
            story: "Came with his son Lukas to get him away from screens. They walk, rent bikes and sit by the water. He loves the late-afternoon light reflecting on the water before sunset, and remembers getting caught in a tropical rainstorm and running to shelter under a pavilion: soaked, but laughing. Living in a big city taught him to appreciate every tree.",
            quote2: "It's the green lung of the neighbourhood\u2026 a place to relax, whether they're rich or poor.",
            takeaway: "The park's beauty is in the memories and connections it creates: a shared space for families and everyone."
          },
          {
            name: "Lukas",
            detail: "Stefan's son",
            quote: "My dad and I often come here to disconnect, walk around, and talk about anything.",
            takeaway: "Nature gives families time together without screens."
          }
        ]
      }
    ],

    // Wrap a word in **double stars** to highlight it
    commonTheme: "Across both visits \u2014 joggers, staff, tourists and families \u2014 everyone described the park as **peaceful**: cooler air, no car horns, only wind and birds. The people who work here see its beauty every day, and the visitors told us the balance between city and nature is **fragile** and worth protecting.",

    closingQuote: {
      text: "Keep creating spaces where the city and nature can live together instead of fighting against each other.",
      by: "Thomas, 32"
    },

    perceptions: "The beauty of Benjakitti Forest Park comes from nature and city living side by side. Land that used to be a tobacco factory is now wetlands, trees and a lake full of life. From the skywalk you see green treetops against glass towers, and that contrast is what makes the view special. The park is also beautiful because of what it does: its wetlands clean water and hold rain, and its trees cool the air and quiet the noise. For locals and staff it is part of everyday life, a place to recover after work and to watch the birds come back; for tourists, families and students it is a place to slow down and make memories. Everyone we met reminded us that this balance between city and nature is fragile \u2014 and worth protecting."
  },

  // Our key takeaway quote (shown in "Our Visit" and at the end of the game)
  takeaway: "Taking care of nature means taking care of ourselves.",

  /* ---------- Tab 2: Play ---------- */
  game: {
    title: "Pick Your Benjakitti Favourite",
    // Short, friendly instruction shown under the title
    instruction: "Tap the photo you like more. Keep picking until you find your favourite spot in the park.",
    // Every play picks 8 of these at random (need at least 8).
    // Game photos are smaller copies in /assets/game/ so each match loads fast.
    pool: [
      { id: "wetland-boardwalks", src: "assets/game/wetland-boardwalks.jpg", label: "Boardwalks through the wetland" },
      { id: "skywalk", src: "assets/game/skywalk.jpg", label: "Skywalk through the treetops" },
      { id: "lake-towers", src: "assets/game/lake-towers.jpg", label: "White towers along the lake" },
      { id: "treetop-walk", src: "assets/game/treetop-walk.jpg", label: "Walking among the treetops" },
      { id: "skywalk-bridge", src: "assets/game/skywalk-bridge.jpg", label: "The skywalk bridge" },
      { id: "skyline-view", src: "assets/game/skyline-view.jpg", label: "Skyline view from the skywalk" },
      { id: "boardwalk-zigzag", src: "assets/game/boardwalk-zigzag.jpg", label: "Boardwalk zig-zag below the towers" },
      { id: "wetland-ponds", src: "assets/game/wetland-ponds.jpg", label: "Wetland ponds beneath skyscrapers" },
      { id: "canopy-walk", src: "assets/game/canopy-walk.jpg", label: "The curvy canopy walk" },
      { id: "monitor-lizard", src: "assets/game/monitor-lizard.jpg", label: "Monitor lizard under a big tree" },
      { id: "cycle-path", src: "assets/game/cycle-path.jpg", label: "The shaded cycle path" },
      { id: "open-lawns", src: "assets/game/open-lawns.jpg", label: "Open lawns under big trees" },
      { id: "glass-towers", src: "assets/game/glass-towers.jpg", label: "Glass towers reflected in the lake" },
      { id: "storm-clouds", src: "assets/game/storm-clouds.jpg", label: "Storm clouds over the lake plaza" },
      { id: "golden-sculpture", src: "assets/game/golden-sculpture.jpg", label: "Golden sculpture on the plaza" },
      { id: "thai-pavilion", src: "assets/game/thai-pavilion.jpg", label: "Thai pavilion by the pond" },
      { id: "memorial-plaza", src: "assets/game/memorial-plaza.jpg", label: "The quiet memorial plaza" },
      { id: "lake-fountain", src: "assets/game/lake-fountain.jpg", label: "The lake fountain under grey skies" }
    ],
    feelingPrompt: "Describe how it makes you feel — one word or a short sentence.",
    // Quick picks: tapping one fills the box
    chips: ["Calm", "Amazed", "Refreshed", "Grateful", "Happy"]
  },

  /* ---------- Tab 3: The Park ---------- */
  park: {
    banner: {
      src: "assets/visit/20.jpg",
      eyebrow: "Khlong Toei · Bangkok",
      title: "The Park",
      intro: "Everything you need to plan your own visit."
    },

    // icon names: pin, train, clock, ticket, sun, bridge, pulse, binoculars,
    //             sunset, route, landmark, camera
    info: [
      { icon: "pin",    label: "Address",            value: "Ratchadaphisek Road, Khlong Toei, Bangkok (next to Queen Sirikit National Convention Center)" },
      { icon: "train",  label: "Getting there",      value: "MRT Queen Sirikit National Convention Centre station" },
      { icon: "clock",  label: "Opening hours",      value: "Daily, 5:00 AM – 9:00 PM" },
      { icon: "ticket", label: "Entry",              value: "Free" },
      { icon: "sun",    label: "Best time to visit", value: "Early morning or late afternoon (cooler, best light, sunset over the lake)" }
    ],
    mapsUrl: "https://maps.google.com/?q=Benjakitti+Forest+Park",

    timeline: [
      { year: "1950s", text: "Land in Khlong Toei used by Thailand's state tobacco factory" },
      { year: "1991",  text: "Government decides to move the factory and turn the land into a public park" },
      { year: "2004",  text: "First section (the lake park) opens, named in honour of Queen Sirikit" },
      { year: "2016",  text: "More factory land set aside for a new forest park" },
      { year: "2022",  text: "Benjakitti Forest Park opens with wetlands, forest zones and the elevated skywalk; old factory buildings are reused as sports facilities and a museum" }
    ],

    thingsToDo: [
      { icon: "bridge",     text: "Walk the elevated skywalk over the wetlands and treetops" },
      { icon: "pulse",      text: "Jog or cycle the park paths" },
      { icon: "binoculars", text: "Birdwatch: egrets, mynas and more around the ponds" },
      { icon: "sunset",     text: "Watch the sunset over the lake" },
      { icon: "route",      text: "Walk the “Green Mile” connecting to Lumphini Park" },
      { icon: "landmark",   text: "Visit the converted tobacco factory buildings" },
      { icon: "camera",     text: "Photograph green nature against the city skyline" }
    ],

    tips: [
      "Bring water, wear comfy shoes and a cap",
      "Take your trash with you",
      "Stay on paths",
      "Don't feed the animals"
    ]
  }
};
