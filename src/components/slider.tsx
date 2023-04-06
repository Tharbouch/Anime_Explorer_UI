
import { FaCircle, FaPlay, FaCalendarAlt, FaStar } from 'react-icons/fa'
import { useState, useEffect } from 'react'
    ;


const Slider = ({ cards }: any) => {


    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        setTimeout(() => {
            setIndex((index + 1) % cards?.list.length);
        }, 3000);
    }, [index]);



    return (

        /* Home Section */
        <section className='home' id='home' >
            <div className='home-background '
                style={{
                    backgroundImage: `url(${cards?.list[index].url})`
                }}
            >
            </div>
            <div className='home-wrape'>
                <div className='description'>
                    <h2 className='title'>{cards?.list[index].title}</h2>
                    <div className="additional-info">

                        <span>
                            <span className='rating'>
                                <span>{cards?.list[index].rating}</span>
                            </span>
                        </span>
                        <span>
                            <span className='additional-info-text'>{cards?.list[index].year}</span>
                            <FaCalendarAlt />
                        </span>
                        <span>
                            <span className='additional-info-text'>{cards?.list[index].score}</span>
                            <FaStar className='star' />
                        </span>
                    </div>
                    <div className='synopsis'>{cards?.list[index].description}</div>
                </div>
                <div className='slider'>
                    <div className='slider-img'>
                        <img src={cards?.list[index].url} alt="" />
                    </div>
                    <div className='indecators'>
                        {cards?.list.map(({ item, i }: any) => {
                            return (
                                <FaCircle className={`${i === index ? 'indecators indecators-active' : 'indecators'}`} />
                            );
                        })}
                    </div>
                </div>
            </div>

        </section >

        /* end slider section*/

    );


}

export default Slider;
