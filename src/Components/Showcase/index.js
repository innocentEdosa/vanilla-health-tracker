import './showcaseStyle.css';
import Button from '../Button';

const ShowCase = () => {
  return `<div class="showcase">
    <div class="showcase__container">
    
    <div class="showcase__logo-wrapper">
        <img src=${"../../assets/imgs/Logo.svg"} />
    </div>
   
    <div class="showcase__content">
    <h6 class="showcase__content--header">The value of life is priceless </h6>
    <p class="showcase__content--lead">How is the government ensuring quality health for citizens? View and track government allocation to the health sector</p>
    <div class="showcase__content--btn">
    ${Button('Track Health Projects')}
    </div>
    </div>

    </div>
    <div>
    <img class="showcase__bottomDivider" src=${"../../assets/imgs/strip1.svg"} />
    </div>
    </div>`;
};
 
export default ShowCase;