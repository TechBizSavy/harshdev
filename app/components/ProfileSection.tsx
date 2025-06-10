import Image from 'next/image';
import styles from './ProfileSection.module.css';

export default function ProfileSection() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p>
          Im Harsh, a tech enthusiast with a sharp, strategic mindset,
          always on the lookout for ways to fuse business with cutting-edge
          technology. My curiosity drives me to explore new tech, especially
          languages and logic, ensuring every solution I create is efficient
          and impactful.
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