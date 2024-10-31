import Heart from '../assets/heart.svg'
import SocialLinks from './SocialLinks'
import NavigationLinks from './NavigationLinks'

export default function Footer() {
    return(
        <>
            <NavigationLinks />
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