function getGreeting(name = 'you') {
  return `Hello ${name}!`
}
console.log(getGreeting('Jane Doe'))

function replaceName(text, name, newName) {
  return text.replaceAll(name, newName)
}
console.log(replaceName('Hello Jane. goodbye Jane', 'Jane', 'John'))

