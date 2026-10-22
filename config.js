/* ==========================================================
   EDIT ONLY THIS FILE to customise the website.
   side: "groom"  -> Groom's family & friends invitation
         "bride"  -> Bride's family & friends invitation
                     (Pellikoduku is replaced by Pellikuthuru)
   ========================================================== */
window.WEDDING = {
  side: "groom",

  groom: "Manohar",
  bride: "Suneetha",
  hashtag: "#ManoharWedsSuneetha",
  place: "Tirupati, Andhra Pradesh",

  // Main wedding date/time (used for the countdown)
  weddingDate: "2026-11-06T07:00:00+05:30",

  teluguLine: "మా వివాహానికి మీకు ఆహ్వానం",
  tagline: "With love and the blessings of our elders, we joyfully invite you to be part of every moment.",
  inviteFor: { groom: "Invitation for the Groom's Family & Friends", bride: "Invitation for the Bride's Family & Friends" },

  // Events shared by both invitations
  haldi: {
    title: "Haldi", telugu: "హల్దీ",
    tagline: "A joyful celebration of love, colour and new beginnings",
    start: "2026-11-04T08:00:00+05:30", hours: 3, timeText: "8:00 AM onwards",
    venue: "Tirupati", address: "Exact venue to be shared",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Tirupati"
  },
  pellikoduku: {                       // GROOM side only
    title: "Pellikoduku", telugu: "పెళ్లికొడుకు",
    tagline: "The groom's traditional blessing ceremony",
    start: "2026-11-05T07:00:00+05:30", hours: 2, timeText: "7:00 AM",
    venue: "Tirupati", address: "Exact venue to be shared",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Tirupati"
  },
  pellikuthuru: {                      // BRIDE side only — CHANGE ME when details are ready
    title: "Pellikuthuru", telugu: "పెళ్లికూతురు",
    tagline: "The bride's traditional blessing ceremony",
    tba: true,                         // set to false once date/venue below are filled in
    start: "2026-11-05T07:00:00+05:30", hours: 2, timeText: "",
    venue: "Venue to be announced", address: "",
    mapsLink: ""
  },
  reception: {
    title: "Reception", telugu: "రిసెప్షన్",
    tagline: "An evening celebrating the union of two families",
    start: "2026-11-05T19:00:00+05:30", hours: 3, timeText: "7:00 PM onwards",
    venue: "Rahul Convention Centre", address: "Tiruchanuru Road, Tirupati",
    mapsLink: "https://maps.app.goo.gl/i9zzfmvFwNgERAvH9"
  },
  wedding: {
    title: "Wedding", telugu: "వివాహం",
    tagline: "Sacred vows and the beginning of a beautiful journey",
    start: "2026-11-06T07:00:00+05:30", hours: 4, timeText: "Muhurtham at 7:00 AM",
    venue: "Rahul Convention Centre", address: "Tiruchanuru Road, Tirupati",
    mapsLink: "https://maps.app.goo.gl/i9zzfmvFwNgERAvH9"
  },

  // Venue shown in the map section
  mapQuery: "Rahul Convention Centre, Tiruchanuru Road, Tirupati",
  mapsLink: "https://maps.app.goo.gl/i9zzfmvFwNgERAvH9",

  // Optional phone contacts (leave [] to hide)
  contacts: [],

  // Gallery photos (files in /img)
  gallery: [
    { src: "img/wedding-2.jpg", alt: "Manohar and Suneetha after the wedding" },
    { src: "img/engagement-1.jpg", alt: "Manohar and Suneetha at their engagement" },
    { src: "img/hero-wide.jpg", alt: "Exchanging garlands" },
    { src: "img/engagement-2.jpg", alt: "Engagement portrait" }
  ]
};
