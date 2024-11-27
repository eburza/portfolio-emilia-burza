import { 
    projectTicTacToeImages, 
    projectTipCalculatorImages,
    VanLifeImages,
    QuizzicalTriviaImages,
    GraphicPortfolioImages
} from './projectImagesList'
import { filterProjectList } from '../utilis/filterProjectList'

const projectList = [
    {
        name: 'Tic-Tac-Toe Game',
        id: 'tic-tac-toe-game',
        img: projectTicTacToeImages.main,
        imgAlt: 'Tic-Tac-Toe game preview',
        description: 'This project is a web-based implementation of the classic Tic Tac Toe game. It is designed to provide an engaging and interactive experience for users, allowing them to play against another player or a CPU. The game is built using modern web technologies, ensuring a responsive and visually appealing interface.',
        tags: ['react', 'javascript', 'sass', 'vite'],
        conclusion: `This Tic Tac Toe game project showcases my ability to build interactive web applications using modern technologies. It demonstrates my skills in React, state management, responsive design, and testing. This project is a testament to my problem-solving abilities and attention to detail in creating a polished and user-friendly application`,
        liveLink: 'https://emilia-burza-tic-tac-toe-game.netlify.app/',
        githubLink: 'https://github.com/eburza/tic-tac-toe-game',
        images: [
            {
                src: projectTicTacToeImages.previews[0],
                alt: 'Project screenshot 1',
                caption: 'Homepage design showcasing the main features'
            },
            {
                src: projectTicTacToeImages.previews[1],
                alt: 'Project screenshot 2',
                caption: 'Homepage design showcasing the main features'
            },
            {
                src: projectTicTacToeImages.previews[2],
                alt: 'Project screenshot 3',
                caption: 'Homepage design showcasing the main features'
            },
            {
                src: projectTicTacToeImages.previews[3],
                alt: 'Project screenshot 4',
                caption: 'Homepage design showcasing the main features'
            },
        ],
        features: [
            {
                bold: 'Player vs Player and Player vs CPU Modes',
                text: 'Users can choose to play against another player or challenge the CPU'
            },
            {
                bold: 'Responsive Design',
                text: 'The game is designed to work seamlessly across different devices and screen sizes'
            },
            {
                bold: 'Real-time Updates',
                text: 'The game state updates in real-time, providing a smooth and interactive user experience'
            },
            {
                bold: 'Score TrackingPlayer vs Player and Player vs CPU Modes',
                text: 'The application keeps track of the scores for both players and displays the results at the end of each round'
            },
            {
                bold: 'Reset and Restart Options',
                text: 'Users can reset the game or start a new round at any time'
            }
        ],
        technologies: [
            {
                bold: 'React',
                text: `The game is built using React, a popular JavaScript library for building user interfaces. React's component-based architecture allows for efficient rendering and state management`
            },
            {
                bold: 'Vite',
                text: 'The project uses Vite as the build tool, providing fast development and optimized production builds'
            },
            {
                bold: 'Sass',
                text: 'Styles are written in Sass, a powerful CSS preprocessor, allowing for modular and maintainable stylesheets'
            },
            {
                bold: 'Jest and React Testing Library',
                text: 'The application is thoroughly tested using Jest and React Testing Library to ensure reliability and robustness'
            }
        ],
        highlights: [
            {
                bold: 'State Management',
                text: 'The game state is managed using a custom hook, useGameState, which utilizes the useReducer hook for handling complex state transitions'
            },
            {
                bold: 'Game Logic',
                text: 'The logic for determining the game winner and handling player moves is encapsulated within the gameReducer function'
            },
            {
                bold: 'Responsive UI',
                text: 'The UI components are styled using a combination of CSS and Sass, ensuring a consistent look and feel across different devices'
            }
        ],
        challenges: [
            {
                bold: 'Handling Game State',
                text: 'Managing the game state, especially with the CPU logic, was a challenge. This was addressed by carefully structuring the state and using useReducer to handle state transitions efficiently'
            },
            {
                bold: 'Responsive Design',
                text: 'Ensuring the game looked good on all devices required careful planning and testing. Media queries and flexible layouts were used to achieve this'
            }
        ],
    },
    {
        name: 'Tip Calculator App',
        id: 'tip-calculator-app',
        img: projectTipCalculatorImages.main,
        imgAlt: 'Tip Calculator app preview',
        description: 'This project is a modern tip calculator web application designed to simplify bill splitting and tip calculations. It provides users with an intuitive interface to quickly calculate tips and split bills among multiple people, making it an invaluable tool for dining out or sharing expenses.',
        tags: ['react', 'javascript', 'sass', 'vite'],
        conclusion: `This Tip Calculator project demonstrates proficiency in building practical, user-friendly web applications. It showcases skills in React development, state management, responsive design, and attention to detail in user interface design. The project emphasizes clean code practices, comprehensive testing, and modern development workflows, resulting in a polished and professional application that solves a common real-world problem`,
        liveLink: 'https://emilia-burza-tip-calculator-app.netlify.app/',
        githubLink: 'https://github.com/eburza/tip-calculator-app',
        images: [
            {
                src: projectTipCalculatorImages.previews[0],
                alt: 'Project screenshot 1',
                caption: 'Homepage design showcasing the main features'
            },
            {
                src: projectTipCalculatorImages.previews[1],
                alt: 'Project screenshot 1',
                caption: 'Homepage design showcasing the main features'
            },
            {
                src: projectTipCalculatorImages.previews[2],
                alt: 'Project screenshot 1',
                caption: 'Homepage design showcasing the main features'
            },
            {
                src: projectTipCalculatorImages.main,
                alt: 'Project screenshot 1',
                caption: 'Homepage design showcasing the main features'
            },
        ],
        features: [
            {
                bold: 'Real-time Calculations',
                text: 'Instantly calculates tips and per-person amounts as users input values'
            },
            {
                bold: 'Flexible Tip Options',
                text: 'Offers preset tip percentages and custom tip input functionality'
            },
            {
                bold: 'Bill Splitting',
                text: 'Easily split bills among any number of people with automatic per-person calculations'
            },
            {
                bold: 'Input Validation',
                text: 'Provides immediate feedback for invalid inputs and edge cases'
            },
            {
                bold: 'Currency Formatting',
                text: 'Automatically formats monetary values in USD with proper decimal places'
            }
        ],
        technologies: [
            {
                bold: 'React',
                text: `Built using React for efficient state management and component-based architecture`
            },
            {
                bold: 'Vite',
                text: 'Utilizes Vite as the build tool for fast development and optimized production builds'
            },
            {
                bold: 'Sass',
                text: 'Implements custom styling using Sass for maintainable and modular CSS'
            },
            {
                bold: 'Jest and React Testing Library',
                text: 'Includes basic testing suite for reliability'
            }
        ],
        highlights: [
            {
                bold: 'State Management',
                text: `Utilizes React's useState hooks for managing various input states and calculations`
            },
            {
                bold: 'Real-time Updates',
                text: 'Implements useEffect for automatic recalculation when inputs change'
            },
            {
                bold: 'Responsive Design',
                text: 'Features a mobile-first approach with breakpoints for larger screens'
            }
        ],
        challenges: [
            {
                bold: 'Input Validation',
                text: 'Implemented robust validation to handle edge cases such as zero values, negative numbers, and invalid inputs. Solved using combination of controlled inputs and validation functions'
            },
            {
                bold: 'Currency Formatting',
                text: 'Ensured consistent currency display across different numerical inputs using Intl.NumberFormat'
            },
            {
                bold: 'Responsive Layout',
                text: 'Created a flexible design that maintains functionality and aesthetics across all device sizes using CSS Grid and Flexbox'
            }
        ],
    },
    {
        name: 'VanLife App',
        id: 'vanlife-app',
        img: VanLifeImages.main,
        imgAlt: 'VanLife app preview',
        description: 'VanLife is a comprehensive web application for van rentals, allowing users to browse, filter, and manage van listings. The platform includes both user-facing features for van rentals and a host dashboard for van owners to manage their listings, track income, and review customer feedback.',
        tags: ['react', 'javascript', 'firebase', 'css', 'vite'],
        conclusion: `The VanLife project demonstrates my ability to create a full-featured web application with complex state management, authentication, and responsive design. It showcases my proficiency in React and modern web development practices, including the implementation of protected routes, context-based state management, and data visualization. The project highlights my skills in creating both user-facing features and administrative dashboards while maintaining a clean, intuitive user interface.`,
        liveLink: 'https://emilia-burza-vanlife-project.netlify.app/',
        githubLink: 'https://github.com/eburza/VanLife-project',
        images: [
            {
                src: VanLifeImages.previews[0],
                alt: 'Project screenshot 1',
                caption: 'Homepage design showcasing the main features'
            },
            {
                src: VanLifeImages.previews[1],
                alt: 'Project screenshot 1',
                caption: 'Homepage design showcasing the main features'
            },
            {
                src: VanLifeImages.previews[2],
                alt: 'Project screenshot 1',
                caption: 'Homepage design showcasing the main features'
            },
            {
                src: VanLifeImages.previews[3],
                alt: 'Project screenshot 1',
                caption: 'Homepage design showcasing the main features'
            }
        ],
        features: [
            {
                bold: 'User Authentication',
                text: 'Secure login system with protected routes for host features'
            },
            {
                bold: 'Dynamic Van Listings',
                text: 'Interactive catalog of vans with filtering capabilities by type (simple, rugged, luxury)'
            },
            {
                bold: 'Host Dashboard',
                text: `Comprehensive dashboard for van owners including:`,
                details: [
                    { text: 'Income tracking with visual charts' },
                    { text: 'Review management system' },
                    { text: 'Detailed van listing management' }
                ]
            },
            {
                bold: 'Responsive Design',
                text: 'Fully responsive layout with burger menu for mobile device'
            },
            {
                bold: 'Data Visualization',
                text: 'Implementation of both horizontal and vertical charts for data representation'
            }, 
            {
                bold: 'State Management',
                text: 'Context-based state management for host data'
            }
        ],
        technologies: [
            {
                bold: 'React',
                text: `Built with React for component-based architecture and efficient UI rendering`
            },
            {
                bold: 'React Router',
                text: 'Implements complex routing with nested routes and protected paths'
            },
            {
                bold: 'Firebase',
                text: 'Backend integration for data storage and authentication'
            },
            {
                bold: 'Chart.js',
                text: 'Data visualization for income and reviews'
            },
            {
                bold: 'Material-UI',
                text: 'Component library for enhanced UI elements'
            },
            {
                bold: 'CSS',
                text: 'Custom styling with responsive design principles'
            },
            {
                bold: 'Vite',
                text: 'Modern build tool for optimal development experience'
            }
        ],
        highlights: [
            {
                bold: 'Protected Routes',
                text: `Implementation of authorization requirements`
            },
            {
                bold: 'Context-based State Management',
                text: 'Efficient data handling across components'
            },
            {
                bold: 'Responsive Navigation',
                text: 'Dynamic navigation with mobile support'
            }
        ],
        challenges: [
            {
                bold: 'State Management',
                text: 'Handled complex state management across multiple components using Context API, providing a centralized data store for host information'
            },
            {
                bold: 'Authentication Flow',
                text: 'Implemented a secure authentication system with protected routes and persistent login state'
            },
            {
                bold: 'Data Visualization',
                text: 'Created custom chart components for displaying income and review data in an intuitive way'
            },
            {
                bold: 'Responsive Design',
                text: 'Developed a fully responsive layout that adapts to different screen sizes while maintaining functionality'
            }
        ],
    },
    {
        name: 'Quizzical Game',
        id: 'quizzical-game',
        img: QuizzicalTriviaImages.main,
        imgAlt: 'Quizzical Trivia app preview',
        description: `Quizzical is an interactive trivia application that challenges users with diverse questions across various topics. The app is designed to provide an engaging learning experience while testing users' knowledge in an entertaining format.`,
        tags: ['react', 'javascript', 'firebase', 'css', 'vite'],
        conclusion: `The Quizzical Trivia App demonstrates my ability to create engaging, interactive web applications using modern JavaScript frameworks and tools. It showcases my skills in front-end development, API integration, and user experience design. The project highlights my attention to detail in creating a polished, production-ready application that provides both entertainment and educational value to users. The implementation emphasizes clean code architecture, modern development practices, and thoughtful user interface design, making it a strong addition to my portfolio of web development work.`,
        liveLink: 'https://emilia-burza-quizzical-trivia-app.netlify.app/',
        githubLink: 'https://github.com/eburza/Quizzical-Trivia-App-Final',
        images: [
            {
                src: QuizzicalTriviaImages.previews[0],
                alt: 'Project screenshot 1',
                caption: 'Homepage design showcasing the main features'
            },
            {
                src: QuizzicalTriviaImages.previews[1],
                alt: 'Project screenshot 1',
                caption: 'Homepage design showcasing the main features'
            },
            {
                src: QuizzicalTriviaImages.previews[2],
                alt: 'Project screenshot 1',
                caption: 'Homepage design showcasing the main features'
            },
            {
                src: QuizzicalTriviaImages.previews[3],
                alt: 'Project screenshot 1',
                caption: 'Homepage design showcasing the main features'
            },
        ],
        features: [
            {
                bold: 'Dynamic Question Loading',
                text: 'Fetches trivia questions from an external API, providing fresh content for each sessions'
            },
            {
                bold: 'Multiple Choice Format',
                text: 'Questions are presented in a multiple-choice format with clear answer option'
            },
            {
                bold: 'Score Tracking',
                text: `Keeps track of correct answers and displays the final score after completion`
            },
            {
                bold: 'Answer Validation',
                text: 'Provides immediate feedback on answer correctness with visual indicators'
            },
            {
                bold: 'Clean UI/UX',
                text: 'Features a modern, intuitive interface with custom fonts and styling'
            }, 
            {
                bold: 'Mobile Responsive',
                text: 'Fully responsive design that works seamlessly across all device sizes'
            }
        ],
        technologies: [
            {
                bold: 'React',
                text: `Built using React 17.0.2 for efficient component-based architecture and state management`
            },
            {
                bold: 'Webpack',
                text: 'Utilizes Webpack for bundling and optimization of assets'
            },
            {
                bold: 'Babel',
                text: 'Implements Babel for JavaScript compatibility and JSX transformation'
            },
            {
                bold: 'HTML5/CSS3',
                text: 'Structured with semantic HTML and styled with modern CSS features'
            },
            {
                bold: 'he Library',
                text: `Incorporates the 'he' library for handling HTML entity encoding/decoding`
            },
            {
                bold: 'nanoid',
                text: 'Uses nanoid for generating unique identifiers'
            }
        ],
        highlights: [
            {
                bold: 'Build Configuration',
                text: ` Implements a sophisticated build pipeline using Webpack and Babel for optimal production deployment`
            },
            {
                bold: 'Modern Development Setup',
                text: 'Utilizes contemporary development tools and dependencies'
            },
            {
                bold: 'Responsive Design',
                text: 'Implements a responsive layout with carefully selected fonts and styling'
            }
        ],
        challenges: [
            {
                bold: 'Cross-browser Compatibility',
                text: 'Addressed through careful Babel configuration and polyfills to ensure consistent behavior across different browsers'
            },
            {
                bold: 'State Management',
                text: 'Implemented efficient state management for handling quiz progress and scoring'
            },
            {
                bold: 'API Integration',
                text: 'Successfully integrated with external trivia API while handling various response formats and edge cases'
            }
        ],
    },
    {
        name: 'My Old Website',
        id: 'my-old-website',
        img: GraphicPortfolioImages.main,
        imgAlt: 'Quizzical Trivia app preview',
        description: `This project is my old personal portfolio website as a graphic designer, showcasing my creative work and professional experience. The website features a clean, minimalist design that puts the focus on my design projects while maintaining excellent usability and responsiveness across different devices. Through this platform, I demonstrate my expertise in various design disciplines and my ability to create visually compelling solutions that meet client needs.`,
        tags: ['html', 'css'],
        conclusion: `This portfolio website demonstrates my ability to create professional, responsive web experiences with clean code and attention to detail. The project showcases my skills in HTML5, CSS3, while also highlighting my understanding of user experience and responsive design principles. The implementation of analytics tools also shows consideration for tracking and improving user engagement.`,
        liveLink: 'https://emilia-burza-graphic-designer-portfol.netlify.app/',
        githubLink: 'https://github.com/eburza/portfolio',
        images: [
            {
                src: GraphicPortfolioImages.previews[0],
                alt: 'Project screenshot 1',
                caption: 'Homepage design showcasing the main features'
            },
            {
                src: GraphicPortfolioImages.previews[1],
                alt: 'Project screenshot 1',
                caption: 'Homepage design showcasing the main features'
            },
            {
                src: GraphicPortfolioImages.previews[2],
                alt: 'Project screenshot 1',
                caption: 'Homepage design showcasing the main features'
            },
            {
                src: GraphicPortfolioImages.previews[3],
                alt: 'Project screenshot 1',
                caption: 'Homepage design showcasing the main features'
            }
        ],
        features: [
            {
                bold: 'Responsive Design',
                text: 'The website is fully responsive, adapting seamlessly to different screen sizes and devices through carefully implemented media queries'
            },
            {
                bold: 'Portfolio Gallery',
                text: 'A well-organized gallery of design projects, each with detailed case studies and visual presentations'
            },
            {
                bold: 'Navigation System',
                text: `Clean and intuitive navigation with a fixed header for easy access to different sections`
            },
            {
                bold: 'Contact Section',
                text: 'Direct contact information and social media links for professional networking'
            },
            {
                bold: 'Project Case Studies',
                text: 'Detailed project descriptions including requirements and visual presentations'
            }
        ],
        technologies: [
            {
                bold: 'HTML5',
                text: `Semantic markup for better accessibility and SEO`
            },
            {
                bold: 'CSS3',
                text: 'Advanced styling with features like flexbox and media queries'
            },
            {
                bold: 'Font Awesome',
                text: 'Integration of professional icons for social media links'
            },
            {
                bold: 'Analytics Integration',
                text: 'Implementation of various analytics tools (Google Analytics, Hotjar, Heap) for tracking user behavior'
            }
        ],
        highlights: [
            {
                bold: 'Mobile-First Approach',
                text: `The CSS is structured using a mobile-first methodology, with breakpoints at 481px, 768px, and 992px for different device sizes`
            },
            {
                bold: 'Responsive Images',
                text: 'Implementation of responsive image handling with proper shadow effects and border radius'
            },
            {
                bold: 'Grid Layout',
                text: 'Efficient use of CSS grid for layout management'
            }
        ],
        challenges: [
            {
                bold: 'Responsive Navigation',
                text: 'Created a flexible navigation system that transforms based on screen size, ensuring good usability across all devices'
            },
            {
                bold: 'Image Optimization',
                text: 'Implemented proper image handling with shadows and responsive sizing while maintaining performance'
            },
            {
                bold: 'Cross-browser Compatibility',
                text: 'Ensured consistent rendering across different browsers through careful CSS implementation'
            }
        ],
    },
]

export { projectList }