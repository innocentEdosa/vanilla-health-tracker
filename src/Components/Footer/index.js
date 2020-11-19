import './style.css';
import logo from '../../assets/imgs/Logo.svg';
import twitter from '../../assets/imgs/twitter.svg';
import facebook from '../../assets/imgs/facebook.svg';
import instagram from '../../assets/imgs/instagram.svg';
import linkedin from '../../assets/imgs/Linkedin.svg';

const Footer = () => {
    return ( `<div class="footer__wrapper">

    <div class="footer__section--top">
    <div class="footer__section--top-logo">
    <img class="" src=${logo} /><span>Health</span>
    </div>

    <div class="footer__section--top-links">
    <a><img src=${twitter} /></a>
    <a><img src=${facebook} /></a>
    <a><img src=${instagram} /></a>
    <a><img src=${linkedin} /></a>
    </div>
    </div>

    <div class="footer__section--bottom">
    <h6 class="footer__section--bottom-lead">©2018 - Health Tracka by BudgIT  |   All right reserved</h6>
    </div>

    </div>` );
}
 
export default Footer;