import { goods } from './goods'

/*
*  load to HTML detailed info of the product
*/

export function renderDetailedProduct(attr) {
    goods.forEach((product) => {
        if (product.id === +attr) {

            let outputHTML = `<div
                              class="product-image"> 
                              <a
                              class="cs-fancybox-thumbs cloud-zoom"
                              rel="adjustX:30,adjustY:0,position:'right',tint:'#202020',tintOpacity:0.5,smoothMove:2,showTitle:true,titleOpacity:0.5"
                              data-fancybox-group="thumb"
                              href="${product.image}"
                              title="${product.name}"
                              alt="${product.description}">
                              <img src="${product.image}" alt="${product.description}" title="${product.name}" />
                              </a>
                              </div>`;

            $('.product-img-box')[0].insertAdjacentHTML("beforeend", outputHTML);
            
        }
    });
}