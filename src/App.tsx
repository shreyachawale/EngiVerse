import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Auth from './pages/Auth';
import ProjectUploadForm from './components/project/ProjectUploadForm';
import ProjectDetails from './components/project/ProjectDetails';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Auth />} />
          <Route path="/" element={
            <Layout>
              <Home />
            </Layout>
          } />
          <Route path="/discover" element={
            <Layout>
              <Discover />
            </Layout>
          } />
          <Route path="/projects/new" element={
            <Layout>
              <ProjectUploadForm />
            </Layout>
          } />
          <Route path="/projects/:id" element={
            <Layout>
              <ProjectDetails />
            </Layout>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;