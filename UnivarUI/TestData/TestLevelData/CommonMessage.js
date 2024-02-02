class commonMessages {
	constructor() {
		this.commonErrorMessage = {
			'thisFieldRequired': 'This is a required field.',
			'selectOption': 'Please select an option.',
			'enterValidEmail': 'Please enter a valid email address (Ex: johndoe@domain.com).'
		}
		this.commonSuccessMessage = {
			'PLPRFQSuccessMsg': 'Your quote Request has been Submitted.',
			'ResetPasswordSuccessMsg': 'You updated your password.',
			'ContactUsFormSubmitSuccessMsg': 'Thank you for contacting Univar Solutions. A representative will get back to you shortly.',
			'GuestRFQSuccessToast': 'Quote Request Submitted\nIf you do not receive the confirmation email within a few minutes of submitted this form, please check your Spam or Bulk E-mail folder.',
		}
		this.DisclaimerMessage = {
			'Disclaimer_Message': 'Please note: All charges may not show for your order at the time of purchase. Additional charges such as freight, tax, or special charges may apply. Your order is subject to further regulatory review. To finalize your order, Univar Solutions requires we have the proper information on file. You will receive an email confirming your order once your Customer Service Rep has reviewed and processed it. This email will include the final cost and confirmed delivery date as well as any additional charges. To expedite or for further information, please contact your local representative at 1-855-888-8648.',
		}
	}
}

module.exports = new commonMessages();
