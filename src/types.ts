export interface User {
  id: string;
  name: string;
  email: string;
  preferences: {
    subjects: string[];
    learningStyle: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
  };
}

export interface VideoResponse {
  id: string;
  url: string;
  topic: string;
  duration: number;
  createdAt: string;
}

export interface Question {
  id: string;
  text: string;
  options?: string[];
  correctAnswer?: string;
  explanation?: string;
  type: 'open-ended' | 'multiple-choice';
}

export interface LearningSession {
  id: string;
  topic: string;
  questions: Question[];
  videoResponses: VideoResponse[];
  progress: number;
  createdAt: string;
}

export interface TavusApiResponse {
  success: boolean;
  data: {
    videoUrl: string;
    processingStatus: 'pending' | 'processing' | 'completed' | 'failed';
  };
  error?: string;
}