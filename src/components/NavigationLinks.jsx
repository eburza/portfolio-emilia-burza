export default function NavigationLinks({NavClassName}) {
    return(
        <ul className={NavClassName}> 
            <li><a href='#about' className="nav-link">About</a></li>
            <li><a href='#projects' className="nav-link">Work</a></li>
            <li><a href='mailto:emila.burza@gmail.com"' className="nav-link">Contact</a></li>
        </ul>
    )
}