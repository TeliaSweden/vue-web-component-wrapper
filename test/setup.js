/* globals beforeAll afterAll */
require('@babel/polyfill')
const puppeteer = require('puppeteer')
const { createServer } = require('http-server')

const port = 3000
const puppeteerOptions = process.env.CI
  ? { args: ['--no-sandbox', '--disable-setuid-sandbox'] }
  : {}

let browser, server

module.exports = async function launchPage(name) {
  // const browser = await puppeteer.launch();
  // const page = await browser.newPage();
  // await page.goto(url);
  // await page.screenshot({path: 'example.png'});

  // await browser.close();

  const browser = await puppeteer.launch()

  const url = `http://localhost:${port}/test/fixtures/${name}.html`
  const page = await browser.newPage()
  await page.goto(url)
  const logs = []
  page.on('console', (msg) => {
    logs.push(msg.text())
  })
  await page.goto(url)
  return { browser, page, logs }
}

beforeAll(async () => {
  browser = await puppeteer.launch(puppeteerOptions)
  server = createServer({ root: process.cwd() })
  await new Promise((resolve, reject) => {
    server.listen(port, (err) => {
      if (err) return reject(err)
      resolve()
    })
  })
})

afterAll(async () => {
  await browser.close()
  server.close()
})
