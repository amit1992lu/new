class commonDKData {
    constructor() {
        this.contactUsPage = {
            'contactUsDetails': [
                ['Main Office', '+45 35 37 12 44', 'univar.dk@univarsolutions.com']
            ]
        }
        this.orderHistoryPage = {
            'orderNumber': '3047473'
        }

        this.searchTerms = {
            'searchProd' : 'Acetic Acid',
            'searchQA' : 'aci',
            'searchRFQProductQA': 'Aci',
            'searchDev' : 'aci',
            'pdpProd' : '52432',
            'pdpDev' : '52432',
            'pdpQa' : '52432',
            'restrictedProduct':'20023'
        }

        this.address = {
            'shippingAddress' : '3 Svinget',
            'city' : 'Struer',
            'zipCode' : '7600',
        }
    }
}

module.exports = new commonDKData();
