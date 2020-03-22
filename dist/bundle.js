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
// import {ContactForms} from './Components/dev/form-validation';
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

var webShopDOM = new _Components_dev_renderHTML__WEBPACK_IMPORTED_MODULE_0__["RenderHTML"](); // window.onload = webShopDOM.depictMainPage();
// const contactUsFormsInitialization = new ContactForms();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderHTML", function() { return RenderHTML; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RenderHTML =
/*#__PURE__*/
function () {
  function RenderHTML(selectedHtmlElement) {
    _classCallCheck(this, RenderHTML);

    this.selectedHtmlElement = selectedHtmlElement || document.body;
    this.state = 'main-page';
    this.depictMainPage();
    this.handleEventsOnBtns = this.handleEventsOnBtns.bind(this);
    this.setEventToDOM(this.selectedHtmlElement);
  }

  _createClass(RenderHTML, [{
    key: "depictMainPage",
    value: function depictMainPage() {
      this.state = 'main-page';
      document.getElementsByTagName('head')[0].insertAdjacentHTML("beforeend", MAIN_PAGE_HEAD);
      document.body.insertAdjacentHTML("afterbegin", FOOTER);
      document.body.insertAdjacentHTML("afterbegin", MAIN_PAGE);
      document.body.insertAdjacentHTML("afterbegin", HEADER);
      console.log('depictMainPage depicted');
    }
  }, {
    key: "depictContactUsPage",
    value: function depictContactUsPage() {
      // document.getElementsByTagName('head')[0].insertAdjacentHTML("beforeend", MAIN_PAGE_HEAD);
      // document.body.insertAdjacentHTML("afterbegin", FOOTER);
      // document.body.insertAdjacentHTML("afterbegin", MAIN_PAGE);
      // document.body.insertAdjacentHTML("afterbegin", HEADER);
      console.log('depictContactUsPage depicted');
    }
  }, {
    key: "setEventToDOM",
    value: function setEventToDOM(selectedElement) {
      selectedElement.addEventListener('click', this.handleEventsOnBtns);
    }
  }, {
    key: "handleEventsOnBtns",
    value: function handleEventsOnBtns(event) {
      event.preventDefault();

      if (event.target.classList.contains('main-page')) {
        this.state = 'main-page';
        console.log(this.state);
      } else if (event.target.classList.contains('sale-page')) {
        this.state = 'sale-page';
        console.log(this.state);
      }
    }
  }]);

  return RenderHTML;
}();
var MAIN_PAGE_HEAD = " \t<script type=\"text/javascript\" src=\"../js/Components/src/jquery.min.js\"></script>\n<!-- start slider -->\n<link href=\"../css/slider.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\" />\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n<script type=\"text/javascript\" src=\"../js/Components/src/modernizr.custom.28468.js\"></script>\n<script type=\"text/javascript\" src=\"../js/Components/src/jquery.cslider.js\"></script>\n<script type=\"text/javascript\">\n    $(function () {\n        $('#da-slider').cslider();\n    });\n</script>\n<!-- Owl Carousel Assets -->\n<link href=\"../css/owl.carousel.css\" rel=\"stylesheet\">\n<!-- Owl Carousel Assets -->\n<!-- Prettify -->\n<script src=\"../js/Components/src/owl.carousel.js\"></script>\n<script>\n    $(document).ready(function () {\n\n        $(\"#owl-demo\").owlCarousel({\n            items: 4,\n            lazyLoad: true,\n            autoPlay: true,\n            navigation: true,\n            navigationText: [\"\", \"\"],\n            rewindNav: false,\n            scrollPerPage: false,\n            pagination: false,\n            paginationNumbers: false,\n        });\n\n    });\n</script>\n<!-- //Owl Carousel Assets -->\n<!-- start top_js_button -->\n<script type=\"text/javascript\" src=\"../js/Components/src/move-top.js\"></script>\n<script type=\"text/javascript\" src=\"../js/Components/src/easing.js\"></script>\n<script type=\"text/javascript\">\n    jQuery(document).ready(function ($) {\n        $(\".scroll\").click(function (event) {\n            event.preventDefault();\n            $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1200);\n        });\n    });\n</script> ";
var HEADER = "\t<!-- start header -->\n<div class=\"header_bg\">\n    <div class=\"wrap\">\n        <div class=\"header\">\n            <div class=\"logo\">\n                <a href=\"index.html\"><img src=\"../images/logo.png\" alt=\"\" /> </a>\n            </div>\n            <div class=\"h_icon\">\n                <ul class=\"icon1 sub-icon1\">\n                    <li><a class=\"active-icon c1\" href=\"#\"><i>$300</i></a>\n                        <ul class=\"sub-icon1 list\">\n                            <li>\n                                <h3>shopping cart empty</h3><a href=\"\"></a>\n                            </li>\n                            <li>\n                                <p>if items in your wishlit are missing, <a href=\"contact.html\">contact us</a> to\n                                    view them</p>\n                            </li>\n                        </ul>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"h_search\">\n                <form>\n                    <input type=\"text\" value=\"\">\n                    <input type=\"submit\" value=\"\">\n                </form>\n            </div>\n            <div class=\"clear\"></div>\n        </div>\n    </div>\n</div>\n\n<div class=\"header_btm\">\n    <div class=\"wrap\">\n        <div class=\"header_sub\">\n            <div class=\"h_menu\">\n                <ul>\n                    <li class=\"active\"><a href=\"index.html\" class=\"main-page\">Home</a></li> |\n                    <li><a href=\"\" class=\"sale-page\">sale</a></li> |\n                    <li><a href=\"\" class=\"handbags-page\">handbags</a></li> |\n                    <li><a href=\"\" class=\"accessories-page\">accessories</a></li> |\n                    <li><a href=\"\" class=\"wallets-page\">wallets</a></li> |\n                    <li><a href=\"\" class=\"shoes-page\">shoes</a></li> |\n                    <li><a href=\"\" class=\"services-page\">services</a></li> |\n                    <li><a href=\"\" class=\"ContactUs-page\">Contact us</a></li>\n                </ul>\n            </div>\n            <div class=\"top-nav\">\n                <nav class=\"nav\">\n                    <a href=\"#\" id=\"w3-menu-trigger\"> </a>\n                    <ul class=\"nav-list\">\n                        <li class=\"nav-item\"><a class=\"active\" href=\"index.html\">Home</a></li>\n                        <li class=\"nav-item\"><a href=\"\">Sale</a></li>\n                        <li class=\"nav-item\"><a href=\"handbags.html\">Handbags</a></li>\n                        <li class=\"nav-item\"><a href=\"accessories.html\">Accessories</a></li>\n                        <li class=\"nav-item\"><a href=\"shoes.html\">Shoes</a></li>\n                        <li class=\"nav-item\"><a href=\"service.html\">Services</a></li>\n                        <li class=\"nav-item\"><a href=\"contact.html\">Contact</a></li>\n                    </ul>\n                </nav>\n                <div class=\"search_box\">\n                    <form>\n                        <input type=\"text\" value=\"Search\" onfocus=\"this.value = '';\"\n                            onblur=\"if (this.value == '') {this.value = 'Search';}\"><input type=\"submit\" value=\"\">\n                    </form>\n                </div>\n                <div class=\"clear\"> </div>\n                <script src=\"../js/Components/src/responsive.menu.js\"></script>\n            </div>\n            <div class=\"clear\"></div>\n        </div>\n    </div>\n</div>";
var MAIN_PAGE = " <div id=\"da-slider\" class=\"da-slider\">\n<div class=\"da-slide\">\n    <h2>welcome to aditii</h2>\n    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her\n        hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line\n        Lane.</p>\n    <a href=\"details.html\" class=\"da-link\">shop now</a>\n    <div class=\"da-img\"><img src=\"../images/slider1.png\" alt=\"image01\" /></div>\n</div>\n<div class=\"da-slide\">\n    <h2>Easy management</h2>\n    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the\n        blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language\n        ocean.</p>\n    <a href=\"details.html\" class=\"da-link\">shop now</a>\n    <div class=\"da-img\"><img src=\"../images/slider2.png\" alt=\"image01\" /></div>\n</div>\n<div class=\"da-slide\">\n    <h2>Revolution</h2>\n    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a\n        paradisematic country, in which roasted parts of sentences fly into your mouth.</p>\n    <a href=\"details.html\" class=\"da-link\">shop now</a>\n    <div class=\"da-img\"><img src=\"../images/slider3.png\" alt=\"image01\" /></div>\n</div>\n<div class=\"da-slide\">\n    <h2>Quality Control</h2>\n    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life\n        One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World\n        of Grammar.</p>\n    <a href=\"details.html\" class=\"da-link\">shop now</a>\n    <div class=\"da-img\"><img src=\"../images/slider4.png\" alt=\"image01\" /></div>\n</div>\n<nav class=\"da-arrows\">\n    <span class=\"da-arrows-prev\"></span>\n    <span class=\"da-arrows-next\"></span>\n</nav>\n</div>\n</div>\n<!----start-cursual---->\n<div class=\"wrap\">\n<!----start-img-cursual---->\n<div id=\"owl-demo\" class=\"owl-carousel\">\n    <div class=\"item\" onclick=\"location.href='details.html';\">\n        <div class=\"cau_left\">\n            <img class=\"lazyOwl\" data-src=\"../images/c1.jpg\" alt=\"Lazy Owl Image\">\n        </div>\n        <div class=\"cau_left\">\n            <h4><a href=\"details.html\">branded shoes</a></h4>\n            <a href=\"details.html\" class=\"btn\">shop</a>\n        </div>\n    </div>\n    <div class=\"item\" onclick=\"location.href='details.html';\">\n        <div class=\"cau_left\">\n            <img class=\"lazyOwl\" data-src=\"../images/c2.jpg\" alt=\"Lazy Owl Image\">\n        </div>\n        <div class=\"cau_left\">\n            <h4><a href=\"details.html\">branded tees</a></h4>\n            <a href=\"details.html\" class=\"btn\">shop</a>\n        </div>\n    </div>\n    <div class=\"item\" onclick=\"location.href='details.html';\">\n        <div class=\"cau_left\">\n            <img class=\"lazyOwl\" data-src=\"../images/c3.jpg\" alt=\"Lazy Owl Image\">\n        </div>\n        <div class=\"cau_left\">\n            <h4><a href=\"details.html\">branded jeens</a></h4>\n            <a href=\"details.html\" class=\"btn\">shop</a>\n        </div>\n    </div>\n    <div class=\"item\" onclick=\"location.href='details.html';\">\n        <div class=\"cau_left\">\n            <img class=\"lazyOwl\" data-src=\"../images/c2.jpg\" alt=\"Lazy Owl Image\">\n        </div>\n        <div class=\"cau_left\">\n            <h4><a href=\"details.html\">branded tees</a></h4>\n            <a href=\"details.html\" class=\"btn\">shop</a>\n        </div>\n    </div>\n    <div class=\"item\" onclick=\"location.href='details.html';\">\n        <div class=\"cau_left\">\n            <img class=\"lazyOwl\" data-src=\"../images/c1.jpg\" alt=\"Lazy Owl Image\">\n        </div>\n        <div class=\"cau_left\">\n            <h4><a href=\"details.html\">branded shoes</a></h4>\n            <a href=\"details.html\" class=\"btn\">shop</a>\n        </div>\n    </div>\n    <div class=\"item\" onclick=\"location.href='details.html';\">\n        <div class=\"cau_left\">\n            <img class=\"lazyOwl\" data-src=\"../images/c2.jpg\" alt=\"Lazy Owl Image\">\n        </div>\n        <div class=\"cau_left\">\n            <h4><a href=\"details.html\">branded tees</a></h4>\n            <a href=\"details.html\" class=\"btn\">shop</a>\n        </div>\n    </div>\n    <div class=\"item\" onclick=\"location.href='details.html';\">\n        <div class=\"cau_left\">\n            <img class=\"lazyOwl\" data-src=\"../images/c3.jpg\" alt=\"Lazy Owl Image\">\n        </div>\n        <div class=\"cau_left\">\n            <h4><a href=\"details.html\">branded jeens</a></h4>\n            <a href=\"details.html\" class=\"btn\">shop</a>\n        </div>\n    </div>\n</div>\n<!----//End-img-cursual---->\n</div>\n<!-- start main1 -->\n<div class=\"main_bg1\">\n<div class=\"wrap\">\n    <div class=\"main1\">\n        <h2>featured products</h2>\n    </div>\n</div>\n</div>\n<!-- start main -->\n<div class=\"main_bg\">\n<div class=\"wrap\">\n    <div class=\"main\">\n        <!-- start grids_of_3 -->\n        <div class=\"grids_of_3\">\n            <div class=\"grid1_of_3\">\n                <a href=\"details.html\">\n                    <img src=\"../images/pic1.jpg\" alt=\"\" />\n                    <h3>branded shoes</h3>\n                    <div class=\"price\">\n                        <h4>$300<span>indulge</span></h4>\n                    </div>\n                    <span class=\"b_btm\"></span>\n                </a>\n            </div>\n            <div class=\"grid1_of_3\">\n                <a href=\"./html/details.html\">\n                    <img src=\"../images/pic2.jpg\" alt=\"\" />\n                    <h3>branded t-shirts</h3>\n                    <div class=\"price\">\n                        <h4>$300<span>indulge</span></h4>\n                    </div>\n                    <span class=\"b_btm\"></span>\n                </a>\n            </div>\n            <div class=\"grid1_of_3\">\n                <a href=\"./html/details.html\">\n                    <img src=\"../images/pic3.jpg\" alt=\"\" />\n                    <h3>branded tees</h3>\n                    <div class=\"price\">\n                        <h4>$300<span>indulge</span></h4>\n                    </div>\n                    <span class=\"b_btm\"></span>\n                </a>\n            </div>\n            <div class=\"clear\"></div>\n        </div>\n        <div class=\"grids_of_3\">\n            <div class=\"grid1_of_3\">\n                <a href=\"./html/details.html\">\n                    <img src=\"../images/pic4.jpg\" alt=\"\" />\n                    <h3>branded bags</h3>\n                    <div class=\"price\">\n                        <h4>$300<span>indulge</span></h4>\n                    </div>\n                    <span class=\"b_btm\"></span>\n                </a>\n            </div>\n            <div class=\"grid1_of_3\">\n                <a href=\"./html/details.html\">\n                    <img src=\"../images/pic5.jpg\" alt=\"\" />\n                    <h3>ems women bag</h3>\n                    <div class=\"price\">\n                        <h4>$300<span>indulge</span></h4>\n                    </div>\n                    <span class=\"b_btm\"></span>\n                </a>\n            </div>\n            <div class=\"grid1_of_3\">\n                <a href=\"./html/details.html\">\n                    <img src=\"../images/pic6.jpg\" alt=\"\" />\n                    <h3>branded cargos</h3>\n                    <div class=\"price\">\n                        <h4>$300<span>indulge</span></h4>\n                    </div>\n                    <span class=\"b_btm\"></span>\n                </a>\n            </div>\n            <div class=\"clear\"></div>\n        </div>\n        <!-- end grids_of_3 -->\n    </div>\n</div>\n</div> ";
var FOOTER = "\t<!-- start footer -->\n<div class=\"footer_bg\">\n    <div class=\"wrap\">\n        <div class=\"footer\">\n            <!-- start grids_of_4 -->\n            <div class=\"grids_of_4\">\n                <div class=\"grid1_of_4\">\n                    <h4>featured sale</h4>\n                    <ul class=\"f_nav\">\n                        <li><a href=\"\">alexis Hudson</a></li>\n                        <li><a href=\"\">american apparel</a></li>\n                        <li><a href=\"\">ben sherman</a></li>\n                        <li><a href=\"\">big buddha</a></li>\n                        <li><a href=\"\">channel</a></li>\n                        <li><a href=\"\">christian audigier</a></li>\n                        <li><a href=\"\">coach</a></li>\n                        <li><a href=\"\">cole haan</a></li>\n                    </ul>\n                </div>\n                <div class=\"grid1_of_4\">\n                    <h4>mens store</h4>\n                    <ul class=\"f_nav\">\n                        <li><a href=\"\">alexis Hudson</a></li>\n                        <li><a href=\"\">american apparel</a></li>\n                        <li><a href=\"\">ben sherman</a></li>\n                        <li><a href=\"\">big buddha</a></li>\n                        <li><a href=\"\">channel</a></li>\n                        <li><a href=\"\">christian audigier</a></li>\n                        <li><a href=\"\">coach</a></li>\n                        <li><a href=\"\">cole haan</a></li>\n                    </ul>\n                </div>\n                <div class=\"grid1_of_4\">\n                    <h4>women store</h4>\n                    <ul class=\"f_nav\">\n                        <li><a href=\"\">alexis Hudson</a></li>\n                        <li><a href=\"\">american apparel</a></li>\n                        <li><a href=\"\">ben sherman</a></li>\n                        <li><a href=\"\">big buddha</a></li>\n                        <li><a href=\"\">channel</a></li>\n                        <li><a href=\"\">christian audigier</a></li>\n                        <li><a href=\"\">coach</a></li>\n                        <li><a href=\"\">cole haan</a></li>\n                    </ul>\n                </div>\n                <div class=\"grid1_of_4\">\n                    <h4>quick links</h4>\n                    <ul class=\"f_nav\">\n                        <li><a href=\"\">alexis Hudson</a></li>\n                        <li><a href=\"\">american apparel</a></li>\n                        <li><a href=\"\">ben sherman</a></li>\n                        <li><a href=\"\">big buddha</a></li>\n                        <li><a href=\"\">channel</a></li>\n                        <li><a href=\"\">christian audigier</a></li>\n                        <li><a href=\"\">coach</a></li>\n                        <li><a href=\"\">cole haan</a></li>\n                    </ul>\n                </div>\n                <div class=\"clear\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- start footer -->\n<div class=\"footer_bg1\">\n    <div class=\"wrap\">\n        <div class=\"footer\">\n            <!-- scroll_top_btn -->\n            <script type=\"text/javascript\">\n                $(document).ready(function () {\n\n                    var defaults = {\n                        containerID: 'toTop', // fading element id\n                        containerHoverID: 'toTopHover', // fading element hover id\n                        scrollSpeed: 1200,\n                        easingType: 'linear'\n                    };\n\n\n                    $().UItoTop({ easingType: 'easeOutQuart' });\n\n                });\n            </script>\n            <a href=\"#\" id=\"toTop\" style=\"display: block;\"><span id=\"toTopHover\" style=\"opacity: 1;\"></span></a>\n            <!--end scroll_top_btn -->\n            <div class=\"copy\">\n                <p class=\"link\">&copy; All rights reserved <a href=\"https://github.com/Skaijun/web2.0\"> by OOO \"Anja\n                        & Co.: [Max, Dima];\"</a></p>\n            </div>\n            <div class=\"clear\"></div>\n        </div>\n    </div>\n</div>";

/***/ })
/******/ ]);