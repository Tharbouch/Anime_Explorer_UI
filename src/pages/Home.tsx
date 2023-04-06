import { useEffect } from 'react'

import Slider from '../components/slider';
import Popular from '../components/Popular';
import AllAnimes from '../components/AllAnimes';
import { useAxios } from '../data';
export default function Home() {
    const [loading, data, error, request] = useAxios({
        url: 'https://nowc5l200m.execute-api.eu-west-3.amazonaws.com/getList',
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
            <Slider cards={data.data}></Slider>
            <Popular cards={data.data}></Popular>
            <AllAnimes cards={data.data}></AllAnimes>
        </>
    )
}
