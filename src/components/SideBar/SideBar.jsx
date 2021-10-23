import React from "react"
import {useHistory} from "react-router-dom"

import crossIcon from "../../assets/sidebarIcons/crossIcon.svg"

import HomeIcon from "../../assets/sidebarIcons/homeIcon"
import MessageIcon from "../../assets/sidebarIcons/messageIcon"
import Ranking from "../../assets/sidebarIcons/ranking"
import Challenge from "../../assets/sidebarIcons/challenge"
import Party from "../../assets/sidebarIcons/party"
import Connect from "../../assets/sidebarIcons/connect"
import Parade from "../../assets/sidebarIcons/parade"
import Group from "../../assets/sidebarIcons/group"

import bellIcon from "../../assets/headerIcons/bell.svg"
import profileImg from "../../assets/headerIcons/profile.jpg"
import angle from "../../assets/headerIcons/angle.svg"

import styles from "./styles.module.css"

const SideBar = (props) => {

  const history = useHistory()

  const handleNavChange = (url) => {
    history.push(url)
    props.setOpenSideBar(false)
    props.setStartToggle(true)
  }

  const handleToggle = () => {
    props.setOpenSideBar(!props.openSideBar)
    props.setStartToggle(true)
  }

  return (
    <div className={styles.container}>
      <img
        alt=""
        src={crossIcon} 
        onClick={handleToggle} 
        className={styles.cross}
      />

      <div className={styles.sidebarHeader}>
        <div className={styles.logo}></div>
        <p className={styles.appName}>bluecube</p>
      </div>

      <ul className={styles.navOne}>
        <li 
          className={history.location.pathname === "/" ? `${styles.activeNav}` : `${styles.inActiveNav}`}
          onClick={() => handleNavChange("/")}
        >
          
          {history.location.pathname === "/" ? <HomeIcon color="#332B9A" /> : <HomeIcon color="#ccc" />}
          <p>Home</p>
        </li>

        <li
          className={history.location.pathname === "/message" ? `${styles.activeNav}` : `${styles.inActiveNav}`}
          onClick={() => handleNavChange("/message")}
        >
          {history.location.pathname === "/message" ? <MessageIcon color="#332B9A" /> : <MessageIcon color="#ccc" />}
          <p>Message</p>
        </li>
      </ul>

      <div className={styles.shareContainer}>
        <h3 className={styles.shareText}>Share</h3>

        <ul className={styles.navOne}>
          <li 
            className={history.location.pathname === "/ranking" ? `${styles.activeNav}` : `${styles.inActiveNav}`}
            onClick={() => handleNavChange("/ranking")}
          >
            
            {history.location.pathname === "/ranking" ? <Ranking color="#332B9A" /> : <Ranking color="#ccc" />}
            <p>Ranking</p>
          </li>

          <li
            className={history.location.pathname === "/challenge" ? `${styles.activeNav}` : `${styles.inActiveNav}`}
            onClick={() => handleNavChange("/challenge")}
          >
            {history.location.pathname === "/challenge" ? <Challenge color="#332B9A" /> : <Challenge color="#ccc" />}
            <p>Challenge</p>
          </li>

          <li
            className={history.location.pathname === "/party" ? `${styles.activeNav}` : `${styles.inActiveNav}`}
            onClick={() => handleNavChange("/party")}
          >
            {history.location.pathname === "/party" ? <Party color="#332B9A" /> : <Party color="#ccc" />}
            <p>Party</p>
          </li>

          <li
            className={history.location.pathname === "/connect" ? `${styles.activeNav}` : `${styles.inActiveNav}`}
            onClick={() => handleNavChange("/connect")}
          >
            {history.location.pathname === "/connect" ? <Connect color="#332B9A" /> : <Connect color="#ccc" />}
            <p>Connect</p>
          </li>

          <li
            className={history.location.pathname === "/parade" ? `${styles.activeNav}` : `${styles.inActiveNav}`}
            onClick={() => handleNavChange("/parade")}
          >
            {history.location.pathname === "/parade" ? <Parade color="#332B9A" /> : <Parade color="#ccc" />}
            <p>Parade</p>
          </li>

          <li
            className={history.location.pathname === "/group" ? `${styles.activeNav}` : `${styles.inActiveNav}`}
            onClick={() => handleNavChange("/group")}
          >
            {history.location.pathname === "/group" ? <Group color="#332B9A" /> : <Group color="#ccc" />}
            <p>Group</p>
          </li>
      </ul>
      </div>

      <div className={styles.profile}>
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

      <div className={styles.notificationContainer}>
        <div className={styles.notification}>
          <img alt="" src={bellIcon}  className={styles.bellIcon} />
          <p className={styles.notificationText}>5</p>
        </div>
        <p className={styles.notificationWord}>Notification</p>
      </div>
    </div>
  )
}

export default SideBar