class commonCaFrData {
    constructor() {
        this.contactUsPage = {
            'contactUsDetails': [
                ['Ventes et service à la clientèle', '+32 2 525 05 11']
            ]
        }
        this.orderHistoryPage = {
            'orderNumber' : '3036480'
        }

        this.searchTerms = {
            'searchProd' : 'Aci',
            'searchQA' : 'Aci',
            'searchRFQProductQA': 'Aci',
            'searchDev' : 'Aci',
            'pdpProd' : '47266',
            'pdpDev' : '47266',
            'pdpQa' : '47266',
            'restrictedProduct':'20023'
        }
    }
}


module.exports = new commonCaFrData();
