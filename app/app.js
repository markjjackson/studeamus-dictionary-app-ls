// Import main dependencies
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// Import store
import store from 'Redux/store'
import connect from 'Redux/connect'

// Import global styles
import styles from 'Styles/global.scss'

// Components
import Wrapper from 'Components/containers/app_wrapper/app_wrapper'
import SearchContainer from 'Components/containers/search_container/search_container'
import WordSearch from 'Components/inputs/word_search/word_search'
import ResultsContainer from 'Components/containers/results_container/results_container'
import Result from 'Components/result/result'

const mapResults = words => words.map((word, i) => <Result word={word} key={i}/>)

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { dictionary } = this.props
    return (
      <div>
        <Wrapper>
          <SearchContainer>
            <WordSearch/>
          </SearchContainer>
          <ResultsContainer>
            { mapResults(dictionary) }
          </ResultsContainer>
        </Wrapper>
      </div>
    )
  }
}

const ConnectedApp = connect(App)

ReactDOM.render(
  (
    <Provider store={store}>
      <ConnectedApp/>
    </Provider>
  ),
  document.getElementById('root')
)
