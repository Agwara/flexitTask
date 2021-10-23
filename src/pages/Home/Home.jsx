import React from "react";

import Header from "../../components/Header/Header"
import styles from "./styles.module.css"

const Home = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header
          openSideBar={props.openSideBar}
          setOpenSideBar={props.setOpenSideBar}  
        />
      </div>

      <div className={styles.content}>
        content
      </div>
    </div>
  )
}

export default Home;