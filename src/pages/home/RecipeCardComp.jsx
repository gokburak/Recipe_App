import React from 'react'
import { useNavigate } from "react-router-dom"
import { Button, RecipeCard, RecipeHeader, RecipeImage } from './HomeStyles'

const RecipeCardComp = ({ recipe1 }) => {
  const navigate = useNavigate()

  const moreClick = () => {
    navigate("/details", { state: { recipe1 } })
  }


  return (
    <div>
      <RecipeCard>
        <RecipeHeader>
          {recipe1.label}
        </RecipeHeader>
        <RecipeImage src={recipe1.image} alt={recipe1.label} />
        <Button onClick={moreClick} >
          View More
        </Button>
      </RecipeCard>
    </div>
  )
}

export default RecipeCardComp