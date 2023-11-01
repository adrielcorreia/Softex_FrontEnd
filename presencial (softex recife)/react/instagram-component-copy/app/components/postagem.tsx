import { Conta } from './conta'
import { Conteudo } from './conteudo'
import { Buttons } from './botoes' 
 
export interface Post {
    avatar: string,
    user: string,
    time: string,
    content: string
    local?: string
}

export function Postagem(props: Post) {
    return (
    <div className='post'>
        <Conta {...props} />
        <ul>
            <Conteudo img={props.content} />
        </ul>
        <Buttons />
    </div>
    )
}