import Logo from '../assets/eb-logo.png'
import NavigationLinks from './NavigationLinks'

export default function Navbar() {
    return (
        <nav className='navigation-bar'>
            <img src={Logo} className='logo'/>
            <NavigationLinks 
                NavClassName="navigation-bar-links"
            />
            <button className='resume-button'><a href='resume.pdf'>Resume</a></button>
        </nav>
    )
}