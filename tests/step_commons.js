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


// Browser Functions
step("Goto webpage: <www.google.de>", async function(url) {
	await goto(url)
});

step("Open a new tab with <google.com>", async function(url) {
	await openTab(url)
24
});

step("Close tab", async function() {
	await closeTab()
24
});

step("Go back", async function() {
	await goBack()
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



step("Highlightening <TextName>", async function(textName) {
	await highlight(textName)
});

step("Click on the link: <LinkName>", async function(linkName) {
	await click(link(linkName));
});

step("Click on the text: <Name>", async function(name) {
    await highlight(text(name));
	await click(text(name));
});

step("Write <text> to fieldname <fieldname>", async function(text, fieldName) {
	await write(text, into(fieldName));
});

step("clear field <FieldName> ", { continueOnFailure: true}, async function(fieldName) {
	await clear(textBox(fieldName));
});

step("Write <Text> into a textbox", async function(text) {
	await write(text, into(textBox()))
});

step("Press Enter", async function() {
	await press("Enter")
});



//htmlID example
step("Write <Text> into htmlID <>htmlID", async function(text, htmlID) {
    await write(text, into($("#" + htmlID)));      
});

//with positions
step("Choose item <Item> from area right of <Area>", async function(item, area) {
	await dropDown(toRightOf(area)).select(item);
});

//datetime
step("Write <Date> to date field right to <name>", async function(date, name) {
	await write(date, timeField( toRightOf(name)));
});

//Asserts
step("Assert that under <AreaName> the text: <text> exists", { continueOnFailure: true}, async function(areaName, text) {
    assert.ok(text(text).exists(), below(areaName))
});

step("Check if <Element> is active", { continueOnFailure: true}, async function(element) {
    assert.ok(!(await text(element).isDisabled()));
});

step("Check for text <Text> below <area>", async function(area, text) {
    await text(text, below( textBox(below(area)))).exists();
});

step("Check element with htmlID <htmlID> is visible", { continueOnFailure: true}, async function(htmlID) {
    await highlight(await $("#" + htmlID));
    assert.ok(await $("#" + htmlID).isVisible())
});

