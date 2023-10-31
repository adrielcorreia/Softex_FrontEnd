import '../styles/conteudo.css'
import Image from 'next/image'

const style = {
    width: '100%',
    overflow: 'hidden',
    "object-fit": 'contain'
}

export function Conteudo(props:{img: string}) {
    return (
        <div className='conteudo'>
            <Image className='conteudo-img'
            src={props.img} 
            quality={100} 
            width={500} 
            height={500} 
            alt="conteudo" 
            style={style}
            draggable={false}/>
        </div>
    )
}