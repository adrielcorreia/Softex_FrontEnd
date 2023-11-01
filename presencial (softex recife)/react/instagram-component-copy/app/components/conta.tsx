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
    const avatar = props.avatar
    const user = props.user
    const time = props.time
    const local = props.local
    const html = <h3 className='local'>{local}</h3>

    const localHTML = useRef(<></>)
    localHTML.current = (local ? html : <></>)

    return (
        <div className='conta-container'>
            <div className='conta'>

                <Image 
                    className='profile' 
                    src={avatar} 
                    alt="user profile" 
                    width={35} 
                    height={35} 
                    draggable={false}/>

                <h3 className='nome-da-conta'>{user}</h3>

                {localHTML.current}

                <h3 className='tempo-do-post' >{time}</h3>
            </div>

            <div className='tres-pontinhos'>
                <div className='ponto'></div>
            </div>
        </div>
    )
}