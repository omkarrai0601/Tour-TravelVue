<template>
	<section id="blog" class="blog_section" >
		<div class="container" data-aos="fade-up">
			<div class="row">
				<div class="col-md-12">
					<div class="section-title text-center">
						<span>Latest Blog Posts</span>
						<h2>
							Our Latest Article <br />
							For Travellers
						</h2>
					</div>
				</div>
				<!-- END COL -->
			</div>
			<!-- END ROW -->

			<div class="row">
				<div class="col-lg-4 col-md-6">
					<div class="single_blog">
						<div class="blog_image">
							<img class="blog-photo" alt="Blog Photo" src="../assets/blog/1.jpg" />
						</div>

						<div class="blog-text">
							<h4><a href="#">The Most Beautiful Place In The World</a></h4>
							<div class="post-meta">
								<span> <i class="icofont-clock-time"></i> 20 Oct 2019 </span>

								<span> <i class="icofont-comment"></i> 21 Comments </span>
							</div>
						</div>
					</div>
				</div>
				<!--- END COL -->

				<div class="col-lg-4 col-md-6">
					<div class="single_blog">
						<div class="blog_image">
							<img class="blog-photo" alt="Blog Photo" src="../assets/blog/2.jpg" />
						</div>
						<div class="blog-text">
							<h4><a href="#">The Most Beautiful Place In The World</a></h4>
							<div class="post-meta">
								<span> <i class="icofont-clock-time"></i> 20 Oct 2019 </span>

								<span> <i class="icofont-comment"></i> 21 Comments </span>
							</div>
						</div>
					</div>
				</div>
				<!--- END COL -->

				<div class="col-lg-4 col-md-6">
					<div class="single_blog">
						<div class="blog_image">
							<img class="blog-photo" alt="Blog Photo" src="../assets/blog/3.jpg" />
						</div>
						<div class="blog-text">
							<h4><a href="#">The Most Beautiful Place In The World</a></h4>
							<div class="post-meta">
								<span> <i class="icofont-clock-time"></i> 20 Oct 2019 </span>

								<span> <i class="icofont-comment"></i> 21 Comments </span>
							</div>
						</div>
					</div>
				</div>
				<!--- END COL -->
			</div>
			<!--- END ROW -->
		</div>
		<!--- END CONTAINER -->
	</section>
</template>

<style scoped>
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
.single_blog {
    margin-bottom: 30px;
    border-radius: 4px;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.07);
    overflow: hidden;
}
.blog_image {
    position: relative;
    margin-bottom: 15px;
}
.single_blog:hover .blog_image:before {
    opacity: 1;
}
.pack_image:before, .single_gallery:before, .blog_image:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: 1;
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 75%);
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 75%);
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 75%);
    opacity: 0;
    transition: .5s;
}
.blog-text {
    padding: 10px 30px 30px;
}
.blog-text h4 {
    line-height: 26px;
}
.single_blog h4 a {
    transition: .5s;
}
.single_blog h4 a {
    font-size: 18px;
    margin-bottom: 15px;
    color: #333;
}
.post-meta {
    margin-top: 15px;
    font-size: 14px;
}
.post-meta span {
    margin-right: 10px;
}
.post-meta span i {
    color: #f05942;
}
img.blog-photo {
    max-width: 100%;
}
.single_blog h4 a:hover {
    color: #f05942;
    text-decoration: none;
}

</style>
