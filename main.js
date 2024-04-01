import BrowserManager from "./BrowserManager.js";

let browser = new BrowserManager();

await browser.init('https://pptr.dev/');

await browser.newPage('https://www.google.com/');

await browser.goto(1, 'https://www.facebook.com/');
await browser.goto(2, 'https://www.facebook.com/');

//await browser.close();