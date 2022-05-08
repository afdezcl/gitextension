import { Route } from 'wouter'
import { HomePage } from './pages/Home/HomePage'
import { SearchResultsPage } from './pages/SearchResults/SearchResultsPage'

function App() {
  return (
    <>      
      <Route path='/:user/:repo' component={SearchResultsPage} />
      <Route path='/' component={HomePage} />
    </>
  )
}

export default App
