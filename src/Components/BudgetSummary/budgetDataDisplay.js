import firstAid from '../../assets/imgs/first_aid.svg';

const BudgetDataDisplay = () => {
    return  `
    <div class="dataDisplay__wrapper">
        <div class="dataDisplay__container">

        <div class="dataDisplay__container--top">
        <img src=${firstAid} />
        </div>

        <div class="dataDisplay__container--bottom">
        this is the bottom section
        </div>
        </div>
    </div>
    `;
}
 
export default BudgetDataDisplay;