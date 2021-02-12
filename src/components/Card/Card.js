import './Card.css'
import createElement from '../../lib/createElement'

export default function Card({ name, yearOfBirth, house, image }) {
  const nameEl = createElement(
    'h2',
    {
      className: 'Card__name',
    },
    name
  )

  const yearOfBirthEl = createElement(
    'span',
    {
      className: 'Card__year-of-birth',
    },
    yearOfBirth
  )

  const houseEl = createElement(
    'span',
    {
      className: 'Card__house',
    },
    house
  )

  const imageEl = createElement('img', {
    className: 'Card__image',
    src: image,
    alt: '',
  })

  const el = createElement(
    'section',
    { className: 'Card' },
    nameEl,
    yearOfBirthEl,
    houseEl,
    imageEl
  )

  return el
}
