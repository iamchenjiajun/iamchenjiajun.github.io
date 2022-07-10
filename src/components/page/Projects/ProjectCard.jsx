import React from 'react'
import { MdCode, MdPlayArrow } from 'react-icons/md'

function ProjectCard(props) {
    return (
        <div className='project__card-item'>
            <img className='project__card-img' src={props.img} alt="project" />
            <div className='project__card-text'>
                <div className="project__card-header">
                    <h4 className='project__card-title'>{props.title}</h4>
                    {(props.source) ? <a href={props.source}><MdCode /></a> : <></>}
                    {(props.demo) ? <a href={props.demo}><MdPlayArrow /></a> : <></>}
                </div>
                <p className='project__card-description'>{props.description.slice(0, 197) + '...'}</p>
            </div>
        </div>
    )
}

export default ProjectCard