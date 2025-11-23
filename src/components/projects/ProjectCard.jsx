import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectCard = (props) => {
    const navigate = useNavigate();

    const handleClick = (clickedImage, project) => {
        if (project) {
            navigate(`/projects/${project.id}`, {
                state: { 
                    clickedImage: clickedImage,
                    project: project
                }
            });
        }
    };

    return (
        <>
            <div 
                className='group relative lg:w-1/2 h-full bg-green-800 hover:rounded-[55px] overflow-hidden transition-all duration-300 ease-in-out cursor-pointer'
                onClick={() => handleClick(props.image1, props.project1)}
            >
                <img className='h-full w-full object-cover' src={props.image1} alt="" />
                <div className='opacity-0 group-hover:opacity-100 transition-all h-full w-full absolute top-0 bg-black/20 flex items-center justify-center pointer-events-none'>
                    <h2 className='uppercase font-[font1] font-bold text-white text-[4vw] border-2 rounded-full px-4 pt-3 leading-[3vw]'>View Project</h2>
                </div>
            </div>
            <div 
                className='group relative lg:w-1/2 h-full bg-green-800 hover:rounded-[55px] overflow-hidden transition-all duration-300 ease-in-out cursor-pointer'
                onClick={() => handleClick(props.image2, props.project2)}
            >
                <img className='h-full w-full object-cover' src={props.image2} alt="" />
                <div className='opacity-0 group-hover:opacity-100 transition-all h-full w-full absolute top-0 bg-black/20 flex items-center justify-center pointer-events-none'>
                    <h2 className='uppercase font-[font1] font-bold text-white text-[4vw] border-2 rounded-full px-4 pt-3 leading-[3vw]'>View Project</h2>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
