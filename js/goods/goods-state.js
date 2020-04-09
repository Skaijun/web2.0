import { renderFeaturedGoods } from '../utils/goods-render.js'
/*
*  load HTML of featured products to the main page
*/

export const goodsState = {
    goodsFeaturedMainPage: {
        howManyGoodsDepictInOneRow: 3,
        category: 'featured',
        condition: true,
    },

    goodsCategoryShoesPage: {
        howManyGoodsDepictInOneRow: 3,
        category: 'category',
        condition: 'shoes',
    },

    renderFeatGoodsMainPage: function () {
        renderFeaturedGoods(this.goodsFeaturedMainPage.category, this.goodsFeaturedMainPage.condition, this.goodsFeaturedMainPage.howManyGoodsDepictInOneRow);
    },

    renderShoesCategoryShoesPage: function () {
        renderFeaturedGoods(this.goodsCategoryShoesPage.category, this.goodsCategoryShoesPage.condition, this.goodsCategoryShoesPage.howManyGoodsDepictInOneRow);
    }
}



