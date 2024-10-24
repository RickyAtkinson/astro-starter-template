export interface WebsiteConfig {
  siteUrl: URL;
  siteName: string;
  title: string;
  titleSuffix?: string;
  description: string;
  tags: string[];
  htmlLang: IsoLanguageCode;
  locale: BcpLanguageCode;
  alternateLocales: BcpLanguageCode[];
  author: AttributorData;
  publisher: AttributorData;
  ogImage: SocialImageMetadata;
  twitterImage?: SocialImageMetadata;
  socialMedia: SocialMedia;
}

export interface SocialImageMetadata {
  fileName: string;
  imageType: SocialImageType;
  width: number;
  height: number;
  alt: string;
}

interface SocialMediaAccount {
  platformName: string;
  username?: string;
  profileUrl: URL;
  // icon: string;
  // color: string;
}

interface SocialMedia {
  facebook?: SocialMediaAccount;
  github?: SocialMediaAccount;
  instagram?: SocialMediaAccount;
  mastodon?: SocialMediaAccount;
  linkedin?: SocialMediaAccount;
  pintrest?: SocialMediaAccount;
  tiktok?: SocialMediaAccount;
  twitter?: SocialMediaAccount;
  youtube?: SocialMediaAccount;
}

export interface AttributorData {
  type: AttributorType;
  displayName: string;
  profileUrl?: URL;
}

type AttributorType = 'Organization' | 'Person';

type SocialImageType = 'image/jpeg' | 'image/png';

// TODO: Support more Open Graph Type tags
export type OgTypeTag = 'article' | 'website';

// TODO: Support more Twitter Card types
export type TwitterCardType = 'summary' | 'summary_large_image';

export type IsoLanguageCode =
  | 'ab'
  | 'aa'
  | 'af'
  | 'ak'
  | 'sq'
  | 'am'
  | 'ar'
  | 'an'
  | 'hy'
  | 'as'
  | 'av'
  | 'ae'
  | 'ay'
  | 'az'
  | 'bm'
  | 'ba'
  | 'eu'
  | 'be'
  | 'bn'
  | 'bh'
  | 'bi'
  | 'bs'
  | 'br'
  | 'bg'
  | 'my'
  | 'ca'
  | 'ch'
  | 'ce'
  | 'ny'
  | 'zh'
  | 'zh-Hans'
  | 'zh-Hant'
  | 'cv'
  | 'kw'
  | 'co'
  | 'cr'
  | 'hr'
  | 'cs'
  | 'da'
  | 'dv'
  | 'nl'
  | 'dz'
  | 'en'
  | 'eo'
  | 'et'
  | 'ee'
  | 'fo'
  | 'fj'
  | 'fi'
  | 'fr'
  | 'ff'
  | 'gl'
  | 'gd'
  | 'gv'
  | 'ka'
  | 'de'
  | 'el'
  | 'gn'
  | 'gu'
  | 'ht'
  | 'ha'
  | 'he'
  | 'hz'
  | 'hi'
  | 'ho'
  | 'hu'
  | 'is'
  | 'io'
  | 'ig'
  | 'id'
  | 'in'
  | 'ia'
  | 'ie'
  | 'iu'
  | 'ik'
  | 'ga'
  | 'it'
  | 'ja'
  | 'jv'
  | 'kl'
  | 'kn'
  | 'kr'
  | 'ks'
  | 'kk'
  | 'km'
  | 'ki'
  | 'rw'
  | 'rn'
  | 'ky'
  | 'kv'
  | 'kg'
  | 'ko'
  | 'ku'
  | 'kj'
  | 'lo'
  | 'la'
  | 'lv'
  | 'li'
  | 'ln'
  | 'lt'
  | 'lu'
  | 'lg'
  | 'lb'
  | 'mk'
  | 'mg'
  | 'ms'
  | 'ml'
  | 'mt'
  | 'mi'
  | 'mr'
  | 'mh'
  | 'mo'
  | 'mn'
  | 'na'
  | 'nv'
  | 'ng'
  | 'nd'
  | 'ne'
  | 'no'
  | 'nb'
  | 'nn'
  | 'ii'
  | 'oc'
  | 'oj'
  | 'cu'
  | 'or'
  | 'om'
  | 'os'
  | 'pi'
  | 'ps'
  | 'fa'
  | 'pl'
  | 'pt'
  | 'pa'
  | 'qu'
  | 'rm'
  | 'ro'
  | 'ru'
  | 'se'
  | 'sm'
  | 'sg'
  | 'sa'
  | 'sr'
  | 'sh'
  | 'st'
  | 'tn'
  | 'sn'
  | 'sd'
  | 'si'
  | 'ss'
  | 'sk'
  | 'sl'
  | 'so'
  | 'nr'
  | 'es'
  | 'su'
  | 'sw'
  | 'sv'
  | 'tl'
  | 'ty'
  | 'tg'
  | 'ta'
  | 'tt'
  | 'te'
  | 'th'
  | 'bo'
  | 'ti'
  | 'to'
  | 'ts'
  | 'tr'
  | 'tk'
  | 'tw'
  | 'ug'
  | 'uk'
  | 'ur'
  | 'uz'
  | 've'
  | 'vi'
  | 'vo'
  | 'wa'
  | 'cy'
  | 'wo'
  | 'fy'
  | 'xh'
  | 'yi'
  | 'ji'
  | 'yo'
  | 'za'
  | 'zu';

export type BcpLanguageCode =
  | 'ar-SA'
  | 'bn-BD'
  | 'bn-IN'
  | 'cs-CZ'
  | 'da-DK'
  | 'de-AT'
  | 'de-CH'
  | 'de-DE'
  | 'el-GR'
  | 'en-AU'
  | 'en-CA'
  | 'en-GB'
  | 'en-IE'
  | 'en-IN'
  | 'en-NZ'
  | 'en-US'
  | 'en-ZA'
  | 'es-AR'
  | 'es-CL'
  | 'es-CO'
  | 'es-ES'
  | 'es-MX'
  | 'es-US'
  | 'fi-FI'
  | 'fr-BE'
  | 'fr-CA'
  | 'fr-CH'
  | 'fr-FR'
  | 'he-IL'
  | 'hi-IN'
  | 'hu-HU'
  | 'id-ID'
  | 'it-CH'
  | 'it-IT'
  | 'ja-JP'
  | 'ko-KR'
  | 'nl-BE'
  | 'nl-NL'
  | 'no-NO'
  | 'pl-PL'
  | 'pt-BR'
  | 'pt-PT'
  | 'ro-RO'
  | 'ru-RU'
  | 'sk-SK'
  | 'sv-SE'
  | 'ta-IN'
  | 'ta-LK'
  | 'th-TH'
  | 'tr-TR'
  | 'zh-CN'
  | 'zh-HK'
  | 'zh-TW';
