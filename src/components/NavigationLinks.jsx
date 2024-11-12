export default function NavigationLinks({NavClassName}) {
    return(
        <ul className={NavClassName}> 
            <li><a href='/#about' className='nav-link text-navigation'>About</a></li>
            <li><a href='/#projects' className='nav-link text-navigation'>Work</a></li>
            <li><a href='mailto:emila.burza@gmail.com' className='nav-link text-navigation'>Contact</a></li>
        </ul>
    )
}