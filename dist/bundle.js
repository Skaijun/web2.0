/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_src_form_validation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
 // import './Components/src/cloud-zoom.1.0.3.min';
// import './Components/src/easing';
// import './Components/src/fliplightbox.min';
// import './Components/src/jquery.cslider';
// import './Components/src/jquery.easing.min';
// import './Components/src/jquery.fancybox.pack';
// import './Components/src/jquery.fancybox-thumbs';
// import './Components/src/jquery.fancybox-buttons';
// import './Components/src/jquery.min';
// import './Components/src/jquery.mixitup.min';
// import './Components/src/modernizr.custom.28468';
// import './Components/src/move-top';
// import './Components/src/owl.carousel';
// import './Components/src/productviewgallery';
// import './Components/src/responsive.menu';
// sector clear :)

console.log('Hi1 Webpack');
var contactUsFormsInitialization = new _Components_src_form_validation_js__WEBPACK_IMPORTED_MODULE_0__["ContactForms"]();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactForms", function() { return ContactForms; });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import {inputAdjust} from './input_validation';
// export default contactUsFormsInitialization;
var CONTACT_FORM = document.getElementById('user-contact-form');
var CONTACT_NAME = document.getElementById('user-contact-name');
var CONTACT_EMAIL = document.getElementById('user-contact-email');
var CONTACT_PHONE = document.getElementById('user-contact-phone');
var CONTACT_SUBJ = document.getElementById('user-contact-subject'); // const CONTACT_ERROR_MESSAGE = document.getElementById('user-contact-error');
// -------------------------------------

var ContactUsForm = function ContactUsForm(name, email, phone, subject) {
  _classCallCheck(this, ContactUsForm);

  this.id = new Date();
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.subject = subject;
}; // -------------------------------------


var ContactForms =
/*#__PURE__*/
function () {
  function ContactForms() {
    _classCallCheck(this, ContactForms);

    this.forms = [];
    this.validation(); // this.checkInputs = this.checkInputs.bind(this);
  }

  _createClass(ContactForms, [{
    key: "validation",
    value: function validation() {
      CONTACT_FORM.addEventListener('submit', function (event) {
        event.preventDefault(); // this.checkInputs();
      });
    }
  }, {
    key: "checkInputs",
    value: function checkInputs() {
      var nameValue = this.inputAdjust(CONTACT_NAME.value);
      var emailValue = CONTACT_EMAIL.value.trim();
      var phoneValue = CONTACT_PHONE.value.trim();
      var subjValue = this.inputAdjust(CONTACT_SUBJ.value);
      var currentForm = {
        name: '',
        nameIsValid: false,
        email: '',
        emailIsValid: false,
        phone: '',
        phoneIsValid: false
      }; // -------------------------------NAME-----------------------------------------------
      // let newName = new ValidationName(this.inputAdjust(CONTACT_NAME.value));

      if (nameValue === '' || nameValue == null) {
        this.setErrorFor(CONTACT_NAME, 'Please enter your name');
      } else {
        this.setSuccessfulFor(CONTACT_NAME, 'Correct');
        currentForm.name = nameValue;
        currentForm.nameIsValid = true;
      } // --------------------------------EMAIL----------------------------------------------


      var newEmail = new ValidationEmail(emailValue);

      if (emailValue === '' || emailValue == null) {
        this.setErrorFor(CONTACT_EMAIL, 'Please enter your email');
      } else if (!newEmail.isValid()) {
        this.setErrorFor(CONTACT_EMAIL, 'Invalid email');
      } else {
        this.setSuccessfulFor(CONTACT_EMAIL, 'Correct');
        currentForm.email = emailValue;
        currentForm.emailIsValid = true;
      } // --------------------------------PHONE----------------------------------------------


      var newPhone = new ValidationPhone(phoneValue);

      if (phoneValue === '' || phoneValue == null) {
        this.setErrorFor(CONTACT_PHONE, 'Please enter your phone number');
      } else if (!newPhone.isValid()) {
        this.setErrorFor(CONTACT_PHONE, 'Invalid phone number');
      } else {
        this.setSuccessfulFor(CONTACT_PHONE, 'Correct');
        currentForm.phone = phoneValue;
        currentForm.phoneIsValid = true;
      } // -----------------------------FORM-CONFIRM-------------------------------------------


      if (currentForm.nameIsValid && currentForm.emailIsValid && currentForm.phoneIsValid) {
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
  }, {
    key: "setErrorFor",
    value: function setErrorFor(input, message) {
      var parentForm = input.parentElement;
      var small = parentForm.querySelector('small');
      small.innerText = message;
      parentForm.className = 'form-contact-control wrong';
    }
  }, {
    key: "setSuccessfulFor",
    value: function setSuccessfulFor(input, message) {
      var parentForm = input.parentElement;
      var small = parentForm.querySelector('small');
      small.innerText = message;
      parentForm.className = 'form-contact-control successful';
    }
  }, {
    key: "inputAdjust",
    value: function inputAdjust(input) {
      var adjustedInput = input.normalize('NFD').replace(/([.!?]+)(?=\S)/g, "$1 ").trim();
      return adjustedInput;
    }
  }]);

  return ContactForms;
}(); // -------------------------------------
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

var ValidationEmail =
/*#__PURE__*/
function () {
  function ValidationEmail(email) {
    _classCallCheck(this, ValidationEmail);

    this.email = email;
  }

  _createClass(ValidationEmail, [{
    key: "isValid",
    value: function isValid() {
      var emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailRegExp.test(this.email);
    }
  }]);

  return ValidationEmail;
}(); // ------------------------


var ValidationPhone =
/*#__PURE__*/
function () {
  function ValidationPhone(phone) {
    _classCallCheck(this, ValidationPhone);

    this.phone = phone;
  }

  _createClass(ValidationPhone, [{
    key: "isValid",
    value: function isValid() {
      var phoneRegExp = /^\s*((\+?\s*(\(\s*)?3)?[\s-]*(\(\s*)?8[\s-]*)?(\(\s*)?0[\s\-\(]*[1-9][\s-]*\d(\s*\))?([\s-]*\d){7}\s*$/;
      return phoneRegExp.test(this.phone);
    }
  }]);

  return ValidationPhone;
}(); // ------------------------
// const contactUsFormsInitialization = new ContactForms();

/***/ })
/******/ ]);