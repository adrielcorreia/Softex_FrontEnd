import '../styles/distros.css'

export function LinuxDistros() {
  return (
    <div className='div-distro'>
      <h1 className='section-h1'>Top 5 Distribuições Linux</h1>
      <ul className="distros">
        <li className="distro popos">
          <h2 className='distros-h2'>Pop!_OS</h2>
          <img src="../assets/Pop!_OS_Icon.svg"></img>
        </li>
        <li className="distro ubuntu"></li>
        <li className="distro fedora"></li>
        <li className="distro debian"></li>
        <li className="distro kali"></li>
      </ul>
    </div>
  )
}
