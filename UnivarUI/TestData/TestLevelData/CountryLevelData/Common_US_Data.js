'use strict';

class commonUsData {
	constructor() {
		this.contactUsPage = {
			'contactUsDetails': [
				['U.S. Sales & Customer Service', '+1 800-531-7206'],
				['U.S. New Customers', '+1 '],
			]
		}
		this.orderHistoryPage = {
			'orderNumber': '12529352'
		}
		this.url = {
			'productCategories_potassiumPhospate': 'product-categories/essential-chemicals-ingredients/phosphates/potassium-phosphates',
			'productCategories_ketones': 'product-categories/solvents/ketones'
		}

		this.searchTerms = {
			'searchProd': 'Lexorez',
			'searchQA': 'ACETIC ACID',
			'searchRFQProductQA': 'Lexorez',
			'searchDev': 'FATTY ACIDS',
			'pdpProd': '16133679',
			'pdpDev': '16133679',
			'pdpQa': '16133679',
			'webPrice': '16144786',
			'webPriceDev': '16141304',
			'sustainabilityDoc': '16014114',
			'ICProduct': '16141233',
			'restrictedProduct':'20023'
		}

		this.pricing = {
			'currencySign': '$'
		}

		this.docsForm = {
			'country': 'United States',
			'state': 'Illinois',
		}

		this.shippingAddress = {
			'validShipAddress': '500 W Madison St',
			'validState' :'Illinois',
			'validCity' :'Chicago',
			'validZipcode' :'60661'
		}

		this.billingAddress = {
			'validShipAddress': '600 W Madison St',
			'validState' :'Illinois',
			'validCity' :'Chicago',
			'validZipcode' :'60661'
		}
	}
}

module.exports = new commonUsData();
