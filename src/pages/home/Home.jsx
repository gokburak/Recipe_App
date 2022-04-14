import React,{useState} from 'react'
import  axios  from 'axios';
import Header from "../../components/header/Header"
import { HomeImg, ImgDiv, MainContainer } from './HomeStyles';
import homeSvg from "../../assets/home.svg";
import RecipeCardComp from "../../pages/home/RecipeCardComp"


const app_id = "2415284d";
const Api_Key = "dd04ef6cda28763365df20bfc310c6f0";

const Home = () => {
  const [query, setQuery] = useState()
  const [food, setFood] = useState()
  const mealTypes =["Breakfast", "Lunch", "Dinner", "Snack", "TeaTime"]
const [meal, setMeal] = useState(mealTypes[0].toLowerCase())




 const url = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${Api_Key}&mealTypes=${meal}`;

const getData = async ()=>{
  if(query){
      const result = await axios.get(url)
 
  setFood(result.data.hits)
}
 }
  return (
    <div>
      <Header
       setQuery={setQuery}
      getData={getData}
      mealTypes={mealTypes}
      setMeal={setMeal} />

      {
        food? (<MainContainer>
          {food.map((liste,index)=>(
            <RecipeCardComp key={index} recipe1={liste.recipe} />
          ))}
        </MainContainer>)
        :<ImgDiv>
        <HomeImg src={homeSvg}  />
        </ImgDiv>
      }


    </div>
  )
}

export default Home