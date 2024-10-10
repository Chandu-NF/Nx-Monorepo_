import { Box } from '@mui/joy';
import { BookList } from '@org/feature';
import { HeaderStyles } from '@org/ui';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Box sx={HeaderStyles}>
        <Link
          style={{ color: 'white', textDecoration: 'none', fontSize: '25px' }}
          to="/"
        >
          BookStore |
        </Link>
        <Link
          style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}
          to="/feature"
        >
          {' '}
          Book Feature
        </Link>
      </Box>
      <Routes>
        <Route path="/feature" element={<BookList />} />
      </Routes>
    </Router>
  );
}
export default App;
