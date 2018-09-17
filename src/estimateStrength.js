// import React from 'react'

function estimateStrength(password) {

	const strength = {
		score: 0,
		hasSpecialChar: "", 
		hasLowerCase: "",
		hasUpperCase: "",
		hasNumber: "",
		isOver8Char: ""
	}

	if (/[a-z]/.test(password)) {
		strength.score += 1
		strength.hasLowerCase = true 
	} 

	if (/[\W]/.test(password)) {
		strength.score += 1
		strength.hasSpecialChar = true
	}

	if (/[A-Z]/.test(password)) {
		strength.score += 1
		strength.hasUpperCase = true
	}

	if (/[0-9]/.test(password)) {
		strength.score += 1
		strength.hasNumber = true
	}

	if (password.length > 8) {
		strength.score += 1
		strength.isOver8Char = true
	}

	return strength
}


module.exports = estimateStrength