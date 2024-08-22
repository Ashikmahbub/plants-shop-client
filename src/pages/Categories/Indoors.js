import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import slide1 from "../../assets/Indoor/01.jpg";
import slide2 from "../../assets/Indoor/02.jpg";
import slide3 from "../../assets/Indoor/03.jpg";
import slide4 from "../../assets/Indoor/04.jpg";
import slide5 from "../../assets/Indoor/05.jpg";
import slide6 from "../../assets/Indoor/06.jpg";
 
import SectionTitle from "../../components/SectionTitle";
import { useNavigate } from "react-router-dom";

const Indoor = () => {
  const navigate = useNavigate();
  
  const handleSlideClick = (path) => {
    navigate(path);
  };

  return (
    <section onClick={() => handleSlideClick('indoor')} className="px-4 lg:px-12">
      <SectionTitle
        subHeading={"Make Your Home a Green Haven"}
        heading={"Plants for Indoors"}
      />

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
          1280: { slidesPerView: 5, spaceBetween: 40 },
          1536: { slidesPerView: 6, spaceBetween: 40 },
        }}
        // pagination={{
        //   clickable: true,
        // }}
        
        modules={[Pagination, Navigation]}
        className="mySwiper mb-24 py-10"
      >
        <SwiperSlide>
          <div className="relative cursor-pointer transition-transform transform hover:scale-105">
            <img src={slide1} alt="Indoor Plant 1" className="rounded-lg shadow-lg object-cover w-full h-64" />
            <div className="absolute inset-0 bg-black bg-opacity-25 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <p className="text-white text-lg font-semibold">Beautiful Indoor Plant</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative cursor-pointer transition-transform transform hover:scale-105">
            <img src={slide2} alt="Indoor Plant 2" className="rounded-lg shadow-lg object-cover w-full h-64" />
            <div className="absolute inset-0 bg-black bg-opacity-25 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <p className="text-white text-lg font-semibold">Bring Nature Indoors</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative cursor-pointer transition-transform transform hover:scale-105">
            <img src={slide3} alt="Indoor Plant 3" className="rounded-lg shadow-lg object-cover w-full h-64" />
            <div className="absolute inset-0 bg-black bg-opacity-25 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <p className="text-white text-lg font-semibold">Green Your Space</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative cursor-pointer transition-transform transform hover:scale-105">
            <img src={slide4} alt="Indoor Plant 4" className="rounded-lg shadow-lg object-cover w-full h-64" />
            <div className="absolute inset-0 bg-black bg-opacity-25 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <p className="text-white text-lg font-semibold">Indoor Plant Collection</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative cursor-pointer transition-transform transform hover:scale-105">
            <img src={slide5} alt="Indoor Plant 5" className="rounded-lg shadow-lg object-cover w-full h-64" />
            <div className="absolute inset-0 bg-black bg-opacity-25 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <p className="text-white text-lg font-semibold">Fresh & Green Plants</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative cursor-pointer transition-transform transform hover:scale-105">
            <img src={slide6} alt="Indoor Plant 5" className="rounded-lg shadow-lg object-cover w-full h-64" />
            <div className="absolute inset-0 bg-black bg-opacity-25 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <p className="text-white text-lg font-semibold">Fresh & Green Plants</p>
            </div>
          </div>
        </SwiperSlide>
         
      </Swiper>
    </section>
  );
};

export default Indoor;
