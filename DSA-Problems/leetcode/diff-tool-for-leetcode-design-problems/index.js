const input = require(`./in.json`);
const output = require(`./out.json`);
const expect = require(`./ex.json`);

const inputLength = input.methods.length;
const results = [];

for (let i = 0; i < inputLength; i++) {
  if (output[i] !== expect[i]) {
    const result = {
      index: i,
      name: input.methods[i],
      args: input.arguments[i],
      output: output[i],
      expect: expect[i]
    };
    results.push(result);
  }
}

console.log('```js');
console.log(results);
console.log('```');