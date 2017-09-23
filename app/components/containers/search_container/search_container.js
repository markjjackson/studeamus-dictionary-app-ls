import React, { Component } from 'react'
import styles from './search_container.scss'

class SearchContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.searchContainer}>
        { this.props.children }
      </div>
    )
  }
}

export default SearchContainer
