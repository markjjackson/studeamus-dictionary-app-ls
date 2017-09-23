import React, { Component } from 'react'
import styles from './results_container.scss'

class ResultsContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.resultsContainer}>
        { this.props.children }
      </div>
    )
  }
}

export default ResultsContainer
