import firstAid from '../../assets/imgs/first_aid.svg';

const BudgetDataDisplay = () => {
    return `
    <div class="dataDisplay__wrapper">
        <div class="dataDisplay__container">

        <div class="dataDisplay__container--top">
        
        <div class="dataDisplay__showcase">
        
        <img src=${firstAid} />
        <h6 class="dataDisplay__showcase--heading">
        N35bn
        </h6>
        <p class="dataDisplay__showcase--lead">
        Basic Health Care Provision Fund, 
BHCPF
        </p>
        </div>

        <ul class="dataDisplay__list">
        <li> NHIS: National Health Insurance Scheme </li>
        <li> NPHCDA: National Primary Health Care Development Agency</li>
        <li>FMoH: Federal Ministry of Health</li>
        </ul>

        <p class="dataDisplay__showcase--bottomLead">
        The N35.03bn BhHCPF is part of the N6327.bn which the federal govrnment has budgeted to spend on health sector in 2021
        </p>
        </div>


        <div class="dataDisplay__container--bottom">
        <div class="dataDisplay__container--bottom-section1">
        <h6 class="section1__header">
        50%
        </h6>

        <div class="section1__content">
        <h6 class="section1__content--header">NHIS</h6>
        <h6 class="section1__content--leadMajor">N17.52bn</h6>
        <h6 class="section1__content--leadMedium">
        Basic minimum package of health care services
        </h6>
        <p class="section1__content--leadMinor">
        Free Maternal and Child health Care, facilitated referrals for Cardiovascular and diabetic disease
        </p>
        </div>

        </div>
        <div>
        this is the bottom section
        </div>
        </div>
        </div>
    </div>
    `;
}
 
export default BudgetDataDisplay;