'use client'

import '../styles/conteudo.css'
import Image from 'next/image'

const style = {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    "object-fit": 'contain'
}

export function Conteudo(props:{src: string}) {
    return (
        <li className='conteudo'>
            <Image 
                className='conteudo-img'
                src={props.src} 
                quality={100}
                width={3840}
                height={2160} 
                alt="conteudo" 
                style={style}
                draggable={false}/>
        </li>
    )
}
