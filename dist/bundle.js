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
/* harmony import */ var _Components_dev_renderHTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Components_dev_StateDOMHTML__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _Components_src_responsive_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
// import {ContactForms} from './Components/dev/form-validation';

 // import { ContactForms } from './Components/dev/form-validation'

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

var webShopDOM = new _Components_dev_renderHTML__WEBPACK_IMPORTED_MODULE_0__["RenderHTML"](document.body);
window.onload = Object(_Components_src_responsive_menu_js__WEBPACK_IMPORTED_MODULE_2__["activateResponsiveMenu"])();
window.StateDOMHTML = _Components_dev_StateDOMHTML__WEBPACK_IMPORTED_MODULE_1__["StateDOMHTML"];

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderHTML", function() { return RenderHTML; });
/* harmony import */ var _StateDOMHTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _form_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _src_jquery_cslider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _src_jquery_cslider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_jquery_cslider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_owl_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _src_owl_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_owl_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_jquery_mixitup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _src_jquery_mixitup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_jquery_mixitup__WEBPACK_IMPORTED_MODULE_4__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var RenderHTML =
/*#__PURE__*/
function () {
  function RenderHTML(selectedHtmlElement) {
    _classCallCheck(this, RenderHTML);

    this.selectedHtmlElement = selectedHtmlElement || document.body;
    this.pageState = new _StateDOMHTML__WEBPACK_IMPORTED_MODULE_0__["StateDOMHTML"]();
    this.depictCurrentPage();
    this.handleEventsOnBtns = this.handleEventsOnBtns.bind(this);
    this.setEventToDOM(this.selectedHtmlElement);
  }

  _createClass(RenderHTML, [{
    key: "depictCurrentPage",
    value: function depictCurrentPage() {
      if (this.pageState.currPage === 'main-page') {
        this.depictMainPage();
      } else if (this.pageState.currPage === 'sale-page') {
        this.depictSalePage();
      } else if (this.pageState.currPage === 'handbags-page') {
        this.depictHandbagsPage();
      } else if (this.pageState.currPage === 'accessories-page') {
        this.depictAccessoriesPage();
      } else if (this.pageState.currPage === 'wallets-page') {
        this.depictWalletsPage();
      } else if (this.pageState.currPage === 'shoes-page') {
        this.depictShoesPage();
      } else if (this.pageState.currPage === 'services-page') {
        this.depictServicesPage();
      } else if (this.pageState.currPage === 'contactUs-page') {
        this.depictContactUsPage();
      } else if (this.pageState.currPage === 'details-page') {
        this.depictDetailsPage();
      }
    }
  }, {
    key: "depictMainPage",
    value: function depictMainPage() {
      $(this.selectedHtmlElement).empty();
      this.selectedHtmlElement.insertAdjacentHTML("afterbegin", _StateDOMHTML__WEBPACK_IMPORTED_MODULE_0__["DOM_STATE_HTML"].MAIN_PAGE);
      $(function () {
        $('#da-slider').cslider();
      });
      $(document).ready(function () {
        $("#owl-demo").owlCarousel({
          items: 4,
          lazyLoad: true,
          autoPlay: true,
          navigation: true,
          navigationText: ["", ""],
          rewindNav: false,
          scrollPerPage: false,
          pagination: false,
          paginationNumbers: false
        });
      });
    }
  }, {
    key: "depictSalePage",
    value: function depictSalePage() {
      $(this.selectedHtmlElement).empty();
      this.selectedHtmlElement.insertAdjacentHTML("afterbegin", _StateDOMHTML__WEBPACK_IMPORTED_MODULE_0__["DOM_STATE_HTML"].SALE_PAGE_FULL);
      $(function () {
        var filterList = {
          init: function init() {
            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixitup({
              targetSelector: '.portfolio',
              filterSelector: '.filter',
              effects: ['fade'],
              easing: 'snap' // call the hover effect
              // onMixEnd: filterList.hoverEffect()

            });
          },
          hoverEffect: function hoverEffect() {
            // Simple parallax effect
            $('#portfoliolist .portfolio').hover(function () {
              $(this).find('.label').stop().animate({
                bottom: 0
              }, 200, 'easeOutQuad');
              $(this).find('img').stop().animate({
                top: -30
              }, 500, 'easeOutQuad');
            }, function () {
              $(this).find('.label').stop().animate({
                bottom: -40
              }, 200, 'easeInQuad');
              $(this).find('img').stop().animate({
                top: 0
              }, 300, 'easeOutQuad');
            });
          }
        }; // Run the show!

        filterList.init();
      });
    }
  }, {
    key: "depictHandbagsPage",
    value: function depictHandbagsPage() {
      $(this.selectedHtmlElement).empty();
      this.selectedHtmlElement.insertAdjacentHTML("afterbegin", _StateDOMHTML__WEBPACK_IMPORTED_MODULE_0__["DOM_STATE_HTML"].HANDBAGS_PAGE_FULL);
    }
  }, {
    key: "depictAccessoriesPage",
    value: function depictAccessoriesPage() {
      $(this.selectedHtmlElement).empty();
      this.selectedHtmlElement.insertAdjacentHTML("afterbegin", _StateDOMHTML__WEBPACK_IMPORTED_MODULE_0__["DOM_STATE_HTML"].ACCESSORIES_PAGE_FULL);
    }
  }, {
    key: "depictWalletsPage",
    value: function depictWalletsPage() {
      $(this.selectedHtmlElement).empty();
      this.selectedHtmlElement.insertAdjacentHTML("afterbegin", _StateDOMHTML__WEBPACK_IMPORTED_MODULE_0__["DOM_STATE_HTML"].WALLETS_PAGE_FULL);
    }
  }, {
    key: "depictShoesPage",
    value: function depictShoesPage() {
      $(this.selectedHtmlElement).empty();
      this.selectedHtmlElement.insertAdjacentHTML("afterbegin", _StateDOMHTML__WEBPACK_IMPORTED_MODULE_0__["DOM_STATE_HTML"].SHOES_PAGE_FULL);
    }
  }, {
    key: "depictServicesPage",
    value: function depictServicesPage() {
      $(this.selectedHtmlElement).empty();
      this.selectedHtmlElement.insertAdjacentHTML("afterbegin", _StateDOMHTML__WEBPACK_IMPORTED_MODULE_0__["DOM_STATE_HTML"].SERVICES_PAGE_FULL);
    }
  }, {
    key: "depictContactUsPage",
    value: function depictContactUsPage() {
      $(this.selectedHtmlElement).empty();
      this.selectedHtmlElement.insertAdjacentHTML("afterbegin", _StateDOMHTML__WEBPACK_IMPORTED_MODULE_0__["DOM_STATE_HTML"].CONTACT_US_PAGE_FULL);
      var contactUsFormsInitialization = new _form_validation__WEBPACK_IMPORTED_MODULE_1__["ContactForms"]();
    }
  }, {
    key: "depictDetailsPage",
    value: function depictDetailsPage() {
      $(this.selectedHtmlElement).empty();
      this.selectedHtmlElement.insertAdjacentHTML("afterbegin", _StateDOMHTML__WEBPACK_IMPORTED_MODULE_0__["DOM_STATE_HTML"].DETAILS_PAGE_FULL);
    }
  }, {
    key: "setEventToDOM",
    value: function setEventToDOM(selectedElement) {
      selectedElement.addEventListener('click', this.handleEventsOnBtns);
    }
  }, {
    key: "handleEventsOnBtns",
    value: function handleEventsOnBtns(event) {
      // event.preventDefault();
      if (event.target.classList.contains('main-page')) {
        window.localStorage.clear();
        this.pageState.savePageStateInLocalStorage('main-page');
        document.location.reload(true);
        this.depictCurrentPage();
      } else if (event.target.classList.contains('sale-page')) {
        window.localStorage.clear();
        this.pageState.savePageStateInLocalStorage('sale-page');
        document.location.reload(true);
        this.depictCurrentPage();
      } else if (event.target.classList.contains('handbags-page')) {
        window.localStorage.clear();
        this.pageState.savePageStateInLocalStorage('handbags-page');
        document.location.reload(true);
        this.depictCurrentPage();
      } else if (event.target.classList.contains('accessories-page')) {
        window.localStorage.clear();
        this.pageState.savePageStateInLocalStorage('accessories-page');
        document.location.reload(true);
        this.depictCurrentPage();
      } else if (event.target.classList.contains('wallets-page')) {
        window.localStorage.clear();
        this.pageState.savePageStateInLocalStorage('wallets-page');
        document.location.reload(true);
        this.depictCurrentPage();
      } else if (event.target.classList.contains('shoes-page')) {
        window.localStorage.clear();
        this.pageState.savePageStateInLocalStorage('shoes-page');
        document.location.reload(true);
        this.depictCurrentPage();
      } else if (event.target.classList.contains('services-page')) {
        window.localStorage.clear();
        this.pageState.savePageStateInLocalStorage('services-page');
        document.location.reload(true);
        this.depictCurrentPage();
      } else if (event.target.classList.contains('contactUs-page')) {
        window.localStorage.clear();
        this.pageState.savePageStateInLocalStorage('contactUs-page');
        document.location.reload(true);
        this.depictCurrentPage();
      } else if (event.target.classList.contains('details-page')) {
        window.localStorage.clear();
        this.pageState.savePageStateInLocalStorage('details-page');
        document.location.reload(true);
        this.depictCurrentPage();
      }
    }
  }]);

  return RenderHTML;
}();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateDOMHTML", function() { return StateDOMHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM_STATE_HTML", function() { return DOM_STATE_HTML; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StateDOMHTML =
/*#__PURE__*/
function () {
  function StateDOMHTML() {
    _classCallCheck(this, StateDOMHTML);

    this.currPage = JSON.parse(window.localStorage.getItem("currentPage")) || 'main-page';
  }

  _createClass(StateDOMHTML, [{
    key: "switchCurrentPage",
    value: function switchCurrentPage(page) {
      this.currPage = page;
    }
  }, {
    key: "savePageStateInLocalStorage",
    value: function savePageStateInLocalStorage(page) {
      window.localStorage.setItem("currentPage", JSON.stringify(page));
    }
  }]);

  return StateDOMHTML;
}();
var DOM_STATE_HTML = {
  "MAIN_PAGE_2": '',
  "MAIN_PAGE": '',
  "SALE_PAGE_FULL": '',
  "HANDBAGS_PAGE_FULL": '',
  "ACCESSORIES_PAGE_FULL": '',
  "WALLETS_PAGE_FULL": '',
  "SHOES_PAGE_FULL": '',
  "SERVICES_PAGE_FULL": '',
  "CONTACT_US_PAGE_FULL": '',
  "DETAILS_PAGE_FULL": ''
};
DOM_STATE_HTML.MAIN_PAGE_2 = "\n<!-- start header -->\n<div class=\"header_bg\">\n<div class=\"wrap\">\n\t<div class=\"header\">\n\t\t<div class=\"logo\">\n\t\t\t<a href=\"index.html\"><img src=\"../images/logo.png\" alt=\"\"/> </a>\n\t\t</div>\n\t\t<div class=\"h_icon\">\n\t\t<ul class=\"icon1 sub-icon1\">\n\t\t\t<li><a class=\"active-icon c1\" href=\"#\"><i>$300</i></a>\n\t\t\t\t<ul class=\"sub-icon1 list\">\n\t\t\t\t\t<li><h3>shopping cart empty</h3><a href=\"\"></a></li>\n\t\t\t\t\t<li><p>if items in your wishlit are missing, <a href=\"contact.html\">contact us</a> to view them</p></li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t</ul>\n\t\t</div>\n\t\t<div class=\"h_search\">\n    \t\t<form>\n    \t\t\t<input type=\"text\" value=\"\">\n    \t\t\t<input type=\"submit\" value=\"\">\n    \t\t</form>\n\t\t</div>\n\t\t<div class=\"clear\"></div>\n\t</div>\n</div>\n</div>\n<div class=\"header_btm\">\n<div class=\"wrap\">\n\t<div class=\"header_sub\">\n\t\t<div class=\"h_menu\">\n\t\t\t<ul>\n\t\t\t\t<li class=\"active\"><a href=\"index.html\">Home</a></li> |\n\t\t\t\t<li><a href=\"sale.html\">sale</a></li> |\n\t\t\t\t<li><a href=\"handbags.html\">handbags</a></li> |\n\t\t\t\t<li><a href=\"accessories.html\">accessories</a></li> |\n\t\t\t\t<li><a href=\"wallets.html\">wallets</a></li> |\n\t\t\t\t<li><a href=\"sale.html\">sale</a></li> |\n\t\t\t\t<li><a href=\"index.html\">mens store</a></li> |\n\t\t\t\t<li><a href=\"shoes.html\">shoes</a></li> |\n\t\t\t\t<li><a href=\"sale.html\">vintage</a></li> |\n\t\t\t\t<li><a href=\"service.html\">services</a></li> |\n\t\t\t\t<li><a href=\"contact.html\">Contact us</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"top-nav\">\n\t          <nav class=\"nav\">\t        \t\n\t    \t    <a href=\"#\" id=\"w3-menu-trigger\"> </a>\n\t                  <ul class=\"nav-list\" style=\"\">\n\t            \t        <li class=\"nav-item\"><a class=\"active\" href=\"index.html\">Home</a></li>\n\t\t\t\t\t\t\t<li class=\"nav-item\"><a href=\"sale.html\">Sale</a></li>\n\t\t\t\t\t\t\t<li class=\"nav-item\"><a href=\"handbags.html\">Handbags</a></li>\n\t\t\t\t\t\t\t<li class=\"nav-item\"><a href=\"accessories.html\">Accessories</a></li>\n\t\t\t\t\t\t\t<li class=\"nav-item\"><a href=\"shoes.html\">Shoes</a></li>\n\t\t\t\t\t\t\t<li class=\"nav-item\"><a href=\"service.html\">Services</a></li>\n\t\t\t\t\t\t\t<li class=\"nav-item\"><a href=\"contact.html\">Contact</a></li>\n\t                 </ul>\n\t           </nav>\n\t             <div class=\"search_box\">\n\t\t\t\t<form>\n\t\t\t\t   <input type=\"text\" value=\"Search\" onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = 'Search';}\"><input type=\"submit\" value=\"\">\n\t\t\t    </form>\n\t\t\t</div>\n\t          <div class=\"clear\"> </div>\n\t          <script src=\"./Components/src/responsive.menu.js\"></script>\n         </div>\t\t  \n\t<div class=\"clear\"></div>\n</div>\n</div>\n</div>\n<!-- start slider -->\n\t\t\t<div id=\"da-slider\" class=\"da-slider\">\n\t\t\t\t<div class=\"da-slide\">\n\t\t\t\t\t<h2>welcome to aditii</h2>\n\t\t\t\t\t<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.</p>\n\t\t\t\t\t<a href=\"details.html\" class=\"da-link\">shop now</a>\n\t\t\t\t\t<div class=\"da-img\"><img src=\"../images/slider1.png\" alt=\"image01\" /></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"da-slide\">\n\t\t\t\t\t<h2>Easy management</h2>\n\t\t\t\t\t<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n\t\t\t\t\t<a href=\"details.html\" class=\"da-link\">shop now</a>\n\t\t\t\t\t<div class=\"da-img\"><img src=\"../images/slider2.png\" alt=\"image01\" /></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"da-slide\">\n\t\t\t\t\t<h2>Revolution</h2>\n\t\t\t\t\t<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>\n\t\t\t\t\t<a href=\"details.html\" class=\"da-link\">shop now</a>\n\t\t\t\t\t<div class=\"da-img\"><img src=\"../images/slider3.png\" alt=\"image01\" /></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"da-slide\">\n\t\t\t\t\t<h2>Quality Control</h2>\n\t\t\t\t\t<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>\n\t\t\t\t\t<a href=\"details.html\" class=\"da-link\">shop now</a>\n\t\t\t\t\t<div class=\"da-img\"><img src=\"../images/slider4.png\" alt=\"image01\" /></div>\n\t\t\t\t</div>\n\t\t\t\t<nav class=\"da-arrows\">\n\t\t\t\t\t<span class=\"da-arrows-prev\"></span>\n\t\t\t\t\t<span class=\"da-arrows-next\"></span>\n\t\t\t\t</nav>\n\t\t\t</div>\n        </div>\n<!----start-cursual---->\n<div class=\"wrap\">\n<!----start-img-cursual---->\n\t<div id=\"owl-demo\" class=\"owl-carousel\">\n\t\t<div class=\"item\" onclick=\"location.href='details.html';\">\n\t\t\t<div class=\"cau_left\">\n\t\t\t\t<img class=\"lazyOwl\" data-src=\"../images/c1.jpg\" alt=\"Lazy Owl Image\">\n\t\t\t</div>\n\t\t\t<div class=\"cau_left\">\n\t\t\t\t<h4><a href=\"details.html\">branded shoes</a></h4>\n\t\t\t\t<a href=\"details.html\" class=\"btn\">shop</a>\n\t\t\t</div>\n\t\t</div>\t\n\t\t<div class=\"item\" onclick=\"location.href='details.html';\">\n\t\t\t<div class=\"cau_left\">\n\t\t\t\t<img class=\"lazyOwl\" data-src=\"../images/c2.jpg\" alt=\"Lazy Owl Image\">\n\t\t\t</div>\n\t\t\t<div class=\"cau_left\">\n\t\t\t\t<h4><a href=\"details.html\">branded tees</a></h4>\n\t\t\t\t<a href=\"details.html\" class=\"btn\">shop</a>\n\t\t\t</div>\n\t\t</div>\t\n\t\t<div class=\"item\" onclick=\"location.href='details.html';\">\n\t\t\t<div class=\"cau_left\">\n\t\t\t\t<img class=\"lazyOwl\" data-src=\"../images/c3.jpg\" alt=\"Lazy Owl Image\">\n\t\t\t</div>\n\t\t\t<div class=\"cau_left\">\n\t\t\t\t<h4><a href=\"details.html\">branded jeens</a></h4>\n\t\t\t\t<a href=\"details.html\" class=\"btn\">shop</a>\n\t\t\t</div>\n\t\t</div>\t\n\t\t<div class=\"item\" onclick=\"location.href='details.html';\">\n\t\t\t<div class=\"cau_left\">\n\t\t\t\t<img class=\"lazyOwl\" data-src=\"../images/c2.jpg\" alt=\"Lazy Owl Image\">\n\t\t\t</div>\n\t\t\t<div class=\"cau_left\">\n\t\t\t\t<h4><a href=\"details.html\">branded tees</a></h4>\n\t\t\t\t<a href=\"details.html\" class=\"btn\">shop</a>\n\t\t\t</div>\n\t\t</div>\t\n\t\t<div class=\"item\" onclick=\"location.href='details.html';\">\n\t\t\t<div class=\"cau_left\">\n\t\t\t\t<img class=\"lazyOwl\" data-src=\"../images/c1.jpg\" alt=\"Lazy Owl Image\">\n\t\t\t</div>\n\t\t\t<div class=\"cau_left\">\n\t\t\t\t<h4><a href=\"details.html\">branded shoes</a></h4>\n\t\t\t\t<a href=\"details.html\" class=\"btn\">shop</a>\n\t\t\t</div>\n\t\t</div>\t\n\t\t<div class=\"item\" onclick=\"location.href='details.html';\">\n\t\t\t<div class=\"cau_left\">\n\t\t\t\t<img class=\"lazyOwl\" data-src=\"../images/c2.jpg\" alt=\"Lazy Owl Image\">\n\t\t\t</div>\n\t\t\t<div class=\"cau_left\">\n\t\t\t\t<h4><a href=\"details.html\">branded tees</a></h4>\n\t\t\t\t<a href=\"details.html\" class=\"btn\">shop</a>\n\t\t\t</div>\n\t\t</div>\t\n\t\t<div class=\"item\" onclick=\"location.href='details.html';\">\n\t\t\t<div class=\"cau_left\">\n\t\t\t\t<img class=\"lazyOwl\" data-src=\"../images/c3.jpg\" alt=\"Lazy Owl Image\">\n\t\t\t</div>\n\t\t\t<div class=\"cau_left\">\n\t\t\t\t<h4><a href=\"details.html\">branded jeens</a></h4>\n\t\t\t\t<a href=\"details.html\" class=\"btn\">shop</a>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n\t<!----//End-img-cursual---->\n</div>\n<!-- start main1 -->\n<div class=\"main_bg1\">\n<div class=\"wrap\">\t\n\t<div class=\"main1\">\n\t\t<h2>featured products</h2>\n\t</div>\n</div>\n</div>\n<!-- start main -->\n<div class=\"main_bg\">\n<div class=\"wrap\">\t\n\t<div class=\"main\">\n\t\t<!-- start grids_of_3 -->\n\t\t<div class=\"grids_of_3\">\n\t\t\t<div class=\"grid1_of_3\">\n\t\t\t\t<a href=\"details.html\">\n\t\t\t\t\t<img src=\"../images/pic1.jpg\" alt=\"\"/>\n\t\t\t\t\t<h3>branded shoes</h3>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<h4>$300<span>indulge</span></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"b_btm\"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"grid1_of_3\">\n\t\t\t\t<a href=\"details.html\">\n\t\t\t\t\t<img src=\"../images/pic2.jpg\" alt=\"\"/>\n\t\t\t\t\t<h3>branded t-shirts</h3>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<h4>$300<span>indulge</span></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"b_btm\"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"grid1_of_3\">\n\t\t\t\t<a href=\"details.html\">\n\t\t\t\t\t<img src=\"../images/pic3.jpg\" alt=\"\"/>\n\t\t\t\t\t<h3>branded tees</h3>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<h4>$300<span>indulge</span></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"b_btm\"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"clear\"></div>\n\t\t</div>\n\t\t<div class=\"grids_of_3\">\n\t\t\t<div class=\"grid1_of_3\">\n\t\t\t\t<a href=\"details.html\">\n\t\t\t\t\t<img src=\"../images/pic4.jpg\" alt=\"\"/>\n\t\t\t\t\t<h3>branded bags</h3>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<h4>$300<span>indulge</span></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"b_btm\"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"grid1_of_3\">\n\t\t\t\t<a href=\"details.html\">\n\t\t\t\t\t<img src=\"../images/pic5.jpg\" alt=\"\"/>\n\t\t\t\t\t<h3>ems women bag</h3>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<h4>$300<span>indulge</span></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"b_btm\"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"grid1_of_3\">\n\t\t\t\t<a href=\"details.html\">\n\t\t\t\t\t<img src=\"../images/pic6.jpg\" alt=\"\"/>\n\t\t\t\t\t<h3>branded cargos</h3>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<h4>$300<span>indulge</span></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"b_btm\"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"clear\"></div>\n\t\t</div>\t\n\t\t<!-- end grids_of_3 -->\n\t</div>\n</div>\n</div>\t\n<!-- start footer -->\n<div class=\"footer_bg\">\n<div class=\"wrap\">\t\n\t<div class=\"footer\">\n\t\t<!-- start grids_of_4 -->\t\n\t\t<div class=\"grids_of_4\">\n\t\t\t<div class=\"grid1_of_4\">\n\t\t\t\t<h4>featured sale</h4>\n\t\t\t\t<ul class=\"f_nav\">\n\t\t\t\t\t<li><a href=\"\">alexis Hudson</a></li>\n\t\t\t\t\t<li><a href=\"\">american apparel</a></li>\n\t\t\t\t\t<li><a href=\"\">ben sherman</a></li>\n\t\t\t\t\t<li><a href=\"\">big buddha</a></li>\n\t\t\t\t\t<li><a href=\"\">channel</a></li>\n\t\t\t\t\t<li><a href=\"\">christian audigier</a></li>\n\t\t\t\t\t<li><a href=\"\">coach</a></li>\n\t\t\t\t\t<li><a href=\"\">cole haan</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"grid1_of_4\">\n\t\t\t\t<h4>mens store</h4>\n\t\t\t\t<ul class=\"f_nav\">\n\t\t\t\t\t<li><a href=\"\">alexis Hudson</a></li>\n\t\t\t\t\t<li><a href=\"\">american apparel</a></li>\n\t\t\t\t\t<li><a href=\"\">ben sherman</a></li>\n\t\t\t\t\t<li><a href=\"\">big buddha</a></li>\n\t\t\t\t\t<li><a href=\"\">channel</a></li>\n\t\t\t\t\t<li><a href=\"\">christian audigier</a></li>\n\t\t\t\t\t<li><a href=\"\">coach</a></li>\n\t\t\t\t\t<li><a href=\"\">cole haan</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"grid1_of_4\">\n\t\t\t\t<h4>women store</h4>\n\t\t\t\t<ul class=\"f_nav\">\n\t\t\t\t\t<li><a href=\"\">alexis Hudson</a></li>\n\t\t\t\t\t<li><a href=\"\">american apparel</a></li>\n\t\t\t\t\t<li><a href=\"\">ben sherman</a></li>\n\t\t\t\t\t<li><a href=\"\">big buddha</a></li>\n\t\t\t\t\t<li><a href=\"\">channel</a></li>\n\t\t\t\t\t<li><a href=\"\">christian audigier</a></li>\n\t\t\t\t\t<li><a href=\"\">coach</a></li>\n\t\t\t\t\t<li><a href=\"\">cole haan</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"grid1_of_4\">\n\t\t\t\t<h4>quick links</h4>\n\t\t\t\t<ul class=\"f_nav\">\n\t\t\t\t\t<li><a href=\"\">alexis Hudson</a></li>\n\t\t\t\t\t<li><a href=\"\">american apparel</a></li>\n\t\t\t\t\t<li><a href=\"\">ben sherman</a></li>\n\t\t\t\t\t<li><a href=\"\">big buddha</a></li>\n\t\t\t\t\t<li><a href=\"\">channel</a></li>\n\t\t\t\t\t<li><a href=\"\">christian audigier</a></li>\n\t\t\t\t\t<li><a href=\"\">coach</a></li>\n\t\t\t\t\t<li><a href=\"\">cole haan</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"clear\"></div>\n\t\t</div>\n\t</div>\n</div>\n</div>\t\n<!-- start footer -->\n<div class=\"footer_bg1\">\n<div class=\"wrap\">\n\t<div class=\"footer\">\n\t\t<!-- scroll_top_btn -->\n\t    <script type=\"text/javascript\">\n\t\t\t$(document).ready(function() {\n\t\t\t\n\t\t\t\tvar defaults = {\n\t\t  \t\t\tcontainerID: 'toTop', // fading element id\n\t\t\t\t\tcontainerHoverID: 'toTopHover', // fading element hover id\n\t\t\t\t\tscrollSpeed: 1200,\n\t\t\t\t\teasingType: 'linear' \n\t\t \t\t};\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t$().UItoTop({ easingType: 'easeOutQuart' });\n\t\t\t\t\n\t\t\t});\n\t\t</script>\n\t\t <a href=\"#\" id=\"toTop\" style=\"display: block;\"><span id=\"toTopHover\" style=\"opacity: 1;\"></span></a>\n\t\t<!--end scroll_top_btn -->\n\t\t<div class=\"copy\">\n\t\t\t<p class=\"link\">&copy;  All rights reserved | Template by&nbsp;&nbsp;<a href=\"http://w3layouts.com/\"> W3Layouts</a></p>\n\t\t</div>\n\t\t<div class=\"clear\"></div>\n\t</div>\n</div>\n</div>\n";
var HEADER_BG = " \n<div class=\"header_bg\">\n <div class=\"wrap\">\n\t<div class=\"header\">\n\t\t<div class=\"logo\">\n\t\t\t<a href=\"\"><img src=\"../images/logo.png\" alt=\"\" class=\"main-page\"/> </a>\n\t\t</div>\n\t\t<div class=\"h_icon\">\n\t\t<ul class=\"icon1 sub-icon1\">\n\t\t\t<li><a class=\"active-icon c1\" href=\"#\"><i>$300</i></a>\n\t\t\t\t<ul class=\"sub-icon1 list\">\n\t\t\t\t\t<li><h3>shopping cart empty</h3><a href=\"\"></a></li>\n\t\t\t\t\t<li><p>if items in your wishlit are missing, <a href=\"\" class=\"contactUs-page\">contact us</a> to view them</p></li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t</ul>\n\t\t</div>\n\t\t<div class=\"h_search\">\n    \t\t<form>\n    \t\t\t<input type=\"text\" value=\"\">\n    \t\t\t<input type=\"submit\" value=\"\">\n    \t\t</form>\n\t\t</div>\n\t\t<div class=\"clear\"></div>\n\t</div>\n </div>\n</div>\n"; // ---------------------------------------------------------

var HEADER_MENU_NAV = "\n\n<div class=\"top-nav\">\n  <nav class=\"nav\">\n\t<a href=\"\" id=\"w3-menu-trigger\"> </a>\n\t<ul class=\"nav-list\">\n\t\t<li class=\"nav-item active\"><a href=\"\" class=\"main-page\">Home</a></li>\n\t\t<li class=\"nav-item\"><a href=\"\" class=\"sale-page\">sale</a></li>\n\t\t<li class=\"nav-item\"><a href=\"\" class=\"handbags-page\">handbags</a></li>\n\t\t<li class=\"nav-item\"><a href=\"\" class=\"accessories-page\">accessories</a></li>\n\t\t<li class=\"nav-item\"><a href=\"\" class=\"wallets-page\">wallets</a></li>\n\t\t<li class=\"nav-item\"><a href=\"\" class=\"shoes-page\">shoes</a></li>\n\t\t<li class=\"nav-item\"><a href=\"\" class=\"services-page\">services</a></li>\n\t\t<li class=\"nav-item\"><a href=\"\" class=\"contactUs-page\">contact us</a></li>\n\t</ul>\n  </nav>\n <div class=\"search_box\">\n\t<form>\n\t\t<input type=\"text\" value=\"Search\" onfocus=\"this.value = '';\"\n\t\t\tonblur=\"if (this.value == '') {this.value = 'Search';}\"><input type=\"submit\" value=\"\">\n\t</form>\n </div>\n <div class=\"clear\"></div>\n</div>\n<div class=\"clear\"></div>\n";
var FOOTER_BG = "\n<div class=\"footer_bg\">\n    <div class=\"wrap\">\n        <div class=\"footer\">\n            <!-- start grids_of_4 -->\n            <div class=\"grids_of_4\">\n                <div class=\"grid1_of_4\">\n                    <h4>featured sale</h4>\n                    <ul class=\"f_nav\">\n                        <li><a href=\"\">alexis Hudson</a></li>\n                        <li><a href=\"\">american apparel</a></li>\n                        <li><a href=\"\">ben sherman</a></li>\n                        <li><a href=\"\">big buddha</a></li>\n                        <li><a href=\"\">channel</a></li>\n                        <li><a href=\"\">christian audigier</a></li>\n                        <li><a href=\"\">coach</a></li>\n                        <li><a href=\"\">cole haan</a></li>\n                    </ul>\n                </div>\n                <div class=\"grid1_of_4\">\n                    <h4>mens store</h4>\n                    <ul class=\"f_nav\">\n                        <li><a href=\"\">alexis Hudson</a></li>\n                        <li><a href=\"\">american apparel</a></li>\n                        <li><a href=\"\">ben sherman</a></li>\n                        <li><a href=\"\">big buddha</a></li>\n                        <li><a href=\"\">channel</a></li>\n                        <li><a href=\"\">christian audigier</a></li>\n                        <li><a href=\"\">coach</a></li>\n                        <li><a href=\"\">cole haan</a></li>\n                    </ul>\n                </div>\n                <div class=\"grid1_of_4\">\n                    <h4>women store</h4>\n                    <ul class=\"f_nav\">\n                        <li><a href=\"\">alexis Hudson</a></li>\n                        <li><a href=\"\">american apparel</a></li>\n                        <li><a href=\"\">ben sherman</a></li>\n                        <li><a href=\"\">big buddha</a></li>\n                        <li><a href=\"\">channel</a></li>\n                        <li><a href=\"\">christian audigier</a></li>\n                        <li><a href=\"\">coach</a></li>\n                        <li><a href=\"\">cole haan</a></li>\n                    </ul>\n                </div>\n                <div class=\"grid1_of_4\">\n                    <h4>quick links</h4>\n                    <ul class=\"f_nav\">\n                        <li><a href=\"\">alexis Hudson</a></li>\n                        <li><a href=\"\">american apparel</a></li>\n                        <li><a href=\"\">ben sherman</a></li>\n                        <li><a href=\"\">big buddha</a></li>\n                        <li><a href=\"\">channel</a></li>\n                        <li><a href=\"\">christian audigier</a></li>\n                        <li><a href=\"\">coach</a></li>\n                        <li><a href=\"\">cole haan</a></li>\n                    </ul>\n                </div>\n                <div class=\"clear\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- start footer -->\n<div class=\"footer_bg1\">\n    <div class=\"wrap\">\n        <div class=\"footer\">\n            <!-- scroll_top_btn -->\n            <script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\">\n                $(document).ready(function () {\n\n                    var defaults = {\n                        containerID: 'toTop', // fading element id\n                        containerHoverID: 'toTopHover', // fading element hover id\n                        scrollSpeed: 1200,\n                        easingType: 'linear'\n                    };\n\n\n                    $().UItoTop({ easingType: 'easeOutQuart' });\n\n                });\n            </script>\n            <a href=\"\" id=\"toTop\" style=\"display: block;\"><span id=\"toTopHover\" style=\"opacity: 1;\"></span></a>\n            <!-- end scroll_top_btn -->\n            <div class=\"copy\">\n            <p class=\"link\">&copy; All rights reserved <a href=\"https://github.com/Skaijun/web2.0\"> by OOO \"Anja\n                    & Co.: [Max, Dima];\"</a></p>\n        </div>\n            <div class=\"clear\"></div>\n        </div>\n    </div>\n</div>\n";
DOM_STATE_HTML.MAIN_PAGE = "\n\n<!-- start header -->\n".concat(HEADER_BG, "\n<div class=\"header_btm\">\n    <div class=\"wrap\">\n        <div class=\"header_sub\">\n            <div class=\"h_menu\">\n                <ul>\n                    <li class=\"active\"><a href=\"\" class=\"main-page\">Home</a></li> |\n                    <li><a href=\"\" class=\"sale-page\">sale</a></li> |\n                    <li><a href=\"\" class=\"handbags-page\">handbags</a></li> |\n                    <li><a href=\"\" class=\"accessories-page\">accessories</a></li> |\n                    <li><a href=\"\" class=\"wallets-page\">wallets</a></li> |\n                    <li><a href=\"\" class=\"shoes-page\">shoes</a></li> |\n                    <li><a href=\"\" class=\"services-page\">services</a></li> |\n                    <li><a href=\"\" class=\"contactUs-page\">contact us</a></li>\n                </ul>\n            </div>\n\t\t\t").concat(HEADER_MENU_NAV, "\n        </div>\n    </div>\n</div>\n\n<!--      MAIN_PAGE            -->\n\n<div id=\"da-slider\" class=\"da-slider\">\n<div class=\"da-slide\">\n    <h2>welcome to aditii</h2>\n    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her\n        hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line\n        Lane.</p>\n    <a href=\"\" class=\"da-link\">shop now</a>\n    <div class=\"da-img\"><img src=\"../images/slider1.png\" alt=\"image01\" /></div>\n</div>\n<div class=\"da-slide\">\n    <h2>Easy management</h2>\n    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the\n        blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language\n        ocean.</p>\n    <a href=\"\" class=\"da-link\">shop now</a>\n    <div class=\"da-img\"><img src=\"../images/slider2.png\" alt=\"image01\" /></div>\n</div>\n<div class=\"da-slide\">\n    <h2>Revolution</h2>\n    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a\n        paradisematic country, in which roasted parts of sentences fly into your mouth.</p>\n    <a href=\"\" class=\"da-link\">shop now</a>\n    <div class=\"da-img\"><img src=\"../images/slider3.png\" alt=\"image01\" /></div>\n</div>\n<div class=\"da-slide\">\n    <h2>Quality Control</h2>\n    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life\n        One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World\n        of Grammar.</p>\n    <a href=\"\" class=\"da-link\">shop now</a>\n    <div class=\"da-img\"><img src=\"../images/slider4.png\" alt=\"image01\" /></div>\n</div>\n<nav class=\"da-arrows\">\n    <span class=\"da-arrows-prev\"></span>\n    <span class=\"da-arrows-next\"></span>\n</nav>\n\n</div>\n<!-- -- start-cursual-- -->\n<div class=\"wrap\">\n  <div id=\"owl-demo\" class=\"owl-carousel\">\n    <div class=\"item\">\n        <div class=\"cau_left\">\n            <img class=\"lazyOwl\" data-src=\"../images/c1.jpg\" alt=\"Lazy Owl Image\">\n        </div>\n        <div class=\"cau_left\">\n            <h4><a href=\"\" class=\"details-page\">branded shoes</a></h4>\n            <a href=\"\" class=\"btn details-page\">shop</a>\n        </div>\n    </div>\n    <div class=\"item\">\n        <div class=\"cau_left\">\n            <img class=\"lazyOwl\" data-src=\"../images/c2.jpg\" alt=\"Lazy Owl Image\">\n        </div>\n        <div class=\"cau_left\">\n            <h4><a href=\"\" class=\"details-page\">branded tees</a></h4>\n            <a href=\"\" class=\"btn details-page\">shop</a>\n        </div>\n    </div>\n    <div class=\"item\">\n        <div class=\"cau_left\">\n            <img class=\"lazyOwl\" data-src=\"../images/c3.jpg\" alt=\"Lazy Owl Image\">\n        </div>\n        <div class=\"cau_left\">\n            <h4><a href=\"\" class=\"details-page\">branded jeens</a></h4>\n            <a href=\"\" class=\"btn details-page\">shop</a>\n        </div>\n    </div>\n    <div class=\"item\">\n        <div class=\"cau_left\">\n            <img class=\"lazyOwl\" data-src=\"../images/c2.jpg\" alt=\"Lazy Owl Image\">\n        </div>\n        <div class=\"cau_left\">\n            <h4><a href=\"\" class=\"details-page\">branded tees</a></h4>\n            <a href=\"\" class=\"btn details-page\">shop</a>\n        </div>\n    </div>\n    <div class=\"item\">\n        <div class=\"cau_left\">\n            <img class=\"lazyOwl\" data-src=\"../images/c1.jpg\" alt=\"Lazy Owl Image\">\n        </div>\n        <div class=\"cau_left\">\n\t\t<h4><a href=\"\" class=\"details-page\">branded shoes</a></h4>\n            <a href=\"\" class=\"btn details-page\">shop</a>\n        </div>\n    </div>\n    <div class=\"item\">\n        <div class=\"cau_left\">\n            <img class=\"lazyOwl\" data-src=\"../images/c2.jpg\" alt=\"Lazy Owl Image\">\n        </div>\n        <div class=\"cau_left\">\n\t\t<h4><a href=\"\" class=\"details-page\">branded tees</a></h4>\n            <a href=\"\" class=\"btn details-page\">shop</a>\n        </div>\n    </div>\n    <div class=\"item\">\n        <div class=\"cau_left\">\n            <img class=\"lazyOwl\" data-src=\"../images/c3.jpg\" alt=\"Lazy Owl Image\">\n        </div>\n        <div class=\"cau_left\">\n            <h4><a href=\"\" class=\"details-page\">branded jeens</a></h4>\n            <a href=\"\" class=\"btn details-page\">shop</a>\n        </div>\n    </div>\n  </div>\n</div>\n<!-- start main1 -->\n<div class=\"main_bg1\">\n  <div class=\"wrap\">\n    <div class=\"main1\">\n        <h2>featured products</h2>\n    </div>\n  </div>\n</div>\n<!-- start main -->\n<div class=\"main_bg\">\n<div class=\"wrap\">\n    <div class=\"main\">\n        <!-- start grids_of_3 -->\n        <div class=\"grids_of_3\">\n            <div class=\"grid1_of_3\">\n                <a href=\"\" class=\"details-page\">\n                    <img src=\"../images/pic1.jpg\" alt=\"\" class=\"details-page\" />\n                    <h3>branded shoes</h3>\n                    <div class=\"price\">\n                        <h4>$300<span class=\"details-page\">indulge</span></h4>\n                    </div>\n                    <span class=\"b_btm\"></span>\n                </a>\n            </div>\n            <div class=\"grid1_of_3\">\n                <a href=\"\" class=\"details-page\">\n                    <img src=\"../images/pic2.jpg\" alt=\"\" class=\"details-page\" />\n                    <h3>branded t-shirts</h3>\n                    <div class=\"price\">\n                        <h4>$300<span class=\"details-page\">indulge</span></h4>\n                    </div>\n                    <span class=\"b_btm\"></span>\n                </a>\n            </div>\n            <div class=\"grid1_of_3\">\n                <a href=\"\" class=\"details-page\">\n                    <img src=\"../images/pic3.jpg\" alt=\"\" class=\"details-page\" />\n                    <h3>branded tees</h3>\n                    <div class=\"price\">\n                        <h4>$300<span class=\"details-page\">indulge</span></h4>\n                    </div>\n                    <span class=\"b_btm\"></span>\n                </a>\n            </div>\n            <div class=\"clear\"></div>\n        </div>\n        <div class=\"grids_of_3\">\n            <div class=\"grid1_of_3\">\n                <a href=\"\" class=\"details-page\">\n                    <img src=\"../images/pic4.jpg\" alt=\"\" class=\"details-page\" />\n                    <h3>branded bags</h3>\n                    <div class=\"price\">\n                        <h4>$300<span class=\"details-page\">indulge</span></h4>\n                    </div>\n                    <span class=\"b_btm\"></span>\n                </a>\n            </div>\n            <div class=\"grid1_of_3\">\n                <a href=\"\" class=\"details-page\">\n                    <img src=\"../images/pic5.jpg\" alt=\"\" class=\"details-page\" />\n                    <h3>ems women bag</h3>\n                    <div class=\"price\">\n                        <h4>$300<span class=\"details-page\">indulge</span></h4>\n                    </div>\n                    <span class=\"b_btm\"></span>\n                </a>\n            </div>\n            <div class=\"grid1_of_3\">\n                <a href=\"\" class=\"details-page\">\n                    <img src=\"../images/pic6.jpg\" alt=\"\" class=\"details-page\" />\n                    <h3>branded cargos</h3>\n                    <div class=\"price\">\n                        <h4>$300<span class=\"details-page\">indulge</span></h4>\n                    </div>\n                    <span class=\"b_btm\"></span>\n                </a>\n            </div>\n            <div class=\"clear\"></div>\n        </div>\n    </div>\n</div>\n</div> \n\n").concat(FOOTER_BG); // --------------------------------------------------------------------------------

DOM_STATE_HTML.SALE_PAGE_FULL = "\n\n<!-- start header -->\n".concat(HEADER_BG, "\n<div class=\"header_btm\">\n<div class=\"wrap\">\n\t<div class=\"header_sub\">\n\t\t<div class=\"h_menu\">\n\t\t\t<ul>              \n                <li><a href=\"\" class=\"main-page\">Home</a></li> |\n                <li class=\"active\"><a href=\"\" class=\"sale-page\">sale</a></li> |\n                <li><a href=\"\" class=\"handbags-page\">handbags</a></li> |\n                <li><a href=\"\" class=\"accessories-page\">accessories</a></li> |\n                <li><a href=\"\" class=\"wallets-page\">wallets</a></li> |\n                <li><a href=\"\" class=\"shoes-page\">shoes</a></li> |\n                <li><a href=\"\" class=\"services-page\">services</a></li> |\n                <li><a href=\"\" class=\"contactUs-page\">contact us</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t\t").concat(HEADER_MENU_NAV, "\n</div>\n</div>\n</div>\n<!-- start main -->\n<div class=\"main_bg\">\n<div class=\"wrap\">\t\n\t<div class=\"main\">\n\t<!-- start gallery_sale  -->\n\t\t\t<div class=\"gallery1\">\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<ul id=\"filters\" class=\"clearfix\">\n\t\t\t\t\t\t<li><span class=\"filter active\" data-filter=\"men women watches accessories\">All</span></li>\n\t\t\t\t\t\t<li><span class=\"filter\" data-filter=\"men\">men</span></li>\n\t\t\t\t\t\t<li><span class=\"filter\" data-filter=\"women\">women</span></li>\n\t\t\t\t\t\t<li><span class=\"filter\" data-filter=\"watches\">Watches</span></li>\n\t\t\t\t\t\t<li><span class=\"filter\" data-filter=\"accessories\">Accessories</span></li>\n\t\t\t\t\t</ul>\n\t\t\t<div id=\"portfoliolist\">\n\t\t\t<div class=\"portfolio women\" data-cat=\"women\">\n\t\t\t\t<div class=\"portfolio-wrapper\">\t\t\t\t\n\t\t\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t\t<img src=\"../images/sale_pic1.jpg\"  alt=\"Image 2\" class=\"details-page\"/>\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"label\">\n\t\t\t\t\t\t<div class=\"label-text\">\n\t\t\t\t\t\t\t<a class=\"text-title\">ethnic fashion guide: sarees</a>\n\t\t\t\t\t\t\t<span class=\"text-category\">indulge</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"label-bg\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\t\n\t\t\t<div class=\"portfolio watches\" data-cat=\"watches\">\n\t\t\t\t<div class=\"portfolio-wrapper\">\t\t\t\n\t\t\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t\t<img src=\"../images/sale_pic2.jpg\"  alt=\"Image 2\" class=\"details-page\"/>\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"label\">\n\t\t\t\t\t\t<div class=\"label-text\">\n\t\t\t\t\t\t\t<a class=\"text-title\">fasttrack: watches</a>\n\t\t\t\t\t\t\t<span class=\"text-category\">indulge</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"label-bg\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\n\t\t\t<div class=\"portfolio women\" data-cat=\"women\">\n\t\t\t\t<div class=\"portfolio-wrapper\">\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t\t<img src=\"../images/sale_pic3.jpg\"  alt=\"Image 2\" class=\"details-page\"/>\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"label\">\n\t\t\t\t\t\t<div class=\"label-text\">\n\t\t\t\t\t\t\t<a class=\"text-title\">ethnic fashion guide: dresses</a>\n\t\t\t\t\t\t\t<span class=\"text-category\">indulge</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"label-bg\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\t\n\t\t\t<div class=\"portfolio men\" data-cat=\"men\">\n\t\t\t\t<div class=\"portfolio-wrapper\">\t\t\t\n\t\t\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t\t<img src=\"../images/sale_pic4.jpg\"  alt=\"Image 2\" class=\"details-page\"/>\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"label\">\n\t\t\t\t\t\t<div class=\"label-text\">\n\t\t\t\t\t\t\t<a class=\"text-title\">ethnic fashion guide: tees</a>\n\t\t\t\t\t\t\t<span class=\"text-category\">indulge</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"label-bg\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t<div class=\"portfolio men\" data-cat=\"men\">\n\t\t\t\t<div class=\"portfolio-wrapper\">\n\t\t\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t\t<img src=\"../images/sale_pic5.jpg\"  alt=\"Image 2\" class=\"details-page\"/>\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"label\">\n\t\t\t\t\t\t<div class=\"label-text\">\n\t\t\t\t\t\t\t<a class=\"text-title\">ethnic fashion guide: tees</a>\n\t\t\t\t\t\t\t<span class=\"text-category\">indulge</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"label-bg\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\t\t\t<div class=\"portfolio watches\" data-cat=\"watches\">\n\t\t\t\t<div class=\"portfolio-wrapper\">\t\t\t\n\t\t\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t\t<img src=\"../images/sale_pic6.jpg\"  alt=\"Image 2\" class=\"details-page\"/>\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"label\">\n\t\t\t\t\t\t<div class=\"label-text\">\n\t\t\t\t\t\t\t<a class=\"text-title\">fasttrack: watches</a>\n\t\t\t\t\t\t\t<span class=\"text-category\">indulge</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"label-bg\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t<div class=\"portfolio women\" data-cat=\"women\">\n\t\t\t\t<div class=\"portfolio-wrapper\">\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t\t<img src=\"../images/sale_pic7.jpg\"  alt=\"Image 2\" class=\"details-page\"/>\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"label\">\n\t\t\t\t\t\t<div class=\"label-text\">\n\t\t\t\t\t\t\t<a class=\"text-title\">Sonor's Design</a>\n\t\t\t\t\t\t\t<span class=\"text-category\">indulge</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"label-bg\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\t\n\t\t\t<div class=\"portfolio accessories\" data-cat=\"accessories\">\n\t\t\t\t<div class=\"portfolio-wrapper\">\t\t\t\n\t\t\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t\t<img src=\"../images/sale_pic8.jpg\"  alt=\"Image 2\" class=\"details-page\"/>\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"label\">\n\t\t\t\t\t\t<div class=\"label-text\">\n\t\t\t\t\t\t\t<a class=\"text-title\">Typography Company</a>\n\t\t\t\t\t\t\t<span class=\"text-category\">indulge</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"label-bg\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t<div class=\"portfolio accessories\" data-cat=\"accessories\">\n\t\t\t\t<div class=\"portfolio-wrapper\">\n\t\t\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t\t<img src=\"../images/sale_pic9.jpg\"  alt=\"Image 2\" class=\"details-page\"/>\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"label\">\n\t\t\t\t\t\t<div class=\"label-text\">\n\t\t\t\t\t\t\t<a class=\"text-title\">Weatherette</a>\n\t\t\t\t\t\t\t<span class=\"text-category\">indulge</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"label-bg\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\t\t\t<div class=\"portfolio accessories\" data-cat=\"accessories\">\n\t\t\t\t<div class=\"portfolio-wrapper\">\t\t\t\n\t\t\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t\t<img src=\"../images/sale_pic10.jpg\"  alt=\"Image 2\" class=\"details-page\"/>\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"label\">\n\t\t\t\t\t\t<div class=\"label-text\">\n\t\t\t\t\t\t\t<a class=\"text-title\">BMF</a>\n\t\t\t\t\t\t\t<span class=\"text-category\">indulge</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"label-bg\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t\t\t\n\t\t\t<div class=\"portfolio accessories\" data-cat=\"accessories\">\n\t\t\t\t<div class=\"portfolio-wrapper\">\t\t\t\n\t\t\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t\t<img src=\"../images/sale_pic11.jpg\"  alt=\"Image 2\" class=\"details-page\"/>\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"label\">\n\t\t\t\t\t\t<div class=\"label-text\">\n\t\t\t\t\t\t\t<a class=\"text-title\">Techlion</a>\n\t\t\t\t\t\t\t<span class=\"text-category\">indulge</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"label-bg\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t\n\t\t\t<div class=\"portfolio women\" data-cat=\"women\">\n\t\t\t\t<div class=\"portfolio-wrapper\">\t\t\t\n\t\t\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t\t<img src=\"../images/sale_pic12.jpg\"  alt=\"Image 2\" class=\"details-page\"/>\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"label\">\n\t\t\t\t\t\t<div class=\"label-text\">\n\t\t\t\t\t\t\t<a class=\"text-title\">KittyPic</a>\n\t\t\t\t\t\t\t<span class=\"text-category\">indulge</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"label-bg\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t</div>\n\t</div>\n\t<script type=\"text/javascript\" src=\"../js/Components/src/fliplightbox.min.js\"></script>\n\t<script type=\"text/javascript\">$('body').flipLightBox()</script>\n\t<div class=\"clear\"> </div>\n\t</div>\n\t</div>\n</div>\n</div>\t\t\n<!-- start footer -->\n").concat(FOOTER_BG, "\n"); // --------------------------------------------------------------------------------

DOM_STATE_HTML.HANDBAGS_PAGE_FULL = "\n\n<!-- start header -->\n".concat(HEADER_BG, "\n<div class=\"header_btm\">\n<div class=\"wrap\">\n\t<div class=\"header_sub\">\n\t\t<div class=\"h_menu\">\n\t\t   <ul>\n             <li><a href=\"\" class=\"main-page\">Home</a></li> |\n             <li><a href=\"\" class=\"sale-page\">sale</a></li> |\n             <li class=\"active\"><a href=\"\" class=\"handbags-page\">handbags</a></li> |\n             <li><a href=\"\" class=\"accessories-page\">accessories</a></li> |\n             <li><a href=\"\" class=\"wallets-page\">wallets</a></li> |\n             <li><a href=\"\" class=\"shoes-page\">shoes</a></li> |\n             <li><a href=\"\" class=\"services-page\">services</a></li> |\n             <li><a href=\"\" class=\"contactUs-page\">contact us</a></li>\n           </ul>\n\t\t</div>\n        ").concat(HEADER_MENU_NAV, "\n</div>\n</div>\n</div>\n<!-- start main -->\n<div class=\"main_bg\">\n<div class=\"wrap\">\t\n\t<div class=\"main\">\n\t\t<h2 class=\"style top\">featured handbags</h2>\n\t\t<!-- start grids_of_3 -->\n\t\t<div class=\"grids_of_3\">\n\t\t\t<div class=\"grid1_of_3\">\n\t\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t<img src=\"../images/w_pic1.jpg\" alt=\"\" class=\"details-page\"/>\n\t\t\t\t\t<h3>branded handbags</h3>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<h4>$299<span class=\"details-page\">indulge</span></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"b_btm\"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"grid1_of_3\">\n\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t<img src=\"../images/w_pic2.jpg\" alt=\"\" class=\"details-page\"/>\n\t\t\t\t\t<h3>branded handbags</h3>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<h4>$299 <span class=\"details-page\">indulge</span></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"b_btm\"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"grid1_of_3\">\n\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t<img src=\"../images/w_pic3.jpg\" alt=\"\" class=\"details-page\"/>\n\t\t\t\t\t<h3>branded handbags</h3>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<h4>$299<span class=\"details-page\">indulge</span></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"b_btm\"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"clear\"></div>\n\t\t</div>\n\t\t<div class=\"grids_of_3\">\n\t\t\t<div class=\"grid1_of_3\">\n\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t<img src=\"../images/w_pic4.jpg\" alt=\"\" class=\"details-page\"/>\n\t\t\t\t\t<h3>branded handbags</h3>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<h4>$299<span class=\"details-page\">indulge</span></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"b_btm\"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"grid1_of_3\">\n\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t<img src=\"../images/w_pic5.jpg\" alt=\"\" class=\"details-page\"/>\n\t\t\t\t\t<h3>branded handbags</h3>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<h4>$299<span class=\"details-page\">indulge</span></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"b_btm\"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"grid1_of_3\">\n\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t<img src=\"../images/w_pic6.jpg\" alt=\"\" class=\"details-page\"/>\n\t\t\t\t\t<h3>branded handbags</h3>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<h4>$299<span class=\"details-page\">indulge</span></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"b_btm\"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"clear\"></div>\n\t\t</div>\n\t</div>\n</div>\n</div>\t\n<!-- start footer -->\n").concat(FOOTER_BG, "\n"); // --------------------------------------------------------------------------------

DOM_STATE_HTML.ACCESSORIES_PAGE_FULL = "\n\n<!-- start header -->\n".concat(HEADER_BG, "\n\t<div class=\"header_btm\">\n\t\t<div class=\"wrap\">\n\t\t\t<div class=\"header_sub\">\n\t\t\t\t<div class=\"h_menu\">\n\t\t\t\t\t<ul>\n                        <li><a href=\"\" class=\"main-page\">Home</a></li> |\n                        <li><a href=\"\" class=\"sale-page\">sale</a></li> |\n                        <li><a href=\"\" class=\"handbags-page\">handbags</a></li> |\n                        <li class=\"active\"><a href=\"\" class=\"accessories-page\">accessories</a></li> |\n                        <li><a href=\"\" class=\"wallets-page\">wallets</a></li> |\n                        <li><a href=\"\" class=\"shoes-page\">shoes</a></li> |\n                        <li><a href=\"\" class=\"services-page\">services</a></li> |\n                        <li><a href=\"\" class=\"contactUs-page\">contact us</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t").concat(HEADER_MENU_NAV, "\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- start main -->\n\t<div class=\"main_bg\">\n\t\t<div class=\"wrap\">\n\t\t\t<div class=\"main\">\n\t\t\t\t<h2 class=\"style top\">accessories</h2>\n\t\t\t\t<!-- start grids_of_3 -->\n\t\t\t\t<div class=\"grids_of_3\">\n            <div class=\"grid1_of_3\">\n                <a href=\"\" class=\"details-page\">\n                    <img src=\"../images/pic1.jpg\" alt=\"\" class=\"details-page\" />\n                    <h3>branded shoes</h3>\n                    <div class=\"price\">\n                        <h4>$300<span class=\"details-page\">indulge</span></h4>\n                    </div>\n                    <span class=\"b_btm\"></span>\n                </a>\n            </div>\n            <div class=\"grid1_of_3\">\n                <a href=\"\" class=\"details-page\">\n                    <img src=\"../images/pic2.jpg\" alt=\"\" class=\"details-page\" />\n                    <h3>branded t-shirts</h3>\n                    <div class=\"price\">\n                        <h4>$300<span class=\"details-page\">indulge</span></h4>\n                    </div>\n                    <span class=\"b_btm\"></span>\n                </a>\n            </div>\n            <div class=\"grid1_of_3\">\n                <a href=\"\" class=\"details-page\">\n                    <img src=\"../images/pic3.jpg\" alt=\"\" class=\"details-page\" />\n                    <h3>branded tees</h3>\n                    <div class=\"price\">\n                        <h4>$300<span class=\"details-page\">indulge</span></h4>\n                    </div>\n                    <span class=\"b_btm\"></span>\n                </a>\n            </div>\n            <div class=\"clear\"></div>\n        </div>\n        <div class=\"grids_of_3\">\n            <div class=\"grid1_of_3\">\n                <a href=\"\" class=\"details-page\">\n                    <img src=\"../images/pic4.jpg\" alt=\"\" class=\"details-page\" />\n                    <h3>branded bags</h3>\n                    <div class=\"price\">\n                        <h4>$300<span class=\"details-page\">indulge</span></h4>\n                    </div>\n                    <span class=\"b_btm\"></span>\n                </a>\n            </div>\n            <div class=\"grid1_of_3\">\n                <a href=\"\" class=\"details-page\">\n                    <img src=\"../images/pic5.jpg\" alt=\"\" class=\"details-page\" />\n                    <h3>ems women bag</h3>\n                    <div class=\"price\">\n                        <h4>$300<span class=\"details-page\">indulge</span></h4>\n                    </div>\n                    <span class=\"b_btm\"></span>\n                </a>\n            </div>\n            <div class=\"grid1_of_3\">\n                <a href=\"\" class=\"details-page\">\n                    <img src=\"../images/pic6.jpg\" alt=\"\" class=\"details-page\" />\n                    <h3>branded cargos</h3>\n                    <div class=\"price\">\n                        <h4>$300<span class=\"details-page\">indulge</span></h4>\n                    </div>\n                    <span class=\"b_btm\"></span>\n                </a>\n            </div>\n\t\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- start footer -->\n    ").concat(FOOTER_BG, "\n"); // --------------------------------------------------------------------------------

DOM_STATE_HTML.WALLETS_PAGE_FULL = "\n\n<!-- start header -->\n".concat(HEADER_BG, "\n<div class=\"header_btm\">\n<div class=\"wrap\">\n\t<div class=\"header_sub\">\n\t\t <div class=\"h_menu\">\n           <ul>\n            <li><a href=\"\" class=\"main-page\">Home</a></li> |\n            <li><a href=\"\" class=\"sale-page\">sale</a></li> |\n            <li><a href=\"\" class=\"handbags-page\">handbags</a></li> |\n            <li><a href=\"\" class=\"accessories-page\">accessories</a></li> |\n            <li class=\"active\"><a href=\"\" class=\"wallets-page\">wallets</a></li> |\n            <li><a href=\"\" class=\"shoes-page\">shoes</a></li> |\n            <li><a href=\"\" class=\"services-page\">services</a></li> |\n            <li><a href=\"\" class=\"contactUs-page\">contact us</a></li>\n          </ul>\n\t\t </div>\n\t\t ").concat(HEADER_MENU_NAV, "\n</div>\n</div>\n</div>\n<!-- start main -->\n<div class=\"main_bg\">\n<div class=\"wrap\">\t\n\t<div class=\"main\">\n\t\t<h2 class=\"style top\">featured wallets</h2>\n\t\t<!-- start grids_of_3 -->\n\t\t<div class=\"grids_of_3\">\n\t\t\t<div class=\"grid1_of_3\">\n\t\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t<img src=\"../images/w_pic1.jpg\" alt=\"\" class=\"details-page\"/>\n\t\t\t\t\t<h3>branded handbags</h3>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<h4>$299<span class=\"details-page\">indulge</span></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"b_btm\"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"grid1_of_3\">\n\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t<img src=\"../images/w_pic2.jpg\" alt=\"\" class=\"details-page\"/>\n\t\t\t\t\t<h3>branded handbags</h3>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<h4>$299 <span class=\"details-page\">indulge</span></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"b_btm\"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"grid1_of_3\">\n\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t<img src=\"../images/w_pic3.jpg\" alt=\"\" class=\"details-page\"/>\n\t\t\t\t\t<h3>branded handbags</h3>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<h4>$299<span class=\"details-page\">indulge</span></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"b_btm\"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"clear\"></div>\n\t\t</div>\n\t\t<div class=\"grids_of_3\">\n\t\t\t<div class=\"grid1_of_3\">\n\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t<img src=\"../images/w_pic4.jpg\" alt=\"\" class=\"details-page\"/>\n\t\t\t\t\t<h3>branded handbags</h3>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<h4>$299<span class=\"details-page\">indulge</span></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"b_btm\"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"grid1_of_3\">\n\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t<img src=\"../images/w_pic5.jpg\" alt=\"\" class=\"details-page\"/>\n\t\t\t\t\t<h3>branded handbags</h3>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<h4>$299<span class=\"details-page\">indulge</span></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"b_btm\"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"grid1_of_3\">\n\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t<img src=\"../images/w_pic6.jpg\" alt=\"\" class=\"details-page\"/>\n\t\t\t\t\t<h3>branded handbags</h3>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<h4>$299<span class=\"details-page\">indulge</span></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"b_btm\"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"clear\"></div>\n\t\t</div>\n\t</div>\n</div>\n</div>\t\n").concat(FOOTER_BG, "\n"); // --------------------------------------------------------------------------------

DOM_STATE_HTML.SHOES_PAGE_FULL = "\n\n<!-- start header -->\n".concat(HEADER_BG, "\n<div class=\"header_btm\">\n<div class=\"wrap\">\n\t<div class=\"header_sub\">\n\t\t<div class=\"h_menu\">\n            <ul>\n                <li><a href=\"\" class=\"main-page\">Home</a></li> |\n                <li><a href=\"\" class=\"sale-page\">sale</a></li> |\n                <li><a href=\"\" class=\"handbags-page\">handbags</a></li> |\n                <li><a href=\"\" class=\"accessories-page\">accessories</a></li> |\n                <li><a href=\"\" class=\"wallets-page\">wallets</a></li> |\n                <li class=\"active\"><a href=\"\" class=\"shoes-page\">shoes</a></li> |\n                <li><a href=\"\" class=\"services-page\">services</a></li> |\n                <li><a href=\"\" class=\"contactUs-page\">contact us</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t\t").concat(HEADER_MENU_NAV, "\n</div>\n</div>\n</div>\n<!-- start main -->\n<div class=\"main_bg\">\n<div class=\"wrap\">\t\n\t<div class=\"main\">\n\t\t<h2 class=\"style top\">featured shoes</h2>\n\t\t<!-- start grids_of_3 -->\n\t\t<div class=\"grids_of_3\">\n\t\t\t<div class=\"grid1_of_3\">\n\t\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t<img src=\"../images/shoe_pic1.jpg\" alt=\"\"/ class=\"details-page\">\n\t\t\t\t\t<h3>branded shoes</h3>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<h4>$499<span class=\"details-page\">indulge</span></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"b_btm\"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"grid1_of_3\">\n\t\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t<img src=\"../images/shoe_pic2.jpg\" alt=\"\"/ class=\"details-page\">\n\t\t\t\t\t<h3>branded shoes</h3>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<h4>$499<span class=\"details-page\">indulge</span></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"b_btm\"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"grid1_of_3\">\n\t\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t<img src=\"../images/shoe_pic3.jpg\" alt=\"\"/ class=\"details-page\">\n\t\t\t\t\t<h3>branded shoes</h3>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<h4>$499<span class=\"details-page\">indulge</span></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"b_btm\"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"clear\"></div>\n\t\t</div>\n\t\t<div class=\"grids_of_3\">\n\t\t\t<div class=\"grid1_of_3\">\n\t\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t<img src=\"../images/shoe_pic4.jpg\" alt=\"\"/ class=\"details-page\">\n\t\t\t\t\t<h3>branded shoes</h3>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<h4>$499<span class=\"details-page\">indulge</span></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"b_btm\"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"grid1_of_3\">\n\t\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t<img src=\"../images/shoe_pic5.jpg\" alt=\"\"/ class=\"details-page\">\n\t\t\t\t\t<h3>branded shoes</h3>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<h4>$499<span class=\"details-page\">indulge</span></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"b_btm\"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"grid1_of_3\">\n\t\t\t\t<a href=\"\" class=\"details-page\">\n\t\t\t\t\t<img src=\"../images/shoe_pic6.jpg\" alt=\"\"/ class=\"details-page\">\n\t\t\t\t\t<h3>branded shoes</h3>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<h4>$499<span class=\"details-page\">indulge</span></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"b_btm\"></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"clear\"></div>\n\t\t</div>\n\t</div>\n</div>\n</div>\t\t\n").concat(FOOTER_BG, "\n"); // --------------------------------------------------------------------------------

DOM_STATE_HTML.SERVICES_PAGE_FULL = "\n\n<!-- start header -->\n".concat(HEADER_BG, "\n<div class=\"header_btm\">\n<div class=\"wrap\">\n\t<div class=\"header_sub\">\n\t\t<div class=\"h_menu\">\n\t\t\t<ul>\n                <li><a href=\"\" class=\"main-page\">Home</a></li> |\n                <li><a href=\"\" class=\"sale-page\">sale</a></li> |\n                <li><a href=\"\" class=\"handbags-page\">handbags</a></li> |\n                <li><a href=\"\" class=\"accessories-page\">accessories</a></li> |\n                <li><a href=\"\" class=\"wallets-page\">wallets</a></li> |\n                <li><a href=\"\" class=\"shoes-page\">shoes</a></li> |\n                <li class=\"active\"><a href=\"\" class=\"services-page\">services</a></li> |\n                <li><a href=\"\" class=\"contactUs-page\">contact us</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t\t").concat(HEADER_MENU_NAV, "\n</div>\n</div>\n</div>\n<!-- start main -->\n<div class=\"main_bg\">\n<div class=\"wrap\">\t\n\t<div class=\"main\">\n\t<!-- start service -->\n\t  <div class=\"service\">\n\t\t<div class=\"ser-main\">\n\t\t\t<h4>Our Services</h4>\n\t\t\t<p class=\"para\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>\n\t\t\t<div class=\"ser-grid\">\n\t\t\t\t<div class=\"ser-grid-list details-page\">\n\t\t\t\t\t<a href=\"\"><img src=\"../images/icon1.png\" alt=\"\"></a>\n\t\t\t\t\t<h5><a href=\"\">24/7 customer support</a></h5>\n\t\t\t\t\t<p class=\"para\">It is a long established fact that a reader will be distracted by the page when looking at its layout.</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ser-grid-list details-page\">\n\t\t\t\t\t<a href=\"\"><img src=\"../images/icon2.png\" alt=\"\"></a>\n\t\t\t\t\t<h5><a href=\"\">hygienic branded</a></h5>\n\t\t\t\t\t<p class=\"para\"> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ser-grid-list details-page\">\n\t\t\t\t\t<a href=\"\"><img src=\"../images/icon3.png\" alt=\"\"></a>\n\t\t\t\t\t<h5><a href=\"\">safely dispatch</a></h5>\n\t\t\t\t\t<p class=\"para\">It is a long established fact that a reader will be distracted by the page when looking at its layout.</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clear\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"ser-grid\">\n\t\t\t\t<div class=\"ser-grid-list details-page\">\n\t\t\t\t\t<a href=\"\"><img src=\"../images/icon4.png\" alt=\"\"></a>\n\t\t\t\t\t<h5><a href=\"\">100% look book</a></h5>\n\t\t\t\t\t<p class=\"para\">It is a long established fact that a reader will be distracted by the page when looking at its layout.</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ser-grid-list details-page\">\n\t\t\t\t\t<a href=\"\"><img src=\"../images/icon5.png\" alt=\"\"></a>\n\t\t\t\t\t<h5><a href=\"\">authentic products</a></h5>\n\t\t\t\t\t<p class=\"para\"> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ser-grid-list details-page\">\n\t\t\t\t\t<a href=\"\"><img src=\"../images/icon6.png\" alt=\"\"></a>\n\t\t\t\t\t<h5><a href=\"\">100% guarantee</a></h5>\n\t\t\t\t\t<p class=\"para\">It is a long established fact that a reader will be distracted by the page when looking at its layout.</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clear\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"left_sidebar\">\n\t\t\t\t\t<div class=\"sellers\">\n\t\t\t\t\t\t<h4>Best Sellers</h4>\n\t\t\t\t\t\t<div class=\"single-nav\">\n\t\t\t                <ul>\n\t\t\t                   <li><a href=\"#\">Always free from repetition</a></li>\n\t\t\t                    <li><a href=\"#\">Always free from repetition</a></li>\n\t\t\t                    <li><a href=\"#\">The standard chunk of Lorem Ipsum</a></li>\n\t\t\t                    <li><a href=\"#\">The standard chunk of Lorem Ipsum</a></li>\n\t\t\t                    <li><a href=\"#\">Always free from repetition</a></li>\n\t\t\t                    <li><a href=\"#\">The standard chunk of Lorem Ipsum</a></li>\n\t\t\t                    <li><a href=\"#\">Always free from repetition</a></li>\n\t\t\t                    <li><a href=\"#\">Always free from repetition</a></li>\n\t\t\t                    <li><a href=\"#\">Always free from repetition</a></li>\n\t\t\t                    <li><a href=\"#\">The standard chunk of Lorem Ipsum</a></li>\n\t\t\t                    <li><a href=\"#\">Always free from repetition</a></li>\n\t\t\t                    <li><a href=\"#\">Always free from repetition</a></li>\n\t\t\t                    <li><a href=\"#\">Always free from repetition</a></li>\t\t\t                    \n\t\t\t                </ul>\n\t\t\t              </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clear\"></div>\n\t\t\t</div>\n\t</div>\n</div>\n</div>\t\t\n").concat(FOOTER_BG, "\n"); // --------------------------------------------------------------------------------

DOM_STATE_HTML.CONTACT_US_PAGE_FULL = "\n\n<!-- start header -->\n".concat(HEADER_BG, "\n<div class=\"header_btm\">\n    <div class=\"wrap\">\n        <div class=\"header_sub\">\n            <div class=\"h_menu\">\n                <ul>\n                    <li><a href=\"\" class=\"main-page\">Home</a></li> |\n                    <li><a href=\"\" class=\"sale-page\">sale</a></li> |\n                    <li><a href=\"\" class=\"handbags-page\">handbags</a></li> |\n                    <li><a href=\"\" class=\"accessories-page\">accessories</a></li> |\n                    <li><a href=\"\" class=\"wallets-page\">wallets</a></li> |\n                    <li><a href=\"\" class=\"shoes-page\">shoes</a></li> |\n                    <li><a href=\"\" class=\"services-page\">services</a></li> |\n                    <li class=\"active\"><a href=\"\" class=\"contactUs-page\">contact us</a></li>\n                </ul>\n            </div>\n\t\t\t").concat(HEADER_MENU_NAV, "\n        </div>\n    </div>\n</div>\n<!-- start main -->\n<div class=\"main_bg\">\n    <div class=\"wrap\">\n        <div class=\"main\">\n            <div class=\"contact\">\n                <div class=\"contact_info\">\n                    <h2>get in touch</h2>\n                    <div class=\"map\">\n                        <iframe width=\"100%\" height=\"250\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\"\n                            marginwidth=\"0\"\n                            src=\"https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Lighthouse+Point,+FL,+United+States&amp;aq=4&amp;oq=light&amp;sll=26.275636,-80.087265&amp;sspn=0.04941,0.104628&amp;ie=UTF8&amp;hq=&amp;hnear=Lighthouse+Point,+Broward,+Florida,+United+States&amp;t=m&amp;z=14&amp;ll=26.275636,-80.087265&amp;output=embed\"></iframe><br><small><a\n                                href=\"https://maps.google.co.in/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Lighthouse+Point,+FL,+United+States&amp;aq=4&amp;oq=light&amp;sll=26.275636,-80.087265&amp;sspn=0.04941,0.104628&amp;ie=UTF8&amp;hq=&amp;hnear=Lighthouse+Point,+Broward,+Florida,+United+States&amp;t=m&amp;z=14&amp;ll=26.275636,-80.087265\"\n                                style=\"color:#777777;text-align:left;font-size:13px;font-family: 'Source Sans Pro', sans-serif;\">View\n                                Larger Map</a></small>\n                    </div>\n                </div>\n                <div class=\"contact-form\">\n                    <h2>Contact Us</h2>\n                    <form method=\"post\" action=\"contact-post.html\" id=\"user-contact-form\">\n                        <div class=\"form-contact-control\">\n                            <span><label>Name</label></span>\n                            <input name=\"userName\" type=\"text\" id=\"user-contact-name\" class=\"textbox\">\n                            <small>Error message</small>\n                        </div>\n                        <div class=\"form-contact-control\">\n                            <span><label>E-mail</label></span>\n                            <input name=\"userEmail\" type=\"text\" id=\"user-contact-email\" class=\"textbox\">\n                            <small>Error message</small>\n                        </div>\n                        <div class=\"form-contact-control\">\n                            <span><label>Mobile</label></span>\n                            <input name=\"userPhone\" type=\"text\" id=\"user-contact-phone\" class=\"textbox\" placeholder=\"+380...\">\n                            <small>Error message</small>\n                        </div>\n                        <div class=\"form-contact-control\">\n                            <span><label>Subject</label></span>\n                            <textarea name=\"userMsg\" id=\"user-contact-subject\"> </textarea>\n                        </div>\n                        <div>\n                            <span><input type=\"submit\" class=\"user-contact-submit\" value=\"Submit us\"></span>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"clear\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- start footer -->\n").concat(FOOTER_BG, "\n"); // --------------------------------------------------------------------------------

DOM_STATE_HTML.DETAILS_PAGE_FULL = "\n\n<!-- start header -->\n".concat(HEADER_BG, "\n<div class=\"header_btm\">\n<div class=\"wrap\">\n\t<div class=\"header_sub\">\n\t\t<div class=\"h_menu\">\n\t\t\t<ul>\n                <li class=\"active\"><a href=\"\" class=\"main-page\">Home</a></li> |\n                <li><a href=\"\" class=\"sale-page\">sale</a></li> |\n                <li><a href=\"\" class=\"handbags-page\">handbags</a></li> |\n                <li><a href=\"\" class=\"accessories-page\">accessories</a></li> |\n                <li><a href=\"\" class=\"wallets-page\">wallets</a></li> |\n                <li><a href=\"\" class=\"shoes-page\">shoes</a></li> |\n                <li><a href=\"\" class=\"services-page\">services</a></li> |\n                <li><a href=\"\" class=\"contactUs-page\">contact us</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t\t").concat(HEADER_MENU_NAV, "\n</div>\n</div>\n</div>\n<!-- start main -->\n<div class=\"main_bg\">\n<div class=\"wrap\">\t\n\t<div class=\"main\">\n\t<!-- start content -->\n\t<div class=\"single\">\n\t\t\t<!-- start span1_of_1 -->\n\t\t\t<div class=\"left_content\">\n\t\t\t<div class=\"span1_of_1\">\n\t\t\t\t<!-- start product_slider -->\n\t\t\t\t<div class=\"product-view\">\n\t\t\t\t    <div class=\"product-essential\">\n\t\t\t\t        <div class=\"product-img-box\">\n\t\t\t\t    <div class=\"more-views\" style=\"float:left;\">\n\t\t\t\t        <div class=\"more-views-container\">\n\t\t\t\t        <ul>\n\t\t\t\t            <li>\n\t\t\t\t            \t<a class=\"cs-fancybox-thumbs\" data-fancybox-group=\"thumb\" style=\"width:64px;height:85px;\" href=\"\"  title=\"\" alt=\"\">\n\t\t\t\t            \t<img src=\"\" src_main=\"\"  title=\"\" alt=\"\" /></a>            \n\t\t\t\t            </li>\n\t\t\t\t            <li>\n\t\t\t\t            \t<a class=\"cs-fancybox-thumbs\" data-fancybox-group=\"thumb\" style=\"width:64px;height:85px;\" href=\"\"  title=\"\" alt=\"\">\n\t\t\t\t            \t<img src=\"\" src_main=\"\"  title=\"\" alt=\"\" /></a>\n\t\t\t\t            </li>\n\t\t\t\t            <li>\n\t\t\t\t            \t<a class=\"cs-fancybox-thumbs\" data-fancybox-group=\"thumb\" style=\"width:64px;height:85px;\" href=\"\"  title=\"\" alt=\"\">\n\t\t\t\t            \t<img src=\"\" src_main=\"\"  title=\"\" alt=\"\" /></a> \n\t\t\t\t            </li>\n\t\t\t\t            <li>\n\t\t\t\t            \t<a class=\"cs-fancybox-thumbs\" data-fancybox-group=\"thumb\" style=\"width:64px;height:85px;\" href=\"\"  title=\"\" alt=\"\">\n\t\t\t\t            \t<img src=\"\" src_main=\"\" title=\"\" alt=\"\" /></a>  \n\t\t\t\t            </li>\n\t\t\t\t            <li>\n\t\t\t\t            \t<a class=\"cs-fancybox-thumbs\" data-fancybox-group=\"thumb\" style=\"width:64px;height:85px;\" href=\"\"  title=\"\" alt=\"\">\n\t\t\t\t            \t<img src=\"\" src_main=\"\" title=\"\" alt=\"\" /></a>\n\t\t\t\t            </li>\n\t\t\t\t          </ul>\n\t\t\t\t        </div>\n\t\t\t\t    </div>\n\t\t\t\t    <div class=\"product-image\"> \n\t\t\t\t        <a class=\"cs-fancybox-thumbs cloud-zoom\" rel=\"adjustX:30,adjustY:0,position:'right',tint:'#202020',tintOpacity:0.5,smoothMove:2,showTitle:true,titleOpacity:0.5\" data-fancybox-group=\"thumb\" href=\"../images/0001-2.jpg\" title=\"Women Shorts\" alt=\"Women Shorts\">\n\t\t\t\t           \t<img src=\"../images/0001-2.jpg\" alt=\"Women Shorts\" title=\"Women Shorts\" />\n\t\t\t\t        </a>\n\t\t\t\t   </div>\n\t\t\t\t\t<script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\">\n\t\t\t\t\t\tvar prodGallery = jQblvg.parseJSON('{\"prod_1\":{\"main\":{\"orig\":\"../images/0001-2.jpg\",\"main\":\"../images/large/0001-2.jpg\",\"thumb\":\"../images/small/0001-2.jpg\",\"label\":\"\"},\"gallery\":{\"item_0\":{\"orig\":\"../images/0001-2.jpg\",\"main\":\"../images/large/0001-2.jpg\",\"thumb\":\"../images/small/0001-2.jpg\",\"label\":\"\"},\"item_1\":{\"orig\":\"../images/0001-1.jpg\",\"main\":\"../images/large/0001-1.jpg\",\"thumb\":\"../images/small/0001-1.jpg\",\"label\":\"\"},\"item_2\":{\"orig\":\"../images/0001-5.jpg\",\"main\":\"../images/large/0001-5.jpg\",\"thumb\":\"../images/small/0001-5.jpg\",\"label\":\"\"},\"item_3\":{\"orig\":\"../images/0001-3.jpg\",\"main\":\"../images/large/0001-3.jpg\",\"thumb\":\"../images/small/0001-3.jpg\",\"label\":\"\"},\"item_4\":{\"orig\":\"../images/0001-4.jpg\",\"main\":\"../images/large/0001-4.jpg\",\"thumb\":\"../images/small/0001-4.jpg\",\"label\":\"\"}},\"type\":\"simple\",\"video\":false}}'),\n\t\t\t\t\t\t    gallery_elmnt = jQblvg('.product-img-box'),\n\t\t\t\t\t\t    galleryObj = new Object(),\n\t\t\t\t\t\t    gallery_conf = new Object();\n\t\t\t\t\t\t    gallery_conf.moreviewitem = '<a class=\"cs-fancybox-thumbs\" data-fancybox-group=\"thumb\" style=\"width:64px;height:85px;\" href=\"\"  title=\"\" alt=\"\"><img src=\"\" src_main=\"\" width=\"64\" height=\"85\" title=\"\" alt=\"\" /></a>';\n\t\t\t\t\t\t    gallery_conf.animspeed = 200;\n\t\t\t\t\t\tjQblvg(document).ready(function() {\n\t\t\t\t\t\t    galleryObj[1] = new prodViewGalleryForm(prodGallery, 'prod_1', gallery_elmnt, gallery_conf, '.product-image', '.more-views', 'http:');\n\t\t\t\t\t\t        jQblvg('.product-image .cs-fancybox-thumbs').absoluteClick();\n\t\t\t\t\t\t    jQblvg('.cs-fancybox-thumbs').fancybox({ prevEffect : 'none', \n\t\t\t\t\t\t                             nextEffect : 'none',\n\t\t\t\t\t\t                             closeBtn : true,\n\t\t\t\t\t\t                             arrows : true,\n\t\t\t\t\t\t                             nextClick : true, \n\t\t\t\t\t\t                             helpers: {\n\t\t\t\t\t\t                               thumbs : {\n\t\t\t\t\t\t                                   width: 64,\n\t\t\t\t\t\t                                   height: 85,\n\t\t\t\t\t\t                                   position: 'bottom'\n\t\t\t\t\t\t                               }\n\t\t\t\t\t\t                             }\n\t\t\t\t\t\t                             });\n\t\t\t\t\t\t    jQblvg('#wrap').css('z-index', '100');\n\t\t\t\t\t\t            jQblvg('.more-views-container').elScroll({type: 'vertical', elqty: 4, btn_pos: 'border', scroll_speed: 400 });\n\t\t\t\t\t\t        \n\t\t\t\t\t\t});\n\t\t\t\t\t\t\n\t\t\t\t\t\tfunction initGallery(a,b,element) {\n\t\t\t\t\t\t    galleryObj[a] = new prodViewGalleryForm(prods, b, gallery_elmnt, gallery_conf, '.product-image', '.more-views', '');\n\t\t\t\t\t\t};\n\t\t\t\t\t</script>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- end product_slider -->\n\t\t\t</div>\n\t\t\t<!-- start span1_of_1 -->\n\t\t\t<div class=\"span1_of_1_des\">\n\t\t\t\t  <div class=\"desc1\">\n\t\t\t\t\t<h3>Lorem Ipsum is simply dummy text </h3>\n\t\t\t\t\t<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>\n\t\t\t\t\t<h5>Rs. 399 <a href=\"#\">click for offer</a></h5>\n\t\t\t\t\t<div class=\"available\">\n\t\t\t\t\t\t<h4>Available Options :</h4>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>Color:\n\t\t\t\t\t\t\t\t<select>\n\t\t\t\t\t\t\t\t<option>Silver</option>\n\t\t\t\t\t\t\t\t<option>Black</option>\n\t\t\t\t\t\t\t\t<option>Dark Black</option>\n\t\t\t\t\t\t\t\t<option>Red</option>\n\t\t\t\t\t\t\t</select></li>\n\t\t\t\t\t\t\t<li>Size:\n\t\t\t\t\t\t\t\t<select>\n\t\t\t\t\t\t\t\t\t<option>L</option>\n\t\t\t\t\t\t\t\t\t<option>XL</option>\n\t\t\t\t\t\t\t\t\t<option>S</option>\n\t\t\t\t\t\t\t\t\t<option>M</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>Quality:\n\t\t\t\t\t\t\t\t<select>\n\t\t\t\t\t\t\t\t\t<option>1</option>\n\t\t\t\t\t\t\t\t\t<option>2</option>\n\t\t\t\t\t\t\t\t\t<option>3</option>\n\t\t\t\t\t\t\t\t\t<option>4</option>\n\t\t\t\t\t\t\t\t\t<option>5</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<div class=\"btn_form\">\n\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t\t<input type=\"submit\" value=\"add to cart\" title=\"\" />\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"span_right\"><a href=\"#\">login to save in wishlist </a></span>\n\t\t\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"share-desc\">\n\t\t\t\t\t\t<div class=\"share\">\n\t\t\t\t\t\t\t<h4>Share Product :</h4>\n\t\t\t\t\t\t\t<ul class=\"share_nav\">\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><img src=\"../images/facebook.png\" title=\"facebook\"></a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><img src=\"../images/twitter.png\" title=\"Twiiter\"></a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><img src=\"../images/rss.png\" title=\"Rss\"></a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><img src=\"../images/gpluse.png\" title=\"Google+\"></a></li>\n\t\t\t\t    \t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t\t</div>\n\t\t\t   \t </div>\n\t\t\t   \t</div>\n\t\t\t   \t<div class=\"clear\"></div>\n\t\t\t   \t<!-- start tabs -->\n\t\t\t\t   \t<section class=\"tabs\">\n\t\t            <input id=\"tab-1\" type=\"radio\" name=\"radio-set\" class=\"tab-selector-1\" checked=\"checked\">\n\t\t\t        <label for=\"tab-1\" class=\"tab-label-1\">overview</label>\n\t\t\t\n\t\t            <input id=\"tab-2\" type=\"radio\" name=\"radio-set\" class=\"tab-selector-2\">\n\t\t\t        <label for=\"tab-2\" class=\"tab-label-2\">consumer electronics</label>\n\t\t\t\n\t\t            <input id=\"tab-3\" type=\"radio\" name=\"radio-set\" class=\"tab-selector-3\">\n\t\t\t        <label for=\"tab-3\" class=\"tab-label-3\">semiconductor</label>\n\t          \n\t\t\t\t    <div class=\"clear-shadow\"></div>\n\t\t\t\t\t\n\t\t\t        <div class=\"content\">\n\t\t\t\t        <div class=\"content-1\">\n\t\t\t\t        \t<p class=\"para top\"><span>LOREM IPSUM</span> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined </p>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>Research</li>\n\t\t\t\t\t\t\t\t<li>Design and Development</li>\n\t\t\t\t\t\t\t\t<li>Porting and Optimization</li>\n\t\t\t\t\t\t\t\t<li>System integration</li>\n\t\t\t\t\t\t\t\t<li>Verification, Validation and Testing</li>\n\t\t\t\t\t\t\t\t<li>Maintenance and Support</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t        <div class=\"content-2\">\n\t\t\t\t\t\t\t<p class=\"para\"><span>WELCOME </span> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections </p>\n\t\t\t\t\t\t\t<ul class=\"qua_nav\">\n\t\t\t\t\t\t\t\t<li>Multimedia Systems</li>\n\t\t\t\t\t\t\t\t<li>Digital media adapters</li>\n\t\t\t\t\t\t\t\t<li>Set top boxes for HDTV and IPTV Player applications on various Operating Systems and Hardware Platforms</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t        <div class=\"content-3\">\n\t\t\t\t        \t<p class=\"para top\"><span>LOREM IPSUM</span> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined </p>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>Research</li>\n\t\t\t\t\t\t\t\t<li>Design and Development</li>\n\t\t\t\t\t\t\t\t<li>Porting and Optimization</li>\n\t\t\t\t\t\t\t\t<li>System integration</li>\n\t\t\t\t\t\t\t\t<li>Verification, Validation and Testing</li>\n\t\t\t\t\t\t\t\t<li>Maintenance and Support</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t        </div>\n\t\t\t        </section>\n\t\t         \t<!-- end tabs -->\n\t\t\t   \t</div>\n\t\t\t   \t<!-- start sidebar -->\n\t\t\t <div class=\"left_sidebar\">\n\t\t\t\t\t<div class=\"sellers\">\n\t\t\t\t\t\t<h4>Best Sellers</h4>\n\t\t\t\t\t\t<div class=\"single-nav\">\n\t\t\t                <ul>\n\t\t\t                   <li><a href=\"#\">Always free from repetition</a></li>\n\t\t\t                    <li><a href=\"#\">Always free from repetition</a></li>\n\t\t\t                    <li><a href=\"#\">The standard chunk of Lorem Ipsum</a></li>\n\t\t\t                    <li><a href=\"#\">The standard chunk of Lorem Ipsum</a></li>\n\t\t\t                    <li><a href=\"#\">Always free from repetition</a></li>\n\t\t\t                    <li><a href=\"#\">The standard chunk of Lorem Ipsum</a></li>\n\t\t\t                    <li><a href=\"#\">Always free from repetition</a></li>\n\t\t\t                    <li><a href=\"#\">Always free from repetition</a></li>\n\t\t\t                    <li><a href=\"#\">Always free from repetition</a></li>\n\t\t\t                    <li><a href=\"#\">The standard chunk of Lorem Ipsum</a></li>\n\t\t\t                    <li><a href=\"#\">Always free from repetition</a></li>\n\t\t\t                    <li><a href=\"#\">Always free from repetition</a></li>\n\t\t\t                    <li><a href=\"#\">Always free from repetition</a></li>\t\t\t                    \n\t\t\t                </ul>\n\t\t\t              </div>\n\t\t\t\t\t\t  <div class=\"banner-wrap bottom_banner color_link\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"main_link\">\n\t\t\t\t\t\t\t\t<figure><img src=\"../images/delivery.png\" alt=\"\"></figure>\n\t\t\t\t\t\t\t\t<h5><span>Free Shipping</span><br> on orders over $99.</h5><p>This offer is valid on all our store items.</p></a>\n\t\t\t\t\t\t </div>\n\t\t\t\t\t\t <div class=\"brands\">\n\t\t\t\t\t\t\t <h1>Brands</h1>\n\t\t\t\t\t  \t\t <div class=\"field\">\n\t\t\t\t                 <select class=\"select1\">\n\t\t\t\t                   <option>Please Select</option>\n\t\t\t\t\t\t\t\t\t\t<option>Lorem ipsum dolor sit amet</option>\n\t\t\t\t\t\t\t\t\t\t<option>Lorem ipsum dolor sit amet</option>\n\t\t\t\t\t\t\t\t\t\t<option>Lorem ipsum dolor sit amet</option>\n\t\t\t\t                  </select>\n\t\t\t\t            </div>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t<!-- end sidebar -->\n          \t    <div class=\"clear\"></div>\n\t       </div>\t\n\t</div>\n </div>\n</div>\n").concat(FOOTER_BG, "\n");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactForms", function() { return ContactForms; });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import {inputAdjust} from './input_validation';
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
    this.validateInputs = this.validateInputs.bind(this);
    this.selectDOMElements();
    this.setEventToDOM();
  }

  _createClass(ContactForms, [{
    key: "selectDOMElements",
    value: function selectDOMElements() {
      this.contactForm = document.getElementById('user-contact-form');
      this.contactName = document.getElementById('user-contact-name');
      this.contactEmail = document.getElementById('user-contact-email');
      this.contactPhone = document.getElementById('user-contact-phone');
      this.contactSubject = document.getElementById('user-contact-subject');
    }
  }, {
    key: "setEventToDOM",
    value: function setEventToDOM() {
      this.contactForm.addEventListener('submit', this.validateInputs);
    }
  }, {
    key: "validateInputs",
    value: function validateInputs() {
      event.preventDefault();
      var nameValue = this.inputAdjust(this.contactName.value);
      var emailValue = this.contactEmail.value.trim();
      var phoneValue = this.contactPhone.value.trim();
      var subjValue = this.inputAdjust(this.contactSubject.value);
      var currentForm = {
        name: '',
        nameIsValid: false,
        email: '',
        emailIsValid: false,
        phone: '',
        phoneIsValid: false
      }; // -------------------------------NAME-----------------------------------------------
      // let newName = new ValidationName(this.inputAdjust(this.contactName.value));

      if (nameValue === '' || nameValue == null) {
        this.setErrorFor(this.contactName, 'Please enter your name');
      } else {
        this.setSuccessfulFor(this.contactName, 'Correct');
        currentForm.name = nameValue;
        currentForm.nameIsValid = true;
      } // --------------------------------EMAIL----------------------------------------------


      var newEmail = new ValidationEmail(emailValue);

      if (emailValue === '' || emailValue == null) {
        this.setErrorFor(this.contactEmail, 'Please enter your email');
      } else if (!newEmail.isValid()) {
        this.setErrorFor(this.contactEmail, 'Invalid email');
      } else {
        this.setSuccessfulFor(this.contactEmail, 'Correct');
        currentForm.email = emailValue;
        currentForm.emailIsValid = true;
      } // --------------------------------PHONE----------------------------------------------


      var newPhone = new ValidationPhone(phoneValue);

      if (phoneValue === '' || phoneValue == null) {
        this.setErrorFor(this.contactPhone, 'Please enter your phone number');
      } else if (!newPhone.isValid()) {
        this.setErrorFor(this.contactPhone, 'Invalid phone number');
      } else {
        this.setSuccessfulFor(this.contactPhone, 'Correct');
        currentForm.phone = phoneValue;
        currentForm.phoneIsValid = true;
      } // -----------------------------FORM-CONFIRM-------------------------------------------


      if (currentForm.nameIsValid && currentForm.emailIsValid && currentForm.phoneIsValid) {
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
  }, {
    key: "setErrorFor",
    value: function setErrorFor(input, message) {
      var inputState = input.parentElement.querySelector('small');
      inputState.innerText = message;
      input.parentElement.className = 'form-contact-control wrong';
    }
  }, {
    key: "setSuccessfulFor",
    value: function setSuccessfulFor(input, message) {
      var inputState = input.parentElement.querySelector('small');
      inputState.innerText = message;
      input.parentElement.className = 'form-contact-control successful';
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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

(function ($, undefined) {
  /*
   * Slider object.
   */
  $.Slider = function (options, element) {
    this.$el = $(element);

    this._init(options);
  };

  $.Slider.defaults = {
    current: 0,
    // index of current slide
    bgincrement: 50,
    // increment the bg position (parallax effect) when sliding
    autoplay: true,
    // slideshow on / off
    interval: 4000 // time between transitions

  };
  $.Slider.prototype = {
    _init: function _init(options) {
      this.options = $.extend(true, {}, $.Slider.defaults, options);
      this.$slides = this.$el.children('div.da-slide');
      this.slidesCount = this.$slides.length;
      this.current = this.options.current;

      if (this.current < 0 || this.current >= this.slidesCount) {
        this.current = 0;
      }

      this.$slides.eq(this.current).addClass('da-slide-current');
      var $navigation = $('<nav class="da-dots"/>');

      for (var i = 0; i < this.slidesCount; ++i) {
        $navigation.append('<span/>');
      }

      $navigation.appendTo(this.$el);
      this.$pages = this.$el.find('nav.da-dots > span');
      this.$navNext = this.$el.find('span.da-arrows-next');
      this.$navPrev = this.$el.find('span.da-arrows-prev');
      this.isAnimating = false;
      this.bgpositer = 0;
      this.cssAnimations = Modernizr.cssanimations;
      this.cssTransitions = Modernizr.csstransitions;

      if (!this.cssAnimations || !this.cssAnimations) {
        this.$el.addClass('da-slider-fb');
      }

      this._updatePage(); // load the events


      this._loadEvents(); // slideshow


      if (this.options.autoplay) {
        this._startSlideshow();
      }
    },
    _navigate: function _navigate(page, dir) {
      var $current = this.$slides.eq(this.current),
          $next,
          _self = this;

      if (this.current === page || this.isAnimating) return false;
      this.isAnimating = true; // check dir

      var classTo, classFrom, d;

      if (!dir) {
        page > this.current ? d = 'next' : d = 'prev';
      } else {
        d = dir;
      }

      if (this.cssAnimations && this.cssAnimations) {
        if (d === 'next') {
          classTo = 'da-slide-toleft';
          classFrom = 'da-slide-fromright';
          ++this.bgpositer;
        } else {
          classTo = 'da-slide-toright';
          classFrom = 'da-slide-fromleft';
          --this.bgpositer;
        }

        this.$el.css('background-position', this.bgpositer * this.options.bgincrement + '% 0%');
      }

      this.current = page;
      $next = this.$slides.eq(this.current);

      if (this.cssAnimations && this.cssAnimations) {
        var rmClasses = 'da-slide-toleft da-slide-toright da-slide-fromleft da-slide-fromright';
        $current.removeClass(rmClasses);
        $next.removeClass(rmClasses);
        $current.addClass(classTo);
        $next.addClass(classFrom);
        $current.removeClass('da-slide-current');
        $next.addClass('da-slide-current');
      } // fallback


      if (!this.cssAnimations || !this.cssAnimations) {
        $next.css('left', d === 'next' ? '100%' : '-100%').stop().animate({
          left: '0%'
        }, 1000, function () {
          _self.isAnimating = false;
        });
        $current.stop().animate({
          left: d === 'next' ? '-100%' : '100%'
        }, 1000, function () {
          $current.removeClass('da-slide-current');
        });
      }

      this._updatePage();
    },
    _updatePage: function _updatePage() {
      this.$pages.removeClass('da-dots-current');
      this.$pages.eq(this.current).addClass('da-dots-current');
    },
    _startSlideshow: function _startSlideshow() {
      var _self = this;

      this.slideshow = setTimeout(function () {
        var page = _self.current < _self.slidesCount - 1 ? page = _self.current + 1 : page = 0;

        _self._navigate(page, 'next');

        if (_self.options.autoplay) {
          _self._startSlideshow();
        }
      }, this.options.interval);
    },
    page: function page(idx) {
      if (idx >= this.slidesCount || idx < 0) {
        return false;
      }

      if (this.options.autoplay) {
        clearTimeout(this.slideshow);
        this.options.autoplay = false;
      }

      this._navigate(idx);
    },
    _loadEvents: function _loadEvents() {
      var _self = this;

      this.$pages.on('click.cslider', function (event) {
        _self.page($(this).index());

        return false;
      });
      this.$navNext.on('click.cslider', function (event) {
        if (_self.options.autoplay) {
          clearTimeout(_self.slideshow);
          _self.options.autoplay = false;
        }

        var page = _self.current < _self.slidesCount - 1 ? page = _self.current + 1 : page = 0;

        _self._navigate(page, 'next');

        return false;
      });
      this.$navPrev.on('click.cslider', function (event) {
        if (_self.options.autoplay) {
          clearTimeout(_self.slideshow);
          _self.options.autoplay = false;
        }

        var page = _self.current > 0 ? page = _self.current - 1 : page = _self.slidesCount - 1;

        _self._navigate(page, 'prev');

        return false;
      });

      if (this.cssTransitions) {
        if (!this.options.bgincrement) {
          this.$el.on('webkitAnimationEnd.cslider animationend.cslider OAnimationEnd.cslider', function (event) {
            if (event.originalEvent.animationName === 'toRightAnim4' || event.originalEvent.animationName === 'toLeftAnim4') {
              _self.isAnimating = false;
            }
          });
        } else {
          this.$el.on('webkitTransitionEnd.cslider transitionend.cslider OTransitionEnd.cslider', function (event) {
            if (event.target.id === _self.$el.attr('id')) _self.isAnimating = false;
          });
        }
      }
    }
  };

  var logError = function logError(message) {
    if (this.console) {
      console.error(message);
    }
  };

  $.fn.cslider = function (options) {
    if (typeof options === 'string') {
      var args = Array.prototype.slice.call(arguments, 1);
      this.each(function () {
        var instance = $.data(this, 'cslider');

        if (!instance) {
          logError("cannot call methods on cslider prior to initialization; " + "attempted to call method '" + options + "'");
          return;
        }

        if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
          logError("no such method '" + options + "' for cslider instance");
          return;
        }

        instance[options].apply(instance, args);
      });
    } else {
      this.each(function () {
        var instance = $.data(this, 'cslider');

        if (!instance) {
          $.data(this, 'cslider', new $.Slider(options, this));
        }
      });
    }

    return this;
  };
})(jQuery);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
 *	jQuery OwlCarousel v1.31
 *
 *	Copyright (c) 2013 Bartosz Wojciechowski
 *	http://www.owlgraphic.com/owlcarousel/
 *
 *	Licensed under MIT
 *
 */
if (typeof Object.create !== "function") {
  Object.create = function (obj) {
    function F() {}

    ;
    F.prototype = obj;
    return new F();
  };
}

(function ($, window, document, undefined) {
  var Carousel = {
    init: function init(options, el) {
      var base = this;
      base.$elem = $(el); // options passed via js override options passed via data attributes

      base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);
      base.userOptions = options;
      base.loadContent();
    },
    loadContent: function loadContent() {
      var base = this;

      if (typeof base.options.beforeInit === "function") {
        base.options.beforeInit.apply(this, [base.$elem]);
      }

      if (typeof base.options.jsonPath === "string") {
        var getData = function getData(data) {
          if (typeof base.options.jsonSuccess === "function") {
            base.options.jsonSuccess.apply(this, [data]);
          } else {
            var content = "";

            for (var i in data["owl"]) {
              content += data["owl"][i]["item"];
            }

            base.$elem.html(content);
          }

          base.logIn();
        };

        var url = base.options.jsonPath;
        $.getJSON(url, getData);
      } else {
        base.logIn();
      }
    },
    logIn: function logIn(action) {
      var base = this;
      base.$elem.data("owl-originalStyles", base.$elem.attr("style")).data("owl-originalClasses", base.$elem.attr("class"));
      base.$elem.css({
        opacity: 0
      });
      base.orignalItems = base.options.items;
      base.checkBrowser();
      base.wrapperWidth = 0;
      base.checkVisible;
      base.setVars();
    },
    setVars: function setVars() {
      var base = this;

      if (base.$elem.children().length === 0) {
        return false;
      }

      base.baseClass();
      base.eventTypes();
      base.$userItems = base.$elem.children();
      base.itemsAmount = base.$userItems.length;
      base.wrapItems();
      base.$owlItems = base.$elem.find(".owl-item");
      base.$owlWrapper = base.$elem.find(".owl-wrapper");
      base.playDirection = "next";
      base.prevItem = 0;
      base.prevArr = [0];
      base.currentItem = 0;
      base.customEvents();
      base.onStartup();
    },
    onStartup: function onStartup() {
      var base = this;
      base.updateItems();
      base.calculateAll();
      base.buildControls();
      base.updateControls();
      base.response();
      base.moveEvents();
      base.stopOnHover();
      base.owlStatus();

      if (base.options.transitionStyle !== false) {
        base.transitionTypes(base.options.transitionStyle);
      }

      if (base.options.autoPlay === true) {
        base.options.autoPlay = 5000;
      }

      base.play();
      base.$elem.find(".owl-wrapper").css("display", "block");

      if (!base.$elem.is(":visible")) {
        base.watchVisibility();
      } else {
        base.$elem.css("opacity", 1);
      }

      base.onstartup = false;
      base.eachMoveUpdate();

      if (typeof base.options.afterInit === "function") {
        base.options.afterInit.apply(this, [base.$elem]);
      }
    },
    eachMoveUpdate: function eachMoveUpdate() {
      var base = this;

      if (base.options.lazyLoad === true) {
        base.lazyLoad();
      }

      if (base.options.autoHeight === true) {
        base.autoHeight();
      }

      base.onVisibleItems();

      if (typeof base.options.afterAction === "function") {
        base.options.afterAction.apply(this, [base.$elem]);
      }
    },
    updateVars: function updateVars() {
      var base = this;

      if (typeof base.options.beforeUpdate === "function") {
        base.options.beforeUpdate.apply(this, [base.$elem]);
      }

      base.watchVisibility();
      base.updateItems();
      base.calculateAll();
      base.updatePosition();
      base.updateControls();
      base.eachMoveUpdate();

      if (typeof base.options.afterUpdate === "function") {
        base.options.afterUpdate.apply(this, [base.$elem]);
      }
    },
    reload: function reload(elements) {
      var base = this;
      setTimeout(function () {
        base.updateVars();
      }, 0);
    },
    watchVisibility: function watchVisibility() {
      var base = this;

      if (base.$elem.is(":visible") === false) {
        base.$elem.css({
          opacity: 0
        });
        clearInterval(base.autoPlayInterval);
        clearInterval(base.checkVisible);
      } else {
        return false;
      }

      base.checkVisible = setInterval(function () {
        if (base.$elem.is(":visible")) {
          base.reload();
          base.$elem.animate({
            opacity: 1
          }, 200);
          clearInterval(base.checkVisible);
        }
      }, 500);
    },
    wrapItems: function wrapItems() {
      var base = this;
      base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
      base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
      base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
      base.$elem.css("display", "block");
    },
    baseClass: function baseClass() {
      var base = this;
      var hasBaseClass = base.$elem.hasClass(base.options.baseClass);
      var hasThemeClass = base.$elem.hasClass(base.options.theme);

      if (!hasBaseClass) {
        base.$elem.addClass(base.options.baseClass);
      }

      if (!hasThemeClass) {
        base.$elem.addClass(base.options.theme);
      }
    },
    updateItems: function updateItems() {
      var base = this;

      if (base.options.responsive === false) {
        return false;
      }

      if (base.options.singleItem === true) {
        base.options.items = base.orignalItems = 1;
        base.options.itemsCustom = false;
        base.options.itemsDesktop = false;
        base.options.itemsDesktopSmall = false;
        base.options.itemsTablet = false;
        base.options.itemsTabletSmall = false;
        base.options.itemsMobile = false;
        return false;
      }

      var width = $(base.options.responsiveBaseWidth).width();

      if (width > (base.options.itemsDesktop[0] || base.orignalItems)) {
        base.options.items = base.orignalItems;
      }

      if (typeof base.options.itemsCustom !== 'undefined' && base.options.itemsCustom !== false) {
        //Reorder array by screen size
        base.options.itemsCustom.sort(function (a, b) {
          return a[0] - b[0];
        });

        for (var i in base.options.itemsCustom) {
          if (typeof base.options.itemsCustom[i] !== 'undefined' && base.options.itemsCustom[i][0] <= width) {
            base.options.items = base.options.itemsCustom[i][1];
          }
        }
      } else {
        if (width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false) {
          base.options.items = base.options.itemsDesktop[1];
        }

        if (width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false) {
          base.options.items = base.options.itemsDesktopSmall[1];
        }

        if (width <= base.options.itemsTablet[0] && base.options.itemsTablet !== false) {
          base.options.items = base.options.itemsTablet[1];
        }

        if (width <= base.options.itemsTabletSmall[0] && base.options.itemsTabletSmall !== false) {
          base.options.items = base.options.itemsTabletSmall[1];
        }

        if (width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false) {
          base.options.items = base.options.itemsMobile[1];
        }
      } //if number of items is less than declared


      if (base.options.items > base.itemsAmount && base.options.itemsScaleUp === true) {
        base.options.items = base.itemsAmount;
      }
    },
    response: function response() {
      var base = this,
          smallDelay;

      if (base.options.responsive !== true) {
        return false;
      }

      var lastWindowWidth = $(window).width();

      base.resizer = function () {
        if ($(window).width() !== lastWindowWidth) {
          if (base.options.autoPlay !== false) {
            clearInterval(base.autoPlayInterval);
          }

          clearTimeout(smallDelay);
          smallDelay = setTimeout(function () {
            lastWindowWidth = $(window).width();
            base.updateVars();
          }, base.options.responsiveRefreshRate);
        }
      };

      $(window).resize(base.resizer);
    },
    updatePosition: function updatePosition() {
      var base = this;
      base.jumpTo(base.currentItem);

      if (base.options.autoPlay !== false) {
        base.checkAp();
      }
    },
    appendItemsSizes: function appendItemsSizes() {
      var base = this;
      var roundPages = 0;
      var lastItem = base.itemsAmount - base.options.items;
      base.$owlItems.each(function (index) {
        var $this = $(this);
        $this.css({
          "width": base.itemWidth
        }).data("owl-item", Number(index));

        if (index % base.options.items === 0 || index === lastItem) {
          if (!(index > lastItem)) {
            roundPages += 1;
          }
        }

        $this.data("owl-roundPages", roundPages);
      });
    },
    appendWrapperSizes: function appendWrapperSizes() {
      var base = this;
      var width = 0;
      var width = base.$owlItems.length * base.itemWidth;
      base.$owlWrapper.css({
        "width": width * 2,
        "left": 0
      });
      base.appendItemsSizes();
    },
    calculateAll: function calculateAll() {
      var base = this;
      base.calculateWidth();
      base.appendWrapperSizes();
      base.loops();
      base.max();
    },
    calculateWidth: function calculateWidth() {
      var base = this;
      base.itemWidth = Math.round(base.$elem.width() / base.options.items);
    },
    max: function max() {
      var base = this;
      var maximum = (base.itemsAmount * base.itemWidth - base.options.items * base.itemWidth) * -1;

      if (base.options.items > base.itemsAmount) {
        base.maximumItem = 0;
        maximum = 0;
        base.maximumPixels = 0;
      } else {
        base.maximumItem = base.itemsAmount - base.options.items;
        base.maximumPixels = maximum;
      }

      return maximum;
    },
    min: function min() {
      return 0;
    },
    loops: function loops() {
      var base = this;
      base.positionsInArray = [0];
      base.pagesInArray = [];
      var prev = 0;
      var elWidth = 0;

      for (var i = 0; i < base.itemsAmount; i++) {
        elWidth += base.itemWidth;
        base.positionsInArray.push(-elWidth);

        if (base.options.scrollPerPage === true) {
          var item = $(base.$owlItems[i]);
          var roundPageNum = item.data("owl-roundPages");

          if (roundPageNum !== prev) {
            base.pagesInArray[prev] = base.positionsInArray[i];
            prev = roundPageNum;
          }
        }
      }
    },
    buildControls: function buildControls() {
      var base = this;

      if (base.options.navigation === true || base.options.pagination === true) {
        base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem);
      }

      if (base.options.pagination === true) {
        base.buildPagination();
      }

      if (base.options.navigation === true) {
        base.buildButtons();
      }
    },
    buildButtons: function buildButtons() {
      var base = this;
      var buttonsWrapper = $("<div class=\"owl-buttons\"/>");
      base.owlControls.append(buttonsWrapper);
      base.buttonPrev = $("<div/>", {
        "class": "owl-prev",
        "html": base.options.navigationText[0] || ""
      });
      base.buttonNext = $("<div/>", {
        "class": "owl-next",
        "html": base.options.navigationText[1] || ""
      });
      buttonsWrapper.append(base.buttonPrev).append(base.buttonNext);
      buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function (event) {
        event.preventDefault();
      });
      buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function (event) {
        event.preventDefault();

        if ($(this).hasClass("owl-next")) {
          base.next();
        } else {
          base.prev();
        }
      });
    },
    buildPagination: function buildPagination() {
      var base = this;
      base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
      base.owlControls.append(base.paginationWrapper);
      base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (event) {
        event.preventDefault();

        if (Number($(this).data("owl-page")) !== base.currentItem) {
          base.goTo(Number($(this).data("owl-page")), true);
        }
      });
    },
    updatePagination: function updatePagination() {
      var base = this;

      if (base.options.pagination === false) {
        return false;
      }

      base.paginationWrapper.html("");
      var counter = 0;
      var lastPage = base.itemsAmount - base.itemsAmount % base.options.items;

      for (var i = 0; i < base.itemsAmount; i++) {
        if (i % base.options.items === 0) {
          counter += 1;

          if (lastPage === i) {
            var lastItem = base.itemsAmount - base.options.items;
          }

          var paginationButton = $("<div/>", {
            "class": "owl-page"
          });
          var paginationButtonInner = $("<span></span>", {
            "text": base.options.paginationNumbers === true ? counter : "",
            "class": base.options.paginationNumbers === true ? "owl-numbers" : ""
          });
          paginationButton.append(paginationButtonInner);
          paginationButton.data("owl-page", lastPage === i ? lastItem : i);
          paginationButton.data("owl-roundPages", counter);
          base.paginationWrapper.append(paginationButton);
        }
      }

      base.checkPagination();
    },
    checkPagination: function checkPagination() {
      var base = this;

      if (base.options.pagination === false) {
        return false;
      }

      base.paginationWrapper.find(".owl-page").each(function (i, v) {
        if ($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages")) {
          base.paginationWrapper.find(".owl-page").removeClass("active");
          $(this).addClass("active");
        }
      });
    },
    checkNavigation: function checkNavigation() {
      var base = this;

      if (base.options.navigation === false) {
        return false;
      }

      if (base.options.rewindNav === false) {
        if (base.currentItem === 0 && base.maximumItem === 0) {
          base.buttonPrev.addClass("disabled");
          base.buttonNext.addClass("disabled");
        } else if (base.currentItem === 0 && base.maximumItem !== 0) {
          base.buttonPrev.addClass("disabled");
          base.buttonNext.removeClass("disabled");
        } else if (base.currentItem === base.maximumItem) {
          base.buttonPrev.removeClass("disabled");
          base.buttonNext.addClass("disabled");
        } else if (base.currentItem !== 0 && base.currentItem !== base.maximumItem) {
          base.buttonPrev.removeClass("disabled");
          base.buttonNext.removeClass("disabled");
        }
      }
    },
    updateControls: function updateControls() {
      var base = this;
      base.updatePagination();
      base.checkNavigation();

      if (base.owlControls) {
        if (base.options.items >= base.itemsAmount) {
          base.owlControls.hide();
        } else {
          base.owlControls.show();
        }
      }
    },
    destroyControls: function destroyControls() {
      var base = this;

      if (base.owlControls) {
        base.owlControls.remove();
      }
    },
    next: function next(speed) {
      var base = this;

      if (base.isTransition) {
        return false;
      }

      base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1;

      if (base.currentItem > base.maximumItem + (base.options.scrollPerPage == true ? base.options.items - 1 : 0)) {
        if (base.options.rewindNav === true) {
          base.currentItem = 0;
          speed = "rewind";
        } else {
          base.currentItem = base.maximumItem;
          return false;
        }
      }

      base.goTo(base.currentItem, speed);
    },
    prev: function prev(speed) {
      var base = this;

      if (base.isTransition) {
        return false;
      }

      if (base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items) {
        base.currentItem = 0;
      } else {
        base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1;
      }

      if (base.currentItem < 0) {
        if (base.options.rewindNav === true) {
          base.currentItem = base.maximumItem;
          speed = "rewind";
        } else {
          base.currentItem = 0;
          return false;
        }
      }

      base.goTo(base.currentItem, speed);
    },
    goTo: function goTo(position, speed, drag) {
      var base = this;

      if (base.isTransition) {
        return false;
      }

      if (typeof base.options.beforeMove === "function") {
        base.options.beforeMove.apply(this, [base.$elem]);
      }

      if (position >= base.maximumItem) {
        position = base.maximumItem;
      } else if (position <= 0) {
        position = 0;
      }

      base.currentItem = base.owl.currentItem = position;

      if (base.options.transitionStyle !== false && drag !== "drag" && base.options.items === 1 && base.browser.support3d === true) {
        base.swapSpeed(0);

        if (base.browser.support3d === true) {
          base.transition3d(base.positionsInArray[position]);
        } else {
          base.css2slide(base.positionsInArray[position], 1);
        }

        base.afterGo();
        base.singleItemTransition();
        return false;
      }

      var goToPixel = base.positionsInArray[position];

      if (base.browser.support3d === true) {
        base.isCss3Finish = false;

        if (speed === true) {
          base.swapSpeed("paginationSpeed");
          setTimeout(function () {
            base.isCss3Finish = true;
          }, base.options.paginationSpeed);
        } else if (speed === "rewind") {
          base.swapSpeed(base.options.rewindSpeed);
          setTimeout(function () {
            base.isCss3Finish = true;
          }, base.options.rewindSpeed);
        } else {
          base.swapSpeed("slideSpeed");
          setTimeout(function () {
            base.isCss3Finish = true;
          }, base.options.slideSpeed);
        }

        base.transition3d(goToPixel);
      } else {
        if (speed === true) {
          base.css2slide(goToPixel, base.options.paginationSpeed);
        } else if (speed === "rewind") {
          base.css2slide(goToPixel, base.options.rewindSpeed);
        } else {
          base.css2slide(goToPixel, base.options.slideSpeed);
        }
      }

      base.afterGo();
    },
    jumpTo: function jumpTo(position) {
      var base = this;

      if (typeof base.options.beforeMove === "function") {
        base.options.beforeMove.apply(this, [base.$elem]);
      }

      if (position >= base.maximumItem || position === -1) {
        position = base.maximumItem;
      } else if (position <= 0) {
        position = 0;
      }

      base.swapSpeed(0);

      if (base.browser.support3d === true) {
        base.transition3d(base.positionsInArray[position]);
      } else {
        base.css2slide(base.positionsInArray[position], 1);
      }

      base.currentItem = base.owl.currentItem = position;
      base.afterGo();
    },
    afterGo: function afterGo() {
      var base = this;
      base.prevArr.push(base.currentItem);
      base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length - 2];
      base.prevArr.shift(0);

      if (base.prevItem !== base.currentItem) {
        base.checkPagination();
        base.checkNavigation();
        base.eachMoveUpdate();

        if (base.options.autoPlay !== false) {
          base.checkAp();
        }
      }

      if (typeof base.options.afterMove === "function" && base.prevItem !== base.currentItem) {
        base.options.afterMove.apply(this, [base.$elem]);
      }
    },
    stop: function stop() {
      var base = this;
      base.apStatus = "stop";
      clearInterval(base.autoPlayInterval);
    },
    checkAp: function checkAp() {
      var base = this;

      if (base.apStatus !== "stop") {
        base.play();
      }
    },
    play: function play() {
      var base = this;
      base.apStatus = "play";

      if (base.options.autoPlay === false) {
        return false;
      }

      clearInterval(base.autoPlayInterval);
      base.autoPlayInterval = setInterval(function () {
        base.next(true);
      }, base.options.autoPlay);
    },
    swapSpeed: function swapSpeed(action) {
      var base = this;

      if (action === "slideSpeed") {
        base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));
      } else if (action === "paginationSpeed") {
        base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));
      } else if (typeof action !== "string") {
        base.$owlWrapper.css(base.addCssSpeed(action));
      }
    },
    addCssSpeed: function addCssSpeed(speed) {
      var base = this;
      return {
        "-webkit-transition": "all " + speed + "ms ease",
        "-moz-transition": "all " + speed + "ms ease",
        "-o-transition": "all " + speed + "ms ease",
        "transition": "all " + speed + "ms ease"
      };
    },
    removeTransition: function removeTransition() {
      return {
        "-webkit-transition": "",
        "-moz-transition": "",
        "-o-transition": "",
        "transition": ""
      };
    },
    doTranslate: function doTranslate(pixels) {
      return {
        "-webkit-transform": "translate3d(" + pixels + "px, 0px, 0px)",
        "-moz-transform": "translate3d(" + pixels + "px, 0px, 0px)",
        "-o-transform": "translate3d(" + pixels + "px, 0px, 0px)",
        "-ms-transform": "translate3d(" + pixels + "px, 0px, 0px)",
        "transform": "translate3d(" + pixels + "px, 0px,0px)"
      };
    },
    transition3d: function transition3d(value) {
      var base = this;
      base.$owlWrapper.css(base.doTranslate(value));
    },
    css2move: function css2move(value) {
      var base = this;
      base.$owlWrapper.css({
        "left": value
      });
    },
    css2slide: function css2slide(value, speed) {
      var base = this;
      base.isCssFinish = false;
      base.$owlWrapper.stop(true, true).animate({
        "left": value
      }, {
        duration: speed || base.options.slideSpeed,
        complete: function complete() {
          base.isCssFinish = true;
        }
      });
    },
    checkBrowser: function checkBrowser() {
      var base = this; //Check 3d support

      var translate3D = "translate3d(0px, 0px, 0px)",
          tempElem = document.createElement("div");
      tempElem.style.cssText = "  -moz-transform:" + translate3D + "; -ms-transform:" + translate3D + "; -o-transform:" + translate3D + "; -webkit-transform:" + translate3D + "; transform:" + translate3D;
      var regex = /translate3d\(0px, 0px, 0px\)/g,
          asSupport = tempElem.style.cssText.match(regex),
          support3d = asSupport !== null && asSupport.length === 1;
      var isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints;
      base.browser = {
        "support3d": support3d,
        "isTouch": isTouch
      };
    },
    moveEvents: function moveEvents() {
      var base = this;

      if (base.options.mouseDrag !== false || base.options.touchDrag !== false) {
        base.gestures();
        base.disabledEvents();
      }
    },
    eventTypes: function eventTypes() {
      var base = this;
      var types = ["s", "e", "x"];
      base.ev_types = {};

      if (base.options.mouseDrag === true && base.options.touchDrag === true) {
        types = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"];
      } else if (base.options.mouseDrag === false && base.options.touchDrag === true) {
        types = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"];
      } else if (base.options.mouseDrag === true && base.options.touchDrag === false) {
        types = ["mousedown.owl", "mousemove.owl", "mouseup.owl"];
      }

      base.ev_types["start"] = types[0];
      base.ev_types["move"] = types[1];
      base.ev_types["end"] = types[2];
    },
    disabledEvents: function disabledEvents() {
      var base = this;
      base.$elem.on("dragstart.owl", function (event) {
        event.preventDefault();
      });
      base.$elem.on("mousedown.disableTextSelect", function (e) {
        return $(e.target).is('input, textarea, select, option');
      });
    },
    gestures: function gestures() {
      var base = this;
      var locals = {
        offsetX: 0,
        offsetY: 0,
        baseElWidth: 0,
        relativePos: 0,
        position: null,
        minSwipe: null,
        maxSwipe: null,
        sliding: null,
        dargging: null,
        targetElement: null
      };
      base.isCssFinish = true;

      function getTouches(event) {
        if (event.touches) {
          return {
            x: event.touches[0].pageX,
            y: event.touches[0].pageY
          };
        } else {
          if (event.pageX !== undefined) {
            return {
              x: event.pageX,
              y: event.pageY
            };
          } else {
            return {
              x: event.clientX,
              y: event.clientY
            };
          }
        }
      }

      function swapEvents(type) {
        if (type === "on") {
          $(document).on(base.ev_types["move"], dragMove);
          $(document).on(base.ev_types["end"], dragEnd);
        } else if (type === "off") {
          $(document).off(base.ev_types["move"]);
          $(document).off(base.ev_types["end"]);
        }
      }

      function dragStart(event) {
        var event = event.originalEvent || event || window.event;

        if (event.which === 3) {
          return false;
        }

        if (base.itemsAmount <= base.options.items) {
          return;
        }

        if (base.isCssFinish === false && !base.options.dragBeforeAnimFinish) {
          return false;
        }

        if (base.isCss3Finish === false && !base.options.dragBeforeAnimFinish) {
          return false;
        }

        if (base.options.autoPlay !== false) {
          clearInterval(base.autoPlayInterval);
        }

        if (base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")) {
          base.$owlWrapper.addClass("grabbing");
        }

        base.newPosX = 0;
        base.newRelativeX = 0;
        $(this).css(base.removeTransition());
        var position = $(this).position();
        locals.relativePos = position.left;
        locals.offsetX = getTouches(event).x - position.left;
        locals.offsetY = getTouches(event).y - position.top;
        swapEvents("on");
        locals.sliding = false;
        locals.targetElement = event.target || event.srcElement;
      }

      function dragMove(event) {
        var event = event.originalEvent || event || window.event;
        base.newPosX = getTouches(event).x - locals.offsetX;
        base.newPosY = getTouches(event).y - locals.offsetY;
        base.newRelativeX = base.newPosX - locals.relativePos;

        if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newRelativeX !== 0) {
          locals.dragging = true;
          base.options.startDragging.apply(base, [base.$elem]);
        }

        if (base.newRelativeX > 8 || base.newRelativeX < -8 && base.browser.isTouch === true) {
          event.preventDefault ? event.preventDefault() : event.returnValue = false;
          locals.sliding = true;
        }

        if ((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false) {
          $(document).off("touchmove.owl");
        }

        var minSwipe = function minSwipe() {
          return base.newRelativeX / 5;
        };

        var maxSwipe = function maxSwipe() {
          return base.maximumPixels + base.newRelativeX / 5;
        };

        base.newPosX = Math.max(Math.min(base.newPosX, minSwipe()), maxSwipe());

        if (base.browser.support3d === true) {
          base.transition3d(base.newPosX);
        } else {
          base.css2move(base.newPosX);
        }
      }

      function dragEnd(event) {
        var event = event.originalEvent || event || window.event;
        event.target = event.target || event.srcElement;
        locals.dragging = false;

        if (base.browser.isTouch !== true) {
          base.$owlWrapper.removeClass("grabbing");
        }

        if (base.newRelativeX < 0) {
          base.dragDirection = base.owl.dragDirection = "left";
        } else {
          base.dragDirection = base.owl.dragDirection = "right";
        }

        if (base.newRelativeX !== 0) {
          var newPosition = base.getNewPosition();
          base.goTo(newPosition, false, "drag");

          if (locals.targetElement === event.target && base.browser.isTouch !== true) {
            $(event.target).on("click.disable", function (ev) {
              ev.stopImmediatePropagation();
              ev.stopPropagation();
              ev.preventDefault();
              $(event.target).off("click.disable");
            });

            var handlers = $._data(event.target, "events")["click"];

            var owlStopEvent = handlers.pop();
            handlers.splice(0, 0, owlStopEvent);
          }
        }

        swapEvents("off");
      }

      base.$elem.on(base.ev_types["start"], ".owl-wrapper", dragStart);
    },
    getNewPosition: function getNewPosition() {
      var base = this,
          newPosition;
      newPosition = base.closestItem();

      if (newPosition > base.maximumItem) {
        base.currentItem = base.maximumItem;
        newPosition = base.maximumItem;
      } else if (base.newPosX >= 0) {
        newPosition = 0;
        base.currentItem = 0;
      }

      return newPosition;
    },
    closestItem: function closestItem() {
      var base = this,
          array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray,
          goal = base.newPosX,
          closest = null;
      $.each(array, function (i, v) {
        if (goal - base.itemWidth / 20 > array[i + 1] && goal - base.itemWidth / 20 < v && base.moveDirection() === "left") {
          closest = v;

          if (base.options.scrollPerPage === true) {
            base.currentItem = $.inArray(closest, base.positionsInArray);
          } else {
            base.currentItem = i;
          }
        } else if (goal + base.itemWidth / 20 < v && goal + base.itemWidth / 20 > (array[i + 1] || array[i] - base.itemWidth) && base.moveDirection() === "right") {
          if (base.options.scrollPerPage === true) {
            closest = array[i + 1] || array[array.length - 1];
            base.currentItem = $.inArray(closest, base.positionsInArray);
          } else {
            closest = array[i + 1];
            base.currentItem = i + 1;
          }
        }
      });
      return base.currentItem;
    },
    moveDirection: function moveDirection() {
      var base = this,
          direction;

      if (base.newRelativeX < 0) {
        direction = "right";
        base.playDirection = "next";
      } else {
        direction = "left";
        base.playDirection = "prev";
      }

      return direction;
    },
    customEvents: function customEvents() {
      var base = this;
      base.$elem.on("owl.next", function () {
        base.next();
      });
      base.$elem.on("owl.prev", function () {
        base.prev();
      });
      base.$elem.on("owl.play", function (event, speed) {
        base.options.autoPlay = speed;
        base.play();
        base.hoverStatus = "play";
      });
      base.$elem.on("owl.stop", function () {
        base.stop();
        base.hoverStatus = "stop";
      });
      base.$elem.on("owl.goTo", function (event, item) {
        base.goTo(item);
      });
      base.$elem.on("owl.jumpTo", function (event, item) {
        base.jumpTo(item);
      });
    },
    stopOnHover: function stopOnHover() {
      var base = this;

      if (base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false) {
        base.$elem.on("mouseover", function () {
          base.stop();
        });
        base.$elem.on("mouseout", function () {
          if (base.hoverStatus !== "stop") {
            base.play();
          }
        });
      }
    },
    lazyLoad: function lazyLoad() {
      var base = this;

      if (base.options.lazyLoad === false) {
        return false;
      }

      for (var i = 0; i < base.itemsAmount; i++) {
        var $item = $(base.$owlItems[i]);

        if ($item.data("owl-loaded") === "loaded") {
          continue;
        }

        var itemNumber = $item.data("owl-item"),
            $lazyImg = $item.find(".lazyOwl"),
            follow;

        if (typeof $lazyImg.data("src") !== "string") {
          $item.data("owl-loaded", "loaded");
          continue;
        }

        if ($item.data("owl-loaded") === undefined) {
          $lazyImg.hide();
          $item.addClass("loading").data("owl-loaded", "checked");
        }

        if (base.options.lazyFollow === true) {
          follow = itemNumber >= base.currentItem;
        } else {
          follow = true;
        }

        if (follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length) {
          base.lazyPreload($item, $lazyImg);
        }
      }
    },
    lazyPreload: function lazyPreload($item, $lazyImg) {
      var base = this,
          iterations = 0;

      if ($lazyImg.prop("tagName") === "DIV") {
        $lazyImg.css("background-image", "url(" + $lazyImg.data("src") + ")");
        var isBackgroundImg = true;
      } else {
        $lazyImg[0].src = $lazyImg.data("src");
      }

      checkLazyImage();

      function checkLazyImage() {
        iterations += 1;

        if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
          showImage();
        } else if (iterations <= 100) {
          //if image loads in less than 10 seconds 
          setTimeout(checkLazyImage, 100);
        } else {
          showImage();
        }
      }

      function showImage() {
        $item.data("owl-loaded", "loaded").removeClass("loading");
        $lazyImg.removeAttr("data-src");
        base.options.lazyEffect === "fade" ? $lazyImg.fadeIn(400) : $lazyImg.show();

        if (typeof base.options.afterLazyLoad === "function") {
          base.options.afterLazyLoad.apply(this, [base.$elem]);
        }
      }
    },
    autoHeight: function autoHeight() {
      var base = this;
      var $currentimg = $(base.$owlItems[base.currentItem]).find("img");

      if ($currentimg.get(0) !== undefined) {
        var iterations = 0;
        checkImage();
      } else {
        addHeight();
      }

      function checkImage() {
        iterations += 1;

        if (base.completeImg($currentimg.get(0))) {
          addHeight();
        } else if (iterations <= 100) {
          //if image loads in less than 10 seconds 
          setTimeout(checkImage, 100);
        } else {
          base.wrapperOuter.css("height", ""); //Else remove height attribute
        }
      }

      function addHeight() {
        var $currentItem = $(base.$owlItems[base.currentItem]).height();
        base.wrapperOuter.css("height", $currentItem + "px");

        if (!base.wrapperOuter.hasClass("autoHeight")) {
          setTimeout(function () {
            base.wrapperOuter.addClass("autoHeight");
          }, 0);
        }
      }
    },
    completeImg: function completeImg(img) {
      if (!img.complete) {
        return false;
      }

      if (typeof img.naturalWidth !== "undefined" && img.naturalWidth == 0) {
        return false;
      }

      return true;
    },
    onVisibleItems: function onVisibleItems() {
      var base = this;

      if (base.options.addClassActive === true) {
        base.$owlItems.removeClass("active");
      }

      base.visibleItems = [];

      for (var i = base.currentItem; i < base.currentItem + base.options.items; i++) {
        base.visibleItems.push(i);

        if (base.options.addClassActive === true) {
          $(base.$owlItems[i]).addClass("active");
        }
      }

      base.owl.visibleItems = base.visibleItems;
    },
    transitionTypes: function transitionTypes(className) {
      var base = this; //Currently available: "fade","backSlide","goDown","fadeUp"

      base.outClass = "owl-" + className + "-out";
      base.inClass = "owl-" + className + "-in";
    },
    singleItemTransition: function singleItemTransition() {
      var base = this;
      base.isTransition = true;
      var outClass = base.outClass,
          inClass = base.inClass,
          $currentItem = base.$owlItems.eq(base.currentItem),
          $prevItem = base.$owlItems.eq(base.prevItem),
          prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
          origin = Math.abs(base.positionsInArray[base.currentItem]) + base.itemWidth / 2;
      base.$owlWrapper.addClass('owl-origin').css({
        "-webkit-transform-origin": origin + "px",
        "-moz-perspective-origin": origin + "px",
        "perspective-origin": origin + "px"
      });

      function transStyles(prevPos, zindex) {
        return {
          "position": "relative",
          "left": prevPos + "px"
        };
      }

      var animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';
      $prevItem.css(transStyles(prevPos, 10)).addClass(outClass).on(animEnd, function () {
        base.endPrev = true;
        $prevItem.off(animEnd);
        base.clearTransStyle($prevItem, outClass);
      });
      $currentItem.addClass(inClass).on(animEnd, function () {
        base.endCurrent = true;
        $currentItem.off(animEnd);
        base.clearTransStyle($currentItem, inClass);
      });
    },
    clearTransStyle: function clearTransStyle(item, classToRemove) {
      var base = this;
      item.css({
        "position": "",
        "left": ""
      }).removeClass(classToRemove);

      if (base.endPrev && base.endCurrent) {
        base.$owlWrapper.removeClass('owl-origin');
        base.endPrev = false;
        base.endCurrent = false;
        base.isTransition = false;
      }
    },
    owlStatus: function owlStatus() {
      var base = this;
      base.owl = {
        "userOptions": base.userOptions,
        "baseElement": base.$elem,
        "userItems": base.$userItems,
        "owlItems": base.$owlItems,
        "currentItem": base.currentItem,
        "prevItem": base.prevItem,
        "visibleItems": base.visibleItems,
        "isTouch": base.browser.isTouch,
        "browser": base.browser,
        "dragDirection": base.dragDirection
      };
    },
    clearEvents: function clearEvents() {
      var base = this;
      base.$elem.off(".owl owl mousedown.disableTextSelect");
      $(document).off(".owl owl");
      $(window).off("resize", base.resizer);
    },
    unWrap: function unWrap() {
      var base = this;

      if (base.$elem.children().length !== 0) {
        base.$owlWrapper.unwrap();
        base.$userItems.unwrap().unwrap();

        if (base.owlControls) {
          base.owlControls.remove();
        }
      }

      base.clearEvents();
      base.$elem.attr("style", base.$elem.data("owl-originalStyles") || "").attr("class", base.$elem.data("owl-originalClasses"));
    },
    destroy: function destroy() {
      var base = this;
      base.stop();
      clearInterval(base.checkVisible);
      base.unWrap();
      base.$elem.removeData();
    },
    reinit: function reinit(newOptions) {
      var base = this;
      var options = $.extend({}, base.userOptions, newOptions);
      base.unWrap();
      base.init(options, base.$elem);
    },
    addItem: function addItem(htmlString, targetPosition) {
      var base = this,
          position;

      if (!htmlString) {
        return false;
      }

      if (base.$elem.children().length === 0) {
        base.$elem.append(htmlString);
        base.setVars();
        return false;
      }

      base.unWrap();

      if (targetPosition === undefined || targetPosition === -1) {
        position = -1;
      } else {
        position = targetPosition;
      }

      if (position >= base.$userItems.length || position === -1) {
        base.$userItems.eq(-1).after(htmlString);
      } else {
        base.$userItems.eq(position).before(htmlString);
      }

      base.setVars();
    },
    removeItem: function removeItem(targetPosition) {
      var base = this,
          position;

      if (base.$elem.children().length === 0) {
        return false;
      }

      if (targetPosition === undefined || targetPosition === -1) {
        position = -1;
      } else {
        position = targetPosition;
      }

      base.unWrap();
      base.$userItems.eq(position).remove();
      base.setVars();
    }
  };

  $.fn.owlCarousel = function (options) {
    return this.each(function () {
      if ($(this).data("owl-init") === true) {
        return false;
      }

      $(this).data("owl-init", true);
      var carousel = Object.create(Carousel);
      carousel.init(options, this);
      $.data(this, "owlCarousel", carousel);
    });
  };

  $.fn.owlCarousel.options = {
    items: 5,
    itemsCustom: false,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [979, 3],
    itemsTablet: [768, 2],
    itemsTabletSmall: false,
    itemsMobile: [479, 1],
    singleItem: false,
    itemsScaleUp: false,
    slideSpeed: 200,
    paginationSpeed: 800,
    rewindSpeed: 1000,
    autoPlay: false,
    stopOnHover: false,
    navigation: false,
    navigationText: ["prev", "next"],
    rewindNav: true,
    scrollPerPage: false,
    pagination: true,
    paginationNumbers: false,
    responsive: true,
    responsiveRefreshRate: 200,
    responsiveBaseWidth: window,
    baseClass: "owl-carousel",
    theme: "owl-theme",
    lazyLoad: false,
    lazyFollow: true,
    lazyEffect: "fade",
    autoHeight: false,
    jsonPath: false,
    jsonSuccess: false,
    dragBeforeAnimFinish: true,
    mouseDrag: true,
    touchDrag: true,
    addClassActive: false,
    transitionStyle: false,
    beforeUpdate: false,
    afterUpdate: false,
    beforeInit: false,
    afterInit: false,
    beforeMove: false,
    afterMove: false,
    afterAction: false,
    startDragging: false,
    afterLazyLoad: false
  };
})(jQuery, window, document);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
* MIXITUP - A CSS3 & JQuery Filter and Sort Plugin
* Version: 1.4.0
* Author: Patrick Kunka
* Copyright 2012-2013 Patrick Kunka, All Rights Reserved
* FREE FOR NON-COMMERCIAL USE
* http://www.mixitup.io
*/
(function (e) {
  function m(d, b, h, c, a) {
    function j() {
      k.unbind();
      b && v(b, h, c, a);
      a.startOrder = [];
      a.newOrder = [];
      a.origSort = [];
      a.checkSort = [];
      u.removeStyle(a.prefix + "filter, filter, " + a.prefix + "transform, transform, opacity, display").css(a.clean).removeAttr("data-checksum");
      window.atob || u.css({
        display: "none",
        opacity: "0"
      });
      k.removeStyle(a.prefix + "transition, transition, " + a.prefix + "perspective, perspective, " + a.prefix + "perspective-origin, perspective-origin, " + (a.resizeContainer ? "height" : ""));
      "list" == a.layoutMode ? (q.css({
        display: a.targetDisplayList,
        opacity: "1"
      }), a.origDisplay = a.targetDisplayList) : (q.css({
        display: a.targetDisplayGrid,
        opacity: "1"
      }), a.origDisplay = a.targetDisplayGrid);
      a.origLayout = a.layoutMode;
      setTimeout(function () {
        u.removeStyle(a.prefix + "transition, transition");
        a.mixing = !1;

        if ("function" == typeof a.onMixEnd) {
          var b = a.onMixEnd.call(this, a);
          a = b ? b : a;
        }
      });
    }

    clearInterval(a.failsafe);
    a.mixing = !0;

    if ("function" == typeof a.onMixStart) {
      var f = a.onMixStart.call(this, a);
      a = f ? f : a;
    }

    for (var g = a.transitionSpeed, f = 0; 2 > f; f++) {
      var n = 0 == f ? n = a.prefix : "";
      a.transition[n + "transition"] = "all " + g + "ms linear";
      a.transition[n + "transform"] = n + "translate3d(0,0,0)";
      a.perspective[n + "perspective"] = a.perspectiveDistance + "px";
      a.perspective[n + "perspective-origin"] = a.perspectiveOrigin;
    }

    var r = a.targetSelector,
        u = c.find(r);
    u.each(function () {
      this.data = {};
    });
    var k = u.parent();
    k.css(a.perspective);
    a.easingFallback = "ease-in-out";
    "smooth" == a.easing && (a.easing = "cubic-bezier(0.25, 0.46, 0.45, 0.94)");
    "snap" == a.easing && (a.easing = "cubic-bezier(0.77, 0, 0.175, 1)");
    "windback" == a.easing && (a.easing = "cubic-bezier(0.175, 0.885, 0.320, 1.275)", a.easingFallback = "cubic-bezier(0.175, 0.885, 0.320, 1)");
    "windup" == a.easing && (a.easing = "cubic-bezier(0.6, -0.28, 0.735, 0.045)", a.easingFallback = "cubic-bezier(0.6, 0.28, 0.735, 0.045)");
    f = "list" == a.layoutMode && null != a.listEffects ? a.listEffects : a.effects;
    Array.prototype.indexOf && (a.fade = -1 < f.indexOf("fade") ? "0" : "", a.scale = -1 < f.indexOf("scale") ? "scale(.01)" : "", a.rotateZ = -1 < f.indexOf("rotateZ") ? "rotate(180deg)" : "", a.rotateY = -1 < f.indexOf("rotateY") ? "rotateY(90deg)" : "", a.rotateX = -1 < f.indexOf("rotateX") ? "rotateX(90deg)" : "", a.blur = -1 < f.indexOf("blur") ? "blur(8px)" : "", a.grayscale = -1 < f.indexOf("grayscale") ? "grayscale(100%)" : "");
    d = d.replace(/\s|\//g, ".");
    var q = e(),
        s = e();

    if ("or" == a.filterLogic) {
      var m = d.split(".");
      !0 == a.multiFilter && "" == m[0] && m.shift();
      1 > m.length ? s = s.add(c.find(r + ":visible")) : u.each(function () {
        for (var a = 0, b = e(this), c = 0; c < m.length; c++) {
          b.hasClass(m[c]) && (q = q.add(b), a++);
        }

        0 == a && (s = s.add(b));
      });
    } else q = q.add(k.find(r + "." + d)), s = s.add(k.find(r + ":not(." + d + "):visible"));

    d = q.length;
    var t = e(),
        p = e(),
        l = e();
    s.each(function () {
      var a = e(this);
      "none" != a.css("display") && (t = t.add(a), l = l.add(a));
    });

    if (q.filter(":visible").length == d && !t.length && !b) {
      if (a.origLayout == a.layoutMode) return j(), !1;
      if (1 == q.length) return "list" == a.layoutMode ? (c.addClass(a.listClass), c.removeClass(a.gridClass), l.css("display", a.targetDisplayList)) : (c.addClass(a.gridClass), c.removeClass(a.listClass), l.css("display", a.targetDisplayGrid)), j(), !1;
    }

    a.origHeight = k.height();

    if (q.length) {
      c.removeClass(a.failClass);
      q.each(function () {
        var a = e(this);
        "none" == a.css("display") ? p = p.add(a) : l = l.add(a);
      });
      if (a.origLayout != a.layoutMode && !1 == a.animateGridList) return "list" == a.layoutMode ? (c.addClass(a.listClass), c.removeClass(a.gridClass), l.css("display", a.targetDisplayList)) : (c.addClass(a.gridClass), c.removeClass(a.listClass), l.css("display", a.targetDisplayGrid)), j(), !1;
      if (!window.atob) return j(), !1;
      u.css(a.clean);
      l.each(function () {
        this.data.origPos = e(this).offset();
      });
      "list" == a.layoutMode ? (c.addClass(a.listClass), c.removeClass(a.gridClass), p.css("display", a.targetDisplayList)) : (c.addClass(a.gridClass), c.removeClass(a.listClass), p.css("display", a.targetDisplayGrid));
      p.each(function () {
        this.data.showInterPos = e(this).offset();
      });
      t.each(function () {
        this.data.hideInterPos = e(this).offset();
      });
      l.each(function () {
        this.data.preInterPos = e(this).offset();
      });
      "list" == a.layoutMode ? l.css("display", a.targetDisplayList) : l.css("display", a.targetDisplayGrid);
      b && v(b, h, c, a);
      if (b && a.origSort.compare(a.checkSort)) return j(), !1;
      t.hide();
      p.each(function () {
        this.data.finalPos = e(this).offset();
      });
      l.each(function () {
        this.data.finalPrePos = e(this).offset();
      });
      a.newHeight = k.height();
      b && v("reset", null, c, a);
      p.hide();
      l.css("display", a.origDisplay);
      "block" == a.origDisplay ? (c.addClass(a.listClass), p.css("display", a.targetDisplayList)) : (c.removeClass(a.listClass), p.css("display", a.targetDisplayGrid));
      a.resizeContainer && k.css("height", a.origHeight + "px");
      d = {};

      for (f = 0; 2 > f; f++) {
        n = 0 == f ? n = a.prefix : "", d[n + "transform"] = a.scale + " " + a.rotateX + " " + a.rotateY + " " + a.rotateZ, d[n + "filter"] = a.blur + " " + a.grayscale;
      }

      p.css(d);
      l.each(function () {
        var b = this.data,
            c = e(this);
        c.hasClass("mix_tohide") ? (b.preTX = b.origPos.left - b.hideInterPos.left, b.preTY = b.origPos.top - b.hideInterPos.top) : (b.preTX = b.origPos.left - b.preInterPos.left, b.preTY = b.origPos.top - b.preInterPos.top);

        for (var d = {}, g = 0; 2 > g; g++) {
          var f = 0 == g ? f = a.prefix : "";
          d[f + "transform"] = "translate(" + b.preTX + "px," + b.preTY + "px)";
        }

        c.css(d);
      });
      "list" == a.layoutMode ? (c.addClass(a.listClass), c.removeClass(a.gridClass)) : (c.addClass(a.gridClass), c.removeClass(a.listClass));
      setTimeout(function () {
        if (a.resizeContainer) {
          for (var b = {}, c = 0; 2 > c; c++) {
            var d = 0 == c ? d = a.prefix : "";
            b[d + "transition"] = "all " + g + "ms ease-in-out";
            b.height = a.newHeight + "px";
          }

          k.css(b);
        }

        t.css("opacity", a.fade);
        p.css("opacity", 1);
        p.each(function () {
          var b = this.data;
          b.tX = b.finalPos.left - b.showInterPos.left;
          b.tY = b.finalPos.top - b.showInterPos.top;

          for (var c = {}, d = 0; 2 > d; d++) {
            var f = 0 == d ? f = a.prefix : "";
            c[f + "transition-property"] = f + "transform, " + f + "filter, opacity";
            c[f + "transition-timing-function"] = a.easing + ", linear, linear";
            c[f + "transition-duration"] = g + "ms";
            c[f + "transition-delay"] = "0";
            c[f + "transform"] = "translate(" + b.tX + "px," + b.tY + "px)";
            c[f + "filter"] = "none";
          }

          e(this).css("-webkit-transition", "all " + g + "ms " + a.easingFallback).css(c);
        });
        l.each(function () {
          var b = this.data;
          b.tX = 0 != b.finalPrePos.left ? b.finalPrePos.left - b.preInterPos.left : 0;
          b.tY = 0 != b.finalPrePos.left ? b.finalPrePos.top - b.preInterPos.top : 0;

          for (var c = {}, d = 0; 2 > d; d++) {
            var f = 0 == d ? f = a.prefix : "";
            c[f + "transition"] = "all " + g + "ms " + a.easing;
            c[f + "transform"] = "translate(" + b.tX + "px," + b.tY + "px)";
          }

          e(this).css("-webkit-transition", "all " + g + "ms " + a.easingFallback).css(c);
        });
        b = {};

        for (c = 0; 2 > c; c++) {
          d = 0 == c ? d = a.prefix : "", b[d + "transition"] = "all " + g + "ms " + a.easing + ", " + d + "filter " + g + "ms linear, opacity " + g + "ms linear", b[d + "transform"] = a.scale + " " + a.rotateX + " " + a.rotateY + " " + a.rotateZ, b[d + "filter"] = a.blur + " " + a.grayscale, b.opacity = a.fade;
        }

        t.css(b);
        k.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd", function (a) {
          if (-1 < a.originalEvent.propertyName.indexOf("transform") || -1 < a.originalEvent.propertyName.indexOf("opacity")) -1 < r.indexOf(".") ? e(a.target).hasClass(r.replace(".", "")) && j() : e(a.target).is(r) && j();
        });
      }, 10);
      a.failsafe = setTimeout(function () {
        a.mixing && j();
      }, g + 400);
    } else {
      a.resizeContainer && k.css("height", a.origHeight + "px");
      if (!window.atob) return j(), !1;
      t = s;
      setTimeout(function () {
        k.css(a.perspective);

        if (a.resizeContainer) {
          for (var b = {}, d = 0; 2 > d; d++) {
            var e = 0 == d ? e = a.prefix : "";
            b[e + "transition"] = "height " + g + "ms ease-in-out";
            b.height = a.minHeight + "px";
          }

          k.css(b);
        }

        u.css(a.transition);

        if (s.length) {
          b = {};

          for (d = 0; 2 > d; d++) {
            e = 0 == d ? e = a.prefix : "", b[e + "transform"] = a.scale + " " + a.rotateX + " " + a.rotateY + " " + a.rotateZ, b[e + "filter"] = a.blur + " " + a.grayscale, b.opacity = a.fade;
          }

          t.css(b);
          k.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd", function (b) {
            if (-1 < b.originalEvent.propertyName.indexOf("transform") || -1 < b.originalEvent.propertyName.indexOf("opacity")) c.addClass(a.failClass), j();
          });
        } else a.mixing = !1;
      }, 10);
    }
  }

  function v(d, b, h, c) {
    function a(a, b) {
      return 1 * a.attr(d).toLowerCase() < 1 * b.attr(d).toLowerCase() ? -1 : 1 * a.attr(d).toLowerCase() > 1 * b.attr(d).toLowerCase() ? 1 : 0;
    }

    function j(a) {
      "asc" == b ? f.prepend(a).prepend(" \
	") : f.append(a).append(" \
	");
    }

    h.find(c.targetSelector).wrapAll('<div class="mix_sorter"/>');
    var f = h.find(".mix_sorter");
    c.origSort.length || f.find(c.targetSelector + ":visible").each(function () {
      e(this).wrap("<s/>");
      c.origSort.push(e(this).parent().html().replace(/\s+/g, ""));
      e(this).unwrap();
    });
    f.empty();
    if ("reset" == d) e.each(c.startOrder, function () {
      f.append(this).append(" \
	");
    });else if ("default" == d) e.each(c.origOrder, function () {
      j(this);
    });else if ("random" == d) {
      if (!c.newOrder.length) {
        for (var g = c.startOrder.slice(), n = g.length, r = n; r--;) {
          var m = parseInt(Math.random() * n),
              k = g[r];
          g[r] = g[m];
          g[m] = k;
        }

        c.newOrder = g;
      }

      e.each(c.newOrder, function () {
        f.append(this).append(" \
	");
      });
    } else "custom" == d ? e.each(b, function () {
      j(this);
    }) : ("undefined" === typeof c.origOrder[0].attr(d) && console.log("No such attribute found. Terminating"), c.newOrder.length || (e.each(c.origOrder, function () {
      c.newOrder.push(e(this));
    }), c.newOrder.sort(a)), e.each(c.newOrder, function () {
      j(this);
    }));
    c.checkSort = [];
    f.find(c.targetSelector + ":visible").each(function (a) {
      var b = e(this);
      0 == a && b.attr("data-checksum", "1");
      b.wrap("<s/>");
      c.checkSort.push(b.parent().html().replace(/\s+/g, ""));
      b.unwrap();
    });
    h.find(c.targetSelector).unwrap();
  }

  var w = {
    init: function init(d) {
      return this.each(function () {
        var b = {
          targetSelector: ".mix",
          filterSelector: ".filter",
          sortSelector: ".sort",
          buttonEvent: "click",
          effects: ["fade", "scale"],
          listEffects: null,
          easing: "smooth",
          layoutMode: "grid",
          targetDisplayGrid: "inline-block",
          targetDisplayList: "block",
          listClass: "",
          gridClass: "",
          transitionSpeed: 600,
          showOnLoad: "all",
          multiFilter: !1,
          filterLogic: "or",
          resizeContainer: !0,
          minHeight: 0,
          failClass: "fail",
          perspectiveDistance: "3000",
          perspectiveOrigin: "50% 50%",
          animateGridList: !0,
          onMixLoad: null,
          onMixStart: null,
          onMixEnd: null,
          container: null,
          origOrder: [],
          startOrder: [],
          newOrder: [],
          origSort: [],
          checkSort: [],
          filter: "",
          mixing: !1,
          origDisplay: "",
          origLayout: "",
          origHeight: 0,
          newHeight: 0,
          isTouch: !1,
          resetDelay: 0,
          failsafe: null,
          prefix: "",
          easingFallback: "ease-in-out",
          transition: {},
          perspective: {},
          clean: {},
          fade: "1",
          scale: "",
          rotateX: "",
          rotateY: "",
          rotateZ: "",
          blur: "",
          grayscale: ""
        };
        d && e.extend(b, d);
        this.config = b;
        e.support.touch = "ontouchend" in document;
        e.support.touch && (b.isTouch = !0, b.resetDelay = 350);
        b.container = e(this);
        var h = b.container,
            c;

        a: {
          c = h[0];

          for (var a = ["Webkit", "Moz", "O", "ms"], j = 0; j < a.length; j++) {
            if (a[j] + "Transition" in c.style) {
              c = a[j];
              break a;
            }
          }

          c = "transition" in c.style ? "" : !1;
        }

        b.prefix = c;
        b.prefix = b.prefix ? "-" + b.prefix.toLowerCase() + "-" : "";
        h.find(b.targetSelector).each(function () {
          b.origOrder.push(e(this));
        });

        for (c = 0; 2 > c; c++) {
          a = 0 == c ? a = b.prefix : "", b.transition[a + "transition"] = "all " + b.transitionSpeed + "ms ease-in-out", b.perspective[a + "perspective"] = b.perspectiveDistance + "px", b.perspective[a + "perspective-origin"] = b.perspectiveOrigin;
        }

        for (c = 0; 2 > c; c++) {
          a = 0 == c ? a = b.prefix : "", b.clean[a + "transition"] = "none";
        }

        "list" == b.layoutMode ? (h.addClass(b.listClass), b.origDisplay = b.targetDisplayList) : (h.addClass(b.gridClass), b.origDisplay = b.targetDisplayGrid);
        b.origLayout = b.layoutMode;
        c = b.showOnLoad.split(" ");
        e.each(c, function () {
          e(b.filterSelector + '[data-filter="' + this + '"]').addClass("active");
        });
        h.find(b.targetSelector).addClass("mix_all");
        "all" == c[0] && (c[0] = "mix_all", b.showOnLoad = "mix_all");
        var f = e();
        e.each(c, function () {
          f = f.add(e("." + this));
        });
        f.each(function () {
          var a = e(this);
          "list" == b.layoutMode ? a.css("display", b.targetDisplayList) : a.css("display", b.targetDisplayGrid);
          a.css(b.transition);
        });
        setTimeout(function () {
          b.mixing = !0;
          f.css("opacity", "1");
          setTimeout(function () {
            "list" == b.layoutMode ? f.removeStyle(b.prefix + "transition, transition").css({
              display: b.targetDisplayList,
              opacity: 1
            }) : f.removeStyle(b.prefix + "transition, transition").css({
              display: b.targetDisplayGrid,
              opacity: 1
            });
            b.mixing = !1;

            if ("function" == typeof b.onMixLoad) {
              var a = b.onMixLoad.call(this, b);
              b = a ? a : b;
            }
          }, b.transitionSpeed);
        }, 10);
        b.filter = b.showOnLoad;
        e(b.sortSelector).bind(b.buttonEvent, function () {
          if (!b.mixing) {
            var a = e(this),
                c = a.attr("data-sort"),
                d = a.attr("data-order");

            if (a.hasClass("active")) {
              if ("random" != c) return !1;
            } else e(b.sortSelector).removeClass("active"), a.addClass("active");

            h.find(b.targetSelector).each(function () {
              b.startOrder.push(e(this));
            });
            m(b.filter, c, d, h, b);
          }
        });
        e(b.filterSelector).bind(b.buttonEvent, function () {
          if (!b.mixing) {
            var a = e(this);
            if (!1 == b.multiFilter) e(b.filterSelector).removeClass("active"), a.addClass("active"), b.filter = a.attr("data-filter"), e(b.filterSelector + '[data-filter="' + b.filter + '"]').addClass("active"), "all" == b.filter && (b.filter = "mix_all");else {
              var c = a.attr("data-filter");
              "all" == c && (c = "mix_all");
              a.hasClass("active") ? (a.removeClass("active"), b.filter = b.filter.replace(RegExp("(\\s|^)" + c), "")) : (a.addClass("active"), b.filter = b.filter + " " + c);
            }
            m(b.filter, null, null, h, b);
          }
        });
      });
    },
    toGrid: function toGrid() {
      return this.each(function () {
        var d = this.config;
        "grid" != d.layoutMode && (d.layoutMode = "grid", m(d.filter, null, null, e(this), d));
      });
    },
    toList: function toList() {
      return this.each(function () {
        var d = this.config;
        "list" != d.layoutMode && (d.layoutMode = "list", m(d.filter, null, null, e(this), d));
      });
    },
    filter: function filter(d) {
      return this.each(function () {
        var b = this.config;
        e(b.filterSelector).removeClass("active");
        e(b.filterSelector + '[data-filter="' + d + '"]').addClass("active");
        "all" == d && (d = "mix_all");
        b.mixing || (b.filter = d, m(d, null, null, e(this), b));
      });
    },
    sort: function sort(d) {
      return this.each(function () {
        var b = this.config;
        if (e.isArray(d)) var h = d[0],
            c = d[1];else h = d, c = "desc";
        b.mixing || (e(this).find(b.targetSelector).each(function () {
          b.startOrder.push(e(this));
        }), m(b.filter, h, c, e(this), b));
      });
    }
  };

  e.fn.mixitup = function (d, b) {
    if (w[d]) return w[d].apply(this, Array.prototype.slice.call(arguments, 1));
    if ("object" === _typeof(d) || !d) return w.init.apply(this, arguments);
  };

  e.fn.removeStyle = function (d) {
    return this.each(function () {
      var b = e(this);
      d = d.replace(/\s+/g, "");
      var h = d.split(",");
      e.each(h, function () {
        var c = RegExp(this.toString() + "[^;]+;?", "g");
        b.attr("style", function (a, b) {
          if (b) return b.replace(c, "");
        });
      });
    });
  };

  Array.prototype.compare = function (d) {
    if (this.length != d.length) return !1;

    for (var b = 0; b < d.length; b++) {
      if (this[b].compare && !this[b].compare(d[b]) || this[b] !== d[b]) return !1;
    }

    return !0;
  };
})(jQuery);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activateResponsiveMenu", function() { return activateResponsiveMenu; });
/* Helper functions */
function _hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

function _toggleClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';

  if (_hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }

    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  } else {
    elem.className += ' ' + className;
  }
}
/* ResponsiveMenu Class constructor */


function ResponsiveMenu(settings) {
  if (!settings) return;
  this.nav = document.getElementsByClassName(settings.navClass)[0];
  this.mobile = settings.mobileClass;
  this.toggle = document.getElementsByClassName(settings.toggleClass)[0];
  this.innerToggle = settings.innerToggle ? document.getElementsByClassName(settings.innerToggle) : false;
  this.navOpen = settings.navOpen || 'nav-mobile-open';
  this.toggleActive = settings.toggleActive || 'nav-active';
  this.innerToggleActive = settings.innerToggleActive || 'nav-active-inner';
  this.jQuery = window.jQuery ? jQuery : false;
  this.init();
}

ResponsiveMenu.prototype.createMenu = function () {
  this.mobileElem = document.createElement('div');
  this.mobileElem.className = this.mobile;
  this.nav.appendChild(this.mobileElem);
};

ResponsiveMenu.prototype.bindHandlers = function () {
  var _self = this;

  var piece = void 0;
  this.mobileElem.addEventListener('click', function () {
    if (_self.jQuery) {
      _self.jQuery(_self.toggle).slideToggle(function () {
        _self.jQuery(this).attr('style', '');

        _toggleClass(this, _self.navOpen);

        _toggleClass(_self.toggle, _self.toggleActive);
      });
    } else {
      _toggleClass(this, _self.navOpen);

      _toggleClass(_self.toggle, _self.toggleActive);
    }
  });

  if (this.innerToggle && !this.jQuery) {
    for (piece in this.innerToggle) {
      if (!isNaN(parseInt(piece))) {
        this.innerToggle[piece].addEventListener('click', function () {
          _toggleClass(this, _self.innerToggleActive);
        });
      }
    }
  }

  if (this.jQuery) {
    this.jQuery(this.innerToggle).on({
      click: function click() {
        var trigger = this;
        var menu = jQuery(this).find('ul');
        menu.slideToggle(function () {
          _toggleClass(trigger, _self.innerToggleActive);
        });
      }
    });
  }
};

ResponsiveMenu.prototype.init = function () {
  this.createMenu();
  this.bindHandlers();
};

function activateResponsiveMenu() {
  var r_menu = new ResponsiveMenu({
    navClass: 'nav',
    // Main navigation container => CSS Selector
    mobileClass: 'nav-mobile',
    // Class for the mobile navigation trigger to create and append => not a Selector
    toggleClass: 'nav-list',
    // Class of the navigation list (the <ul> for example) => CSS Selector
    innerToggle: 'has-inner',
    // Class of inner toggle elements => CSS Selector, parents of sub elements
    innerToggleClass: 'nav-inner',
    // Class for inner navigation => CSS Selector

    /* Open State */
    navOpen: 'nav-mobile-open',
    toggleActive: 'nav-active',
    innerToggleActive: 'nav-active-inner'
  });
}
;

/***/ })
/******/ ]);