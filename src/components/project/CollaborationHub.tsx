import React, { useState } from 'react';
import { 
  MessageCircle, 
  Users, 
  Calendar, 
  CheckCircle,
  Plus,
  Send,
  Paperclip,
  Video,
  Phone,
  Settings,
  Bell,
  Hash,
  AtSign
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '../../types';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Input from '../ui/Input';

interface CollaborationHubProps {
  project: Project;
}

const CollaborationHub: React.FC<CollaborationHubProps> = ({ project }) => {
  const [activeChannel, setActiveChannel] = useState('general');
  const [newMessage, setNewMessage] = useState('');
  const [showMilestones, setShowMilestones] = useState(false);

  const channels = [
    { id: 'general', name: 'General', icon: <Hash className="w-4 h-4" />, unread: 3 },
    { id: 'development', name: 'Development', icon: <Hash className="w-4 h-4" />, unread: 0 },
    { id: 'design', name: 'Design', icon: <Hash className="w-4 h-4" />, unread: 1 },
    { id: 'testing', name: 'Testing', icon: <Hash className="w-4 h-4" />, unread: 0 }
  ];

  const messages = [
    {
      id: 1,
      user: project.originalAuthor,
      content: "Welcome to the Smart Campus Energy Management project! I'm excited to see this project get revived.",
      timestamp: new Date('2024-01-20T10:30:00'),
      type: 'text'
    },
    {
      id: 2,
      user: project.contributors[0],
      content: "I've been looking at the ML models and I think we can improve the prediction accuracy significantly. Should we start with that?",
      timestamp: new Date('2024-01-20T11:15:00'),
      type: 'text'
    },
    {
      id: 3,
      user: project.contributors[1],
      content: "The hardware integration looks solid, but we need to address the security concerns mentioned in the AI report.",
      timestamp: new Date('2024-01-20T14:22:00'),
      type: 'text'
    },
    {
      id: 4,
      user: project.originalAuthor,
      content: "Great points! I've created a roadmap based on the AI recommendations. Let's prioritize security first.",
      timestamp: new Date('2024-01-20T15:45:00'),
      type: 'text'
    }
  ];

  const milestones = [
    {
      id: 1,
      title: 'Security Implementation',
      description: 'Implement JWT authentication and data encryption',
      dueDate: new Date('2024-02-15'),
      completed: false,
      assignee: project.contributors[0]
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Create React Native mobile application',
      dueDate: new Date('2024-03-01'),
      completed: false,
      assignee: null
    },
    {
      id: 3,
      title: 'Performance Optimization',
      description: 'Optimize database queries and frontend performance',
      dueDate: new Date('2024-02-28'),
      completed: false,
      assignee: project.contributors[1]
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage('');
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Collaboration Hub</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Connect with team members, track progress, and coordinate development efforts.
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{project.contributors.length + 1} Active Members</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{messages.length} Messages</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4" />
                    <span>{milestones.length} Milestones</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Video className="w-4 h-4 mr-2" />
                Start Call
              </Button>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Invite Members
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Main Collaboration Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Team Members */}
          <Card className="p-4">
            <h3 className="font-semibold text-gray-900 mb-4">Team Members</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={project.originalAuthor.avatar}
                    alt={project.originalAuthor.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm text-gray-900">{project.originalAuthor.name}</div>
                  <div className="text-xs text-gray-500">Project Owner</div>
                </div>
              </div>
              {project.contributors.map((contributor) => (
                <div key={contributor._id} className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={contributor.avatar}
                      alt={contributor.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm text-gray-900">{contributor.name}</div>
                    <div className="text-xs text-gray-500">Contributor</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Channels */}
          <Card className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Channels</h3>
              <Button size="sm" variant="ghost">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-1">
              {channels.map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => setActiveChannel(channel.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeChannel === channel.id
                      ? 'bg-blue-100 text-blue-900'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {channel.icon}
                    <span>{channel.name}</span>
                  </div>
                  {channel.unread > 0 && (
                    <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
                      {channel.unread}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-4">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Meeting
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start"
                onClick={() => setShowMilestones(!showMilestones)}
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                View Milestones
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Settings className="w-4 h-4 mr-2" />
                Project Settings
              </Button>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {!showMilestones ? (
            /* Chat Interface */
            <Card className="h-96 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Hash className="w-5 h-5 text-gray-500" />
                    <h3 className="font-semibold text-gray-900">
                      {channels.find(c => c.id === activeChannel)?.name}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Video className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Bell className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className="flex items-start space-x-3">
                    <img
                      src={message.user.avatar}
                      alt={message.user.name}
                      className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-sm text-gray-900">
                          {message.user.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {message.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder={`Message #${channels.find(c => c.id === activeChannel)?.name}`}
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    >
                      <Paperclip className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ) : (
            /* Milestones View */
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Project Milestones</h3>
                <Button size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Milestone
                </Button>
              </div>
              <div className="space-y-4">
                {milestones.map((milestone) => (
                  <div
                    key={milestone.id}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      milestone.completed
                        ? 'bg-green-50 border-green-200'
                        : 'bg-white border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          milestone.completed
                            ? 'bg-green-500 border-green-500'
                            : 'border-gray-300'
                        }`}>
                          {milestone.completed && (
                            <CheckCircle className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-semibold ${
                            milestone.completed ? 'text-green-900' : 'text-gray-900'
                          }`}>
                            {milestone.title}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            {milestone.description}
                          </p>
                          <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>Due {milestone.dueDate.toLocaleDateString()}</span>
                            </div>
                            {milestone.assignee && (
                              <div className="flex items-center space-x-1">
                                <AtSign className="w-4 h-4" />
                                <span>{milestone.assignee.name}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollaborationHub;