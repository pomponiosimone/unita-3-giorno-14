import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListArticle from './components/listArticle';  


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ListArticle />  
            </>
          }
        />
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;