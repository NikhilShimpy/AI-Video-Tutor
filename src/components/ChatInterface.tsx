import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader } from 'lucide-react';
import { generateTutorVideo, generateQuizQuestions } from '../api/tavusApi';
import { Question } from '../types';

interface ChatInterfaceProps {
  onVideoGenerated: (videoUrl: string, topic: string) => void;
  onQuestionsGenerated: (questions: Question[]) => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ 
  onVideoGenerated, 
  onQuestionsGenerated 
}) => {
  const [messages, setMessages] = useState<Array<{text: string; sender: 'user' | 'ai'}>>([
    {
      text: "Hi there! I'm your AI tutor. What would you like to learn about today?",
      sender: 'ai'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { text: input, sender: 'user' as const };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Extract topic from user input
    const topic = extractTopic(input);
    
    // Add thinking message
    setMessages(prev => [...prev, { 
      text: "I'm thinking about how to help you with that...", 
      sender: 'ai' 
    }]);
    
    try {
      // Generate video response
      const videoResponse = await generateTutorVideo(input, topic);
      
      if (videoResponse.success) {
        // Generate quiz questions
        const questions = await generateQuizQuestions(topic, 'intermediate');
        
        // Update messages with AI response
        setMessages(prev => {
          // Remove the "thinking" message
          const withoutThinking = prev.slice(0, -1);
          
          return [
            ...withoutThinking, 
            { 
              text: `I've created a video explanation about ${topic}. Let me know if you have any questions after watching!`, 
              sender: 'ai' 
            }
          ];
        });
        
        // Pass video URL and questions to parent components
        onVideoGenerated(videoResponse.data.videoUrl, topic);
        onQuestionsGenerated(questions);
      } else {
        setMessages(prev => {
          // Remove the "thinking" message
          const withoutThinking = prev.slice(0, -1);
          
          return [
            ...withoutThinking, 
            { 
              text: "I'm sorry, I couldn't generate a video response. Please try again with a different question.", 
              sender: 'ai' 
            }
          ];
        });
      }
    } catch (error) {
      console.error('Error in chat:', error);
      setMessages(prev => {
        // Remove the "thinking" message
        const withoutThinking = prev.slice(0, -1);
        
        return [
          ...withoutThinking, 
          { 
            text: "I'm sorry, something went wrong. Please try again.", 
            sender: 'ai' 
          }
        ];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const extractTopic = (input: string): string => {
    // Simple extraction - in a real app, this would use NLP
    const topics = [
      'mathematics', 'algebra', 'calculus', 'physics', 'chemistry', 
      'biology', 'history', 'literature', 'computer science', 'programming'
    ];
    
    const lowerInput = input.toLowerCase();
    for (const topic of topics) {
      if (lowerInput.includes(topic)) {
        return topic;
      }
    }
    
    // Default to a general topic if none is found
    return 'general knowledge';
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 rounded-lg shadow-md overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.sender === 'user' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white border border-gray-200 text-gray-800'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything about your studies..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="bg-indigo-600 text-white rounded-lg p-2 hover:bg-indigo-700 transition-colors disabled:bg-indigo-400"
          >
            {isLoading ? <Loader className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;