// import {ContactForms} from './Components/dev/form-validation';
import { RenderHTML } from './Components/dev/renderHTML';
import { StateDOMHTML } from './Components/dev/StateDOMHTML'
// import { ContactForms } from './Components/dev/form-validation'
import { activateResponsiveMenu } from './Components/src/responsive.menu.js'

// import './Components/src/cloud-zoom.1.0.3.min';
// import './Components/src/easing';
// import './Components/src/fliplightbox.min';
// import './Components/src/jquery.cslider';
// import './Components/src/jquery.easing.min';
// import './Components/src/jquery.fancybox.pack';
// import './Components/src/jquery.fancybox-thumbs';
// import './Components/src/jquery.fancybox-buttons';
// import './Components/src/jquery.min';
// import './Components/src/jquery.mixitup.min';
// import './Components/src/modernizr.custom.28468';
// import './Components/src/move-top';
// import './Components/src/owl.carousel';
// import './Components/src/productviewgallery';
// import './Components/src/responsive.menu';

// sector clear :)



const webShopDOM = new RenderHTML(document.body);
window.onload = activateResponsiveMenu();
window.StateDOMHTML = StateDOMHTML;
