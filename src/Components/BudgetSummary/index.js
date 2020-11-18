import './budgetSummaryStyle.css';
import PrimarySelect from '../Input/Select/PrimarySelect';
import RadioButton from '../Input/Radio';
import BudgetDataDisplay from './budgetDataDisplay';


const BudgetSummary = () => {
    return `<div class="budgetSummary">

   <div class="budgetSummary__container">

   <form class="budgetSummary__form">
   <div class="budgetSummary__form--selectWrapper">
   ${PrimarySelect()}
   </div>
   <div class="radio__wrapper radio__wrapper--1">
   ${RadioButton({
     checked: true,
     label: "Budgeted Expenditure",
   })}
   </div>
   <div class="radio__wrapper">
   ${RadioButton({
     label: "Actual Expenditure",
   })}
   </div>
   </form>
   ${BudgetDataDisplay()}
   
   </div>
   <div class="budgetSummary__strip">
   <svg width="" height="" viewBox="0 0 1280 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-3 0L1280 55H1271.04H-3V0Z" fill="currentColor"/>
</svg>

   </div>

    </div>`;
};

export default BudgetSummary;
