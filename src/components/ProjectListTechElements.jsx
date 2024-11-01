import { skillsList, toolsList } from '../data/skillsAndTools.js'
import { searchTag } from '../utilis/searchTag.js'

export default function ProjectListTechElements({projectTgas}) {

    const results = searchTag(projectTgas, skillsList, toolsList)

    const {tagImages} = results

    return(
        <div className='project-tags-img'>
            {
                tagImages.map((img, index) => (
                    <img 
                        key={index}
                        src={img}
                        alt={img}
                        className='project-preview-tag-img'
                    />
                ))
            }
        </div>
    )
}