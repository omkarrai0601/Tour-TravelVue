<template>
	<div>
		<my-navbar></my-navbar>
		<my-carousel></my-carousel>
		<my-card></my-card>
		<why-choose></why-choose>
		<complete-project></complete-project>
		<top-deals></top-deals>
        <special-package></special-package>
		<partner-logo></partner-logo>
		<blog-section></blog-section>
		<happy-customers></happy-customers>
		<contact-us></contact-us>

		<google-map></google-map>

		<my-footer></my-footer>
		<div id="topcontrol" class="topcontrol" title="" @click="scrollToTop()" v-if="showScrollToTop">
			<i class="icofont-simple-up"></i>
		</div>
	</div>
</template>

<script>
import MyCarousel from "@/components/MyCarousel.vue"; // Import your carousel component
import MyNavbar from "@/components/MyNavbar.vue"; // Import your navbar component
import MyCard from "@/components/MyCard.vue";
import MyFooter from "@/components/MyFooter.vue";
import GoogleMap from "@/components/GoogleMap.vue";
import ContactUs from "@/components/ContactUs.vue";
import WhyChoose from "@/components/WhyChoose.vue";
import CompleteProject from "@/components/CompleteProject.vue";
import TopDeals from "@/components/TopDeals.vue";
import PartnerLogo from "@/components/PartnerLogo.vue";
import BlogSection from "@/components/BlogSection.vue";
import HappyCustomers from "@/components/HappyCustomers.vue";
import SpecialPackage from "@/components/SpecialPackage.vue";

export default {
	name: "MainApp",
	props: {
		msg: String,
	},
	components: {
		"my-carousel": MyCarousel,
		"my-navbar": MyNavbar,
		"my-card": MyCard,
		"contact-us": ContactUs,
		"why-choose": WhyChoose,
		"top-deals": TopDeals,
		"complete-project": CompleteProject,
		"partner-logo": PartnerLogo,
		"google-map": GoogleMap,
		"my-footer": MyFooter,
		"blog-section": BlogSection,
		"happy-customers": HappyCustomers,
		"special-package": SpecialPackage,
	},
	data() {
		return {
			showScrollToTop: false, // Initially, hide the button
		};
	},
	mounted() {
		window.addEventListener("scroll", this.handleScroll);
	},
	beforeDestroy() {
		window.removeEventListener("scroll", this.handleScroll);
	},
	methods: {
		handleScroll() {
			// Check the scroll position
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

			// Show/hide the button based on scroll position
			this.showScrollToTop = scrollTop > 0;
		},
		scrollToTop() {
			window.scrollTo({
				top: 0,
				behavior: "smooth", // Optional: Add smooth scrolling animation
			});
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
html {
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-size: 16px;
	line-height: 1.5;
	color: #545454;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	letter-spacing: 0px;
	margin-top: 0px;
	font-family: "Nunito", sans-serif;
	color: #333;
	font-weight: 700;
	line-height: normal;
}
.topcontrol {
	background: #f05942 none repeat scroll 0 0;
	border-radius: 30px;
	bottom: 5px;
	box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.2);
	color: #fff;
	cursor: pointer;
	font-size: 22px;
	height: 50px;
	line-height: 45px;
	opacity: 1;
	position: fixed;
	right: 5px;
	text-align: center;
	transition: all 0.2s ease 0s;
	width: 50px;
	z-index: 999;
}
</style>
