class commonFIData {
    constructor() {
        this.contactUsPage = {
            'contactUsDetails': [
                ['Main Office', '+358 (0)9 350 8650', 'Order.fi@univarsolutions.com']
            ]
        }
        this.orderHistoryPage = {
            'orderNumber': '12770039'
        }

        this.searchTerms = {
            'searchProd' : 'acid',
            'searchQA' : 'ace',
            'searchRFQProductQA': 'Ace',
            'searchDev' : 'ace',
            'pdpProd' : '16137069',
            'pdpDev' : '16137069',
            'pdpQa' : '16137069',
            'restrictedProduct':'20023'
        }
    }
}

module.exports = new commonFIData();
