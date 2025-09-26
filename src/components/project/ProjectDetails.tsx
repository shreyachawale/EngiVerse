import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, 
  GitBranch, 
  Users, 
  Calendar, 
  Code, 
  ExternalLink, 
  Heart,
  MessageCircle,
  Download,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  Target,
  Lightbulb,
  Award,
  Activity,
  BarChart3,
  FileText,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '../../types';
import Card from '../ui/Card';
import Button from '../ui/Button';
import AIHealthReport from './AIHealthReport';
import AIProjectSummary from './AIProjectSummary';
import NextStepsRoadmap from './NextStepsRoadmap';
import PitchDeck from './PitchDeck';
import ProjectTimeline from './ProjectTimeline';
import CollaborationHub from './CollaborationHub';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);
  const [hasAdopted, setHasAdopted] = useState(false);

  useEffect(() => {
    fetchProject();
  }, [id]);

  const fetchProject = async () => {
    try {
      setIsLoading(true);
      // Mock project data with comprehensive AI analysis
      const mockProject: Project = {
        _id: id || '1',
        title: 'Smart Campus Energy Management System',
        description: 'An IoT-based energy management system for university campuses that monitors and optimizes energy consumption across buildings. Features real-time monitoring, predictive analytics, and automated control systems. The project includes hardware sensors, a React dashboard, and machine learning models for energy prediction.',
        techStack: ['React', 'Node.js', 'Python', 'MongoDB', 'Arduino', 'TensorFlow', 'Socket.io', 'Express'],
        domain: 'IoT',
        difficulty: 'advanced',
        repoUrl: 'https://github.com/student/smart-campus-energy',
        demoUrl: 'https://smart-campus-demo.vercel.app',
        videoUrl: 'https://youtube.com/watch?v=demo123',
        status: 'abandoned',
        originalAuthor: {
          _id: '1',
          name: 'Alex Rodriguez',
          email: 'alex@university.edu',
          role: 'student',
          avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
          bio: 'Final year Computer Engineering student passionate about IoT and sustainability',
          skills: ['React', 'IoT', 'Python', 'Machine Learning'],
          githubProfile: 'https://github.com/alexrodriguez',
          university: 'MIT',
          year: 4,
          contributions: [],
          createdAt: new Date('2023-08-15')
        },
        contributors: [
          {
            _id: '2',
            name: 'Sarah Chen',
            email: 'sarah@university.edu',
            role: 'contributor',
            avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
            skills: ['Python', 'Data Science'],
            contributions: [],
            createdAt: new Date()
          },
          {
            _id: '3',
            name: 'Mike Johnson',
            email: 'mike@university.edu',
            role: 'contributor',
            avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
            skills: ['Arduino', 'Hardware'],
            contributions: [],
            createdAt: new Date()
          }
        ],
        adoptionRequests: [],
        tags: ['iot', 'energy', 'sustainability', 'machine-learning', 'react'],
        completionPercentage: 68,
        stars: 34,
        lastUpdated: new Date('2024-01-10'),
        createdAt: new Date('2023-08-15'),
        aiAnalysis: {
          healthScore: 78,
          completionPercentage: 68,
          missingModules: [
            'User Authentication System',
            'Data Encryption Layer',
            'Mobile App Interface',
            'Advanced Analytics Dashboard',
            'Automated Reporting System'
          ],
          bugPredictions: [
            'Memory leak in WebSocket connections (sensor-data.js:45)',
            'Potential race condition in data aggregation (analytics.py:123)',
            'Unhandled promise rejection in API calls (api-client.js:67)'
          ],
          recommendations: [
            'Implement JWT-based authentication for secure access',
            'Add data validation and sanitization layers',
            'Optimize database queries for better performance',
            'Create comprehensive API documentation',
            'Add unit tests for critical components',
            'Implement error logging and monitoring'
          ],
          roadmap: [
            {
              title: 'Security Enhancement',
              description: 'Implement comprehensive security measures including authentication, authorization, and data encryption',
              priority: 'high',
              estimatedTime: '2-3 weeks',
              prerequisites: ['Database schema review', 'Security audit']
            },
            {
              title: 'Mobile Application',
              description: 'Develop React Native mobile app for remote monitoring and control',
              priority: 'medium',
              estimatedTime: '4-6 weeks',
              prerequisites: ['API stabilization', 'UI/UX design']
            },
            {
              title: 'Advanced Analytics',
              description: 'Enhance ML models for better energy prediction and optimization recommendations',
              priority: 'medium',
              estimatedTime: '3-4 weeks',
              prerequisites: ['Data collection improvement', 'Model validation']
            },
            {
              title: 'Scalability Improvements',
              description: 'Optimize for handling multiple campus buildings and thousands of sensors',
              priority: 'low',
              estimatedTime: '2-3 weeks',
              prerequisites: ['Performance testing', 'Infrastructure planning']
            }
          ],
          pitchDeck: {
            problem: 'Universities waste 20-30% of energy due to inefficient monitoring and manual control systems, leading to millions in unnecessary costs and environmental impact.',
            solution: 'Smart Campus Energy Management System provides real-time monitoring, predictive analytics, and automated optimization to reduce energy consumption by up to 25%.',
            marketSize: '$8.2B global smart campus market growing at 12.4% CAGR, with 4,000+ universities worldwide seeking energy efficiency solutions.',
            techStack: ['React', 'Node.js', 'Python', 'TensorFlow', 'IoT Sensors', 'MongoDB'],
            roadmap: [
              'Complete security implementation and testing',
              'Launch mobile application for facility managers',
              'Integrate with existing campus management systems',
              'Scale to multi-campus deployments',
              'Add AI-powered maintenance predictions'
            ],
            teamNeeds: [
              'Full-stack Developer (React/Node.js)',
              'IoT Hardware Engineer',
              'Data Scientist/ML Engineer',
              'UI/UX Designer',
              'DevOps Engineer'
            ]
          },
          generatedAt: new Date('2024-01-15')
        }
      };

      setProject(mockProject);
    } catch (error) {
      console.error('Error fetching project:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdopt = async () => {
    try {
      // API call to adopt project
      setHasAdopted(true);
      // Show success message
    } catch (error) {
      console.error('Error adopting project:', error);
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FileText className="w-4 h-4" /> },
    { id: 'health', label: 'Health Report', icon: <Activity className="w-4 h-4" /> },
    { id: 'summary', label: 'AI Summary', icon: <Zap className="w-4 h-4" /> },
    { id: 'roadmap', label: 'Roadmap', icon: <Target className="w-4 h-4" /> },
    { id: 'pitch', label: 'Pitch Deck', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'timeline', label: 'Timeline', icon: <Clock className="w-4 h-4" /> },
    { id: 'collaborate', label: 'Collaborate', icon: <Users className="w-4 h-4" /> }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Project Not Found</h2>
          <p className="text-gray-600 mb-4">The project you're looking for doesn't exist.</p>
          <Link to="/discover">
            <Button>Back to Discover</Button>
          </Link>
        </div>
      </div>
    );
  }

  const statusColors = {
    abandoned: 'bg-red-100 text-red-800 border-red-200',
    active: 'bg-green-100 text-green-800 border-green-200',
    completed: 'bg-blue-100 text-blue-800 border-blue-200'
  };

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800 border-green-200',
    intermediate: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    advanced: 'bg-red-100 text-red-800 border-red-200'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card className="overflow-hidden">
            <div className="relative h-48 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative p-8 h-full flex items-end">
                <div className="text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${statusColors[project.status]}`}>
                      {project.status}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${difficultyColors[project.difficulty]}`}>
                      {project.difficulty}
                    </span>
                    <div className="flex items-center space-x-1 text-sm">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{project.stars}</span>
                    </div>
                  </div>
                  <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
                  <p className="text-blue-100 text-lg max-w-3xl">{project.description}</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-3">
                    <img
                      src={project.originalAuthor.avatar}
                      alt={project.originalAuthor.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{project.originalAuthor.name}</p>
                      <p className="text-sm text-gray-500">{project.originalAuthor.university} • Year {project.originalAuthor.year}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{project.contributors.length + 1} contributors</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitBranch className="w-4 h-4" />
                      <span>{project.completionPercentage}% complete</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Updated {project.lastUpdated.toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Code className="w-5 h-5" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  <Button variant="outline" size="sm">
                    <Heart className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button onClick={handleAdopt} disabled={hasAdopted}>
                    {hasAdopted ? 'Adopted' : 'Adopt Project'}
                  </Button>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Overview</h2>
                  <div className="prose max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                    <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">Key Features</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Real-time energy consumption monitoring across campus buildings</li>
                      <li>• Machine learning-powered energy usage prediction and optimization</li>
                      <li>• Interactive dashboard with data visualization and analytics</li>
                      <li>• IoT sensor network for comprehensive data collection</li>
                      <li>• Automated control systems for energy-efficient operations</li>
                    </ul>
                  </div>
                </Card>

                <Card className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Contributors</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <img
                        src={project.originalAuthor.avatar}
                        alt={project.originalAuthor.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium text-gray-900">{project.originalAuthor.name}</h3>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Original Author</span>
                        </div>
                        <p className="text-sm text-gray-600">{project.originalAuthor.bio}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {project.originalAuthor.skills.slice(0, 4).map((skill, index) => (
                            <span key={index} className="px-2 py-1 bg-white text-blue-700 text-xs rounded border border-blue-200">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {project.contributors.map((contributor) => (
                      <div key={contributor._id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <img
                          src={contributor.avatar}
                          alt={contributor.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-medium text-gray-900">{contributor.name}</h3>
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Contributor</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {contributor.skills.slice(0, 3).map((skill, index) => (
                              <span key={index} className="px-2 py-1 bg-white text-gray-700 text-xs rounded border">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Stats</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Completion</span>
                        <span className="font-medium">{project.completionPercentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${project.completionPercentage}%` }}
                        ></div>
                      </div>
                    </div>

                    {project.aiAnalysis && (
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">AI Health Score</span>
                          <span className="font-medium">{project.aiAnalysis.healthScore}/100</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${project.aiAnalysis.healthScore}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{project.stars}</div>
                        <div className="text-sm text-gray-600">Stars</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{project.contributors.length + 1}</div>
                        <div className="text-sm text-gray-600">Contributors</div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button className="w-full" onClick={handleAdopt}>
                      <Users className="w-4 h-4 mr-2" />
                      Adopt Project
                    </Button>
                    <Button variant="outline" className="w-full">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Start Discussion
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download Report
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'health' && project.aiAnalysis && (
            <AIHealthReport analysis={project.aiAnalysis} />
          )}

          {activeTab === 'summary' && project.aiAnalysis && (
            <AIProjectSummary project={project} analysis={project.aiAnalysis} />
          )}

          {activeTab === 'roadmap' && project.aiAnalysis && (
            <NextStepsRoadmap roadmap={project.aiAnalysis.roadmap} />
          )}

          {activeTab === 'pitch' && project.aiAnalysis && (
            <PitchDeck pitchDeck={project.aiAnalysis.pitchDeck} project={project} />
          )}

          {activeTab === 'timeline' && (
            <ProjectTimeline project={project} />
          )}

          {activeTab === 'collaborate' && (
            <CollaborationHub project={project} />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;