// Profile.tsx
import React from 'react';
import styles from './Profile.module.css';

interface ProfileProps {
  name: string;
  id: string;
  about: string;
  hobbies: string[];
  contactNumber: string;
  email: string;
}

const Profile: React.FC<ProfileProps> = ({ name, id, about, hobbies, contactNumber, email }) => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.header}>
        <div className={styles.title}>{name}</div>
        <div className={styles.details}>ID: {id}</div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>About</div>
        <div className={styles.sectionContent}>{about}</div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Hobbies & Interests</div>
        <div className={styles.sectionContent}>
          {hobbies.map((hobby, index) => (
            <div key={index}>{hobby}</div>
          ))}
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Contact Details</div>
        <div className={styles.sectionContent}>
          <div>Contact Number: {contactNumber}</div>
          <div>Email: {email}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
