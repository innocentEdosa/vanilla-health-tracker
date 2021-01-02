import './linkStyle.css';


const PrimaryLink = (child, href) => {

    return `<a class="link" href=${href}>
    <h6 class="link__cta">
    
    ${child}
    </h6>
    </a>`
}


export default PrimaryLink;
