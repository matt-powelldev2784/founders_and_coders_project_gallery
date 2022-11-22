import { projectDetails } from './projectDetails.js'

export const toogleCardDetails = (e) => {
  const buttonClass = e.target.id
  const key = buttonClass.slice(-1)
  const h1 = document.getElementById(`card__h1_${key}`)
  const description = projectDetails[key].description
  const descriptionVisible = projectDetails[key].state.descriptionVisible

  if (!descriptionVisible) {
    //add p node
    const p = document.createElement('p')
    p.classList.add('card__p')
    p.setAttribute('id', `card__p_${key}`)
    const pText = document.createTextNode(description)
    p.appendChild(pText)
    h1.append(p)

    //change button text
    const button = document.getElementById(buttonClass)
    button.textContent = 'Hide Details'

    //set text state
    projectDetails[key].state.descriptionVisible = true
  }

  if (descriptionVisible) {
    //remove p node
    const p = document.getElementById(`card__p_${key}`)
    p.remove()

    //change button text
    const button = document.getElementById(buttonClass)
    button.textContent = 'View Details'

    //set text state
    projectDetails[key].state.descriptionVisible = false
  }
}
