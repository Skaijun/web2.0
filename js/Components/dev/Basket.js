import { goods } from '../../goods/goods.js'
import { isEmptyObject } from '../../utils/isEmptyObj.js'

export class Basket {
    constructor() {
        this.basket = JSON.parse(window.localStorage.getItem("basket")) || {};
        this.totalPrice = JSON.parse(window.localStorage.getItem("totalprice")) || 0;
        this.addProductToCart = this.addProductToCart.bind(this);
        this.removeItemFromTheBasket = this.removeItemFromTheBasket.bind(this);
        this.plusItemToTheBasket = this.plusItemToTheBasket.bind(this);
        this.deleteAllItemsFromTheBasket = this.deleteAllItemsFromTheBasket.bind(this);
        this.renderMiniBasketHTML();
        this.selectUsersChoise();
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
                let itemKey = article.split("-")[0];
                let itemColor = article.split("-")[1];
                let itemSize = article.split("-")[2];
                output += `<li><div class="sub-product__wrap">
                                  <div sub-product__img>
                                      <img
                                       class="details-page"
                                       data-art="${itemKey}"
                                       src="${goods[itemKey].image}"
                                       alt="${goods[itemKey].description}"
                                       title="${goods[itemKey].name}"
                                       width="100px" height="100px" style="cursor : pointer;"
                                       />
                                      <button class="remove-from-basket" data-art="${article}"> - </button>
                                      ${myCart[article]} it. 
                                      <button class="add-to-basket" data-art="${article}"> + </button>
                                  </div>
                                  <div sub-product__details>
                                     <button class="delete-product" data-art="${article}"> X </button>
                                     <div class="sub-product__name">${goods[itemKey].name}</div>
                                     <div class="sub-product__features">
                                        <div class="sub-product__size">size: ${itemSize}</div>
                                        <div class="sub-product__color">color: ${itemColor}</div>
                                     </div>
                                     <div class="sub-product__price">$ ${goods[itemKey].price}</div>
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

    selectUsersChoise() {
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
            $('.add-to-basket').on('click', this.plusItemToTheBasket);
        }
        if ($('.delete-product')) {
            $('.delete-product').on('click', this.deleteAllItemsFromTheBasket);
        }
    }

    addProductToCart() {
        event.preventDefault();
        let productArticle = $('.add-to-cart').children(['data-art']).attr('data-art'); //10001
        let productColor = `${$("select.color-select").children("option:selected").val()}`;   // "black"                  
        let productSize = `${$("select.size-select").children("option:selected").val()}`;    // 39   
        let newItemArticle = `${productArticle}-${productColor}-${productSize}`; // "10001-black-39"
        this.totalPrice = this.totalPrice + goods[productArticle].price;
        if (this.basket[newItemArticle] == undefined) {
            this.basket[newItemArticle] = 1; // if there are not any such goods in the basket => set quantity to 1
        } else {
            this.basket[newItemArticle]++; // if there are already such goods in the basket => set quantity +1
        }
        this.refreshBasketState();
    }

    removeItemFromTheBasket() {
        event.preventDefault();
        let myCart = this.basket;
        let key = $(event.target).attr('data-art');
        let article = key.split("-")[0];
        console.log(this.totalPrice, " - ", goods[article].price);
        this.totalPrice = this.totalPrice - goods[article].price;
        console.log(this.totalPrice);
        if (myCart[key] > 1) {
            myCart[key]--;
        } else {
            delete myCart[key];
        }
        this.refreshBasketState();
    }

    plusItemToTheBasket() {
        event.preventDefault();
        let myCart = this.basket;
        let key = $(event.target).attr('data-art');
        let article = key.split("-")[0];
        console.log(goods[article].price, " + ", this.totalPrice);
        this.totalPrice = this.totalPrice + goods[article].price;
        myCart[key]++;
        console.log(this.totalPrice);
        this.refreshBasketState();
    }

    deleteAllItemsFromTheBasket() {
        event.preventDefault();
        let myCart = this.basket;
        let key = $(event.target).attr('data-art');
        let article = key.split("-")[0];
        console.log(this.totalPrice, " -all ", goods[article].price);
        this.totalPrice = this.totalPrice - (goods[article].price * myCart[key]);
        console.log(this.totalPrice);
        delete myCart[key];
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