const tier = (name, guests, price, items) => ({ name, guests, price, items })

// Basic, Standard, Premium for each event. Same number of lines so the cards line up.
export const packages = {
  Wedding: [
    tier('Basic', 100, 95000, ['Flower stage with couple seating', '1 photographer, 6 hours', 'Highlight video', 'Bridal makeup']),
    tier('Standard', 300, 180000, ['Themed stage with entrance gate', '3 photographers, 10 hours', 'Full-event video, DJ and sound', 'Bridal makeup and groom styling']),
    tier('Premium', 600, 340000, ['Grand stage with lighting design', '5 photographers, full day, drone', 'Live band plus DJ', 'Makeup, mehendi and trial']),
  ],
  Holud: [
    tier('Basic', 50, 45000, ['Marigold stage with backdrop', 'Holud trays decoration', '1 photographer, 4 hours', 'Mehendi artist for the bride']),
    tier('Standard', 150, 85000, ['Flower swing and themed stage', 'Trays and ritual items', '2 photographers, highlight video', 'DJ, mehendi and hair styling']),
    tier('Premium', 300, 150000, ['Full marigold decoration with lighting', 'Trays and matching outfits', '4 photographers, video and drone', 'Live singer, DJ and dance']),
  ],
  Birthday: [
    tier('Basic', 30, 20000, ['Balloon decoration and banner', 'Cake table with backdrop', '1 photographer, 2 hours', 'Basic sound system']),
    tier('Standard', 80, 38000, ['Theme decoration with balloon arch', 'Cake table and photo corner', '2 photographers, highlight video', 'DJ, kids games and a host']),
    tier('Premium', 150, 70000, ['Custom theme with full lighting', 'Designer cake table and photo booth', '3 photographers, video and drone', 'Magician or clown, DJ, host']),
  ],
  Puja: [
    tier('Basic', 100, 25000, ['Idol and puja items', 'Purohit (priest)', 'Pandal with flower decoration', '1 photographer, 4 hours']),
    tier('Standard', 300, 50000, ['Puja items with flowers and bel patra', 'Purohit and dhaki', 'Themed pandal with lighting', '2 photographers, highlight video']),
    tier('Premium', 800, 95000, ['Full puja items with fruits', 'Purohit, dhaki and arati group', 'Large pandal, live streaming', 'Immersion (bishorjon) transport']),
  ],
  Corporate: [
    tier('Basic', 50, 48000, ['Stage with printed backdrop', 'Sound, 2 microphones, projector', 'Registration table', '1 photographer, 4 hours']),
    tier('Standard', 150, 95000, ['Branded stage, banners, standees', 'Sound, 4 microphones, screen', 'Professional host, live streaming', 'Registration desk and ID cards']),
    tier('Premium', 400, 180000, ['Full branded setup with lighting', 'Full AV with large screen', 'Host, streaming and recording', 'Event manager and welcome kits']),
  ],
}

// Header colours for Basic, Standard, Premium.
export const tierStyles = [
  'from-[#6d28d9] to-[#8b5cf6]',
  'from-[#b45309] to-[#f59e0b]',
  'from-[#5b21b6] to-[#9f1239]',
]