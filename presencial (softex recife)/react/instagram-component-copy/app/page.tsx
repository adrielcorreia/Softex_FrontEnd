import './page.module.css'
import './styles/main.css'
import { Postagem } from './components/postagem'
import { Conteudo } from './components/conteudo'

const post1:string[] = [
  '/conteudo.png', 
  '/forest.jpg',
  '/ocean.jpg',
  '/universe.jpg'
]

export default function Home() {
  return (
    <main>
      <div className='posts'>
        <Postagem 
          avatar='/avatar.jpg' 
          time='5d' 
          user='adrielcorreia' 
          content={[<Conteudo src='/ocean.jpg'/>, <Conteudo src='/forest.jpg'/>]}
          local='Maldivas'
          />

        <Postagem 
          avatar='/avatar.jpg' 
          time='3h' 
          user='bruna' 
          content={[<Conteudo src='/universe.jpg'/>]}
          local='Não interessa'/>
      </div>
    </main>
  )
}
