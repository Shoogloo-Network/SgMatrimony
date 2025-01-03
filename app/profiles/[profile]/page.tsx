import React from "react";
import ProfileCard from "@/app/_features/profilecard/ProfileCard";
import styles from './page.module.css'
import Profile from "@/app/_features/profileDetail/Profile";
const page: React.FC = () => {
    return (
        <> 
        <div className={styles.profileContainer}>
      <ProfileCard
        name="Ananya S"
        age={24}
        height="5' 4"
        maritalStatus="Never Married"
        religion="Hindu, Rajput"
        location="Bengaluru | Hajipur"
        language="Hindi"
        profession="Marketing Professional"
        description="Ananya has completed Masters in Management. Growing up, she is disciplined and focused student with Growing up, she is disciplined and focused student with ..."
        imageUrl="https://img2.shaadi.com/imgs/profiles/250-photo-request-f.gif"
      />
      <div className={styles.profileDetails}>
        <div className={styles.profileSection}>
          <div className={styles.profileSectionHeader}>
          <div className={styles.profileHeader}>
            <h1 className={styles.profileTitle}>Detailed Profile</h1>
          </div>
          <div className={styles.profileHeader}>
            <h1 className={styles.profileTitle}>Partner Preferences</h1>
          </div>
          </div>
          <div className={styles.profileSectionShare}>
          <div className={styles.profileHeader}>
            <h1 className={styles.profileTitle}>Share</h1>
          </div>
          <div className={styles.profileHeader}>
            <h1 className={styles.profileTitle}>Print</h1>
          </div>
          </div>
        </div>

        <div className={styles.profileSection}>
          <div className={styles.profileHeader}>
            <div className={styles.imageContainer}>
              <img src="/images/quotation.png" alt="quotation" className={styles.image} width={40}/>
              <hr />
            </div>
            <div className={styles.profileContent}>
              <h1>About Neeta S</h1>
              <div className={styles.buttonGroup}>
                <button className={styles.button}>Id: SH79205129</button>
                <button className={styles.button}>Profile Created by Parent</button>
              </div>
              <p>
                Hello Welcome to my Daughters profile. My daughter has completed her degree in B. Com from Mumbai University. She is currently working as an Sr. Accountant in a private firm based in Vasai, Mumbai. She is kind hearted, Charming and cherises building strong family bonds. We are settled in Vasai, Our ancesteral origin is from Muzaffarpur, Bihar. She is looking for a partner who is from a similar family background and values both professional ambition and familial harmony. Open to proposals from Mumbai and nearby region with ancestral origin in Bihar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
      );
};

export default page;
