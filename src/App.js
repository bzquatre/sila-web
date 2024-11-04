import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import BookDetail from './pages/BookDetail';
import BookList from './pages/BooksList';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/" element={<BookList />} />
        <Route path="/books/:bookId" element={<BookDetail />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all for unmatched routes */}
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
