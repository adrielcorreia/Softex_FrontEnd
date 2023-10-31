import Image from 'next/image'
import '../styles/conta.css'

interface Conta {
    img:string,
    name:string,
    time:string,
}

export function Conta(props:Conta) {
    return (
        <div className='conta-container'>
            <div className='conta'>
                <div className='usuario'>
                    <Image className='pfp' 
                        src={props.img} 
                        alt="imagem da conta" 
                        width={35} 
                        height={35} 
                        draggable={false}/>
                    <h3 className='nome-da-conta'>{props.name}</h3>
                </div>

                <span className="ponto"></span>
                <h3 className='tempo-do-post'>{props.time}</h3>
            </div>

            <div className='tres-pontinhos'>
                <div className='ponto'></div>
            </div>
        </div>
    )
}