import Image from 'next/image'

export function ImageCustomizable(props:{source: string, text: string}) {
    return (
        <section className="section image-customizable">
            <div className='div-section'>
                <h1 className='section-h1'>{props.text}</h1>
                <Image className='img'
                    src={props.source}
                    alt="Imagem customizável"
                    width={300}
                    height={300}
                    draggable={false}
                />
            </div>
        </section>
    )
}