class commonSEData {
    constructor() {
        this.contactUsPage = {
            'contactUsDetails': [
                ['Main Office', '+46 (0) 40 35 28 01', 'Order.se@univarsolutions.com']
            ]
        }
        this.orderHistoryPage = {
            'orderNumber': '3244273'
        }

        this.searchTerms = {
            'searchProd' : 'Acetic Acid',
            'searchQA' : 'Acetic Acid',
            'searchRFQProductQA': 'Acetic Acid',
            'searchDev' : 'Acetic Acid',
            'pdpProd' : '7056',
            'pdpDev' : '7056',
            'pdpQa' : '7056',
            'restrictedProduct':'20023'
        }

        this.address = {
            'shippingAddress' : 'BRÖDERNA UGGLAS GATA',
            'city' : 'LINKÖPING',
            'zipCode' : '582 54',
        }
    }
}

module.exports = new commonSEData();
