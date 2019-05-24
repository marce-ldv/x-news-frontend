import React from 'react'
import './styles.scss'

const Drawer = () => {
    return (
        <div className={"drawer"}>
            <input type="image" className="logo-drawer" alt="logo"/>

            <div className="drawer-data">
                <ul className="drawer-li">
                    <li>MARCELO LUDOVINO</li>
                    <li>USER</li>
                </ul>
            </div>

            <div className="search-custom">
                <input className="form-control"
                    type="text"
                    placeholder="Search in articles"
                    aria-label="Search"
                />
            </div>

        </div>
    )
}

export default Drawer