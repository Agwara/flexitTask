import React from "react"

import useWindowWidth from "../../hooks/useWindowWidth"

import searchIcon from "../../assets/headerIcons/search.svg"
import barIcon from "../../assets/headerIcons/barSolid.svg"
import bellIcon from "../../assets/headerIcons/bell.svg"
import profileImg from "../../assets/headerIcons/profile.jpg"
import angle from "../../assets/headerIcons/angle.svg"

import styles from "./styles.module.css"

const Header = (props) => {
  const handleToggle = () => {
    props.setOpenSideBar(!props.openSideBar)
  }

  const windowWidth = useWindowWidth() 

  return (
    <div className={styles.container}>
      {
        windowWidth < 800 ? <img alt="" src={barIcon} onClick={handleToggle} className={styles.bar} /> : <div></div>
      }

      <div className={styles.searchContainer}>
        <img alt="" src={searchIcon}  className={styles.searchIcon} />

        <input
          className={styles.searchInput}
          placeholder="Find Something..." 
        />

        <button className={styles.searchbtn} >Search</button>
      </div>

      <div className={styles.notification}>
        <img alt="" src={bellIcon}  className={styles.bellIcon} />
        <p className={styles.notificationText}>5</p>
      </div>

      <div className={styles.profile}>
        <div className={styles.imgContainer}>
          <img alt="" src={profileImg}  className={styles.profileImg} />
          <p className={styles.status}></p>
        </div>

        <div className={styles.nameContainer}>
          <p className={styles.profileName}>Rihanna</p>
          <img alt="Rihanna Pics" src={angle} className={styles.angle} height="15" width="15" />
        </div>
      </div>
    </div>
  )
}

export default Header