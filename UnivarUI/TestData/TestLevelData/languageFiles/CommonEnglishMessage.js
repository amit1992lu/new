class commonMessages {
	constructor() {
		this.commonErrorMessage = {
			'thisFieldRequired': 'This is a required field.',
			'selectOption': 'Please select an option.',
			'enterValidEmail': 'Please enter a valid email address (Ex: johndoe@domain.com).',
			'minOrderQtyMsg': 'Please enter a quantity greater than %s.',
			'maxOrderQtyMsg': 'The maximum you may purchase is %s.'
		}
		this.commonSuccessMessage = {
			'PLPRFQSuccessMsg': 'Success\n\nYou\'ve submitted a quote request',
			'ResetPasswordSuccessMsg': 'You updated your password.',
			'ThanksForContactingRepresentativeWillReachSoonMsg': 'Thank you for contacting Univar Solutions. A representative will get back to you shortly.',
			'GuestRFQSuccessToast': 'Quote Request Submitted\nIf you do not receive the confirmation email within a few minutes of submitted this form, please check your Spam or Bulk E-mail folder.',
			'ChemcareuserRFQSuccessToast': 'If you do not receive the confirmation email within a few minutes of submitted this form, please check your Spam or Bulk E-mail folder.',
			'sdsSuccessMessage': 'Your SDS document request has been submitted.',
			'loginSuccessMessage': 'You have successfully logged in',
			'accountUpdateSuccessMessage': 'Your address is under review. A customer service representative will reach out for any additional information or notify you when the address has been added to you online account.',
			'profileUpdateSuccessMessage': 'You\'re request is being reviewed, we will get back to you shortly.'
		}

		this.commonInfoMessages = {
			'PaymentReminderInfoMessage': 'Stay up to date with your next payments.',
			'EmailOptInModalTitle': 'You’ve set up email reminders',
			'EmailOptInModalMessage': 'We’ll start emailing you the latest updates about your invoice payments.',
			'EmailOptOutModalTitle': 'You’ve turned off email reminders',
			'EmailOptOutModalMessage': 'We won’t be emailing you updates about your invoice payments.',
			'TurnOffEmailReminder': 'Turn off email reminders',
			'TurnOnEmailReminder': 'Turn on email reminders',

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
			'productPrice': '$'
		}
		this.searchPage = {
			'noResults': 'No results were found matching your search request for'
		}

		this.myAccount = {
			'accountOverview': 'Account Overview',
			'orders': 'Orders',
			'invoices': 'Invoices',
			'notifications': 'Notifications',
			'addressBook': 'Address Book',
			'profile': 'Profile',
			'signOut': 'Sign Out',
			'privacySettings': 'Privacy Settings',
		}
		this.searchQuery = {
			'placeHolderText': 'Search Product Name, Material No. or Keyword'
		}

		this.resetPassword = {
			'resetpasswordMailText': 'Reset your Univar Solutions password'
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
			'Additives&Modifiers': 'Additives & Modifiers - Product Categories',
			'ChelantingAgents': 'Chelanting Agents - Product Categories',
			'EssentialChemicals&Ingredients': 'Essential Chemicals & Ingredients - Product Categories',
			'FoodIngredients': 'Food Ingredients - Product Categories',
			'Oleochemicals': 'Oleochemicals - Product Categories',
			'Oxides': 'Oxides - Product Categories',
			'Polymers & Resins': 'Polymers & Resins - Product Categories',
			'Process Aids': 'Process Aids - Product Categories',
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
			'About us': 'Univar Solutions | About Us',
			'Careers': 'Careers at Univar Solutions',
			'Diversity&Inclusion': 'Diversity, Equity & Inclusion at Univar Solutions',
			'Code of Conduct': 'Univar Solutions | About Us',
			'ContactUs': 'Contact Us',
			'Media': '	Univar Solutions Inc. - News',
			'Privacy Policy': 'Privacy Policy for Univar Solutions',
			'Terms of Use': 'Terms and Conditions of Use',
			'Cookie Policy': 'Cookie Policy for Univar Solutions',
			'Return Policy': 'Return Policy for Univar Solutions'
		}

		this.checkoutPage = {
			'backToCart': 'Back to Cart',
			'paymentProgress': 'Payment',
			'confirmation': 'Checkout',
			'progressConfirmation': 'Confirmation',
			'productUsage':'By proceeding with this purchase you warrant that you will use the product in compliance with all Safety Data Sheets, all applicable laws and regulations, and that you will not use the product directly or indirectly in any unsafe applications, including but not limited to those Prohibited Uses identified at UnivarSolutions.com. You also understand that Univar Solutions makes no warranty as to fitness for any particular use.',
			'paymentTerms':'Request Payment Terms',
			'liftGate':'No'
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
		this.title = {
			'requestSDSDocument': 'Request a document',
			'industry': 'industry',
			'application': 'application',
			'hereAreYourResults': 'Here are your results! Click on each formulation for more details. You have selected:',

		}
	}
}

module.exports = new commonMessages();
