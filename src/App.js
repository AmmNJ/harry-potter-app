import AppHeader from './components/AppHeader'
import fetchCharacters from './services/fetchCharacters'
import Card from './components/Card'
import createElement from './lib/createElement'

export default function App() {
  const header = AppHeader('Harry Potter App')
  document.body.append(header)

  fetchCharacters()
    .then(charactersData => createCards(charactersData))
    .catch(error => handleGetCharacterError(error))

  function createCards(characters) {
    const cards = characters.map(character =>
      Card(character.name, character.yearOfBirth)
    )
    document.body.append(...cards)
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
