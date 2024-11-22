import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { projectList } from '../data/projectsList'
import { filterProjectList } from '../utilis/filterProjectList'
import ArrowBack from '../assets/arrow-back.svg'
import ArrowLink from '../assets/link-arrow.svg'
import ProjectImageViewer from './ProjectImageViewer'

export default function ProjectPage() {
    const { id } = useParams()
    const project = projectList.find(p => p.id === id)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    if (!project) {
        return <div className='project-not-found'>Project not found</div>
    }
    
    return (
        <article className='project-page'>
            <header className='header-project'>
                <div className='back-to-home'>
                    <Link to={`/`} className='back-to-home-link'>
                        <img src={ArrowBack} className='arrow-icon'/>
                        <p className='text-paragraph-s'>Back to home</p>
                    </Link>
                </div>
                <div className='project-hero'>
                    <h1 className='heading-xl project-title underscore-water'>{project.name}</h1>
                    <div className='hero-summary'>
                        <section className='project-description'>
                            <p className='text-paragraph'>{project.description}</p>
                        </section>
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
            
            <section className='project-content'>
                <h2 className='heading-m content-heading underscore-water'>Project Details</h2>
                <div className='project-details-element'>
                    <div className='details-text frame-1'>
                        <h2 className='heading-m-projects'>Features</h2>
                        <div>
                            {filterProjectList(project.features)}
                        </div>
                    </div>
                    <div className='project-details-img-container frame-2'>
                        <ProjectImageViewer 
                            src={project.img} 
                            alt={project.imgAlt} 
                        />
                    </div>
                </div>
                <div className='project-details-element'>
                    <div className='details-text frame-1'>
                        <h2 className='heading-m-projects'>Technologies Used</h2>
                        <p className='text-paragraph'>{filterProjectList(project.technologies)}</p>      
                    </div>
                    <div className='project-details-img-container frame-2'>
                        <ProjectImageViewer 
                            src={project.images[0].src}
                            alt={project.images[0].alt} 
                        />
                    </div>
                </div>
                <div className='project-details-element'>
                    <div className='details-text frame-1'>
                        <h2 className='heading-m-projects'>Code Highlights</h2>
                        <div>{filterProjectList(project.highlights)}</div>      
                    </div>
                    <div className='project-details-img-container frame-2'>
                        <ProjectImageViewer 
                            src={project.images[1].src}
                            alt={project.images[1].alt} 
                        />
                    </div>
                </div>
                <div className='project-details-element'>
                    <div className='details-text frame-1'>
                        <h2 className='heading-m-projects'>Challenges and Solutions</h2>
                        <div className='project-list'>{filterProjectList(project.challenges)}</div>      
                    </div>
                    <div className='project-details-img-container frame-2'>
                        <ProjectImageViewer 
                            src={project.images[2].src}
                            alt={project.images[2].alt} 
                        />
                    </div>
                </div>
                <div className='project-details-element'>
                    <div className='details-text frame-1'>
                        <h2 className='heading-m-projects'>Conclusion</h2>
                        <p className='text-paragraph'>{project.conclusion}</p>      
                    </div>
                    <div className='project-details-img-container frame-2'>
                        <ProjectImageViewer 
                            src={project.images[3].src}
                            alt={project.images[3].alt} 
                        />
                    </div>
                </div>
            </section>
        </article>
    )
}