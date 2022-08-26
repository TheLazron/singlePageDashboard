import React from "react";
import Sidebar from '../UIComponents/Sidebar';
import DatePicker from '../UIComponents/DatePicker'
import ProgressBar from 'react-bootstrap/ProgressBar';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TopWidget from "../UIComponents/TopWidget";
import { Doughnut, Bar } from "react-chartjs-2";
import {doughnutData, doughnutOptions} from '../UIComponents/DoughnutChart';
import {barData, barOptions} from '../UIComponents/BarChart';
function Dashboard(){


return (
<div className="dashboard">
<Sidebar/>
    <div className="homeContainer">
    <div className="dashboardHeader">
        <h1>Dashboard</h1>
        <div className="datePicker">
            <CalendarTodayIcon />
            <DatePicker/>
        </div>
       
    </div>
    <div className="WidgetesContainer">
        <div className="topWidgets">
            <TopWidget title="Total Consumers" count={1127} change={24}/>  
            <TopWidget title="Active Subscriptions" count={969} change={26} renderBadge={true} renderGraph={true}/>  
            <TopWidget title="Inactive Users" count={158} change={-9} renderBadge={true} renderGraph={true}/>   
        </div>
        <hr/>
        <div className="incomeDiv">
            <h2>Income</h2>
            <div className="incomeGraph">

            </div>
        </div>
        <hr/>
        <div className="bottomPanel">
            <div className="donutChart" style={{width: '5rem', height: 'auto'}}>
            <h4 style={{marginBottom: "2rem"}}>Subscribers</h4>
            <Doughnut data={doughnutData} options={doughnutOptions}/>
            </div>
            <div className="lineChart">
            <h4 style={{marginBottom: "2rem"}}>Advertisements</h4>
            <Bar data={barData} options={barOptions}/>
            </div>
        </div>
    </div>
    </div>
</div>
)
}

export default Dashboard;