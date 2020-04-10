import { goods } from './goods'
/*
*  load HTML owl-carousel products to the main page
*/
export function renderOwlCarouselGoods() {

  for (let key in goods) {
    let outputHTML = '';
    if (goods[key].owl_carousel === true) {
      outputHTML = `<div class="item">
                            <div class="cau_left">
                              <img class="lazyOwl details-page" data-src="${goods[key].image}" data-art="${key}" alt="Lazy Owl Image">
                            </div>
                            <div class="cau_left">
                              <h4><a href="" class="details-page" data-art="${key}">${goods[key].name}</a></h4>
                              <a href="" class="btn details-page" data-art="${key}">shop</a>
                            </div>
                            </div>`;

      $('#owl-demo').append(outputHTML);
    }
  };

}