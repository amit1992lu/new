class commonMessages {
	constructor() {
		this.commonErrorMessage = {
			'thisFieldRequired': 'Campo obbligatorio.',
			'selectOption': 'Please select an option.',
			'enterValidEmail': 'Please enter a valid email address (Ex: johndoe@domain.com).'
		}
		this.commonSuccessMessage = {
			'PLPRFQSuccessMsg': 'Richiesta di preventivo inviata\nSe non riceverai l\'e-mail di conferma entro pochi minuti dall\'invio del modulo, controlla nella casella della posta indesiderata.',
			'ResetPasswordSuccessMsg': 'You updated your password.',
			'ContactUsFormSubmitSuccessMsg': 'Grazie per aver contattato Univar Solutions. Un nostro responsabile ti contatterà al più presto.',
			'GuestRFQSuccessToast': 'Richiesta di preventivo inviata\nSe non riceverai l\'e-mail di conferma entro pochi minuti dall\'invio del modulo, controlla nella casella della posta indesiderata.',
			'ThanksForContactingRepresentativeWillReachSoonMsg': 'Grazie per aver contattato Univar Solutions. Un nostro responsabile ti contatterà al più presto.',
			'accountUpdateSuccessMessage': 'Stiamo verificando il tuo indirizzo. Un rappresentante del servizio clienti ti contatterà per ulteriori informazioni o per comunicarti quando l\'indirizzo sarà aggiunto al tuo account online.',
			'profileUpdateSuccessMessage': 'Stiamo analizzando la richiesta. Ti contatteremo al più presto.'
		}
		this.DisclaimerMessage = {
			'Disclaimer_Message': 'Please note: All charges may not show for your order at the time of purchase. Additional charges such as freight, tax, or special charges may apply. Your order is subject to further regulatory review. To finalize your order, Univar Solutions requires we have the proper information on file. You will receive an email confirming your order once your Customer Service Rep has reviewed and processed it. This email will include the final cost and confirmed delivery date as well as any additional charges. To expedite or for further information, please contact your local representative at 1-855-888-8648.',
		}
		this.orderHistoryPage = {
			'allOrders': 'Tutti gli ordini',
			'openOrders': 'Ordini aperti',
			'completedOrders': 'Ordini completati',
			'cancelledOrders': 'Ordini annullati',
			'ordered': 'ordinato',
			'orderHistory': 'Cronologia ordini',
			'orderTitle': 'N. ordine',
			'orderNumber': 'ordine'
		}

		this.productInfo = {
			'productPrice': '$'
		}
		this.searchPage = {
			'noResults': 'Nessun risultato corrispondente alla ricerca per'
		}

		this.myAccount = {
			'accountOverview': 'Panoramica account',
			'orders': 'Ordini',
			'invoices': 'Fatture',
			'addressBook': 'Rubrica',
			'profile': 'Profilo',
			'signOut': 'Disconnessione',
			'privacySettings': 'Impostazioni della privacy',
		}
		this.searchQuery = {
			'placeHolderText': 'Ricerca nome prodotto, n. materiale o parola chiave'
		}

		this.resetPassword = {
			'resetpasswordMailText': 'Reset your Univar Solutions password'
		}

		this.contactUs = {
			'termsOfUseText': 'I have read and accept your',
			'contactUsHeaderText': 'Contattaci'
		}

		this.invoices = {
			'status': '["Open", "Paid In Full","Pending","Past Due"]',

		}

		this.recentInvoicesOnPersonalHomepage = {
			'recentInvoicesColumnHeader': ['N. fattura', 'Importo totale', 'Data di scadenza', 'Stato', 'N. ordine']
		}
		this.resetPasswordEmail = {
			'resetPasswordButton': 'Reset Password'
		}
		this.headers = {
			'productCatalog': 'Catalogo dei prodotti',
			'checkoutShipping': 'Spedizione',
			'productCategories': 'Categorie di prodotti',
			'contactUs': 'Contattaci',
			'login': 'Customer Login',
			'career': 'Lavora in Univar Solutions'
		}

		this.checkoutPage = {
			'backToCart': 'Torna a Carrello',
			'paymentProgress': 'Pagamento',
			'confirmation': 'Checkout',
			'progressConfirmation': 'Conferma'
		}
		this.autoCompletWindow = {
			'QuotedProducts': 'Prodotti con preventivo',
			'AllProducts': 'Tutti i prodotti'
		}
		this.shippingAddress = {
			'shippingAddress': 'Informazioni sulla spedizione',
			'shippingMethod': 'Standard Shipping - Univar',
			'shippingMethodText': 'Metodo di spedizione',
			'preferredDeliveryDateText': 'Data di consegna preferita'
		}
	}
}

module.exports = new commonMessages();
