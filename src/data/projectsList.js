import ImagePlaceholder from '../assets/image-placeholder.png'
import { projectTicTacToeImages } from './projectImagesList'

const projectList = [
    {
        name: 'Tic-Tac-Toe game',
        id: 'project-1',
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
        name: 'Project 2',
        id: 'project-2',
        img: ImagePlaceholder,
        imgAlt: 'img alt text example',
        summary: 'Short summary: A responsive product page built with React.js and Context API for state management.',
        description: 'Detailed description of the project, including the problem it solves, your approach, challenges faced, and solutions implemented. This can be multiple paragraphs long.',
        tags: ['react', 'javascript', 'sass'],
        liveLink: 'https://project1.com',
        githubLink: 'https://github.com/username/project1',
        images: [
            {
                src: ImagePlaceholder,
                alt: 'Project screenshot 1',
                caption: 'Homepage design showcasing the main features'
            },
        ]
    },
    {
        name: 'Project 3',
        id: 'project-3',
        img: ImagePlaceholder,
        imgAlt: 'img alt text example',
        summary: 'Short summary: A responsive product page built with React.js and Context API for state management.',
        description: 'Detailed description of the project, including the problem it solves, your approach, challenges faced, and solutions implemented. This can be multiple paragraphs long.',
        tags: ['react', 'javascript', 'sass'],
        liveLink: 'https://project1.com',
        githubLink: 'https://github.com/username/project1',
        images: [
            {
                src: ImagePlaceholder,
                alt: 'Project screenshot 1',
                caption: 'Homepage design showcasing the main features'
            },
        ]
    },
    {
        name: 'Project 4',
        id: 'project-4',
        img: ImagePlaceholder,
        imgAlt: 'img alt text example',
        summary: 'Short summary: A responsive product page built with React.js and Context API for state management.',
        description: 'Detailed description of the project, including the problem it solves, your approach, challenges faced, and solutions implemented. This can be multiple paragraphs long.',
        tags: ['react', 'javascript', 'sass'],
        liveLink: 'https://project1.com',
        githubLink: 'https://github.com/username/project1',
        images: [
            {
                src: ImagePlaceholder,
                alt: 'Project screenshot 1',
                caption: 'Homepage design showcasing the main features'
            },
        ]
    },
    {
        name: 'Project 5',
        id: 'project-5',
        img: ImagePlaceholder,
        imgAlt: 'img alt text example',
        summary: 'Short summary: A responsive product page built with React.js and Context API for state management.',
        description: 'Detailed description of the project, including the problem it solves, your approach, challenges faced, and solutions implemented. This can be multiple paragraphs long.',
        tags: ['react', 'javascript', 'sass'],
        liveLink: 'https://project1.com',
        githubLink: 'https://github.com/username/project1',
        images: [
            {
                src: ImagePlaceholder,
                alt: 'Project screenshot 1',
                caption: 'Homepage design showcasing the main features'
            },
        ]
    },
    {
        name: 'Project 6',
        id: 'project-6',
        img: ImagePlaceholder,
        imgAlt: 'img alt text example',
        summary: 'Short summary: A responsive product page built with React.js and Context API for state management.',
        description: 'Detailed description of the project, including the problem it solves, your approach, challenges faced, and solutions implemented. This can be multiple paragraphs long.',
        tags: ['react', 'javascript', 'sass'],
        liveLink: 'https://project1.com',
        githubLink: 'https://github.com/username/project1',
        images: [
            {
                src: ImagePlaceholder,
                alt: 'Project screenshot 1',
                caption: 'Homepage design showcasing the main features'
            },
        ]
    },
]

export { projectList }