<template>
	<div class="top-carousel">
		<b-carousel id="my-carousel" v-model="slide" :interval="0" controls>
			<b-carousel-slide class="carousel-image car-3">
				<div class="highlighted-content">
					<h1 class="hero-text">Welcome To The Travel</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has
						been the industry's standard .
					</p>
					<a href="#special_package" class="btn btn-default btn-home-bg" tabindex="0">Booking Now</a>
				</div>
			</b-carousel-slide>
			<b-carousel-slide class="carousel-image car-2">
				<div class="highlighted-content">
					<h1 class="hero-text">Welcome To The Travel</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has
						been the industry's standard .
					</p>
					<a href="#special_package" class="btn btn-default btn-home-bg" tabindex="0">Booking Now</a>
				</div>
			</b-carousel-slide>
			<b-carousel-slide class="carousel-image car-1">
				<div class="highlighted-content">
					<h1 class="hero-text">Welcome To The Travel</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has
						been the industry's standard .
					</p>
					<a href="#special_package" class="btn btn-default btn-home-bg" tabindex="0">Booking Now</a>
				</div>
			</b-carousel-slide>
		</b-carousel>
	</div>
</template>

<script>
export default {
	data() {
		return {
			slide: 0, // The initial slide index
		};
	},
};
</script>
<style>
.carousel-image .carousel-caption {
	top: 60% !important;
	left: 50% !important;
	transform: translate(-50%, -50%);
	width: 80%;
}
.carousel-image {
	height: 100vh;
	background-color: aliceblue;
	position: relative;
}
.carousel-image::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5); /* Adjust the color and opacity as needed */
	z-index: 1; /* Adjust the z-index as needed */
}
.car-1 {
	background-image: url(./../assets/car1.jpg);
	background-size: cover;
	background-position: center;
}
.car-2 {
	background-image: url(./../assets/car2.jpg);
	background-size: cover;
	background-position: center;
}
.car-3 {
	background-image: url(./../assets/car3.jpg);
	background-size: cover;
	background-position: center;
}
h1.hero-text {
	color: #fff;
	font-size: 60px;
	font-weight: 700;
	margin-bottom: 20px;
	text-transform: capitalize;
	letter-spacing: 5;
}
.btn-home-bg {
	background: transparent;
	border: 2px solid #fff !important;
	border-radius: 4px !important;
	color: #fff !important;
	font-size: 13px !important;
	padding: 15px 35px !important;
	text-transform: capitalize;
	transition: all 0.3s ease 0s !important;
	font-weight: 700 !important;
}
.btn-home-bg:hover {
	background: #fff;
    border-color: #fff;
    color: #f05942 !important;
    outline: 0;
}
.top-carousel span.carousel-control-prev-icon, .top-carousel span.carousel-control-next-icon {
	position: relative;
}
.top-carousel span.carousel-control-prev-icon::before, .top-carousel span.carousel-control-next-icon::before {
    background: linear-gradient(to right, #f05942, #ed4f42, #ed4745, #eb4149,#ea3248);
    color: #fff;
    font-size: 20px;
    background: linear-gradient(to right, #f05942, #ed4f42, #ed4745, #eb4149,#ea3248);
    width: 55px;
    height: 55px;
    line-height: 50px;
    display: inline-block;
    border-radius: 50%;
    opacity: 1;
    content: "";
    position: absolute;
    top: -17px;
    left: -16px;
    z-index: -1;
}
</style>
