import Linkedin from '../assets/linkedin.svg'
import Behance from '../assets/behance.svg'
import Github from '../assets/github.svg'

export default function SocialLinks() {
    return(
        <>
            <a href='https://www.linkedin.com/in/emilia-burza/'><img src={Linkedin} /></a>
            <a href='https://github.com/eburza'><img src={Github} /></a>
            <a href='https://www.behance.net/emiliaburza'><img src={Behance} /></a>
        </>
    )
}