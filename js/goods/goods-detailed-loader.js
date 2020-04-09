import { goods } from './goods'

/*
*  load HTML of product's detailed info to the product-details-page
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
            //    ---------------------------------------------------------------------------

            let descrAndCostHTML = `<h3>${product.name}</h3>
                     <p>${product.description}</p>
                      <h5>${product.price} $ <a href="" data-art="${product.id}">click for offer</a></h5>`;
            $('.desc1')[0].insertAdjacentHTML("afterbegin", descrAndCostHTML);
            //    ---------------------------------------------------------------------------
            let abiableColorArr = product.color;
            let colorSelect = pickUpAviableSelectForThis(abiableColorArr);
            let abiableSizeArr = product.size;
            let sizeSelect = pickUpAviableSelectForThis(abiableSizeArr);

            let aviableOptionsHTML = `<h4>Available Options :</h4>
                        <ul>
                          <li>Color:
                            <select>
                          ${colorSelect}
                            </select>
                          </li>
                          <li>Size:
                            <select>
                          ${sizeSelect}
                            </select>
                          </li>
                        </ul>`;

            $('.available')[0].insertAdjacentHTML("afterbegin", aviableOptionsHTML);
            //    ---------------------------------------------------------------------------

            let addToCartHTML = `<form>
                                  <input type="submit" value="add to cart" title="" data-art="${product.id}"/>
                                 </form>`;
            $('.btn_form')[0].insertAdjacentHTML("beforeend", addToCartHTML);
        }
    });

    function pickUpAviableSelectForThis(arr) {
        let textHTML = '';
        arr.forEach((item) => {
            textHTML += `<option>${item}</option>`;
        });
        return textHTML;
    };

}




