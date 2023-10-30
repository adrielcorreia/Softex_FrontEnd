import '../styles/conteudo.css'

export function Conteudo(props:{img: string}) {
    return (
            <img className='conteudo'
                src={props.img}
                alt="conteudo"
                style={{width:'100%'}}
                />
        
    )
}