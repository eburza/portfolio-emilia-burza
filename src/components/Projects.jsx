import ProjectListElement from './ProjectListElement'
import ArrowButton from '../assets/arrow-button.svg'

export default function Projects() {
    return(
        <div className='projects-content'>
            <h1 className='head-title'>Projects</h1>
            <p className='projects-intro-text'>
                Explore my frontend development projects built with React.js 
                and modern web technologies. These works demonstrate my focus 
                on creating responsive user interfaces and interactive web applications, 
                while documenting my ongoing journey into full-stack development.
            </p>
            <ProjectListElement />
            <button className='previous-project project-list-button'><img src={ArrowButton}/></button>
            <button className='next-project project-list-button'><img src={ArrowButton}/></button>
        </div>
    )
}