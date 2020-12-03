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
        The N35.03bn for Basic Health Care Provisions Fund (BHCPF) is part of the N632bn budgeted for the Health Sector in 2021 by the Federal Government.
        </p>
        </div>


        <div class="dataDisplay__container--bottom">

        <div class="dataDisplay__container--bottom-section1">
        <h6 class="section1__header">
        50%
        </h6>

        <div class="section1__content">
        <h6 class="section__content--header">NHIS</h6>
        <h6 class="section1__content--leadMajor">N17.52bn</h6>
        <h6 class="section1__content--leadMedium">
        Basic minimum package of health care services
        </h6>
        <p class="section1__content--leadMinor">
        Free Maternal and Child Health Care, facilitated referrals for Cardiovascular and diabetic disease.
        </p>
        </div>
        </div>


        <div class="dataDisplay__container--bottom-section2">

        <div class="section2__wrapper">
        <h6 class="section1__header section2__header" >20%</h6>
        <div class="section2__content">
        <h6 class="section__content--header">NPHCDA</h6>
        <h6 class="section2__content--leadMajor">N7.01bn</h6>
        <p class="section2__content--leadMinor">Essential Drugs, Vaccines & Consumables in PHC’s</p>
        </div>
        </div>

        <div class="section3__wrapper">
        <div class="section3__top">
        <div class>
        <h6 class="section__content--header">NPHCDA</h6>
        <h6 class="section3__content--leadMajor">N7.01bn</h6>
        </div>
        <h6 class="section1__header section3__header">50%</h6>
        </div>
        <p class="section3__content--leadMinor">Provision & Maintenance of Facilities, Equioments & Transportation in PHC’s</p>
        </div>

        <div class="section4__wrapper">
        <div class="section3__top">
        <div class>
        <h6 class="section__content--header">NPHCDA</h6>
        <h6 class="section3__content--leadMajor">N3.50bn</h6>
        </div>
        <h6 class="section1__header section3__header">10%</h6>
        </div>
        <p class="section3__content--leadMinor">Development of human resource in PHCs</p>
        </div>

        <div class="section5__wrapper">
        <div class="section3__top">
        <div class>
        <h6 class="section3__content--leadMajor">N3.50bn</h6>
        </div>
        <h6 class="section1__header section3__header">10%</h6>
        </div>
        <p class="section3__content--leadMinor">Emergency Medical Treatment</p>
        </div>

        </div>

        </div>

        
        </div>
    </div>
    `;
}
 
export default BudgetDataDisplay;