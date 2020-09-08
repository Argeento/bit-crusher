import CharGenerator from './CharGenerator'
import generateOutput from './generateOutput'
import { getShortestString, countSubstring } from './utils'

enum STRATEGY { NONE, MAX, MIN }

function findCandidates (code: string, strategy: STRATEGY) {
  let candidates: Array<ICandidate> = []
  let maxSavings = 0
  let stop = false

  for (let length = 2; !stop; length++) {
    let hasWords = false

    for (let i = 0; i < code.length - length; i++) {
      const word = code.substring(i, i + length)
      const wordOccurences = countSubstring(word, code)

      if (wordOccurences > 1) {
        hasWords = true
        candidates = candidates.filter(candidate => {
          return word.indexOf(candidate.word) === -1 || candidate.wordOccurences > wordOccurences
        })

        const savings = (wordOccurences * length) - (wordOccurences + length + 2)

        if (savings > 0 && savings >= maxSavings * (strategy === STRATEGY.NONE ? 1 : 0.8)) {
          candidates.push({ word, wordOccurences, savings })
        }

        maxSavings = Math.max(maxSavings, savings)
      }
    }

    if (!hasWords) {
      stop = true
    }
  }

  return candidates.sort((candidateA, candidateB) => candidateB.savings - candidateA.savings)
}

function crush (code: string, strategy: STRATEGY) {
  const charGenerator = new CharGenerator(code)
  let swaps: Array<ISwap> = []
  let leftover = code
  let previousOutput = null
  let stop = false

  while (!stop) {
    const char = charGenerator.getNextChar()
    const candidates = findCandidates(leftover, strategy)

    if (candidates.length === 0) break
  
    const max = candidates[0].savings
    const candidatesWithMax = candidates.filter(candidate => {
      return candidate.savings >= 0.8 * max
    })

    let index: number

    if (strategy === STRATEGY.NONE) {
      index = 0
    }

    if (strategy === STRATEGY.MAX) {
      let maxLength = 0
      candidatesWithMax.forEach((candidate, i) => {
        if (candidate.word.length > maxLength) {
          index = i
          maxLength = candidate.word.length
        }
      })
    } 

    if (strategy === STRATEGY.MIN) {
      let minLength = Infinity
      candidatesWithMax.forEach((candidate, i) => {
        if (candidate.word.length < minLength) {
          index = i
          minLength = candidate.word.length
        }
      })
    }

    const word = candidates[index].word
    const newLeftover = leftover.split(word).join(char) + char + word

    const newSwaps = [...swaps]
    newSwaps.push({ from: word, to: char })

    const output = generateOutput(newSwaps, newLeftover)

    if (previousOutput === null || previousOutput.length > output.length) {
      previousOutput = output
      leftover = newLeftover
      swaps = newSwaps
    } else {
      stop = true
    }
  }

  const output = generateOutput(swaps, leftover)
  return code.length < output.length
    ? code
    : output
}

export default function compress (code: string) {
  const strategies = [STRATEGY.NONE, STRATEGY.MAX, STRATEGY.MIN]
  const codes = strategies.map(strategy => crush(code, strategy))
  return getShortestString(codes)
}
