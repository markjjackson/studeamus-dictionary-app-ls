import React, { Component } from 'react'
import styles from './word_search.scss'
import connect from 'Redux/connect'
import debounce from 'Util/debounce'

const search = action => value => {
  if (value !== '') {
    fetch(`http://localhost:3000/word?q=${value}`)
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
    const searchDebounced = debounce(search(updateDictionary))(400)
    return (
      <input className={styles.searchInput}
        type="text"
        placeholder="Search for a word"
        onChange={e => searchDebounced(e.target.value)}
      />
    )
  }
}

export default connect(WordSearch)
