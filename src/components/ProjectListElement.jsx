import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectListTechElements from './ProjectListTechElements'
import ArrowButton from '../assets/arrow-button.svg'

export default function ProjectListElement({id, name, image, imageAlt, description, tags}) {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleDescriptionClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setIsExpanded(!isExpanded)
      }

    return(
        <Link to={`/project/${id}`}>
            <div className='project-preview'>
                <div className='project-preview-img-container'>
                    <img src={image} alt={imageAlt} className='project-preview-img'/>
                </div>
                <h2 className='heading-s'>{name}</h2>
                <div 
                className={`project-preview-summary ${isExpanded ? 'expanded' : ''}`}
                onClick={handleDescriptionClick}
                role="button"
                tabIndex={0}
                >
                    <p className="text-paragraph-s">
                        {description}
                    </p>
                </div>
                <div className='tech-tags-container'>
                    <ProjectListTechElements 
                        projectTgas={tags}
                    />
                </div>
                <button className='project-preview-button'>
                    <img src={ArrowButton} className='project-preview-button-img'/>
                </button>
            </div>
        </Link>
    )
}