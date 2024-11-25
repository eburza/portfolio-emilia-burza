import Heart from '../assets/heart.svg'
import SocialLinks from './SocialLinks'
import NavigationLinks from './NavigationLinks'

export default function Footer() {
    return(
        <footer>
            <div className='footer-content'>
                <div className='footer-navigation'>
                    <NavigationLinks 
                        NavClassName="navigation-footer-links"/>
                </div>
                <div className='footer-dev-info'>
                    <p className='text-paragraph-s dev-info-p1'>Designed and developed with</p>
                    <img src={Heart} className='footer-heart-img'/>
                    <p className='text-paragraph-s dev-info-p2'> by Emilia Burza</p>
                </div>
                <div className='personal-card'>
                    <h2 className='heading-s card-title'>Say hi!</h2>
                    <p className='text-paragraph-s card-phone'>+48 782 640 208</p>
                    <p className='text-paragraph-s card-email'>
                        <a href='mailto:emila.burza@gmail.com'>emila.burza@gmail.com</a>
                    </p>
                    <SocialLinks />
                </div>
            </div>
        </footer>
    )
}