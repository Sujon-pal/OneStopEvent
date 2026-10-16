// Package content for each event.
// Each row is one line: [icon, label, Basic, Standard, Premium]
// null means the row is not included in that tier.
// In Puja values, {p} becomes the puja the customer picked.
//
// New service: add one row line inside the event's rows.
// New event: add a new key inside `raw` (name must match data/events.js).

const TIER_NAMES = ["Basic", "Standard", "Premium"];

const raw = {
  Wedding: {
    guests: [100, 300, 600],
    price: [95000, 180000, 340000],
    rows: [
      [
        "🎨",
        "Stage and decoration",
        "Simple stage with flowers and couple seating",
        "Themed flower stage with entrance gate and lights",
        "Grand stage, full flower decoration and lighting design",
      ],
      [
        "📸",
        "Photography",
        "1 photographer, 6 hours",
        "3 photographers, 10 hours",
        "5 photographers, full day",
      ],
      [
        "🎬",
        "Video",
        "Highlight video, 1 videographer",
        "Full-event video, 2 videographers",
        "Cinematic film, 3 videographers and drone",
      ],
      [
        "🎧",
        "Music and sound",
        "Basic sound system",
        "DJ and sound system",
        "Live band or singer, plus DJ",
      ],
      [
        "💄",
        "Bride and groom",
        "Bridal makeup",
        "Bridal makeup and groom styling",
        "Bridal makeup, groom styling, mehendi and trial",
      ],
      [
        "🪔",
        "Rituals",
        "Kazi or purohit arrangement",
        "Kazi or purohit, with ritual items",
        "Kazi or purohit, ritual items and car decoration",
      ],
      [
        "🎤",
        "Hosting",
        null,
        "Host or anchor",
        "Host or anchor, and guest management",
      ],
      [
        "🛡️",
        "Team and safety",
        "1 event coordinator, setup and cleanup",
        "Event coordinator, 4 staff and security",
        "Dedicated event manager, 8 staff and security",
      ],
      [
        "🪑",
        "Rentals and venue",
        null,
        "Chair and table rental",
        "Chair and table rental, and venue booking help",
      ],
      [
        "💌",
        "Invitations and gifts",
        null,
        null,
        "Wedding cards and return gift packs",
      ],
    ],
  },

  Holud: {
    guests: [50, 150, 300],
    price: [45000, 85000, 150000],
    rows: [
      [
        "🎨",
        "Stage and decoration",
        "Marigold stage with backdrop",
        "Flower swing, themed stage and entrance",
        "Full marigold and flower decoration with lighting",
      ],
      [
        "🌼",
        "Holud rituals",
        "Holud trays (dala) decoration",
        "Trays and ritual items",
        "Trays, ritual items and matching outfits",
      ],
      [
        "📸",
        "Photography",
        "1 photographer, 4 hours",
        "2 photographers, 6 hours",
        "4 photographers, full day",
      ],
      [
        "🎬",
        "Video",
        null,
        "Highlight video, 1 videographer",
        "Cinematic video, 2 videographers and drone",
      ],
      [
        "🎧",
        "Music and fun",
        "Basic sound system",
        "DJ and sound system",
        "Live singer or band, DJ and dance performance",
      ],
      [
        "💄",
        "Look",
        "Mehendi artist for the bride",
        "Mehendi artist and hair styling",
        "Mehendi, bride makeup and hair styling",
      ],
      ["🎤", "Hosting", null, null, "Host or anchor"],
      [
        "🛡️",
        "Team and safety",
        "1 event coordinator, setup and cleanup",
        "Event coordinator and 3 staff",
        "Dedicated event manager and 6 staff",
      ],
      [
        "🪑",
        "Rentals",
        null,
        "Chair and table rental",
        "Chair and table rental, and generator backup",
      ],
    ],
  },

  Birthday: {
    guests: [30, 80, 150],
    price: [20000, 38000, 70000],
    rows: [
      [
        "🎨",
        "Decoration",
        "Balloon decoration and banner",
        "Theme decoration with balloon arch",
        "Custom theme with full lighting and balloon arch",
      ],
      [
        "🎂",
        "Cake table",
        "Cake table with backdrop",
        "Cake table, backdrop and photo corner",
        "Designer cake table and photo booth",
      ],
      [
        "📸",
        "Photography",
        "1 photographer, 2 hours",
        "2 photographers, 4 hours",
        "3 photographers, 6 hours",
      ],
      ["🎬", "Video", null, "Highlight video", "Full video and drone"],
      [
        "🎧",
        "Music",
        "Basic sound system",
        "DJ and sound system",
        "DJ, sound and dance floor lights",
      ],
      [
        "🎈",
        "Fun for guests",
        null,
        "Kids games and activities, with a host",
        "Magician or clown, games, and a host",
      ],
      ["🎁", "Gifts", null, null, "Return gift packs"],
      [
        "🛡️",
        "Team and safety",
        "1 event coordinator, setup and cleanup",
        "Event coordinator and 3 staff",
        "Dedicated event manager and 5 staff",
      ],
      [
        "🪑",
        "Rentals",
        null,
        "Chair and table rental",
        "Chair and table rental, and generator backup",
      ],
    ],
  },

  Puja: {
    guests: [100, 300, 800],
    price: [25000, 50000, 95000],
    rows: [
      [
        "🪔",
        "Idol and puja items",
        "Idol and puja items for {p}",
        "Idol and puja items for {p}, with flowers, durba and bel patra",
        "Idol and puja items for {p}, with flowers, durba, bel patra and fruits",
      ],
      [
        "🙏",
        "Priest and ritual team",
        "Purohit (priest)",
        "Purohit and dhaki (dhak players)",
        "Purohit, dhaki and arati group",
      ],
      [
        "🎨",
        "Pandal and decoration",
        "Pandal or altar with flower and light decoration",
        "Themed pandal with flower decoration and lighting",
        "Large pandal with full lighting",
      ],
      [
        "📸",
        "Photography",
        "1 photographer, 4 hours",
        "2 photographers, 6 hours",
        "4 photographers, full day",
      ],
      [
        "🎬",
        "Video",
        null,
        "Highlight video",
        "Full video and live streaming",
      ],
      [
        "🎧",
        "Sound and program",
        "Basic sound system",
        "Sound system and cultural program setup",
        "Sound system and stage for cultural program",
      ],
      [
        "🪑",
        "Seating",
        "Floor seating for guests",
        "Floor seating, and chairs for elders",
        "Chair and table rental for all guests",
      ],
      [
        "🛡️",
        "Team and safety",
        "1 event coordinator, setup and cleanup",
        "Coordinator, volunteers and security management",
        "Dedicated event manager, security and volunteers",
      ],
      ["🚚", "Immersion", null, null, "Immersion (bishorjon) transport"],
    ],
  },

  Corporate: {
    guests: [50, 150, 400],
    price: [48000, 95000, 180000],
    rows: [
      [
        "🎨",
        "Stage and branding",
        "Stage with printed backdrop",
        "Branded stage, backdrop, banners and standees",
        "Full branded setup, banners, standees and lighting",
      ],
      [
        "🎧",
        "Sound and screens",
        "Sound with 2 microphones, and projector",
        "Sound, 4 microphones, projector and screen",
        "Full AV: sound, microphones, projector and large screen",
      ],
      [
        "🎤",
        "Hosting",
        null,
        "Professional host or MC",
        "Professional host or MC",
      ],
      [
        "🪪",
        "Registration",
        "Registration table",
        "Registration desk and ID cards",
        "Registration desk, ID cards and welcome kits",
      ],
      [
        "📸",
        "Photography",
        "1 photographer, 4 hours",
        "2 photographers, 8 hours",
        "3 photographers, full day",
      ],
      [
        "🎬",
        "Video",
        null,
        "Event video, 1 videographer",
        "Event video, 2 videographers and drone",
      ],
      [
        "📡",
        "Live streaming",
        null,
        "Live streaming",
        "Live streaming and recording",
      ],
      [
        "🛡️",
        "Team and safety",
        "1 event coordinator, setup and teardown",
        "Event coordinator and 4 staff",
        "Dedicated event manager, security and parking management",
      ],
      [
        "🏛️",
        "Venue and guests",
        null,
        null,
        "Guest management and venue booking help",
      ],
    ],
  },
};

// Turns the short format above into { rows, tiers } for the components.
function build(event, { guests, price, rows }) {
  if (import.meta.env?.DEV) {
    rows.forEach((r, i) => {
      if (r.length !== 5) {
        console.warn(
          `[packages] ${event}, row ${i + 1} ("${r[1]}") has ${r.length} items. Expected 5: icon, label, Basic, Standard, Premium.`
        );
      }
    });
  }

  return {
    rows: rows.map(([icon, label]) => ({ icon, label })),
    tiers: TIER_NAMES.map((name, i) => ({
      name,
      guests: guests[i],
      price: price[i],
      values: rows.map((r) => r[2 + i]),
    })),
  };
}

export const packages = Object.fromEntries(
  Object.entries(raw).map(([event, data]) => [event, build(event, data)])
);

// Raw data, used later to seed the database for the admin panel.
export const rawPackages = raw;

// Puja packages need the customer to pick a puja first. Its price is added to the tier price.
export const pujaOptions = [
  { name: "Saraswati Puja", price: 5000, note: "1 day. Idol and puja items included" },
  { name: "Lakshmi Puja", price: 8000, note: "1 day. Idol and puja items included" },
  { name: "Durga Puja", price: 60000, note: "Up to 5 days. Large idol, pandal and rituals" },
  { name: "Kali Puja", price: 25000, note: "1 night. Large idol and puja items" },
  { name: "Jagadhatri Puja", price: 30000, note: "1 to 3 days. Idol and rituals" },
  { name: "Ganesh Puja", price: 12000, note: "1 to 3 days. Idol and puja items" },
  { name: "Vishwakarma Puja", price: 8000, note: "1 day. Tools and machine puja setup" },
  { name: "Janmashtami", price: 15000, note: "1 day with night rituals" },
  { name: "Satyanarayan Puja", price: 5000, note: "Half day, at home or a small hall" },
  { name: "Kartik Puja", price: 8000, note: "1 day. Idol and puja items" },
  { name: "Other puja", price: 5000, note: "Our team will call you to confirm the details" },
];

export const tierTaglines = [
  "The essentials, done well",
  "More people, more hours",
  "A full team handles everything",
];

// Header gradient and button colour for Basic, Standard, Premium (all inside the brand palette).
export const tierStyles = [
  {
    header: "from-[#6d28d9] to-[#8b5cf6]",
    button: "bg-[#6d28d9] text-white hover:bg-[#5b21b6]",
  },
  { header: "from-[#b45309] to-[#f59e0b]", button: "btn-accent" },
  {
    header: "from-[#5b21b6] to-[#9f1239]",
    button: "bg-[#5b21b6] text-white hover:bg-[#4c1d95]",
  },
];

// How many rows show before "View details".
export const VISIBLE_ROWS = 3;