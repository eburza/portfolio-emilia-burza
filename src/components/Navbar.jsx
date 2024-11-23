import { Link } from 'react-router-dom'
import Logo from '../assets/eb-logo.png'
import NavigationLinks from './NavigationLinks'

export default function Navbar() {
    return (
        <nav className='navigation-bar'>
            <Link to={`/`} className='logo'>
                <img src={Logo} className='logo'/>
            </Link>
            <NavigationLinks 
                NavClassName="navigation-bar-links"
            />
            <button className='resume-button'><a href='/resume-emilia-burza-en.pdf' className='text-navigation' target="_blank" rel="noopener noreferrer">Resume</a></button>
        </nav>
    )
}