"use client"

import { useState } from 'react';
import '../styles/buttons.css';

export function SquareAndButton() {
    const [count, setCount] = useState(1)

    const increment = (type: React.MouseEvent<HTMLElement>) => {
        setCount((prevState) => prevState + 1)
    }

    return (
        <section className="section homeSquare">
            <div className='div-section'>
                <div className="square">
                    <div id='number-count'>
                        <p>{count}</p>
                    </div>               
                </div>
                <button onClick={increment} className="btn" >Clique</button>
            </div>
        </section>
    )
}