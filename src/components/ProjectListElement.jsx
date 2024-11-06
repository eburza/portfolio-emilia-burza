import ProjectListTechElements from './ProjectListTechElements'
import ArrowButton from '../assets/arrow-button.svg'

export default function ProjectListElement({name, image, imageAlt, summary, tags}) {
    return(
        <div className='project-preview'>
            <img src={image} alt={imageAlt} className='project-preview-img'/>
            <h2 className='heading-s'>{name}</h2>
            <p className='text-paragraph-s project-preview-summary'>{summary}</p>
            <ProjectListTechElements 
                projectTgas={tags}
            />
            <button className='project-preview-button'><img src={ArrowButton} className='project-preview-button-img'/></button>
        </div>
    )
}