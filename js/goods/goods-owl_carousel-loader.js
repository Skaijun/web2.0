import { goods } from './goods'
/*
*  load HTML owl-carousel products to the main page
*/
export function renderOwlCarouselGoods() {

    goods.forEach((product) => {

        if (product.owl_carousel === true) {
            let outputHTML = `<div class="item">
                            <div class="cau_left">
                              <img class="lazyOwl details-page" data-src="${product.image}" data-art="${product.id}" alt="Lazy Owl Image">
                            </div>
                            <div class="cau_left">
                              <h4><a href="" class="details-page" data-art="${product.id}">${product.name}</a></h4>
                              <a href="" class="btn details-page" data-art="${product.id}">shop</a>
                            </div>
                            </div>`;

            $('#owl-demo').append(outputHTML);
        }
    });
}