/**
 * Profanity and Moderation Filter for Public Chat Rooms
 * Filters inappropriate language, profanity, insults, and offensive terms in Arabic and English.
 */

// List of common offensive, vulgar, and profanity words (Arabic & English)
const FORBIDDEN_PATTERNS: (string | RegExp)[] = [
  // Arabic profanity & insults (common variations & normalized patterns)
  /كلب/i, /حمار/i, /غبي/i, /حيوان/i, /زفت/i, /حقير/i, /سافل/i, /واطي/i, /قذر/i, /وسخ/i,
  /تفه/i, /تفلة/i, /يا غبي/i, /يا حمار/i, /يا كلب/i, /يا حيوان/i, /تافه/i, /حقارة/i,
  /سفالة/i, /صايع/i, /عرص/i, /شرموط/i, /قحبة/i, /منحط/i, /خول/i, /كس/i, /طيز/i, /زب/i,
  /شتم/i, /سب/i, /يلعن/i, /لعنة/i, /الله يلعن/i, /ابن ال/i, /يا ابن/i, /الزفت/i,

  // English profanity & insults
  /\bfuck\w*/i,
  /\bshit\w*/i,
  /\bbitch\w*/i,
  /\basshole\w*/i,
  /\bdick\w*/i,
  /\bcunt\w*/i,
  /\bastard\w*/i,
  /\bslut\w*/i,
  /\bwhore\w*/i,
  /\bstupid\b/i,
  /\bidiot\b/i,
  /\bdumb\b/i,
  /\bfaggot\w*/i,
  /\bnigger\w*/i,
];

/**
 * Checks if a string contains profanity or inappropriate language.
 */
export function containsProfanity(text: string): boolean {
  if (!text || typeof text !== 'string') return false;
  
  const normalizedText = text.trim();
  
  return FORBIDDEN_PATTERNS.some((pattern) => {
    if (pattern instanceof RegExp) {
      return pattern.test(normalizedText);
    }
    return normalizedText.toLowerCase().includes(pattern.toLowerCase());
  });
}

/**
 * Cleans / sanitizes text by replacing profanity with asterisks.
 */
export function sanitizeText(text: string): string {
  if (!text || typeof text !== 'string') return '';
  
  let sanitized = text;
  
  FORBIDDEN_PATTERNS.forEach((pattern) => {
    if (pattern instanceof RegExp) {
      sanitized = sanitized.replace(pattern, (match) => '*'.repeat(match.length));
    } else {
      const regex = new RegExp(pattern, 'gi');
      sanitized = sanitized.replace(regex, (match) => '*'.repeat(match.length));
    }
  });
  
  return sanitized;
}
