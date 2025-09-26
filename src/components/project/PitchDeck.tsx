import React, { useState } from 'react';
import { 
  TrendingUp, 
  Target, 
  Users, 
  DollarSign, 
  Lightbulb,
  Code,
  Calendar,
  Award,
  ArrowRight,
  Download,
  Share2,
  Eye,
  BarChart3,
  Globe,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { PitchDeck as PitchDeckType, Project } from '../../types';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface PitchDeckProps {
  pitchDeck: PitchDeckType;
  project: Project;
}

const PitchDeck: React.FC<PitchDeckProps> = ({ pitchDeck, project }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'problem',
      title: 'The Problem',
      icon: <Target className="w-8 h-8" />,
      content: pitchDeck.problem,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'solution',
      title: 'Our Solution',
      icon: <Lightbulb className="w-8 h-8" />,
      content: pitchDeck.solution,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'market',
      title: 'Market Opportunity',
      icon: <TrendingUp className="w-8 h-8" />,
      content: pitchDeck.marketSize,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'tech',
      title: 'Technology Stack',
      icon: <Code className="w-8 h-8" />,
      content: `Built with modern, scalable technologies: ${pitchDeck.techStack.join(', ')}. Our architecture ensures reliability, performance, and easy maintenance.`,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'roadmap',
      title: 'Development Roadmap',
      icon: <Calendar className="w-8 h-8" />,
      content: 'Strategic development plan with clear milestones and deliverables.',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'team',
      title: 'Team & Needs',
      icon: <Users className="w-8 h-8" />,
      content: `We're looking for talented individuals to join our mission: ${pitchDeck.teamNeeds.join(', ')}.`,
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const marketStats = [
    { label: 'Market Size', value: '$8.2B', icon: <Globe className="w-5 h-5" /> },
    { label: 'Growth Rate', value: '12.4%', icon: <TrendingUp className="w-5 h-5" /> },
    { label: 'Target Universities', value: '4,000+', icon: <Target className="w-5 h-5" /> },
    { label: 'Potential Savings', value: '25%', icon: <Zap className="w-5 h-5" /> }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-8 bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <TrendingUp className="w-8 h-8 text-indigo-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">AI-Generated Pitch Deck</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Professional pitch presentation to attract mentors, investors, and collaborators.
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{slides.length} Slides</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="w-4 h-4" />
                    <span>Investment Ready</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Slide Navigation */}
      <div className="flex justify-center">
        <div className="flex items-center space-x-2 bg-white rounded-lg p-2 shadow-sm border">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                currentSlide === index
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {slide.title}
            </button>
          ))}
        </div>
      </div>

      {/* Main Slide Display */}
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="overflow-hidden">
          <div className={`h-64 bg-gradient-to-r ${slides[currentSlide].color} relative`}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative p-8 h-full flex items-center">
              <div className="text-white">
                <div className="flex items-center space-x-4 mb-4">
                  {slides[currentSlide].icon}
                  <h3 className="text-3xl font-bold">{slides[currentSlide].title}</h3>
                </div>
                <p className="text-xl text-white/90 max-w-4xl leading-relaxed">
                  {slides[currentSlide].content}
                </p>
              </div>
            </div>
          </div>

          {/* Slide-specific content */}
          <div className="p-8">
            {currentSlide === 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Current Challenges</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">Universities waste 20-30% of energy annually</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">Manual monitoring systems are inefficient</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">Lack of real-time optimization capabilities</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Impact</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <div className="text-2xl font-bold text-red-600">$2M+</div>
                      <div className="text-sm text-gray-600">Annual Waste</div>
                    </div>
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <div className="text-2xl font-bold text-red-600">30%</div>
                      <div className="text-sm text-gray-600">Energy Loss</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentSlide === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Real-time Monitoring</h4>
                  <p className="text-sm text-gray-600">Continuous tracking of energy consumption across all campus buildings</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">AI Optimization</h4>
                  <p className="text-sm text-gray-600">Machine learning algorithms predict and optimize energy usage patterns</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Automated Control</h4>
                  <p className="text-sm text-gray-600">Smart systems automatically adjust settings for optimal efficiency</p>
                </div>
              </div>
            )}

            {currentSlide === 2 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {marketStats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <div className="text-green-600">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            {currentSlide === 3 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {pitchDeck.techStack.map((tech, index) => (
                  <div key={index} className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="font-medium text-purple-900">{tech}</div>
                  </div>
                ))}
              </div>
            )}

            {currentSlide === 4 && (
              <div className="space-y-4">
                {pitchDeck.roadmap.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            )}

            {currentSlide === 5 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Current Team</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <img
                        src={project.originalAuthor.avatar}
                        alt={project.originalAuthor.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{project.originalAuthor.name}</div>
                        <div className="text-sm text-gray-600">Founder & Lead Developer</div>
                      </div>
                    </div>
                    {project.contributors.map((contributor) => (
                      <div key={contributor._id} className="flex items-center space-x-3">
                        <img
                          src={contributor.avatar}
                          alt={contributor.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-medium text-gray-900">{contributor.name}</div>
                          <div className="text-sm text-gray-600">Contributor</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">We're Looking For</h4>
                  <div className="space-y-2">
                    {pitchDeck.teamNeeds.map((need, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-teal-50 rounded-lg border border-teal-200">
                        <Users className="w-4 h-4 text-teal-600" />
                        <span className="text-gray-700">{need}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>
      </motion.div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          Previous
        </Button>
        
        <div className="flex items-center space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <Button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
        >
          Next
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Mission?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Help us revolutionize campus energy management and create a sustainable future for universities worldwide.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                <Users className="w-4 h-4 mr-2" />
                Join as Contributor
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <DollarSign className="w-4 h-4 mr-2" />
                Become a Mentor
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default PitchDeck;