import React, { Component } from 'react'
import styles from "./Characters.module.css"



export default class Characters extends Component {
    constructor(props){
        super(props);
        this.state = {showDescription: false, idcharacter:0}
    }
    changeView (e, index){
        this.setState ={showDescription: true, idcharacter:index}
        console.log(index)

    }
    render() {
        const { characters } = this.context;
        
        return (
            <div >
                <h1 className={styles.characterTitle}>Characters</h1>
                <div  className={styles.containerCharacters}>
                { characters && characters.map((character, index) => 

                        <div>
                            <img src={character.image} />
                            <h3>{character.name}</h3>
                            <label><label style={{fontWeight:"bold"}}>Location: </label>{character.location.name}</label>
                            <button type="button" onClick={() => this.changeView(this , index )}>See more</button>
                        </div>
                    )
            }
                )}
                </div>
            </div>
        )
    }
}
