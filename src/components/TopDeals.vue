<template>
	<section id="top_deals" class="top_deals" data-aos="fade-up">
		<div class="container">
			<div class="row">
				<div class="col-md-12 aos-init aos-animate" data-aos="fade-up">
					<div class="section-title text-center">
						<span>Popular Destinations</span>
						<h2>
							Travel Most Popular Place <br />
							In The World
						</h2>
					</div>
				</div>
				<!-- END COL -->
			</div>
			<!-- END ROW -->

			<div class="row aos-init aos-animate" data-aos="fade-up">
				<div class="col-sm-4 col-xs-12">
					<div class="single-deal">
						<figure class="effect-sadie">
							<img src="../assets/1.jpg" alt="" />
							<figcaption>
								<div class="pull-left">
									<h4>Beijing , China</h4>
									<p>From $850</p>
								</div>

								<div class="pull-right">
									<a href="tour-details.html"><i class="icofont-arrow-right"></i></a>
								</div>
							</figcaption>
						</figure>
					</div>
					<!--- END GRID -->
				</div>
				<!--- END COL -->

				<div class="col-sm-4 col-xs-12">
					<div class="single-deal">
						<figure class="effect-sadie">
							<img src="../assets/2.jpg" alt="" />
							<figcaption>
								<div class="pull-left">
									<h4>Tokyo , Japan</h4>
									<p>From $955</p>
								</div>

								<div class="pull-right">
									<a href="tour-details.html"><i class="icofont-arrow-right"></i></a>
								</div>
							</figcaption>
						</figure>
					</div>
					<!--- END GRID -->
				</div>
				<!--- END COL -->

				<div class="col-sm-4 col-xs-12">
					<div class="single-deal">
						<figure class="effect-sadie">
							<img src="../assets/3.jpg" alt="" />
							<figcaption>
								<div class="pull-left">
									<h4>Semporna , Malaysia</h4>
									<p>From $650</p>
								</div>

								<div class="pull-right">
									<a href="tour-details.html"><i class="icofont-arrow-right"></i></a>
								</div>
							</figcaption>
						</figure>
					</div>
					<!--- END GRID -->
				</div>
				<!--- END COL -->

				<div class="col-sm-4 col-xs-12">
					<div class="single-deal">
						<figure class="effect-sadie">
							<img src="../assets/4.jpg" alt="" />
							<figcaption>
								<div class="pull-left">
									<h4>Victoria, Columbia</h4>
									<p>From $450</p>
								</div>

								<div class="pull-right">
									<a href="tour-details.html"><i class="icofont-arrow-right"></i></a>
								</div>
							</figcaption>
						</figure>
					</div>
					<!--- END GRID -->
				</div>
				<!--- END COL -->

				<div class="col-sm-4 col-xs-12">
					<div class="single-deal">
						<figure class="effect-sadie">
							<img src="../assets/5.jpg" alt="" />
							<figcaption>
								<div class="pull-left">
									<h4>Bangkok , Thailan</h4>
									<p>From $980</p>
								</div>

								<div class="pull-right">
									<a href="tour-details.html"><i class="icofont-arrow-right"></i></a>
								</div>
							</figcaption>
						</figure>
					</div>
					<!--- END GRID -->
				</div>
				<!--- END COL -->

				<div class="col-sm-4 col-xs-12">
					<div class="single-deal">
						<figure class="effect-sadie">
							<img src="../assets/6.jpg" alt="" />
							<figcaption>
								<div class="pull-left">
									<h4>Jakarta, Indonesia</h4>
									<p>From $300</p>
								</div>

								<div class="pull-right">
									<a href="tour-details.html"><i class="icofont-arrow-right"></i></a>
								</div>
							</figcaption>
						</figure>
					</div>
					<!--- END GRID -->
				</div>
				<!--- END COL -->
			</div>
			<!--- END ROW -->
		</div>
		<!--- END CONTAINER-FLUID -->
	</section>
</template>

<style>
.section-title {
    margin-bottom: 60px;
}
.section-title span {
    color: #f05942;
    font-weight: 600;
    margin-bottom: 10px;
    display: block;
}

.section-title h2 {
    font-size: 40px;
    margin-top: 0;
    position: relative;
    line-height: 50px;
    text-transform: capitalize;
}
.single-deal {
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.07);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 30px;
}
.single-deal figure {
    position: relative;
    text-align: center;
    margin: 0;
}
.single-deal figcaption {
    overflow: hidden;
    padding: 15px 30px;
    text-align: left;
    background-color: #fff;
    transition: .2s;
}
.single-deal:hover figcaption {
    background: linear-gradient(to right, #f05942, #ed4f42, #ed4745, #eb4149,#ea3248);
    color: #fff;
}
.single-deal figcaption .pull-left {
    padding-right: 10px;
}
.single-deal figcaption .pull-right {
    padding-left: 10px;
}
.single-deal figure img {
    position: relative;
    display: block;
    width: 100%;
}
.single-deal h4 {
    margin-bottom: 2px;
    font-size: 18px;
    text-align: left;
    transition: .2s;
}
.single-deal:hover figcaption h4 {
    color: #fff;
}
.single-deal p {
    margin-bottom: 0;
    font-size: 15px;
}
.single-deal a {
    background: linear-gradient(to right, #f05942, #ed4f42, #ed4745, #eb4149,#ea3248);
    color: #fff;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    display: inline-block;
    margin-top: 8px;
    text-align: center;
    text-decoration: none !important;
}
.single-deal:hover a {
    background: #fff;
    color: #f05942;
}
.pull-left {
    float: left;
}
.pull-right {
    float: right;
}
</style>