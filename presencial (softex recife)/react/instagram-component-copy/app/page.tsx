import styles from './styles/page.module.css'
import './styles/main.css'
import { Conta } from './components/conta'
import { Conteudo } from './components/conteudo'

export default function Home() {
  return (
    <main>
      <div className='componente-instagram'>
        <Conta img='/avatar.jpg' name='conta_aleatoria' time='5d' />
        <Conteudo img='/conteudo.png'/>
      </div>
    </main>
  )
}
