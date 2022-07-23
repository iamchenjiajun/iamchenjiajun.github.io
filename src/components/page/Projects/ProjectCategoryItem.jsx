import React from 'react'

function ProjectCategoryItem(props) {
    const className = ((props.item === props.selected) || (props.item === 'all' && props.selected === null)) ?
        'project__filter-category project__filter-category-selected' :
        'project__filter-category';
    
    return (
      <li 
        className={className}
        onClick={props.onclick}
      >
          {props.item}
      </li>
    )
  }

export default ProjectCategoryItem