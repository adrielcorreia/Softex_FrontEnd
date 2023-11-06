'use client'

import '../styles/botoes.css'
import { useState } from 'react'
import { useRef } from 'react'

export function Buttons() {
    const [like, setLike] = useState('regular')
    const [bookmark, setSave] = useState('regular')
    const likeColor = useRef('white')
    const likeClicked = useRef('')

    function Like() {
        setLike(like == 'regular' ? 'solid' : 'regular')
        likeColor.current = (like == 'regular' ? 'red' : 'white')
        likeClicked.current = (like == 'regular' ? 'popup' : 'none')
    }

    function Save() {
        setSave(bookmark == 'regular' ? 'solid' : 'regular')
    }

    return (
        <div className='btns'>
            <div className='lcs'> {/*like, comment, share*/}
                
                <button onClick={Like} >
                    <h1 className={`btn fa-${like} fa-heart dark`}
                        style={{
                            color: `${likeColor.current}`,
                            animationName: `${likeClicked.current}`
                            }}/>
                </button>

                <button>
                    <h1 className={`btn fa-regular fa-comment dark`}></h1>
                </button>

                <button>
                    <h1 className={`btn fa-regular fa-paper-plane dark`}></h1>
                </button>
            </div>
            
            <button onClick={Save}>
                <h1 className={`btn fa-${bookmark} fa-bookmark dark`}></h1>
            </button>
        </div>
    )
}