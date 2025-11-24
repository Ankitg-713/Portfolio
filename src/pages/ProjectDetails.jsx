import React, { useCallback } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'

const ProjectDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  
  const project = location.state?.project
  const clickedImage = location.state?.clickedImage

  const handleBackClick = useCallback(() => {
    navigate('/projects');
  }, [navigate]);

  if (!project) {
    return (
      <div className='min-h-screen flex items-center justify-center text-black bg-white p-4'>
        <div className='text-center'>
          <h2 className='font-[font1] text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 text-black'>Project Not Found</h2>
          <button 
            onClick={handleBackClick}
            className='border-2 border-black text-black px-4 md:px-6 py-2 rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50] transition-all text-sm md:text-base'
          >
            Back to Projects
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen lg:p-8 md:p-6 p-4 text-black bg-white'>
      <div className='max-w-6xl mx-auto lg:pt-[10vh] md:pt-[8vh] pt-[5vh]'>
        {/* Back Button */}
        <button 
          onClick={handleBackClick}
          className='mb-6 md:mb-8 border-2 border-black text-black px-4 md:px-6 py-2 rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50] transition-all uppercase font-[font1] text-sm md:text-base'
        >
          ← Back to Projects
        </button>

        {/* Project Title */}
        <h1 className='font-[font1] lg:text-[8vw] md:text-[10vw] text-[12vw] uppercase font-semibold mb-6 md:mb-8 text-black'>
          {project.title}
        </h1>

        {/* Clicked Project Image */}
        <div className='mb-8 md:mb-12'>
          <div className='relative lg:h-[500px] md:h-[400px] h-[250px] bg-green-800 rounded-lg overflow-hidden'>
            <img 
              className='h-full w-full object-cover' 
              src={clickedImage || project.image1} 
              alt={project.title}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        {/* Project Description */}
        <div className='mb-8 md:mb-12'>
          <h2 className='font-[font1] text-2xl md:text-3xl lg:text-4xl uppercase mb-4 md:mb-6 text-black'>About the Project</h2>
          <div className='space-y-3 md:space-y-4 text-base md:text-lg leading-relaxed'>
            {project.description.map((para, idx) => (
              <p key={idx} className='text-black'>{para}</p>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className='mb-8 md:mb-12'>
          <h2 className='font-[font1] text-2xl md:text-3xl lg:text-4xl uppercase mb-4 md:mb-6 text-black'>Technologies Used</h2>
          <div className='flex flex-wrap gap-2 md:gap-3'>
            {project.technologies.map((tech, idx) => (
              <span 
                key={idx}
                className='bg-[#D3FD50] text-black px-3 md:px-6 py-1.5 md:py-2 rounded-full font-[font1] uppercase font-bold text-xs md:text-sm lg:text-base'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <div className='mb-8 md:mb-12'>
            <h2 className='font-[font1] text-2xl md:text-3xl lg:text-4xl uppercase mb-4 md:mb-6 text-black'>Key Features</h2>
            <ul className='space-y-2 md:space-y-3'>
              {project.features.map((feature, idx) => (
                <li key={idx} className='flex items-start gap-2 md:gap-3 text-black'>
                  <span className='text-[#D3FD50] text-2xl md:text-3xl lg:text-4xl font-bold'>▸</span>
                  <span className='pt-1 md:pt-3 text-sm md:text-base lg:text-lg'>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 mb-8 md:mb-12'>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target='_blank'
              rel='noopener noreferrer'
              className='border-4 border-black text-black px-4 md:px-8 py-3 md:py-4 rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50] transition-all uppercase font-[font1] text-base md:text-lg lg:text-xl font-bold flex items-center justify-center gap-2 md:gap-3'
            >
              <svg className='w-5 h-5 md:w-6 md:h-6' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
              </svg>
              View on GitHub
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target='_blank'
              rel='noopener noreferrer'
              className='border-4 border-[#D3FD50] bg-[#D3FD50] text-black px-4 md:px-8 py-3 md:py-4 rounded-full hover:bg-transparent hover:text-[#D3FD50] transition-all uppercase font-[font1] text-base md:text-lg lg:text-xl font-bold flex items-center justify-center gap-2 md:gap-3'
            >
              <svg className='w-5 h-5 md:w-6 md:h-6' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/>
              </svg>
              Live Project
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails

