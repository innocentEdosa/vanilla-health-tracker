import './style.css';
import hospital from '../../assets/imgs/hospital.jpg'

const PreFooter = () => {
    return ( `
    <div class="prefooter__wrapper">

    <div class="prefooter__container">

    <div class="prefooter__content--top">
    <h6 class="prefooter__content--leadMajor">Here is a bit about HealthTracka.</h6>
    <p class="prefooter__content--leadMinor">
    HealthTracka provides you with the necessary tools that allow you to track and rate service quality at Primary Health Care Centers in Nigeria and other health-related expenditures by the Federal Government. More importantly, this platform supports Tracka’s project tracking officers, Community Champions, Civil Society Organisations(CSOs) and other active citizens to track expenditures from the Basic Health Care Provisions Fund (BHCPF) </p>
    </div>

    <div class="prefooter__content--bottom">
    <img src=${hospital} />
    </div>
    </div>

    </div>
    ` );
}
 
export default PreFooter;