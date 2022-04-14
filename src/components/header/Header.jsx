import React from 'react'
import { HeaderContainer, MainHeader } from './HeaderStyles'
import Form from "./Form"

const Header = ({mealTypes,setQuery,setMeal,getData}) => {
  return (
   <HeaderContainer>
     <MainHeader>Food App</MainHeader>
     <Form  setQuery={setQuery}
      getData={getData}
      mealTypes={mealTypes}
      setMeal={setMeal}  />
   </HeaderContainer>
  )
}

export default Header