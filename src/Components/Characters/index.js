import React, { Component, Fragment } from 'react'
import styles from "./Characters.module.css"



export default class Characters extends Component {
    constructor(props){
        super(props);
        this.state = {
            showDescription: false,
            idcharacter:0,
            characterDetail: {
                name: String,
                image:String,
                status: String,
                species: String,
                type: String,
                gender: String,

            }
        }
    }
    changeView (e, index){
        this.setState(() => ({showDescription: !e.state.showDescription, idcharacter:index}))
        fetch(`https://rickandmortyapi.com/api/character/${index+1}`).then(res =>
        res.json().then(json => {
            console.log(json)
            this.setState({
                characterDetail: json
            });
        }));
    }
    render() {
        const { characters } = this.context;
        
        return (
            <div  >
                <h1 className={styles.characterTitle}>Characters</h1>
                <div  className={styles.containerCharacters}>
                        <Fragment>
                        {   !this.state.showDescription  ? (
                            <Fragment>
                            { characters && characters.map((character, index) => 
                                <div key={character.id}>
                                    <img src={character.image} alt="img"/>
                                    <h3>{character.name}</h3>
                                    <label><label style={{fontWeight:"bold"}}>Location: </label>{character.location.name}</label>
                                    <button type="button" onClick={() => this.changeView(this , index )}>See more</button>
                                </div>  
                            )}
                            </Fragment>
                            
                        ) : (
                            <Fragment>
                            <div className={styles.cardDetail}>
                                <h1>{this.state.characterDetail.name}</h1>
                                <section>
                                <div>
                                    <img src={this.state.characterDetail.image} alt="img"/>
                                </div>
                                <div className={styles.details}>
                                    <label><label style={{fontWeight:"bold"}}>Status:</label> {this.state.characterDetail.status}</label>
                                    <label><label style={{fontWeight:"bold"}}>Species:</label>{this.state.characterDetail.species}</label>
                                    <label><label style={{fontWeight:"bold"}}>Type:</label>{this.state.characterDetail.type}</label>
                                    <label><label style={{fontWeight:"bold"}}>Gender:</label>{this.state.characterDetail.gender}</label>
                                </div>
                                </section>
                                    <button type="button" onClick={() => this.changeView(this )}>back</button>
                            </div>
                            </Fragment>
                        )}
                            

                        </Fragment>
                </div>
            </div>
        )
    }
}
