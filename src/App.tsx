import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AILearningHubPage from './AILearningHubPage';
import { Toaster } from 'sonner';

// Placeholder for module detail pages
const ModulePlaceholder = ({ id }: { id: string }) => (
  <div className="flex items-center justify-center min-h-screen bg-zinc-50 dark:bg-zinc-950 p-4">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Module {id} Content</h1>
      <p className="text-zinc-600 mb-8">This is where the module learning experience would live.</p>
      <a href="/" className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold">
        Back to Dashboard
      </a>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Toaster position="top-right" richColors />
      <Routes>
        <Route path="/" element={<AILearningHubPage />} />
        <Route path="/modules/module-:id" element={<ModuleDetailWrapper />} />
      </Routes>
    </Router>
  );
}

// Helper to extract ID from params
import { useParams } from 'react-router-dom';
const ModuleDetailWrapper = () => {
  const { id } = useParams();
  return <ModulePlaceholder id={id || ''} />;
};

export default App;