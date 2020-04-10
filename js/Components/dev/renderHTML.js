import { DOM_STATE_HTML, StateDOMHTML } from './StateDOMHTML.js'
import { Basket } from './Basket.js'
import { StateActiveProduct } from '../../goods/goods-details-state.js'
import { ContactForms } from './form-validation.js'
import { renderDetailedProduct } from '../../goods/goods-detailed-loader.js'
import { goodsState } from '../../goods/goods-state.js'
import { renderOwlCarouselGoods } from '../../goods/goods-owl_carousel-loader.js'
import { cslider } from '../src/jquery.cslider'
import { owlCarousel } from '../src/owl.carousel'
import { mixitup } from '../src/jquery.mixitup'

export class RenderHTML {
    constructor(selectedHtmlElement) {
        this.selectedHtmlElement = selectedHtmlElement || document.body;
        this.pageState = new StateDOMHTML();
        this.detailedProductState = new StateActiveProduct();
        this.depictCurrentPage();
        this.cart = new Basket();
        this.handleEventsOnBtns = this.handleEventsOnBtns.bind(this);
        this.setEventToDOM(this.selectedHtmlElement);
    }

    depictCurrentPage() {
        $(this.selectedHtmlElement).empty();
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

    depictMainPage() {
        this.selectedHtmlElement.insertAdjacentHTML("afterbegin", DOM_STATE_HTML.MAIN_PAGE);
        goodsState.renderFeatGoodsMainPage();
        renderOwlCarouselGoods();
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
                paginationNumbers: false,
            });
        });
    }
    depictSalePage() {
        this.selectedHtmlElement.insertAdjacentHTML("afterbegin", DOM_STATE_HTML.SALE_PAGE_FULL);
        $(function () {
            var filterList = {
                init: function () {
                    // MixItUp plugin
                    // http://mixitup.io
                    $('#portfoliolist').mixitup({
                        targetSelector: '.portfolio',
                        filterSelector: '.filter',
                        effects: ['fade'],
                        easing: 'snap',
                        // call the hover effect
                        onMixEnd: filterList.hoverEffect()
                    });
                },

                hoverEffect: function () {
                    // Simple parallax effect
                    $('#portfoliolist .portfolio').hover(
                        function () {
                            $(this).find('.label').stop().animate({ bottom: 0 }, 200, 'easeOutQuad');
                            $(this).find('img').stop().animate({ top: -30 }, 500, 'easeOutQuad');
                        },
                        function () {
                            $(this).find('.label').stop().animate({ bottom: -40 }, 200, 'easeInQuad');
                            $(this).find('img').stop().animate({ top: 0 }, 300, 'easeOutQuad');
                        }
                    );
                }
            };
            // Run the show!
            filterList.init();
        });
    }
    depictHandbagsPage() {
        this.selectedHtmlElement.insertAdjacentHTML("afterbegin", DOM_STATE_HTML.HANDBAGS_PAGE_FULL);
    }
    depictAccessoriesPage() {
        this.selectedHtmlElement.insertAdjacentHTML("afterbegin", DOM_STATE_HTML.ACCESSORIES_PAGE_FULL);
    }
    depictWalletsPage() {
        this.selectedHtmlElement.insertAdjacentHTML("afterbegin", DOM_STATE_HTML.WALLETS_PAGE_FULL);
    }
    depictShoesPage() {
        this.selectedHtmlElement.insertAdjacentHTML("afterbegin", DOM_STATE_HTML.SHOES_PAGE_FULL);
        goodsState.renderShoesCategoryShoesPage();
    }
    depictServicesPage() {
        this.selectedHtmlElement.insertAdjacentHTML("afterbegin", DOM_STATE_HTML.SERVICES_PAGE_FULL);
    }
    depictContactUsPage() {
        this.selectedHtmlElement.insertAdjacentHTML("afterbegin", DOM_STATE_HTML.CONTACT_US_PAGE_FULL);
        const contactUsFormsInitialization = new ContactForms();
    }
    depictDetailsPage() {
        this.selectedHtmlElement.insertAdjacentHTML("afterbegin", DOM_STATE_HTML.DETAILS_PAGE_FULL);
        renderDetailedProduct(this.detailedProductState.detailedProductAttr);
    }

    setEventToDOM(selectedElement) {
        selectedElement.addEventListener('click', this.handleEventsOnBtns);
    }

    handleEventsOnBtns(event) {
        // event.preventDefault();

        let element = event.target.classList;
        switch (true) {
            case element.contains('main-page'):
                this.handleDepictPageEvent('main-page');
                break;
            case element.contains('sale-page'):
                this.handleDepictPageEvent('sale-page');
                break;
            case element.contains('handbags-page'):
                this.handleDepictPageEvent('handbags-page');
                break;
            case element.contains('accessories-page'):
                this.handleDepictPageEvent('accessories-page');
                break;
            case element.contains('wallets-page'):
                this.handleDepictPageEvent('wallets-page');
                break;
            case element.contains('shoes-page'):
                this.handleDepictPageEvent('shoes-page');
                break;
            case element.contains('services-page'):
                this.handleDepictPageEvent('services-page');
                break;
            case element.contains('contactUs-page'):
                this.handleDepictPageEvent('contactUs-page');
                break;
            case element.contains('details-page'):
                this.pageState.removePageStateFromLocalStorage();
                this.pageState.savePageStateInLocalStorage('details-page');
                this.detailedProductState.saveProductStateInLocalStorage(event.target.getAttribute('data-art'));
                document.location.reload(true);
                this.depictCurrentPage();
                break;
        }
    }

    handleDepictPageEvent(pageClass) {
        this.pageState.removePageStateFromLocalStorage();
        this.detailedProductState.removeProductStateFromLocalStorage();
        this.pageState.savePageStateInLocalStorage(pageClass);
        document.location.reload(true);
        this.depictCurrentPage();
    }

}