'use client'

import '../styles/botoes.css'
import { useState, useReducer } from 'react'

function reducer(state:any, action:any) {
    switch (action.type) {
        case 'like':
            action.setLike(action.like.style === 'regular' 
            ? {
                style: 'solid', 
                color: 'red', 
                animation: 'popup'
            } 
            : {
                style: 'regular',
                color: 'white',
                animation: 'none'
            })
            break;

        case 'save':
            action.setSave(action.bookmark === 'regular' ? 'solid' : 'regular')
            break;
            
        default:
            return state;
    }
}

export function Buttons() {
    const [state, dispatch] = useReducer(reducer, {})
    const [like, setLike] = useState({style: 'regular', color: 'white', animation: 'none'})
    const [bookmark, setSave] = useState('regular')

    return (
        <div className='btns'>
            <div className='lcs'> {/*like, comment, share*/}

                <button onClick={() => dispatch({type: 'like', like, setLike})}>

                    <h1 className={`btn fa-${like.style} fa-heart dark`}
                        style={{color: `${like.color}`, animationName: `${like.animation}`}}
                    />
                </button>

                <button><h1 className={`btn fa-regular fa-comment dark`}></h1></button>
                <button><h1 className={`btn fa-regular fa-paper-plane dark`}></h1></button>
            </div>
            
            <button onClick={() => dispatch({type: 'save', bookmark, setSave})}>
                <h1 className={`btn fa-${bookmark} fa-bookmark dark`}></h1>
            </button>
        </div>
    )
}