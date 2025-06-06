import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, User, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8" />
            <span className="text-xl font-bold">Tavus AI Tutor</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-indigo-200 transition-colors">Home</Link>
            {user && (
              <>
                <Link to="/subjects" className="hover:text-indigo-200 transition-colors">Subjects</Link>
                <Link to="/sessions" className="hover:text-indigo-200 transition-colors">My Sessions</Link>
              </>
            )}
            <Link to="/about" className="hover:text-indigo-200 transition-colors">About</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/settings\" className="hover:text-indigo-200 transition-colors">
                  <Settings className="h-5 w-5" />
                </Link>
                <Link to="/profile" className="hover:text-indigo-200 transition-colors">
                  <User className="h-5 w-5" />
                </Link>
                <button
                  onClick={handleSignOut}
                  className="hover:text-indigo-200 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;