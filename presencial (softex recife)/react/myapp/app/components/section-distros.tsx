import '../styles/distros.css'
import { Distro } from './component-distro'

export function LinuxDistros() {
  return (
    <section className="section linux-distros">
      <div className='div-section'>
        <h1 className='section-h1'>Top 5 Distribuições Linux</h1>
        <ul className="distros">
          <Distro classname='distro pop' image='Pop!_OS_Icon.svg' title='Pop!_Os' href='https://pop.system76.com/'/>
          <Distro classname='distro ubuntu' image='UbuntuCoF.svg' title='Ubuntu' href='https://ubuntu.com/desktop'/>
          <Distro classname='distro fedora' image='Fedora_logo.svg' title='Fedora' href='https://fedoraproject.org/'/>
          <Distro classname='distro debian' image='debian-svgrepo-com.svg' title='Debian' href='https://www.debian.org/index.pt.html'/>
          <Distro classname='distro kali' image='Kali-dragon-icon.svg' title='Kali Linux' href='https://www.kali.org/'/>
        </ul>
      </div>
    </section>
  )
}
