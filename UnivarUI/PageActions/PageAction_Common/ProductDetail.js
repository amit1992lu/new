let commonActions = require('../../../Utilities/CommonActions.js');
let homePageLoc = require('../../Locator/Locator_Common/HomePage_Locator.js');
let productDetail_Loc = require('../../Locator/Locator_Common/ProductDetailPage_Locator');
let additionalEssentialPage_Loc = require('../../Locator/Locator_Common/ProdCategories_AdditionalEssentialPage_Locator')
let countryLevelData = require('../../TestData/TestLevelData/CountryLevelData/GetCountryFile.js').getCountryFile()
var expect = require('chai').expect;

class ProductDetail {

	get sustainabilityDocTitle() {
		return 'div.document-type-container.sustainability';
	}

	get sustainabilityDocViewLink() {
		return 'a.view.documents-sustainability';
	}

	get nonUsSustainabilityDocLink() {
		return '(//a[@class="document__name name documents-sustainability"])';
	}

	get nonUsSustainabilityDocTitle() {
		return '//*[@data-bind="i18n: \'Sustainability Documents\'"]';
	}

	async clickViewAllDocumentsLink() {
		await commonActions.waitForVisible(productDetail_Loc.VIEW_ALL_DOCUMENTS_LINK, 'View All Documents');
		await commonActions.scrollTo(productDetail_Loc.VIEW_ALL_DOCUMENTS_LINK, 'View All Documents');
		await commonActions.waitForClickable(productDetail_Loc.VIEW_ALL_DOCUMENTS_LINK, 'View All Documents');
		await commonActions.safeVisibleClick(productDetail_Loc.VIEW_ALL_DOCUMENTS_LINK, 'View All Documents');
	}

	async verifyRequestQuoteIsDisplayed() {
		await commonActions.waitForVisible(productDetail_Loc.REQUEST_FOR_QUOTE_BTN, 'Request for quote');
	}

	async verifyWebPriceIsDisplayed() {
		await commonActions.waitForVisible(productDetail_Loc.PRODUCT_WEB_PRICE, 'Web Price');
	}

	async verifyWebPriceIsNotDisplayed() {
		await commonActions.elementIsNotDisplayed(productDetail_Loc.PRODUCT_WEB_PRICE);
	}

	async verifyTableElements(elementTarget, expectedStaticText) {
		const elementList = await commonActions.findListOfElements(elementTarget);
		for (const foundElementList of elementList) {
			let elementText = await commonActions.safeGetText(elementTarget, expectedStaticText);
			await commonActions.safeAsserts('notContain', elementText, expectedStaticText, '--');
		}
	}

	async immediate_price_section_US() {
		if (process.env.REGION === 'US') {
			await commonActions.scrollTo(homePageLoc.IMMEDIATE_PRICING_SECTION_PREVIOUSBUTTON, 'Previous button is visible');
			await commonActions.safeAsserts('true', await commonActions.safeIsVisible(homePageLoc.IMMEDIATE_PRICING_SECTION_PREVIOUSBUTTON, 'Previous button is visible'), 'Assertion on Previous button is visible');
			let attribute_value = await commonActions.getAttribute(homePageLoc.IMMEDIATE_PRICING_SECTION_PREVIOUSBUTTON, 'aria-disabled', 'getting aria-disabled attribute');
			await commonActions.safeAsserts(true, attribute_value, 'Attribute value');
			await commonActions.safeVisibleClick(homePageLoc.IMMEDIATE_PRICING_SECTION_NEXTBUTTON, 'Click on Next button');
			attribute_value = await commonActions.getAttribute(homePageLoc.IMMEDIATE_PRICING_SECTION_PREVIOUSBUTTON, 'aria-disabled', 'getting aria-disabled attribute');
			await commonActions.safeAsserts(false, attribute_value, 'Attribute value');
		} else {
			await commonActions.elementIsNotDisplayed(homePageLoc.IMMEDIATE_PRICING_SECTION_PREVIOUSBUTTON);
		}
	}


	async verifySignModelForRegulatoryDoc() {
		await commonActions.scrollTo(productDetail_Loc.VIEW_REGULATORY_DOC, 'View All Documents');
		await commonActions.waitForClickable(productDetail_Loc.VIEW_REGULATORY_DOC, 'Regulatory Documents');
		await commonActions.safeVisibleClick(productDetail_Loc.VIEW_REGULATORY_DOC, 'Regulatory Documents');
		await commonActions.waitForVisible(productDetail_Loc.SIGN_IN_MODEL, 'Sign In Model');
		await commonActions.waitForClickable(productDetail_Loc.SIGN_IN_BUTTON_MODEL, 'Sign In Button');
	}

	async clickPackageType(packageType) {
		const listPackageTypes = await commonActions.findListOfElements(productDetail_Loc.PACKAGE_TYPE);
		for (var packageName of listPackageTypes) {
			const packageText = await packageName.getText();
			if (packageText.includes(packageType)) {
				await commonActions.safeVisibleClick(packageName, 'Clicked ' + packageType + ' package type');
				const packageTypeText = await commonActions.safeGetText(productDetail_Loc.SELECTED_PACKAGE_TYPE, 'Package Type');
				return await commonActions.safeAsserts('contains', packageTypeText, 'Package Type', packageType);
			}
		}
		return await commonActions.safeAsserts('contains', await packageName.getText(), 'Package Type', packageType);
	}

	async parentChildWebPriceDisplayed() {
		await commonActions.waitForVisible(productDetail_Loc.PARENT_CHILD_WEBPRICE, 'Web Price');
	}

	async parentChildWebPriceNotDisplayed() {
		await commonActions.elementIsNotDisplayed(productDetail_Loc.PARENT_CHILD_WEBPRICE, 'Web Price');
	}

	async addProductToCart() {
		await commonActions.waitForClickable(productDetail_Loc.ADD_TO_CART_BTN, 'Add to Cart');
		await commonActions.safeVisibleClick(productDetail_Loc.ADD_TO_CART_BTN, 'Add to Cart');
	}

	async verifyRegulatorDocSections() {
		await commonActions.waitForVisible(productDetail_Loc.REGULATORY_VIEW_LINK, 'View Regulatory View Link');
		await commonActions.waitForVisible(productDetail_Loc.REGULATORY_DOWNLOAD_LINK, 'View Regulatory View Link');
	}

	async clickOnViewSdsLinkPdp() {
		await commonActions.waitForVisible(productDetail_Loc.VIEW_SDS_LINK, 'View SDS on PDP');
		await commonActions.safeVisibleClick(productDetail_Loc.VIEW_SDS_LINK, 'View SDS on PDP');
	}

	async verifySustainabilityDocument(sku) {
		let link_loc;
		let title_loc;
		if (process.env.REGION == 'US') {
			link_loc = this.sustainabilityDocViewLink;
			title_loc = this.sustainabilityDocTitle;
		} else {
			link_loc = this.nonUsSustainabilityDocLink;
			title_loc = this.nonUsSustainabilityDocTitle;
		}
		let titleText = await commonActions.safeGetText(title_loc, 'Sustainability Document Title');
		await commonActions.safeAsserts('equal', titleText, 'Sustainability Document Title', 'Sustainability Documents');
		let doc_links = await commonActions.findElements(link_loc, 'Sustainability Doc links');
		for (let i = 1; i <= doc_links.length; i++) {
			await commonActions.safeVisibleClick(`${link_loc}[${i}]`, 'Sustainability Doc view link at position' + i);
			await commonActions.getLatestWindow();
			await commonActions.safeAsserts('contains', await commonActions.getUrl(), 'Sustainability Doc Url', `/documents/file/viewSustainability/sku/${sku}/documentId/Sustainabledoc`);
			await commonActions.safeAsserts('equal', await commonActions.getTitle(), 'Title of the doc', '');
			await commonActions.switchToParentWindow()

		}
	}
    async selectAndVerifyPackageTypes() {
        let packageTypes = await commonActions.findListOfElements(productDetail_Loc.PACKAGE_TYPES);
        for (let i = 1; i <= packageTypes.length; i++) {
            await commonActions.safeVisibleClick(`${productDetail_Loc.PACKAGE_TYPES}[${i}]`);
            let expectedPackageType = await commonActions.safeGetText(`${productDetail_Loc.PACKAGE_TYPES}[${i}]`)
            const packageTypeText = await commonActions.safeGetText(productDetail_Loc.SELECTED_PACKAGE_TYPE, 'Package Type');
            await commonActions.safeAsserts('equals', packageTypeText, 'Package Type', expectedPackageType)
            let packageText = await commonActions.safeGetText(`${productDetail_Loc.PACKAGE_TYPES}[${i}]`, `Package Type at index ${i}`);
            if (packageText.includes(countryLevelData.pricing.currencySign)) {
                await this.verifyAddToCartIsDisplayed(true);
            } else {
                await this.verifyRequestQuoteIsDisplayed(true);
            }
        }
    }

    async verifyAddToCartIsDisplayed(isDisplayed) {
        let addToCart = await commonActions.safeIsVisible(productDetail_Loc.ADD_TO_CART_BTN, 'Add to Cart');
        await commonActions.safeAsserts('equal', addToCart, 'Add to Cart Button', isDisplayed);
    }

	async verifyPriceOnPDP() {
		await commonActions.waitForVisible(productDetail_Loc.PRODUCT_DETAIL_PRICE, 'Price on PDP')
	}

	async verifyWebPriceOnPDP() {
		await commonActions.waitForVisible(productDetail_Loc.PRODUCT_WEB_PRICE_TAG, 'Web Price on PDP')
	}

}

module.exports = new ProductDetail()
