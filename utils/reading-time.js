export function readingTime(text) {
  let words = text.trim().split(/\s+/).length
  let wordsPerMinute = 220
  return Math.ceil(words / wordsPerMinute)
}
