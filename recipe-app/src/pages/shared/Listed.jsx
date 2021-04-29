import React, {useState, useEffect} from 'react'
import {db} from '../../config/firebase'
import './styles/list.css'



export const Listed = () => {

    const [recipes, setRecipes] = useState([])

    const fetchRecipes = async () => {
        const res = db.collection('recipes')
        const data = await res.get()
        const  fetchedRecipe = data.docs.map(item => {
            return item.data()
        })
        setRecipes(fetchedRecipe)
    }

    useEffect(() =>{
        fetchRecipes();
    },[])

    return (
       <div className="list">
           {
               recipes && recipes.map(recipe => {
                   return (
                           <div className="list__card">
                          <img src={recipe.image} className="card"/>
                               <div className="content">
                                    <h2 className="title">{recipe.title}</h2>
                                    <p className="sub__text">
                                       Ingridients:{recipe.ingredient}
                                    </p> 
                                    <p><span style={{fontSize: 16, color: 'red', fontWeight: 'bold'}}>Calories:</span>{recipe.calories}kcal</p>
                               </div>
                            </div>
                       
                   )
               })
           }
       </div>
    )
}