import { Link } from 'react-router-dom'
import Logo from '../assets/eb-logo.png'
import NavigationLinks from './NavigationLinks'
import Resume from '../assets/resume/emilia-burza-resume.pdf'

export default function Navbar() {
    return (
        <nav className='navigation-bar'>
            <Link to={`/`} className='logo'>
                <img src={Logo} className='logo'/>
            </Link>
            <NavigationLinks 
                NavClassName="navigation-bar-links"
            />
            <button className='resume-button'><a href={Resume} className='text-navigation' target="_blank">Resume</a></button>
        </nav>
    )
}