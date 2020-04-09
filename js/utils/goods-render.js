import { goods } from '../goods/goods.js'
/*
*  load HTML of featured products to the page
*/

export function renderFeaturedGoods(productFeatures, condition, howManyGoodsInOneRow) {
    let howManyFeaturedGoodsDoWeHave = 0;
    let numberOfdepictedRows = 1;

    goods.forEach((product) => {

        if (product[productFeatures] === condition) {
            let outputHTML = `<div class="grid1_of_3" id="${product.id}">
                          <a href="" class="details-page" data-art="${product.id}">
                          <img src="${product.image}" alt="product image" class="details-page" data-art="${product.id}"/>
                          <h3 class="details-page" data-art="${product.id}">${product.name}</h3>
                          <div class="price">
                          <h4>$${product.price}<span class="details-page" data-art="${product.id}">indulge</span></h4>
                          </div>
                          <span class="b_btm"></span>
                          </a>
                          </div>`;

            howManyFeaturedGoodsDoWeHave++;

            if (howManyFeaturedGoodsDoWeHave === 1 || ((howManyFeaturedGoodsDoWeHave - 1) % howManyGoodsInOneRow === 0)) {
                let wrapForFeaturedGoods = document.createElement('div');
                wrapForFeaturedGoods.classList.add('grids_of_3');
                $('.main').append(wrapForFeaturedGoods);
            }

            $('.grids_of_3')[numberOfdepictedRows - 1].insertAdjacentHTML("beforeend", outputHTML);

            if (howManyFeaturedGoodsDoWeHave % howManyGoodsInOneRow === 0) {
                let wrapForFeaturedGoodsClear = document.createElement('div');
                wrapForFeaturedGoodsClear.classList.add('clear');
                $('.grids_of_3')[numberOfdepictedRows - 1].append(wrapForFeaturedGoodsClear);
                numberOfdepictedRows++;
            }
        }
    });
}