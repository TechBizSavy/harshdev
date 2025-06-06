// page.tsx (Refactored to use Tailwind)
import ProfileSection from '@/app/components/ProfileSection';
import ProjectCard from '@/app/components/ProjectCard';

const projects = [
  {
    title: 'Zerodha Clone',
    description: 'Frontend landing page for Zerodha, featuring responsive design and clean UI.',
    link: 'https://fe-zerodha.vercel.app/',
  },
  {
    title: 'Listmonk Frontend',
    description: 'Minimal and functional frontend for Listmonk, focusing on simplicity and performance.',
    link: 'https://fe-listmonk.vercel.app/',
  },
  {
    title: 'BetterStack Landing Page',
    description: 'Lightweight and responsive frontend for BetterStack, optimized for fast loading.',
    link: 'https://fe-betterstack.vercel.app/',
  },
  {
    title: 'Paytm Clone (Frontend)',
    description: 'Basic frontend implementation of Paytm clone showcasing essential features and UI.',
    link: 'https://github.com/TechBizSavy/paytm-clone.git',
  },
];

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-6">👋🏽 Hello</h1>
      <ProfileSection />
      <div className="mt-8">
        <h2 className="text-3xl font-semibold border-b-2 border-blue-500 pb-2 inline-block">⭐ Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
