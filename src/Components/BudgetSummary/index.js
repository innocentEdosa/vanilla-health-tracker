import './budgetSummaryStyle.css';
import PrimarySelect from '../Input/Select/PrimarySelect';

const BudgetSummary = () => {
    return `<div class="budgetSummary">

   <div class="budgetSummary__container">

   <form class="budgetSummary__form">
   
   ${PrimarySelect()}
   <div class="budgetSummary__form-checkbox--wrapper">
   <h6>checkbox</h6>
   </div>
   </form>
   
   </div>

    </div>`
};

export default BudgetSummary;
