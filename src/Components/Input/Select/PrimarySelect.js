
import './select.css';

const PrimarySelect = ({
    label = "Select year",
    options,
    id = "select_id",
    name = 'state'
} = {}) => {
    return `<div class="select__wrapper">
        <label class="select__label" for=${id}>${label}</label>
        <select class="select__select"  name=${name} id=${id}>
    <option value="">--Please choose an option--</option>
    <option selected value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
</select>

    </div> `;
}
 
export default PrimarySelect;