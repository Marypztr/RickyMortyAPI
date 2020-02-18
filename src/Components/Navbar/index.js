import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Username } from "../../AppContext"
import styles from "./Navbar.module.css"



export default class Navbar extends Component {
    static contextType = Username; 
    render() {
        return(
             <div>
                <header>
                    <Link to="/">
                        <img id="logo" src="https://www.stickpng.com/assets/images/58f37720a4fa116215a9240f.png"/>
                    </Link>
                    <div className={styles.hyperLinks}>
                        <Link to="/characters">
                            <span>Characters</span>
                        </Link>
                        <Link to="/episodes">
                            <span>Episodes</span>
                        </Link>
                        <Link to="/register">
>
                           <span>{
                          this.context  ?
                            this.context : "Sign Up"
                            } </span>
                            </Link>
                    </div>
                </header>
            </div>
        )
    }
}