import MainBannerImg from '../assets/img-banner-top.png'

export default function BannerMain() {
    return(
        <header className='hero'>
            <div className='hero-container'>
                <div className='hero-text'>
                    <p className='heading-s'>Hi, I'm Emilia Burza</p>
                    <h1 className='heading-xl'>I mastered pixels as a Graphic Designer, now I master components as a <span className='underscore hero-react-dev'>React Developer</span></h1>
                </div>
                <img src={MainBannerImg} className='hero-img' alt='Cartoon illustration of a woman developer at work with her laptop and programming tools'/>
            </div>
        </header>
    )
}