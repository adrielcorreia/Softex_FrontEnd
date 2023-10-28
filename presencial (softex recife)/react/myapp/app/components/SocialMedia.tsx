import Image from 'next/image'

export function SocialMedia(props:{href: string, source: string, id: string, size: number}) {
    return (
        <a href={props.href} target='_blank' draggable={false}>
            <Image 
                id={props.id}
                src={props.source}
                alt='reactLogo' 
                width={props.size} 
                height={props.size} 
                draggable={false}
                />
        </a>
    )
}