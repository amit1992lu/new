
require('../Utilities/log4js.js');
let assert = require('assert');
const log4js = require('log4js');
const randomstring = require('randomstring');
const logger = log4js.getLogger('univar');
const randomInt = require('random-number');

class commonActions {
	//Changes focus to iFrame

	async safeFrameSwitch(id_, friendlyNameOfElement) {
		await this.domStatus();
		try {
			if (typeof id_ == 'number') {
				await browser.switchToFrame(id_)
			} else if (id_.includes('//')) {
				let frameId = await browser.$(id_)
				await browser.switchToFrame(frameId)
			} else {
				let frameId = await browser.$('iframe[id="' + id_ + '"]');
				await browser.switchToFrame(frameId)
			}
		} catch (e) {
			logger.error('Failed to switch to frame "' + friendlyNameOfElement + '" - ' + e);
			assert.fail('Failed to switch to frame "' + friendlyNameOfElement + '" \n' + e);
		}
	}


	//get the Text from the given locator
	async safeGetText(locator_, friendlyNameOfElement) {
		try {
			await this.waitForVisible(locator_, friendlyNameOfElement);
			let ele = await $(locator_);
			let txt = await ele.getText();
			return txt
		} catch (e) {
			if (e.name !== null) {
				logger.error('Failed to fetch text with scroll of - ' + friendlyNameOfElement + ' - ' + e);
				assert.fail('Failed to fetch text with scroll of - ' + friendlyNameOfElement + '\n' + e);
			}
		}
	}


	// returns the current browser name
	async getBrowserName() {
		return await browser.capabilities.browserName;
	}

	//Navigates to given URL
	async navigate(destUrl_) {
		try {
			if (await browser.isMobile === false) {
				await browser.maximizeWindow();
			}
			await browser.url(destUrl_);
			logger.info('Navigated to ' + destUrl_);
			return this;
		} catch (e) {
			if (e.name !== null) {
				logger.error(destUrl_ + ' is not valid - ' + e);
				assert.fail('Failed to navigate to "' + destUrl_ + '"\n' + e);
			}
		}
	}

	//Navigates to given URL
	async navigateToNewWindow(destUrl_) {
		try {
			await browser.newWindow(destUrl_);
			logger.info('Opened in New Tab and Navigated to ' + destUrl_);
		} catch (e) {
			if (e.name !== null) {
				logger.error(destUrl_ + ' is not valid - ' + e);
				assert.fail('Failed to Switch New Window and navigate to "' + destUrl_ + '"\n' + e);
			}
		}
	}

	//Wait For visible
	async waitForVisible(locator_, friendlyNameOfElement, time) {
		try {
			const elem = await $(locator_);
			if (time !== undefined) {
				return await elem.waitForDisplayed({timeout: time})
			} else {
				return await elem.waitForDisplayed();
			}
		} catch (e) {
			if (e.name !== null) {
				logger.error(friendlyNameOfElement + ' is not displayed - ' + e);
				assert.fail('"' + friendlyNameOfElement + '" is not displayed \n' + e);
			}
		}
	}

	//Wait until element is clickable
	async waitForClickable(locator_, friendlyNameOfElement, time) {
		try {
			const elem = await $(locator_);
			let waitForClickable;
			return await elem.waitForClickable({timeout: time})
		} catch (e) {
			if (e.name !== null) {
				logger.error(friendlyNameOfElement + ' is not clickable - ' + e);
				assert.fail('"' + friendlyNameOfElement + '" is not clickable \n' + e);
			}
		}
	}

	//Clicks on the element using Java Script executor
	async safeJavaScriptClick(locator_, friendlyNameOfElement) {
		try {
			const ele = await $(locator_);
			await browser.execute('arguments[0].click();', ele);
		} catch (e) {
			if (e.name !== null) {
				logger.error(friendlyNameOfElement + ' was not found - ' + e);
				assert.fail('Failed to click "' + friendlyNameOfElement + '"\n' + e);
			}
		}
	}

	// safe asserts for validation
	async safeAsserts(verification, actual, friendlyText, expected) {
		let safeAsserts;
		switch (verification) {

			case 'equal':
				safeAsserts = await expect(expected).to.equal(actual);
				break;
			case 'contains':
				safeAsserts = await expect(actual).to.contains(expected);
				break;
			case 'true':
				safeAsserts = await expect(actual).to.be.true;
				break;
			case 'false':
				safeAsserts = await expect(actual).to.be.false;
				break;
			case 'deepEqual':
				safeAsserts = await expect(actual).to.deep.equal(expected);
				break;
			case 'lessthanorequal':
				safeAsserts = await expect(actual).to.be.at.most(expected);
				break;
			case 'greaterThanOrEqual':
				safeAsserts = await expect(actual).to.be.at.least(expected);
				break;
			case 'notNull':
				safeAsserts = await expect(actual).to.not.be.null;
				break;
			case 'notContain':
				safeAsserts = await expect(actual).not.to.have.string(expected);
				break;
		}
		return safeAsserts;
	}

	async domStatus() {
		await browser.waitUntil(
			async function () {
				const state = await browser.execute(function () {
					return document.readyState;
				});
				return state === 'complete';
			}, {timeout: 180000, timeoutMsg: 'Page is not completely loaded in 180 seconds'}
		);
	}

	//Get current Url
	async getUrl() {
		try {
			await this.domStatus();
			let currentUrl = await browser.getUrl();
			return currentUrl;
		} catch (e) {
			logger.error('Not able to fetch current url' + e);
			assert.fail('Unable to get the current url' + e);
		}
	}

	//Check if element is visible
	async safeIsVisible(locator, friendlyName) {
		try {
			await this.domStatus();
			const ele = await $(locator);
			const isDisplayed = await ele.isDisplayed();
			return isDisplayed
		} catch (e) {
			logger.error(friendlyName + ' was not visible in DOM ' + e);
			assert.fail(friendlyName + ' was not found in DOM ' + e);
		}
	}

	async safeIsVisibleWait(locator, time, friendlyName) {
		try {
			await this.domStatus();
			const ele = await $(locator);
			let t = 500;
			let isDisplayed;
			while (t < time) {
				isDisplayed = await ele.isDisplayed();
				t += 500;
			}
			return isDisplayed
		} catch (e) {
			logger.error(friendlyName + ' was not visible in DOM ' + e);
			assert.fail(friendlyName + ' was not found in DOM ' + e);
		}
	}


	async safeVisibleClick(locator_, friendlyNameOfElement) {
		try {
			const ele = await $(locator_);
			await this.waitForVisible(locator_, friendlyNameOfElement);
			await ele.click();
			return this;
		} catch (e) {
			if (e.name !== null) {
				logger.error(friendlyNameOfElement + ' was not found - ' + e);
				assert.fail('Failed to click "' + friendlyNameOfElement + '"\n' + e);
			}
		}
	}

	//Sets an element to a given value
	async setValue(locator_, text_, friendlyNameOfElement, time) {
		try {
			const ele = await $(locator_);
			await this.waitForVisible(locator_, friendlyNameOfElement, time);
			await ele.setValue(text_);
			return this;
		} catch (e) {
			if (e.name !== null) {
				logger.error(friendlyNameOfElement + ' was not found - ' + e);
				assert.fail('Failed to enter text in "' + friendlyNameOfElement + '" \n ' + e);
			}
		}
	}

	//Select by value
	async selectByValue(locator, valueType, valueTarget) {
		const ele = await $(locator);
		await ele.selectByAttribute(valueType, valueTarget);
	}

	//Select option by Index
	async selectByIndex(locator_, value_, friendlyNameOfElement) {
		await this.domStatus();
		try {
			const ele = $(locator_);
			await ele.selectByIndex(value_);
			return this;
		} catch (e) {
			if (e.name !== null) {
				logger.error(friendlyNameOfElement + ' was not found - ' + e);
				assert.fail('Failed to select value for "' + friendlyNameOfElement + '"\n' + e);
			}
		}
	}

	//Select By Text
	async selectByText(locator_, text_, friendlyNameOfElement) {
		await this.domStatus();
		try {
			if (text_) {
				const ele = await $(locator_);
				await ele.selectByVisibleText(text_);
			}
			return this;
		} catch (e) {
			if (e.name !== null) {
				logger.error(friendlyNameOfElement + ' was not found - ' + e);
				assert.fail('Failed to select value for "' + friendlyNameOfElement + '"\n' + e);
			}
		}
	}

	//Generates Random Number
	getRandomNumber(number) {
		let randomData = randomstring.generate({
			length: number,
			charset: 'numeric',
		});
		return randomData;
	}

	//Generate random string
	getRandomString(number) {
		let randomString = randomstring.generate({
			length: number,
			charset: 'alphabetic'
		});
		return randomString;
	}

	/**
	 * @param locator_
	 * @returns {WebDriver}
	 * Scrolls to given locator by taking x and y coordinates
	 */
	async scrollTo(locator_, friendlyNameOfElement) {
		try {
			const ele = await $(locator_);
			await ele.scrollIntoView();
			return this;
		} catch (e) {
			if (e.name !== null) {
				logger.error('Failed to scroll ' + friendlyNameOfElement + ' into view - ' + e);
				assert.fail('Failed to scroll ' + friendlyNameOfElement + ' into view \n' + e);
			}
		}
	}

	async dynamicLocator(locator, value) {
		let locator1 = await locator.replace('%s', value);
		return locator1;
	}

	//Gets
	// elements from a locator and returns an array of WebElement JSON objects
	async findElements(locatorXpath_, friendlyNameOfElement) {
		try {
			var elementsArray = await browser.findElements('xpath', locatorXpath_);
			return elementsArray;

		} catch (e) {
			if (e.name !== null) {
				logger.error(friendlyNameOfElement + ' was not found - ' + e);
				await assert.fail('"' + friendlyNameOfElement + '" was not found \n' + e);
			}
		}
	}

	async browserKeys(value_, friendlyNameOfKey) {
		try {
			await browser.keys(value_);
			return this;
		} catch (e) {
			if (e.name !== null) {
				logger.error('Failed to click ' + friendlyNameOfKey + ' key - ' + e);
				assert.fail('Failed to click ' + friendlyNameOfKey + ' key  \n' + e);
			}
		}
	}

	//get attribute of element
	async getAttribute(locator_, attribute, friendlyNameOfElement) {
		try {
			let elements = await $(locator_);
			await this.waitForVisible(elements, friendlyNameOfElement);
			let attributeValue = elements.getAttribute(attribute);
			return attributeValue;

		} catch (e) {
			if (e.name !== null) {
				logger.error(attribute + ' is not found for ' + friendlyNameOfElement + ' was not found - ' + e);
				assert.fail('"' + attribute + ' is not found for ' + friendlyNameOfElement + '" was not found \n' + e);
			}
		}
	}

	//Switch window
	async switchWindow(title, friendlyNameOfElement) {
		try {
			await browser.switchWindow(title);
			logger.info('Switched to ' + friendlyNameOfElement + ' Window')
		} catch (e) {
			if (e.name !== null) {
				logger.error('Unable to Switch to ' + friendlyNameOfElement + ' Window- ' + e);
				assert.fail('Unable to Switch to ' + friendlyNameOfElement + ' Window- ' + e);
			}
		}
	}

	//Static wait
	async pause(time) {
		if (time == undefined) {
			await browser.pause(2000);
			logger.info('Static wait for 2000ms')
		} else {
			await browser.pause(time);
			logger.info('Static wait for ', time);
		}
	}

	async randomNumberWithinRange(min, max) {
		let a = randomInt({
			min: min,
			max: max,
			integer: true
		});
		return a;
	}

	//Switch to new tab
	async getLatestWindow() {
		try {
			let window = await browser.getWindowHandles();
			await browser.switchToWindow(window[window.length - 1]);
			logger.info('Switched to new tab - ', window[window.length - 1]);
		} catch (e) {

			assert.fail('Unable to Switch to new tab');

		}
	}

	//close latest tab and swithc to parent tab
	async switchToParentWindow() {
		try {
			let window = await browser.getWindowHandles();
			if (window.length >= 2) {
				await browser.closeWindow();
				await browser.switchToWindow(window[window.length - 2]);
				logger.info('Switched to parent tab - ', window[window.length - 2]);
			} else
				logger.info('User is in Parent tab- ', window[window.length - 1]);
		} catch (e) {

			assert.fail('Unable to Switch to parent tab');

		}
	}

	async switchToParentFrame() {
		try {
			await browser.switchToParentFrame();
		} catch (e) {

			assert.fail('Unable to Switch to parent frame');
		}
	}

	async hoverTo(locator_, friendlyName) {
		try {
			await this.domStatus();
			let ele = await $(locator_);
			await this.waitForVisible(ele, friendlyName);
			await ele.moveTo();
		} catch (e) {
			assert.fail('Unable to move to element' + e);
		}

	}

	async Generate_FilterLocator(filtername) {
		try {
			let locator = await $('//span[@class="count"]/parent::a[contains(text(),"' + filtername + '")]');

			//locator.click();
			this.scrollTo(locator, 'Scroll to the filter name');
			return locator;


		} catch (e) {

			logger.error(filtername + ' locator is not generated' + e);
			assert.fail(filtername + ' locator is not generated' + e);
		}
	}

	async getTitle() {
		try {
			let title = await browser.getTitle();
			return title;
		} catch (e) {

			logger.error('Unable to fetch the title' + e);
			assert.fail('Unable to fetch the title' + e);
		}

	}

	async replaceL(locator, value) {
		let locator1 = await locator.replace('%l', value);
		return locator1;
	}

	async elementIsNotDisplayed(locator_, friendlyNameOfElement) {
		await $(locator_).waitForDisplayed({reverse: true});
	}

	async findListOfElements(locator) {
		return await $$(locator);
	}

	async safeClick(locator_, friendlyNameOfElement) {
		try {
			const ele = await $(locator_);
			await ele.click();
			return this;
		} catch (e) {
			if (e.name !== null) {
				logger.error(friendlyNameOfElement + ' was not found - ' + e);
				assert.fail('Failed to click ' + friendlyNameOfElement + '\n' + e);
			}
		}
	}

	async safeIsClickable(locator, friendlyNameOfElement) {
		const element = await $(locator);
		return await element.waitForClickable();
	}

}

module.exports = new commonActions();
//$(selector).getAttribute(attributeName)
