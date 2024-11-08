import { useParams } from 'react-router-dom';
import { projectList } from '../data/projectsList';

export default function ProjectPage() {
    const { id } = useParams();
    const project = projectList.find(p => p.id === id);
    
    if (!project) {
        return <div className="project-not-found">Project not found</div>;
    }
    
    return (
        <article className="project-page">
            <header className="project-header">
                <h1 className="project-title">{project.name}</h1>
                <p className="project-summary">{project.summary}</p>
            </header>
            
            <div className="project-content">
                <img 
                    src={project.img} 
                    alt={project.imgAlt} 
                    className="project-main-image"
                />
                
                <div className="project-details">
                    <section className="project-description">
                        <h2>About this project</h2>
                        <p>{project.description}</p>
                    </section>
                    
                    <section className="project-tech">
                        <h2>Technologies Used</h2>
                        <div className="tech-tags">
                            {project.tags.map((tag, index) => (
                                <span key={index} className="tech-tag">{tag}</span>
                            ))}
                        </div>
                    </section>
                    
                    <section className="project-links">
                        <a 
                            href={project.liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-link live-link"
                        >
                            View Live
                        </a>
                        <a 
                            href={project.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-link github-link"
                        >
                            View Code
                        </a>
                    </section>
                </div>
            </div>
        </article>
    );
}