import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const StarS = () => {
    return (
        <div className='mb-16'>
            <Swiper
                slidesPerView={1}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    769: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                }}
                scrollbar={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                // modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-001.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-002.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-003.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-004.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-005.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-006.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-008.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-009.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default StarS;