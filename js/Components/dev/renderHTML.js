
import { DOM_STATE_HTML } from './StateDOMHTML'
import { StateDOMHTML } from './StateDOMHTML'

export class RenderHTML {
    constructor(selectedHtmlElement) {
        this.selectedHtmlElement = selectedHtmlElement || document.body;
        this.pageState = new StateDOMHTML();
        this.depictCurrentPage();
        this.handleEventsOnBtns = this.handleEventsOnBtns.bind(this);
        this.setEventToDOM(this.selectedHtmlElement);
    }

    depictCurrentPage() {
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
        $(this.selectedHtmlElement).empty();
        this.selectedHtmlElement.insertAdjacentHTML("afterbegin", DOM_STATE_HTML.MAIN_PAGE);
    }
    depictSalePage() {
        $(this.selectedHtmlElement).empty();
        this.selectedHtmlElement.insertAdjacentHTML("afterbegin", DOM_STATE_HTML.SALE_PAGE_FULL);
    }
    depictHandbagsPage() {
        $(this.selectedHtmlElement).empty();
        this.selectedHtmlElement.insertAdjacentHTML("afterbegin", DOM_STATE_HTML.HANDBAGS_PAGE_FULL);
    }
    depictAccessoriesPage() {
        $(this.selectedHtmlElement).empty();
        this.selectedHtmlElement.insertAdjacentHTML("afterbegin", DOM_STATE_HTML.ACCESSORIES_PAGE_FULL);
    }
    depictWalletsPage() {
        $(this.selectedHtmlElement).empty();
        this.selectedHtmlElement.insertAdjacentHTML("afterbegin", DOM_STATE_HTML.WALLETS_PAGE_FULL);
    }
    depictShoesPage() {
        $(this.selectedHtmlElement).empty();
        this.selectedHtmlElement.insertAdjacentHTML("afterbegin", DOM_STATE_HTML.SHOES_PAGE_FULL);
    }
    depictServicesPage() {
        $(this.selectedHtmlElement).empty();
        this.selectedHtmlElement.insertAdjacentHTML("afterbegin", DOM_STATE_HTML.SERVICES_PAGE_FULL);
    }
    depictContactUsPage() {
        $(this.selectedHtmlElement).empty();
        this.selectedHtmlElement.insertAdjacentHTML("afterbegin", DOM_STATE_HTML.CONTACT_US_PAGE_FULL);
    }
    depictDetailsPage() {
        $(this.selectedHtmlElement).empty();
        this.selectedHtmlElement.insertAdjacentHTML("afterbegin", DOM_STATE_HTML.DETAILS_PAGE_FULL);
    }

    setEventToDOM(selectedElement) {
        selectedElement.addEventListener('click', this.handleEventsOnBtns);
    }

    handleEventsOnBtns(event) {
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

}