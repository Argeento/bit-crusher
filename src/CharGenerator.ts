export default class CharGenerator {
  private availableChars: Array<string>
  private index: number

  constructor (code: string) {
    const allChars = [
      ...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
      ...'0123456789',
      ...'+-*/()[]{}^%$!@.,_<>?:;',
      ...'αβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ',
      ...'абвгдеёжзийклмнопрстуфхцчшщыэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩъЫьЭЮЯ',
    ]

    this.availableChars = allChars.filter(char => !code.includes(char))
    this.index = 0
  }

  getNextChar () {
    const nextChar = this.availableChars[this.index] || String.fromCharCode(192 + this.index)
    this.index++
    return nextChar
  }
}
