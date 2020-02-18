import React, { Component } from 'react'
import styles from "./Episodes.module.css"

export default class Episodes extends Component {
    render() {
        const { episodes } = this.context;

        return (
            <div>
                <h1 className={styles.titleEpisodes}>Episodes</h1>
                <div className={styles.ContainerEpisode}>
                { episodes && 
                    episodes.map(episode =>(
                            <div>
                                <h4>{episode.name}</h4>
                                <label>Air date: {episode.air_date}</label>
                                <button type="submit">See more</button>
                            </div>
                    ))}
                </div>
            </div>
        )
    }
}
