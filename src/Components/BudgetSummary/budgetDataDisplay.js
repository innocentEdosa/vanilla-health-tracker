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
        </div>


        <div class="dataDisplay__container--bottom">
        this is the bottom section
        </div>
        </div>
    </div>
    `;
}
 
export default BudgetDataDisplay;