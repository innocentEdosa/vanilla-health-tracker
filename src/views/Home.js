import AbstractView from "./AbstractView.js";
import PrimaryButton from '../Components/Button';
import ShowCase from '../Components/Showcase';
import BudgetSummary from '../Components/BudgetSummary';
import PreFooter from '../Components/PreFooter';
import Footer from '../Components/Footer';

const table = () => `<div>I am a table</div>`

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Health Tracka");
    }

    async getHtml() {
        return `
           <div>
           ${ShowCase()}
           ${BudgetSummary()}
           ${PreFooter()}
           ${Footer()}
           </div>
        `;
    }
}