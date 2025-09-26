import React from 'react';
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  TrendingUp, 
  Bug, 
  Shield,
  Code,
  Database,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { AIAnalysis } from '../../types';
import Card from '../ui/Card';

interface AIHealthReportProps {
  analysis: AIAnalysis;
}

const AIHealthReport: React.FC<AIHealthReportProps> = ({ analysis }) => {
  const getHealthColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getHealthBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-600';
    if (score >= 60) return 'bg-yellow-600';
    return 'bg-red-600';
  };

  const healthMetrics = [
    {
      label: 'Code Quality',
      score: 82,
      icon: <Code className="w-5 h-5" />,
      description: 'Well-structured codebase with good practices'
    },
    {
      label: 'Documentation',
      score: 65,
      icon: <Shield className="w-5 h-5" />,
      description: 'Adequate documentation, could be improved'
    },
    {
      label: 'Test Coverage',
      score: 45,
      icon: <CheckCircle className="w-5 h-5" />,
      description: 'Limited test coverage, needs improvement'
    },
    {
      label: 'Dependencies',
      score: 78,
      icon: <Database className="w-5 h-5" />,
      description: 'Most dependencies are up-to-date'
    },
    {
      label: 'Performance',
      score: 71,
      icon: <Zap className="w-5 h-5" />,
      description: 'Good performance with room for optimization'
    },
    {
      label: 'Security',
      score: 58,
      icon: <Shield className="w-5 h-5" />,
      description: 'Some security concerns identified'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Overall Health Score */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-32 h-32">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-gray-200"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className={getHealthColor(analysis.healthScore)}
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray={`${analysis.healthScore}, 100`}
                    strokeLinecap="round"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`text-3xl font-bold ${getHealthColor(analysis.healthScore)}`}>
                      {analysis.healthScore}
                    </div>
                    <div className="text-sm text-gray-500">Health Score</div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Project Health Report</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              AI-powered analysis of your project's codebase, architecture, and overall health. 
              This report identifies strengths, weaknesses, and areas for improvement.
            </p>
          </div>
        </Card>
      </motion.div>

      {/* Health Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {healthMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card hover className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${getHealthColor(metric.score)} bg-opacity-10`}>
                    {metric.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900">{metric.label}</h3>
                </div>
                <div className={`text-xl font-bold ${getHealthColor(metric.score)}`}>
                  {metric.score}
                </div>
              </div>
              <div className="mb-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${getHealthBgColor(metric.score)}`}
                    style={{ width: `${metric.score}%` }}
                  ></div>
                </div>
              </div>
              <p className="text-sm text-gray-600">{metric.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Issues and Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Missing Modules */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="p-6">
            <div className="flex items-center space-x-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
              <h3 className="text-lg font-semibold text-gray-900">Missing Modules</h3>
            </div>
            <div className="space-y-3">
              {analysis.missingModules.map((module, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <XCircle className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{module}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Bug Predictions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Bug className="w-5 h-5 text-red-600" />
              <h3 className="text-lg font-semibold text-gray-900">Potential Issues</h3>
            </div>
            <div className="space-y-3">
              {analysis.bugPredictions.map((bug, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg border border-red-200">
                  <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{bug}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card className="p-6">
          <div className="flex items-center space-x-2 mb-6">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">AI Recommendations</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {analysis.recommendations.map((recommendation, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{recommendation}</span>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Analysis Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analysis Summary</h3>
              <p className="text-gray-700 mb-4">
                Your project shows strong potential with a health score of {analysis.healthScore}/100. 
                The codebase is well-structured and follows good practices, but there are opportunities 
                for improvement in testing, security, and documentation.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>Analysis generated on {analysis.generatedAt.toLocaleDateString()}</span>
                <span>•</span>
                <span>Based on {analysis.recommendations.length} data points</span>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default AIHealthReport;