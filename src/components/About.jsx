import ImgAbout from '../assets/img-about.png'
export default function About() {
    return(
        <article className='about-content' id='about'>
            <h1 className='heading-l underscore-elusive'>About me</h1>
            <div className='about-wrapper'>
                <img src={ImgAbout} className='about-img' alt='Emilia Burza smiling'/>
                <p className='text-paragraph text-1'>
                As a full-stack developer proficient in both frontend and backend technologies, I create end-to-end web solutions using modern JavaScript frameworks, TypeScript, and related tools. My background in graphic design, combined with my technical skills, allows me to build applications that are not only architecturally sound but also deliver engaging user experiences through intuitive interfaces and compelling visual design.
                </p>
                <p className='text-paragraph text-2'>
                    Currently, I'm advancing my stack expertise through development of web applications, working with React.js for dynamic front-end interfaces and building backend APIs with Node.js and Express.js. With experience in database technologies, I create complete, production-ready solutions. I focus on writing clean, maintainable code and building accessible applications that solve real-world problems. I'm passionate about contributing across the entire technology stack and am eager to join a team where I can apply my full-stack skills, collaborate with other developers, and continue growing as a versatile developer.
                </p>
            </div>
        </article>
    )
}