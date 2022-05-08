import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial container">
      <div className="row">
        <h3 className="text-center mt-5">What our clients says</h3>
        <Swiper
          navigation={true}
          pagination={true}
          modules={[Autoplay, Navigation, Pagination]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="text-center"
        >
          <SwiperSlide>
            <img src="https://randomuser.me/api/portraits/men/58.jpg" alt="" />
            <h4 className="mt-3">Raymond</h4>
            <p>
              Our collections experience with Keep Stock Collections has been
              very good in terms of both results and the support we have
              received. We enjoy a good working relationship with Keep Stock.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://randomuser.me/api/portraits/men/34.jpg" alt="" />
            <h4 className="mt-3">James</h4>
            <p>
              We hired Keep Stock to manage our store. <br /> They managed it so
              good. We are very happy.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://randomuser.me/api/portraits/men/21.jpg" alt="" />
            <h4 className="mt-3">Robert</h4>
            <p>One of the best service. Suggested</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://randomuser.me/api/portraits/men/35.jpg" alt="" />
            <h4 className="mt-3">David</h4>
            <p>You should use there services.</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
