import React from 'react';
import { BookOpen, Video, Brain, Zap, Users, Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-center mb-8">About Tavus AI Tutor</h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Tavus AI Tutor is a revolutionary educational platform that combines the power of conversational AI with dynamic video generation to create personalized learning experiences.
          </p>
          
          <p className="text-lg text-gray-700 mb-6">
            Our mission is to make high-quality education accessible to everyone by providing an AI tutor that adapts to each student's unique learning style, pace, and needs.
          </p>
          
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100 mt-8">
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <p className="text-gray-700">
              Using advanced AI technology from Tavus, our platform generates real-time video responses to your questions. The AI tutor analyzes your queries, creates personalized video explanations, and follows up with interactive quizzes to reinforce your learning.
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Video className="h-7 w-7 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Synthetic Video Responses</h3>
            <p className="text-gray-600">
              Our AI generates personalized video explanations that make complex topics easy to understand.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Brain className="h-7 w-7 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Adaptive Learning</h3>
            <p className="text-gray-600">
              The system adapts to your learning style and knowledge level, providing customized educational content.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Zap className="h-7 w-7 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-time Interaction</h3>
            <p className="text-gray-600">
              Get immediate responses to your questions with interactive video content generated on-the-fly.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <BookOpen className="h-7 w-7 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Comprehensive Curriculum</h3>
            <p className="text-gray-600">
              Access a wide range of subjects from mathematics and science to humanities and languages.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Users className="h-7 w-7 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized Experience</h3>
            <p className="text-gray-600">
              Each learning session is tailored to your specific needs, questions, and learning objectives.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Shield className="h-7 w-7 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Privacy-Focused</h3>
            <p className="text-gray-600">
              Your learning data is protected with enterprise-grade security and privacy measures.
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-16">
        <div className="bg-indigo-600 text-white rounded-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Our Technology</h2>
              <p className="mb-6">
                Tavus AI Tutor leverages cutting-edge AI technology to create synthetic video content that feels natural and engaging. Our platform combines:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Advanced natural language processing for understanding your questions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Synthetic video generation powered by Tavus</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Adaptive learning algorithms that personalize content</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Real-time content creation for immediate responses</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg" 
                alt="AI Technology" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">How does the video generation work?</h3>
            <p className="text-gray-600">
              Our platform uses Tavus AI technology to create synthetic video responses based on your questions. The AI analyzes your query, generates an educational response, and delivers it as a video featuring a virtual tutor.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Is this better than pre-recorded videos?</h3>
            <p className="text-gray-600">
              Yes! Unlike pre-recorded content, our AI tutor creates videos specifically for your questions and learning needs. This personalization helps you understand concepts more effectively and engage more deeply with the material.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">What subjects are covered?</h3>
            <p className="text-gray-600">
              We cover a wide range of subjects including mathematics, physics, chemistry, biology, history, literature, computer science, languages, and more. Our AI tutor can help with most academic subjects at various education levels.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">How accurate is the content?</h3>
            <p className="text-gray-600">
              Our AI is trained on high-quality educational materials and is regularly updated with the latest information. While the AI strives for accuracy, we recommend verifying important information with official textbooks or educational resources.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;