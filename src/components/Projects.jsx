import ProjectListElement from './ProjectListElement'
import { projectList } from '../data/projectsList'
import ArrowButton from '../assets/arrow-button.svg'
import GearImg from '../assets/doodles/gear.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css'
import { useRef } from 'react'

export default function Projects() {

    const swiperRef = useRef(null)

    const handlePrevClick = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev()
        }
    }

    const handleNextClick = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext()
        }
    }

    return(
        <div className='projects-content' id='projects'>
            <div className='project-text-container'>
                <div className='doodle gear-doodle'>
                    <img src={GearImg} />
                </div>
                <h1 className='heading-l underscore-water'>Projects</h1>
                <p className='text-paragraph projects-intro-text'>
                Explore my full-stack development projects showcasing both frontend and backend expertise. These works demonstrate my ability to create complete web applications with responsive user interfaces, robust server-side logic, and database integration, documenting my growth as a versatile full-stack developer.
                </p>
            </div>
            <section className='projects-list'>
                <Swiper
                    ref={swiperRef}
                    modules={[Mousewheel]}
                    slidesPerView={3}       
                    spaceBetween={0}
                    mousewheel={{
                        enabled: true,
                        forceToAxis: true
                    }}
                    breakpoints={{
                        0: {                  
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1440: {
                            slidesPerView: 3,
                        }
                    }}
                >
                    {projectList.map(project => (
                        <SwiperSlide key={project.id}>
                            <ProjectListElement 
                                id={project.id}
                                name={project.name}
                                image={project.img}
                                imageAlt={project.imgAlt}
                                description={project.description}
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
                    <img src={ArrowButton} alt="Previous" className='project-list-button-img'/>
                </button>
                <button 
                    className='next-project project-list-button'
                    onClick={handleNextClick}
                >
                    <img src={ArrowButton} alt="Next" className='project-list-button-img'/>
                </button>
            </div>
        </div>
    )
}