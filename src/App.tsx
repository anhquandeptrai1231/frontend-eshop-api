import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
function App() {
  return (
    <Router>
      <nav>
        <Link to="/categories">Danh mục</Link>
      </nav>
      <Routes>
         <Route path="/categories" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}
export default App;