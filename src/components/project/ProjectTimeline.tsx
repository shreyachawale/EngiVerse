import React from 'react';
import { Calendar, GitCommitVertical as GitCommit, Users, Code, Star, MessageCircle, Upload, CheckCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '../../types';
import Card from '../ui/Card';

interface ProjectTimelineProps {
  project: Project;
}

const ProjectTimeline: React.FC<ProjectTimelineProps> = ({ project }) => {
  const timelineEvents = [
    {
      id: 1,
      type: 'creation',
      title: 'Project Created',
      description: `${project.originalAuthor.name} uploaded the initial project to EngiVerse`,
      date: project.createdAt,
      icon: <Upload className="w-4 h-4" />,
      color: 'bg-blue-500',
      user: project.originalAuthor
    },
    {
      id: 2,
      type: 'commit',
      title: 'Initial Codebase',
      description: 'Core IoT monitoring system implemented with React dashboard',
      date: new Date('2023-08-20'),
      icon: <Code className="w-4 h-4" />,
      color: 'bg-green-500',
      user: project.originalAuthor
    },
    {
      id: 3,
      type: 'milestone',
      title: 'First Demo Release',
      description: 'Basic energy monitoring dashboard with real-time data visualization',
      date: new Date('2023-09-15'),
      icon: <CheckCircle className="w-4 h-4" />,
      color: 'bg-purple-500',
      user: project.originalAuthor
    },
    {
      id: 4,
      type: 'contributor',
      title: 'Sarah Chen Joined',
      description: 'Added machine learning capabilities for energy prediction',
      date: new Date('2023-10-02'),
      icon: <Users className="w-4 h-4" />,
      color: 'bg-orange-500',
      user: project.contributors[0]
    },
    {
      id: 5,
      type: 'commit',
      title: 'ML Model Integration',
      description: 'Implemented TensorFlow models for energy consumption prediction',
      date: new Date('2023-10-15'),
      icon: <Code className="w-4 h-4" />,
      color: 'bg-green-500',
      user: project.contributors[0]
    },
    {
      id: 6,
      type: 'contributor',
      title: 'Mike Johnson Joined',
      description: 'Enhanced hardware integration and sensor network optimization',
      date: new Date('2023-11-01'),
      icon: <Users className="w-4 h-4" />,
      color: 'bg-orange-500',
      user: project.contributors[1]
    },
    {
      id: 7,
      type: 'milestone',
      title: 'Beta Testing Phase',
      description: 'Deployed system for testing in 3 campus buildings',
      date: new Date('2023-11-20'),
      icon: <CheckCircle className="w-4 h-4" />,
      color: 'bg-purple-500',
      user: project.originalAuthor
    },
    {
      id: 8,
      type: 'issue',
      title: 'Security Concerns Identified',
      description: 'AI analysis revealed authentication and data encryption gaps',
      date: new Date('2023-12-10'),
      icon: <MessageCircle className="w-4 h-4" />,
      color: 'bg-red-500',
      user: null
    },
    {
      id: 9,
      type: 'status',
      title: 'Project Marked as Abandoned',
      description: 'Original team graduated, project needs new contributors',
      date: new Date('2024-01-10'),
      icon: <Clock className="w-4 h-4" />,
      color: 'bg-gray-500',
      user: null
    },
    {
      id: 10,
      type: 'ai',
      title: 'AI Analysis Completed',
      description: 'Comprehensive health report and roadmap generated',
      date: new Date('2024-01-15'),
      icon: <Star className="w-4 h-4" />,
      color: 'bg-yellow-500',
      user: null
    }
  ];

  const getEventTypeLabel = (type: string) => {
    const labels = {
      creation: 'Project Launch',
      commit: 'Code Update',
      milestone: 'Milestone',
      contributor: 'Team Update',
      issue: 'Issue',
      status: 'Status Change',
      ai: 'AI Analysis'
    };
    return labels[type as keyof typeof labels] || type;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-8 bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <Calendar className="w-8 h-8 text-indigo-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Project Evolution Timeline</h2>
              <p className="text-lg text-gray-700 mb-4">
                Complete history of project development, contributions, and key milestones.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <GitCommit className="w-4 h-4" />
                  <span>{timelineEvents.length} Events</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{project.contributors.length + 1} Contributors</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>5 months active</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-start space-x-6"
            >
              {/* Timeline dot */}
              <div className={`relative z-10 w-16 h-16 ${event.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                {event.icon}
              </div>

              {/* Event content */}
              <div className="flex-1 min-w-0">
                <Card hover className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${event.color}`}>
                          {getEventTypeLabel(event.type)}
                        </span>
                        <span className="text-sm text-gray-500">
                          {event.date.toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                    </div>
                    {event.user && (
                      <div className="flex items-center space-x-2">
                        <img
                          src={event.user.avatar}
                          alt={event.user.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-sm text-gray-600">{event.user.name}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Project Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">15</div>
              <div className="text-sm text-gray-600">Code Commits</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">3</div>
              <div className="text-sm text-gray-600">Milestones</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{project.contributors.length + 1}</div>
              <div className="text-sm text-gray-600">Contributors</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{project.stars}</div>
              <div className="text-sm text-gray-600">Stars</div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Future Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Next?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Find Contributors</h4>
              <p className="text-sm text-gray-600">
                Recruit developers to continue the project development
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Implement Security</h4>
              <p className="text-sm text-gray-600">
                Address security concerns and add authentication
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Launch Beta</h4>
              <p className="text-sm text-gray-600">
                Deploy improved version for wider campus testing
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default ProjectTimeline;