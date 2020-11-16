import AbstractView from "./AbstractView.js";
import PrimaryButton from '../Components/Button';
import ShowCase from '../Components/Showcase';

const table = () => `<div>I am a table</div>`

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
           <div>
           ${ShowCase()}
           </div>
        `;
    }
}