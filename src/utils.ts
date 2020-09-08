export function smartQuotes (str: string) {
  if (str.includes('\n')) {
    return '`' + str.replace(/`/g, '\\\`') + '`'
  } else {
    return str.split('"').length >= str.split("'").length
      ? `'${str.replace(/'/g, '\\\'')}'`
      : `"${str.replace(/"/g, '\\\"')}"`
  }
}

export function getShortestString (strings: Array<string>) {
  return strings.sort((strA, strB) => strA.length - strB.length)[0]
}

export function countSubstring (substring: string, string: string) {
  return string.split(substring).length - 1
}
