import React, { useState } from 'react';
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react';
import { Question } from '../types';

interface QuizComponentProps {
  questions: Question[];
  onComplete: (score: number) => void;
}

const QuizComponent: React.FC<QuizComponentProps> = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer: string) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: answer
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate score for multiple choice questions
      let correctAnswers = 0;
      questions.forEach(question => {
        if (
          question.type === 'multiple-choice' && 
          question.correctAnswer && 
          answers[question.id] === question.correctAnswer
        ) {
          correctAnswers++;
        }
      });
      
      const finalScore = Math.round((correctAnswers / questions.filter(q => q.type === 'multiple-choice').length) * 100);
      setScore(finalScore);
      setShowResults(true);
      onComplete(finalScore);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const renderQuestion = () => {
    if (!currentQuestion) return null;

    return (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">{currentQuestion.text}</h3>
        
        {currentQuestion.type === 'multiple-choice' && currentQuestion.options && (
          <div className="space-y-2">
            {currentQuestion.options.map((option, index) => (
              <div 
                key={index}
                className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                  answers[currentQuestion.id] === option 
                    ? 'border-indigo-500 bg-indigo-50' 
                    : 'border-gray-300 hover:border-indigo-300'
                }`}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
        
        {currentQuestion.type === 'open-ended' && (
          <textarea
            value={answers[currentQuestion.id] || ''}
            onChange={(e) => handleAnswer(e.target.value)}
            placeholder="Type your answer here..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[120px]"
          />
        )}
      </div>
    );
  };

  const renderResults = () => {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className="inline-block p-4 bg-indigo-100 rounded-full mb-4">
            {score >= 70 ? (
              <CheckCircle className="h-12 w-12 text-green-500" />
            ) : (
              <HelpCircle className="h-12 w-12 text-yellow-500" />
            )}
          </div>
          <h2 className="text-2xl font-bold">Quiz Complete!</h2>
          <p className="text-gray-600 mt-2">
            You scored {score}% on the multiple-choice questions.
          </p>
        </div>
        
        <div className="space-y-6 mt-8">
          {questions.map((question, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-medium">{question.text}</h3>
                {question.type === 'multiple-choice' && question.correctAnswer && (
                  <div>
                    {answers[question.id] === question.correctAnswer ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                )}
              </div>
              
              <div className="mt-2">
                {question.type === 'multiple-choice' ? (
                  <div>
                    <p className="font-medium">Your answer: <span className="font-normal">{answers[question.id] || 'Not answered'}</span></p>
                    {question.correctAnswer && (
                      <p className="font-medium mt-1">Correct answer: <span className="font-normal">{question.correctAnswer}</span></p>
                    )}
                    {question.explanation && (
                      <p className="mt-2 text-gray-600">{question.explanation}</p>
                    )}
                  </div>
                ) : (
                  <div>
                    <p className="font-medium">Your response:</p>
                    <p className="mt-1 p-2 bg-gray-50 rounded">{answers[question.id] || 'Not answered'}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Knowledge Check</h2>
        {!showResults && (
          <div className="flex items-center mt-2">
            <div className="h-2 bg-gray-200 rounded-full flex-1">
              <div 
                className="h-2 bg-indigo-600 rounded-full" 
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
            <span className="ml-2 text-sm text-gray-600">
              {currentQuestionIndex + 1} of {questions.length}
            </span>
          </div>
        )}
      </div>
      
      {showResults ? renderResults() : renderQuestion()}
      
      {!showResults && (
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;