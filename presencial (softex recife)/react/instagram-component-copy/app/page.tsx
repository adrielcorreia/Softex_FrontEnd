import './page.module.css'
import './styles/main.css'
import { Postagem } from './components/postagem'

const post1:string[] = [
  '/conteudo.png', 
  '/forest.jpg',
  '/ocean.jpg',
  '/universe.jpg'
]

export default function Home() {
  return (
    <main>
      <Postagem avatar='/avatar.jpg' time='5d' user='adrielcorreia' content='/ocean.jpg'></Postagem>
    </main>
  )
}
