import MainBannerImg from '../assets/img-banner-top.png'

export default function BannerMain() {
    return(
        <>
            <p>Hi, I am</p>
            <h1>Emilia Burza < br />I am a Graphic Designer <br />turned Frontend Developer</h1>
            <img src={MainBannerImg} className='banner-main-img'/>
        </>
    )
}