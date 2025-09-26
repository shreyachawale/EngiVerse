import React, { useState, useEffect } from 'react';
import { Search, Filter, Import as SortAsc } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import ProjectCard from '../components/project/ProjectCard';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const Discover: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [isLoading, setIsLoading] = useState(true);

  const domains = [
    'Web Development',
    'Mobile Development',
    'Machine Learning',
    'Data Science',
    'Game Development',
    'IoT',
    'Blockchain',
    'DevOps',
    'Cybersecurity',
    'AR/VR'
  ];

  const difficulties = ['beginner', 'intermediate', 'advanced'];
  const statuses = ['abandoned', 'active', 'completed'];
  const sortOptions = [
    { value: 'recent', label: 'Most Recent' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'completion', label: 'Completion %' },
    { value: 'health', label: 'AI Health Score' }
  ];

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    filterAndSortProjects();
  }, [projects, searchQuery, selectedDomain, selectedDifficulty, selectedStatus, sortBy]);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      // Simulate API call with mock data
      const mockProjects: Project[] = [
        {
          _id: '1',
          title: 'Smart Home IoT Dashboard',
          description: 'A comprehensive IoT dashboard for monitoring and controlling smart home devices. Built with React and Node.js, includes real-time data visualization and device management.',
          techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Arduino'],
          domain: 'IoT',
          difficulty: 'intermediate',
          repoUrl: 'https://github.com/user/smart-home-dashboard',
          demoUrl: 'https://smart-home-demo.vercel.app',
          status: 'abandoned',
          originalAuthor: {
            _id: '1',
            name: 'Alex Johnson',
            email: 'alex@example.com',
            role: 'student',
            skills: ['React', 'IoT'],
            contributions: [],
            createdAt: new Date()
          },
          contributors: [],
          adoptionRequests: [],
          tags: ['iot', 'react', 'dashboard'],
          completionPercentage: 65,
          stars: 12,
          lastUpdated: new Date('2024-01-15'),
          createdAt: new Date('2023-12-01'),
          aiAnalysis: {
            healthScore: 72,
            completionPercentage: 65,
            missingModules: ['Authentication', 'Device Security'],
            bugPredictions: ['Memory leak in WebSocket connections'],
            recommendations: ['Add user authentication', 'Implement device security protocols'],
            roadmap: [
              {
                title: 'Add Authentication',
                description: 'Implement JWT-based user authentication',
                priority: 'high',
                estimatedTime: '1-2 weeks',
                prerequisites: []
              }
            ],
            pitchDeck: {
              problem: 'Fragmented smart home control interfaces',
              solution: 'Unified IoT dashboard for all devices',
              marketSize: '$80B smart home market',
              techStack: ['React', 'Node.js', 'MongoDB'],
              roadmap: ['Authentication', 'Security', 'Mobile App'],
              teamNeeds: ['Backend Developer', 'UI/UX Designer']
            },
            generatedAt: new Date()
          }
        },
        {
          _id: '2',
          title: 'ML-Powered Code Review Assistant',
          description: 'An AI-powered tool that automatically reviews code for bugs, performance issues, and best practices. Uses machine learning to provide intelligent suggestions.',
          techStack: ['Python', 'TensorFlow', 'Flask', 'Docker'],
          domain: 'Machine Learning',
          difficulty: 'advanced',
          repoUrl: 'https://github.com/user/code-review-ai',
          status: 'active',
          originalAuthor: {
            _id: '2',
            name: 'Sarah Chen',
            email: 'sarah@example.com',
            role: 'student',
            skills: ['Python', 'ML'],
            contributions: [],
            createdAt: new Date()
          },
          contributors: [
            {
              _id: '3',
              name: 'Mike Davis',
              email: 'mike@example.com',
              role: 'contributor',
              skills: ['Python'],
              contributions: [],
              createdAt: new Date()
            }
          ],
          adoptionRequests: [],
          tags: ['ai', 'python', 'code-review'],
          completionPercentage: 40,
          stars: 25,
          lastUpdated: new Date('2024-01-20'),
          createdAt: new Date('2023-11-15'),
          aiAnalysis: {
            healthScore: 85,
            completionPercentage: 40,
            missingModules: ['Web Interface', 'API Documentation'],
            bugPredictions: [],
            recommendations: ['Add web interface', 'Improve model accuracy'],
            roadmap: [],
            pitchDeck: {
              problem: 'Manual code reviews are time-consuming',
              solution: 'AI-powered automated code review',
              marketSize: '$4B developer tools market',
              techStack: ['Python', 'TensorFlow'],
              roadmap: ['Web UI', 'IDE Integration'],
              teamNeeds: ['Frontend Developer']
            },
            generatedAt: new Date()
          }
        },
        // Add more mock projects...
      ];

      setProjects(mockProjects);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterAndSortProjects = () => {
    let filtered = projects;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Apply domain filter
    if (selectedDomain) {
      filtered = filtered.filter(project => project.domain === selectedDomain);
    }

    // Apply difficulty filter
    if (selectedDifficulty) {
      filtered = filtered.filter(project => project.difficulty === selectedDifficulty);
    }

    // Apply status filter
    if (selectedStatus) {
      filtered = filtered.filter(project => project.status === selectedStatus);
    }

    // Apply sorting
    filtered = filtered.sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
        case 'popular':
          return b.stars - a.stars;
        case 'completion':
          return b.completionPercentage - a.completionPercentage;
        case 'health':
          return (b.aiAnalysis?.healthScore || 0) - (a.aiAnalysis?.healthScore || 0);
        default:
          return 0;
      }
    });

    setFilteredProjects(filtered);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedDomain('');
    setSelectedDifficulty('');
    setSelectedStatus('');
    setSortBy('recent');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Discover Projects
          </h1>
          <p className="text-gray-600">
            Find abandoned projects that match your skills and interests
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Domains</option>
              {domains.map(domain => (
                <option key={domain} value={domain}>{domain}</option>
              ))}
            </select>

            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Levels</option>
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </option>
              ))}
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Status</option>
              {statuses.map(status => (
                <option key={status} value={status}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-gray-600">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
            {(searchQuery || selectedDomain || selectedDifficulty || selectedStatus) && (
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear Filters
              </Button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or filters
            </p>
            <Button variant="outline" onClick={clearFilters}>
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Discover;