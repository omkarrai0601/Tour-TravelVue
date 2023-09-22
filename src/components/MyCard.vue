<template>
    <section class="service-section" data-aos="fade-up">
        <div class="album bg-body-tertiary">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                    <div class="col">
                        <div class="card service-card">
                            <span class="icon-detail">
                                <i class="icofont-bed"></i>
                            </span>
                            <div class="card-body">
                                <h5>Hotel Booking</h5>
                                <p class="card-text">
                                    Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor
                                    invidunt
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card service-card">
                            <span class="icon-detail">
                                <i class="icofont-airplane-alt"></i>
                            </span>
                            <div class="card-body">
                                <h5>Flight Booking</h5>
                                <p class="card-text">
                                    Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor
                                    invidunt.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card service-card">
                            <span class="icon-detail">
                                <i class="icofont-air-ticket"></i>
                            </span>
                            <div class="card-body">
                                <h5>Ticket Booking</h5>
                                <p class="card-text">
                                    Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor
                                    invidunt.
                                </p>
                            </div>
                        </div>
                    </div>
    
                    <div class="col">
                        <div class="card service-card">
                            <span class="icon-detail">
                                <i class="icofont-travelling"></i>
                            </span>
                            <div class="card-body">
                                <h5>Amazing Tour</h5>
                                <p class="card-text">
                                    Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor
                                    invidunt..
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
	name: "MyCard",
};
</script>
<style>
.service-section {
	padding-top: 100px;
	padding-bottom: 100px;
}
.icon-detail {
    background: linear-gradient(to right, #f05942, #ed4f42, #ed4745, #eb4149,#ea3248);
    border-radius: 50%;
    color: #fff;
    font-size: 29px;
    height: 75px;
    line-height: 75px;
    width: 75px;
    text-align: center;
    top: 0;
    transition: all 0.3s ease 0s;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
}

.service-card {
    background: #fff none repeat scroll 0 0;
    margin-bottom: 40px;
    transition: all 0.4s ease 0s;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.07);
    padding: 30px 20px !important;
    border-radius: 4px;
}
</style>
