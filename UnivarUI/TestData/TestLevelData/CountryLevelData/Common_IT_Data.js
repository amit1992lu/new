class commonFIData {
    constructor() {
        this.contactUsPage = {
            'contactUsDetails': [
                ['Main Office', '+358 (0)9 350 8650', 'Order.fi@univarsolutions.com']
            ]
        }
        this.orderHistoryPage = {
            'orderNumber': '3274918'
        }

        this.searchTerms = {
            'searchProd' : 'acid',
            'searchQA' : 'Acetic Acid',
            'searchRFQProductQA': 'Acetic Acid',
            'searchDev' : 'Acetic Acid',
            'pdpProd' : '250',
            'pdpDev' : '250',
            'pdpQa' : '250',
            'restrictedProduct':'20023'
        }
    }
}

module.exports = new commonFIData();
