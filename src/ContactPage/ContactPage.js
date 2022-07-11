import React from 'react'
import './ContactPage.scss'
import {BsCircle} from "react-icons/bs"
import * as FaIcons from 'react-icons/fa';
import Progress from '../_components/progress/progress';

class ContactPage extends React.Component {
  
    constructor(props) {
        super(props);
    }
    render() {

        return <>
        <div>

           <Progress/>
        </div>
        
            
            </>
      
      ;
        ;
    }
}


const connectedHelpPage = (ContactPage);
export { connectedHelpPage as ContactPage };