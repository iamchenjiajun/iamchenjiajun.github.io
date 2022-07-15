import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import './projects.css'
import project_data from '../../data/projects/project_data'
import { MdClose } from 'react-icons/md'

function Projects() {
  const [viewMarkup, setViewMarkup] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [categoryList, setCategoryList] = useState([]);

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

  useEffect(
    () => {
      let set = new Set();
      project_data.forEach(item => set.add(item.category));
      setCategoryList(Array.from(set));
    },
    []
  );

  return (
  <>
    <div id='projects' className='projects__wrapper'>
      <div className='outer__container projects__outer'>
        <section className='container projects__container'>
          <section className='projects__container-header'>
            <h2>my projects</h2>
            <ul className='project__filter'>
              <li className='project__filter-category' onClick={() => setCategoryFilter(null)}>all</li>
              {categoryList.map(item =>
                <li key={item} className='project__filter-category' onClick={() => setCategoryFilter(item)}>{item}</li>
              )}
            </ul>
          </section>
          <div className="projects__cards">
            {project_data.filter(project => categoryFilter === null || categoryFilter === project.category).map(
              ({title, source, description, demo, img, markup}) =>
                <ProjectCard
                  key={title}
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
    <div className='projects__article' onClick={closeModal}>
      <article className='projects__article-content' onClick={(e) => e.stopPropagation()}>
        <span className='projects__article-close' onClick={closeModal}><MdClose /></span>
        {viewMarkup}
      </article>
    </div>
  </>

  )
}

export default Projects