import './budgetSummaryStyle.css';
import PrimarySelect from '../Input/Select/PrimarySelect';
import RadioButton from '../Input/Radio';

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
       label: "Budgeted Expenditure"
   })}
   </div>
   <div class="radio__wrapper">
   ${RadioButton({
       label: "Actual Expenditure"
   })}
   </div>
   </form>
   
   </div>

    </div>`
};

export default BudgetSummary;
