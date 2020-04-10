import { goods } from '../goods/goods.js'
/*
*  load HTML of featured products to the page
*/

export function renderFeaturedGoods(productFeatures, condition, howManyGoodsInOneRow) {
    let howManyFeaturedGoodsDoWeHave = 0;
    let numberOfdepictedRows = 1;
    
    let outputHTML = '';
    for (let key in goods) {
        if (goods[key][productFeatures] === condition) {
            outputHTML = `<div class="grid1_of_3" id="${key}">
                          <a href="" class="details-page" data-art="${key}">
                          <img src="${goods[key].image}" alt="product image" class="details-page" data-art="${key}"/>
                          <h3 class="details-page" data-art="${key}">${goods[key].name}</h3>
                          <div class="price">
                          <h4>$${goods[key].price}<span class="details-page" data-art="${key}">indulge</span></h4>
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
    };





}