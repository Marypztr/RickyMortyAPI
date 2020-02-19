import React, { Component, Fragment } from 'react'
import styles from "./Episodes.module.css"

export default class Episodes extends Component {
    constructor(props){
        super(props);
        this.state = {
            showDescription2: false,
            idepisode:0,
            episodeDetail: {
                name: String,
                air_date:String,
                episode: String,
                characters: {
                    name: String
                },
                url: String
            },
            nameCharacter: []
        }
    }
    changeView (e, index){
        this.setState(() => ({showDescription2: !e.state.showDescription2, idepisode:index}))
        fetch(`https://rickandmortyapi.com/api/episode/${index+1}`).then(res =>
        res.json().then(json => {
            this.setState({
                episodeDetail: json
            });
        }));
    }

    nameCharacter(url){
        fetch(url)
        .then(res => {
            this.setState({
                nameCharacter: res.name
            })
            return res.name
        })
    }

    getName(){
        return (url) => {
            //console.log(url.length)
            for (let i=0; i<=url.length; i++) {
                //console.log(url[i])
                fetch(url[i])
                .then(res => {
                    res.json().then(json => {
                        this.state.nameCharacter.push(json.name);                        
                        return json.name
                    })
            })}
        }
    }

    render() {
        const { episodes } = this.context;

        return (
            <div >
                <h1 className={styles.titleEpisodes}>Episodes</h1>
                <div className={styles.ContainerEpisode}>
                <Fragment>
                    { !this.state.showDescription2 ? (
                    <Fragment>
                        { episodes && 
                            episodes.map((episode, index) =>(
                            <div>
                                <h4>{episode.name}</h4>
                                <label>Air date: {episode.air_date}</label>
                                <button type="button" onClick={() => this.changeView(this , index )}>See more</button>
                            </div>
                            ))}
                    </Fragment>   
                    ) : (
                        <div className={styles.cardDetail}>
                        <section className={styles.details}>
                        <h1>{this.state.episodeDetail.name}</h1>
                            <label><label style={{fontWeight:"bold"}}>Air date: </label>{this.state.episodeDetail.air_date}</label>
                            <label><label style={{fontWeight:"bold"}}>episode: </label>{this.state.episodeDetail.episode}</label>
                            {this.getName()(this.state.episodeDetail.characters)}
                            {console.log(this.state.nameCharacter)}
                            {this.state.nameCharacter.map((item) => (
                                <label><label style={{fontWeight:"bold"}}>characters: </label>{this.state.nameCharacter}</label>
                            ))}
                            <a href={this.state.episodeDetail.url}>see episode</a>
                        </section>
                    </div>
                    )}
                </Fragment>
                </div>
            </div>
        )
    }
}
