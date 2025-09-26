export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'student' | 'contributor' | 'mentor';
  avatar?: string;
  bio?: string;
  skills: string[];
  githubProfile?: string;
  university?: string;
  year?: number;
  contributions: string[];
  createdAt: Date;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  techStack: string[];
  domain: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  repoUrl?: string;
  demoUrl?: string;
  videoUrl?: string;
  status: 'abandoned' | 'active' | 'completed';
  originalAuthor: User;
  contributors: User[];
  adoptionRequests: AdoptionRequest[];
  aiAnalysis?: AIAnalysis;
  tags: string[];
  completionPercentage: number;
  stars: number;
  lastUpdated: Date;
  createdAt: Date;
}

export interface AdoptionRequest {
  _id: string;
  projectId: string;
  requesterId: string;
  requester: User;
  message: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
}

export interface AIAnalysis {
  healthScore: number;
  completionPercentage: number;
  missingModules: string[];
  bugPredictions: string[];
  recommendations: string[];
  roadmap: RoadmapItem[];
  pitchDeck: PitchDeck;
  generatedAt: Date;
}

export interface RoadmapItem {
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  estimatedTime: string;
  prerequisites: string[];
}

export interface PitchDeck {
  problem: string;
  solution: string;
  marketSize: string;
  techStack: string[];
  roadmap: string[];
  teamNeeds: string[];
}

export interface Collaboration {
  _id: string;
  projectId: string;
  participants: User[];
  messages: Message[];
  milestones: Milestone[];
  createdAt: Date;
}

export interface Message {
  _id: string;
  senderId: string;
  sender: User;
  content: string;
  timestamp: Date;
}

export interface Milestone {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  completedBy?: string;
  completedAt?: Date;
  createdAt: Date;
}