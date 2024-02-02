'use strict';

class commonUKData {
	constructor() {
		this.contactUsPage = {
			'contactUsDetails': [
				['Head Office', '01274 267300'],
				['Industrial Chemicals South', '02920 855 300', 'cardiffsales@univarsolutions.com'],
				['Industrial Chemicals North', '0151 420 7616',],
				['Personal Care and Pharmaceutical', '02920 855 330'],
				['Food', '0151 420 7616', 'ufisales@univarsolutions.com'],
				['Case', '0845 202 6406', 'LakesideOrders@univar.com'],

			]
		}
		this.orderHistoryPage = {
			'orderNumber': '3073652'
		}

		this.searchTerms = {
			'searchProd': 'Acid',
			'searchQA': 'Acid',
			'searchRFQProductQA': 'Acid',
			'searchDev': 'Acetic Acid',
			'pdpProd': '71424',
			'pdpDev': '53839',
			'pdpQa': '71424',
			'sustainabilityDoc': '2026577',
			'restrictedProduct':'20023'
		}
	}
}

module.exports = new commonUKData();
