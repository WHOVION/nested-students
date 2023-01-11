import { Component } from "react";

export default class Scores extends Component {
    render () {

        const scores = this.props.scores.map((score, idx) => {
            return (
                <div key={idx}>
                    <p>{score.date}</p>
                    <p>{score.score}</p>
                </div>
            )
        })

        return (
            <>
            {scores}
            </>
        )
    }
}