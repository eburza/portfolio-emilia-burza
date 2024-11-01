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
                <img src={tool.img} alt={tool.name} />
                <p>{tool.name}</p>
            </div>
        )
    })

    return(
        <div className='skills-and-tools'>
            <h1 className='head-title'>Skills and Tools</h1>
            <section className='skills-section'>
                <h2>Technologies and Skills</h2>
                <div className='skills-grid'>
                    {techAndSkillsItem}
                </div>
            </section>
            <section className='skills-section'>
                <h2>Tools</h2>
                <div className='skills-grid'>
                    {toolsItem}
                </div>
            </section>
        </div>
    )
}