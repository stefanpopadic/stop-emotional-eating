import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Quiz } from './pages/Quiz';
import { Results } from './pages/Results';
import { Login } from './pages/Login';
import { Course } from './pages/Course';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/results/:type" element={<Results />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course" element={<Course />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}
