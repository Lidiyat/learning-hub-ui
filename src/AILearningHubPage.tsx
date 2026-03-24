import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  ChevronRight, 
  BrainCircuit, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Code2, 
  Workflow, 
  Palette, 
  Cpu, 
  Globe, 
  MessagesSquare, 
  Rocket,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Types ---
interface Module {
  id: number;
  title: string;
  description: string;
  linkPath: string;
  isCompleted: boolean;
  icon: React.ReactNode;
}

// --- Sample Data ---
const modulesData: Module[] = [
  {
    id: 1,
    title: "Foundations of Generative AI",
    description: "Understand the core principles and architecture of modern LLMs and generative systems.",
    linkPath: "/modules/module-1",
    isCompleted: true,
    icon: <BrainCircuit className="w-8 h-8 text-indigo-500" />,
  },
  {
    id: 2,
    title: "Mastering Prompt Engineering",
    description: "Learn advanced techniques to extract high-quality, reliable outputs from AI models.",
    linkPath: "/modules/module-2",
    isCompleted: true,
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
  },
  {
    id: 3,
    title: "AI-Powered Design Systems",
    description: "Integrate AI tools into your creative workflow for rapid prototyping and assets.",
    linkPath: "/modules/module-3",
    isCompleted: false,
    icon: <Palette className="w-8 h-8 text-pink-500" />,
  },
  {
    id: 4,
    title: "Building LLM Applications",
    description: "Architect and develop full-stack applications powered by OpenAI and Anthropic.",
    linkPath: "/modules/module-4",
    isCompleted: false,
    icon: <Code2 className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 5,
    title: "Workflow Automation with AI",
    description: "Scale your productivity by connecting AI to everyday business processes.",
    linkPath: "/modules/module-5",
    isCompleted: false,
    icon: <Workflow className="w-8 h-8 text-emerald-500" />,
  },
  {
    id: 6,
    title: "Data Intelligence & Analysis",
    description: "Use AI to uncover insights from complex datasets and generate visual reports.",
    linkPath: "/modules/module-6",
    isCompleted: false,
    icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
  },
  {
    id: 7,
    title: "Ethical AI & Governance",
    description: "Navigate the legal and ethical landscape of deploying AI in professional settings.",
    linkPath: "/modules/module-7",
    isCompleted: false,
    icon: <ShieldCheck className="w-8 h-8 text-red-500" />,
  },
  {
    id: 8,
    title: "Model Fine-Tuning 101",
    description: "Deep dive into customizing pre-trained models for specific niche use cases.",
    linkPath: "/modules/module-8",
    isCompleted: false,
    icon: <Cpu className="w-8 h-8 text-purple-500" />,
  },
  {
    id: 9,
    title: "AI Software Development",
    description: "Enhance your coding speed and quality using AI-driven IDEs and assistants.",
    linkPath: "/modules/module-9",
    isCompleted: false,
    icon: <BookOpen className="w-8 h-8 text-cyan-500" />,
  },
  {
    id: 10,
    title: "Computer Vision & AI",
    description: "Implement image recognition and object detection features in your products.",
    linkPath: "/modules/module-10",
    isCompleted: false,
    icon: <Globe className="w-8 h-8 text-teal-500" />,
  },
  {
    id: 11,
    title: "Natural Language Mastery",
    description: "Build sophisticated chatbots and text analysis tools using modern NLP.",
    linkPath: "/modules/module-11",
    isCompleted: false,
    icon: <MessagesSquare className="w-8 h-8 text-violet-500" />,
  },
  {
    id: 12,
    title: "Deploying AI at Scale",
    description: "Master the infrastructure requirements for high-traffic AI applications.",
    linkPath: "/modules/module-12",
    isCompleted: false,
    icon: <Rocket className="w-8 h-8 text-rose-500" />,
  },
];

// --- ModuleCard Component ---
const ModuleCard = ({ module }: { module: Module }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative flex flex-col h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden hover:shadow-[0_20px_50px_rgba(79,70,229,0.1)] dark:hover:shadow-[0_20px_50px_rgba(79,70,229,0.2)] transition-all"
    >
      <div className="p-8 flex flex-col h-full">
        {/* Progress Indicator */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-zinc-400">
            Module {module.id.toString().padStart(2, '0')}
          </span>
          {module.isCompleted ? (
            <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Completed
            </span>
          ) : (
            <span className="inline-flex items-center py-1 px-3 rounded-full text-xs font-bold bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20">
              In Progress
            </span>
          )}
        </div>

        {/* Icon Placeholder Div */}
        <div className="mb-8 h-20 w-20 flex items-center justify-center rounded-2xl bg-zinc-50 dark:bg-zinc-800 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 transition-colors shadow-inner">
          {module.icon}
        </div>

        {/* Content */}
        <div className="flex-1 mb-8">
          <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors tracking-tight">
            {module.title}
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed">
            {module.description}
          </p>
        </div>

        {/* Action */}
        <Link
          to={module.linkPath}
          className="inline-flex items-center justify-between w-full px-6 py-4 text-sm font-bold text-white bg-zinc-900 dark:bg-indigo-600 hover:bg-zinc-800 dark:hover:bg-indigo-500 rounded-2xl transition-all gap-2 transform active:scale-95"
        >
          <span>{module.isCompleted ? 'Review Module' : 'Start Learning'}</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Visual Progress Bar (Simulation) */}
      <div className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700 ease-out rounded-r-full" 
           style={{ width: module.isCompleted ? '100%' : '15%' }} />
    </motion.div>
  );
};

// --- Main Page Component ---
export default function AILearningHubPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFF] dark:bg-zinc-950 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 w-full border-b border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link 
            to="/" 
            className="group flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-bold transition-all"
          >
            <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="hidden sm:inline">Back to Dashboard</span>
          </Link>
          
          <div className="flex items-center gap-8">
            <div className="hidden lg:flex flex-col items-end gap-1.5">
              <div className="flex justify-between w-48 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                <span>Course Progress</span>
                <span>16%</span>
              </div>
              <div className="w-48 h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '16%' }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400" 
                />
              </div>
            </div>
            <div className="h-10 w-px bg-zinc-200 dark:bg-zinc-800 hidden sm:block" />
            <button className="flex items-center gap-3 p-1 pr-4 rounded-full bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-black text-xs">
                JD
              </div>
              <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300 hidden sm:block">John Doe</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Header Section */}
      <header className="relative pt-24 pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-widest mb-8 border border-indigo-100 dark:border-indigo-500/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Learning Path Active
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tight text-zinc-900 dark:text-white mb-8"
          >
            AI Learning <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600">Modules.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Start your journey from idea to digital product — access all modules below and master the future of technology.
          </motion.p>
        </div>

        {/* Background Image / Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10 opacity-50 dark:opacity-20">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/ede4084a-19e7-46cc-8351-fe9b128388f6/ai-learning-hero-16947365-1774335257115.webp" 
            alt="Hero Background" 
            className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-overlay"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#FDFDFF] dark:from-zinc-950 to-transparent pointer-events-none -z-10" />
      </header>

      {/* Main Grid Section */}
      <main className="container mx-auto px-6 pb-32">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight">Curriculum Overview</h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-bold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 transition-colors">All Modules</button>
            <button className="px-4 py-2 rounded-xl bg-transparent text-sm font-bold text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">Completed</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {modulesData.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 + 0.3 }}
            >
              <ModuleCard module={module} />
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black">AI</div>
                <span className="text-2xl font-black text-zinc-900 dark:text-white tracking-tighter">AI Academy</span>
              </div>
              <p className="text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed mb-8">
                Empowering creators, developers, and entrepreneurs with the knowledge to harness artificial intelligence for digital innovation.
              </p>
              <div className="flex gap-4">
                {[Globe, MessagesSquare, Zap].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all border border-zinc-100 dark:border-zinc-700/50">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-black text-zinc-900 dark:text-white mb-6 uppercase tracking-widest text-xs">Resources</h4>
              <ul className="space-y-4">
                {['Documentation', 'Video Tutorials', 'API Reference', 'Case Studies'].map((item) => (
                  <li key={item}><a href="#" className="text-zinc-500 hover:text-indigo-600 transition-colors text-sm font-medium">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-black text-zinc-900 dark:text-white mb-6 uppercase tracking-widest text-xs">Company</h4>
              <ul className="space-y-4">
                {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item) => (
                  <li key={item}><a href="#" className="text-zinc-500 hover:text-indigo-600 transition-colors text-sm font-medium">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} AI Learning Hub. Built for the future.
            </p>
            <div className="flex gap-6 text-xs font-bold text-zinc-400 uppercase tracking-widest">
              <a href="#" className="hover:text-zinc-600 transition-colors">Status</a>
              <a href="#" className="hover:text-zinc-600 transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}