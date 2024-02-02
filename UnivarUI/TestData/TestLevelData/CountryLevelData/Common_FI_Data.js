class commonFIData {
    constructor() {
        this.contactUsPage = {
            'contactUsDetails': [
                ['Main Office', '+358 (0)9 350 8650', 'Order.fi@univarsolutions.com']
            ]
        }
        this.orderHistoryPage = {
            'orderNumber': '3342125'
        }

        this.searchTerms = {
            'searchProd' : 'Ascorbic Acids',
            'searchQA' : 'Aci',
            'searchRFQProductQA': 'Aci',
            'searchDev' : 'Aci',
            'pdpProd' : '47266',
            'pdpDev' : '47266',
            'pdpQa' : '47266',
            'restrictedProduct':'20023'
        }

        this.address = {
            'shippingAddress' : 'Hätilänkatu 43',
            'city' : 'Lahti',
            'zipCode' : '15610',
        }
    }
}

module.exports = new commonFIData();
