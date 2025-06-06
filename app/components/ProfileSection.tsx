import Image from 'next/image';
import styles from './ProfileSection.module.css';

export default function ProfileSection() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p>
          I'm Harsh, a tech enthusiast with a sharp, strategic mindset,
          always on the lookout for ways to fuse business with cutting-edge
          technology. My curiosity drives me to explore new tech, especially
          languages and logic, ensuring every solution I create is efficient
          and impactful.
        </p>

        <p>
          Beyond my tech pursuits, I'm passionate about refining business
          strategies. When I'm not brainstorming the next big idea, you'll
          find me on the football field or soaking in nature to keep my mind
          clear and focused.
        </p>
      </div>
      <div className={styles.imageWrapper}>
        <Image 
          src="/harsh.jpg" 
          alt="Harsh Chalwadi" 
          className={styles.profileImage} 
          width={220} 
          height={220}
          priority
        />
      </div>
    </section>
  );
}