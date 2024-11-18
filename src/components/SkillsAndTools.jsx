import { skillsList, toolsList } from '../data/skillsAndTools.js'
import BorderBottom from '../assets/bottom-frame.svg'
import ReactImg from '../assets/doodles/react.png'
import HtmlImg from '../assets/doodles/html.png'

export default function SkillsAndTools() {

    const techAndSkillsItem = skillsList.map(skill => {
        return(
            <div key={skill.tag} className="skill-item">
                <img src={skill.img} alt={skill.name} />
                <p className='text-skills'>{skill.name}</p>
            </div>
        )
    })

    const toolsItem = toolsList.map(tool => {
        return(
            <div key={tool.tag} className="skill-item">
                <img src={tool.img} alt={tool.name} className='skill-item-img'/>
                <p className='text-skills'>{tool.name}</p>
            </div>
        )
    })

    return(
        <div className='skills-and-tools'>
            <h1 className='heading-l skills-head-title underscore'>Skills and Tools</h1>
            <div className='skill-section-container'>
                <section className='skills-section technologies'>
                    <h2 className='heading-s'>Technologies and Skills</h2>
                    <div className='skills-grid'>
                        {techAndSkillsItem}
                    </div>
                </section>
                <section className='skills-section tools'>
                    <h2 className='heading-s'>Tools</h2>
                    <div className='skills-grid'>
                        {toolsItem}
                    </div>
                </section>
                <div className='doodle react-doodle'>
                    <img src={ReactImg} />
                </div>
                <div className='doodle html-doodle'>
                    <img src={HtmlImg} />
                </div>
            </div>
            <div className='skills-border-bottom'>
                <img src={BorderBottom} />
            </div>
        </div>
    )
}