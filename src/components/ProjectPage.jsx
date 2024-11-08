import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { projectList } from '../data/projectsList'
import ArrowBack from '../assets/arrow-back.svg'
import ArrowLink from '../assets/link-arrow.svg'

export default function ProjectPage() {
    const { id } = useParams();
    const project = projectList.find(p => p.id === id)
    
    if (!project) {
        return <div className='project-not-found'>Project not found</div>
    }
    
    return (
        <article className='project-page'>
            <header className='header-project'>
                <div className='back-to-home'>
                    <Link to={`/#projects`} className='back-to-home-link'>
                        <img src={ArrowBack} className='arrow-icon'/>
                        <p className='text-paragraph-s'>Back to home</p>
                    </Link>
                </div>
                <div className='project-hero'>
                    <div className='hero-summary'>
                        <h1 className='heading-xl project-title underscore-water'>{project.name}</h1>
                        <p className='text-paragraph project-summary'>{project.summary}</p>
                    </div>
                    <div className='hero-data'>
                        <div className='data-links'>
                            <h3 className='heading-s'>Links</h3>
                            <a 
                            href={project.liveLink} 
                            target='_blank' 
                            rel='noopener noreferrer'
                            className='project-link live-link'
                            >
                                <p className='text-paragraph'>View Live</p>
                                <img src={ArrowLink} className='arrow-link-icon'/>
                            </a>
                            <a 
                            href={project.githubLink} 
                            target='_blank' 
                            rel='noopener noreferrer'
                            className='project-link github-link'
                            >
                                <p className='text-paragraph'>View Code</p>
                                <img src={ArrowLink} className='arrow-link-icon'/>
                            </a>
                        </div>
                        <div className='data-tags'>
                            <h3 className='heading-s'>Technologies used</h3>
                            <div className='tech-tags'>
                            {project.tags.map((tag, index) => (
                                <span key={index} className='tech-tag text-paragraph-s'>{tag}</span>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
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
                </div>
            </div>
        </article>
    )
}