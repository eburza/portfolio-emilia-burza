import { skillsList, toolsList } from '../data/skillsAndTools.js'

export default function SkillsAndTools() {

    const techAndSkillsItem = skillsList.map(skill => {
        return(
            <div key={skill.tag} className="skill-item">
                <img src={skill.img} alt={skill.name} />
                <p>{skill.name}</p>
            </div>
        )
    })

    const toolsItem = toolsList.map(tool => {
        return(
            <div key={tool.tag} className="skill-item">
                <img src={tool.img} alt={tool.name} className='skill-item-img'/>
                <p className='skill-item-text'>{tool.name}</p>
            </div>
        )
    })

    return(
        <div className='skills-and-tools'>
            <h1 className='head-title'>Skills and Tools</h1>
            <div className='skill-section-container'>
                <section className='skills-section technologies'>
                    <h2 className='skill-subhead'>Technologies and Skills</h2>
                    <div className='skills-grid'>
                        {techAndSkillsItem}
                    </div>
                </section>
                <section className='skills-section tools'>
                    <h2 className='skill-subhead'>Tools</h2>
                    <div className='skills-grid'>
                        {toolsItem}
                    </div>
                </section>
            </div>
        </div>
    )
}