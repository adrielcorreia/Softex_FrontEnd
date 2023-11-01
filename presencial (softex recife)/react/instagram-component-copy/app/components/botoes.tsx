'use client'

import '../styles/botoes.css'
import Script from 'next/script' 
import { useState } from 'react'

export function Buttons() {
    const [likeState, setStateL] = useState('regular')
    const [bookmarkState, setStateB] = useState('regular')

    function LikeClick() {
        setStateL(likeState == 'regular' ? 'solid' : 'regular')
    }

    function BookmarkClick() {
        setStateB(bookmarkState == 'regular' ? 'solid' : 'regular')
    }

    return (
        <div className='btns'>
            <Script src="https://kit.fontawesome.com/4e2d75bd38.js" />

            <div className='lcs'> {/*like, comment, share*/}
            
                <button onClick={LikeClick} onLoad={LikeClick}>
                    <i className={`btn fa-${likeState} fa-heart dark`}></i>
                </button>

                <button className={`btn fa-regular fa-comment dark`}></button>

                <button className={`btn fa-regular fa-paper-plane dark`}></button>
            </div>
            
            <button onClick={BookmarkClick}>
                <i className={`btn fa-${bookmarkState} fa-bookmark dark`}></i>
            </button>
        </div>
    )
}

// export function Save() {

// }