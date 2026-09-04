// JARVIS dashboard data source.
// Edit this file day to day — dashboard.html reads everything from window.JARVIS_DATA.
window.JARVIS_DATA = {
  title: "J.A.R.V.I.S",
  subtitle: "PERSONAL SYSTEM INTERFACE",
  timezoneLabel: "Galactic Standard Time",

  nav: [
    { label: "J.A.R.V.I.S", active: true },
    { label: "System" },
    { label: "OS Files" },
    { label: "Backup" },
    { label: "Downloads" }
  ],

  topStrip: {
    acLine: "AC Line \u2261 91%",
    battery: "96%",
    power: "Power",
    wifi: "wifi",
    search: "Google"
  },

  system: {
    ramUsedGb: 4.5,
    ramTotalGb: 16,
    cpuPercent: 8.2,
    cpuTemp: "37.9\u00b0C",
    speedKmh: 27,
    rgbColors: "R&B COLORS"
  },

  drives: [
    { label: "SYS", cpuPercent: 0.0, memPercent: 0.0, hddPercent: 0.0 },
    { label: "Pearl planet", used: "93%", total: "412.50 MB", free: "417.50 MB" },
    { label: "Drive H:/ F:/", used: "365.20 MB", total: "412.50 MB", free: "417.50 MB", percent: 85 },
    { label: "Drive C:/ / D:/", used: "12.5 GB", total: "16 GB", free: "3.5 GB", percent: 35 }
  ],

  activityLog: [
    "CAL  :: read 4 events today on neyton@gmail.com (Asia/Singapore)",
    "MAIL :: scanned 30 threads from last 24h (first page)",
    "MAIL :: 1 needs-reply found, 1 draft written to Drafts, not sent",
    "PRI  :: priorities pulled from CLAUDE.md (Notion not connected)",
    "NOTE :: Notion offline — brief not saved there, priorities page untouched",
    "TTS  :: Fish Audio offline — brief not read aloud, text only"
  ],

  connectors: [
    { label: "Google Calendar", online: true },
    { label: "Gmail", online: true },
    { label: "Priorities Note (CLAUDE.md)", online: true },
    { label: "Notion", online: false },
    { label: "Fish Audio (voice)", online: false }
  ],

  calendar: {
    month: "May",
    year: 2024,
    weekdays: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
    startWeekday: 3,
    daysInMonth: 31,
    today: 10,
    marked: [5, 10, 18, 24]
  },

  weather: {
    tempC: 6,
    condition: "Rain Shower / Windy",
    humidity: "100%",
    feelsLike: "2\u00b0C",
    precipitation: "70%",
    visibility: "9.3 km",
    wind: "3 km/h (WSW)",
    pressure: "1000.34 mb (steady)",
    sunrise: "5:45 AM",
    sunset: "8:59 PM",
    moonPhase: "Waxing Gibbous",
    forecast: [
      { day: "Today", high: "10\u00b0", low: "6\u00b0", condition: "Showers" },
      { day: "Tomorrow", high: "11\u00b0", low: "6\u00b0", condition: "Light Rain" },
      { day: "Sunday", high: "10\u00b0", low: "5\u00b0", condition: "Rain" }
    ]
  },

  bigFigures: [
    { label: "Events Today", value: "4" },
    { label: "Emails Reviewed", value: "30" },
    { label: "Needs Reply", value: "1" },
    { label: "Drafts Created", value: "1" }
  ],

  network: {
    downloadKbs: 2.3,
    uploadKbs: 1.5,
    signalPercent: 30,
    ipAddress: "192.168.100.100",
    lanAddress: "192.168.100.1",
    dnsAddress: "192.168.100.1"
  },

  cpuGauge: {
    label: "CPU",
    value: 14,
    max: 100,
    sub: "AMD FX(tm)-8350 Eight-Core Processor"
  },

  briefing: {
    audioSrc: "brief.mp3",
    text: "Fish Audio isn't connected, so today's brief is text-only — see brief.txt.",
    spoken: false
  }
};
