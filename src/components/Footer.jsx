import Heart from '../assets/heart.svg'
import SocialLinks from './SocialLinks'
import NavigationLinks from './NavigationLinks'

export default function Footer() {
    return(
        <footer>
            <div className='footer-content'>
                <div className='footer-info'>
                    <NavigationLinks 
                        NavClassName="navigation-footer-links"/>
                    <div className='footer-dev-info'>
                        <p className='text-paragraph-s'>Designed and Developed with </p>
                        <img src={Heart} className='footer-heart-img'/>
                        <p className='text-paragraph-s'> by Emilia</p>
                    </div>
                </div>
                <div className='personal-card'>
                    <h2 className='heading-s card-title'>Say hey!</h2>
                    <p className='text-paragraph-s card-phone'>+48 782 640 208</p>
                    <p className='text-paragraph-s card-email'>emila.burza@gmail.com</p>
                    <SocialLinks />
                </div>
            </div>
        </footer>
    )
}