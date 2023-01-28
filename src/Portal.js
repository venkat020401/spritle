import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from './TeachersDashboard'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

function Portal({ isVisible }) {
    return (
        <div>
            <div id="wrapper">
                <Sidebar isVisible={isVisible}/>
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <Topbar isVisible={isVisible} />
                        <div class="container-fluid">
                            <Outlet></Outlet>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Portal
