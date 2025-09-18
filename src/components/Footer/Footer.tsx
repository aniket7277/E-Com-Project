import wu from "../../assets/img/westernUnion.svg";
import mc from "../../assets/img/masterCard.svg";
import pp from "../../assets/img/paypal.svg";
import vi from "../../assets/img/visa.svg";
import logo from "../../assets/img/logo.svg";
import fb from "../../assets/img/fb.svg";
import tw from "../../assets/img/twitter.svg";
import "./footer.css";
export default function Footer() {
  return (
    <>
      <footer className="footerWrapper">
        <div className="footerTopSec">
          <div className="footerLogo">
            <a href="">
              <img src={logo} alt="Logo" className="logo" />
            </a>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </p>
          </div>
          <div className="follow">
            <h4>Follow Us</h4>
            <p>
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
            <div className="social">
                <img src={fb} alt="facebook" />
                <img src={tw} alt="twitter" />
            </div>
          </div>
          <div className="contact">
            <h4>Contact Us</h4>
            <p>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
          </div>
        </div>
        <div className="footerMidSec">
          <div className="info">
            <h4>Infomation</h4>
            <p>About Us Infomation Privacy Policy Terms & Conditions</p>
          </div>
          <div className="service">
            <h4>Services</h4>
            <p>About Us Infomation Privacy Policy Terms & Conditions</p>
          </div>
          <div className="myact">
            <h4>My Account</h4>
            <p>About Us Infomation Privacy Policy Terms & Conditions</p>
          </div>
          <div className="offer">
            <h4>Our Offers</h4>
            <p>About Us Infomation Privacy Policy Terms & Conditions</p>
          </div>
        </div>
        <div className="footerBottomSec">
            <div className="copyright">
                <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
            </div>
            <div className="visa">
                <img src={wu} alt="wester union" />
                <img src={mc} alt="master card" />
                <img src={pp} alt="paypal" />
                <img src={vi} alt="visa" />
            </div>
        </div>
      </footer>
    </>
  );
}
