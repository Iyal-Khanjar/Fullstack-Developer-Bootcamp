export function Ex2One() {
  const data = ["hello", "world"];
  return (
    data.join(' ')
  )
}

export function Ex2Two() {
  const number1 = 5;
  const number2 = 6;
  return (
    number1 + ' + ' + number2 + ' = ' + (number1 + number2).toString()
  )
}

export function Ex2Three() {

  const string = 'I love React!'
  return (
    ('The string’s length is ' + (string.length).toString())
  )
}
