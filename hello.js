let Version = "3.0"

console.log(`Thank you for using Hello ${Version}\n`)

class Hello {
  greet() {
    console.log(`Hello at ${new Date().toLocaleTimeString()}`)
  }
}

new Hello().greet()