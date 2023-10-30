import Image from 'next/image'
import '../styles/conta.css'

interface Conta {
    img:string,
    name:string,
    time:string,
    size:number
}

export function Conta(props:Conta) {
    return (
        <div className='conta'>
            <Image className='pfp' 
                src={props.img} 
                alt="imagem da conta" 
                width={props.size} 
                height={props.size} 
                draggable={false}/>

            <h3 className='nome-da-conta'>{props.name}</h3>
            <h3 className='tempo-do-post'>{props.time}</h3>
        </div>
    )
}