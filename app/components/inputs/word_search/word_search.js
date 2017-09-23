import React, { Component } from 'react'
import styles from './word_search.scss'
import connect from 'Redux/connect'

const search = action => e => {
  e.preventDefault()
  if (e.target.value !== '') {
    fetch(`http://localhost:3000/word?q=${e.target.value}`)
      .then((res) => {
        if (res.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + res.status)
          return
        }
        res.json().then(function(data) {
          action(data)
        })
      })
  } else {
    action([])
  }
}

class WordSearch extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { updateDictionary } = this.props.actions
    return (
      <input className={styles.searchInput}
        type="text"
        placeholder="Search for a word"
        onChange={search(updateDictionary)}
      />
    )
  }
}

export default connect(WordSearch)
