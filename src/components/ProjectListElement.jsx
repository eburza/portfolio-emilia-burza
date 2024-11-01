// import ProjectListTechElements from './ProjectListTechElements'
import ArrowButton from '../assets/arrow-button.svg'

export default function ProjectListElement({name, image, imageAlt, summary, tags}) {
    return(
        <div className='project-preview'>
            <img src={image} alt={imageAlt} />
            <h2>{name}</h2>
            <p>{summary}</p>
            <p>{tags}</p>
            {/* <ProjectListTechElements /> */}
            <button><img src={ArrowButton}/></button>
        </div>
    )
}