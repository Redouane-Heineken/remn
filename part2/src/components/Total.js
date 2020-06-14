import React from 'react'

const Total = ({ course }) => {
    const { parts } = course
    return (
      <p>Total of exercises {parts.reduce((sum, part) => sum += part.exercises, 0)}</p>
    )
}

export default Total