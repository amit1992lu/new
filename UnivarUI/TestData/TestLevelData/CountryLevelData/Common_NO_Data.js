class commonNOData {
    constructor() {
        this.contactUsPage = {
            'contactUsDetails': [
                ['Main Office', '+47 22 88 16 00', 'Ordre.no@univarsolutions.com']
            ]
        }
        this.orderHistoryPage = {
            'orderNumber': '3057967'
        }

        this.searchTerms = {
            'searchProd' : 'Acid',
            'searchQA' : 'Acetic Acid',
            'searchRFQProductQA': 'Acetic Acid',
            'searchDev' : 'Acetic Acid',
            'pdpProd' : '7056',
            'pdpDev' : '7056',
            'pdpQa' : '7056',
            'restrictedProduct':'20023'
        }

        this.address = {
            'shippingAddress' : 'ADMIN.BYGG KVALNES',
            'city' : 'DVERBERG',
            'zipCode' : '8485',
        }
    }
}

module.exports = new commonNOData();
