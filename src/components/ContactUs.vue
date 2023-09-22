<template>
	<section id="contact" class="contact_area section-padding" data-aos="fade-up">
		<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="section-title text-center">
							<span style="color: red">Contact Us</span>
							<h2>
								If You Have any Question <br />
								Drop a Message
							</h2>
						</div>
					</div>
				</div>

				<div class="row align-items-center">
					<div class="col-lg-7 col-sm-12 col-xs-12 d-block mx-auto">
						<div class="contact">
							<form id="contact-form" method="post" enctype="multipart/form-data">
								<div class="row">
									<div class="form-group col-md-6">
										<input
											type="text"
											name="name"
											class="form-control"
											id="first-name"
											placeholder="Name"
											required="required"
											fdprocessedid="d2r3o"
										/>
									</div>
									<div class="form-group col-md-6">
										<input
											type="email"
											name="email"
											class="form-control"
											id="first-email"
											placeholder="Email"
											required="required"
											fdprocessedid="bn5gi"
										/>
									</div>
									<div class="form-group col-md-12">
										<input
											type="text"
											name="subject"
											class="form-control"
											id="subject"
											placeholder="Subject"
											required="required"
											fdprocessedid="fyw75s"
										/>
									</div>
									<div class="form-group col-md-12">
										<textarea
											rows="6"
											name="message"
											class="form-control"
											id="description"
											placeholder="Your Message"
											required="required"
										></textarea>
									</div>
									<div class="col-md-12">
										<div class="actions text-left">
											<input
												type="submit"
												value="Send message"
												name="submit"
												id="submitButton"
												class="btn btn-lg btn-contact-bg"
												title="Submit Your Message!"
												fdprocessedid="mpztfi"
											/>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>

					<div class="col-lg-5 col-sm-12 col-xs-12 d-block mx-auto">
						<div class="contact_address text-left">
							<div class="single-contact-info">
								<i class="icofont-google-map"></i>
								<p>
									2369 Robinson Lane Jackson<br />
									OH 45640
								</p>
							</div>

							<div class="single-contact-info">
								<i class="icofont-headphone-alt"></i>
								<p>
									(+1) 740-395-3829<br />
									(+1) 740-982-9821
								</p>
							</div>

							<div class="single-contact-info">
								<i class="icofont-ui-email"></i>
								<p>
									help@turista.com<br />
									info@turista.com
								</p>
							</div>
						</div>
					</div>
				</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "ContactUs",
};
</script>

<style scoped>
.contact_address {
	margin-bottom: 30px;
	padding-left: 30px;
}
.single-contact-info {
	margin-bottom: 10px;
	overflow: hidden;
}
.contact_address i {
	width: 45px;
	height: 45px;
	line-height: 45px;
	background: linear-gradient(to right, #f05942, #ed4f42, #ed4745, #eb4149, #ea3248);
	color: #fff;
	border-radius: 50%;
	font-size: 16px;
	margin-bottom: 15px;
	text-align: center;
	float: left;
	margin-right: 24px;
	margin-top: 8px;
}
.contact .form-control {
	padding: 22px 15px;
	border-radius: 0px;
	background-color: #f1f6f9;
	border-color: #f1f6f9;
	margin-bottom: 15px;
}
.contact .form-control:focus {
	border-color: #f05942;
	box-shadow: none;
	outline: 0 none;
}
#submitButton.btn-contact-bg {
    background: linear-gradient(to right, #f05942, #ed4f42, #ed4745, #eb4149,#ea3248);
    border: 1px solid #f05942 !important;
    color: #fff !important;
    padding: 12px 27px !important;
    text-transform: capitalize;
    transition: all 0.2s ease 0s;
    border-radius: 0;
    text-align: center;
    cursor: pointer;
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    font-weight: 600;
}
#submitButton:hover, #submitButton:focus {
    background: linear-gradient(to right, #f05942, #ed4f42, #ed4745, #eb4149,#ea3248);
    border: 1px solid #ed4f42!important;
    color: #fff;
}
</style>
