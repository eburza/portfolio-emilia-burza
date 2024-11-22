import Linkedin from '../assets/social-media-icons/linkedin.svg'
import Behance from '../assets/social-media-icons/behance.svg'
import Github from '../assets/social-media-icons/github.svg'

export default function SocialLinks() {
    return(
        <div className='card-social'>
            <a href='https://www.linkedin.com/in/emilia-burza/' target='_blank'><img src={Linkedin} className='social-img'/></a>
            <a href='https://github.com/eburza' target='_blank'><img src={Github} className='social-img'/></a>
            <a href='https://www.behance.net/emiliaburza' target='_blank'><img src={Behance} className='social-img'/></a>
        </div>
    )
}