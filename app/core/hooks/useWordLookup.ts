import { goYoudao } from '../utils/index.ts'
import { stripWordPunctuation } from '../utils/wordLookup.ts'

export async function lookupWord(e: MouseEvent, rawWord: string, playAudio?: (word: string) => void) {
  e.stopPropagation()
  const query = rawWord.trim()
  if (!query) return

  goYoudao(query)
  const stripped = stripWordPunctuation(rawWord)
  if (stripped) {
    playAudio?.(stripped)
  }
}
