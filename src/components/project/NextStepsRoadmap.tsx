import React, { useState } from 'react';
import { 
  Target, 
  Clock, 
  AlertCircle, 
  CheckCircle, 
  ArrowRight,
  Calendar,
  Users,
  Code,
  Zap,
  Shield,
  Smartphone,
  BarChart3
} from 'lucide-react';
import { motion } from 'framer-motion';
import { RoadmapItem } from '../../types';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface NextStepsRoadmapProps {
  roadmap: RoadmapItem[];
}

const NextStepsRoadmap: React.FC<NextStepsRoadmapProps> = ({ roadmap }) => {
  const [selectedItem, setSelectedItem] = useState<RoadmapItem | null>(null);

  const priorityColors = {
    high: { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-200', icon: 'text-red-600' },
    medium: { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-200', icon: 'text-yellow-600' },
    low: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200', icon: 'text-green-600' }
  };

  const getIconForRoadmapItem = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('security')) return <Shield className="w-5 h-5" />;
    if (lowerTitle.includes('mobile')) return <Smartphone className="w-5 h-5" />;
    if (lowerTitle.includes('analytics')) return <BarChart3 className="w-5 h-5" />;
    if (lowerTitle.includes('scalability')) return <Zap className="w-5 h-5" />;
    return <Code className="w-5 h-5" />;
  };

  const additionalRoadmapItems = [
    {
      title: 'Testing & Quality Assurance',
      description: 'Implement comprehensive testing suite including unit tests, integration tests, and end-to-end testing',
      priority: 'high' as const,
      estimatedTime: '2-3 weeks',
      prerequisites: ['Code refactoring', 'Test framework setup']
    },
    {
      title: 'Performance Optimization',
      description: 'Optimize database queries, implement caching, and improve frontend performance',
      priority: 'medium' as const,
      estimatedTime: '1-2 weeks',
      prerequisites: ['Performance profiling', 'Bottleneck identification']
    },
    {
      title: 'Documentation & API',
      description: 'Create comprehensive documentation and RESTful API documentation for future integrations',
      priority: 'medium' as const,
      estimatedTime: '1 week',
      prerequisites: ['API stabilization']
    },
    {
      title: 'Deployment & DevOps',
      description: 'Set up CI/CD pipeline, containerization, and production deployment infrastructure',
      priority: 'low' as const,
      estimatedTime: '2 weeks',
      prerequisites: ['Testing completion', 'Security implementation']
    }
  ];

  const allRoadmapItems = [...roadmap, ...additionalRoadmapItems];

  const timelinePhases = [
    {
      phase: 'Phase 1: Foundation',
      duration: '4-6 weeks',
      items: allRoadmapItems.filter(item => item.priority === 'high'),
      color: 'bg-red-500'
    },
    {
      phase: 'Phase 2: Enhancement',
      duration: '6-8 weeks',
      items: allRoadmapItems.filter(item => item.priority === 'medium'),
      color: 'bg-yellow-500'
    },
    {
      phase: 'Phase 3: Scaling',
      duration: '4-5 weeks',
      items: allRoadmapItems.filter(item => item.priority === 'low'),
      color: 'bg-green-500'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Next Steps Roadmap</h2>
              <p className="text-lg text-gray-700 mb-4">
                AI-generated development roadmap with prioritized tasks, time estimates, and prerequisites for successful project completion.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Total Duration: 14-19 weeks</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{allRoadmapItems.length} Tasks Identified</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Timeline Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Development Timeline</h3>
          <div className="space-y-6">
            {timelinePhases.map((phase, index) => (
              <div key={phase.phase} className="relative">
                {index < timelinePhases.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200"></div>
                )}
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${phase.color} rounded-full flex items-center justify-center text-white font-bold`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{phase.phase}</h4>
                      <span className="text-sm text-gray-500">{phase.duration}</span>
                    </div>
                    <p className="text-gray-600 mb-3">{phase.items.length} tasks • {phase.phase.split(':')[1]} focus</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${priorityColors[item.priority].bg} ${priorityColors[item.priority].text} ${priorityColors[item.priority].border} border`}
                        >
                          {item.title}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Detailed Roadmap Items */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {allRoadmapItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <Card 
              hover 
              className={`p-6 cursor-pointer transition-all duration-200 ${
                selectedItem?.title === item.title ? 'ring-2 ring-blue-500 border-blue-300' : ''
              }`}
              onClick={() => setSelectedItem(selectedItem?.title === item.title ? null : item)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${priorityColors[item.priority].bg}`}>
                    <div className={priorityColors[item.priority].icon}>
                      {getIconForRoadmapItem(item.title)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[item.priority].bg} ${priorityColors[item.priority].text} ${priorityColors[item.priority].border} border`}>
                  {item.priority}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{item.estimatedTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{item.prerequisites.length} prerequisites</span>
                  </div>
                </div>
                <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${
                  selectedItem?.title === item.title ? 'rotate-90' : ''
                }`} />
              </div>

              {selectedItem?.title === item.title && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 pt-4 border-t border-gray-200"
                >
                  <h5 className="font-medium text-gray-900 mb-2">Prerequisites:</h5>
                  <div className="space-y-2">
                    {item.prerequisites.map((prereq, prereqIndex) => (
                      <div key={prereqIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-gray-600">{prereq}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Action Items */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Recommended Next Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Start with Security</h4>
              <p className="text-sm text-gray-600 mb-3">
                Begin with high-priority security enhancements to establish a solid foundation
              </p>
              <Button size="sm" variant="outline">
                View Security Tasks
              </Button>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-yellow-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Build Your Team</h4>
              <p className="text-sm text-gray-600 mb-3">
                Recruit contributors with complementary skills for faster development
              </p>
              <Button size="sm" variant="outline">
                Find Contributors
              </Button>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Set Milestones</h4>
              <p className="text-sm text-gray-600 mb-3">
                Create specific milestones and deadlines to track progress effectively
              </p>
              <Button size="sm" variant="outline">
                Create Milestones
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default NextStepsRoadmap;