// ProfileCard.tsx
'use client'
import React from "react";
import styles from "./ProfileCard.module.css";
import { useRouter } from "next/navigation";
interface ProfileCardProps {
  name: string;
  age: number;
  height: string;
  maritalStatus: string;
  religion: string;
  location: string;
  language: string;
  profession: string;
  description: string;
  imageUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  age,
  height,
  maritalStatus,
  religion,
  location,
  language,
  profession,
  description,
  imageUrl,
}) => {
  const router = useRouter();
  const onHandleClick = ()=>{
    router.push(`profiles/${name}`);
  }
  return (
    <div className={styles.card} onClick={onHandleClick}>
      <img src={imageUrl} alt={name} className={styles.cardImage}   />
      <div className={styles.cardContent}>
        <div className={styles.verifiedBadgeAndHeading}>
          <h2 className={styles.cardTitle}>{name}</h2>
          <div className={styles.verifiedBadge}>
            <svg
              width="27"
              height="27"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="16" fill="#00BCD5"></rect>
              <path
                d="M15.2304 19.5556L21.0264 13.7614C21.4134 13.3745 21.4134 12.7353 21.0264 12.3484C20.6393 11.9615 20 11.9615 19.613 12.3484L14.5237 17.4361L12.3264 15.2395C11.9393 14.8526 11.3 14.8526 10.913 15.2395C10.5259 15.6264 10.5259 16.2656 10.913 16.6525L13.817 19.5556C14.0035 19.7421 14.2568 19.8488 14.5237 19.8488C14.7905 19.8488 15.0438 19.7421 15.2304 19.5556Z"
                fill="white"
                stroke="white"
                strokeWidth="0.2"
              ></path>
            </svg>
          </div>
          <div>
            
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={styles.cardOnline}>
             <div className={styles.cardOnlineStatus}>
             <img src='/images/shape.png' alt={undefined} height={20} width={20} />
             <p>Online</p>
             </div>
             <div  className={styles.cardOnlineStatus}> <img src='/images/sun.png' alt={undefined} height={20} width={20}/>
             <p>Astro</p></div>
            </div>
        <div className={styles.cardInfo}>
          <div>
            <p className={styles.cardDetails}>
              {age} yrs, {height}
            </p>
            <p className={styles.cardDetails}>{maritalStatus}</p>
            <p className={styles.cardDetails}>{religion}</p>
          </div>
          <div>
            {" "}
            <p className={styles.cardDetails}>{location}</p>
            <p className={styles.cardDetails}>{language}</p>
            <p className={styles.cardDetails}>{profession}</p>
          </div>
        </div>
        <p className={styles.cardDescription}>{description.slice(1,90) }...</p>
      </div>
      <div className={styles.cardSideBar}>
        <p>Like this profile?</p>
        <button className={styles.button}>Chat Now</button>
        <p>Connect Now</p>
      </div>
    </div>
  );
};

export default ProfileCard;
