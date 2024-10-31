import Logo from '../assets/eb-logo.png'

export default function Navbar() {
    return (
        <nav>
            <img src={Logo} className='logo'/>
            <ul>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Work</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
            <button>Resume</button>
        </nav>
    )
}