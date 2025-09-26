import React from 'react';
import { 
  Zap, 
  Target, 
  Code, 
  Users, 
  TrendingUp, 
  Lightbulb,
  CheckCircle,
  Clock,
  Star,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Project, AIAnalysis } from '../../types';
import Card from '../ui/Card';

interface AIProjectSummaryProps {
  project: Project;
  analysis: AIAnalysis;
}

const AIProjectSummary: React.FC<AIProjectSummaryProps> = ({ project, analysis }) => {
  const summaryPoints = [
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Project Vision',
      content: 'Smart Campus Energy Management System aims to revolutionize how universities monitor and optimize energy consumption, potentially saving millions in operational costs while reducing environmental impact.'
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: 'Technical Architecture',
      content: 'Built with modern full-stack technologies including React for the frontend, Node.js backend, Python for ML models, and IoT sensors for data collection. The system uses MongoDB for data storage and Socket.io for real-time updates.'
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Current Progress',
      content: `The project is ${project.completionPercentage}% complete with core monitoring functionality implemented. The dashboard displays real-time energy data, and basic ML models are operational for consumption prediction.`
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Team & Collaboration',
      content: `Originally developed by ${project.originalAuthor.name} from ${project.originalAuthor.university}, the project has attracted ${project.contributors.length} additional contributors with expertise in IoT, data science, and hardware engineering.`
    }
  ];

  const keyStrengths = [
    'Comprehensive IoT sensor integration',
    'Real-time data visualization dashboard',
    'Machine learning-powered predictions',
    'Scalable architecture design',
    'Strong technical documentation',
    'Active contributor community'
  ];

  const improvementAreas = [
    'Security and authentication system',
    'Mobile application development',
    'Advanced analytics features',
    'Automated testing coverage',
    'Performance optimization',
    'API documentation'
  ];

  const impactMetrics = [
    { label: 'Potential Energy Savings', value: '25%', icon: <Zap className="w-4 h-4" /> },
    { label: 'Cost Reduction', value: '$2M+', icon: <TrendingUp className="w-4 h-4" /> },
    { label: 'Buildings Monitored', value: '50+', icon: <Target className="w-4 h-4" /> },
    { label: 'Data Points/Day', value: '100K+', icon: <Star className="w-4 h-4" /> }
  ];

  return (
    <div className="space-y-8">
      {/* AI Summary Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-8 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Zap className="w-8 h-8 text-purple-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">AI Project Summary & Continuation Guide</h2>
              <p className="text-lg text-gray-700 mb-4">
                Comprehensive analysis and intelligent recommendations for project revival and continuation.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>Generated {analysis.generatedAt.toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Award className="w-4 h-4" />
                  <span>Health Score: {analysis.healthScore}/100</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>{project.completionPercentage}% Complete</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Executive Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Executive Summary</h3>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-4">
              The Smart Campus Energy Management System represents a significant opportunity in the growing smart campus market. 
              With universities spending billions on energy costs annually, this IoT-powered solution addresses a critical need 
              for intelligent energy monitoring and optimization.
            </p>
            <p className="leading-relaxed">
              The project demonstrates strong technical foundations with a modern tech stack and practical implementation. 
              Current completion at {project.completionPercentage}% indicates substantial progress, with core monitoring 
              functionality operational and machine learning models showing promising results for energy prediction.
            </p>
          </div>
        </Card>
      </motion.div>

      {/* Key Summary Points */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {summaryPoints.map((point, index) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <Card hover className="p-6 h-full">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  {point.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{point.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{point.content}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Impact Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Projected Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <div key={metric.label} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3">
                  <div className="text-green-600">
                    {metric.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Strengths and Areas for Improvement */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Card className="p-6">
            <div className="flex items-center space-x-2 mb-4">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-900">Key Strengths</h3>
            </div>
            <div className="space-y-3">
              {keyStrengths.map((strength, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">{strength}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Card className="p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Lightbulb className="w-5 h-5 text-orange-600" />
              <h3 className="text-lg font-semibold text-gray-900">Improvement Opportunities</h3>
            </div>
            <div className="space-y-3">
              {improvementAreas.map((area, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Continuation Strategy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Recommended Continuation Strategy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold text-lg">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Immediate Actions</h4>
              <p className="text-sm text-gray-600">
                Focus on security implementation and bug fixes to stabilize the current codebase
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold text-lg">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Short-term Goals</h4>
              <p className="text-sm text-gray-600">
                Develop mobile app and enhance analytics capabilities for better user experience
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold text-lg">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Long-term Vision</h4>
              <p className="text-sm text-gray-600">
                Scale to multi-campus deployments and explore commercial opportunities
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default AIProjectSummary;