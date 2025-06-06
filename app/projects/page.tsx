import ProjectCard from '@/app/components/ProjectCard';
import styles from './projects.module.css';

// You can expand this list with more projects
const projects = [
  {
    title: 'Zerodha Clone',
    description: 'Frontend landing page for Zerodha, featuring responsive design and clean UI.',
    link: 'https://fe-zerodha.vercel.app/'
  },
  {
    title: 'Listmonk Frontend',
    description: 'Minimal and functional frontend for Listmonk, focusing on simplicity and performance.',
    link: 'https://fe-listmonk.vercel.app/'
  },
  {
    title: 'BetterStack Landing Page',
    description: 'Lightweight and responsive frontend for BetterStack, optimized for fast loading.',
    link: 'https://fe-betterstack.vercel.app/'
  },
  {
    title: 'Paytm Clone (Frontend)',
    description: 'Basic frontend implementation of Paytm clone showcasing essential features and UI.',
    link: 'https://github.com/TechBizSavy/paytm-clone.git'
  }
];


export const metadata = {
  title: 'Projects | Harsh Chalwadi',
  description: 'Explore Harsh Chalwadi\'s featured projects and development work'
};

export default function ProjectsPage() {
  return (
    <>
      <h1 className={styles.pageTitle}>Projects</h1>
      <p className={styles.pageDescription}>
        Here s a collection of my work, spanning web development, interface design, and interactive applications.
      </p>
      
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </>
  );
}