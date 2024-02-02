class commonMessages {
	constructor() {
		this.commonErrorMessage = {
			'thisFieldRequired': 'Dit is een vereist veld.',
			'selectOption': 'Veuillez sélectionner une option.',
			'enterValidEmail': 'Voer een geldig e-mailadres in (bijvoorbeeld: johndoe@domain.com).'
		}
		this.commonSuccessMessage = {
			'PLPRFQSuccessMsg': 'Aanvraag voor prijsopgave ingediend\nAls u enkele minuten',
			'ResetPasswordSuccessMsg': 'You updated your password.',
			'ContactUsFormSubmitSuccessMsg': 'Bedankt om contact op te nemen met Univar Solutions. Een medewerker zal spoedig contact met u opnemen.',
			'GuestRFQSuccessToast': 'Aanvraag voor prijsopgave ingediend\nAls u enkele minuten nadat u dit formulier',
			'ThanksForContactingRepresentativeWillReachSoonMsg': 'Bedankt om contact op te nemen met Univar Solutions. Een medewerker zal spoedig contact met u opnemen.',
			'accountUpdateSuccessMessage': 'Uw adres wordt gecontroleerd. Een medewerker van de klantenservice zal contact met u opnemen voor eventuele bijkomende informatie of zal u op de hoogte brengen wanneer het adres aan uw online account werd toegevoegd.',
			'profileUpdateSuccessMessage': 'Uw aanvraag wordt gecontroleerd. We nemen spoedig contact met u op.'

		}
		this.DisclaimerMessage = {
			'Disclaimer_Message': 'Please note: All charges may not show for your order at the time of purchase. Additional charges such as freight, tax, or special charges may apply. Your order is subject to further regulatory review. To finalize your order, Univar Solutions requires we have the proper information on file. You will receive an email confirming your order once your Customer Service Rep has reviewed and processed it. This email will include the final cost and confirmed delivery date as well as any additional charges. To expedite or for further information, please contact your local representative at 1-855-888-8648.',
		}
		this.orderHistoryPage = {
			'allOrders': 'Alle bestellingen',
			'openOrders': 'Open bestellingen',
			'completedOrders': 'Voltooide bestellingen',
			'cancelledOrders': 'Geannuleerde bestellingen',
			'ordered': 'totale bestelling',
			'orderHistory': 'Bestelgeschiedenis',
			'orderTitle': 'Bestelling',
			'orderNumber': '#'
		}
		this.productInfo = {
			'productPrice': '$'
		}
		this.searchPage = {
			'noResults': 'Er werden geen resultaten gevonden voor uw zoekopdracht voor'
		}
		this.myAccount = {
			'accountOverview': 'Overzicht account',
			'orders': 'Bestellingen',
			'invoices': 'Facturen',
			'addressBook': 'Adresboek',
			'profile': 'Profiel',
			'privacySettings': 'Privacyinstellingen',
			'signOut': 'Afmelden',
		}

		this.contactUs = {
			'termsOfUseText': 'J\'ai lu et j\'accepte votre',
			'contactUsHeaderText': 'Contact opnemen'
		}
		this.searchQuery = {
			'placeHolderText': 'Zoeken op productnaam, materiaalnummer of keyword'
		}
		this.headers = {
			'productCatalog': 'Productcatalogus',
			'checkoutShipping': 'Wordt verzonden',
			'productCategories': 'Productcategorieën',
			'contactUs': 'Contact opnemen',
			'login': 'Klant login',
			'career': 'Loopbaan bij Univar Solutions'
		}
		this.urls = {
			'productCatalog': 'product-catalog'
		}
		this.resetPasswordEmail = {
			'resetPasswordButton': 'Wachtwoord opnieuw instellen'
		}

		this.recentInvoicesOnPersonalHomepage = {
			'recentInvoicesColumnHeader': ['Factuurnummer', 'Totaal bedrag', 'Vervaldatum', 'Status', 'Ordernummer']
		}

		this.checkoutPage = {
			'backToCart': 'Terug naar Winkelwagen',
			'paymentProgress': 'Betaling',
			'confirmation': 'Uitchecken',
			'progressConfirmation': 'Bevestiging'
		}
		this.autoCompletWindow = {
			'QuotedProducts': 'Producten met prijsopgave',
			'AllProducts': 'Alle producten'
		}
		this.shippingAddress = {
			'shippingAddress': 'Verzendinformatie',
			'shippingMethod': 'Standaard verzending - Univar',
			'shippingMethodText': 'Verzendmethode',
			'preferredDeliveryDateText': 'Gewenste leverdatum'
		}
	}
}

module.exports = new commonMessages();
