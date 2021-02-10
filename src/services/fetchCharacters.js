const charactersUrl = 'http://hp-api.herokuapp.com/api/characters'

export default function fetchCharacters() {
  return fetch(charactersUrl).then(res => res.json())
}
