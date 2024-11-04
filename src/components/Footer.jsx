import Heart from '../assets/heart.svg'
import SocialLinks from './SocialLinks'
import NavigationLinks from './NavigationLinks'

export default function Footer() {
    return(
        <div className='footer'>
            <div className='footer-info'>
                <NavigationLinks 
                    NavClassName="navigation-footer-links"/>
                <div className='footer-dev-info'>
                    <p>Designed and Developed with </p>
                    <img src={Heart} className='footer-heart-img'/>
                    <p> by Emilia</p>
                </div>
            </div>
            <div className='personal-card'>
                <h2>Say hey!</h2>
                <p>+48 782 640 208</p>
                <p>emila.burza@gmail.com</p>
                <SocialLinks />
            </div>
        </div>
    )
}