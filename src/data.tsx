import axios from 'axios'
import { useState } from 'react'


export const useAxios = () => {
    const [cards, setResponse] = useState();
    axios.get('https://rj37mk36l5.execute-api.eu-west-3.amazonaws.com/getList')
        .then((response) => {
            setResponse(response.data.list)
        })
        .catch((err) => {

        })
    return cards
}