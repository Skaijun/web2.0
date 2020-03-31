import { inputChecker } from '../../utils/inputChecker';

// -------------------------------------
class ContactUsForm {
    constructor(name, email, phone, subject) {
        this.id = new Date()
        this.name = name
        this.email = email
        this.phone = phone
        this.subject = subject
    }
}
// -------------------------------------
export class ContactForms {
    constructor() {
        this.forms = []
        this.validateInputs = this.validateInputs.bind(this);
        this.selectDOMElements()
        this.setEventToDOM()
    }

    selectDOMElements() {
        this.contactForm = document.getElementById('user-contact-form');
        this.contactName = document.getElementById('user-contact-name');
        this.contactEmail = document.getElementById('user-contact-email');
        this.contactPhone = document.getElementById('user-contact-phone');
        this.contactSubject = document.getElementById('user-contact-subject');
    }

    setEventToDOM() {
        this.contactForm.addEventListener('submit', this.validateInputs);
    }

    validateInputs() {
        event.preventDefault();
        const nameValue = inputChecker.inputAdjust(this.contactName.value);
        const emailValue = this.contactEmail.value.trim();
        const phoneValue = this.contactPhone.value.trim();
        const subjValue = inputChecker.inputAdjust(this.contactSubject.value);
        let currentForm = {
            name: '',
            nameIsValid: false,
            email: '',
            emailIsValid: false,
            phone: '',
            phoneIsValid: false,
        }

        // -------------------------------NAME-----------------------------------------------
        if (inputChecker.isFieldEmpty(nameValue)) {
            this.setErrorFor(this.contactName, 'Please enter your name');
        } else if (inputChecker.isAnyDigitsOrSymbols(nameValue)) {
            this.setErrorFor(this.contactName, 'Please enter only characters');
        } else {
            this.setSuccessfulFor(this.contactName, 'Correct');
            currentForm.name = nameValue;
            currentForm.nameIsValid = true;
        }

        // --------------------------------EMAIL----------------------------------------------
        if (inputChecker.isFieldEmpty(emailValue)) {
            this.setErrorFor(this.contactEmail, 'Please enter your email');
        } else if (!inputChecker.isEmailValid(emailValue)) {
            this.setErrorFor(this.contactEmail, 'Invalid email');
        } else {
            this.setSuccessfulFor(this.contactEmail, 'Correct');
            currentForm.email = emailValue;
            currentForm.emailIsValid = true;
        }

        // --------------------------------PHONE----------------------------------------------
        if (inputChecker.isFieldEmpty(phoneValue)) {
            this.setErrorFor(this.contactPhone, 'Please enter your phone number');
        } else if (!inputChecker.isPhoneValid(phoneValue)) {
            this.setErrorFor(this.contactPhone, 'Invalid phone number');
        } else {
            this.setSuccessfulFor(this.contactPhone, 'Correct');
            currentForm.phone = phoneValue;
            currentForm.phoneIsValid = true;
        }

        // -----------------------------FORM-CONFIRM-------------------------------------------
        if ((currentForm.nameIsValid) && (currentForm.emailIsValid) && (currentForm.phoneIsValid)) {
            this.forms.push(new ContactUsForm(currentForm.name, currentForm.email, currentForm.phone, subjValue));
            this.contactName.value = '';
            this.contactEmail.value = '';
            this.contactPhone.value = '';
            this.contactSubject.value = '';
            this.contactName.parentElement.classList.remove('successful');
            this.contactEmail.parentElement.classList.remove('successful');
            this.contactPhone.parentElement.classList.remove('successful');
        }
    }

    setErrorFor(input, message) {
        const inputState = input.parentElement.querySelector('small');
        inputState.innerText = message;
        input.parentElement.className = 'form-contact-control wrong';
    }

    setSuccessfulFor(input, message) {
        const inputState = input.parentElement.querySelector('small');
        inputState.innerText = message;
        input.parentElement.className = 'form-contact-control successful';
    }

}