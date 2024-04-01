import './App.css'
import { Route,Routes } from 'react-router-dom'
import BookPage from './Pages/BookPage.jsx'
import AuthorPage from './Pages/AuthorPage.jsx'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<BookPage/>} />
        <Route path='/author' element={<AuthorPage/>} />
      </Routes>
    </div>
  )
}

export default App