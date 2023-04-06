import React from 'react'
import { Cards } from '../interfaces/cards';
import Card from './card';

interface CardsArray {
    cards: [];
}
export default function AllAnimes({ cards }: any) {

    return (
        <section className='list-section'>
            <div className="heading">
                <h2 className="heading-title">Explore</h2>
                <div className='heading-line'></div>
            </div>
            <ul className='anime-list'>
                {cards?.list.map((card: Cards, index: number) => {
                    return (
                        <li key={index}>
                            <Card card={card} />
                        </li>
                    )
                })}
            </ul>
        </section >



    )
}
