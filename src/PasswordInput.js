import React from 'react'
import './PasswordInput.css'

const estimateStrength = require('./estimateStrength')

export default class PasswordInput extends React.Component {

	constructor() {
		super()
		this.handleChange = this.handleChange.bind(this)
		this.state = {
			content: '',
		}
	}

	handleChange(event) {
		this.setState({
			content: event.target.value
		})
	}

	render() {

		const { content } = this.state
		const { score, hasLowerCase, hasUpperCase, hasNumber, isOver8Char, hasSpecialChar } = estimateStrength(this.state.content)

		const prison = {
			"1": "(1) Parole",
			"2": "(2) Orange is the New Black",
			"3": "(3) Shawshank",
			"4": "(4) Alcatraz",
			"5": "(5) Azkaban"
		}

		return <div className="input-wrapper">
			<h1>Password by Prison</h1>
			<h2>Check the strength of your password...</h2>
			<div className="password-input">
				<input className="input" onChange={ this.handleChange } type="password" className="input"/>
				<p>{ prison[score] } level security</p>
			</div>
		</div>
	}
}