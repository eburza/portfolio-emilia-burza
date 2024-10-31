import Heart from '../assets/heart.svg'
import SocialLinks from './SocialLinks'
export default function Footer() {
    return(
        <>
            <ul>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Work</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
            <p>Designed and Developed with </p>
            <img src={Heart} className='footer-heart-img'/>
            <p> by Emilia</p>
            <div>
                <h2>Say hey!</h2>
                <p>+48 782 640 208</p>
                <p>emila.burza@gmail.com</p>
                <SocialLinks />
            </div>
        </>
    )
}