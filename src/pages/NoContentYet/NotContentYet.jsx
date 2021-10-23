import React from "react"

import useWindowWidth from "../../hooks/useWindowWidth"

import barIcon from "../../assets/headerIcons/barSolid.svg"
import styles from "./styles.module.css"

const NotContentYet = (props) => {
  const handleToggle = () => {
    props.setOpenSideBar(!props.openSideBar)
  }

  
  const windowWidth = useWindowWidth() 

  return (
    <div className={styles.container}>
      <div className={styles.barContainer}>
        {
          windowWidth < 800 ? <img alt="" src={barIcon} onClick={handleToggle} className={styles.bar} /> : <div></div>
        }
      </div>
        <h1>No Content Yet</h1>
    </div>
  )
}

export default NotContentYet