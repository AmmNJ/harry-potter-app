import './Card.css'
import createElement from '../../lib/createElement'

export default function Card(name, yearOfBirth) {
  const nameEl = createElement('h2', {
    className: 'Card__header',
    innerText: name,
  })

  const yearOfBirthEl = createElement('span', {
    className: 'Card__info',
    innerText: yearOfBirth,
  })

  const el = createElement(
    'section',
    { className: 'Card' },
    nameEl,
    yearOfBirthEl
  )

  return el
}
