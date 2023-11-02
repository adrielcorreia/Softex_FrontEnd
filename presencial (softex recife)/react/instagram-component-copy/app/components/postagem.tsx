'use client'

import { Conta } from './conta'
import { Conteudo } from './conteudo'
import { Buttons } from './botoes' 
import { useRef } from 'react'
 
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
            <ul>
                {props.content}
            </ul>
            <Buttons/>
        </div>
    )
}