class commonIEData {
    constructor() {
        this.contactUsPage = {
            'contactUsDetails': [
                ['Main Office', '+353 1 401 9800', '+353 1 401 9142', 'irelandsales@univar.com']
            ]

        }
        this.orderHistoryPage = {
            'orderNumber': '3249661'
        }

        this.searchTerms = {
            'searchProd' : 'Acetic Acid',
            'searchQA' : 'Acetic Acid',
            'searchRFQProductQA': 'Acetic Acid',
            'searchDev' : 'acid',
            'pdpProd' : '250',
            'pdpDev' : '250',
            'pdpQa' : '250',
            'restrictedProduct':'20023'
        }
    }
}

module.exports = new commonIEData();
