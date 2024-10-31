import ProjectListTechElements from './ProjectListTechElements'
export default function ProjectListElement() {
    return(
        <>
            <img src='#' />
            <h2>Project name</h2>
            <p>
                Short summary of the project eg: 
                A responsive product page built with React.js and Context API for state management.
            </p>
            <ProjectListTechElements />
        </>
    )
}