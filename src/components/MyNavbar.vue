<template>
	<b-navbar toggleable="lg" id="navbarContainer" class="top">
		<div class="container">
			<b-navbar-brand href="#" class="mr-auto py-0">
				<img class="brand-logo" alt="Turista logo" src="./../assets/logo.png" />
			</b-navbar-brand>
	
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
	
			<b-nav-item>HOME</b-nav-item>
			<b-nav-item>Services</b-nav-item>
			<b-nav-item>Top Deals</b-nav-item>
			<b-nav-item>Package</b-nav-item>
			<b-nav-item>Gallery</b-nav-item>
			<b-nav-item>Blog</b-nav-item>
			<b-nav-item>Contact</b-nav-item>
		</div>

	</b-navbar>
</template>

<style scoped>
.navbar {
	position: fixed;
	top: 0.98px;
	z-index: 11;
	width: 100vw;
	padding: 15px 0px;
}
.navbar.white {
	background: #fff;
	-webkit-animation: fadeInDown 800ms;
	animation: fadeInDown 800ms;
	transition: all 0.5s ease 0s;
}
.navbar.white .container li a.nav-link {
	color: #000000;
}
.navbar.top .container li a.nav-link {
	color: #ffffff;
}
.navbar.top {
	background-color: transparent;
	transition: all 0.5s ease 0s;
}
.brand-logo {
    height: 51px;
}
li.nav-item {
    list-style: none;
}
</style>

<script>
// Function to handle the scroll event
function handleScroll() {
	// Get the current scroll position
	var scrollTop = window.scrollY || document.documentElement.scrollTop;

	// Define the threshold for triggering the event (e.g., 100 pixels from the top)
	var threshold = 0;

	// Check if the scroll position is at or above the threshold
	if (scrollTop <= threshold) {
		// Execute your desired event or actions here
		console.log("Scroll position is at the top!");
		document.getElementById("navbarContainer").classList.add("top");
		document.getElementById("navbarContainer").classList.remove("white");
	} else {
		document.getElementById("navbarContainer").classList.remove("top");
		document.getElementById("navbarContainer").classList.add("white");
	}
}

// Add an event listener to the 'scroll' event
window.addEventListener("scroll", handleScroll);
</script>
