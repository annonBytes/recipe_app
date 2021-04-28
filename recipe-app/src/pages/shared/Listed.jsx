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
        

        // data.docs.forEach(item => {
        //     setRecipes([...recipes, item.data()])

        //use map and retun item data.
        //})
    }

    useEffect(() =>{
        fetchRecipes();
    },[])

    return (
       <div className="list">
           {
               recipes && recipes.map(recipe => {
                   return (
                       <div className="list_container">
                          <img src={recipe.image} className="card"/>
                               <div className="content">
                                    <h2 className="title">{recipe.title}</h2>
                                    <p className="sub__text">{recipe.ingredients}
                                       Ingridients
                                    </p>
                                    <p>Calories:{recipe.calories}</p>
                               </div>
                       </div>
                   )
               })
           }
       </div>
    )
}