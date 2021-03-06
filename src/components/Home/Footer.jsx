import React, { useEffect } from "react";
import { Twitter, Facebook, YouTube, Instagram } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Accordion from "@material-ui/core/Accordion";
// import OpenVaultPage from "./DashBoardPages/OpenVaultPage"im
import OpenVaultPage from "../Dashboard/DashBoardPages/OpenVaultPage";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../../css/footer.css";
import "../../css/footerMobile.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Footer = () => {
  const assets = [
    {
      img: "/img/btc-logo.svg",
      name: "Bitcoin",
      type: "BTC",
      eusd_Avail: "100M",
      stable: "0.50%",
      ratio: "150%",
    },

    {
      img: "/img/ether-logo.svg",
      name: "Ethereum",
      type: "ETH",
      eusd_Avail: "99.37M",
      stable: "2.00%",
      ratio: "145%",
    },

    {
      img: "/img/tether-icon.svg",
      name: "Tether",
      type: "USDT",
      eusd_Avail: "90M",
      stable: "1.00%",
      ratio: "100%",
    },

    {
      img: "/img/bnb-icon.svg",
      name: "Binance",
      type: "BNB",
      eusd_Avail: "6.93M",
      stable: "1.00%",
      ratio: "175%",
    },
    {
      img: "/img/yearn-icon.svg",
      name: "Yearn",
      type: "YF1",
      eusd_Avail: "6.44M",
      stable: "1.00%",
      ratio: "165%",
    },
    {
      img: "/img/uniswap-icon.svg",
      name: "Uniswap",
      type: "UNI",
      eusd_Avail: "5.0M",
      stable: "1.50%",
      ratio: "120%",
    },

    {
      img: "/egoras-favicon.svg",
      name: "Egoras",
      type: "EGR",
      eusd_Avail: "100M",
      stable: "0.50%",
      ratio: "170%",
    },
    {
      img: "/img/matic-icon.svg",
      name: "Matic",
      type: "MATIC",
      eusd_Avail: "3.00M",
      stable: "3.00%",
      ratio: "175%",
    },
    {
      img: "/img/aave-icon.svg",
      name: "Aave",
      type: "AAVE",
      eusd_Avail: "5.00M",
      stable: "1.00%",
      ratio: "165%",
    },
    {
      img: "/img/wrapped-btc.svg",
      name: "Wrapped Bitcoin",
      type: "WBTC",
      eusd_Avail: "30.80M",
      stable: "2.00%",
      ratio: "145%",
    },
    {
      img: "/img/egc-icon.svg",
      name: "Egoras Credit",
      type: "EGC",
      eusd_Avail: "90M",
      stable: "0.50%",
      ratio: "120%",
    },
    {
      img: "/img/chain-link-icon.svg",
      name: "Chainlink",
      type: "LINK",
      eusd_Avail: "6.93M",
      stable: "1.00%",
      ratio: "165%",
    },
  ];

  // assets.forEach(asset);

  const FooterHide = window.location.pathname;
  useEffect(() => {
    // console.log(match.assets[0].type, "footer00");

    const urlArr = FooterHide.split("/");

    console.log("/vault/" + urlArr[2] + "/EUSD");

    if (FooterHide === "/vault/" + urlArr[2] + "/EUSD") {
      document.getElementById("FooterId").style.display = "none";
    }

    if (FooterHide === "/login") {
      document.getElementById("FooterId").style.display = "none";
    }

    if (FooterHide === "/signup") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/dashboard") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/dashboard/") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/dashboard/lending") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/dashboard/whitepaper") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/dashboard/transaction") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/dashboard/egr-balance") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/dashboard/swap") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/dashboard/governance") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/dashboard/governance/details") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === `/vault/${assets[3].type}/EUSD`) {
      document.getElementById("FooterId").style.display = "none";
    }
    // if (FooterHide === `/vault/${assets[(6, 7)].type}/EUSD`) {
    //   document.getElementById("FooterId").style.display = "none";
    // }
  });

  const classes = useStyles();

  return (
    <div id="FooterId">
      <section className="footerSection">
        <div className="container-fluid">
          <div className="footerArea">
            <div className="footerCard1">
              <a href="#">
                {" "}
                <img
                  src="/img/egoras-logo.svg"
                  alt="..."
                  className="egr2-logo"
                />
              </a>

              <div className="footerIcons">
                <a
                  href="https://twitter.com/egorasmarket"
                  className="twitter"
                  target="_blank"
                >
                  <Twitter />
                </a>
                <a
                  href="https://web.facebook.com/egorasmarket/"
                  className="twitter"
                  target="_blank"
                >
                  <Facebook />
                </a>
                <a
                  href="https://instagram.com/egorasofficial"
                  className="twitter"
                  target="_blank"
                >
                  <Instagram />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCHfi5EwXig46xp5Dx8hVBHQ"
                  className="twitter"
                  target="_blank"
                >
                  <YouTube />
                </a>
              </div>
            </div>

            <div className="footerCard2">
              <div className="footerCardTitle">General</div>
              <div className="footerLinks">
                {/* <a href="/" className="c1link1 a">
                  Home
                </a> */}
                <a href="/explore_loans" className="c1link1" target="_blank">
                  Explore Collaterals
                </a>
                <a href="/documentation" className="c1link1" target="_blank">
                  Documentation
                </a>
              </div>
            </div>

            <div className="footerCard2">
              <div className="footerCardTitle">About Us</div>
              <div className="footerLinks">
                <a href="#howitworks" className="c1link1 ">
                  How it works
                </a>
                {/* <a href="#token" className="c1link1">
                  Tokens
                </a> */}
                <a
                  href="https://www.youtube.com/channel/UCHfi5EwXig46xp5Dx8hVBHQ/videos"
                  className="c1link1"
                  target="_blank"
                >
                  Stories
                </a>
              </div>
            </div>

            <div className="footerCard2">
              <div className="footerCardTitle">Legal</div>
              <div className="footerLinks">
                <a href="/privacy" className="c1link1 " target="_blank">
                  Privacy policy
                </a>
                <a href="/terms-conditions" className="c1link1" target="_blank">
                  Terms & conditions
                </a>
                {/* <a href="#partners" className="c1link1" target="_blank">
                  Partners
                </a> */}
              </div>
            </div>

            <div className="footerCard2">
              <div className="footerCardTitle">Tokens</div>
              <div className="footerLinks">
                {/* <a href="/egr-token" className="c1link1" target="_blank">
                  EGR
                </a> */}
                <a href="/eusd-token" className="c1link1" target="_blank">
                  EUSD
                </a>
                <a href="/egc" className="c1link1" target="_blank">
                  EGC
                </a>
              </div>
            </div>

            <div className="footerCard2">
              <div className="footerCardTitle">Contact Us</div>
              <div className="footerLinks">
                <a href="https://t.me/egorasmarket" className="c1link1 ">
                  Get in Touch Today
                </a>
                <a href="" className="c1link1"></a>
                <a href="/" className="c1linklast">
                  cs@egoras.com
                </a>
              </div>
            </div>

            {/* =================================
            ==================== */}
            <div className="footerCard3">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>General </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="footerLinks">
                    {/* <a href="/" className="c1link1 a">
                      Home
                    </a> */}
                    <a
                      href="/explore_loans"
                      className="c1link1"
                      target="_blank"
                    >
                      Explore Collaterals
                    </a>
                    <a
                      href="/documentation"
                      className="c1link1"
                      target="_blank"
                    >
                      Documentation
                    </a>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>About Us</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="footerLinks">
                    <a href="#howitworks" className="c1link1 ">
                      How it works
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCHfi5EwXig46xp5Dx8hVBHQ/videos"
                      className="c1link1"
                      target="_blank"
                    >
                      Stories
                    </a>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>Legal</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="footerLinks">
                    <a href="/privacy" className="c1link1 " target="_blank">
                      Privacy policy
                    </a>
                    <a
                      href="/terms-conditions"
                      className="c1link1"
                      target="_blank"
                    >
                      Terms & conditions
                    </a>
                    {/* <a href="#partners" className="c1link1" target="_blank">
                      Partners
                    </a> */}
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>Tokens</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="footerLinks">
                    {/* <a href="/egr-token" className="c1link1 a" target="_blank">
                      EGR
                    </a> */}
                    <a href="/eusd-token" className="c1link1" target="_blank">
                      EUSD
                    </a>
                    <a href="/egc" className="c1link1" target="_blank">
                      EGC
                    </a>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>
                    Contact Us
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="footerLinks">
                    <a href="https://t.me/egorasmarket" className="c1link1 ">
                      Get in Touch Today
                    </a>
                    <a href="" className="c1link1"></a>
                    <a href="/" className="c1linklast">
                      cs@egoras.com
                    </a>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <hr></hr>
          <h5 className="footerBottomPara">
            ????? 2021 Egoras Technologies LTD(RC - 1832671). All rights reserved .
          </h5>
        </div>
      </section>
    </div>
  );
};

export default Footer;
