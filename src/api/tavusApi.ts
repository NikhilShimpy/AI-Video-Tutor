import axios from 'axios';
import { TavusApiResponse } from '../types';

// In a real application, this would be an environment variable
const API_BASE_URL = 'https://api.tavus.io';
const MOCK_API = true; // Set to false when using real Tavus API

// This is a mock implementation for development purposes
const mockGenerateVideo = async (prompt: string, topic: string): Promise<TavusApiResponse> => {
  console.log(`Generating video for prompt: ${prompt} on topic: ${topic}`);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return {
    success: true,
    data: {
      videoUrl: 'https://example.com/mock-video.mp4',
      processingStatus: 'completed'
    }
  };
};

export const generateTutorVideo = async (
  prompt: string, 
  topic: string
): Promise<TavusApiResponse> => {
  if (MOCK_API) {
    return mockGenerateVideo(prompt, topic);
  }
  
  try {
    const response = await axios.post(`${API_BASE_URL}/generate`, {
      prompt,
      topic,
      format: 'video',
      style: 'educational'
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.TAVUS_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error generating video:', error);
    return {
      success: false,
      data: {
        videoUrl: '',
        processingStatus: 'failed'
      },
      error: 'Failed to generate video. Please try again later.'
    };
  }
};

export const checkVideoStatus = async (videoId: string): Promise<string> => {
  if (MOCK_API) {
    return 'completed';
  }
  
  try {
    const response = await axios.get(`${API_BASE_URL}/videos/${videoId}/status`, {
      headers: {
        'Authorization': `Bearer ${process.env.TAVUS_API_KEY}`
      }
    });
    
    return response.data.status;
  } catch (error) {
    console.error('Error checking video status:', error);
    return 'failed';
  }
};

export const generateQuizQuestions = async (topic: string, difficulty: string): Promise<Question[]> => {
  // In a real app, this would call an AI service to generate questions
  // For now, we'll return mock data
  return [
    {
      id: '1',
      text: `What is the main concept of ${topic}?`,
      type: 'open-ended'
    },
    {
      id: '2',
      text: `Which of the following best describes ${topic}?`,
      options: [
        'Option A - Basic description',
        'Option B - Advanced concept',
        'Option C - Related but incorrect',
        'Option D - Completely unrelated'
      ],
      correctAnswer: 'Option B - Advanced concept',
      explanation: `This is the correct answer because ${topic} is fundamentally about...`,
      type: 'multiple-choice'
    },
    {
      id: '3',
      text: `How would you apply ${topic} in a real-world scenario?`,
      type: 'open-ended'
    }
  ];
};