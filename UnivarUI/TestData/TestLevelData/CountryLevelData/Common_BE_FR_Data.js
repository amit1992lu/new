class commonCaFrData {
    constructor() {
        this.contactUsPage = {
            'contactUsDetails': [
                ['Ventes et service à la clientèle', '+1 855-888-8648']
            ]
        }
        this.orderHistoryPage = {
            'orderNumber' : '3036480'
        }

        this.searchTerms = {
            'searchProd' : 'Acid',
            'searchQA' : 'Aci',
            'searchRFQProductQA': 'Aci',
            'searchDev' : 'Acid',
            'pdpProd' : '47266',
            'pdpDev' : '47266',
            'pdpQa' : '47266',
            'restrictedProduct':'20023'
        }
    }
}


module.exports = new commonCaFrData();
