import React, {useState} from "react"
import { Route } from "react-router-dom"

import SideBar from "../components/SideBar/SideBar"
import pageStyle from "./pageStyle.module.css"

import useWindowWidth from "../hooks/useWindowWidth"

const PrivateRoute = ({
	component: Component,
	...rest
}) => {

	const [openSideBar, setOpenSideBar] = useState(false)
	const [startToggle, setStartToggle] = useState(false)
	
	const windowWidth = useWindowWidth()

	return (
		<Route {...rest} component={(props) => (
			<div className={pageStyle.container}>		
				<div className={windowWidth > 800 ? pageStyle.sideBar : openSideBar ? 
					pageStyle.openSideBar : startToggle ? pageStyle.closeSideBar : pageStyle.initialClose
					}
				>
					<SideBar
						openSideBar={openSideBar}
						setOpenSideBar={setOpenSideBar} 
						setStartToggle={setStartToggle}
					/>
				</div>

				<div className={pageStyle.component}>
					<Component 
						{...props}
						openSideBar={openSideBar}
						setOpenSideBar={setOpenSideBar} 
						setStartToggle={setStartToggle}
					/>
				</div>		
			</div>
		)}
	/>
	)
}

export default PrivateRoute;