// ===== WORLD CLOCK DATA =====
// Each entry: { country, city, flag, timezone (IANA), utcOffset (hours) }
const WORLD_CLOCKS = [
  // Asia
  { country: "India", city: "New Delhi", flag: "🇮🇳", timezone: "Asia/Kolkata", utcOffset: 5.5 },
  { country: "China", city: "Beijing", flag: "🇨🇳", timezone: "Asia/Shanghai", utcOffset: 8 },
  { country: "Japan", city: "Tokyo", flag: "🇯🇵", timezone: "Asia/Tokyo", utcOffset: 9 },
  { country: "South Korea", city: "Seoul", flag: "🇰🇷", timezone: "Asia/Seoul", utcOffset: 9 },
  { country: "Pakistan", city: "Islamabad", flag: "🇵🇰", timezone: "Asia/Karachi", utcOffset: 5 },
  { country: "Bangladesh", city: "Dhaka", flag: "🇧🇩", timezone: "Asia/Dhaka", utcOffset: 6 },
  { country: "Sri Lanka", city: "Colombo", flag: "🇱🇰", timezone: "Asia/Colombo", utcOffset: 5.5 },
  { country: "Nepal", city: "Kathmandu", flag: "🇳🇵", timezone: "Asia/Kathmandu", utcOffset: 5.75 },
  { country: "Thailand", city: "Bangkok", flag: "🇹🇭", timezone: "Asia/Bangkok", utcOffset: 7 },
  { country: "Vietnam", city: "Hanoi", flag: "🇻🇳", timezone: "Asia/Ho_Chi_Minh", utcOffset: 7 },
  { country: "Indonesia", city: "Jakarta", flag: "🇮🇩", timezone: "Asia/Jakarta", utcOffset: 7 },
  { country: "Malaysia", city: "Kuala Lumpur", flag: "🇲🇾", timezone: "Asia/Kuala_Lumpur", utcOffset: 8 },
  { country: "Singapore", city: "Singapore", flag: "🇸🇬", timezone: "Asia/Singapore", utcOffset: 8 },
  { country: "Philippines", city: "Manila", flag: "🇵🇭", timezone: "Asia/Manila", utcOffset: 8 },
  { country: "Hong Kong", city: "Hong Kong", flag: "🇭🇰", timezone: "Asia/Hong_Kong", utcOffset: 8 },
  { country: "Taiwan", city: "Taipei", flag: "🇹🇼", timezone: "Asia/Taipei", utcOffset: 8 },
  { country: "Myanmar", city: "Yangon", flag: "🇲🇲", timezone: "Asia/Rangoon", utcOffset: 6.5 },
  { country: "Cambodia", city: "Phnom Penh", flag: "🇰🇭", timezone: "Asia/Phnom_Penh", utcOffset: 7 },
  { country: "Laos", city: "Vientiane", flag: "🇱🇦", timezone: "Asia/Vientiane", utcOffset: 7 },
  { country: "Mongolia", city: "Ulaanbaatar", flag: "🇲🇳", timezone: "Asia/Ulaanbaatar", utcOffset: 8 },
  { country: "North Korea", city: "Pyongyang", flag: "🇰🇵", timezone: "Asia/Pyongyang", utcOffset: 9 },
  { country: "Brunei", city: "Bandar Seri Begawan", flag: "🇧🇳", timezone: "Asia/Brunei", utcOffset: 8 },
  { country: "Timor-Leste", city: "Dili", flag: "🇹🇱", timezone: "Asia/Dili", utcOffset: 9 },
  { country: "Bhutan", city: "Thimphu", flag: "🇧🇹", timezone: "Asia/Thimphu", utcOffset: 6 },
  { country: "Maldives", city: "Malé", flag: "🇲🇻", timezone: "Indian/Maldives", utcOffset: 5 },

  // Middle East
  { country: "UAE", city: "Dubai", flag: "🇦🇪", timezone: "Asia/Dubai", utcOffset: 4 },
  { country: "Saudi Arabia", city: "Riyadh", flag: "🇸🇦", timezone: "Asia/Riyadh", utcOffset: 3 },
  { country: "Iran", city: "Tehran", flag: "🇮🇷", timezone: "Asia/Tehran", utcOffset: 3.5 },
  { country: "Israel", city: "Jerusalem", flag: "🇮🇱", timezone: "Asia/Jerusalem", utcOffset: 2 },
  { country: "Turkey", city: "Istanbul", flag: "🇹🇷", timezone: "Europe/Istanbul", utcOffset: 3 },
  { country: "Iraq", city: "Baghdad", flag: "🇮🇶", timezone: "Asia/Baghdad", utcOffset: 3 },
  { country: "Kuwait", city: "Kuwait City", flag: "🇰🇼", timezone: "Asia/Kuwait", utcOffset: 3 },
  { country: "Qatar", city: "Doha", flag: "🇶🇦", timezone: "Asia/Qatar", utcOffset: 3 },
  { country: "Bahrain", city: "Manama", flag: "🇧🇭", timezone: "Asia/Bahrain", utcOffset: 3 },
  { country: "Oman", city: "Muscat", flag: "🇴🇲", timezone: "Asia/Muscat", utcOffset: 4 },
  { country: "Jordan", city: "Amman", flag: "🇯🇴", timezone: "Asia/Amman", utcOffset: 2 },
  { country: "Lebanon", city: "Beirut", flag: "🇱🇧", timezone: "Asia/Beirut", utcOffset: 2 },
  { country: "Syria", city: "Damascus", flag: "🇸🇾", timezone: "Asia/Damascus", utcOffset: 2 },
  { country: "Yemen", city: "Sanaa", flag: "🇾🇪", timezone: "Asia/Aden", utcOffset: 3 },
  { country: "Afghanistan", city: "Kabul", flag: "🇦🇫", timezone: "Asia/Kabul", utcOffset: 4.5 },
  { country: "Cyprus", city: "Nicosia", flag: "🇨🇾", timezone: "Asia/Nicosia", utcOffset: 2 },
  { country: "Georgia", city: "Tbilisi", flag: "🇬🇪", timezone: "Asia/Tbilisi", utcOffset: 4 },
  { country: "Armenia", city: "Yerevan", flag: "🇦🇲", timezone: "Asia/Yerevan", utcOffset: 4 },
  { country: "Azerbaijan", city: "Baku", flag: "🇦🇿", timezone: "Asia/Baku", utcOffset: 4 },

  // Central Asia
  { country: "Kazakhstan", city: "Nur-Sultan", flag: "🇰🇿", timezone: "Asia/Almaty", utcOffset: 6 },
  { country: "Uzbekistan", city: "Tashkent", flag: "🇺🇿", timezone: "Asia/Tashkent", utcOffset: 5 },
  { country: "Turkmenistan", city: "Ashgabat", flag: "🇹🇲", timezone: "Asia/Ashgabat", utcOffset: 5 },
  { country: "Tajikistan", city: "Dushanbe", flag: "🇹🇯", timezone: "Asia/Dushanbe", utcOffset: 5 },
  { country: "Kyrgyzstan", city: "Bishkek", flag: "🇰🇬", timezone: "Asia/Bishkek", utcOffset: 6 },

  // Europe
  { country: "United Kingdom", city: "London", flag: "🇬🇧", timezone: "Europe/London", utcOffset: 0 },
  { country: "France", city: "Paris", flag: "🇫🇷", timezone: "Europe/Paris", utcOffset: 1 },
  { country: "Germany", city: "Berlin", flag: "🇩🇪", timezone: "Europe/Berlin", utcOffset: 1 },
  { country: "Italy", city: "Rome", flag: "🇮🇹", timezone: "Europe/Rome", utcOffset: 1 },
  { country: "Spain", city: "Madrid", flag: "🇪🇸", timezone: "Europe/Madrid", utcOffset: 1 },
  { country: "Russia", city: "Moscow", flag: "🇷🇺", timezone: "Europe/Moscow", utcOffset: 3 },
  { country: "Netherlands", city: "Amsterdam", flag: "🇳🇱", timezone: "Europe/Amsterdam", utcOffset: 1 },
  { country: "Belgium", city: "Brussels", flag: "🇧🇪", timezone: "Europe/Brussels", utcOffset: 1 },
  { country: "Switzerland", city: "Bern", flag: "🇨🇭", timezone: "Europe/Zurich", utcOffset: 1 },
  { country: "Sweden", city: "Stockholm", flag: "🇸🇪", timezone: "Europe/Stockholm", utcOffset: 1 },
  { country: "Norway", city: "Oslo", flag: "🇳🇴", timezone: "Europe/Oslo", utcOffset: 1 },
  { country: "Denmark", city: "Copenhagen", flag: "🇩🇰", timezone: "Europe/Copenhagen", utcOffset: 1 },
  { country: "Finland", city: "Helsinki", flag: "🇫🇮", timezone: "Europe/Helsinki", utcOffset: 2 },
  { country: "Poland", city: "Warsaw", flag: "🇵🇱", timezone: "Europe/Warsaw", utcOffset: 1 },
  { country: "Ukraine", city: "Kyiv", flag: "🇺🇦", timezone: "Europe/Kyiv", utcOffset: 2 },
  { country: "Portugal", city: "Lisbon", flag: "🇵🇹", timezone: "Europe/Lisbon", utcOffset: 0 },
  { country: "Greece", city: "Athens", flag: "🇬🇷", timezone: "Europe/Athens", utcOffset: 2 },
  { country: "Austria", city: "Vienna", flag: "🇦🇹", timezone: "Europe/Vienna", utcOffset: 1 },
  { country: "Czech Republic", city: "Prague", flag: "🇨🇿", timezone: "Europe/Prague", utcOffset: 1 },
  { country: "Hungary", city: "Budapest", flag: "🇭🇺", timezone: "Europe/Budapest", utcOffset: 1 },
  { country: "Romania", city: "Bucharest", flag: "🇷🇴", timezone: "Europe/Bucharest", utcOffset: 2 },
  { country: "Bulgaria", city: "Sofia", flag: "🇧🇬", timezone: "Europe/Sofia", utcOffset: 2 },
  { country: "Croatia", city: "Zagreb", flag: "🇭🇷", timezone: "Europe/Zagreb", utcOffset: 1 },
  { country: "Serbia", city: "Belgrade", flag: "🇷🇸", timezone: "Europe/Belgrade", utcOffset: 1 },
  { country: "Slovakia", city: "Bratislava", flag: "🇸🇰", timezone: "Europe/Bratislava", utcOffset: 1 },
  { country: "Slovenia", city: "Ljubljana", flag: "🇸🇮", timezone: "Europe/Ljubljana", utcOffset: 1 },
  { country: "Lithuania", city: "Vilnius", flag: "🇱🇹", timezone: "Europe/Vilnius", utcOffset: 2 },
  { country: "Latvia", city: "Riga", flag: "🇱🇻", timezone: "Europe/Riga", utcOffset: 2 },
  { country: "Estonia", city: "Tallinn", flag: "🇪🇪", timezone: "Europe/Tallinn", utcOffset: 2 },
  { country: "Belarus", city: "Minsk", flag: "🇧🇾", timezone: "Europe/Minsk", utcOffset: 3 },
  { country: "Moldova", city: "Chișinău", flag: "🇲🇩", timezone: "Europe/Chisinau", utcOffset: 2 },
  { country: "Iceland", city: "Reykjavik", flag: "🇮🇸", timezone: "Atlantic/Reykjavik", utcOffset: 0 },
  { country: "Ireland", city: "Dublin", flag: "🇮🇪", timezone: "Europe/Dublin", utcOffset: 0 },
  { country: "Luxembourg", city: "Luxembourg", flag: "🇱🇺", timezone: "Europe/Luxembourg", utcOffset: 1 },
  { country: "Malta", city: "Valletta", flag: "🇲🇹", timezone: "Europe/Malta", utcOffset: 1 },
  { country: "Albania", city: "Tirana", flag: "🇦🇱", timezone: "Europe/Tirane", utcOffset: 1 },
  { country: "North Macedonia", city: "Skopje", flag: "🇲🇰", timezone: "Europe/Skopje", utcOffset: 1 },
  { country: "Bosnia & Herzegovina", city: "Sarajevo", flag: "🇧🇦", timezone: "Europe/Sarajevo", utcOffset: 1 },
  { country: "Kosovo", city: "Pristina", flag: "🇽🇰", timezone: "Europe/Belgrade", utcOffset: 1 },
  { country: "Montenegro", city: "Podgorica", flag: "🇲🇪", timezone: "Europe/Podgorica", utcOffset: 1 },

  // Africa
  { country: "Nigeria", city: "Lagos", flag: "🇳🇬", timezone: "Africa/Lagos", utcOffset: 1 },
  { country: "South Africa", city: "Johannesburg", flag: "🇿🇦", timezone: "Africa/Johannesburg", utcOffset: 2 },
  { country: "Egypt", city: "Cairo", flag: "🇪🇬", timezone: "Africa/Cairo", utcOffset: 2 },
  { country: "Kenya", city: "Nairobi", flag: "🇰🇪", timezone: "Africa/Nairobi", utcOffset: 3 },
  { country: "Ethiopia", city: "Addis Ababa", flag: "🇪🇹", timezone: "Africa/Addis_Ababa", utcOffset: 3 },
  { country: "Ghana", city: "Accra", flag: "🇬🇭", timezone: "Africa/Accra", utcOffset: 0 },
  { country: "Tanzania", city: "Dar es Salaam", flag: "🇹🇿", timezone: "Africa/Dar_es_Salaam", utcOffset: 3 },
  { country: "Algeria", city: "Algiers", flag: "🇩🇿", timezone: "Africa/Algiers", utcOffset: 1 },
  { country: "Morocco", city: "Casablanca", flag: "🇲🇦", timezone: "Africa/Casablanca", utcOffset: 1 },
  { country: "Tunisia", city: "Tunis", flag: "🇹🇳", timezone: "Africa/Tunis", utcOffset: 1 },
  { country: "Libya", city: "Tripoli", flag: "🇱🇾", timezone: "Africa/Tripoli", utcOffset: 2 },
  { country: "Senegal", city: "Dakar", flag: "🇸🇳", timezone: "Africa/Dakar", utcOffset: 0 },
  { country: "Ivory Coast", city: "Abidjan", flag: "🇨🇮", timezone: "Africa/Abidjan", utcOffset: 0 },
  { country: "Cameroon", city: "Yaoundé", flag: "🇨🇲", timezone: "Africa/Douala", utcOffset: 1 },
  { country: "Uganda", city: "Kampala", flag: "🇺🇬", timezone: "Africa/Kampala", utcOffset: 3 },
  { country: "Zimbabwe", city: "Harare", flag: "🇿🇼", timezone: "Africa/Harare", utcOffset: 2 },
  { country: "Zambia", city: "Lusaka", flag: "🇿🇲", timezone: "Africa/Lusaka", utcOffset: 2 },
  { country: "Sudan", city: "Khartoum", flag: "🇸🇩", timezone: "Africa/Khartoum", utcOffset: 3 },
  { country: "Rwanda", city: "Kigali", flag: "🇷🇼", timezone: "Africa/Kigali", utcOffset: 2 },
  { country: "Madagascar", city: "Antananarivo", flag: "🇲🇬", timezone: "Indian/Antananarivo", utcOffset: 3 },
  { country: "Mozambique", city: "Maputo", flag: "🇲🇿", timezone: "Africa/Maputo", utcOffset: 2 },
  { country: "Angola", city: "Luanda", flag: "🇦🇴", timezone: "Africa/Luanda", utcOffset: 1 },
  { country: "Namibia", city: "Windhoek", flag: "🇳🇦", timezone: "Africa/Windhoek", utcOffset: 2 },
  { country: "Botswana", city: "Gaborone", flag: "🇧🇼", timezone: "Africa/Gaborone", utcOffset: 2 },
  { country: "Mauritius", city: "Port Louis", flag: "🇲🇺", timezone: "Indian/Mauritius", utcOffset: 4 },
  { country: "Seychelles", city: "Victoria", flag: "🇸🇨", timezone: "Indian/Mahe", utcOffset: 4 },

  // Americas
  { country: "United States (ET)", city: "New York", flag: "🇺🇸", timezone: "America/New_York", utcOffset: -5 },
  { country: "United States (CT)", city: "Chicago", flag: "🇺🇸", timezone: "America/Chicago", utcOffset: -6 },
  { country: "United States (MT)", city: "Denver", flag: "🇺🇸", timezone: "America/Denver", utcOffset: -7 },
  { country: "United States (PT)", city: "Los Angeles", flag: "🇺🇸", timezone: "America/Los_Angeles", utcOffset: -8 },
  { country: "United States (HT)", city: "Honolulu", flag: "🇺🇸", timezone: "Pacific/Honolulu", utcOffset: -10 },
  { country: "Canada (ET)", city: "Toronto", flag: "🇨🇦", timezone: "America/Toronto", utcOffset: -5 },
  { country: "Canada (PT)", city: "Vancouver", flag: "🇨🇦", timezone: "America/Vancouver", utcOffset: -8 },
  { country: "Mexico", city: "Mexico City", flag: "🇲🇽", timezone: "America/Mexico_City", utcOffset: -6 },
  { country: "Brazil", city: "São Paulo", flag: "🇧🇷", timezone: "America/Sao_Paulo", utcOffset: -3 },
  { country: "Argentina", city: "Buenos Aires", flag: "🇦🇷", timezone: "America/Argentina/Buenos_Aires", utcOffset: -3 },
  { country: "Chile", city: "Santiago", flag: "🇨🇱", timezone: "America/Santiago", utcOffset: -4 },
  { country: "Colombia", city: "Bogotá", flag: "🇨🇴", timezone: "America/Bogota", utcOffset: -5 },
  { country: "Peru", city: "Lima", flag: "🇵🇪", timezone: "America/Lima", utcOffset: -5 },
  { country: "Venezuela", city: "Caracas", flag: "🇻🇪", timezone: "America/Caracas", utcOffset: -4 },
  { country: "Ecuador", city: "Quito", flag: "🇪🇨", timezone: "America/Guayaquil", utcOffset: -5 },
  { country: "Bolivia", city: "La Paz", flag: "🇧🇴", timezone: "America/La_Paz", utcOffset: -4 },
  { country: "Paraguay", city: "Asunción", flag: "🇵🇾", timezone: "America/Asuncion", utcOffset: -4 },
  { country: "Uruguay", city: "Montevideo", flag: "🇺🇾", timezone: "America/Montevideo", utcOffset: -3 },
  { country: "Cuba", city: "Havana", flag: "🇨🇺", timezone: "America/Havana", utcOffset: -5 },
  { country: "Jamaica", city: "Kingston", flag: "🇯🇲", timezone: "America/Jamaica", utcOffset: -5 },
  { country: "Panama", city: "Panama City", flag: "🇵🇦", timezone: "America/Panama", utcOffset: -5 },
  { country: "Costa Rica", city: "San José", flag: "🇨🇷", timezone: "America/Costa_Rica", utcOffset: -6 },
  { country: "Guatemala", city: "Guatemala City", flag: "🇬🇹", timezone: "America/Guatemala", utcOffset: -6 },
  { country: "Honduras", city: "Tegucigalpa", flag: "🇭🇳", timezone: "America/Tegucigalpa", utcOffset: -6 },
  { country: "El Salvador", city: "San Salvador", flag: "🇸🇻", timezone: "America/El_Salvador", utcOffset: -6 },
  { country: "Nicaragua", city: "Managua", flag: "🇳🇮", timezone: "America/Managua", utcOffset: -6 },
  { country: "Dominican Republic", city: "Santo Domingo", flag: "🇩🇴", timezone: "America/Santo_Domingo", utcOffset: -4 },
  { country: "Trinidad & Tobago", city: "Port of Spain", flag: "🇹🇹", timezone: "America/Port_of_Spain", utcOffset: -4 },
  { country: "Bahamas", city: "Nassau", flag: "🇧🇸", timezone: "America/Nassau", utcOffset: -5 },
  { country: "Barbados", city: "Bridgetown", flag: "🇧🇧", timezone: "America/Barbados", utcOffset: -4 },
  { country: "Guyana", city: "Georgetown", flag: "🇬🇾", timezone: "America/Guyana", utcOffset: -4 },
  { country: "Suriname", city: "Paramaribo", flag: "🇸🇷", timezone: "America/Paramaribo", utcOffset: -3 },
  { country: "Bolivia", city: "Sucre", flag: "🇧🇴", timezone: "America/La_Paz", utcOffset: -4 },

  // Oceania & Pacific
  { country: "Australia (AEDT)", city: "Sydney", flag: "🇦🇺", timezone: "Australia/Sydney", utcOffset: 10 },
  { country: "Australia (AEST)", city: "Brisbane", flag: "🇦🇺", timezone: "Australia/Brisbane", utcOffset: 10 },
  { country: "Australia (ACDT)", city: "Adelaide", flag: "🇦🇺", timezone: "Australia/Adelaide", utcOffset: 9.5 },
  { country: "Australia (AWST)", city: "Perth", flag: "🇦🇺", timezone: "Australia/Perth", utcOffset: 8 },
  { country: "New Zealand", city: "Auckland", flag: "🇳🇿", timezone: "Pacific/Auckland", utcOffset: 12 },
  { country: "Papua New Guinea", city: "Port Moresby", flag: "🇵🇬", timezone: "Pacific/Port_Moresby", utcOffset: 10 },
  { country: "Fiji", city: "Suva", flag: "🇫🇯", timezone: "Pacific/Fiji", utcOffset: 12 },
  { country: "Solomon Islands", city: "Honiara", flag: "🇸🇧", timezone: "Pacific/Guadalcanal", utcOffset: 11 },
  { country: "Vanuatu", city: "Port Vila", flag: "🇻🇺", timezone: "Pacific/Efate", utcOffset: 11 },
  { country: "Tonga", city: "Nukualofa", flag: "🇹🇴", timezone: "Pacific/Tongatapu", utcOffset: 13 },
  { country: "Samoa", city: "Apia", flag: "🇼🇸", timezone: "Pacific/Apia", utcOffset: 13 },
  { country: "Kiribati", city: "Tarawa", flag: "🇰🇮", timezone: "Pacific/Tarawa", utcOffset: 12 },
  { country: "Palau", city: "Ngerulmud", flag: "🇵🇼", timezone: "Pacific/Palau", utcOffset: 9 },
  { country: "Micronesia", city: "Palikir", flag: "🇫🇲", timezone: "Pacific/Pohnpei", utcOffset: 11 },
  { country: "Marshall Islands", city: "Majuro", flag: "🇲🇭", timezone: "Pacific/Majuro", utcOffset: 12 },
  { country: "Nauru", city: "Yaren", flag: "🇳🇷", timezone: "Pacific/Nauru", utcOffset: 12 },
  { country: "Tuvalu", city: "Funafuti", flag: "🇹🇻", timezone: "Pacific/Funafuti", utcOffset: 12 },
  { country: "Niue", city: "Alofi", flag: "🇳🇺", timezone: "Pacific/Niue", utcOffset: -11 },
  { country: "Cook Islands", city: "Avarua", flag: "🇨🇰", timezone: "Pacific/Rarotonga", utcOffset: -10 },
  { country: "Tahiti", city: "Papeete", flag: "🇵🇫", timezone: "Pacific/Tahiti", utcOffset: -10 },

  // Russia Far East
  { country: "Russia (Vladivostok)", city: "Vladivostok", flag: "🇷🇺", timezone: "Asia/Vladivostok", utcOffset: 10 },
  { country: "Russia (Yekaterinburg)", city: "Yekaterinburg", flag: "🇷🇺", timezone: "Asia/Yekaterinburg", utcOffset: 5 },
  { country: "Russia (Krasnoyarsk)", city: "Krasnoyarsk", flag: "🇷🇺", timezone: "Asia/Krasnoyarsk", utcOffset: 7 },
  { country: "Russia (Novosibirsk)", city: "Novosibirsk", flag: "🇷🇺", timezone: "Asia/Novosibirsk", utcOffset: 7 },
  { country: "Russia (Sakhalin)", city: "Yuzhno-Sakhalinsk", flag: "🇷🇺", timezone: "Asia/Sakhalin", utcOffset: 11 },
  { country: "Russia (Kamchatka)", city: "Petropavlovsk", flag: "🇷🇺", timezone: "Asia/Kamchatka", utcOffset: 12 },
];

// IST offset in hours
const IST_OFFSET = 5.5;

// ===== STATE =====
let currentFilter = 'all';
let searchQuery = '';
let cardTimerIds = {};

// ===== UTILS =====
function getTimeInTimezone(tz) {
  try {
    const now = new Date();
    const str = now.toLocaleString('en-US', { timeZone: tz, hour12: false, hour:'2-digit', minute:'2-digit', second:'2-digit', weekday:'short', year:'numeric', month:'short', day:'2-digit' });
    return str;
  } catch(e) { return null; }
}

function parseTimeFromLocaleString(str) {
  // Format: "Wed, Apr 16, 2025, 13:45:30"
  const timePart = str.split(', ').at(-1);
  const [h, m, s] = timePart.split(':').map(Number);
  return { h, m, s };
}

function getClockData(tz) {
  try {
    const now = new Date();
    const dateStr = now.toLocaleString('en-US', { timeZone: tz, weekday:'short', month:'short', day:'numeric' });
    const timeObj = new Intl.DateTimeFormat('en-US', { timeZone: tz, hour:'2-digit', minute:'2-digit', second:'2-digit', hour12: false });
    const parts = timeObj.formatToParts(now);
    let h = 0, m = 0, s = 0;
    parts.forEach(p => {
      if(p.type === 'hour') h = parseInt(p.value);
      if(p.type === 'minute') m = parseInt(p.value);
      if(p.type === 'second') s = parseInt(p.value);
    });
    const ampm = h >= 12 ? 'PM' : 'AM';
    const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
    const timeStr24 = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    const timeStr12 = `${String(h12).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    const isDay = h >= 6 && h < 20;
    return { h, m, s, h12, ampm, timeStr12, timeStr24, dateStr, isDay };
  } catch(e) {
    return null;
  }
}

function getDiffFromIST(utcOffset) {
  const diff = utcOffset - IST_OFFSET;
  return diff;
}

function formatDiff(diff) {
  if(diff === 0) return "Same as IST";
  const abs = Math.abs(diff);
  const h = Math.floor(abs);
  const m = Math.round((abs - h) * 60);
  let str = diff > 0 ? '+' : '-';
  str += h > 0 ? `${h}h` : '';
  str += m > 0 ? `${m}m` : '';
  str += diff > 0 ? ' ahead' : ' behind';
  return str || 'Same as IST';
}

function getDiffClass(diff) {
  if(diff > 0) return 'ahead';
  if(diff < 0) return 'behind';
  return 'same';
}
function getBadgeClass(diff) {
  if(diff > 0) return 'badge-ahead';
  if(diff < 0) return 'badge-behind';
  return 'badge-same';
}

function formatUTC(utcOffset) {
  if(utcOffset === 0) return 'UTC+0';
  const sign = utcOffset > 0 ? '+' : '-';
  const abs = Math.abs(utcOffset);
  const h = Math.floor(abs);
  const m = Math.round((abs - h) * 60);
  return `UTC${sign}${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`;
}

// ===== IST CLOCK =====
function updateIST() {
  const d = getClockData('Asia/Kolkata');
  if(!d) return;
  document.getElementById('ist-time').textContent = d.timeStr12;
  const ampmEl = document.getElementById('ist-ampm');
  if(ampmEl) ampmEl.textContent = d.ampm;
  document.getElementById('ist-date').textContent = d.dateStr;
}

// ===== CARD UPDATE =====
function updateCard(entry, idx) {
  const d = getClockData(entry.timezone);
  if(!d) return;
  const timeEl = document.getElementById(`time-${idx}`);
  const ampmEl = document.getElementById(`ampm-${idx}`);
  const dateEl = document.getElementById(`date-${idx}`);
  const dotEl = document.getElementById(`dot-${idx}`);
  if(timeEl) timeEl.textContent = d.timeStr12;
  if(ampmEl) ampmEl.textContent = d.ampm;
  if(dateEl) dateEl.textContent = d.dateStr;
  if(dotEl) {
    dotEl.className = `day-dot ${d.isDay ? 'dot-day' : 'dot-night'}`;
    dotEl.parentElement.querySelector('.day-label').textContent = d.isDay ? 'Day' : 'Night';
  }
}

// ===== CARD CREATION =====
function createCard(entry, idx, animDelay) {
  const diff = getDiffFromIST(entry.utcOffset);
  const diffClass = getDiffClass(diff);
  const badgeClass = getBadgeClass(diff);
  const diffText = formatDiff(diff);
  const utcLabel = formatUTC(entry.utcOffset);
  const d = getClockData(entry.timezone);
  const timeStr = d ? d.timeStr12 : '--:--:--';
  const ampm = d ? d.ampm : '';
  const dateStr = d ? d.dateStr : '---';
  const isDay = d ? d.isDay : true;

  const card = document.createElement('div');
  card.className = `clock-card card-${diffClass}`;
  card.style.animationDelay = `${animDelay}ms`;
  card.dataset.idx = idx;
  card.dataset.country = entry.country.toLowerCase();
  card.dataset.city = entry.city.toLowerCase();
  card.dataset.tz = entry.timezone.toLowerCase();

  card.innerHTML = `
    <div class="card-top">
      <div class="country-flag">${entry.flag}</div>
      <div class="country-info">
        <div class="country-name">${entry.country}</div>
        <div class="country-tz">${entry.city}</div>
      </div>
      <div class="diff-badge ${badgeClass}">${diffText}</div>
    </div>
    <div class="digital-clock">
      <span class="clock-time" id="time-${idx}">${timeStr}</span>
      <span class="clock-ampm" id="ampm-${idx}">${ampm}</span>
    </div>
    <div class="card-bottom">
      <div class="card-date" id="date-${idx}">${dateStr}</div>
      <div style="display:flex;align-items:center;gap:8px">
        <div class="day-indicator">
          <div class="day-dot ${isDay ? 'dot-day' : 'dot-night'}" id="dot-${idx}"></div>
          <span class="day-label" style="font-size:0.68rem;color:var(--text-muted)">${isDay ? 'Day' : 'Night'}</span>
        </div>
        <div class="utc-label">${utcLabel}</div>
      </div>
    </div>
  `;
  return card;
}

// ===== FILTER & SEARCH =====
let filteredEntries = [];

function applyFilterSearch() {
  const q = searchQuery.toLowerCase().trim();
  filteredEntries = WORLD_CLOCKS.filter((e, i) => {
    const diff = getDiffFromIST(e.utcOffset);
    const filterPass =
      currentFilter === 'all' ||
      (currentFilter === 'ahead' && diff > 0) ||
      (currentFilter === 'behind' && diff < 0) ||
      (currentFilter === 'same' && diff === 0);
    if(!filterPass) return false;
    if(!q) return true;
    return e.country.toLowerCase().includes(q) ||
           e.city.toLowerCase().includes(q) ||
           e.timezone.toLowerCase().includes(q) ||
           formatUTC(e.utcOffset).toLowerCase().includes(q);
  });

  renderGrid();
}

function renderGrid() {
  const grid = document.getElementById('clock-grid');
  const noRes = document.getElementById('no-results');
  const resInfo = document.getElementById('results-info');
  grid.innerHTML = '';

  if(filteredEntries.length === 0) {
    noRes.classList.remove('hidden');
    resInfo.textContent = '';
    return;
  }
  noRes.classList.add('hidden');

  const total = filteredEntries.length;
  const totalAll = WORLD_CLOCKS.length;
  resInfo.textContent = searchQuery || currentFilter !== 'all'
    ? `Showing ${total} of ${totalAll} clocks`
    : `Showing all ${total} world clocks`;

  filteredEntries.forEach((entry, i) => {
    const origIdx = WORLD_CLOCKS.indexOf(entry);
    const card = createCard(entry, origIdx, Math.min(i * 30, 600));
    grid.appendChild(card);
  });
}

// ===== SEARCH INPUT =====
function clearSearch() {
  const inp = document.getElementById('search-input');
  inp.value = '';
  searchQuery = '';
  document.getElementById('clear-btn').classList.remove('visible');
  applyFilterSearch();
  inp.focus();
}

function setFilter(f, btn) {
  currentFilter = f;
  document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  applyFilterSearch();
}

// ===== STATS =====
function updateStats() {
  let ahead = 0, behind = 0, same = 0;
  WORLD_CLOCKS.forEach(e => {
    const d = getDiffFromIST(e.utcOffset);
    if(d > 0) ahead++;
    else if(d < 0) behind++;
    else same++;
  });
  document.getElementById('total-count').textContent = WORLD_CLOCKS.length;
  document.getElementById('ahead-count').textContent = ahead;
  document.getElementById('behind-count').textContent = behind;
  document.getElementById('same-count').textContent = same;
}

// ===== GLOBAL TICK =====
function tick() {
  updateIST();
  // Update all visible cards
  const cards = document.querySelectorAll('.clock-card');
  cards.forEach(card => {
    const idx = parseInt(card.dataset.idx);
    const entry = WORLD_CLOCKS[idx];
    if(entry) updateCard(entry, idx);
  });
}

// ===== INIT =====
function init() {
  updateStats();
  applyFilterSearch();
  updateIST();

  // Search
  const inp = document.getElementById('search-input');
  const clearBtn = document.getElementById('clear-btn');
  inp.addEventListener('input', () => {
    searchQuery = inp.value;
    clearBtn.classList.toggle('visible', inp.value.length > 0);
    applyFilterSearch();
  });

  // Start tick
  setInterval(tick, 1000);
}

window.addEventListener('DOMContentLoaded', init);
