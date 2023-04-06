import { useAxios } from '../data';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from './card';
import { Cards } from '../interfaces/cards';


const Popular = ({ cards }: any) => {

    return (
        <section className='top-rated'>
            <div className="heading">
                <h2 className="heading-title">Top Rated Animes</h2>
                <div className='heading-line'></div>
            </div>
            <div className="content">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    navigation={{ nextEl: '.button-next', prevEl: '.button-prev' }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {cards?.list.map((card: Cards, index: number) => {
                        return <SwiperSlide key={index}>
                            <Card card={card} />
                        </SwiperSlide>;
                    })}
                    <div className="button-prev"></div>
                    <div className=' button-next'></div>
                </Swiper>

            </div>

        </section>
    );
}

export default Popular;

