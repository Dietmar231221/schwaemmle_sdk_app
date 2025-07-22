// utils/faqHelper.js
import Fuse from 'fuse.js'
import faq from '../data/faq.json'

const fuse = new Fuse(faq, {
  keys: ['frage'],
  threshold: 0.4, // wie ungenau die Suche sein darf (0 = exakt, 1 = alles passt)
})

export function findeLokaleAntwort(userText) {
  const result = fuse.search(userText)

  if (result.length > 0) {
    return result[0].item.antwort
  } else {
    return null
  }
}
