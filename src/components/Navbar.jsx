import Logo from '../assets/eb-logo.png'
import NavigationLinks from './NavigationLinks'

export default function Navbar() {
    return (
        <nav>
            <img src={Logo} className='logo'/>
            <NavigationLinks />
            <button>Resume</button>
        </nav>
    )
}