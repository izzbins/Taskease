import React from "react";
import "../Css/dashboard.css";
import woman from "../Images/woman.png";
import checkbox from "../Images/check-box.png";
import tips from "../Images/tips.png";
import searchicon from "../Images/search-icon.png";
import plusicon from "../Images/plus-icon.png";
import logout from "../Images/logout-icon.png";
import profile from "../Images/profile-icon.png";


export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="div">
        <div className="div-2">
          <header className="header">
            <div className="frame">
            <img className="dashboard-icon" src={searchicon} alt="Search" />
              <div className="text-wrapper">Search</div>
            </div>
            <div className="frame-2">
            <img className="dashboard-icon" src={tips} alt="Tips" />
            <img className="ellipse" alt="Ellipse" src={profile} />
            </div>
            <div className="heading">
              <div className="sign-out">
                <div className="item">
                  <div className="text-wrapper-2">Sign out</div>
                  <img className="mdi-logout" alt="Mdi logout" src={logout}/>
                </div>
              </div>
            </div>
          </header>
          <div className="main">
            <div className="hero">
              <div className="overlap-group">
                <div className="rectangle" />
                <div className="name">
                  <div className="text-wrapper-3">Hello, Beautiful Human!</div>
                  <p className="p">What do you want to do today?</p>
                </div>

              </div>
            </div>
            <div className="today-s">
              <div className="date-heading">
                <div className="text-wrapper-4">Today’s Tasks</div>
                <div className="delete-and-date">
                  <div className="text-wrapper-5">Delete All</div>
                  <div className="text-wrapper-6">Monday, 8 April 2024</div>
                </div>
              </div>
              <div className="tasks-and-stat">
                <div className="tasks">
                  <div className="task">
                    <div className="checklist">
                    <img className="dashboard-material-symbols" src={checkbox} alt="Check box" />
                      <div className="text-wrapper-7">Buy monthly groceries</div>
                    </div>
                  </div>
                  <div className="checklist-wrapper">
                    <div className="checklist">
                    <img className="dashboard-material-symbols" src={checkbox} alt="Check box" />
                      <div className="text-wrapper-7">Pick up the kids</div>
                    </div>
                  </div>
                </div>
                <div className="stats">
                  <div className="div-3">
                    <div className="rectangle-2" />
                    <div className="complete-stats">
                      <div className="stats-2">
                        <div className="text-wrapper-8">40%</div>
                        <div className="text-wrapper-9">Completed tasks</div>
                      </div>
                    </div>
                  </div>
                  <div className="div-3">
                    <div className="rectangle-3" />
                    <div className="active-stats">
                      <div className="stats-2">
                        <div className="text-wrapper-8">60%</div>
                        <div className="text-wrapper-9">Active tasks</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <div className="overlap">
          <div className="rectangle-4" />
          <div className="contents">
            <div className="logo">
              <div className="text-wrapper-10">Task Ease</div>
            </div>
            <div className="options-and-button">
              <div className="div-4">
                <div className="rectangle-5" />
                <div className="add-task">
                  <div className="text-wrapper-7">Add Task</div>
                  <div className="div-4">
                    <div className="ellipse-2" />
                    <img className="add" alt="Add" src={plusicon}/>
                  </div>
                </div>
              </div>
              <div className="options">
                <div className="div-wrapper">
                  <div className="text-wrapper-11">Dashboard</div>
                </div>
                <div className="active">
                  <div className="text-wrapper-11">Active</div>
                </div>
                <div className="completed">
                  <div className="text-wrapper-11">Completed</div>
                </div>
                <div className="completed">
                  <div className="text-wrapper-11">Recently Deleted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
