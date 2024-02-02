class commonCaEnData {
	constructor() {
		this.contactUsPage = {
			'contactUsDetails': [
				['Canada Sales & Customer Service', '+1 855-888-8648']
			]
		}
		this.orderHistoryPage = {
			'orderNumber': '12778475'
		}

		this.searchTerms = {
			'searchProd': 'Acetic Acid',
			'searchQA': 'Acetic Acid',
			'searchRFQProductQA': 'Acetic Acid',
			'searchDev': 'Acetic Acid',
			'pdpProd': '16174571',
			'pdpDev': '16174571',
			'pdpQa': '16174571',
			'webPriceDev': '16178755',
			'webPrice': '16178755',
			'sustainabilityDoc': '16014114',
			'ICProduct': '16174727',
			'restrictedProduct':'80754'
		}

		this.shippingAddress = {
			'validShipAddress': '150 SIGNET DR',
			'validState' :'Ontario',
			'validCity' :'Toronto',
			'validZipcode' :'M9L 1T9'
		}

		this.billingAddress = {
			'validShipAddress': '50 STEINWAY BLVD',
			'validState' :'Ontario',
			'validCity' :'Eobicoke',
			'validZipcode' :'M9W 6Y3'
		}
		this.docsForm = {
			'country': 'Canada',
			'state': 'Quebec'
		}
	}
}

module.exports = new commonCaEnData();
