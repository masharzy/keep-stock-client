import React from "react";
import "./Carousel.css";
import slideOne from "../../../images/slider-1.png";
import slideTwo from "../../../images/slider-2.png";
import slideThree from "../../../images/slider-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <div className="container" style={{marginTop:"90px"}}>
      <div className="row">
        <Swiper
          rewind={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          // className="container"
        >
          <SwiperSlide>
            <div className="col-md-6">
              <h1>
                Want to stock grocery <br /> items?
              </h1>
              <p>We are here for you. If you need call us. We will try <br /> our best. We are waiting for your call.</p>
            </div>
            <div className="col-md-6">
              <img className="d-none d-lg-block" src={slideOne} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col-md-6">
              <h1>We have courier Persons</h1>
              <span>Call us if you want to keep your items in our stock.</span>
              <p>They will go to your house and bring your items</p>
            </div>
            <div className="col-md-6">
              <img className="d-none d-lg-block" src={slideTwo} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col-md-6">
              <h1>So come to us now</h1>
              <h5>And get 50% discounts</h5>
            </div>
            <div className="col-md-6">
              <img className="d-none d-lg-block" src={slideThree} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
