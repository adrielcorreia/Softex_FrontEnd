import Image from 'next/image'
import { SocialMedia } from './component-social'
import '../styles/footer.css'

export function Footer(props:{author: string, description: string, year: number, project: string, linkedin: string, github: string, instagram: string}) {
    return (
        <div>
            <ul>
                <li id="infos">
                    <p className='p-gray'><strong>Autoria:</strong> {props.author}.</p>
                    <p className='p-gray'><strong>Descrição:</strong> {props.description}.</p>
                    <p className='p-gray'><strong>Projeto:</strong> <a href={props.project}>Repositório.</a></p>
                    
                </li>

                <li id="tech">
                    <Image id='react' src='/react-logo.png' alt='react-logo' width={100} height={100} draggable={false}/>
                    <p className='p-gray'>Copyright© {props.year}. Inc. | All Rights Reserved.</p>
                </li>

                <li id="about-me">
                    <p>ABOUT ME</p>
                    <SocialMedia href={props.linkedin} size={40} id='social-linkedin' source='linkedin.svg'/>
                    <SocialMedia href={props.github} size={30} id='social-github' source='github.svg'/>
                    <SocialMedia href={props.instagram} size={40} id='social-instagram' source='instagram.svg'/>
                </li>
            </ul>
        </div>
    )
}
