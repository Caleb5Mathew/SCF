import React from 'react'
import './MissionPage.scss'
import {BsCircle} from "react-icons/bs"
import * as FaIcons from 'react-icons/fa';

class MissionPage extends React.Component {
  
    constructor(props) {
        super(props);
    }
    render() {

        return <>
        <div>

        <div > MISSIONPage
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


const connectedHelpPage = (MissionPage);
export { connectedHelpPage as MissionPage };