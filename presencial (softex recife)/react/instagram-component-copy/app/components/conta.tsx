import Image from 'next/image'
import '../styles/conta.css'

interface Conta {
    avatar: string,
    user: string,
    time: string
}

export function Conta(props: Conta) {
    const avatar = props.avatar
    const user = props.user
    const time = props.time

    return (
        <div className='conta-container'>
            <div className='conta'>

                <div className='usuario'>
                    <Image className='profile' src={avatar} alt="user profile" width={35} height={35} draggable={false}/>

                    <h3 className='nome-da-conta'>{user}</h3>
                </div>

                <h3 className='tempo-do-post'>{time}</h3>
            </div>

            <div className='tres-pontinhos'>
                <div className='ponto'></div>
            </div>
        </div>
    )
}