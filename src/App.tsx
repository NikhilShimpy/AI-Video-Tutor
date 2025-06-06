import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LearningPage from './pages/LearningPage';
import AboutPage from './pages/AboutPage';
import Auth from './components/Auth';

const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/\" element={<HomePage />} />
              <Route path="/login" element={<Auth />} />
              <Route path="/learn" element={<PrivateRoute element={<LearningPage />} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/subjects" element={<PrivateRoute element={<LearningPage />} />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;