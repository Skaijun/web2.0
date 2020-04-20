import { goods } from '../../goods/goods.js'
import { isEmptyObject } from '../../utils/isEmptyObj.js'

export class Basket {
    constructor() {
        this.basket = JSON.parse(window.localStorage.getItem("basket")) || {};
        this.totalPrice = JSON.parse(window.localStorage.getItem("totalprice")) || 0;
        // this.addProductToCart = this.addProductToCart.bind(this);
        // this.minusItemFromTheBasket = this.minusItemFromTheBasket.bind(this);
        // this.plusItemToTheBasket = this.plusItemToTheBasket.bind(this);
        // this.deleteAllItemsFromTheBasket = this.deleteAllItemsFromTheBasket.bind(this);
        // this.resetTheBasket = this.resetTheBasket.bind(this);
        // this.openCartModal = this.openCartModal.bind(this);
        // this.closeCartmodal = this.closeCartmodal.bind(this);
        this.handleEventsOnBtns = this.handleEventsOnBtns.bind(this);
        this.renderMiniBasketHTML();
        this.selectUsersChoise();
        this.setEventsToElements();
    }

    renderMiniBasketHTML() {
        $('.h_icon').empty();
        let cartListHTML = '';
        if (!isEmptyObject(this.basket)) {
            cartListHTML = `<li><h3>shopping list</h3></li>
            ${ this.getStateOfMiniBasket('sub-product')}
            <li>
                <div class="sub-mini-order"><button class="product-order">Go to checkout</button></div>
            </li>
                <li>
                    <div class="sub-mini-total"><span>Total price: </span><i>$ ${this.totalPrice}</i></div>
                </li>
                <li>
                    <div class="sub-mini-reset"><button class="reset-basket">delete all goods</button></div>
                </li>`;
        } else {
            cartListHTML = `<li><h3>shopping cart is empty</h3><a href=""></a></li>
        <li><p>if items in your wishlit are missing, <a href="" class="contactUs-page">contact us</a> to view them</p></li>`;
        }

        let outerHTML = `<ul class="icon1 sub-icon1">
        <li>
         <a class="active-icon c1" href="#"><i id="mini-basket-total">$${this.totalPrice}</i></a>
         <ul class="sub-icon1 list">
           ${cartListHTML}
         </ul>
       </li>
     </ul>`;
        $('.h_icon').append(outerHTML);
    }

    getStateOfMiniBasket(className) {
        let myCart = this.basket;
        let output = '';
        for (let article in myCart) {
            let itemKey = article.split("-")[0];
            let itemColor = article.split("-")[1];
            let itemSize = article.split("-")[2];
            output += `<li><div class="${className}__wrap">
                                  <div class="${className}__img">
                                      <img
                                       class="details-page"
                                       data-art="${itemKey}"
                                       src="${goods[itemKey].image}"
                                       alt="${goods[itemKey].description}"
                                       title="${goods[itemKey].name}"
                                       width="100px" height="100px"
                                       />
                                      <button class="remove-from-basket" data-art="${article}"> - </button>
                                      <span>${myCart[article]} it.</span>
                                      <button class="add-to-basket" data-art="${article}"> + </button>
                                  </div>
                                  <div class="${className}__details">
                                     <button class="delete-product" data-art="${article}">&times;</button>
                                     <div class="${className}__name">${goods[itemKey].name}</div>
                                     <div class="${className}__features">
                                        <div class="${className}__size">size: ${itemSize}</div>
                                        <div class="${className}__color">color: ${itemColor}</div>
                                     </div>
                                     <div class="${className}__price">$ ${goods[itemKey].price}</div>
                                  </div>
                               </div>
                           </li>`;
        }
        return output;
    }

    selectUsersChoise() {
        this.sizeCustomerInput = $('.size-select')[0];
        this.colorCustomerInput = $('.color-select')[0];
        this.cartModal = $('.modal-cart');
    }

    setEventsToElements() {
        $(document).on('click', this.handleEventsOnBtns);
    }

    handleEventsOnBtns() {
        let element = event.target;
        switch (true) {
            case $(element).parent().hasClass('add-to-cart'):
                this.addProductToCart();
                this.openCartModal();
                break;
            case $(element).hasClass('remove-from-basket'):
                this.minusItemFromTheBasket();
                break;
            case $(element).hasClass('add-to-basket'):
                this.plusItemToTheBasket();
                break;
            case $(element).hasClass('delete-product'):
                this.deleteAllItemsFromTheBasket();
                break;
            case $(element).hasClass('reset-basket'):
                this.resetTheBasket();
                break;
            case $(element).hasClass('product-order'):
                console.log('go to checkout; here come class Order-page');
                break;
            case $(element).hasClass('modal-cart__close') || $(element).hasClass('modal-cart__bg'):
                this.closeCartmodal();
                break;
        }
    }

    addProductToCart() {
        event.preventDefault();
        let productArticle = $('.add-to-cart').children(['data-art']).attr('data-art');      // 10001
        let productColor = `${$("select.color-select").children("option:selected").val()}`;  // "black"                  
        let productSize = `${$("select.size-select").children("option:selected").val()}`;    // 39   
        let newItemArticle = `${productArticle}-${productColor}-${productSize}`;             // "10001-black-39"
        this.totalPrice = this.totalPrice + goods[productArticle].price;
        if (this.basket[newItemArticle] == undefined) {
            this.basket[newItemArticle] = 1; // if there are no same goods in the basket => set quantity to 1
        } else {
            this.basket[newItemArticle]++; // if there are already same goods in the basket => set quantity +1
        }
        this.refreshBasketState();
    }

    minusItemFromTheBasket() {
        let key = $(event.target).attr('data-art');
        let article = key.split("-")[0];
        this.totalPrice = this.totalPrice - goods[article].price;
        if (this.basket[key] > 1) {
            this.basket[key]--;
        } else {
            delete this.basket[key];
        }
        this.refreshBasketState();
    }

    plusItemToTheBasket() {
        let key = $(event.target).attr('data-art');
        let article = key.split("-")[0];
        this.totalPrice = this.totalPrice + goods[article].price;
        this.basket[key]++;
        this.refreshBasketState();
    }

    deleteAllItemsFromTheBasket() {
        let key = $(event.target).attr('data-art');
        let article = key.split("-")[0];
        this.totalPrice = this.totalPrice - (goods[article].price * this.basket[key]);
        delete this.basket[key];
        this.refreshBasketState();
    }

    resetTheBasket() {
        this.totalPrice = 0;
        this.basket = {};
        this.refreshBasketState();
    }

    refreshBasketState() {
        this.saveGoodsTotalPriceInLocalStorage();
        this.saveBasketStateInLocalStorage();
        this.renderMiniBasketHTML();
        this.renderCartModalHTML();
    }

    openCartModal() {
        this.renderCartModalHTML()
        $(this.cartModal).addClass('modal-cart__open');
    }

    renderCartModalHTML() {
        $(this.cartModal).empty();
        let outerHTML = '';
        let cartIsNotEmpty = this.getStateOfMiniBasket('modal-cart');
        if (isEmptyObject(this.basket)) {
            cartIsNotEmpty = `<li><h2>shopping cart is empty</h2><a href=""></a></li>
            <li><p>if items in your wishlit are missing, <a href="" class="contactUs-page"> contact us </a> to view them</p></li>`;
        }
        outerHTML = `<div class="modal-cart__bg"></div>
                         <div class="modal-cart__wrapper">
                            <div class="modal-cart__header">
	                         <div class="modal-cart__title">Cart:</div>
	                         <div class="modal-cart__close" data-close="modal-cart-close">&times;</div>
	                        </div>
	                       <div class="modal-cart__goods">
                             <ul class="modal-cart__list">
                             <li><h3>shopping list</h3></li>
                            ${cartIsNotEmpty}
                             </ul>
	                        </div>
	                     <div class="modal-cart__footer">
	                     <div class="modal-cart__total">total: $ ${this.totalPrice}</div>
                         <div class="modal-cart__checkout product-order">
                         <button class="product-order">Go to checkout</button>
                         </div>
	                     </div>
                         <div class="modal-cart__close" data-return="modal-cart-return">Back to shopping</div>
                         </div>`;
        $(this.cartModal).append(outerHTML);
    }

    closeCartmodal() {
        $(this.cartModal).removeClass('modal-cart__open');
        $(this.cartModal).empty();
    }

    selectUserChoiseValue(searchInElement) {
        return searchInElement.value;
    }

    saveBasketStateInLocalStorage() {
        window.localStorage.setItem("basket", JSON.stringify(this.basket));
    }

    saveGoodsTotalPriceInLocalStorage() {
        window.localStorage.setItem("totalprice", JSON.stringify(this.totalPrice));
    }
}