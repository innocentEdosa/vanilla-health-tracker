import './style.css';
import hospital from '../../assets/imgs/hospital.jpg'

const PreFooter = () => {
    return ( `
    <div class="prefooter__wrapper">

    <div class="prefooter__container">

    <div class="prefooter__content--top">
    <h6 class="prefooter__content--leadMajor">Here is a bit about health tracka</h6>
    <p class="prefooter__content--leadMinor">HealthTracka is a framework to track and rate service quality at primary health care centers and other health related expenditure by the federal government. Our initial focus is to support our project tracking officers, community champions, Civil Society Organisations and other citizens to track expenditures from the Basic Health Care Provisions Fund, BHCPF.  </p>
    </div>

    <div class="prefooter__content--bottom">
    <img src=${hospital} />
    </div>
    </div>

    </div>
    ` );
}
 
export default PreFooter;