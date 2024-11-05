import ProjectListElement from './ProjectListElement'
import { projectList } from '../data/projectsList'
import ArrowButton from '../assets/arrow-button.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Mousewheel } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css'
import { useRef } from 'react'

export default function Projects() {

    const swiperRef = useRef(null)

    const handlePrevClick = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    }

    const handleNextClick = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    }

    return(
        <div className='projects-content' id='projects'>
            <div className='project-text-container'>
                <h1 className='head-title'>Projects</h1>
                <p className='projects-intro-text'>
                    Explore my frontend development projects built with React.js 
                    and modern web technologies. These works demonstrate my focus 
                    on creating responsive user interfaces and interactive web applications, 
                    while documenting my ongoing journey into full-stack development.
                </p>
            </div>
            <section className='projects-list'>
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Mousewheel]}
                    slidesPerView={3}
                    spaceBetween={50}
                    mousewheel={true}
                >
                    {projectList.map(project => (
                        <SwiperSlide key={project.id}>
                            <ProjectListElement 
                                name={project.name}
                                image={project.img}
                                imageAlt={project.imgAlt}
                                summary={project.summary}
                                tags={project.tags}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
            <div className='projects-buttons'>
                <button 
                    className='previous-project project-list-button'
                    onClick={handlePrevClick}
                >
                    <img src={ArrowButton} alt="Previous"/>
                </button>
                <button 
                    className='next-project project-list-button'
                    onClick={handleNextClick}
                >
                    <img src={ArrowButton} alt="Next"/>
                </button>
            </div>
        </div>
    )
}