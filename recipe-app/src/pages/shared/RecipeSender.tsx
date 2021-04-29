import React, { useState, useEffect } from 'react'
import { db } from '../../config/firebase'
import firebase from "firebase"
import "./styles/recipe.css"
import Header from './header'
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';
import "animate.css-react"
import 'react-notifications-component/dist/theme.css'
import { useHistory } from 'react-router'


function RecipeSender() {

    const history = useHistory()

    const [input, setInput] = useState("")

    const [kcal, setKcal] = useState("")

    const [imageUrl, setImageUrl] = useState("")

    const [label, setLabel] = useState("")

    const handleSubmit = (e: any) => {
        e.preventDefault();

        db.collection("recipes").add({
            image: imageUrl,
            ingredient: input,
            title: label,
            calories: kcal,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })



        setInput("")
        setImageUrl("")
        setLabel("")
        setKcal("")

        store.addNotification({
            title: "New Recipe Added!",
            message: "Successfully Added recipe",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true,
                showIcon: true
            }

        });

    }



    return (
        <>
            <ReactNotification />
            <Header />
            <div className="wrapper">
                <div className="form__container">
                    <div className="form__container--title">
                        <h1>Add my Recipe</h1>
                    </div>

                    <div className="form">
                        <div>
                            <input
                                className="form__textinput"
                                placeholder="Enter your Recipe name"
                                type="text"
                                required
                                value={label}
                                onChange={(e) => setLabel(e.target.value)}
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                placeholder={"image URL"}
                                className="form__textinput"
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                value={kcal}
                                onChange={(e) => setKcal(e.target.value)}
                                placeholder={"Enter Calories in Kcal"}
                                className="form__textinput"
                            />
                        </div>


                        <div>
                            <textarea
                                className="form__textinput"
                                placeholder="write down the ingridients"
                                required
                                rows={5}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                        </div>


                        <button
                            type="submit"
                            className="post__recipebutton"
                            onClick={handleSubmit}
                        >
                            Done
                    </button>

                    </div>




                </div>
            </div>
        </>
    )
}


export default RecipeSender