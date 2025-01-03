import React from 'react'
import ProfileCard from '../_features/profilecard/ProfileCard'
import styles from './page.module.css'
const page: React.FC = () => {
  return (
   <div className={styles.profileSection}>
    <div className={styles.filterSection}>
      <h1>Filter Section</h1>
    </div>
    <div className={styles.profileCard} >
     
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
   </div>
    <div className={styles.chatSection}>
      <h1>Chat Section</h1>
    </div>
   </div>
  )
}

export default page
