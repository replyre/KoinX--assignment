import logo from "./logo.svg";
import "./App.css";
import AppHeader from "./components/Header";
import Calculator from "./components/calculator/Calculator";
import FAQs from "./components/FAQs";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <AppHeader />
      <div className="main-container">
        <div className="sub-main-container">
          <Calculator />
          <FAQs />
        </div>
        <div className="banner">
          <div>
            <h1>Get Started with KoinX for FREE</h1>
            <p>
              With our range of features that you can equip for free, KoinX
              allows you to be more educated and aware of your tax reports.
            </p>
          </div>
          <div className="banner-img-btn">
            <img src="./images/banner.svg" alt="" />
            <Button style={{ fontSize: "16px", fontWeight: "bold" }}>
              {" "}
              Get Started for FREE <ArrowRightOutlined />{" "}
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
