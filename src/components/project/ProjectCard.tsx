import React from 'react';
import { Link } from 'react-router-dom';
import { Star, GitBranch, Users, Calendar, Code, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '../../types';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const statusColors = {
    abandoned: 'bg-red-100 text-red-800',
    active: 'bg-green-100 text-green-800',
    completed: 'bg-blue-100 text-blue-800'
  };

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  };

  return (
    <Card hover className="overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
              {project.status}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[project.difficulty]}`}>
              {project.difficulty}
            </span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <Star className="w-4 h-4" />
            <span>{project.stars}</span>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {project.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="space-y-3 mb-4">
          <div className="flex flex-wrap gap-1">
            {project.techStack.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded-md">
                +{project.techStack.length - 3} more
              </span>
            )}
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{project.contributors.length} contributors</span>
              </div>
              <div className="flex items-center space-x-1">
                <GitBranch className="w-4 h-4" />
                <span>{project.completionPercentage}% complete</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <img
              src={`https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop`}
              alt={project.originalAuthor.name}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-sm text-gray-600">{project.originalAuthor.name}</span>
          </div>

          <div className="flex items-center space-x-2">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Code className="w-4 h-4" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <Link to={`/projects/${project._id}`}>
              <Button size="sm" variant="outline">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {project.aiAnalysis && (
        <div className="px-6 pb-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-700">AI Health Score</span>
              <div className="flex items-center space-x-2">
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${project.aiAnalysis.healthScore}%` }}
                  ></div>
                </div>
                <span className="font-medium text-blue-600">
                  {project.aiAnalysis.healthScore}/100
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default ProjectCard;