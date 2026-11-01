// Site-wide configurable facts — edit here, no code changes needed.
export const site = {
  name: "Dasha Cabin",
  domain: "dashacabin.example.com", // [PLACEHOLDER] replace with real domain
  email: "contact@dashacabin.example", // [PLACEHOLDER]
  phone: "+40 700 000 000", // [PLACEHOLDER]
  whatsapp: "40700000000", // [PLACEHOLDER] WhatsApp number, digits only
  mapsUrl: "https://maps.app.goo.gl/yaWbTjgmNXtyMQuV6",
  mapsEmbed:
    "https://maps.google.com/maps?q=46.6382295,23.085601&hl=ro&z=14&output=embed",
  coords: { lat: 46.6382295, lng: 23.085601 },
  mapsDirUrl:
    "https://www.google.com/maps/dir/?api=1&destination=46.6382295%2C23.085601",
  wazeUrl: "https://waze.com/ul?ll=46.6382295%2C23.085601&navigate=yes",
  locality: { ro: "Măguri, comuna Măguri-Răcătău, jud. Cluj", en: "Măguri village, Măguri-Răcătău commune, Cluj county" },
  formspree: "https://formspree.io/f/YOUR_FORM_ID", // [PLACEHOLDER]
  capacity: { guests: 4, bedrooms: 1, bathrooms: 1 }, // [PLACEHOLDER] verify
  pets: true,
  cleaningFee: 350, // [PLACEHOLDER] lei
  rates: [
    { season: { ro: "Primăvară (martie–mai)", en: "Spring (Mar–May)" }, night: 650, week: 3900, minStay: 2 },
    { season: { ro: "Vară (iunie–august)", en: "Summer (Jun–Aug)" }, night: 850, week: 5100, minStay: 3 },
    { season: { ro: "Toamnă (septembrie–noiembrie)", en: "Autumn (Sep–Nov)" }, night: 750, week: 4300, minStay: 2 },
    { season: { ro: "Iarnă / Sărbători (dec–feb)", en: "Winter / Holidays (Dec–Feb)" }, night: 950, week: 5500, minStay: 3 },
  ],
};
