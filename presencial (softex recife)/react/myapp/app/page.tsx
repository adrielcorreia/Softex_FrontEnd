import './styles/main.css'

import { SquareAndButton } from "./components/SquareAndButton";
import { LinuxDistros } from "./components/LinuxDistros";
import { Title } from "./components/header";
import { ImageCustomizable } from "./components/ImageCustomizable";
import { ParagraphCustomizable } from "./components/ParagraphCustomizable";
import { Footer } from './components/footer';

export default function Home() {
  return (
    <body>
      <header>
        <Title title="Componentes React" description="descrição personalizada"/>
      </header>

      <main>
        <SquareAndButton />
        <LinuxDistros />
        <ImageCustomizable text="Imagem personalizável" source="Fedora_logo.svg" />
        <ParagraphCustomizable text="todo personalizado meu amigo" />
      </main>

      <footer>
        <Footer 
          author='Adriel' 
          year={2023}
          description='Atividade do FAP - FrontEnd'
          project='https://github.com/adrielcorreia/Softex_FrontEnd/tree/b7c930464619923d939a273c348d634947f2cc9b/presencial%20(softex%20recife)/react/myapp'
          linkedin='https://www.linkedin.com/in/adriel-correia-a0a2331b0/'
          github='https://github.com/adrielcorreia'
          instagram='https://www.instagram.com/correia_adriel/'
          />
      </footer>

    </body>
  );
}
