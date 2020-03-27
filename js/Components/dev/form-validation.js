// import {inputAdjust} from './input_validation';

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
        const nameValue = this.inputAdjust(this.contactName.value);
        const emailValue = this.contactEmail.value.trim();
        const phoneValue = this.contactPhone.value.trim();
        const subjValue = this.inputAdjust(this.contactSubject.value);
        let currentForm = {
            name: '',
            nameIsValid: false,
            email: '',
            emailIsValid: false,
            phone: '',
            phoneIsValid: false,
        }

        // -------------------------------NAME-----------------------------------------------
        // let newName = new ValidationName(this.inputAdjust(this.contactName.value));
        if (nameValue === '' || nameValue == null) {
            this.setErrorFor(this.contactName, 'Please enter your name');
        } else {
            this.setSuccessfulFor(this.contactName, 'Correct');
            currentForm.name = nameValue;
            currentForm.nameIsValid = true;
        }

        // --------------------------------EMAIL----------------------------------------------
        let newEmail = new ValidationEmail(emailValue);
        if (emailValue === '' || emailValue == null) {
            this.setErrorFor(this.contactEmail, 'Please enter your email');
        } else if (!newEmail.isValid()) {
            this.setErrorFor(this.contactEmail, 'Invalid email');
        } else {
            this.setSuccessfulFor(this.contactEmail, 'Correct');
            currentForm.email = emailValue;
            currentForm.emailIsValid = true;
        }

        // --------------------------------PHONE----------------------------------------------
        let newPhone = new ValidationPhone(phoneValue);
        if (phoneValue === '' || phoneValue == null) {
            this.setErrorFor(this.contactPhone, 'Please enter your phone number');
        } else if (!newPhone.isValid()) {
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

    inputAdjust(input) {
        let adjustedInput = input
            .normalize('NFD')
            .replace(/([.!?]+)(?=\S)/g, "$1 ")
            .trim();
        return adjustedInput;
    }
}

// -------------------------------------
// class ValidationName {
//     constructor(name) {
//         this.name = name
//     }

//     // isValid() {
//     //     const nameRegExp = //;
//     //     return nameRegExp.test(this.name);
//     // }
// }
// ------------------------
class ValidationEmail {
    constructor(email) {
        this.email = email
    }

    isValid() {
        const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegExp.test(this.email);
    }
}
// ------------------------
class ValidationPhone {
    constructor(phone) {
        this.phone = phone
    }

    isValid() {
        const phoneRegExp = /^\s*((\+?\s*(\(\s*)?3)?[\s-]*(\(\s*)?8[\s-]*)?(\(\s*)?0[\s\-\(]*[1-9][\s-]*\d(\s*\))?([\s-]*\d){7}\s*$/;
        return phoneRegExp.test(this.phone);
    }
}
// ------------------------

// const contactUsFormsInitialization = new ContactForms();