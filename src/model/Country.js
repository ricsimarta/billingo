/*
 * Billingo API v3
 * This is a Billingo API v3 documentation. Our API based on REST software architectural style. API has resource-oriented URLs, accepts JSON-encoded request bodies and returns JSON-encoded responses. To use this API you have to generate a new API key on our [site](https://app.billingo.hu/api-key). After that, you can test your API key on this page.
 *
 * OpenAPI spec version: 3.0.14
 * Contact: hello@billingo.hu
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.35
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * Enum class Country.
 * @enum {String}
 * @readonly
 */
const Country = {
  /**
   * value: ""
   * @const
   */
  empty: "",

  /**
   * value: "AC"
   * @const
   */
  AC: "AC",

  /**
   * value: "AD"
   * @const
   */
  AD: "AD",

  /**
   * value: "AE"
   * @const
   */
  AE: "AE",

  /**
   * value: "AF"
   * @const
   */
  AF: "AF",

  /**
   * value: "AG"
   * @const
   */
  AG: "AG",

  /**
   * value: "AI"
   * @const
   */
  AI: "AI",

  /**
   * value: "AL"
   * @const
   */
  AL: "AL",

  /**
   * value: "AM"
   * @const
   */
  AM: "AM",

  /**
   * value: "AO"
   * @const
   */
  AO: "AO",

  /**
   * value: "AQ"
   * @const
   */
  AQ: "AQ",

  /**
   * value: "AR"
   * @const
   */
  AR: "AR",

  /**
   * value: "AS"
   * @const
   */
  AS: "AS",

  /**
   * value: "AT"
   * @const
   */
  AT: "AT",

  /**
   * value: "AU"
   * @const
   */
  AU: "AU",

  /**
   * value: "AW"
   * @const
   */
  AW: "AW",

  /**
   * value: "AX"
   * @const
   */
  AX: "AX",

  /**
   * value: "AZ"
   * @const
   */
  AZ: "AZ",

  /**
   * value: "BA"
   * @const
   */
  BA: "BA",

  /**
   * value: "BB"
   * @const
   */
  BB: "BB",

  /**
   * value: "BD"
   * @const
   */
  BD: "BD",

  /**
   * value: "BE"
   * @const
   */
  BE: "BE",

  /**
   * value: "BF"
   * @const
   */
  BF: "BF",

  /**
   * value: "BG"
   * @const
   */
  BG: "BG",

  /**
   * value: "BH"
   * @const
   */
  BH: "BH",

  /**
   * value: "BI"
   * @const
   */
  BI: "BI",

  /**
   * value: "BJ"
   * @const
   */
  BJ: "BJ",

  /**
   * value: "BL"
   * @const
   */
  BL: "BL",

  /**
   * value: "BM"
   * @const
   */
  BM: "BM",

  /**
   * value: "BN"
   * @const
   */
  BN: "BN",

  /**
   * value: "BO"
   * @const
   */
  BO: "BO",

  /**
   * value: "BQ"
   * @const
   */
  BQ: "BQ",

  /**
   * value: "BR"
   * @const
   */
  BR: "BR",

  /**
   * value: "BS"
   * @const
   */
  BS: "BS",

  /**
   * value: "BT"
   * @const
   */
  BT: "BT",

  /**
   * value: "BW"
   * @const
   */
  BW: "BW",

  /**
   * value: "BY"
   * @const
   */
  BY: "BY",

  /**
   * value: "BZ"
   * @const
   */
  BZ: "BZ",

  /**
   * value: "CA"
   * @const
   */
  CA: "CA",

  /**
   * value: "CC"
   * @const
   */
  CC: "CC",

  /**
   * value: "CD"
   * @const
   */
  CD: "CD",

  /**
   * value: "CF"
   * @const
   */
  CF: "CF",

  /**
   * value: "CG"
   * @const
   */
  CG: "CG",

  /**
   * value: "CH"
   * @const
   */
  CH: "CH",

  /**
   * value: "CI"
   * @const
   */
  CI: "CI",

  /**
   * value: "CK"
   * @const
   */
  CK: "CK",

  /**
   * value: "CL"
   * @const
   */
  CL: "CL",

  /**
   * value: "CM"
   * @const
   */
  CM: "CM",

  /**
   * value: "CN"
   * @const
   */
  CN: "CN",

  /**
   * value: "CO"
   * @const
   */
  CO: "CO",

  /**
   * value: "CR"
   * @const
   */
  CR: "CR",

  /**
   * value: "CU"
   * @const
   */
  CU: "CU",

  /**
   * value: "CV"
   * @const
   */
  CV: "CV",

  /**
   * value: "CW"
   * @const
   */
  CW: "CW",

  /**
   * value: "CX"
   * @const
   */
  CX: "CX",

  /**
   * value: "CY"
   * @const
   */
  CY: "CY",

  /**
   * value: "CZ"
   * @const
   */
  CZ: "CZ",

  /**
   * value: "DE"
   * @const
   */
  DE: "DE",

  /**
   * value: "DG"
   * @const
   */
  DG: "DG",

  /**
   * value: "DJ"
   * @const
   */
  DJ: "DJ",

  /**
   * value: "DK"
   * @const
   */
  DK: "DK",

  /**
   * value: "DM"
   * @const
   */
  DM: "DM",

  /**
   * value: "DO"
   * @const
   */
  DO: "DO",

  /**
   * value: "DZ"
   * @const
   */
  DZ: "DZ",

  /**
   * value: "EA"
   * @const
   */
  EA: "EA",

  /**
   * value: "EC"
   * @const
   */
  EC: "EC",

  /**
   * value: "EE"
   * @const
   */
  EE: "EE",

  /**
   * value: "EG"
   * @const
   */
  EG: "EG",

  /**
   * value: "EH"
   * @const
   */
  EH: "EH",

  /**
   * value: "ER"
   * @const
   */
  ER: "ER",

  /**
   * value: "ES"
   * @const
   */
  ES: "ES",

  /**
   * value: "ET"
   * @const
   */
  ET: "ET",

  /**
   * value: "FI"
   * @const
   */
  FI: "FI",

  /**
   * value: "FJ"
   * @const
   */
  FJ: "FJ",

  /**
   * value: "FK"
   * @const
   */
  FK: "FK",

  /**
   * value: "FM"
   * @const
   */
  FM: "FM",

  /**
   * value: "FO"
   * @const
   */
  FO: "FO",

  /**
   * value: "FR"
   * @const
   */
  FR: "FR",

  /**
   * value: "GA"
   * @const
   */
  GA: "GA",

  /**
   * value: "GB"
   * @const
   */
  GB: "GB",

  /**
   * value: "GD"
   * @const
   */
  GD: "GD",

  /**
   * value: "GE"
   * @const
   */
  GE: "GE",

  /**
   * value: "GF"
   * @const
   */
  GF: "GF",

  /**
   * value: "GG"
   * @const
   */
  GG: "GG",

  /**
   * value: "GH"
   * @const
   */
  GH: "GH",

  /**
   * value: "GI"
   * @const
   */
  GI: "GI",

  /**
   * value: "GL"
   * @const
   */
  GL: "GL",

  /**
   * value: "GM"
   * @const
   */
  GM: "GM",

  /**
   * value: "GN"
   * @const
   */
  GN: "GN",

  /**
   * value: "GP"
   * @const
   */
  GP: "GP",

  /**
   * value: "GQ"
   * @const
   */
  GQ: "GQ",

  /**
   * value: "GR"
   * @const
   */
  GR: "GR",

  /**
   * value: "GS"
   * @const
   */
  GS: "GS",

  /**
   * value: "GT"
   * @const
   */
  GT: "GT",

  /**
   * value: "GU"
   * @const
   */
  GU: "GU",

  /**
   * value: "GW"
   * @const
   */
  GW: "GW",

  /**
   * value: "GY"
   * @const
   */
  GY: "GY",

  /**
   * value: "HK"
   * @const
   */
  HK: "HK",

  /**
   * value: "HN"
   * @const
   */
  HN: "HN",

  /**
   * value: "HR"
   * @const
   */
  HR: "HR",

  /**
   * value: "HT"
   * @const
   */
  HT: "HT",

  /**
   * value: "HU"
   * @const
   */
  HU: "HU",

  /**
   * value: "IC"
   * @const
   */
  IC: "IC",

  /**
   * value: "ID"
   * @const
   */
  ID: "ID",

  /**
   * value: "IE"
   * @const
   */
  IE: "IE",

  /**
   * value: "IL"
   * @const
   */
  IL: "IL",

  /**
   * value: "IM"
   * @const
   */
  IM: "IM",

  /**
   * value: "IN"
   * @const
   */
  IN: "IN",

  /**
   * value: "IO"
   * @const
   */
  IO: "IO",

  /**
   * value: "IQ"
   * @const
   */
  IQ: "IQ",

  /**
   * value: "IR"
   * @const
   */
  IR: "IR",

  /**
   * value: "IS"
   * @const
   */
  IS: "IS",

  /**
   * value: "IT"
   * @const
   */
  IT: "IT",

  /**
   * value: "JE"
   * @const
   */
  JE: "JE",

  /**
   * value: "JM"
   * @const
   */
  JM: "JM",

  /**
   * value: "JO"
   * @const
   */
  JO: "JO",

  /**
   * value: "JP"
   * @const
   */
  JP: "JP",

  /**
   * value: "KE"
   * @const
   */
  KE: "KE",

  /**
   * value: "KG"
   * @const
   */
  KG: "KG",

  /**
   * value: "KH"
   * @const
   */
  KH: "KH",

  /**
   * value: "KI"
   * @const
   */
  KI: "KI",

  /**
   * value: "KM"
   * @const
   */
  KM: "KM",

  /**
   * value: "KN"
   * @const
   */
  KN: "KN",

  /**
   * value: "KP"
   * @const
   */
  KP: "KP",

  /**
   * value: "KR"
   * @const
   */
  KR: "KR",

  /**
   * value: "KW"
   * @const
   */
  KW: "KW",

  /**
   * value: "KY"
   * @const
   */
  KY: "KY",

  /**
   * value: "KZ"
   * @const
   */
  KZ: "KZ",

  /**
   * value: "LA"
   * @const
   */
  LA: "LA",

  /**
   * value: "LB"
   * @const
   */
  LB: "LB",

  /**
   * value: "LC"
   * @const
   */
  LC: "LC",

  /**
   * value: "LI"
   * @const
   */
  LI: "LI",

  /**
   * value: "LK"
   * @const
   */
  LK: "LK",

  /**
   * value: "LR"
   * @const
   */
  LR: "LR",

  /**
   * value: "LS"
   * @const
   */
  LS: "LS",

  /**
   * value: "LT"
   * @const
   */
  LT: "LT",

  /**
   * value: "LU"
   * @const
   */
  LU: "LU",

  /**
   * value: "LV"
   * @const
   */
  LV: "LV",

  /**
   * value: "LY"
   * @const
   */
  LY: "LY",

  /**
   * value: "MA"
   * @const
   */
  MA: "MA",

  /**
   * value: "MC"
   * @const
   */
  MC: "MC",

  /**
   * value: "MD"
   * @const
   */
  MD: "MD",

  /**
   * value: "ME"
   * @const
   */
  ME: "ME",

  /**
   * value: "MF"
   * @const
   */
  MF: "MF",

  /**
   * value: "MG"
   * @const
   */
  MG: "MG",

  /**
   * value: "MH"
   * @const
   */
  MH: "MH",

  /**
   * value: "MK"
   * @const
   */
  MK: "MK",

  /**
   * value: "ML"
   * @const
   */
  ML: "ML",

  /**
   * value: "MM"
   * @const
   */
  MM: "MM",

  /**
   * value: "MN"
   * @const
   */
  MN: "MN",

  /**
   * value: "MO"
   * @const
   */
  MO: "MO",

  /**
   * value: "MP"
   * @const
   */
  MP: "MP",

  /**
   * value: "MQ"
   * @const
   */
  MQ: "MQ",

  /**
   * value: "MR"
   * @const
   */
  MR: "MR",

  /**
   * value: "MS"
   * @const
   */
  MS: "MS",

  /**
   * value: "MT"
   * @const
   */
  MT: "MT",

  /**
   * value: "MU"
   * @const
   */
  MU: "MU",

  /**
   * value: "MV"
   * @const
   */
  MV: "MV",

  /**
   * value: "MW"
   * @const
   */
  MW: "MW",

  /**
   * value: "MX"
   * @const
   */
  MX: "MX",

  /**
   * value: "MY"
   * @const
   */
  MY: "MY",

  /**
   * value: "MZ"
   * @const
   */
  MZ: "MZ",

  /**
   * value: "NA"
   * @const
   */
  NA: "NA",

  /**
   * value: "NC"
   * @const
   */
  NC: "NC",

  /**
   * value: "NE"
   * @const
   */
  NE: "NE",

  /**
   * value: "NF"
   * @const
   */
  NF: "NF",

  /**
   * value: "NG"
   * @const
   */
  NG: "NG",

  /**
   * value: "NI"
   * @const
   */
  NI: "NI",

  /**
   * value: "NL"
   * @const
   */
  NL: "NL",

  /**
   * value: "NO"
   * @const
   */
  NO: "NO",

  /**
   * value: "NP"
   * @const
   */
  NP: "NP",

  /**
   * value: "NR"
   * @const
   */
  NR: "NR",

  /**
   * value: "NU"
   * @const
   */
  NU: "NU",

  /**
   * value: "NZ"
   * @const
   */
  NZ: "NZ",

  /**
   * value: "OM"
   * @const
   */
  OM: "OM",

  /**
   * value: "PA"
   * @const
   */
  PA: "PA",

  /**
   * value: "PE"
   * @const
   */
  PE: "PE",

  /**
   * value: "PF"
   * @const
   */
  PF: "PF",

  /**
   * value: "PG"
   * @const
   */
  PG: "PG",

  /**
   * value: "PH"
   * @const
   */
  PH: "PH",

  /**
   * value: "PK"
   * @const
   */
  PK: "PK",

  /**
   * value: "PL"
   * @const
   */
  PL: "PL",

  /**
   * value: "PM"
   * @const
   */
  PM: "PM",

  /**
   * value: "PN"
   * @const
   */
  PN: "PN",

  /**
   * value: "PR"
   * @const
   */
  PR: "PR",

  /**
   * value: "PS"
   * @const
   */
  PS: "PS",

  /**
   * value: "PT"
   * @const
   */
  PT: "PT",

  /**
   * value: "PW"
   * @const
   */
  PW: "PW",

  /**
   * value: "PY"
   * @const
   */
  PY: "PY",

  /**
   * value: "QA"
   * @const
   */
  QA: "QA",

  /**
   * value: "RE"
   * @const
   */
  RE: "RE",

  /**
   * value: "RO"
   * @const
   */
  RO: "RO",

  /**
   * value: "RS"
   * @const
   */
  RS: "RS",

  /**
   * value: "RU"
   * @const
   */
  RU: "RU",

  /**
   * value: "RW"
   * @const
   */
  RW: "RW",

  /**
   * value: "SA"
   * @const
   */
  SA: "SA",

  /**
   * value: "SB"
   * @const
   */
  SB: "SB",

  /**
   * value: "SC"
   * @const
   */
  SC: "SC",

  /**
   * value: "SD"
   * @const
   */
  SD: "SD",

  /**
   * value: "SE"
   * @const
   */
  SE: "SE",

  /**
   * value: "SG"
   * @const
   */
  SG: "SG",

  /**
   * value: "SH"
   * @const
   */
  SH: "SH",

  /**
   * value: "SI"
   * @const
   */
  SI: "SI",

  /**
   * value: "SJ"
   * @const
   */
  SJ: "SJ",

  /**
   * value: "SK"
   * @const
   */
  SK: "SK",

  /**
   * value: "SL"
   * @const
   */
  SL: "SL",

  /**
   * value: "SM"
   * @const
   */
  SM: "SM",

  /**
   * value: "SN"
   * @const
   */
  SN: "SN",

  /**
   * value: "SO"
   * @const
   */
  SO: "SO",

  /**
   * value: "SR"
   * @const
   */
  SR: "SR",

  /**
   * value: "SS"
   * @const
   */
  SS: "SS",

  /**
   * value: "ST"
   * @const
   */
  ST: "ST",

  /**
   * value: "SV"
   * @const
   */
  SV: "SV",

  /**
   * value: "SX"
   * @const
   */
  SX: "SX",

  /**
   * value: "SY"
   * @const
   */
  SY: "SY",

  /**
   * value: "SZ"
   * @const
   */
  SZ: "SZ",

  /**
   * value: "TA"
   * @const
   */
  TA: "TA",

  /**
   * value: "TC"
   * @const
   */
  TC: "TC",

  /**
   * value: "TD"
   * @const
   */
  TD: "TD",

  /**
   * value: "TF"
   * @const
   */
  TF: "TF",

  /**
   * value: "TG"
   * @const
   */
  TG: "TG",

  /**
   * value: "TH"
   * @const
   */
  TH: "TH",

  /**
   * value: "TJ"
   * @const
   */
  TJ: "TJ",

  /**
   * value: "TK"
   * @const
   */
  TK: "TK",

  /**
   * value: "TL"
   * @const
   */
  TL: "TL",

  /**
   * value: "TM"
   * @const
   */
  TM: "TM",

  /**
   * value: "TN"
   * @const
   */
  TN: "TN",

  /**
   * value: "TO"
   * @const
   */
  TO: "TO",

  /**
   * value: "TR"
   * @const
   */
  TR: "TR",

  /**
   * value: "TT"
   * @const
   */
  TT: "TT",

  /**
   * value: "TV"
   * @const
   */
  TV: "TV",

  /**
   * value: "TW"
   * @const
   */
  TW: "TW",

  /**
   * value: "TZ"
   * @const
   */
  TZ: "TZ",

  /**
   * value: "UA"
   * @const
   */
  UA: "UA",

  /**
   * value: "UG"
   * @const
   */
  UG: "UG",

  /**
   * value: "UM"
   * @const
   */
  UM: "UM",

  /**
   * value: "US"
   * @const
   */
  US: "US",

  /**
   * value: "UY"
   * @const
   */
  UY: "UY",

  /**
   * value: "UZ"
   * @const
   */
  UZ: "UZ",

  /**
   * value: "VA"
   * @const
   */
  VA: "VA",

  /**
   * value: "VC"
   * @const
   */
  VC: "VC",

  /**
   * value: "VE"
   * @const
   */
  VE: "VE",

  /**
   * value: "VG"
   * @const
   */
  VG: "VG",

  /**
   * value: "VI"
   * @const
   */
  VI: "VI",

  /**
   * value: "VN"
   * @const
   */
  VN: "VN",

  /**
   * value: "VU"
   * @const
   */
  VU: "VU",

  /**
   * value: "WF"
   * @const
   */
  WF: "WF",

  /**
   * value: "WS"
   * @const
   */
  WS: "WS",

  /**
   * value: "XA"
   * @const
   */
  XA: "XA",

  /**
   * value: "XB"
   * @const
   */
  XB: "XB",

  /**
   * value: "XK"
   * @const
   */
  XK: "XK",

  /**
   * value: "YE"
   * @const
   */
  YE: "YE",

  /**
   * value: "YT"
   * @const
   */
  YT: "YT",

  /**
   * value: "ZA"
   * @const
   */
  ZA: "ZA",

  /**
   * value: "ZM"
   * @const
   */
  ZM: "ZM",

  /**
   * value: "ZW"
   * @const
   */
  ZW: "ZW",

  /**
   * Returns a <code>Country</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/Country} The enum <code>Country</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {Country};