import './page.module.css'
import './styles/main.css'
import { Postagem } from './components/postagem'

const postagens = [
  {
    avatar: '/avatar.jpg',
    time: '5d',
    user: 'adrielcorreia',
    content: ['/ocean.jpg', 'forest.jpg'],
    local: 'Maldivas'
  },

  {
    avatar: '/avatar.jpg',
    time: '3h',
    user: 'bruna',
    content: ['universe.jpg'],
    local: 'Islândia'
  }
]

export default function Home() {
  return (
    <main>
      <div className='posts'>{
        postagens.map((url) => (
          <Postagem avatar={url.avatar} time={url.time} content={url.content} user={url.user} local={url.local}/>
        ))
      }</div>
    </main>
  )
}
