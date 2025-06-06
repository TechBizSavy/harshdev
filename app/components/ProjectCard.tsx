import Link from 'next/link';
import styles from './ProjectCard.module.css';



interface ProjectCardProps {
  title : string,
  description : string,
  link? : string
}

export default function ProjectCard({ title, description, link }:  ProjectCardProps) {  
  return (
    
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <Link href={link || "#"} className={styles.link}>View Project</Link>
      </div>
    </div>
  );
}