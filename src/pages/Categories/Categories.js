import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
 
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Pagination } from "swiper/modules";
import slide1 from "../../assetsslider/01.jpg";
import slide2 from "../../assets/slider/02.jpg";
import slide3 from "../../assets/slider/03.jpg";
import slide4 from "../../assets/slider/04.jpg";
import slide5 from "../../assets/slider/05.jpg";
import SectionTitle from "../../components/SectionTitle";
import { useNavigate } from "react-router-dom";
 

const Catagory = () => {
    const navigate = useNavigate();
    const handleSlideClick = (path) =>{
        navigate(path);
    }
  return (
   <section className="">
    <SectionTitle
     subHeading ={"Best For Office"}
     heading = {"Indoor"}
    >
     
    </SectionTitle>
    <Swiper
      
      slidesPerView={6}
      spaceBetween={30}
      
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-24 py-10"
    
    >
      <SwiperSlide onClick={()=>handleSlideClick('/indoor')}>
        <img src={slide1} alt="" />
         
      </SwiperSlide>
      <SwiperSlide onClick={()=>handleSlideClick('/semi-indoor')}>
        <img src={slide2} alt="" />
        
      </SwiperSlide>
      <SwiperSlide onClick={()=>handleSlideClick('/bonsai')}>
        <img src={slide3} alt="" />
 
      </SwiperSlide>
      <SwiperSlide onClick={()=>handleSlideClick('/corporate')}>
        <img src={slide4} alt="" />
     
      </SwiperSlide>
      <SwiperSlide onClick={()=>handleSlideClick('/outdoor')}>
        <img src={slide5} alt="" />
   
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
    
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
 
      </SwiperSlide>
      
    </Swiper>
       
   </section>
  );
};

export default Catagory;
