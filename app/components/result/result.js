import React, { Component } from 'react'
import styles from './result.scss'
import connect from 'Redux/connect'

const getDefinition = (def, i) => {
  return (
    <div>
      <span className={styles.definitionsNumber}>{ '~ ' }</span>{ def }
    </div>
  )
}

const mapDefinitions = defs => defs.map((def, i) => {
  return (
    <div
      className={styles.definitionContainer}
      key={i}
    >
    { Array.isArray(def) ? mapDefinitions(def) : getDefinition(def, i) }
    </div>
  )
})

class Result extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      key,
      title_orthography,
      main_notes,
      gender,
      declension,
      senses
    } = this.props.word
    return (
      <div
        className={styles.result}
      >
        <div>
          <span className={styles.latin}>{ key + ' ' }</span>
          <span className={styles.latinOrth}>{ title_orthography }</span>
          <span className={styles.gender}>{ gender ? ` ${gender.toLowerCase()}` : null }</span>
          <span className={styles.declension}>{ declension ? ` ${declension}` : null }</span>
        </div>

        <div className={styles.grammarInfo}>
          { main_notes }
        </div>

        { mapDefinitions(senses) }

      </div>
    )
  }
}

export default connect(Result)
