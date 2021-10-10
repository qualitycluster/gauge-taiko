const { 
    openBrowser,
    goto,
    press, 
    closeBrowser, 
    screenshot, 
    image, 
    resizeWindow, 
    write, 
    into, 
    click, 
    $, 
    clear, 
    waitFor, 
    button, 
    toRightOf, 
    below, 
    text, 
    dropDown, 
    evaluate, 
    near, 
    textBox, 
    timeField, 
    scrollTo, 
    scrollDown, 
    screencast, 
    highlight, 
    mouseAction, 
    select, 
    clearHighlights, 
    within, 
    expect, 
    toLeftOf, 
    checkBox,
    above,
    closeTab,
    openTab,
    goBack
} = require('taiko');

const assert = require('assert').strict;

step("Goto webpage: <www.google.de>", async function(url) {
	await goto(url)
});

step("Click on <TextName>", async function(textName) {
	await click(textName)
});

step("Make a screenshot", async function() {
    const path = require('path');
    gauge.customScreenshotWriter = async function () {
        const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'], `screenshot-${process.hrtime.bigint()}.png`);
        await screenshot({ path: screenshotFilePath });
        return path.basename(screenshotFilePath);
    };
    gauge.screenshot();
});

step("Scroll to <TextName>", async function(textName) {
	await scrollTo(textName)
});

step("Go back", async function() {
	await goBack()
});

step("Highlightening <TextName>", async function(textName) {
	await highlight(textName)
});

step("Open a new tab with <google.com>", async function(url) {
	await openTab(url)
24
});

step("Close tab", async function() {
	await closeTab()
24
});

step("Write <Text> into a textbox", async function(text) {
	await write(text, into(textBox()))
});

step("Press Enter", async function() {
	await press("Enter")
});