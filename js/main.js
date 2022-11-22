'use strict'
import { projectDetails } from './projectDetails.js'

const toogleCardDetails = (e) => {
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

projectDetails.forEach((project) => {
  //create card node
  const card = document.createElement('div')
  card.classList.add('card')

  //add image node
  const img = document.createElement('img')
  img.classList.add('card__img')
  img.setAttribute('src', project.image)
  img.setAttribute('alt', 'Flower')
  card.appendChild(img)

  //add h1 node
  const h1 = document.createElement('h1')
  h1.classList.add('card__h1')
  h1.setAttribute('id', `card__h1_${project.key}`)
  const h1Text = document.createTextNode(project.title)
  h1.appendChild(h1Text)
  card.appendChild(h1)

  //add button container node
  const buttonContainer = document.createElement('div')
  buttonContainer.classList.add('button__container')
  card.appendChild(buttonContainer)

  //add button node
  const button = document.createElement('button')
  button.classList.add('card__button')
  const buttonText = document.createTextNode('View Details')
  button.setAttribute('id', `card_button_${project.key}`)
  button.appendChild(buttonText)
  buttonContainer.appendChild(button)

  //insert nodes into DOM
  const cardContainer = document.getElementById('card__container')
  cardContainer.appendChild(card)

  const buttonKey = document.getElementById(`card_button_${project.key}`)
  buttonKey.style.color = project.buttonColor
  buttonKey.style.border = `2px solid ${project.buttonColor}`

  //button event listener
  button.addEventListener('click', toogleCardDetails)
})

//addProjectCardNodes()
