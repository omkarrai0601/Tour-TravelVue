<template>
	<div class="footer">
		<div class="container">
			<div class="row">
				<div class="col-lg-3">
					<div class="footer-widget">
						<div class="foot-logo">
							<a href="index.html"><img src="../assets/logo.png" alt="" /></a>
						</div>
						<p class="copyright_text">Copyright © 2019 | All Rights Reserved.</p>
					</div>
				</div>
				<!--- END COL -->

				<div class="col-lg-3">
					<div class="footer-widget">
						<h3 class="fot-title">Quick Links</h3>
						<ul>
							<li><a href="#">Home</a></li>
							<li><a href="#">Term</a></li>
							<li><a href="#">Privacy &amp; Policy</a></li>
							<li><a href="#">Blog</a></li>
							<li><a href="#">Contact Us</a></li>
						</ul>
					</div>
				</div>
				<!--- END COL -->

				<div class="col-lg-3">
					<div class="footer-widget">
						<h3 class="fot-title">About Us</h3>
						<ul>
							<li><a href="#">Our Story</a></li>
							<li><a href="#">Travel Blog &amp; Tips</a></li>
							<li><a href="#">Working With Us</a></li>
							<li><a href="#">Tour Guid</a></li>
							<li><a href="#">Be Our Partner</a></li>
						</ul>
					</div>
				</div>
				<!--- END COL -->

				<div class="col-lg-3">
					<div class="footer-widget">
						<h3 class="fot-title">Support</h3>
						<ul>
							<li><a href="#">Customer Support</a></li>
							<li><a href="#">Privacy &amp; Policy</a></li>
							<li><a href="#">Terms &amp; Condition</a></li>
							<li><a href="#">Forum</a></li>
							<li><a href="#">Tour Guid</a></li>
						</ul>
					</div>
				</div>
				<!--- END COL -->
			</div>
			<!--- END ROW -->
		</div>
		<!--- END CONTAINER -->
	</div>
</template>

<script>
export default {
	name: "MyFooter",
};
</script>

<style scoped>
.footer {
    padding: 60px 0 50px;
    background-color: #1c1c1c;
}
.foot-logo {
    margin-bottom: 10px;
}
.footer a {
    transition: .5s;
}
.foot-logo img {
    width: 120px;
}
.copyright_text {
    color: #727272;
}
.footer .fot-title {
    font-size: 22px;
    margin-bottom: 15px;
    color: #fff;
}
.footer ul {
    list-style-type: none;
}
.footer ul li {
    line-height: 32px;
}
.footer ul li a {
    font-weight: 600;
    color: #727272;
}
ul, li {
    margin: 0;
    padding: 0;
}
</style>
