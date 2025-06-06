import React, { useState } from 'react';
import { BookOpen, Video, MessageSquare, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would subscribe the user to a newsletter
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Learn Anything with AI-Powered Video Tutoring
              </h1>
              <p className="text-xl mb-8">
                Get personalized video explanations, interactive quizzes, and real-time feedback tailored to your learning style.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/learn" 
                  className="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                >
                  Start Learning
                </Link>
                <Link 
                  to="/about" 
                  className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-6 -left-6 w-full h-full bg-indigo-300 rounded-lg transform rotate-3"></div>
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-purple-300 rounded-lg transform -rotate-3"></div>
                <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg" 
                    alt="Student learning with AI tutor" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Tavus AI Tutor Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <MessageSquare className="h-7 w-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ask Questions</h3>
              <p className="text-gray-600">
                Ask any question about your subject and get immediate help from your AI tutor.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Video className="h-7 w-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Watch Personalized Videos</h3>
              <p className="text-gray-600">
                Receive custom video explanations tailored to your specific questions and learning style.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <BookOpen className="h-7 w-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Practice with Quizzes</h3>
              <p className="text-gray-600">
                Reinforce your learning with AI-generated quizzes that adapt to your knowledge level.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Award className="h-7 w-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-600">
                Monitor your learning journey with detailed progress tracking and performance insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Computer Science Student</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The AI tutor helped me understand complex algorithms through personalized video explanations. It's like having a private tutor available 24/7!"
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-sm text-gray-500">Physics Major</p>
                </div>
              </div>
              <p className="text-gray-600">
                "I was struggling with quantum mechanics until I started using this platform. The video explanations break down complex concepts in a way that makes sense to me."
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                  J
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Jessica Williams</h4>
                  <p className="text-sm text-gray-500">High School Student</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The quizzes helped me prepare for my exams. I love how the AI adapts to my learning pace and focuses on areas where I need more practice."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Learning Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who are learning faster and more effectively with our AI-powered video tutor.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-800 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-indigo-800 hover:bg-indigo-900 px-6 py-3 rounded-r-lg font-semibold transition-colors"
            >
              Get Started
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;