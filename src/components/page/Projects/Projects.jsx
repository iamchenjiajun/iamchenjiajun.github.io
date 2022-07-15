import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import './projects.css'
import project_data from '../../data/projects/project_data'
import { MdClose } from 'react-icons/md'

function Projects() {
  const [viewMarkup, setViewMarkup] = useState(null);

  const openModal = (markup) => {
    setViewMarkup(markup);
    document.querySelector(".projects__article").style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  };

  const closeModal = () => {
    setViewMarkup(null);
    document.querySelector(".projects__article").style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  }

  return (
  <>
    <div id='projects' className='projects__wrapper'>
      <div className='outer__container projects__outer'>
          <section className='container projects__container'>
              <h2>my projects</h2>
              <div className="projects__cards">
                {project_data.map(
                  ({title, source, description, demo, img, markup}) => 
                    <ProjectCard 
                      title={title} 
                      source={source} 
                      description={description}
                      img={img}
                      demo={demo}
                      onclick={() => openModal(markup)}
                    />
                )}
              </div>
          </section>
      </div>
    </div>
    <div className='projects__article'>
      <article className='projects__article-content'>
        <span className='projects__article-close' onClick={closeModal}><MdClose /></span>
        {viewMarkup}
      </article>
    </div>
  </>
    
  )
}

export default Projects