import './style.css';

const RadioButton = ({
    checked = false,
    label = "Budgeted Expenditure"
} = {}) => {
    return `<label class="radio__label">
    <input ${checked ? 'Checked' : ''} class="radio__input" type="radio" name="radio">
    <span class="radio__checkMark"></span>
   <span class='radio__label--text'>${label}</span>
  </label> `;
}
 
export default RadioButton;