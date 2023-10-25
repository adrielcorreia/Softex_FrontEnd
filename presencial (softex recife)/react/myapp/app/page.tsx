import { Button } from "./components/component-button";
import { LinuxDistros } from "./components/component-distros";
import { Square } from "./components/component-square";
import { Title } from "./components/component-title";

export default function Home() {
  return (
    <body>
      <header>
        <Title />
      </header>
      <main>
        <section className="section homeSquare">
          <Square />
          <Button />
        </section>
        <section className="section linux-distros">
          <LinuxDistros/>
        </section>
      </main>
    </body>
  );
}
