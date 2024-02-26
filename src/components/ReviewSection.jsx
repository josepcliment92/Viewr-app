import React from 'react'
import ReviewForm from './ReviewForm'
import ReviewCard from './ReviewCard'

function ReviewSection() {
  return (
    <div>
      <h2>Review Section</h2>
      
      <ReviewForm />
      <ReviewCard /> {/*ponerlo en plural para no generar confusión: ReviewCards*/}
      </div>
  )
}

export default ReviewSection