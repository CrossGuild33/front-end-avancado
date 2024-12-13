import './Footer.css';

const Footer = (props) => {
    const {pageName} = props

    return(
        <div className="footer">  
            <div className='footer-container'>  
                <div className='footer-menu'>
                    <span>Navegando em...</span><h4>{pageName}</h4>

                </div>
                <div class="footer-copyright">
                
                    
                    &copy;<span id="year"> </span>
                    
                    <span> PUC MVP Front End Avançado. All rights reserved.</span>
                </div>
            </div>
        </div>    
    
    )
}

export default Footer;