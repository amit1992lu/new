class commonMessages {
	constructor() {
		this.commonErrorMessage = {
			'thisFieldRequired': 'This is a required field.',
			'selectOption': 'Please select an option.',
			'enterValidEmail': 'Please enter a valid email address (Ex: johndoe@domain.com).'
		}
		this.commonSuccessMessage = {
			'PLPRFQSuccessMsg': 'Quote Request Submitted',
			'ResetPasswordSuccessMsg': 'You updated your password.',
			'ContactUsFormSubmitSuccessMsg': 'Thank you for contacting Univar Solutions. A representative will get back to you shortly.',
			'GuestRFQSuccessToast': 'Quote Request Submitted\nIf you do not receive the confirmation email within a few minutes of submitted this form, please check your Spam or Bulk E-mail folder.',
			'ThanksForContactingRepresentativeWillReachSoonMsg': 'Thank you for contacting Univar Solutions. A representative will get back to you shortly.',
			'accountUpdateSuccessMessage': 'Your address is under review. A customer service representative will reach out for any additional information or notify you when the address has been added to you online account.',
			'profileUpdateSuccessMessage': 'You\'re request is being reviewed, we will get back to you shortly.'
		}
		this.DisclaimerMessage = {
			'Disclaimer_Message': 'Please note: All charges may not show for your order at the time of purchase. Additional charges such as freight, tax, or special charges may apply. Your order is subject to further regulatory review. To finalize your order, Univar Solutions requires we have the proper information on file. You will receive an email confirming your order once your Customer Service Rep has reviewed and processed it. This email will include the final cost and confirmed delivery date as well as any additional charges. To expedite or for further information, please contact your local representative at 1-855-888-8648.',
		}
		this.orderHistoryPage = {
			'allOrders': 'All Orders',
			'openOrders': 'Open Orders',
			'completedOrders': 'Completed Orders',
			'cancelledOrders': 'Cancelled Orders',
			'ordered': 'Ordered',
			'orderHistory': 'Order History',
			'orderTitle': 'Order',
			'orderNumber': '# '
		}

		this.productInfo = {
			'productPrice': '£'

		}
		this.searchPage = {
			'noResults': 'No results were found matching your search request for'
		}
		this.myAccount = {
			'accountOverview': 'Account Overview',
			'invoices': 'Invoices',
			'notifications': 'Notifications',
			'orders': 'Orders',
			'addressBook': 'Address Book',
			'notifications': 'Notifications',
			'profile': 'Profile',
			'signOut': 'Sign Out',
			'privacySettings': 'Privacy Settings',
		}

		this.contactUs = {
			'termsOfUseText': 'I have read and accept your',
			'contactUsHeaderText': 'Contact Us'
		}
		this.invoices = {
			'status': '["Open", "Paid In Full","Pending","Past Due", "Processing"]',

		}
		this.recentInvoicesOnPersonalHomepage = {
			'recentInvoicesColumnHeader': ['Invoice No.', 'Total Amount', 'Date Due', 'Status', 'Order No.']
		}
		this.searchQuery = {
			'placeHolderText': 'Search Product Name, Material No. or Keyword'
		}
		this.resetPasswordEmail = {
			'resetPasswordButton': 'Reset Password'
		}
		this.headers = {
			'productCatalog': 'Product Catalog',
			'checkoutShipping': 'Shipping',
			'productCategories': 'Product Categories',
			'contactUs': 'Contact Us',
			'login': 'Customer Login',
			'career': 'Careers at Univar Solutions'
		}
		this.footers = {
			'OrderHistory': 'Customer Login',
			'WeareHiring': 'Careers at Univar Solutions',
			'Acids': 'Acids - Product Categories',
			'AdditivesModifiers': 'Additives & Modifiers - Product Categories',
			'Chelants': 'Chelants - Product Categories',
			'Enzymes': 'Enzymes - Product Categories',
			'EssentialChemicalsIngredients': 'Essential Chemicals & Ingredients - Product Categories',
			'FoodIngredients': 'Food Ingredients - Product Categories',
			'Oleochemicals': 'Oleochemicals - Product Categories',
			'Oxides': 'Oxides - Product Categories',
			'PolymersandResins': 'Polymers & Resins - Product Categories',
			'ProcessAids': 'Process Aids - Product Categories',
			'Silicones': 'Silicones - Product Categories',
			'Solvents': 'Solvents - Product Categories',
			'Surfactants': 'Surfactants',
			'Safety': 'Safety | Univar Solutions',
			'Sustainability': 'Sustainability',
			'REACH': 'REACH | Univar Solutions',
			'Services': 'Chemical Solutions Services | Univar Solutions',
			'Innovation': 'Formula & Recipe Innovation - Global Chemicals & Ingredients Distributor | Univar Solutions',
			'Blog': 'Chemicals Distribution & Environmental Sustainability Blog | Univar Solutions',
			'Investors': 'Univar Solutions Inc. - Investor Relations',
			'Aboutus': 'Univar Solutions | About Us',
			'Careers': 'Careers at Univar Solutions',
			'DiversityInclusion': 'Diversity, Equity & Inclusion at Univar Solutions',
			'CodeofConduct': 'Univar Solutions | About Us',
			'ContactUs': 'Contact Us',
			'Media': 'Univar Solutions Inc. - News',
			'PrivacyPolicy': 'Privacy Policy for Univar Solutions',
			'TermsofUse': 'Terms and Conditions of Use',
			'CookiePolicy': 'Cookie Policy for Univar Solutions',
			'ReturnPolicy': 'Return Policy for Univar Solutions',
			'Linkedin': 'Univar Solutions | LinkedIn',
			'Youtube': 'Univar Solutions - YouTube',
			'Twitter': 'Univar Solutions (@UnivarSolutions) / Twitter',
			'Facebook': 'Univar Solutions - Home | Facebook'
		}

		this.checkoutPage = {
			'backToCart': 'Back to Cart',
			'paymentProgress': 'Payment',
			'confirmation': 'Checkout',
			'progressConfirmation': 'Acknowledgement'
		}
		this.autoCompletWindow = {
			'QuotedProducts': 'Quoted Products',
			'AllProducts': 'All Products'
		}
		this.shippingAddress = {
			'shippingAddress': 'Shipping Information',
			'shippingMethod': 'Standard Shipping - Univar',
			'shippingMethodText': 'Shipping Method',
			'preferredDeliveryDateText': 'Preferred Delivery Date'
		}
	}

}

module.exports = new commonMessages();
