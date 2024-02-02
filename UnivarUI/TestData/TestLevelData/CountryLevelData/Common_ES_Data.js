class commonFIData {
    constructor() {
        this.contactUsPage = {
            'contactUsDetails': [
                ['Main Office', '+358 (0)9 350 8650', 'Order.fi@univarsolutions.com']
            ]
        }
        this.orderHistoryPage = {
            'orderNumber': '3259406'
        }

        this.searchTerms = {
            'searchProd' : 'Acetic Acid',
            'searchQA' : 'Acetic Acid',
            'searchRFQProductQA': 'Acetic Acid',
            'searchDev' : 'Acetic Acid',
            'pdpProd' : '47266',
            'pdpDev' : '47266',
            'pdpQa' : '47266',
            'restrictedProduct':'20023'
        }
    }
}

module.exports = new commonFIData();
