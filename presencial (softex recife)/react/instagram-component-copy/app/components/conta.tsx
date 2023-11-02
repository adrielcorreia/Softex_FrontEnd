'use client'

import Image from 'next/image'
import '../styles/conta.css'
import { useRef } from 'react'

interface Conta {
    avatar: string,
    user: string,
    local?: string,
    time: string
}

export function Conta(props: Conta) {
    const html = <h3 className='local'>{props.local}</h3>

    const localHTML = useRef(<></>)
    localHTML.current = (props.local ? html : <></>)

    return (
        <div className='conta-container'>
            <div className='conta'>

                <Image 
                    className='profile' 
                    src={props.avatar} 
                    alt="user profile" 
                    width={35} 
                    height={35} 
                    draggable={false}/>

                <div className='nome-e-tempo'>
                    <h3 className='nome-da-conta'>{props.user}</h3>
                    <h3 className='tempo-do-post' >{props.time}</h3>
                </div>
                
                {localHTML.current}
            </div>

            <div className='tres-pontinhos'>
                <div className='ponto'></div>
            </div>
        </div>
    )
}