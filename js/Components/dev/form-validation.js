// import {inputAdjust} from './input_validation';
// export default contactUsFormsInitialization;

const CONTACT_FORM = document.getElementById('user-contact-form');
const CONTACT_NAME = document.getElementById('user-contact-name');
const CONTACT_EMAIL = document.getElementById('user-contact-email');
const CONTACT_PHONE = document.getElementById('user-contact-phone');
const CONTACT_SUBJ = document.getElementById('user-contact-subject');
// const CONTACT_ERROR_MESSAGE = document.getElementById('user-contact-error');

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
        this.validation()
        // this.checkInputs = this.checkInputs.bind(this);
    }

    validation() {
        CONTACT_FORM.addEventListener('submit', function (event) {
            event.preventDefault();
            // this.checkInputs();
        });
    }

    checkInputs() {
        const nameValue = this.inputAdjust(CONTACT_NAME.value);
        const emailValue = CONTACT_EMAIL.value.trim();
        const phoneValue = CONTACT_PHONE.value.trim();
        const subjValue = this.inputAdjust(CONTACT_SUBJ.value);

        let currentForm = {
            name: '',
            nameIsValid: false,
            email: '',
            emailIsValid: false,
            phone: '',
            phoneIsValid: false,
        }

        // -------------------------------NAME-----------------------------------------------
        // let newName = new ValidationName(this.inputAdjust(CONTACT_NAME.value));
        if (nameValue === '' || nameValue == null) {
            this.setErrorFor(CONTACT_NAME, 'Please enter your name');
        } else {
            this.setSuccessfulFor(CONTACT_NAME, 'Correct');
            currentForm.name = nameValue;
            currentForm.nameIsValid = true;
        }

        // --------------------------------EMAIL----------------------------------------------
        let newEmail = new ValidationEmail(emailValue);
        if (emailValue === '' || emailValue == null) {
            this.setErrorFor(CONTACT_EMAIL, 'Please enter your email');
        } else if (!newEmail.isValid()) {
            this.setErrorFor(CONTACT_EMAIL, 'Invalid email');
        } else {
            this.setSuccessfulFor(CONTACT_EMAIL, 'Correct');
            currentForm.email = emailValue;
            currentForm.emailIsValid = true;
        }

        // --------------------------------PHONE----------------------------------------------
        let newPhone = new ValidationPhone(phoneValue);
        if (phoneValue === '' || phoneValue == null) {
            this.setErrorFor(CONTACT_PHONE, 'Please enter your phone number');
        } else if (!newPhone.isValid()) {
            this.setErrorFor(CONTACT_PHONE, 'Invalid phone number');
        } else {
            this.setSuccessfulFor(CONTACT_PHONE, 'Correct');
            currentForm.phone = phoneValue;
            currentForm.phoneIsValid = true;
        }

        // -----------------------------FORM-CONFIRM-------------------------------------------
        if ((currentForm.nameIsValid) && (currentForm.emailIsValid) && (currentForm.phoneIsValid)) {
            this.forms.push(new ContactUsForm(currentForm.name, currentForm.email, currentForm.phone, subjValue));
            CONTACT_NAME.value = '';
            CONTACT_EMAIL.value = '';
            CONTACT_PHONE.value = '';
            CONTACT_SUBJ.value = '';
            CONTACT_NAME.parentElement.classList.remove('successful');
            CONTACT_EMAIL.parentElement.classList.remove('successful');
            CONTACT_PHONE.parentElement.classList.remove('successful');
        }
    }

    setErrorFor(input, message) {
        const parentForm = input.parentElement;
        const small = parentForm.querySelector('small');
        small.innerText = message;
        parentForm.className = 'form-contact-control wrong';
    }

    setSuccessfulFor(input, message) {
        const parentForm = input.parentElement;
        const small = parentForm.querySelector('small');
        small.innerText = message;
        parentForm.className = 'form-contact-control successful';
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