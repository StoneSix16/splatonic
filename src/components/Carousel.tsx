import useEmblaCarousel  from 'embla-carousel-react';
// import 'embla-carousel/embla-carousel.css';

interface CarouselProps {
  children: React.ReactNode[];
  spaceBetween?: number;
  slidesPerView?: number;
}

export function Carousel({
  children,
  spaceBetween = 20,
  slidesPerView = 1,
}: CarouselProps) {
  const [emblaRef] = useEmblaCarousel()
  console.log(children, 'over');
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {children.map((child, index) => (
            <div className="embla__slide" key={index}>{child}</div>
          ))}
      </div>
    </div>
  )
}

// <Swiper
//   modules={[Navigation, Pagination]}
//   spaceBetween={20}
//   slidesPerView={1}
//   navigation
//   pagination={{ clickable: true }}
// >
//   <SwiperSlide>
//     <video className="w-full rounded-lg" controls src="/videos/video1.mp4" />
//   </SwiperSlide>
//   <SwiperSlide>
//     <video className="w-full rounded-lg" controls src="/videos/video2.mp4" />
//   </SwiperSlide>
//   <SwiperSlide>
//     <video className="w-full rounded-lg" controls src="/videos/video3.mp4" />
//   </SwiperSlide>
// </Swiper>
