const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQ4YzI1N2JkLTBmMDgtNDc5OS04MGUyLTcyMjk5NTY3MDU5NC0xNjk1MTMzMzQxMTkxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiYjI3OTU2YWQtYjU1ZS00Njg1LWFlMGMtNDcyMWY5ODYyMGVjIiwidHlwZSI6InQifQ.9ON8WVa-8pEse5bfbvur5dL7rQgnFNzb_H1gFsMxiLI'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
