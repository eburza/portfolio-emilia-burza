import Logo from '../assets/eb-logo.png'
import NavigationLinks from './NavigationLinks'

export default function Navbar() {
    return (
        <nav className='navigation-bar'>
            <img src={Logo} className='logo'/>
            <NavigationLinks />
            <button className='resume-button'>Resume</button>
        </nav>
    )
}