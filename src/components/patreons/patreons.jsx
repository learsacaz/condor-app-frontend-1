import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import './patreons.css'

function Patreons() {
  return (
    <section className='slider-container'>
        <h3 className='slider-title'>Nuestros Patrocinadores</h3>
        <Swiper
        className='slider'
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        modules={[Autoplay]}
        speed={2000}
        autoplay={{
            delay: 500, // 3 segundos
            disableOnInteraction: false, // sigue aunque el usuario interactúe
        }}
        breakpoints={{
            480: {
            slidesPerView: 2,
            spaceBetween: 10,
            },
            768: {
            slidesPerView: 3,
            spaceBetween: 20,
            },
            1024: {
            slidesPerView: 4,
            spaceBetween: 30,
            },
        }}
        >
            <SwiperSlide className='slide'>
                <h4>Patrocinador 1</h4>
                <img className='slide-img' src="https://flowbite.com/docs/images/examples/image-1@2x.jpg" alt="" />
            </SwiperSlide>
             <SwiperSlide className='slide'>
                <h4>Patrocinador 2</h4>
                <img className='slide-img' src="https://flowbite.com/docs/images/examples/image-1@2x.jpg" alt="" />
            </SwiperSlide>
             <SwiperSlide className='slide'>
                <h4>Patrocinador 3</h4>
                <img className='slide-img' src="https://flowbite.com/docs/images/examples/image-1@2x.jpg" alt="" />
            </SwiperSlide>
             <SwiperSlide className='slide'>
                <h4>Patrocinador 4</h4>
                <img className='slide-img' src="https://flowbite.com/docs/images/examples/image-1@2x.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className='slide'>
                <h4>Patrocinador 1</h4>
                <img className='slide-img' src="https://flowbite.com/docs/images/examples/image-1@2x.jpg" alt="" />
            </SwiperSlide>
             <SwiperSlide className='slide'>
                <h4>Patrocinador 2</h4>
                <img className='slide-img' src="https://flowbite.com/docs/images/examples/image-1@2x.jpg" alt="" />
            </SwiperSlide>
             <SwiperSlide className='slide'>
                <h4>Patrocinador 3</h4>
                <img className='slide-img' src="https://flowbite.com/docs/images/examples/image-1@2x.jpg" alt="" />
            </SwiperSlide>
             <SwiperSlide className='slide'>
                <h4>Patrocinador 4</h4>
                <img className='slide-img' src="https://flowbite.com/docs/images/examples/image-1@2x.jpg" alt="" />
            </SwiperSlide>
            
        </Swiper>
    </section>
  );
}

export default Patreons;