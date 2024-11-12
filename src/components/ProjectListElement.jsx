import { Link } from 'react-router-dom'
import ProjectListTechElements from './ProjectListTechElements'
import ArrowButton from '../assets/arrow-button.svg'

export default function ProjectListElement({id, name, image, imageAlt, description, tags}) {
    return(
        <Link to={`/project/${id}`}>
            <div className='project-preview'>
                <div className='project-preview-img-container'>
                    <img src={image} alt={imageAlt} className='project-preview-img'/>
                </div>
                <h2 className='heading-s'>{name}</h2>
                <p className='text-paragraph-s project-preview-summary'>{description}</p>
                <ProjectListTechElements 
                    projectTgas={tags}
                />
                    <button className='project-preview-button'><img src={ArrowButton} className='project-preview-button-img'/></button>
            </div>
        </Link>
    )
}