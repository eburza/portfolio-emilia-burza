import ImgAbout from '../assets/img-about.png'
export default function About() {
    return(
        <>
            <h1>About me</h1>
            <img src={ImgAbout} className='about-img'/>
            <p>
                As a frontend developer with a focus on React.js, I bring a powerful combination of technical expertise 
                and design sensibility to web development. My transition from graphic design to code has equipped me with the skills 
                to create web applications that are not only highly functional but also intuitively user-friendly and visually compelling.
            </p>
            <p>
                Currently, I'm dedicated to expanding my full-stack development skills, focusing on building scalable React 
                applications on the front-end and robust backend systems. I'm deepening my knowledge of server-side technologies 
                like Node.js and databases, while improving web accessibility and performance. I'm eager to join a team where 
                I can contribute across the entire technology stack, create impactful web solutions, and continue growing as a versatile full-stack developer.
            </p>
        </>
    )
}