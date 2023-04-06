import { useParams } from 'react-router-dom'
import { FaCalendarAlt, FaStar } from 'react-icons/fa'
import { useAxios } from '../hooks/useAxios';
import { useEffect } from 'react';
const Details = () => {

    const getParams = useParams()
    const id: number = (getParams.animeId as unknown as number)

    const [loading, data, error, request] = useAxios({
        url: `https://nowc5l200m.execute-api.eu-west-3.amazonaws.com/Anime/${id}`,
        method: 'get'
    })

    useEffect(() => {
        request()
    }, [])

    if (loading) return <p>Loading ....</p>;

    if (error !== '') return <p>{error}</p>;

    if (!data) return <p>Data was null</p>;
    return (
        <>
            {console.log(data.data.Anime)}
            <main id='anime-details'>


                <div className='home-background '
                    style={{
                        backgroundImage: `url(${data.data.Anime.url})`
                    }}
                ></div>
                <section className='anime-details'>
                    <div className='poster'>
                        <div className='poster-img'>
                            <img src={data.data.Anime.url} alt="" />
                        </div>
                    </div>
                    <div className='description'>
                        <h2 className='title'>{data.data.Anime.title}</h2>
                        <div className="additional-info">

                            <span>
                                <span className='rating'>
                                    <span>{data.data.Anime.rating}</span>
                                </span>
                            </span>
                            <span>
                                <span className='additional-info-text'>{data.data.Anime.year}</span>
                                <FaCalendarAlt />
                            </span>
                            <span>
                                <span className='additional-info-text'>{data.data.Anime.score}</span>
                                <FaStar className='star' />
                            </span>
                        </div>
                        <div className='synopsis'>{data.data.Anime.description}</div>
                    </div>
                </section>

            </main>
        </>

    );
}

export default Details;

/**<main id='anime-details'>
            <div className='home-background '
                style={{
                    backgroundImage: `url(${data.data.url})`
                }}
            ></div>
            <section className='anime-details'>
                <div className='poster'>
                    <div className='poster-img'>
                        <img src={data.data.url} alt="" />
                    </div>
                </div>
                <div className='description'>
                    <h2 className='title'>{data.data.title}</h2>
                    <div className="additional-info">

                        <span>
                            <span className='rating'>
                                <span>{data.data.rating}</span>
                            </span>
                        </span>
                        <span>
                            <span className='additional-info-text'>{data.data.year}</span>
                            <FaCalendarAlt />
                        </span>
                        <span>
                            <span className='additional-info-text'>{data.data.score}</span>
                            <FaStar className='star' />
                        </span>
                    </div>
                    <div className='synopsis'>{data.data.description}</div>
                </div>
            </section>

        </main>*/