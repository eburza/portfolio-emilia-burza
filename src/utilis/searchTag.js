function searchTag(tagsArray, skillsArray, toolsArray) {

    const tagsUnified = tagsArray.map(tag => tag.toLowerCase())

    const matchSkills = skillsArray.filter( skill => 
        tagsUnified.includes(skill.tag.toLowerCase())
    )

    const matchTools = toolsArray.filter( tool => 
        tagsUnified.includes(tool.tag.toLowerCase())
    )

    return {
        skills: matchSkills,
        tools: matchTools,
        tagImages: [...matchSkills, ...matchTools].map(item => item.img)
    }
}

export { searchTag }