import MainBannerImg from '../assets/img-banner-top.png'

export default function BannerMain() {
    return(
        <header className='hero'>
            <div className='hero-text'>
                <p className='hero-text-sub'>Hi, I am</p>
                <h1 className='hero-text-main'>Emilia Burza < br />I am a Graphic Designer <br />turned <span className='underscore'>Frontend Developer</span></h1>
            </div>
            <img src={MainBannerImg} className='hero-img' alt='Cartoon illustration of a woman developer at work with her laptop and programming tools'/>
        </header>
    )
}