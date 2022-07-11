import React from 'react'
import './HelpPage.scss'
import {BsCircle} from "react-icons/bs"
import * as FaIcons from 'react-icons/fa';

class HelpPage extends React.Component {
  
    constructor(props) {
        super(props);
    }
    render() {

        return <>
        <div>

        <div > HELPPage
             <div className='logo'>
                <BsCircle/>
                <FaIcons.FaBars/>
             </div>
          </div>
        </div>
        
            
            </>
      
      ;
        ;
    }
}


const connectedHelpPage = (HelpPage);
export { connectedHelpPage as HelpPage };