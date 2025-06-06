import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ChatInterface from '../components/ChatInterface';
import VideoPlayer from '../components/VideoPlayer';
import QuizComponent from '../components/QuizComponent';
import SubjectSelector from '../components/SubjectSelector';
import { Question } from '../types';

interface Subject {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

const LearningPage: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [currentVideo, setCurrentVideo] = useState<{ url: string; topic: string } | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const handleSubjectSelect = (subject: Subject) => {
    setSelectedSubject(subject);
  };

  const handleVideoGenerated = (videoUrl: string, topic: string) => {
    setCurrentVideo({ url: videoUrl, topic });
    setShowQuiz(false);
    setQuizCompleted(false);
  };

  const handleQuestionsGenerated = (newQuestions: Question[]) => {
    setQuestions(newQuestions);
  };

  const handleVideoComplete = () => {
    if (questions.length > 0) {
      setShowQuiz(true);
    }
  };

  const handleQuizComplete = (score: number) => {
    setQuizScore(score);
    setQuizCompleted(true);
  };

  const resetLearning = () => {
    setSelectedSubject(null);
    setCurrentVideo(null);
    setQuestions([]);
    setShowQuiz(false);
    setQuizCompleted(false);
  };

  if (!selectedSubject) {
    return (
      <div className="container mx-auto px-4 py-8">
        <SubjectSelector onSelectSubject={handleSubjectSelect} />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center">
        <button 
          onClick={resetLearning}
          className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
          <span>Back to Subjects</span>
        </button>
        <h1 className="text-2xl font-bold text-center flex-1 pr-20">
          Learning: {selectedSubject.name}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          {currentVideo && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Video Explanation: {currentVideo.topic}</h2>
              <VideoPlayer 
                src={currentVideo.url} 
                title={`Explanation of ${currentVideo.topic}`}
                onComplete={handleVideoComplete}
              />
            </div>
          )}
          
          {showQuiz && questions.length > 0 && (
            <QuizComponent 
              questions={questions} 
              onComplete={handleQuizComplete}
            />
          )}
          
          {quizCompleted && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Learning Summary</h2>
              <p className="mb-2">
                <span className="font-medium">Topic:</span> {currentVideo?.topic}
              </p>
              <p className="mb-2">
                <span className="font-medium">Quiz Score:</span> {quizScore}%
              </p>
              <p className="mb-4">
                {quizScore >= 80 
                  ? "Great job! You've mastered this topic." 
                  : quizScore >= 60 
                    ? "Good progress! Review the areas you missed to improve your understanding."
                    : "You might need more practice with this topic. Consider reviewing the video again."}
              </p>
              <button
                onClick={() => setShowQuiz(false)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Continue Learning
              </button>
            </div>
          )}
        </div>
        
        <div className="h-[600px]">
          <ChatInterface 
            onVideoGenerated={handleVideoGenerated}
            onQuestionsGenerated={handleQuestionsGenerated}
          />
        </div>
      </div>
    </div>
  );
};

export default LearningPage;