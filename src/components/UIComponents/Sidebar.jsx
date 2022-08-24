import React from 'react';
import logo from '../../static/logo.png';
import avatar from '../../static/sampleAvatar.jpg'
import ListItem from './Listitem';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
//Material UI Imports
import DashboardIcon from '@mui/icons-material/Dashboard';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SettingsIcon from '@mui/icons-material/Settings';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

function Sidebar (){

return(
   <div className="sidebar">
     <div className="logo-container">
        <img src={logo}/>
    </div>
    <div className="sidebar-items">
        <ul>
            <ListItem text="Dashboard">
                <DashboardIcon/>
            </ListItem>
            <ListItem text="Filters">
                <FilterAltOutlinedIcon/>
            </ListItem>
            <ListItem text="Subscription">
                <PeopleOutlineIcon/>
            </ListItem>
            <ListItem text="Consumers">
                <AccountBoxIcon/>
            </ListItem>
            <ListItem text="Advertisements">
                <FeaturedVideoIcon/>
            </ListItem>
            <ListItem text="Print Labels">
                <InsertDriveFileIcon/>
            </ListItem>
            <ListItem text="Payments">
                <CurrencyRupeeIcon/>
            </ListItem>
            <ListItem text="Plans">
                <SettingsIcon/>
            </ListItem>
            <ListItem text="Magazines">
                <ImportContactsIcon/>
            </ListItem>
        </ul>
    </div>
    <div className="profile-section">
    <div className="profile">
            <img src={avatar}/>
            <div className="profileInfo">
                <h2>John Doe</h2>
                <h4>Admin</h4>
                </div>
            </div>
       
        <div className="logOutButton">
                <ExitToAppIcon/>
                <h3>Log Out</h3>
        </div>
    </div>
   </div>
)
}

export default Sidebar;