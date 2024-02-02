let commonActions = require('../../../Utilities/CommonActions.js');

class testCaseData {
    constructor() {
        this.common = {
            'chemcare_links':'Univar Solutions Profiling Portal',
            'chemical_ingredients_links':' View SDS, COA & Product Documents',
            'userName': 'Univar Automation',
            'country_Canada': 'CA',
            'country_UK': 'United Kingdom',
            'country_USA': 'United States',
            'trueStatus': 'true',
            'falseStatus': 'false',
            'firstName_Dynamic': 'AutomationUser' + commonActions.getRandomString(4),
            'lastName_Dynamic': 'TEST_ORDER' + commonActions.getRandomString(4),
            'phoneNumber_Dynamic': commonActions.getRandomNumber(10),
            'companyName_Dynamic': 'CompanyName_' + commonActions.getRandomString(4),
            'mailinatorMail_Dynamic': 'univarMail' + commonActions.getRandomNumber(5) + '@mailinator.com',
            'gmailDynamic': 'univar.automation+' + commonActions.getRandomNumber(8) + '@gmail.com',
            'companyAddress': 'Company Address ' + commonActions.getRandomString(4),
            'companyBuildingNumber': 'CompanyBuilding' + commonActions.getRandomNumber(4),
            'cityName_Dynamic': 'City Name ' + commonActions.getRandomString(3),
            'jobTitle_Dynamic': 'JobTitle ' + commonActions.getRandomString(5),
            'vatNumber': 'Vat Number' + commonActions.getRandomNumber(4),
            'countryCodeForCanada': 'CA',
            'marketName': '3D Printing',
            'zipCode': '10002',
            'accountNumber': '121070',
            'validShipAddress': '500 W Madison St',
            'validBillingAddress': '600 W Madison St',
            'validState': 'Illinois',
            'validCity': 'Chicago',
            'validZipcode': '60661',
            'mailinatorInboxURL': 'https://www.mailinator.com/v4/public/inboxes.jsp',
            'mailinatorEmailId': 'univarMail3230@mailinator.com',
            'password_Dynamic': 'AbCd' + commonActions.getRandomNumber(4) + commonActions.getRandomString(4),
            'allCountries': [
                ['United States', 'English'],
                ['België', 'Nederlands'],
                ['Belgique', 'Français'],
                ['Canada', 'English'],
                ['Canada', 'Français'],
                ['Denmark', 'English'],
                ['Finland', 'English'],
                ['France', 'Français'],
                ['IE/NI', 'English'],
                ['Italy', 'Italiano'],
                ['Norway', 'English'],
                ['Sweden', 'English'],
                ['United Kingdom', 'English'],
                ['Europe, Middle East & Africa', 'Deutsche'],
                ['Europe, Middle East & Africa', 'English'],
                ['Europe, Middle East & Africa', 'Español'],
                ['Europe, Middle East & Africa', 'Français'],
                ['Europe, Middle East & Africa', 'Italiano'],
                ['Europe, Middle East & Africa', 'Português'],
                ['Latin America', 'English'],
                ['Latin America', 'Español'],
                ['Latin America', 'Português'],
                ['Asia', 'Chinese'],
            ],
            'yes': 'Yes',
            'no': 'No',
            'productUsageText': 'By proceeding with this purchase you warrant that you will use the product in compliance with all Safety Data Sheets, all applicable laws and regulations, and that you will not use the product directly or indirectly in any unsafe applications, including but not limited to those Prohibited Uses identified at UnivarSolutions.com. You also understand that Univar Solutions makes no warranty as to fitness for any particular use.',
            'ccNumber': '4111 1111 1111 1111',
            'expMonth': '11',
            'expYear': '25',
            'CVV': '333',
            'creditCard': 'Credit Cards',
            'firstName_Dynamic_1': 'FirstName' + commonActions.getRandomString(5),
            'lastName_Dynamic_1': 'LastName' + commonActions.getRandomString(5),
            'companyName_Dynamic_1': 'CompanyName_' + commonActions.getRandomString(5),
            'Address': 'Address ' + commonActions.getRandomString(8),
            'placeHolderText_': 'Search Product Name, Material No. or Keyword',
            'webPriceSku' : '16144786',
            'invoice_no':'51606072',
            'payer_number':'12345',
            'email_add':'test@test.com',
            'paymentamount':'0.1',
            'bank_name':'Bank of America',
            'bank_address':'test123',
            'deliverypointaddress':'test123',
            'city':'test',
            'state':'Alaska',
            'zip':'12345',
            'bank_routing_no':'011000015',
            'account_no':'1000000000',
            'manage_autopay_account_no':'1000000001',
            'account_holder_phone':'(123) 456-7890',
            'invoiceurl_qa':'https://shop-qa.univarsolutions.com/billpay/?invoice',
            'invoiceurl_dev':'https://shop-dev4.univarsolutions.com/billpay/?invoice',
            'invoicesuccessmssg':'Thank you for your payment, you will receive a confirmation email shortly. Please also save this transaction ID for your records.',
            'categorylink':'Essential Chemicals & Ingredients',
            'subcategorylink':'Additional Essentials',
            'newCreditApplUrlUK_qa':'https://shop-qa.univarsolutions.co.uk/account_application',
            'newCreditApplUrlUK_dev': 'https://shop-dev4.univarsolutions.co.uk/account_application',
            'newCreditApplUrlIE_qa':'https://shop-qa.univarsolutions.ie/account_application',
            'newCreditApplUrlIE_dev':'https://shop-dev4.univarsolutions.ie/account_application',
            'invalidSoldTo':'00000'
        }
    }

    countryName() {
        if (process.env.REGION === 'US') {
            global.countryFull = 'United States'
        } else if (process.env.REGION === 'CA') {
            global.countryFull = 'Canada'
        }
        return global.countryFull
    }

}

module.exports = new testCaseData();
