const expect = require('chai').expect
import estimateStrength from './estimateStrength'

describe('password', () => {

  it.skip('lower case', () => {
    expect(estimateStrength('pudding'))
      .to.deep.equal({ 
        score: 1, 
        hasLowerCase: true 
      })
  })

  it.skip('1 pt for special characters', () => {
    expect(estimateStrength('!@#$%').score).to.be.equal(1)
  })
  
  it.skip('upper lower case numbers > 8', () => {
    expect(estimateStrength('cakePudd1ng'))
      .to.deep.equal({ 
        score: 4, 
        hasLowerCase: true, 
        hasUpperCase: true,
        hasNumber: true,
        isOver8Char: true
      })
  })

  it('super strong', () => {
    expect(estimateStrength('cakePudd1ng!'))
      .to.deep.equal({ 
        score: 5,
        hasSpecialChar: true, 
        hasLowerCase: true, 
        hasUpperCase: true,
        hasNumber: true,
        isOver8Char: true
      })
  })
})