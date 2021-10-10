/* globals gauge*/
"use strict";
const path = require('path');
const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    press,
    screenshot,
    above,
    click,
    checkBox,
    listItem,
    toLeftOf,
    link,
    text,
    into,
    textBox,
    evaluate
} = require('taiko');
const assert = require("assert");
//const headless = process.env.headless_chrome.toLowerCase() === 'true';
const headless = true

beforeSuite(async () => {
    await openBrowser({
        headless: headless
    })
});

/*
full open browser function
    await openBrowser({headless: true, args: [
        '--disable-gpu',
        '--start-fullscreen',
        '--disable-dev-shm-usage',
        '--disable-setuid-sandbox',
        '--no-first-run',
        '--no-sandbox',
        '--no-zygote']}); 
});
*/

afterSuite(async () => {
    await closeBrowser();
});

step("Clear local storage", async function() {
    await evaluate(() => localStorage.clear());
});


// screnncast recording 4 spec
/*
<img src="../../dataName.gif" width="600">
*/
step("Screencast start <DataName>", async function(dataName) {
	await screencast.startScreencast('reports/html-report/' + dataName + '.gif');
});

step("Screencast stop", async function() {
	await screencast.stopScreencast();
});