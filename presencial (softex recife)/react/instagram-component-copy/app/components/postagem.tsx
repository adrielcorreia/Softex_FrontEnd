'use client'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/main.css'
import { Conta } from './conta'
import { Buttons } from './botoes'
import { Carousel } from 'react-responsive-carousel';
 
interface Post {
    avatar: string,
    user: string,
    time: string,
    content: any[],
    local?: string
}

export function Postagem(props: Post) {
    return (
        <div className='post'>
            <Conta {...props}/>

            <Carousel showThumbs={false} showIndicators={false}>
            {
                (props.content).map((url, index) => (
                    <div key={index} className="conteudo">
                        <img src={url}></img>
                    </div>
                ))
            }
            </Carousel>

            <Buttons/>
        </div>
    )
}