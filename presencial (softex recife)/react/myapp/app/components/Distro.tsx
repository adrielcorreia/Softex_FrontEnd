import { time } from 'console'
import '../styles/distros.css'
import Image from 'next/image'

export function Distro(props:{classname: string, image: string, title: string, href:string}) {
    return (
        <li>
            <h2 className='h2'>{props.title}</h2>
            <a className={props.classname} href={props.href} target='_blank' draggable={false}>
                <Image className='distro-img'
                    src={props.image}
                    alt={props.title}
                    width={150}
                    height={150}
                    draggable={false}
                />
            </a>
        </li>
    )
}