import React from 'react'
import { FoodInput, FormContainer,Button, Select } from './HeaderStyles'

const Form = ({mealTypes,setQuery,setMeal,getData}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    getData()
  }

  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput type="text" placeholder="Search" onChange={(e)=>setQuery(e.target.value)} />
        <Button type="submit">Search</Button>
        <Select name="mealTypes" id="mealTypes" onChange={(e)=>setMeal(e.target.value)}>{
          mealTypes.map((item,index)=><option key={index} value={item.toLowerCase()} >{item}</option>)
        }</Select>
      </FormContainer>
    </div>
  )
}

export default Form