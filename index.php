<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
	<script type="text/javascript" src="http://fast.fonts.com/jsapi/6debb9f6-678b-474d-b007-9fa2baf9b402.js"></script>
    </head>
    <body>
    	<div id="container">
        	<header id="site-header" class="clearfix">
        		<!--<div id="wrapper">-->
					<h1 id="site-title">Henry Proudlove</h1>
					<nav id="site-nav" class="clearfix">
						<div id="nav-holder">
							<div id="section-marker">
								<div id="marker-shape"></div>
							</div><a href="#" class="nav-item first active">work</a><a href="#" class="nav-item middle">about</a><a href="#" class="nav-item last">contact</a></div>
					</nav><!--#site-nav-->
				<!--</div>--><!--#wrapper-->
        	</header><!--#site-header-->
        	
        	<!--<section id="content" class="thumbs clearfix">
        		<a></a>
        		<a></a>
        		<a></a>
        		<a></a>
        		<a></a>
        		<a></a>
        		<a></a>
        		<a></a>
        		<a></a>
        		<a></a>
        		<a></a>
        		<a></a>
        	</section> #content -->
        	
        	<section id="content" class="intro no-scroll clearfix">
        		<div id="imgs">
        			<?php
        
						$dir = "img/intro-imgs/";
			
						// Open a known directory, and proceed to read its contents
						if (is_dir($dir)) {
							$images = glob($dir . '*.{jpg,jpeg,png,gif}', GLOB_BRACE);
						}
						$ic = count($images);
						for($i=0; $i < $ic; $i ++){
							if($i==0){
								echo '<div class="img img-show" style="background-image:url(\'' . $images[$i] . '\'); background-size:cover; background-position-y: center;"></div>'; 
							}else{
								echo '<div class="img" style="background-image:url(\'' . $images[$i] . '\'); background-size:cover; background-position-y: center;"></div>'; 
							}
						}
					?>
				</div>
				<div id="hit-areas"></div>
        	</section> <!-- #content -->
        	
        	<!--<section id="content" class="no-scroll clearfix">
        		<a href="#" class="email"><span>Email</span></a>
        		<a href="#" class="linkedin"><span>LinkedIn</span></a>
        	</section> #content.contact -->
        	<!--<section id="content" class="clearfix about">
        		<article>
        			<h1 class="about-title">Hi</h1>
        			<section class="about-section">
        				<h1 class="section-header">01 background</h1>
        				<p class="section-content">
        					I’m Designer and Art Director based in London. Over eight  years in the industry, I’ve produced work for clients including Absolut, Adidas, COI, Guardian, MTV, BMW and Save the Children. Since leaving glue isobar in 2012, I’ve taken on a huge range of Freelance projects working with everyone from with big agencies, start ups and charities.
        				</p>
        			</section>
        			<section class="about-section">
        				<h1 class="section-header">01 skillz</h1>
        				<p class="section-content">
        					Recently I’ve focussed on art direction and layout, particularly on resposive site design. I love typography, grids and the arrangement of things. I also  have a strong background in motion graphics and animation in both After Effects and Flash. I enjoy coding, am skilled in front end development and have worked extensively with PHP.
        				</p>
        			</section>
        			<section class="about-section">
        				<h1 class="section-header">03 ambition</h1>
        				<p class="section-content">
        					I want to make work that unites the very best in design and technology. I like to get involved in every aspect of a project from the broadest coneptual strokes right down to the very finest details. Also some other bumf here to make the columns balanced anything will do. Hey wait, is this live? Oh no I left the placeholder in. How embarrassing!
        				</p>
        			</section>
        			<footer class="about-title">
        				<a href="#" class="cv-link">CV</a>
        			</footer>
        		</article>
        	</section> #content.about-->
        	
        </div><!--#container-->
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.0.min.js"><\/script>')</script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    </body>
</html>
