import { goods } from './goods'

/*
*  load HTML of product's detailed info to the product-details-page
*/

export function renderDetailedProduct(attr) {

  let outputHTML = '';
  for (let key in goods) {
    if (key === attr) {
      outputHTML = `<div class="product-image"> 
                              <a class="cs-fancybox-thumbs cloud-zoom"
                              rel="adjustX:30,adjustY:0,position:'right',tint:'#202020',tintOpacity:0.5,smoothMove:2,showTitle:true,titleOpacity:0.5"
                              data-fancybox-group="thumb"
                              href="${goods[key].image}"
                              title="${goods[key].name}"
                              alt="${goods[key].description}">
                              <img src="${goods[key].image}" alt="${goods[key].description}" title="${goods[key].name}" />
                              </a>
                              </div>`;
      $('.product-img-box')[0].insertAdjacentHTML("beforeend", outputHTML);
      //    ---------------------------------------------------------------------------
      let descrAndCostHTML = `<h3>${goods[key].name}</h3>
                     <p>${goods[key].description}</p>
                      <h5>${goods[key].price} $ <a href="" data-art="${key}">click for offer</a></h5>`;
      $('.desc1')[0].insertAdjacentHTML("afterbegin", descrAndCostHTML);
      //    ---------------------------------------------------------------------------
      let abiableColorArr = goods[key].color;
      let colorSelect = pickUpAviableSelectForThis(abiableColorArr);
      let abiableSizeArr = goods[key].size;
      let sizeSelect = pickUpAviableSelectForThis(abiableSizeArr);
      let aviableOptionsHTML = `<h4>Available Options :</h4>
                       <ul>
                         <li>Color:
                           <select class="color-select">
                         ${colorSelect}
                           </select>
                         </li>
                         <li>Size:
                           <select class="size-select">
                         ${sizeSelect}
                           </select>
                         </li>
                       </ul>`;

      $('.available')[0].insertAdjacentHTML("afterbegin", aviableOptionsHTML);
      //    ---------------------------------------------------------------------------
      let addToCartHTML = `<form class="add-to-cart">
      <input type="submit" value="add to cart" title="" data-art="${key}"/>
     </form>`;
      $('.btn_form')[0].insertAdjacentHTML("beforeend", addToCartHTML);
    }
  };

  function pickUpAviableSelectForThis(arr) {
    let textHTML = '';
    arr.forEach((item) => {
      textHTML += `<option value="${item}">${item}</option>`;
    });
    return textHTML;
  };

}




