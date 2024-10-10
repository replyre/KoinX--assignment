import React from "react";
import { Layout, Row, Col } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer
      style={{ backgroundColor: "#000", color: "#fff", padding: "20px 50px" }}
    >
      <div className="footer-social">
        <img src="./images/KoinX-logo-dark.svg" alt="" />{" "}
        <div style={{ display: "flex", gap: "25px", marginTop: "10px" }}>
          <FacebookOutlined
            style={{ fontSize: "30px", color: "#2997F9", cursor: "pointer" }}
          />
          <TwitterOutlined
            style={{ fontSize: "30px", color: "#2997F9", cursor: "pointer" }}
          />
          <LinkedinOutlined
            style={{ fontSize: "30px", color: "#2997F9", cursor: "pointer" }}
          />
          <InstagramOutlined
            style={{ fontSize: "30px", color: "#2997F9", cursor: "pointer" }}
          />
          <YoutubeOutlined
            style={{ fontSize: "30px", color: "#2997F9", cursor: "pointer" }}
          />
        </div>
      </div>
      <Row justify="space-between">
        <Col xs={16} sm={12} md={4}>
          <h3>Crypto Taxes for</h3>
          <div>
            <p>Individuals and Investors</p>
            <p>Tax Professionals and Accountants</p>
            <p>Exchanges and Web3 Projects</p>
          </div>
          <img src="./images/iso.png" alt="" height={"150px"} />
        </Col>

        <Col xs={16} sm={12} md={4}>
          <h3>Free Tools</h3>
          <div>
            <p>Crypto Prices Live</p>
            <p>Crypto Tax Calculator</p>
            <p>Crypto Tax Saving Speculator</p>
            <p>Crypto Profit Calculator</p>
            <p>Crypto Converter</p>
            <p>Crypto Staking ROI Calculator</p>
          </div>
        </Col>

        <Col xs={16} sm={12} md={4}>
          <h3>Resouce Center</h3>
          <div>
            <p>Crypto Tax Guides</p>
            <p>Dumb Ways To Lose Money</p>
            <p>Crypto Tax Savings Guide</p>
            <p>Blogs</p>
            <p>Crypto Buying Guides</p>
            <p>Crypto Staking Guides</p>
            <p>Crypto Mining Guides</p>
            <p>Crypto Price Predictions</p>
          </div>
        </Col>
        <Col xs={16} sm={12} md={4}>
          <h3>Help and Support</h3>
          <div>
            <p>Product Guides</p>
            <p>How To Guides</p>
            <p>Templates</p>
            <p>Contact us</p>
          </div>
        </Col>
        <Col xs={16} sm={12} md={4}>
          <h3>Company</h3>
          <div>
            <p>About Us</p>
            <p>Backed by</p>
            <p>Media and Press</p>
            <p>
              Careers <span>We're hiring</span>
            </p>
            <p>Security</p>
            <p>Refund Policy</p>
            <p>Brand Assets</p>
            <p>Terms of use</p>
            <p>Privacy Policy</p>
          </div>
        </Col>
        <div className="footer-end">
          © All rights reserved by Simplify Infotech Pvt. Ltd.
        </div>
      </Row>
    </Footer>
  );
};

export default AppFooter;
