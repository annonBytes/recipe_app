import React, { useState, useEffect } from 'react'
import { db } from '../../config/firebase'
import Header from './header';
import { Listed } from './Listed';



function PostRecipe() {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        db.collection("recipes").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
            setRecipes(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))
        );
    }, [])

    return (
        <div className="feed">
            <Header />
             <Listed />
        </div>
    )
}

export default PostRecipe