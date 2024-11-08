import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { projectList } from '../data/projectsList'
import ArrowBack from '../assets/arrow-back.svg'

export default function ProjectPage() {
    const { id } = useParams();
    const project = projectList.find(p => p.id === id)
    
    if (!project) {
        return <div className='project-not-found'>Project not found</div>
    }
    
    return (
        <article className='project-page'>
            <div className='back-to-home'>
            <Link to={`/`} className='logo'>
                <img src={ArrowBack} className='arrow-icon'/>
            </Link>
            </div>
            <header className='project-header'>
                <h1 className='heading-xl project-title'>{project.name}</h1>
                <p className='text-paragraph project-summary'>{project.summary}</p>
            </header>
            
            <div className='project-content'>
                <img 
                    src={project.img} 
                    alt={project.imgAlt} 
                    className='project-main-image'
                />
                
                <div className='project-details'>
                    <section className='project-description'>
                        <h2 className='heading-l'>About this project</h2>
                        <p className='text-paragraph'>{project.description}</p>
                    </section>
                    
                    <section className='project-tech'>
                        <h2 className='heading-m'>Technologies Used</h2>
                        <div className='tech-tags'>
                            {project.tags.map((tag, index) => (
                                <span key={index} className='tech-tag'>{tag}</span>
                            ))}
                        </div>
                    </section>
                    
                    <section className='project-links'>
                        <a 
                            href={project.liveLink} 
                            target='_blank' 
                            rel='noopener noreferrer'
                            className='project-link live-link'
                        >
                            View Live
                        </a>
                        <a 
                            href={project.githubLink} 
                            target='_blank' 
                            rel='noopener noreferrer'
                            className='project-link github-link'
                        >
                            View Code
                        </a>
                    </section>
                </div>
            </div>
        </article>
    )
}