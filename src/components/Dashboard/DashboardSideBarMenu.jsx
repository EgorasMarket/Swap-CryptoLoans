import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import SecurityIcon from "@mui/icons-material/Security";
import BarChartIcon from "@mui/icons-material/BarChart";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import DescriptionIcon from "@mui/icons-material/Description";
import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import "../../css/dashBoardSideBar.css";
import "../../css/dashboardheader.css";

const DashboardSideBarMenu = () => {
  const [activeBg, setActiveBg] = useState("market");
  const [click, setClick] = useState("drop");

  const changeOnclick = () => {
    if (click === "drop") {
      setClick = () => "notdrop";
    }
  };
  const changeBg = (e) => {
    let currentId = e.currentTarget.id;
    setActiveBg(currentId);
  };

  const linksActive = window.location.pathname;

  useEffect(() => {
    if (linksActive === "/dashboard/lending") {
      setActiveBg("home");
      document.getElementById("FooterId").style.display = "none";
    }
    if (linksActive === "/dashboard") {
      setActiveBg("market");
      document.getElementById("FooterId").style.display = "none";
    }
    if (linksActive === "/dashboard/transaction") {
      setActiveBg("transaction");
      document.getElementById("FooterId").style.display = "none";
    }
    if (linksActive === "/dashboard/governance") {
      setActiveBg("governance");
      document.getElementById("FooterId").style.display = "none";
    }
    if (linksActive === "/dashboard/swap") {
      setActiveBg("swap");
      document.getElementById("FooterId").style.display = "none";
    }
    if (linksActive === "/dashboard/whitepaper") {
      setActiveBg("whitepaper");
      document.getElementById("FooterId").style.display = "none";
    }

    // if (screen.width < 1220) {
    //   document.getElementById("open_icon").style.display == "none";
    //   document.getElementById("close_icon").style.display == "none";
    //   console.log("i workoooo");
    // }
  }, []);


  const dropDownOpen = () => {
    let sideBar = document.getElementById("side_bar");
    let sideBarWrapper = document.getElementById("side_bar_wrapper");
    let closeIcon = document.getElementById("close_icon");
    let openIcon = document.getElementById("open_icon");
    sideBarWrapper.style.display = "block";
    sideBar.style.width = "230px";

    openIcon.style.display = "none ";
    closeIcon.style.display = "inline-block";
  };

  //   const closeIcon = document.getElementById("close_icon");
  //   const openIcon = document.getElementById("open_icon");

  // if (window.innerWidth >= 1220) {
  //   openIcon.style.display = "none ";
  //   closeIcon.style.display = "none";
  //   console.log("i workoooo");
  // } else {
  //   openIcon.style.display = "inline-block ";
  //   closeIcon.style.display = "none";
  //   console.log("i workoooo");
  // }

  const dropDownClose = () => {
    let sideBar = document.getElementById("side_bar");
    let sideBarWrapper = document.getElementById("side_bar_wrapper");
    let closeIcon = document.getElementById("close_icon");
    let openIcon = document.getElementById("open_icon");
    sideBar.style.width = "0px";
    sideBarWrapper.style.display = "none";
    openIcon.style.display = "inline-block";
    closeIcon.style.display = "none";
  };
  return (
    <div className="sidebar" id="side_bar">
      <div>
        {/* header section  start*/}
        <section className="DashBoardHeaderSection">
          <div className="container-fluid">
            <div className="dashboard-area">
              <div className="egrLogo2Cont3">
                <img
                  src="/img/open-drop-icon.svg"
                  alt=""
                  className="drop-open-icon"
                  id="open_icon"
                  onClick={dropDownOpen}
                />
                <img
                  src="/img/close-drop-icon.svg"
                  alt=""
                  className="drop-close-icon"
                  id="close_icon"
                  onClick={dropDownClose}
                />
                <a href="/" alt="">
                  <img
                    src="/img/egoras-logo.svg"
                    alt="..."
                    className="egr-logo3"
                  />
                </a>
              </div>
              <button className="logout-btn">
                Log out <ExitToAppIcon />
              </button>
            </div>
          </div>
        </section>
        {/* header section  end*/}
        {/* =================================================== */}
        {/* =================================================== */}
        {/* =================================================== */}
      </div>
      <div className="sidebarWrapper" id="side_bar_wrapper">
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Dashboard</h3> */}
          <ul className="sidebarList">
            {/* =================== */}
            {/* =================== */}
            {/* =================== */}
            {/* =================== */}
            <Link
              to="/dashboard"
              id="market"
              className="link"
              onClick={changeBg}
            >
              <li
                className={
                  activeBg == "market"
                    ? "sidebarListItem list-item-active"
                    : "sidebarListItem"
                }
              >
                <BarChartIcon className="sidebarIcon" />
                Markets
              </li>
            </Link>
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            <Link
              to="/dashboard/lending"
              id="home"
              className="link"
              onClick={changeBg}
            >
              <li
                className={
                  activeBg == "home"
                    ? "sidebarListItem list-item-active"
                    : "sidebarListItem"
                }

                // "sidebarListItem list-item-active"
              >
                <AttachMoneyIcon className="sidebarIcon" />
                Lending
              </li>
            </Link>
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}

            <Link
              to="/dashboard/transaction"
              className="link"
              id="transaction"
              onClick={changeBg}
            >
              <li
                className={
                  activeBg == "transaction"
                    ? "sidebarListItem list-item-active"
                    : "sidebarListItem"
                }
              >
                <ImportExportIcon className="sidebarIcon" />
                Staking
              </li> 
            </Link>
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            <Link to="/dashboard/governance" className="link" id="governance" onClick={changeBg}>
              <li
                className={
                  activeBg == "governance"
                    ? "sidebarListItem list-item-active"
                    : "sidebarListItem"
                }
              >
                <HowToVoteIcon className="sidebarIcon" />
                Governance
              </li>
            </Link>

            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            <Link
              to="/dashboard/swap"
              className="link"
              id="swap"
              onClick={changeBg}
            >
              <li
                className={
                  activeBg == "swap"
                    ? "sidebarListItem list-item-active"
                    : "sidebarListItem"
                }
              >
                <SwapHorizontalCircleIcon className="sidebarIcon" />
                Swap
              </li>
            </Link>

            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            <Link
              to="/dashboard/whitepaper"
              className="link"
              id="whitepaper"
              onClick={changeBg}
            >
              <li
                className={
                  activeBg == "whitepaper"
                    ? "sidebarListItem list-item-active"
                    : "sidebarListItem"
                }
              >
                <DescriptionIcon className="sidebarIcon" />
                White Paper
              </li>
            </Link>

            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* <Link to="#" className="link" id="security" onClick={changeBg}>
              <li
                className={
                  activeBg == "security"
                    ? "sidebarListItem list-item-active"
                    : "sidebarListItem"
                }
              >
                <SecurityIcon className="sidebarIcon" />
                Security
              </li>
            </Link> */}
            {/* <a className="nav-item_link__yU0Vp" href="/staking">
              <span
                className="nav-item_linkWrapper__1IVev"
                role="button"
                tabindex="0"
              >
                <div
                  className="nav-item_spacer__3_Yzq nav-item_spacerTop__2C-7C"
                  style={{ backgroundColor: "rgb(255, 255, 255)" }}
                >
                  <div
                    className="nav-item_spacerInner__HJWlk"
                    style={{ backgroundColor: "rgb(28, 34, 48)" }}
                  ></div>
                </div>
                <div
                  className="nav-item_linkBody__2ilRo"
                  style={{ backgroundColor: "rgb(255, 255, 255)" }}
                >
                  <img src="/static/media/stake-active.62f4330e.svg" alt="" />
                  <span className="nav-item_text__1Kr9k">Staking</span>
                </div>
                <div
                  className="nav-item_spacer__3_Yzq nav-item_spacerBottom__EdM8-"
                  style={{ backgroundColor: "rgb(255, 255, 255)" }}
                >
                  <div
                    className="nav-item_spacerInner__HJWlk"
                    style={{ backgroundColor: "rgb(28, 34, 48)" }}
                  ></div>
                </div>
              </span>
            </a> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardSideBarMenu;
