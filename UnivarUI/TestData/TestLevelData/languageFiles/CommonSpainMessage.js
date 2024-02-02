class commonMessages {
	constructor() {
		this.commonErrorMessage = {
			'thisFieldRequired': 'Este campo es obligatorio.',
			'selectOption': 'Please select an option.',
			'enterValidEmail': 'Please enter a valid email address (Ex: johndoe@domain.com).'
		}
		this.commonSuccessMessage = {
			'PLPRFQSuccessMsg': 'Solicitud de presupuesto enviada\nSi no recibe el correo electrónico de confirmación unos minutos después de haber enviado este formulario',
			'ResetPasswordSuccessMsg': 'You updated your password.',
			'ContactUsFormSubmitSuccessMsg': 'Grazie per aver contattato Univar Solutions. Un nostro responsabile ti contatterà al più presto.',
			'GuestRFQSuccessToast': 'Solicitud de presupuesto enviada\nSi no recibe el correo electrónico de confirmación unos minutos después de haber enviado este formulario, compruebe su carpeta de correo no deseado o de correo masivo.',
			'ThanksForContactingRepresentativeWillReachSoonMsg': 'Gracias por ponerse en contacto con Univar Solutions. En breve, un representante se pondrá en contacto con usted.',
			'accountUpdateSuccessMessage': 'Su dirección se está revisando. Un representante de atención al cliente se pondrá en contacto con usted para obtener más información o para notificarle cuando la dirección se haya añadido a su cuenta en línea.',
			'profileUpdateSuccessMessage': 'Estamos revisando su solicitud, nos pondremos en contacto con usted en breve.'

		}
		this.DisclaimerMessage = {
			'Disclaimer_Message': 'Please note: All charges may not show for your order at the time of purchase. Additional charges such as freight, tax, or special charges may apply. Your order is subject to further regulatory review. To finalize your order, Univar Solutions requires we have the proper information on file. You will receive an email confirming your order once your Customer Service Rep has reviewed and processed it. This email will include the final cost and confirmed delivery date as well as any additional charges. To expedite or for further information, please contact your local representative at 1-855-888-8648.',
		}
		this.orderHistoryPage = {
			'allOrders': 'Todos los pedidos',
			'openOrders': 'Pedidos abiertos',
			'completedOrders': 'Pedidos finalizados',
			'cancelledOrders': 'Pedidos cancelados',
			'ordered': 'Pedido',
			'orderHistory': 'Historial de pedidos',
			'orderTitle': 'Order',
			'orderNumber': 'º de pedido '
		}

		this.productInfo = {
			'productPrice': 'EUR'
		}
		this.searchPage = {
			'noResults': 'No se han encontrado resultados que coincidan con su solicitud de búsqueda de'
		}

		this.myAccount = {
			'accountOverview': 'Descripción de cuenta',
			'orders': 'Pedidos',
			'invoices': 'Facturas',
			'addressBook': 'Agenda de direcciones',
			'profile': 'Perfil',
			'signOut': 'Cerrar sesión',
			'privacySettings': 'Ajustes de privacidad',
		}
		this.searchQuery = {
			'placeHolderText': 'Buscar nombre de producto, n.º de material o palabra clave'
		}

		this.resetPassword = {
			'resetpasswordMailText': 'Reset your Univar Solutions password'
		}

		this.contactUs = {
			'termsOfUseText': 'I have read and accept your',
			'contactUsHeaderText': 'Contáctenos'
		}

		this.invoices = {
			'status': '["Open", "Paid In Full","Pending","Past Due"]',

		}

		this.recentInvoicesOnPersonalHomepage = {
			'recentInvoicesColumnHeader': ['Invoice No.', 'Total Amount', 'Date Due', 'Status', 'Order No.']
		}
		this.resetPasswordEmail = {
			'resetPasswordButton': 'Reset Password'
		}
		this.headers = {
			'productCatalog': 'Catálogo de productos',
			'checkoutShipping': 'Envío',
			'productCategories': 'Categorías de productos',
			'contactUs': 'Póngase en contacto con nosotros',
			'login': 'Customer Login',
			'career': 'Empleos en Univar Solutions'
		}

		this.checkoutPage = {
			'backToCart': 'Volver a Carrito',
			'paymentProgress': 'Pago',
			'confirmation': 'Checkout',
			'progressConfirmation': 'Confirmación'
		}
		this.autoCompletWindow = {
			'QuotedProducts': 'Productos presupuestados',
			'AllProducts': 'Todos los productos'
		}
		this.shippingAddress = {
			'shippingAddress': 'Información de envío',
			'shippingMethod': 'Standard Shipping - Univar',
			'shippingMethodText': 'Método de envío',
			'preferredDeliveryDateText': 'Fecha de entrega preferida'
		}
	}
}

module.exports = new commonMessages();
