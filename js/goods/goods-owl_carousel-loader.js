import { goods } from './goods'
/*
*  load to HTML owl-carousel products
*/
export function renderOwlCarouselGoods() {

    goods.forEach((product) => {

        if (product.owl_carousel === true) {
            let outputHTML = `<div class="item">
                            <div class="cau_left">
                              <img class="lazyOwl details-page" data-src="${product.image}" alt="Lazy Owl Image">
                            </div>
                            <div class="cau_left">
                              <h4><a href="" class="details-page">${product.name}</a></h4>
                              <a href="" class="btn details-page">shop</a>
                            </div>
                            </div>`;

            $('#owl-demo').append(outputHTML);
        }
    });
}