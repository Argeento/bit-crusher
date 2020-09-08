import { smartQuotes } from './utils'

export default function generateOutput(swaps: Array<ISwap>, code: string) {
  code = smartQuotes(code)
  const key = swaps.map(swap => swap.to).reverse().join('')
  const strVar = 'O'
  const charVar = 'o'
  return `${strVar}=${code};for(${charVar} of'${key}')with(${strVar}.split(${charVar}))${strVar}=join(pop());eval(${strVar})`
}
