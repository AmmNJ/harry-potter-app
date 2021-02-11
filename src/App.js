import fetchCharacters from './services/fetchCharacters'
import Grid from './components/Grid'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import Card from './components/Card'
import createElement from './lib/createElement'

export default function App() {
  const grid = Grid()
  document.body.append(grid)
  const header = AppHeader('Harry Potter App')
  const main = AppMain()

  fetchCharacters()
    .then(charactersData => createCards(charactersData))
    .catch(error => handleGetCharacterError(error))

  grid.append(header, main)

  function createCards(characters) {
    const cards = characters.map(character =>
      Card(character.name, character.yearOfBirth)
    )
    main.append(...cards)
  }

  function handleGetCharacterError(error) {
    const errorMessage = createElement(
      'strong',
      { style: 'color: crimson;' },
      error.message
    )
    document.body.append(errorMessage)
  }
}
