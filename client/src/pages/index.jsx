import Image from 'next/image';
import styles from '../styles/Home.module.css'
import acmLogo from '../assets/acmlogo.png'
import Navbar from '../components/navbar-component/navbar.jsx'


export default function Home() {
  return (
    /* Each function in JSX can only return ONE DOM element, so we have one top-level div */
    <div className={styles.main}> 
      <Navbar />
        <div className={styles.welcome}>
          <h2> Welcome to HackRacer! </h2>
          {"We do typeracing"}
        </div>
      <div className={styles.image}>
        <Image src={acmLogo} height={300} width={300} alt='ACM Logo'></Image>
        {}
      </div>
    </div>
  )
}
