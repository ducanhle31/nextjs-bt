"use client"
import { Swiper,SwiperSlide } from "swiper/react"
interface ProductImageCarouselProps{
    images: string[];
}
export default function ProductImageCarousel({images}:ProductImageCarouselProps){
    const slides= images.map((img)=>(<SwiperSlide key={img}>
        <img src={img} />
    </SwiperSlide>));
    return <Swiper  spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>{slides}
      </Swiper>
}