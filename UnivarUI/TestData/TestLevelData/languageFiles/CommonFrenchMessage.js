class commonMessages {
	constructor() {
		this.commonErrorMessage = {
			'thisFieldRequired': 'Il s’agit d’un champ obligatoire.',
			'selectOption': 'Veuillez sélectionner une option.',
			'enterValidEmail': 'Veuillez entrer une adresse email valide (Ex : johndoe@domain.com).'
		}
		this.commonSuccessMessage = {
			'PLPRFQSuccessMsg': 'Demande de devis soumise\nSi vous ne recevez',
			'ResetPasswordSuccessMsg': 'You updated your password.',
			'ContactUsFormSubmitSuccessMsg': 'Merci d’avoir contacté Univar Solutions. Un représentant vous contactera sous peu.',
			'GuestRFQSuccessToast': 'Demande de devis soumise\nSi vous ne recevez pas l’e-mail de confirmation quelques minutes après avoir soumis ce formulaire, veuillez consulter votre dossier de spam ou courrier indésirable.',
			'ThanksForContactingRepresentativeWillReachSoonMsg': 'Merci d’avoir contacté Univar Solutions. Un représentant vous contactera sous peu.',
			'accountUpdateSuccessMessage': 'Votre adresse est en cours d’examen. Un représentant du service clientèle vous contactera pour toute information supplémentaire ou vous informera lorsque l’adresse aura été ajoutée à votre compte en ligne.',
			'profileUpdateSuccessMessage': 'Votre demande est en cours d’examen, nous vous répondrons sous peu.'
		}
		this.DisclaimerMessage = {
			'Disclaimer_Message': 'Please note: All charges may not show for your order at the time of purchase. Additional charges such as freight, tax, or special charges may apply. Your order is subject to further regulatory review. To finalize your order, Univar Solutions requires we have the proper information on file. You will receive an email confirming your order once your Customer Service Rep has reviewed and processed it. This email will include the final cost and confirmed delivery date as well as any additional charges. To expedite or for further information, please contact your local representative at 1-855-888-8648.',
		}
		this.orderHistoryPage = {
			'allOrders': 'Toutes les commandes',
			'openOrders': 'Commandes ouvertes',
			'completedOrders': 'Commandes terminées',
			'cancelledOrders': 'Commandes annulées',
			'ordered': 'Commandé',
			'orderHistory': 'Historique des commandes',
			'orderTitle': 'Order',
			'orderNumber': 'N° de commande '
		}
		this.productInfo = {
			'productPrice': 'EUR'
		}
		this.searchPage = {
			'noResults': 'Aucun résultat ne correspond à votre recherche pour'
		}
		this.myAccount = {
			'accountOverview': 'Aperçu du compte',
			'orders': 'Commandes',
			'invoices': 'Factures',
			'addressBook': 'Carnet d’adresses',
			'profile': 'Profil',
			'signOut': 'Déconnexion',
			'privacySettings': 'Paramètres de confidentialité',
		}
		this.recentInvoicesOnPersonalHomepage = {
			'recentInvoicesColumnHeader': ['N° de facture', 'Montant total', 'Date d’échéance', 'Statut', 'N° de commande']
		}

		this.contactUs = {
			'termsOfUseText': 'J\'ai lu et j\'accepte votre',
			'contactUsHeaderText': 'Nous contacter'
		}
		this.searchQuery = {
			'placeHolderText': 'Rechercher par nom de produit, numéro de matériau ou mot-clé'
		}
		this.headers = {
			'productCatalog': 'Catalogue de Produits',
			'checkoutShipping': 'Expédition',
			'productCategories': 'Catégories de Produits',
			'contactUs': 'Nous contacter',
			'login': 'Connexion client',
			'career': 'Carrières chez Univar Solutions'
		}
		this.urls = {
			'productCatalog': 'product-catalog'
		}
		this.resetPasswordEmail = {
			'resetPasswordButton': 'Réinitialiser le mot de passe'
		}

		this.checkoutPage = {
			'backToCart': 'Retour au panier',
			'paymentProgress': 'Paiement',
			'confirmation': 'Commander',
			'progressConfirmation': 'Accusé de réception'
		}
		this.autoCompletWindow = {
			'QuotedProducts': 'Produits faisant l’objet d’un devis',
			'AllProducts': 'Tous les produits'
		}
		this.shippingAddress = {
			'shippingAddress': 'Informations sur l’expédition',
			'shippingMethod': 'Livraison standard - Univar',
			'shippingMethodText': 'Méthode d’expédition',
			'preferredDeliveryDateText': 'Date de livraison préférée'
		}

	}
}

module.exports = new commonMessages();
