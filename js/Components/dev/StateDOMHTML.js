
export class StateDOMHTML {
	constructor() {
		this.currPage = JSON.parse(window.localStorage.getItem("currentPage")) || 'main-page';
	}

	switchCurrentPage(page) {
		this.currPage = page;
	}

	savePageStateInLocalStorage(page) {
		window.localStorage.setItem("currentPage", JSON.stringify(page));
	}

}


export const DOM_STATE_HTML = {
	"MAIN_PAGE_2": '',
	"MAIN_PAGE": '',
	"SALE_PAGE_FULL": '',
	"HANDBAGS_PAGE_FULL": '',
	"ACCESSORIES_PAGE_FULL": '',
	"WALLETS_PAGE_FULL": '',
	"SHOES_PAGE_FULL": '',
	"SERVICES_PAGE_FULL": '',
	"CONTACT_US_PAGE_FULL": '',
	"DETAILS_PAGE_FULL": '',
}


DOM_STATE_HTML.MAIN_PAGE_2 = `
<!-- start header -->
<div class="header_bg">
<div class="wrap">
	<div class="header">
		<div class="logo">
			<a href="index.html"><img src="../images/logo.png" alt=""/> </a>
		</div>
		<div class="h_icon">
		<ul class="icon1 sub-icon1">
			<li><a class="active-icon c1" href="#"><i>$300</i></a>
				<ul class="sub-icon1 list">
					<li><h3>shopping cart empty</h3><a href=""></a></li>
					<li><p>if items in your wishlit are missing, <a href="contact.html">contact us</a> to view them</p></li>
				</ul>
			</li>
		</ul>
		</div>
		<div class="h_search">
    		<form>
    			<input type="text" value="">
    			<input type="submit" value="">
    		</form>
		</div>
		<div class="clear"></div>
	</div>
</div>
</div>
<div class="header_btm">
<div class="wrap">
	<div class="header_sub">
		<div class="h_menu">
			<ul>
				<li class="active"><a href="index.html">Home</a></li> |
				<li><a href="sale.html">sale</a></li> |
				<li><a href="handbags.html">handbags</a></li> |
				<li><a href="accessories.html">accessories</a></li> |
				<li><a href="wallets.html">wallets</a></li> |
				<li><a href="sale.html">sale</a></li> |
				<li><a href="index.html">mens store</a></li> |
				<li><a href="shoes.html">shoes</a></li> |
				<li><a href="sale.html">vintage</a></li> |
				<li><a href="service.html">services</a></li> |
				<li><a href="contact.html">Contact us</a></li>
			</ul>
		</div>
		<div class="top-nav">
	          <nav class="nav">	        	
	    	    <a href="#" id="w3-menu-trigger"> </a>
	                  <ul class="nav-list" style="">
	            	        <li class="nav-item"><a class="active" href="index.html">Home</a></li>
							<li class="nav-item"><a href="sale.html">Sale</a></li>
							<li class="nav-item"><a href="handbags.html">Handbags</a></li>
							<li class="nav-item"><a href="accessories.html">Accessories</a></li>
							<li class="nav-item"><a href="shoes.html">Shoes</a></li>
							<li class="nav-item"><a href="service.html">Services</a></li>
							<li class="nav-item"><a href="contact.html">Contact</a></li>
	                 </ul>
	           </nav>
	             <div class="search_box">
				<form>
				   <input type="text" value="Search" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search';}"><input type="submit" value="">
			    </form>
			</div>
	          <div class="clear"> </div>
	          <script src="./Components/src/responsive.menu.js"></script>
         </div>		  
	<div class="clear"></div>
</div>
</div>
</div>
<!-- start slider -->
			<div id="da-slider" class="da-slider">
				<div class="da-slide">
					<h2>welcome to aditii</h2>
					<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.</p>
					<a href="details.html" class="da-link">shop now</a>
					<div class="da-img"><img src="../images/slider1.png" alt="image01" /></div>
				</div>
				<div class="da-slide">
					<h2>Easy management</h2>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
					<a href="details.html" class="da-link">shop now</a>
					<div class="da-img"><img src="../images/slider2.png" alt="image01" /></div>
				</div>
				<div class="da-slide">
					<h2>Revolution</h2>
					<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
					<a href="details.html" class="da-link">shop now</a>
					<div class="da-img"><img src="../images/slider3.png" alt="image01" /></div>
				</div>
				<div class="da-slide">
					<h2>Quality Control</h2>
					<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
					<a href="details.html" class="da-link">shop now</a>
					<div class="da-img"><img src="../images/slider4.png" alt="image01" /></div>
				</div>
				<nav class="da-arrows">
					<span class="da-arrows-prev"></span>
					<span class="da-arrows-next"></span>
				</nav>
			</div>
        </div>
<!----start-cursual---->
<div class="wrap">
<!----start-img-cursual---->
	<div id="owl-demo" class="owl-carousel">
		<div class="item" onclick="location.href='details.html';">
			<div class="cau_left">
				<img class="lazyOwl" data-src="../images/c1.jpg" alt="Lazy Owl Image">
			</div>
			<div class="cau_left">
				<h4><a href="details.html">branded shoes</a></h4>
				<a href="details.html" class="btn">shop</a>
			</div>
		</div>	
		<div class="item" onclick="location.href='details.html';">
			<div class="cau_left">
				<img class="lazyOwl" data-src="../images/c2.jpg" alt="Lazy Owl Image">
			</div>
			<div class="cau_left">
				<h4><a href="details.html">branded tees</a></h4>
				<a href="details.html" class="btn">shop</a>
			</div>
		</div>	
		<div class="item" onclick="location.href='details.html';">
			<div class="cau_left">
				<img class="lazyOwl" data-src="../images/c3.jpg" alt="Lazy Owl Image">
			</div>
			<div class="cau_left">
				<h4><a href="details.html">branded jeens</a></h4>
				<a href="details.html" class="btn">shop</a>
			</div>
		</div>	
		<div class="item" onclick="location.href='details.html';">
			<div class="cau_left">
				<img class="lazyOwl" data-src="../images/c2.jpg" alt="Lazy Owl Image">
			</div>
			<div class="cau_left">
				<h4><a href="details.html">branded tees</a></h4>
				<a href="details.html" class="btn">shop</a>
			</div>
		</div>	
		<div class="item" onclick="location.href='details.html';">
			<div class="cau_left">
				<img class="lazyOwl" data-src="../images/c1.jpg" alt="Lazy Owl Image">
			</div>
			<div class="cau_left">
				<h4><a href="details.html">branded shoes</a></h4>
				<a href="details.html" class="btn">shop</a>
			</div>
		</div>	
		<div class="item" onclick="location.href='details.html';">
			<div class="cau_left">
				<img class="lazyOwl" data-src="../images/c2.jpg" alt="Lazy Owl Image">
			</div>
			<div class="cau_left">
				<h4><a href="details.html">branded tees</a></h4>
				<a href="details.html" class="btn">shop</a>
			</div>
		</div>	
		<div class="item" onclick="location.href='details.html';">
			<div class="cau_left">
				<img class="lazyOwl" data-src="../images/c3.jpg" alt="Lazy Owl Image">
			</div>
			<div class="cau_left">
				<h4><a href="details.html">branded jeens</a></h4>
				<a href="details.html" class="btn">shop</a>
			</div>
		</div>	
	</div>
	<!----//End-img-cursual---->
</div>
<!-- start main1 -->
<div class="main_bg1">
<div class="wrap">	
	<div class="main1">
		<h2>featured products</h2>
	</div>
</div>
</div>
<!-- start main -->
<div class="main_bg">
<div class="wrap">	
	<div class="main">
		<!-- start grids_of_3 -->
		<div class="grids_of_3">
			<div class="grid1_of_3">
				<a href="details.html">
					<img src="../images/pic1.jpg" alt=""/>
					<h3>branded shoes</h3>
					<div class="price">
						<h4>$300<span>indulge</span></h4>
					</div>
					<span class="b_btm"></span>
				</a>
			</div>
			<div class="grid1_of_3">
				<a href="details.html">
					<img src="../images/pic2.jpg" alt=""/>
					<h3>branded t-shirts</h3>
					<div class="price">
						<h4>$300<span>indulge</span></h4>
					</div>
					<span class="b_btm"></span>
				</a>
			</div>
			<div class="grid1_of_3">
				<a href="details.html">
					<img src="../images/pic3.jpg" alt=""/>
					<h3>branded tees</h3>
					<div class="price">
						<h4>$300<span>indulge</span></h4>
					</div>
					<span class="b_btm"></span>
				</a>
			</div>
			<div class="clear"></div>
		</div>
		<div class="grids_of_3">
			<div class="grid1_of_3">
				<a href="details.html">
					<img src="../images/pic4.jpg" alt=""/>
					<h3>branded bags</h3>
					<div class="price">
						<h4>$300<span>indulge</span></h4>
					</div>
					<span class="b_btm"></span>
				</a>
			</div>
			<div class="grid1_of_3">
				<a href="details.html">
					<img src="../images/pic5.jpg" alt=""/>
					<h3>ems women bag</h3>
					<div class="price">
						<h4>$300<span>indulge</span></h4>
					</div>
					<span class="b_btm"></span>
				</a>
			</div>
			<div class="grid1_of_3">
				<a href="details.html">
					<img src="../images/pic6.jpg" alt=""/>
					<h3>branded cargos</h3>
					<div class="price">
						<h4>$300<span>indulge</span></h4>
					</div>
					<span class="b_btm"></span>
				</a>
			</div>
			<div class="clear"></div>
		</div>	
		<!-- end grids_of_3 -->
	</div>
</div>
</div>	
<!-- start footer -->
<div class="footer_bg">
<div class="wrap">	
	<div class="footer">
		<!-- start grids_of_4 -->	
		<div class="grids_of_4">
			<div class="grid1_of_4">
				<h4>featured sale</h4>
				<ul class="f_nav">
					<li><a href="">alexis Hudson</a></li>
					<li><a href="">american apparel</a></li>
					<li><a href="">ben sherman</a></li>
					<li><a href="">big buddha</a></li>
					<li><a href="">channel</a></li>
					<li><a href="">christian audigier</a></li>
					<li><a href="">coach</a></li>
					<li><a href="">cole haan</a></li>
				</ul>
			</div>
			<div class="grid1_of_4">
				<h4>mens store</h4>
				<ul class="f_nav">
					<li><a href="">alexis Hudson</a></li>
					<li><a href="">american apparel</a></li>
					<li><a href="">ben sherman</a></li>
					<li><a href="">big buddha</a></li>
					<li><a href="">channel</a></li>
					<li><a href="">christian audigier</a></li>
					<li><a href="">coach</a></li>
					<li><a href="">cole haan</a></li>
				</ul>
			</div>
			<div class="grid1_of_4">
				<h4>women store</h4>
				<ul class="f_nav">
					<li><a href="">alexis Hudson</a></li>
					<li><a href="">american apparel</a></li>
					<li><a href="">ben sherman</a></li>
					<li><a href="">big buddha</a></li>
					<li><a href="">channel</a></li>
					<li><a href="">christian audigier</a></li>
					<li><a href="">coach</a></li>
					<li><a href="">cole haan</a></li>
				</ul>
			</div>
			<div class="grid1_of_4">
				<h4>quick links</h4>
				<ul class="f_nav">
					<li><a href="">alexis Hudson</a></li>
					<li><a href="">american apparel</a></li>
					<li><a href="">ben sherman</a></li>
					<li><a href="">big buddha</a></li>
					<li><a href="">channel</a></li>
					<li><a href="">christian audigier</a></li>
					<li><a href="">coach</a></li>
					<li><a href="">cole haan</a></li>
				</ul>
			</div>
			<div class="clear"></div>
		</div>
	</div>
</div>
</div>	
<!-- start footer -->
<div class="footer_bg1">
<div class="wrap">
	<div class="footer">
		<!-- scroll_top_btn -->
	    <script type="text/javascript">
			$(document).ready(function() {
			
				var defaults = {
		  			containerID: 'toTop', // fading element id
					containerHoverID: 'toTopHover', // fading element hover id
					scrollSpeed: 1200,
					easingType: 'linear' 
		 		};
				
				
				$().UItoTop({ easingType: 'easeOutQuart' });
				
			});
		</script>
		 <a href="#" id="toTop" style="display: block;"><span id="toTopHover" style="opacity: 1;"></span></a>
		<!--end scroll_top_btn -->
		<div class="copy">
			<p class="link">&copy;  All rights reserved | Template by&nbsp;&nbsp;<a href="http://w3layouts.com/"> W3Layouts</a></p>
		</div>
		<div class="clear"></div>
	</div>
</div>
</div>
`;



const HEADER_BG = ` 
<div class="header_bg">
 <div class="wrap">
	<div class="header">
		<div class="logo">
			<a href=""><img src="../images/logo.png" alt="" class="main-page"/> </a>
		</div>
		<div class="h_icon">
		<ul class="icon1 sub-icon1">
			<li><a class="active-icon c1" href="#"><i>$300</i></a>
				<ul class="sub-icon1 list">
					<li><h3>shopping cart empty</h3><a href=""></a></li>
					<li><p>if items in your wishlit are missing, <a href="" class="contactUs-page">contact us</a> to view them</p></li>
				</ul>
			</li>
		</ul>
		</div>
		<div class="h_search">
    		<form>
    			<input type="text" value="">
    			<input type="submit" value="">
    		</form>
		</div>
		<div class="clear"></div>
	</div>
 </div>
</div>
`;

// ---------------------------------------------------------

const HEADER_MENU_NAV = `

<div class="top-nav">
  <nav class="nav">
	<a href="" id="w3-menu-trigger"> </a>
	<ul class="nav-list">
		<li class="nav-item active"><a href="" class="main-page">Home</a></li>
		<li class="nav-item"><a href="" class="sale-page">sale</a></li>
		<li class="nav-item"><a href="" class="handbags-page">handbags</a></li>
		<li class="nav-item"><a href="" class="accessories-page">accessories</a></li>
		<li class="nav-item"><a href="" class="wallets-page">wallets</a></li>
		<li class="nav-item"><a href="" class="shoes-page">shoes</a></li>
		<li class="nav-item"><a href="" class="services-page">services</a></li>
		<li class="nav-item"><a href="" class="contactUs-page">contact us</a></li>
	</ul>
  </nav>
 <div class="search_box">
	<form>
		<input type="text" value="Search" onfocus="this.value = '';"
			onblur="if (this.value == '') {this.value = 'Search';}"><input type="submit" value="">
	</form>
 </div>
 <div class="clear"></div>
</div>
<div class="clear"></div>
`;

const FOOTER_BG = `
<div class="footer_bg">
    <div class="wrap">
        <div class="footer">
            <!-- start grids_of_4 -->
            <div class="grids_of_4">
                <div class="grid1_of_4">
                    <h4>featured sale</h4>
                    <ul class="f_nav">
                        <li><a href="">alexis Hudson</a></li>
                        <li><a href="">american apparel</a></li>
                        <li><a href="">ben sherman</a></li>
                        <li><a href="">big buddha</a></li>
                        <li><a href="">channel</a></li>
                        <li><a href="">christian audigier</a></li>
                        <li><a href="">coach</a></li>
                        <li><a href="">cole haan</a></li>
                    </ul>
                </div>
                <div class="grid1_of_4">
                    <h4>mens store</h4>
                    <ul class="f_nav">
                        <li><a href="">alexis Hudson</a></li>
                        <li><a href="">american apparel</a></li>
                        <li><a href="">ben sherman</a></li>
                        <li><a href="">big buddha</a></li>
                        <li><a href="">channel</a></li>
                        <li><a href="">christian audigier</a></li>
                        <li><a href="">coach</a></li>
                        <li><a href="">cole haan</a></li>
                    </ul>
                </div>
                <div class="grid1_of_4">
                    <h4>women store</h4>
                    <ul class="f_nav">
                        <li><a href="">alexis Hudson</a></li>
                        <li><a href="">american apparel</a></li>
                        <li><a href="">ben sherman</a></li>
                        <li><a href="">big buddha</a></li>
                        <li><a href="">channel</a></li>
                        <li><a href="">christian audigier</a></li>
                        <li><a href="">coach</a></li>
                        <li><a href="">cole haan</a></li>
                    </ul>
                </div>
                <div class="grid1_of_4">
                    <h4>quick links</h4>
                    <ul class="f_nav">
                        <li><a href="">alexis Hudson</a></li>
                        <li><a href="">american apparel</a></li>
                        <li><a href="">ben sherman</a></li>
                        <li><a href="">big buddha</a></li>
                        <li><a href="">channel</a></li>
                        <li><a href="">christian audigier</a></li>
                        <li><a href="">coach</a></li>
                        <li><a href="">cole haan</a></li>
                    </ul>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
</div>
<!-- start footer -->
<div class="footer_bg1">
    <div class="wrap">
        <div class="footer">
            <!-- scroll_top_btn -->
            <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">
                $(document).ready(function () {

                    var defaults = {
                        containerID: 'toTop', // fading element id
                        containerHoverID: 'toTopHover', // fading element hover id
                        scrollSpeed: 1200,
                        easingType: 'linear'
                    };


                    $().UItoTop({ easingType: 'easeOutQuart' });

                });
            </script>
            <a href="" id="toTop" style="display: block;"><span id="toTopHover" style="opacity: 1;"></span></a>
            <!-- end scroll_top_btn -->
            <div class="copy">
            <p class="link">&copy; All rights reserved <a href="https://github.com/Skaijun/web2.0"> by OOO "Anja
                    & Co.: [Max, Dima];"</a></p>
        </div>
            <div class="clear"></div>
        </div>
    </div>
</div>
`;



DOM_STATE_HTML.MAIN_PAGE = `

<!-- start header -->
${HEADER_BG}
<div class="header_btm">
    <div class="wrap">
        <div class="header_sub">
            <div class="h_menu">
                <ul>
                    <li class="active"><a href="" class="main-page">Home</a></li> |
                    <li><a href="" class="sale-page">sale</a></li> |
                    <li><a href="" class="handbags-page">handbags</a></li> |
                    <li><a href="" class="accessories-page">accessories</a></li> |
                    <li><a href="" class="wallets-page">wallets</a></li> |
                    <li><a href="" class="shoes-page">shoes</a></li> |
                    <li><a href="" class="services-page">services</a></li> |
                    <li><a href="" class="contactUs-page">contact us</a></li>
                </ul>
            </div>
			${HEADER_MENU_NAV}
        </div>
    </div>
</div>

<!--      MAIN_PAGE            -->

<div id="da-slider" class="da-slider">
<div class="da-slide">
    <h2>welcome to aditii</h2>
    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her
        hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line
        Lane.</p>
    <a href="" class="da-link">shop now</a>
    <div class="da-img"><img src="../images/slider1.png" alt="image01" /></div>
</div>
<div class="da-slide">
    <h2>Easy management</h2>
    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
        blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
        ocean.</p>
    <a href="" class="da-link">shop now</a>
    <div class="da-img"><img src="../images/slider2.png" alt="image01" /></div>
</div>
<div class="da-slide">
    <h2>Revolution</h2>
    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
        paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
    <a href="" class="da-link">shop now</a>
    <div class="da-img"><img src="../images/slider3.png" alt="image01" /></div>
</div>
<div class="da-slide">
    <h2>Quality Control</h2>
    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life
        One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World
        of Grammar.</p>
    <a href="" class="da-link">shop now</a>
    <div class="da-img"><img src="../images/slider4.png" alt="image01" /></div>
</div>
<nav class="da-arrows">
    <span class="da-arrows-prev"></span>
    <span class="da-arrows-next"></span>
</nav>

</div>
<!-- -- start-cursual-- -->
<div class="wrap">
  <div id="owl-demo" class="owl-carousel">
    <div class="item">
        <div class="cau_left">
            <img class="lazyOwl" data-src="../images/c1.jpg" alt="Lazy Owl Image">
        </div>
        <div class="cau_left">
            <h4><a href="" class="details-page">branded shoes</a></h4>
            <a href="" class="btn details-page">shop</a>
        </div>
    </div>
    <div class="item">
        <div class="cau_left">
            <img class="lazyOwl" data-src="../images/c2.jpg" alt="Lazy Owl Image">
        </div>
        <div class="cau_left">
            <h4><a href="" class="details-page">branded tees</a></h4>
            <a href="" class="btn details-page">shop</a>
        </div>
    </div>
    <div class="item">
        <div class="cau_left">
            <img class="lazyOwl" data-src="../images/c3.jpg" alt="Lazy Owl Image">
        </div>
        <div class="cau_left">
            <h4><a href="" class="details-page">branded jeens</a></h4>
            <a href="" class="btn details-page">shop</a>
        </div>
    </div>
    <div class="item">
        <div class="cau_left">
            <img class="lazyOwl" data-src="../images/c2.jpg" alt="Lazy Owl Image">
        </div>
        <div class="cau_left">
            <h4><a href="" class="details-page">branded tees</a></h4>
            <a href="" class="btn details-page">shop</a>
        </div>
    </div>
    <div class="item">
        <div class="cau_left">
            <img class="lazyOwl" data-src="../images/c1.jpg" alt="Lazy Owl Image">
        </div>
        <div class="cau_left">
		<h4><a href="" class="details-page">branded shoes</a></h4>
            <a href="" class="btn details-page">shop</a>
        </div>
    </div>
    <div class="item">
        <div class="cau_left">
            <img class="lazyOwl" data-src="../images/c2.jpg" alt="Lazy Owl Image">
        </div>
        <div class="cau_left">
		<h4><a href="" class="details-page">branded tees</a></h4>
            <a href="" class="btn details-page">shop</a>
        </div>
    </div>
    <div class="item">
        <div class="cau_left">
            <img class="lazyOwl" data-src="../images/c3.jpg" alt="Lazy Owl Image">
        </div>
        <div class="cau_left">
            <h4><a href="" class="details-page">branded jeens</a></h4>
            <a href="" class="btn details-page">shop</a>
        </div>
    </div>
  </div>
</div>
<!-- start main1 -->
<div class="main_bg1">
  <div class="wrap">
    <div class="main1">
        <h2>featured products</h2>
    </div>
  </div>
</div>
<!-- start main -->
<div class="main_bg">
<div class="wrap">
    <div class="main">
        <!-- start grids_of_3 -->
        <div class="grids_of_3">
            <div class="grid1_of_3">
                <a href="" class="details-page">
                    <img src="../images/pic1.jpg" alt="" class="details-page" />
                    <h3>branded shoes</h3>
                    <div class="price">
                        <h4>$300<span>indulge</span></h4>
                    </div>
                    <span class="b_btm"></span>
                </a>
            </div>
            <div class="grid1_of_3">
                <a href="" class="details-page">
                    <img src="../images/pic2.jpg" alt="" class="details-page" />
                    <h3>branded t-shirts</h3>
                    <div class="price">
                        <h4>$300<span>indulge</span></h4>
                    </div>
                    <span class="b_btm"></span>
                </a>
            </div>
            <div class="grid1_of_3">
                <a href="" class="details-page">
                    <img src="../images/pic3.jpg" alt="" class="details-page" />
                    <h3>branded tees</h3>
                    <div class="price">
                        <h4>$300<span>indulge</span></h4>
                    </div>
                    <span class="b_btm"></span>
                </a>
            </div>
            <div class="clear"></div>
        </div>
        <div class="grids_of_3">
            <div class="grid1_of_3">
                <a href="" class="details-page">
                    <img src="../images/pic4.jpg" alt="" class="details-page" />
                    <h3>branded bags</h3>
                    <div class="price">
                        <h4>$300<span>indulge</span></h4>
                    </div>
                    <span class="b_btm"></span>
                </a>
            </div>
            <div class="grid1_of_3">
                <a href="" class="details-page">
                    <img src="../images/pic5.jpg" alt="" class="details-page" />
                    <h3>ems women bag</h3>
                    <div class="price">
                        <h4>$300<span>indulge</span></h4>
                    </div>
                    <span class="b_btm"></span>
                </a>
            </div>
            <div class="grid1_of_3">
                <a href="" class="details-page">
                    <img src="../images/pic6.jpg" alt="" class="details-page" />
                    <h3>branded cargos</h3>
                    <div class="price">
                        <h4>$300<span>indulge</span></h4>
                    </div>
                    <span class="b_btm"></span>
                </a>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</div>
</div> 

${FOOTER_BG}`;

// --------------------------------------------------------------------------------

DOM_STATE_HTML.SALE_PAGE_FULL = `

<!-- start header -->
${HEADER_BG}
<div class="header_btm">
<div class="wrap">
	<div class="header_sub">
		<div class="h_menu">
			<ul>              
                <li><a href="" class="main-page">Home</a></li> |
                <li class="active"><a href="" class="sale-page">sale</a></li> |
                <li><a href="" class="handbags-page">handbags</a></li> |
                <li><a href="" class="accessories-page">accessories</a></li> |
                <li><a href="" class="wallets-page">wallets</a></li> |
                <li><a href="" class="shoes-page">shoes</a></li> |
                <li><a href="" class="services-page">services</a></li> |
                <li><a href="" class="contactUs-page">contact us</a></li>
			</ul>
		</div>
		${HEADER_MENU_NAV}
</div>
</div>
</div>
<!-- start main -->
<div class="main_bg">
<div class="wrap">	
	<div class="main">
	<!-- start gallery_sale  -->
			<div class="gallery1">
					<div class="container">
					<ul id="filters" class="clearfix">
						<li><span class="filter active" data-filter="app card icon logo web">All</span></li>
						<li><span class="filter" data-filter="app card web">men</span></li>
						<li><span class="filter" data-filter="icon web card">women</span></li>
						<li><span class="filter" data-filter="web app icon card">Watches</span></li>
						<li><span class="filter" data-filter="icon app web logo">Accessories</span></li>
					</ul>
			<div id="portfoliolist">
			<div class="portfolio logo1" data-cat="logo">
				<div class="portfolio-wrapper">				
					<a href="" class="details-page">
						<img src="../images/sale_pic1.jpg"  alt="Image 2" class="details-page"/>
					</a>
					<div class="label">
						<div class="label-text">
							<a class="text-title">ethnic fashion guide: sarees</a>
							<span class="text-category">indulge</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>				
			<div class="portfolio app" data-cat="app">
				<div class="portfolio-wrapper">			
					<a href="" class="details-page">
						<img src="../images/sale_pic2.jpg"  alt="Image 2" class="details-page"/>
					</a>
					<div class="label">
						<div class="label-text">
							<a class="text-title">fasttrack: watches</a>
							<span class="text-category">indulge</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>		
			<div class="portfolio web" data-cat="web">
				<div class="portfolio-wrapper">						
					<a href="" class="details-page">
						<img src="../images/sale_pic3.jpg"  alt="Image 2" class="details-page"/>
					</a>
					<div class="label">
						<div class="label-text">
							<a class="text-title">ethnic fashion guide: dresses</a>
							<span class="text-category">indulge</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>				
			<div class="portfolio card" data-cat="card">
				<div class="portfolio-wrapper">			
					<a href="" class="details-page">
						<img src="../images/sale_pic4.jpg"  alt="Image 2" class="details-page"/>
					</a>
					<div class="label">
						<div class="label-text">
							<a class="text-title">ethnic fashion guide: tees</a>
							<span class="text-category">indulge</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>	
			<div class="portfolio app" data-cat="app">
				<div class="portfolio-wrapper">
					<a href="" class="details-page">
						<img src="../images/sale_pic5.jpg"  alt="Image 2" class="details-page"/>
					</a>
					<div class="label">
						<div class="label-text">
							<a class="text-title">ethnic fashion guide: tees</a>
							<span class="text-category">indulge</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>			
			<div class="portfolio card" data-cat="card">
				<div class="portfolio-wrapper">			
					<a href="" class="details-page">
						<img src="../images/sale_pic6.jpg"  alt="Image 2" class="details-page"/>
					</a>
					<div class="label">
						<div class="label-text">
							<a class="text-title">fasttrack: watches</a>
							<span class="text-category">indulge</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>	
			<div class="portfolio web" data-cat="web">
				<div class="portfolio-wrapper">						
					<a href="" class="details-page">
						<img src="../images/sale_pic7.jpg"  alt="Image 2" class="details-page"/>
					</a>
					<div class="label">
						<div class="label-text">
							<a class="text-title">Sonor's Design</a>
							<span class="text-category">indulge</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>				
			<div class="portfolio card" data-cat="card">
				<div class="portfolio-wrapper">			
					<a href="" class="details-page">
						<img src="../images/sale_pic8.jpg"  alt="Image 2" class="details-page"/>
					</a>
					<div class="label">
						<div class="label-text">
							<a class="text-title">Typography Company</a>
							<span class="text-category">indulge</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>	
			<div class="portfolio app" data-cat="app">
				<div class="portfolio-wrapper">
					<a href="" class="details-page">
						<img src="../images/sale_pic9.jpg"  alt="Image 2" class="details-page"/>
					</a>
					<div class="label">
						<div class="label-text">
							<a class="text-title">Weatherette</a>
							<span class="text-category">indulge</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>			
			<div class="portfolio card" data-cat="card">
				<div class="portfolio-wrapper">			
					<a href="" class="details-page">
						<img src="../images/sale_pic10.jpg"  alt="Image 2" class="details-page"/>
					</a>
					<div class="label">
						<div class="label-text">
							<a class="text-title">BMF</a>
							<span class="text-category">indulge</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>	
					
			<div class="portfolio card" data-cat="card">
				<div class="portfolio-wrapper">			
					<a href="" class="details-page">
						<img src="../images/sale_pic11.jpg"  alt="Image 2" class="details-page"/>
					</a>
					<div class="label">
						<div class="label-text">
							<a class="text-title">Techlion</a>
							<span class="text-category">indulge</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>	
			
			<div class="portfolio logo1" data-cat="logo">
				<div class="portfolio-wrapper">			
					<a href="" class="details-page">
						<img src="../images/sale_pic12.jpg"  alt="Image 2" class="details-page"/>
					</a>
					<div class="label">
						<div class="label-text">
							<a class="text-title">KittyPic</a>
							<span class="text-category">indulge</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>																																							
		</div>
	</div>
	<script type="text/javascript" src="../js/Components/src/fliplightbox.min.js"></script>
	<script type="text/javascript">$('body').flipLightBox()</script>
	<div class="clear"> </div>
	</div>
	</div>
</div>
</div>		
<!-- start footer -->
${FOOTER_BG}
`;

// --------------------------------------------------------------------------------

DOM_STATE_HTML.HANDBAGS_PAGE_FULL = `

<!-- start header -->
${HEADER_BG}
<div class="header_btm">
<div class="wrap">
	<div class="header_sub">
		<div class="h_menu">
		   <ul>
             <li><a href="" class="main-page">Home</a></li> |
             <li><a href="" class="sale-page">sale</a></li> |
             <li class="active"><a href="" class="handbags-page">handbags</a></li> |
             <li><a href="" class="accessories-page">accessories</a></li> |
             <li><a href="" class="wallets-page">wallets</a></li> |
             <li><a href="" class="shoes-page">shoes</a></li> |
             <li><a href="" class="services-page">services</a></li> |
             <li><a href="" class="contactUs-page">contact us</a></li>
           </ul>
		</div>
        ${HEADER_MENU_NAV}
</div>
</div>
</div>
<!-- start main -->
<div class="main_bg">
<div class="wrap">	
	<div class="main">
		<h2 class="style top">featured handbags</h2>
		<!-- start grids_of_3 -->
		<div class="grids_of_3">
			<div class="grid1_of_3">
				<a href="" class="details-page">
					<img src="../images/w_pic1.jpg" alt="" class="details-page"/>
					<h3>branded handbags</h3>
					<div class="price">
						<h4>$299<span>indulge</span></h4>
					</div>
					<span class="b_btm"></span>
				</a>
			</div>
			<div class="grid1_of_3">
			<a href="" class="details-page">
					<img src="../images/w_pic2.jpg" alt="" class="details-page"/>
					<h3>branded handbags</h3>
					<div class="price">
						<h4>$299 <span>indulge</span></h4>
					</div>
					<span class="b_btm"></span>
				</a>
			</div>
			<div class="grid1_of_3">
			<a href="" class="details-page">
					<img src="../images/w_pic3.jpg" alt="" class="details-page"/>
					<h3>branded handbags</h3>
					<div class="price">
						<h4>$299<span>indulge</span></h4>
					</div>
					<span class="b_btm"></span>
				</a>
			</div>
			<div class="clear"></div>
		</div>
		<div class="grids_of_3">
			<div class="grid1_of_3">
			<a href="" class="details-page">
					<img src="../images/w_pic4.jpg" alt="" class="details-page"/>
					<h3>branded handbags</h3>
					<div class="price">
						<h4>$299<span>indulge</span></h4>
					</div>
					<span class="b_btm"></span>
				</a>
			</div>
			<div class="grid1_of_3">
			<a href="" class="details-page">
					<img src="../images/w_pic5.jpg" alt="" class="details-page"/>
					<h3>branded handbags</h3>
					<div class="price">
						<h4>$299<span>indulge</span></h4>
					</div>
					<span class="b_btm"></span>
				</a>
			</div>
			<div class="grid1_of_3">
			<a href="" class="details-page">
					<img src="../images/w_pic6.jpg" alt="" class="details-page"/>
					<h3>branded handbags</h3>
					<div class="price">
						<h4>$299<span>indulge</span></h4>
					</div>
					<span class="b_btm"></span>
				</a>
			</div>
			<div class="clear"></div>
		</div>
	</div>
</div>
</div>	
<!-- start footer -->
${FOOTER_BG}
`;

// --------------------------------------------------------------------------------

DOM_STATE_HTML.ACCESSORIES_PAGE_FULL = `

<!-- start header -->
${HEADER_BG}
	<div class="header_btm">
		<div class="wrap">
			<div class="header_sub">
				<div class="h_menu">
					<ul>
                        <li><a href="" class="main-page">Home</a></li> |
                        <li><a href="" class="sale-page">sale</a></li> |
                        <li><a href="" class="handbags-page">handbags</a></li> |
                        <li class="active"><a href="" class="accessories-page">accessories</a></li> |
                        <li><a href="" class="wallets-page">wallets</a></li> |
                        <li><a href="" class="shoes-page">shoes</a></li> |
                        <li><a href="" class="services-page">services</a></li> |
                        <li><a href="" class="contactUs-page">contact us</a></li>
					</ul>
				</div>
				${HEADER_MENU_NAV}
			</div>
		</div>
	</div>
	<!-- start main -->
	<div class="main_bg">
		<div class="wrap">
			<div class="main">
				<h2 class="style top">accessories</h2>
				<!-- start grids_of_3 -->
				<div class="grids_of_3">
            <div class="grid1_of_3">
                <a href="" class="details-page">
                    <img src="../images/pic1.jpg" alt="" class="details-page" />
                    <h3>branded shoes</h3>
                    <div class="price">
                        <h4>$300<span>indulge</span></h4>
                    </div>
                    <span class="b_btm"></span>
                </a>
            </div>
            <div class="grid1_of_3">
                <a href="" class="details-page">
                    <img src="../images/pic2.jpg" alt="" class="details-page" />
                    <h3>branded t-shirts</h3>
                    <div class="price">
                        <h4>$300<span>indulge</span></h4>
                    </div>
                    <span class="b_btm"></span>
                </a>
            </div>
            <div class="grid1_of_3">
                <a href="" class="details-page">
                    <img src="../images/pic3.jpg" alt="" class="details-page" />
                    <h3>branded tees</h3>
                    <div class="price">
                        <h4>$300<span>indulge</span></h4>
                    </div>
                    <span class="b_btm"></span>
                </a>
            </div>
            <div class="clear"></div>
        </div>
        <div class="grids_of_3">
            <div class="grid1_of_3">
                <a href="" class="details-page">
                    <img src="../images/pic4.jpg" alt="" class="details-page" />
                    <h3>branded bags</h3>
                    <div class="price">
                        <h4>$300<span>indulge</span></h4>
                    </div>
                    <span class="b_btm"></span>
                </a>
            </div>
            <div class="grid1_of_3">
                <a href="" class="details-page">
                    <img src="../images/pic5.jpg" alt="" class="details-page" />
                    <h3>ems women bag</h3>
                    <div class="price">
                        <h4>$300<span>indulge</span></h4>
                    </div>
                    <span class="b_btm"></span>
                </a>
            </div>
            <div class="grid1_of_3">
                <a href="" class="details-page">
                    <img src="../images/pic6.jpg" alt="" class="details-page" />
                    <h3>branded cargos</h3>
                    <div class="price">
                        <h4>$300<span>indulge</span></h4>
                    </div>
                    <span class="b_btm"></span>
                </a>
            </div>
					<div class="clear"></div>
				</div>
			</div>
		</div>
	</div>
	<!-- start footer -->
    ${FOOTER_BG}
`;

// --------------------------------------------------------------------------------

DOM_STATE_HTML.WALLETS_PAGE_FULL = `

<!-- start header -->
${HEADER_BG}
<div class="header_btm">
<div class="wrap">
	<div class="header_sub">
		 <div class="h_menu">
           <ul>
            <li><a href="" class="main-page">Home</a></li> |
            <li><a href="" class="sale-page">sale</a></li> |
            <li><a href="" class="handbags-page">handbags</a></li> |
            <li><a href="" class="accessories-page">accessories</a></li> |
            <li class="active"><a href="" class="wallets-page">wallets</a></li> |
            <li><a href="" class="shoes-page">shoes</a></li> |
            <li><a href="" class="services-page">services</a></li> |
            <li><a href="" class="contactUs-page">contact us</a></li>
          </ul>
		 </div>
		 ${HEADER_MENU_NAV}
</div>
</div>
</div>
<!-- start main -->
<div class="main_bg">
<div class="wrap">	
	<div class="main">
		<h2 class="style top">featured wallets</h2>
		<!-- start grids_of_3 -->
		<div class="grids_of_3">
			<div class="grid1_of_3">
				<a href="" class="details-page">
					<img src="../images/w_pic1.jpg" alt="" class="details-page"/>
					<h3>branded handbags</h3>
					<div class="price">
						<h4>$299<span>indulge</span></h4>
					</div>
					<span class="b_btm"></span>
				</a>
			</div>
			<div class="grid1_of_3">
			<a href="" class="details-page">
					<img src="../images/w_pic2.jpg" alt="" class="details-page"/>
					<h3>branded handbags</h3>
					<div class="price">
						<h4>$299 <span>indulge</span></h4>
					</div>
					<span class="b_btm"></span>
				</a>
			</div>
			<div class="grid1_of_3">
			<a href="" class="details-page">
					<img src="../images/w_pic3.jpg" alt="" class="details-page"/>
					<h3>branded handbags</h3>
					<div class="price">
						<h4>$299<span>indulge</span></h4>
					</div>
					<span class="b_btm"></span>
				</a>
			</div>
			<div class="clear"></div>
		</div>
		<div class="grids_of_3">
			<div class="grid1_of_3">
			<a href="" class="details-page">
					<img src="../images/w_pic4.jpg" alt="" class="details-page"/>
					<h3>branded handbags</h3>
					<div class="price">
						<h4>$299<span>indulge</span></h4>
					</div>
					<span class="b_btm"></span>
				</a>
			</div>
			<div class="grid1_of_3">
			<a href="" class="details-page">
					<img src="../images/w_pic5.jpg" alt="" class="details-page"/>
					<h3>branded handbags</h3>
					<div class="price">
						<h4>$299<span>indulge</span></h4>
					</div>
					<span class="b_btm"></span>
				</a>
			</div>
			<div class="grid1_of_3">
			<a href="" class="details-page">
					<img src="../images/w_pic6.jpg" alt="" class="details-page"/>
					<h3>branded handbags</h3>
					<div class="price">
						<h4>$299<span>indulge</span></h4>
					</div>
					<span class="b_btm"></span>
				</a>
			</div>
			<div class="clear"></div>
		</div>
	</div>
</div>
</div>	
${FOOTER_BG}
`;

// --------------------------------------------------------------------------------

DOM_STATE_HTML.SHOES_PAGE_FULL = `

<!-- start header -->
${HEADER_BG}
<div class="header_btm">
<div class="wrap">
	<div class="header_sub">
		<div class="h_menu">
            <ul>
                <li><a href="" class="main-page">Home</a></li> |
                <li><a href="" class="sale-page">sale</a></li> |
                <li><a href="" class="handbags-page">handbags</a></li> |
                <li><a href="" class="accessories-page">accessories</a></li> |
                <li><a href="" class="wallets-page">wallets</a></li> |
                <li class="active"><a href="" class="shoes-page">shoes</a></li> |
                <li><a href="" class="services-page">services</a></li> |
                <li><a href="" class="contactUs-page">contact us</a></li>
			</ul>
		</div>
		${HEADER_MENU_NAV}
</div>
</div>
</div>
<!-- start main -->
<div class="main_bg">
<div class="wrap">	
	<div class="main">
		<h2 class="style top">featured shoes</h2>
		<!-- start grids_of_3 -->
		<div class="grids_of_3">
			<div class="grid1_of_3 details-page">
				<a href="">
					<img src="../images/shoe_pic1.jpg" alt=""/>
					<h3>branded shoes</h3>
					<div class="price">
						<h4>$499<span>indulge</span></h4>
					</div>
					<span class="b_btm"></span>
				</a>
			</div>
			<div class="grid1_of_3 details-page">
				<a href="">
					<img src="../images/shoe_pic2.jpg" alt=""/>
					<h3>branded shoes</h3>
					<div class="price">
						<h4>$499<span>indulge</span></h4>
					</div>
					<span class="b_btm"></span>
				</a>
			</div>
			<div class="grid1_of_3 details-page">
				<a href="">
					<img src="../images/shoe_pic3.jpg" alt=""/>
					<h3>branded shoes</h3>
					<div class="price">
						<h4>$499<span>indulge</span></h4>
					</div>
					<span class="b_btm"></span>
				</a>
			</div>
			<div class="clear"></div>
		</div>
		<div class="grids_of_3">
			<div class="grid1_of_3 details-page">
				<a href="">
					<img src="../images/shoe_pic4.jpg" alt=""/>
					<h3>branded shoes</h3>
					<div class="price">
						<h4>$499<span>indulge</span></h4>
					</div>
					<span class="b_btm"></span>
				</a>
			</div>
			<div class="grid1_of_3 details-page">
				<a href="">
					<img src="../images/shoe_pic5.jpg" alt=""/>
					<h3>branded shoes</h3>
					<div class="price">
						<h4>$499<span>indulge</span></h4>
					</div>
					<span class="b_btm"></span>
				</a>
			</div>
			<div class="grid1_of_3 details-page">
				<a href="">
					<img src="../images/shoe_pic6.jpg" alt=""/>
					<h3>branded shoes</h3>
					<div class="price">
						<h4>$499<span>indulge</span></h4>
					</div>
					<span class="b_btm"></span>
				</a>
			</div>
			<div class="clear"></div>
		</div>
	</div>
</div>
</div>		
${FOOTER_BG}
`;

// --------------------------------------------------------------------------------

DOM_STATE_HTML.SERVICES_PAGE_FULL = `

<!-- start header -->
${HEADER_BG}
<div class="header_btm">
<div class="wrap">
	<div class="header_sub">
		<div class="h_menu">
			<ul>
                <li><a href="" class="main-page">Home</a></li> |
                <li><a href="" class="sale-page">sale</a></li> |
                <li><a href="" class="handbags-page">handbags</a></li> |
                <li><a href="" class="accessories-page">accessories</a></li> |
                <li><a href="" class="wallets-page">wallets</a></li> |
                <li><a href="" class="shoes-page">shoes</a></li> |
                <li class="active"><a href="" class="services-page">services</a></li> |
                <li><a href="" class="contactUs-page">contact us</a></li>
			</ul>
		</div>
		${HEADER_MENU_NAV}
</div>
</div>
</div>
<!-- start main -->
<div class="main_bg">
<div class="wrap">	
	<div class="main">
	<!-- start service -->
	  <div class="service">
		<div class="ser-main">
			<h4>Our Services</h4>
			<p class="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
			<div class="ser-grid">
				<div class="ser-grid-list details-page">
					<a href=""><img src="../images/icon1.png" alt=""></a>
					<h5><a href="">24/7 customer support</a></h5>
					<p class="para">It is a long established fact that a reader will be distracted by the page when looking at its layout.</p>
				</div>
				<div class="ser-grid-list details-page">
					<a href=""><img src="../images/icon2.png" alt=""></a>
					<h5><a href="">hygienic branded</a></h5>
					<p class="para"> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
				</div>
				<div class="ser-grid-list details-page">
					<a href=""><img src="../images/icon3.png" alt=""></a>
					<h5><a href="">safely dispatch</a></h5>
					<p class="para">It is a long established fact that a reader will be distracted by the page when looking at its layout.</p>
				</div>
				<div class="clear"></div>
			</div>
			<div class="ser-grid">
				<div class="ser-grid-list details-page">
					<a href=""><img src="../images/icon4.png" alt=""></a>
					<h5><a href="">100% look book</a></h5>
					<p class="para">It is a long established fact that a reader will be distracted by the page when looking at its layout.</p>
				</div>
				<div class="ser-grid-list details-page">
					<a href=""><img src="../images/icon5.png" alt=""></a>
					<h5><a href="">authentic products</a></h5>
					<p class="para"> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
				</div>
				<div class="ser-grid-list details-page">
					<a href=""><img src="../images/icon6.png" alt=""></a>
					<h5><a href="">100% guarantee</a></h5>
					<p class="para">It is a long established fact that a reader will be distracted by the page when looking at its layout.</p>
				</div>
				<div class="clear"></div>
			</div>
		</div>
		<div class="left_sidebar">
					<div class="sellers">
						<h4>Best Sellers</h4>
						<div class="single-nav">
			                <ul>
			                   <li><a href="#">Always free from repetition</a></li>
			                    <li><a href="#">Always free from repetition</a></li>
			                    <li><a href="#">The standard chunk of Lorem Ipsum</a></li>
			                    <li><a href="#">The standard chunk of Lorem Ipsum</a></li>
			                    <li><a href="#">Always free from repetition</a></li>
			                    <li><a href="#">The standard chunk of Lorem Ipsum</a></li>
			                    <li><a href="#">Always free from repetition</a></li>
			                    <li><a href="#">Always free from repetition</a></li>
			                    <li><a href="#">Always free from repetition</a></li>
			                    <li><a href="#">The standard chunk of Lorem Ipsum</a></li>
			                    <li><a href="#">Always free from repetition</a></li>
			                    <li><a href="#">Always free from repetition</a></li>
			                    <li><a href="#">Always free from repetition</a></li>			                    
			                </ul>
			              </div>
					</div>
				</div>
				<div class="clear"></div>
			</div>
	</div>
</div>
</div>		
${FOOTER_BG}
`;

// --------------------------------------------------------------------------------
DOM_STATE_HTML.CONTACT_US_PAGE_FULL = `

<!-- start header -->
${HEADER_BG}
<div class="header_btm">
    <div class="wrap">
        <div class="header_sub">
            <div class="h_menu">
                <ul>
                    <li><a href="" class="main-page">Home</a></li> |
                    <li><a href="" class="sale-page">sale</a></li> |
                    <li><a href="" class="handbags-page">handbags</a></li> |
                    <li><a href="" class="accessories-page">accessories</a></li> |
                    <li><a href="" class="wallets-page">wallets</a></li> |
                    <li><a href="" class="shoes-page">shoes</a></li> |
                    <li><a href="" class="services-page">services</a></li> |
                    <li class="active"><a href="" class="contactUs-page">contact us</a></li>
                </ul>
            </div>
			${HEADER_MENU_NAV}
        </div>
    </div>
</div>
<!-- start main -->
<div class="main_bg">
    <div class="wrap">
        <div class="main">
            <div class="contact">
                <div class="contact_info">
                    <h2>get in touch</h2>
                    <div class="map">
                        <iframe width="100%" height="250" frameborder="0" scrolling="no" marginheight="0"
                            marginwidth="0"
                            src="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Lighthouse+Point,+FL,+United+States&amp;aq=4&amp;oq=light&amp;sll=26.275636,-80.087265&amp;sspn=0.04941,0.104628&amp;ie=UTF8&amp;hq=&amp;hnear=Lighthouse+Point,+Broward,+Florida,+United+States&amp;t=m&amp;z=14&amp;ll=26.275636,-80.087265&amp;output=embed"></iframe><br><small><a
                                href="https://maps.google.co.in/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Lighthouse+Point,+FL,+United+States&amp;aq=4&amp;oq=light&amp;sll=26.275636,-80.087265&amp;sspn=0.04941,0.104628&amp;ie=UTF8&amp;hq=&amp;hnear=Lighthouse+Point,+Broward,+Florida,+United+States&amp;t=m&amp;z=14&amp;ll=26.275636,-80.087265"
                                style="color:#777777;text-align:left;font-size:13px;font-family: 'Source Sans Pro', sans-serif;">View
                                Larger Map</a></small>
                    </div>
                </div>
                <div class="contact-form">
                    <h2>Contact Us</h2>
                    <form method="post" action="contact-post.html" id="user-contact-form">
                        <div class="form-contact-control">
                            <span><label>Name</label></span>
                            <input name="userName" type="text" id="user-contact-name" class="textbox">
                            <small>Error message</small>
                        </div>
                        <div class="form-contact-control">
                            <span><label>E-mail</label></span>
                            <input name="userEmail" type="text" id="user-contact-email" class="textbox">
                            <small>Error message</small>
                        </div>
                        <div class="form-contact-control">
                            <span><label>Mobile</label></span>
                            <input name="userPhone" type="text" id="user-contact-phone" class="textbox" placeholder="+380...">
                            <small>Error message</small>
                        </div>
                        <div class="form-contact-control">
                            <span><label>Subject</label></span>
                            <textarea name="userMsg" id="user-contact-subject"> </textarea>
                        </div>
                        <div>
                            <span><input type="submit" class="user-contact-submit" value="Submit us"></span>
                        </div>
                    </form>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
</div>
<!-- start footer -->
${FOOTER_BG}
`;

// --------------------------------------------------------------------------------

DOM_STATE_HTML.DETAILS_PAGE_FULL = `

<!-- start header -->
${HEADER_BG}
<div class="header_btm">
<div class="wrap">
	<div class="header_sub">
		<div class="h_menu">
			<ul>
                <li class="active"><a href="" class="main-page">Home</a></li> |
                <li><a href="" class="sale-page">sale</a></li> |
                <li><a href="" class="handbags-page">handbags</a></li> |
                <li><a href="" class="accessories-page">accessories</a></li> |
                <li><a href="" class="wallets-page">wallets</a></li> |
                <li><a href="" class="shoes-page">shoes</a></li> |
                <li><a href="" class="services-page">services</a></li> |
                <li><a href="" class="contactUs-page">contact us</a></li>
			</ul>
		</div>
		${HEADER_MENU_NAV}
</div>
</div>
</div>
<!-- start main -->
<div class="main_bg">
<div class="wrap">	
	<div class="main">
	<!-- start content -->
	<div class="single">
			<!-- start span1_of_1 -->
			<div class="left_content">
			<div class="span1_of_1">
				<!-- start product_slider -->
				<div class="product-view">
				    <div class="product-essential">
				        <div class="product-img-box">
				    <div class="more-views" style="float:left;">
				        <div class="more-views-container">
				        <ul>
				            <li>
				            	<a class="cs-fancybox-thumbs" data-fancybox-group="thumb" style="width:64px;height:85px;" href=""  title="" alt="">
				            	<img src="" src_main=""  title="" alt="" /></a>            
				            </li>
				            <li>
				            	<a class="cs-fancybox-thumbs" data-fancybox-group="thumb" style="width:64px;height:85px;" href=""  title="" alt="">
				            	<img src="" src_main=""  title="" alt="" /></a>
				            </li>
				            <li>
				            	<a class="cs-fancybox-thumbs" data-fancybox-group="thumb" style="width:64px;height:85px;" href=""  title="" alt="">
				            	<img src="" src_main=""  title="" alt="" /></a> 
				            </li>
				            <li>
				            	<a class="cs-fancybox-thumbs" data-fancybox-group="thumb" style="width:64px;height:85px;" href=""  title="" alt="">
				            	<img src="" src_main="" title="" alt="" /></a>  
				            </li>
				            <li>
				            	<a class="cs-fancybox-thumbs" data-fancybox-group="thumb" style="width:64px;height:85px;" href=""  title="" alt="">
				            	<img src="" src_main="" title="" alt="" /></a>
				            </li>
				          </ul>
				        </div>
				    </div>
				    <div class="product-image"> 
				        <a class="cs-fancybox-thumbs cloud-zoom" rel="adjustX:30,adjustY:0,position:'right',tint:'#202020',tintOpacity:0.5,smoothMove:2,showTitle:true,titleOpacity:0.5" data-fancybox-group="thumb" href="../images/0001-2.jpg" title="Women Shorts" alt="Women Shorts">
				           	<img src="../images/0001-2.jpg" alt="Women Shorts" title="Women Shorts" />
				        </a>
				   </div>
					<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">
						var prodGallery = jQblvg.parseJSON('{"prod_1":{"main":{"orig":"../images/0001-2.jpg","main":"../images/large/0001-2.jpg","thumb":"../images/small/0001-2.jpg","label":""},"gallery":{"item_0":{"orig":"../images/0001-2.jpg","main":"../images/large/0001-2.jpg","thumb":"../images/small/0001-2.jpg","label":""},"item_1":{"orig":"../images/0001-1.jpg","main":"../images/large/0001-1.jpg","thumb":"../images/small/0001-1.jpg","label":""},"item_2":{"orig":"../images/0001-5.jpg","main":"../images/large/0001-5.jpg","thumb":"../images/small/0001-5.jpg","label":""},"item_3":{"orig":"../images/0001-3.jpg","main":"../images/large/0001-3.jpg","thumb":"../images/small/0001-3.jpg","label":""},"item_4":{"orig":"../images/0001-4.jpg","main":"../images/large/0001-4.jpg","thumb":"../images/small/0001-4.jpg","label":""}},"type":"simple","video":false}}'),
						    gallery_elmnt = jQblvg('.product-img-box'),
						    galleryObj = new Object(),
						    gallery_conf = new Object();
						    gallery_conf.moreviewitem = '<a class="cs-fancybox-thumbs" data-fancybox-group="thumb" style="width:64px;height:85px;" href=""  title="" alt=""><img src="" src_main="" width="64" height="85" title="" alt="" /></a>';
						    gallery_conf.animspeed = 200;
						jQblvg(document).ready(function() {
						    galleryObj[1] = new prodViewGalleryForm(prodGallery, 'prod_1', gallery_elmnt, gallery_conf, '.product-image', '.more-views', 'http:');
						        jQblvg('.product-image .cs-fancybox-thumbs').absoluteClick();
						    jQblvg('.cs-fancybox-thumbs').fancybox({ prevEffect : 'none', 
						                             nextEffect : 'none',
						                             closeBtn : true,
						                             arrows : true,
						                             nextClick : true, 
						                             helpers: {
						                               thumbs : {
						                                   width: 64,
						                                   height: 85,
						                                   position: 'bottom'
						                               }
						                             }
						                             });
						    jQblvg('#wrap').css('z-index', '100');
						            jQblvg('.more-views-container').elScroll({type: 'vertical', elqty: 4, btn_pos: 'border', scroll_speed: 400 });
						        
						});
						
						function initGallery(a,b,element) {
						    galleryObj[a] = new prodViewGalleryForm(prods, b, gallery_elmnt, gallery_conf, '.product-image', '.more-views', '');
						};
					</script>
				</div>
				</div>
				</div>
				<!-- end product_slider -->
			</div>
			<!-- start span1_of_1 -->
			<div class="span1_of_1_des">
				  <div class="desc1">
					<h3>Lorem Ipsum is simply dummy text </h3>
					<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
					<h5>Rs. 399 <a href="#">click for offer</a></h5>
					<div class="available">
						<h4>Available Options :</h4>
						<ul>
							<li>Color:
								<select>
								<option>Silver</option>
								<option>Black</option>
								<option>Dark Black</option>
								<option>Red</option>
							</select></li>
							<li>Size:
								<select>
									<option>L</option>
									<option>XL</option>
									<option>S</option>
									<option>M</option>
								</select>
							</li>
							<li>Quality:
								<select>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</select>
							</li>
						</ul>
						<div class="btn_form">
							<form>
								<input type="submit" value="add to cart" title="" />
							</form>
						</div>
						<span class="span_right"><a href="#">login to save in wishlist </a></span>
						<div class="clear"></div>
					</div>
					<div class="share-desc">
						<div class="share">
							<h4>Share Product :</h4>
							<ul class="share_nav">
								<li><a href="#"><img src="../images/facebook.png" title="facebook"></a></li>
								<li><a href="#"><img src="../images/twitter.png" title="Twiiter"></a></li>
								<li><a href="#"><img src="../images/rss.png" title="Rss"></a></li>
								<li><a href="#"><img src="../images/gpluse.png" title="Google+"></a></li>
				    		</ul>
						</div>
						<div class="clear"></div>
					</div>
			   	 </div>
			   	</div>
			   	<div class="clear"></div>
			   	<!-- start tabs -->
				   	<section class="tabs">
		            <input id="tab-1" type="radio" name="radio-set" class="tab-selector-1" checked="checked">
			        <label for="tab-1" class="tab-label-1">overview</label>
			
		            <input id="tab-2" type="radio" name="radio-set" class="tab-selector-2">
			        <label for="tab-2" class="tab-label-2">consumer electronics</label>
			
		            <input id="tab-3" type="radio" name="radio-set" class="tab-selector-3">
			        <label for="tab-3" class="tab-label-3">semiconductor</label>
	          
				    <div class="clear-shadow"></div>
					
			        <div class="content">
				        <div class="content-1">
				        	<p class="para top"><span>LOREM IPSUM</span> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined </p>
							<ul>
								<li>Research</li>
								<li>Design and Development</li>
								<li>Porting and Optimization</li>
								<li>System integration</li>
								<li>Verification, Validation and Testing</li>
								<li>Maintenance and Support</li>
							</ul>
							<div class="clear"></div>
						</div>
				        <div class="content-2">
							<p class="para"><span>WELCOME </span> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections </p>
							<ul class="qua_nav">
								<li>Multimedia Systems</li>
								<li>Digital media adapters</li>
								<li>Set top boxes for HDTV and IPTV Player applications on various Operating Systems and Hardware Platforms</li>
							</ul>
						</div>
				        <div class="content-3">
				        	<p class="para top"><span>LOREM IPSUM</span> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined </p>
							<ul>
								<li>Research</li>
								<li>Design and Development</li>
								<li>Porting and Optimization</li>
								<li>System integration</li>
								<li>Verification, Validation and Testing</li>
								<li>Maintenance and Support</li>
							</ul>
							<div class="clear"></div>
						</div>
			        </div>
			        </section>
		         	<!-- end tabs -->
			   	</div>
			   	<!-- start sidebar -->
			 <div class="left_sidebar">
					<div class="sellers">
						<h4>Best Sellers</h4>
						<div class="single-nav">
			                <ul>
			                   <li><a href="#">Always free from repetition</a></li>
			                    <li><a href="#">Always free from repetition</a></li>
			                    <li><a href="#">The standard chunk of Lorem Ipsum</a></li>
			                    <li><a href="#">The standard chunk of Lorem Ipsum</a></li>
			                    <li><a href="#">Always free from repetition</a></li>
			                    <li><a href="#">The standard chunk of Lorem Ipsum</a></li>
			                    <li><a href="#">Always free from repetition</a></li>
			                    <li><a href="#">Always free from repetition</a></li>
			                    <li><a href="#">Always free from repetition</a></li>
			                    <li><a href="#">The standard chunk of Lorem Ipsum</a></li>
			                    <li><a href="#">Always free from repetition</a></li>
			                    <li><a href="#">Always free from repetition</a></li>
			                    <li><a href="#">Always free from repetition</a></li>			                    
			                </ul>
			              </div>
						  <div class="banner-wrap bottom_banner color_link">
								<a href="#" class="main_link">
								<figure><img src="../images/delivery.png" alt=""></figure>
								<h5><span>Free Shipping</span><br> on orders over $99.</h5><p>This offer is valid on all our store items.</p></a>
						 </div>
						 <div class="brands">
							 <h1>Brands</h1>
					  		 <div class="field">
				                 <select class="select1">
				                   <option>Please Select</option>
										<option>Lorem ipsum dolor sit amet</option>
										<option>Lorem ipsum dolor sit amet</option>
										<option>Lorem ipsum dolor sit amet</option>
				                  </select>
				            </div>
			    		</div>
					</div>
				</div>
					<!-- end sidebar -->
          	    <div class="clear"></div>
	       </div>	
	</div>
 </div>
</div>
${FOOTER_BG}
`;	
