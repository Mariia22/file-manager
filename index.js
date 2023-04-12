import * as readline from 'readline'

let username = process.argv ? process.argv : "John Doe"
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'OHAI> '
});

rl.prompt()

const commands = {
  add: function () {
    console.log("Add")
  },
  bye: function () { rl.close() }
}

rl.on('line', (input) => {
  try {
    if (input.trim() in commands) {
      commands[input]()
    }
  } catch {
    throw new Error("Error")
  }
  rl.prompt()
})

rl.on('SIGINT', () => {
  process.exit();
})

rl.on('close', () => {
  process.exit();
})
