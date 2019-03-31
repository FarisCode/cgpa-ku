import React from 'react'
import { Input, Icon } from 'semantic-ui-react'
import './CourseRow.scss';

export default function CourseRow({ id, closeHovered }) {
  return (
    <div className='courseRow'>
      <Input className='inputMarks' type='number' min={0} max={100} placeholder='Marks' label={`Course #${id + 1}`} />
      <Input className='inputCredits' type='number' min={0} max={5} placeholder='Credits' />
      <Icon size='small' color={closeHovered ? 'red' : null} className='closeIcon' circular name='close' />
    </div>
  )
}


