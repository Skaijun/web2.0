import { goods } from '../../goods/goods.js'
import { isEmptyObject } from '../../utils/isEmptyObj.js'

export class Basket {
    constructor() {
        this.basket = JSON.parse(window.localStorage.getItem("basket")) || {};
        this.totalPrice = JSON.parse(window.localStorage.getItem("totalprice")) || 0;
        this.addProductToCart = this.addProductToCart.bind(this);
        this.removeItemFromTheBasket = this.removeItemFromTheBasket.bind(this);
        this.addItemToTheBasket = this.addItemToTheBasket.bind(this);
        this.deleteAllItemsFromTheBasket = this.deleteAllItemsFromTheBasket.bind(this);
        this.renderMiniBasketHTML();
        this.selectDOMElements();
        this.handleEventsOnBtns();
    }

    renderMiniBasketHTML() {
        $('.h_icon').empty();
        let out = `<ul class="icon1 sub-icon1">
                 <li>
                  <a class="active-icon c1" href="#"><i id="mini-basket-total">$${this.totalPrice}</i></a>
                     <ul class="sub-icon1 list">
                     ${this.getStateOfMiniBasket()}
				     </ul>
			     </li>
                 </ul>`;
        $('.h_icon')[0].insertAdjacentHTML("beforeend", out);
        this.handleEventsOnBtns();
    }

    getStateOfMiniBasket() {
        let myCart = this.basket;
        let output = '';
        if (!isEmptyObject(myCart)) {
            output = `<li><h3>shopping list</h3></li>`;
            for (let article in myCart) {
                output += `<li><div class="sub-product__wrap">
                                  <div sub-product__img>
                                      <img
                                       src="${goods[article].image}"
                                       alt="${goods[article].description}"
                                       title="${goods[article].name}"
                                       width="60px" height="60px"
                                       />
                                      <button class="remove-from-basket" data-art="${article}"> - </button>
                                      ${myCart[article]} it. 
                                      <button class="add-to-basket" data-art="${article}"> + </button>
                                  </div>
                                  <div sub-product__details>
                                     <button class="delete-product" data-art="${article}"> X </button>
                                     <div class="sub-product__name">${goods[article].name}</div>
                                     <div class="sub-product__features">
                                        <div class="sub-product__size">size: 39</div>
                                        <div class="sub-product__color">color: black</div>
                                     </div>
                                     <div class="sub-product__price">$ ${goods[article].price}</div>
                                  </div>
                               </div>
                           </li>`;
            }
            output += `<li>
                       <div class="sub-mini-total"><span>Total price: </span><i>$ ${this.totalPrice}</i></div>
                       </li>`;
        } else {
            output = `<li><h3>shopping cart empty</h3><a href=""></a></li>
                      <li><p>if items in your wishlit are missing, <a href="" class="contactUs-page">contact us</a> to view them</p></li>`;
        }

        return output;
    }

    selectDOMElements() {
        this.sizeCustomerInput = $('.size-select')[0];
        this.colorCustomerInput = $('.color-select')[0];
    }

    handleEventsOnBtns() {
        if ($('.add-to-cart')[0]) {
            $('.add-to-cart')[0].addEventListener('submit', this.addProductToCart);
        }
        if ($('.remove-from-basket')) {
            $('.remove-from-basket').on('click', this.removeItemFromTheBasket);
        }
        if ($('.add-to-basket')) {
            $('.add-to-basket').on('click', this.addItemToTheBasket);
        }
        if ($('.delete-product')) {
            $('.delete-product').on('click', this.deleteAllItemsFromTheBasket);
        }
    }

    addProductToCart() {
        event.preventDefault();
        let productArticle = $('.add-to-cart').children(['data-art']).attr('data-art');
        this.totalPrice = this.totalPrice + goods[productArticle].price;
        if (this.basket[productArticle] == undefined) {
            this.basket[productArticle] = 1; // if there are not any such goods in the basket => set quantity to 1
        } else {
            this.basket[productArticle]++; // if there are already such goods in the basket => set quantity +1
        }
        this.refreshBasketState();
    }

    removeItemFromTheBasket() {
        event.preventDefault();
        let myCart = this.basket;
        let article = $(event.target).attr('data-art');
        this.totalPrice = this.totalPrice - goods[article].price;
        if (myCart[article] > 1) {
            myCart[article]--;
        } else {
            delete myCart[article];
        }
        this.refreshBasketState();
    }

    addItemToTheBasket() {
        event.preventDefault();
        let myCart = this.basket;
        let article = $(event.target).attr('data-art');
        this.totalPrice = this.totalPrice + goods[article].price;
        myCart[article]++;
        this.refreshBasketState();
    }

    deleteAllItemsFromTheBasket() {
        event.preventDefault();
        let myCart = this.basket;
        let id = $(event.target).attr('data-art');
        this.totalPrice = this.totalPrice - (goods[id].price * myCart[id]);
        delete myCart[id];
        this.refreshBasketState();
    }

    refreshBasketState() {
        this.saveGoodsTotalPriceInLocalStorage();
        this.saveBasketStateInLocalStorage();
        this.renderMiniBasketHTML();
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