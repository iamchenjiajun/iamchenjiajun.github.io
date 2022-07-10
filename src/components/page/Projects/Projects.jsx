import React from 'react'
import ProjectCard from './ProjectCard'
import './projects.css'
import project_data from '../../data/projects/project_data'

function Projects() {
  return (
    <div id='projects' className='projects__wrapper'>
        <div className='outer__container projects__outer'>
            <section className='container projects__container'>
                <h2>my projects</h2>
                <div className="projects__cards">
                  {project_data.map(
                    ({title, source, description, demo, img}) => 
                      <ProjectCard 
                        title={title} 
                        source={source} 
                        description={description}
                        img={img}
                        demo={demo}
                      />
                  )}
                </div>
                
            </section>
        </div>
    </div>
  )
}

export default Projects