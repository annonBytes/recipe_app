import React, { useState, useEffect } from 'react'
import IconButton from '@material-ui/core/IconButton'
import { useHistory, Link } from "react-router-dom"
import { useStateValue } from '../../StateProvider'
import { auth } from '../../config/firebase'
import './styles/header.css'
import logo from '../../assets/food.svg'
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy'
import StorefrontIcon from '@material-ui/icons/Storefront'
import KitchenIcon from '@material-ui/icons/Kitchen';


const Header = props => {
    const history = useHistory();
    const [{ user }, dispatch] = useStateValue()


    const AddRecipe = () => {
        history.push('/new-recipe')
    }

    const AddInventory = () => {
        history.push('/inventory')
    }

    const AddSavedRecipe = () => {
        history.push('/myrecipes')
    }

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    const isUser = !user


    return (
        <>
            <div className="header">
                <div className="header__left">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>


                <div className="header__center">

                <div className="header__option" onClick={AddInventory}>
                        <IconButton>
                            <StorefrontIcon fontSize="large" />
                        </IconButton>
                        <span className="header__option--text">Add Inventory</span>
                    </div>

                    
                    <div className="header__option" onClick={AddRecipe}>
                        <IconButton>
                            <LocalPharmacyIcon fontSize="large" />
                        </IconButton>
                        <span className="header__option--text">Add Recipe</span>
                    </div>

                  

                    <div className="header__option" onClick={AddSavedRecipe}>
                     <IconButton>
                        <KitchenIcon fontSize="large" />
                        </IconButton>
                        <span className="header__option--text">Added recipe</span>
                    </div>
                </div>


                <div className="header__right">
                    <div className="header__info">
                        <Link to={isUser && "/login"}>
                            <div className="header__option" onClick={handleAuthentication}>
                                <span className="header__optionLineOne">Hello {!user ? "Guest" : user.email}</span>
                                <span className="header__optionLineTwo">{user ? "Sign out" : "Sign in"}</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Header