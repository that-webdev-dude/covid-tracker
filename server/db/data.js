const countries = {
  ad: "Andorra",
  ae: "United Arab Emirates",
  af: "Afghanistan",
  ag: "Antigua and Barbuda",
  ai: "Anguilla",
  al: "Albania",
  am: "Armenia",
  ao: "Angola",
  aq: "Antarctica",
  ar: "Argentina",
  as: "American Samoa",
  at: "Austria",
  au: "Australia",
  aw: "Aruba",
  ax: "Åland Islands",
  az: "Azerbaijan",
  ba: "Bosnia and Herzegovina",
  bb: "Barbados",
  bd: "Bangladesh",
  be: "Belgium",
  bf: "Burkina Faso",
  bg: "Bulgaria",
  bh: "Bahrain",
  bi: "Burundi",
  bj: "Benin",
  bl: "Saint Barthélemy",
  bm: "Bermuda",
  bn: "Brunei",
  bo: "Bolivia",
  bq: "Caribbean Netherlands",
  br: "Brazil",
  bs: "Bahamas",
  bt: "Bhutan",
  bv: "Bouvet Island",
  bw: "Botswana",
  by: "Belarus",
  bz: "Belize",
  ca: "Canada",
  cc: "Cocos (Keeling) Islands",
  cd: "DR Congo",
  cf: "Central African Republic",
  cg: "Republic of the Congo",
  ch: "Switzerland",
  ci: "Côte d'Ivoire (Ivory Coast)",
  ck: "Cook Islands",
  cl: "Chile",
  cm: "Cameroon",
  cn: "China",
  co: "Colombia",
  cr: "Costa Rica",
  cu: "Cuba",
  cv: "Cape Verde",
  cw: "Curaçao",
  cx: "Christmas Island",
  cy: "Cyprus",
  cz: "Czechia",
  de: "Germany",
  dj: "Djibouti",
  dk: "Denmark",
  dm: "Dominica",
  do: "Dominican Republic",
  dz: "Algeria",
  ec: "Ecuador",
  ee: "Estonia",
  eg: "Egypt",
  eh: "Western Sahara",
  er: "Eritrea",
  es: "Spain",
  et: "Ethiopia",
  eu: "European Union",
  fi: "Finland",
  fj: "Fiji",
  fk: "Falkland Islands",
  fm: "Micronesia",
  fo: "Faroe Islands",
  fr: "France",
  ga: "Gabon",
  gb: "United Kingdom",
  "gb-eng": "England",
  "gb-nir": "Northern Ireland",
  "gb-sct": "Scotland",
  "gb-wls": "Wales",
  gd: "Grenada",
  ge: "Georgia",
  gf: "French Guiana",
  gg: "Guernsey",
  gh: "Ghana",
  gi: "Gibraltar",
  gl: "Greenland",
  gm: "Gambia",
  gn: "Guinea",
  gp: "Guadeloupe",
  gq: "Equatorial Guinea",
  gr: "Greece",
  gs: "South Georgia",
  gt: "Guatemala",
  gu: "Guam",
  gw: "Guinea-Bissau",
  gy: "Guyana",
  hk: "Hong Kong",
  hm: "Heard Island and McDonald Islands",
  hn: "Honduras",
  hr: "Croatia",
  ht: "Haiti",
  hu: "Hungary",
  id: "Indonesia",
  ie: "Ireland",
  il: "Israel",
  im: "Isle of Man",
  in: "India",
  io: "British Indian Ocean Territory",
  iq: "Iraq",
  ir: "Iran",
  is: "Iceland",
  it: "Italy",
  je: "Jersey",
  jm: "Jamaica",
  jo: "Jordan",
  jp: "Japan",
  ke: "Kenya",
  kg: "Kyrgyzstan",
  kh: "Cambodia",
  ki: "Kiribati",
  km: "Comoros",
  kn: "Saint Kitts and Nevis",
  kp: "North Korea",
  kr: "South Korea",
  kw: "Kuwait",
  ky: "Cayman Islands",
  kz: "Kazakhstan",
  la: "Laos",
  lb: "Lebanon",
  lc: "Saint Lucia",
  li: "Liechtenstein",
  lk: "Sri Lanka",
  lr: "Liberia",
  ls: "Lesotho",
  lt: "Lithuania",
  lu: "Luxembourg",
  lv: "Latvia",
  ly: "Libya",
  ma: "Morocco",
  mc: "Monaco",
  md: "Moldova",
  me: "Montenegro",
  mf: "Saint Martin",
  mg: "Madagascar",
  mh: "Marshall Islands",
  mk: "North Macedonia",
  ml: "Mali",
  mm: "Myanmar",
  mn: "Mongolia",
  mo: "Macau",
  mp: "Northern Mariana Islands",
  mq: "Martinique",
  mr: "Mauritania",
  ms: "Montserrat",
  mt: "Malta",
  mu: "Mauritius",
  mv: "Maldives",
  mw: "Malawi",
  mx: "Mexico",
  my: "Malaysia",
  mz: "Mozambique",
  na: "Namibia",
  nc: "New Caledonia",
  ne: "Niger",
  nf: "Norfolk Island",
  ng: "Nigeria",
  ni: "Nicaragua",
  nl: "Netherlands",
  no: "Norway",
  np: "Nepal",
  nr: "Nauru",
  nu: "Niue",
  nz: "New Zealand",
  om: "Oman",
  pa: "Panama",
  pe: "Peru",
  pf: "French Polynesia",
  pg: "Papua New Guinea",
  ph: "Philippines",
  pk: "Pakistan",
  pl: "Poland",
  pm: "Saint Pierre and Miquelon",
  pn: "Pitcairn Islands",
  pr: "Puerto Rico",
  ps: "Palestine",
  pt: "Portugal",
  pw: "Palau",
  py: "Paraguay",
  qa: "Qatar",
  re: "Réunion",
  ro: "Romania",
  rs: "Serbia",
  ru: "Russia",
  rw: "Rwanda",
  sa: "Saudi Arabia",
  sb: "Solomon Islands",
  sc: "Seychelles",
  sd: "Sudan",
  se: "Sweden",
  sg: "Singapore",
  sh: "Saint Helena, Ascension and Tristan da Cunha",
  si: "Slovenia",
  sj: "Svalbard and Jan Mayen",
  sk: "Slovakia",
  sl: "Sierra Leone",
  sm: "San Marino",
  sn: "Senegal",
  so: "Somalia",
  sr: "Suriname",
  ss: "South Sudan",
  st: "São Tomé and Príncipe",
  sv: "El Salvador",
  sx: "Sint Maarten",
  sy: "Syria",
  sz: "Eswatini (Swaziland)",
  tc: "Turks and Caicos Islands",
  td: "Chad",
  tf: "French Southern and Antarctic Lands",
  tg: "Togo",
  th: "Thailand",
  tj: "Tajikistan",
  tk: "Tokelau",
  tl: "Timor-Leste",
  tm: "Turkmenistan",
  tn: "Tunisia",
  to: "Tonga",
  tr: "Turkey",
  tt: "Trinidad and Tobago",
  tv: "Tuvalu",
  tw: "Taiwan",
  tz: "Tanzania",
  ua: "Ukraine",
  ug: "Uganda",
  um: "United States Minor Outlying Islands",
  un: "United Nations",
  us: "United States",
  "us-ak": "Alaska",
  "us-al": "Alabama",
  "us-ar": "Arkansas",
  "us-az": "Arizona",
  "us-ca": "California",
  "us-co": "Colorado",
  "us-ct": "Connecticut",
  "us-de": "Delaware",
  "us-fl": "Florida",
  "us-ga": "Georgia",
  "us-hi": "Hawaii",
  "us-ia": "Iowa",
  "us-id": "Idaho",
  "us-il": "Illinois",
  "us-in": "Indiana",
  "us-ks": "Kansas",
  "us-ky": "Kentucky",
  "us-la": "Louisiana",
  "us-ma": "Massachusetts",
  "us-md": "Maryland",
  "us-me": "Maine",
  "us-mi": "Michigan",
  "us-mn": "Minnesota",
  "us-mo": "Missouri",
  "us-ms": "Mississippi",
  "us-mt": "Montana",
  "us-nc": "North Carolina",
  "us-nd": "North Dakota",
  "us-ne": "Nebraska",
  "us-nh": "New Hampshire",
  "us-nj": "New Jersey",
  "us-nm": "New Mexico",
  "us-nv": "Nevada",
  "us-ny": "New York",
  "us-oh": "Ohio",
  "us-ok": "Oklahoma",
  "us-or": "Oregon",
  "us-pa": "Pennsylvania",
  "us-ri": "Rhode Island",
  "us-sc": "South Carolina",
  "us-sd": "South Dakota",
  "us-tn": "Tennessee",
  "us-tx": "Texas",
  "us-ut": "Utah",
  "us-va": "Virginia",
  "us-vt": "Vermont",
  "us-wa": "Washington",
  "us-wi": "Wisconsin",
  "us-wv": "West Virginia",
  "us-wy": "Wyoming",
  uy: "Uruguay",
  uz: "Uzbekistan",
  va: "Vatican City (Holy See)",
  vc: "Saint Vincent and the Grenadines",
  ve: "Venezuela",
  vg: "British Virgin Islands",
  vi: "United States Virgin Islands",
  vn: "Vietnam",
  vu: "Vanuatu",
  wf: "Wallis and Futuna",
  ws: "Samoa",
  xk: "Kosovo",
  ye: "Yemen",
  yt: "Mayotte",
  za: "South Africa",
  zm: "Zambia",
  zw: "Zimbabwe",
};

/**
 * generateRandomId
 * @param {number} length
 * @returns
 */
function uid(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters.charAt(randomIndex);
  }
  return id;
}

/**
 * Return an integer random number between min & max.
 * If max is "undefined" return a random number between 0 & min.
 * If min & max are "undefined" return a random number between 0 & 1.
 * @param {number} min lower limit
 * @param {number} max upper limit
 * @returns {number} integer random number between min:max or 0: min or 0:1
 */
function rand(min, max) {
  return Math.floor(randf(min, max));
}

/**
 * Generate a floating point random number between min & max.
 * If max is "undefined" return a random number between 0 & min.
 * If min & max are "undefined" return a random number between 0 & 1.
 * @param {number} min lower limit
 * @param {number} max upper limit
 * @returns {number} floating point random number between min:max or 0: min or 0:1
 */
function randf(min, max) {
  if (max == null) {
    max = min || 1;
    min = 0;
  }
  return Math.random() * (max - min) + min;
}

/**
 * getFormattedDate
 * returns the date string in the format of YYYY/MM/DD
 * @param {Date} currentDate
 * @returns
 */
function getFormattedDate(currentDate) {
  // const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const dateString = `${year}/${month}/${day}`;

  return dateString;
}

/**
 * generateTimeSeries
 * makes a synthetic timeseries, with a peak followed by a decay
 * @param {Date} startDate
 * @param {Date} endDate
 * @param {Date} peakDate
 * @param {*} peakValue
 * @param {*} growthRate
 * @param {*} decayRate
 * @param {*} fluctuationRange
 * @param {*} enforcePositivity
 * @returns
 */
function generateTimeSeries(
  startDate,
  endDate,
  peakDate,
  peakValue,
  growthRate,
  decayRate,
  fluctuationRange,
  enforcePositivity,
  scale,
  offset
) {
  const timeDiff = endDate.getTime() - startDate.getTime();
  const numDays = timeDiff / (1000 * 3600 * 24);
  const peakDiff = peakDate.getTime() - startDate.getTime();
  const peakDays = peakDiff / (1000 * 3600 * 24);
  const timeSeries = [];
  for (let i = 0; i <= numDays; i++) {
    const currentDate = new Date(startDate.getTime() + i * (1000 * 3600 * 24));
    let value;
    if (i <= peakDays) {
      value = peakValue * (1 - Math.exp(-growthRate * i));
    } else {
      const decayDays = i - peakDays;
      value =
        peakValue *
        (1 - Math.exp(-growthRate * peakDays)) *
        Math.exp(-decayRate * decayDays);
    }
    const fluctuation = Math.random() * fluctuationRange;
    value += fluctuation;
    if (enforcePositivity) {
      value = Math.max(0, value);
    }
    timeSeries.push({
      date: getFormattedDate(currentDate),
      value: value * scale + offset,
    });
  }
  return timeSeries;
}

/**
 * generate
 * COVID-19 fake dataset
 * @returns data[]
 */
const generate = () => {
  const data = Object.keys(countries).map((code, index) => {
    const startDate = new Date(2023, 0, 1); // January 1, 2023
    const endDate = new Date(2023, 3, 31); // March 31, 2023
    const peakDate = new Date(2023, 1, 28); // Feb 28, 2023
    const peakValue = rand(300, 600); // Peak value of the time series
    const growthRate = randf(0.02, 0.04); // Growth rate
    const decayRate = randf(0.001, 0.002); // Decay rate
    const fluctuationRange = rand(100, 200); // Range of random fluctuations
    const enforcePositivity = true;
    const scale = 1;
    const offset = rand(100, 200);

    const casesSeries = generateTimeSeries(
      startDate,
      endDate,
      peakDate,
      peakValue,
      growthRate,
      decayRate,
      fluctuationRange,
      enforcePositivity,
      scale * 2,
      offset
    );

    const deathsSeries = generateTimeSeries(
      startDate,
      endDate,
      peakDate,
      peakValue,
      growthRate,
      decayRate * 8,
      fluctuationRange,
      enforcePositivity,
      scale / 2,
      offset / 2
    );

    return {
      // id: `_${uid(15)}`,
      id: `_${index}`,
      code,
      name: countries[code],
      img: `https://flagcdn.com/${code}.svg`,
      totalCases: rand(10000, 20000),
      totalDeaths: rand(5000, 10000),
      todayCases: rand(100, 200),
      todayDeaths: rand(50, 100),
      lastUpdate: getFormattedDate(endDate),
      history: {
        date: casesSeries.map((item) => {
          return item.date;
        }),
        cases: casesSeries.map((item) => {
          return item.value;
        }),
        deaths: deathsSeries.map((item) => {
          return item.value;
        }),
      },
    };
  });

  return data;
};

const data = generate();

export default data;
