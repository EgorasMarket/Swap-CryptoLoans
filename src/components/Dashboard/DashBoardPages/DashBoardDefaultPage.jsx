import React, { useState, useEffect } from "react";
import InputOutlinedIcon from "@material-ui/icons/InputOutlined";
// import SiMastercard from
// import { SiMastercard, SiVisa } from "react-icons/si";
import "../../../css/dashBoarddefaultpage.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

const DashBoardDefaultPage = () => {
  const [active, setActive] = useState("supply");
  const [percentBtn, setPercentBtn] = useState("");
  const [activeBtn, setActiveBtn] = useState("supply-btn");

  const changeBg = (e) => {
    let currentId = e.currentTarget.id;
    setActive(currentId);
    setActiveBtn(currentId);
  };
  const activeClass = (e) => {
    let currentId = e.currentTarget.id;
    setPercentBtn(currentId);
  };

  return (
    <div className="dashboard-home">
      <section className="homeProfile-section">
        <div className="container">
          <div className="dashboard-area1">
            <div className="dashboard-area1-cont1">
              <div className="dashboard-area1-heading-div">
                <p className="dashboard-area1-heading-div-txt">
                  Please fill in or select the proportion bar below to enter the
                  amount of asset you want to supply.
                </p>
              </div>
              {/* ========= */}
              {/* ========= */}
              {/* ========= */}
              <div className="dashboard-area1-heading-coin-display">
                <div className="coin-display">
                  <img src="/img/ether-logo.svg" alt="" className="eth-icon" />{" "}
                  ETH Supplied
                </div>
                <div className="coin-display-amount">0.00</div>
              </div>
              {/* ========= */}
              {/* ========= */}
              {/* ========= */}
              <div className="dashboard-area1-heading-supply-withdraw-pages">
                <button
                  className={
                    active == "supply"
                      ? "supply-btn supply-btn-active"
                      : "supply-btn"
                  }
                  // "supply-btn supply-btn-active"
                  id="supply"
                  onClick={changeBg}
                >
                  Supply
                </button>
                <button
                  className={
                    active == "withdraw"
                      ? "supply-btn supply-btn-active"
                      : "supply-btn"
                  }
                  id="withdraw"
                  onClick={changeBg}
                >
                  Withdraw
                </button>
              </div>
              {/* ========= */}
              {/* ========= */}
              {/* ========= */}
              <div className="dashboard-area1-heading-supply-withdraw-input">
                <div className="withdraw-input-section1">
                  <div className="safe-to-withdraw">Safe to Withdraw</div>
                  <div className="safe-to-withdraw-figure">0.00</div>
                </div>
                <div className="withdraw-input-section2">
                  <input
                    type="search"
                    name=""
                    id=""
                    className="withdraw-input-box"
                  />
                </div>
                <div className="withdraw-input-section3">
                  <button
                    className={
                      percentBtn == "twentyFive_percent"
                        ? "percent-increase percent-increase-active"
                        : "percent-increase"
                    }
                    // "percent-increase percent-increase-active"
                    id="twentyFive_percent"
                    onClick={activeClass}
                  >
                    25%
                  </button>
                  <button
                    className={
                      percentBtn == "fifty_percent"
                        ? "percent-increase percent-increase-active"
                        : "percent-increase"
                    }
                    id="fifty_percent"
                    onClick={activeClass}
                  >
                    50%
                  </button>
                  <button
                    className={
                      percentBtn == "sevenFive_percent"
                        ? "percent-increase percent-increase-active"
                        : "percent-increase"
                    }
                    id="sevenFive_percent"
                    onClick={activeClass}
                    onchange={changeBg}
                  >
                    75%
                  </button>
                  <button
                    className={
                      percentBtn == "hundred_percent"
                        ? "percent-increase percent-increase-active"
                        : "percent-increase"
                    }
                    id="hundred_percent"
                    onClick={activeClass}
                    onchange={changeBg}
                  >
                    100%
                  </button>
                </div>
              </div>
              {/* ========= */}
              {/* ========= */}
              {/* ========= */}
              <div className="dashboard-area1-heading-supply-withdraw-btn">
                <button
                  className={activeBtn == "supply-btn" ? "withdraw-btn" : "not-withdraw-btn"}
                  id="supply-btn"
                  onchange={changeBg}
                >
                  Supply
                </button>
                <button
                  className="withdraw-btn"
                  id="withdraw-btn"
                  onchange={changeBg}
                >
                  Withdraw
                </button>
              </div>
            </div>

            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* ===================== */}
            {/* dashboard second container start */}
            <div className="dashboard-area1-cont2">
              <div className="dash-area1-cont2-header">
                <div className="dash-area1-cont2-header1">Profits</div>
              </div>
              <div className="dash-area1-cont2-titles">
                <div className="title1">User</div>
                <div className="title2">Bet</div>
                <div className="title3">Profit</div>
              </div>
              {/* ============= */}
              {/* ============= */}
              <div className="dash-area1-cont2-titles2">
                <div className="title1">Ekene</div>
                <div className="title2">20,000</div>
                <div className="title3">0.0255</div>
              </div>
              {/* ============= */}
              {/* ============= */}
              <div className="dash-area1-cont2-titles3">
                <div className="title1">John</div>
                <div className="title2">10,000</div>
                <div className="title3">0.2355</div>
              </div>
              {/* ============= */}
              {/* ============= */}
              <div className="dash-area1-cont2-titles2">
                <div className="title1">Morgan</div>
                <div className="title2">20,000</div>
                <div className="title3">0.0255</div>
              </div>
              {/* ============= */}
              {/* ============= */}
              <div className="dash-area1-cont2-titles3">
                <div className="title1">John</div>
                <div className="title2">10,000</div>
                <div className="title3">0.2355</div>
              </div>
              {/* ============= */}
              {/* ============= */}
              <div className="dash-area1-cont2-titles2">
                <div className="title1">Morgan</div>
                <div className="title2">20,000</div>
                <div className="title3">0.0255</div>
              </div>
              {/* ============= */}
              {/* ============= */}
              <div className="dash-area1-cont2-titles3">
                <div className="title1">John</div>
                <div className="title2">10,000</div>
                <div className="title3">0.2355</div>
              </div>
              {/* ============= */}
              {/* ============= */}
              <div className="dash-area1-cont2-titles2">
                <div className="title1">Morgan</div>
                <div className="title2">20,000</div>
                <div className="title3">0.0255</div>
              </div>
              {/* ============= */}
              {/* ============= */}
              <div className="dash-area1-cont2-titles3">
                <div className="title1">John</div>
                <div className="title2">10,000</div>
                <div className="title3">0.2355</div>
              </div>
              {/* ============= */}
              {/* ============= */}
              <div className="dash-area1-cont2-titles2">
                <div className="title1">Morgan</div>
                <div className="title2">20,000</div>
                <div className="title3">0.0255</div>
              </div>
              {/* ============= */}
              {/* ============= */}
              <div className="dash-area1-cont2-titles3">
                <div className="title1">John</div>
                <div className="title2">10,000</div>
                <div className="title3">0.2355</div>
              </div>
              {/* ============= */}
              {/* ============= */}
              <div className="dash-area1-cont2-titles2">
                <div className="title1">Morgan</div>
                <div className="title2">20,000</div>
                <div className="title3">0.0255</div>
              </div>
              {/* ============= */}
              {/* ============= */}
              <div className="dash-area1-cont2-titles3">
                <div className="title1">John</div>
                <div className="title2">10,000</div>
                <div className="title3">0.2355</div>
              </div>
              {/* ============= */}
              {/* ============= */}
              <div className="dash-area1-cont2-titles2">
                <div className="title1">Morgan</div>
                <div className="title2">20,000</div>
                <div className="title3">0.0255</div>
              </div>
              {/* ============= */}
              {/* ============= */}
              <div className="dash-area1-cont2-titles3">
                <div className="title1">John</div>
                <div className="title2">10,000</div>
                <div className="title3">0.2355</div>
              </div>
              {/* ============= */}
              {/* ============= */}
              <div className="dash-area1-cont2-titles2">
                <div className="title1">Morgan</div>
                <div className="title2">20,000</div>
                <div className="title3">0.0255</div>
              </div>
              {/* ============= */}
              {/* ============= */}
              <div className="dash-area1-cont2-titles3">
                <div className="title1">John</div>
                <div className="title2">10,000</div>
                <div className="title3">0.2355</div>
              </div>
              {/* ============= */}
              {/* ============= */}
              <div className="dash-area1-cont2-titles2">
                <div className="title1">Morgan</div>
                <div className="title2">20,000</div>
                <div className="title3">0.0255</div>
              </div>
              {/* ============= */}
              {/* ============= */}
              <div className="dash-area1-cont2-titles3">
                <div className="title1">John</div>
                <div className="title2">10,000</div>
                <div className="title3">0.2355</div>
              </div>
              {/* ============= */}
              {/* ============= */}
              <div className="dash-area1-cont2-titles2">
                <div className="title1">Morgan</div>
                <div className="title2">20,000</div>
                <div className="title3">0.0255</div>
              </div>
            </div>
            {/* dashboard second container end */}
          </div>
          {/* ======================= */}
          {/* ======================= */}
          {/* ======================= */}
          {/* ======================= */}
          <div className="dashboard-area2">
            {/* dashboard second container start */}
            <div className="dashboard-area1-cont3">
              <div className="dash-area1-cont2-header2">
                <div className="dash-area1-cont2-header1">Profits</div>
              </div>
              <div className="dash-area1-cont2-titles">
                <div className="title1">User</div>
                <div className="title2">Bet</div>
                <div className="title3">Profit</div>
              </div>
              {/* ============= */}
              {/* ============= */}
              <div className="dash-area1-cont2-titles2">
                <div className="title1">Ekene</div>
                <div className="title2">20,000</div>
                <div className="title3">0.0255</div>
              </div>
              {/* ============= */}
              {/* ============= */}
              <div className="dash-area1-cont2-titles3">
                <div className="title1">John</div>
                <div className="title2">10,000</div>
                <div className="title3">0.2355</div>
              </div>
              {/* ============= */}
              {/* ============= */}
              <div className="dash-area1-cont2-titles2">
                <div className="title1">Morgan</div>
                <div className="title2">20,000</div>
                <div className="title3">0.0255</div>
              </div>
              {/* ============= */}
              {/* ============= */}
              <div className="dash-area1-cont2-titles3">
                <div className="title1">John</div>
                <div className="title2">10,000</div>
                <div className="title3">0.2355</div>
              </div>
              {/* ============= */}
              {/* ============= */}
              <div className="dash-area1-cont2-titles2">
                <div className="title1">Morgan</div>
                <div className="title2">20,000</div>
                <div className="title3">0.0255</div>
              </div>
              {/* ============= */}
              {/* ============= */}
              <div className="dash-area1-cont2-titles3">
                <div className="title1">John</div>
                <div className="title2">10,000</div>
                <div className="title3">0.2355</div>
              </div>
              {/* ============= */}
              {/* ============= */}
              <div className="dash-area1-cont2-titles2">
                <div className="title1">Morgan</div>
                <div className="title2">20,000</div>
                <div className="title3">0.0255</div>
              </div>
            </div>
            {/* dashboard second container end */}
            {/* ==================== */}
            {/* ==================== */}
            {/* ==================== */}
          </div>
        </div>
      </section>
      {/* =================================================== */}
      {/* =================================================== */}
      {/* =================================================== */}
      {/* =================================================== */}
    </div>
  );
};

export default DashBoardDefaultPage;
