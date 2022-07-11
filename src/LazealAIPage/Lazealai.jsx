
import Select from 'react-select';
import React, { Component } from 'react';


class LazealAIpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
    
      handleChange(opt) {
        this.setState({value: opt.value});
        
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }


    render() {
        return(
        <>
         <div>
            <div className='NasdaqSL'>
            <label>
                NASDAQ Stocks
            </label>
            
                <form onSubmit={this.handleSubmit}>
                <Select 
                onChange={this.handleChange}
                />
                <input type="submit" name="button_0" value="OG" />  
                </form>
                
            </div>

            <div className='NasdaqSL'>
                <label>
                    NYSE Stocks
                </label>
                <form onSubmit={this.handleSubmit}>
                <Select
                onChange={this.handleChange} />
                <input type="submit" name="button_0" value="OG" />
                </form>
            </div>

            <div >
                
                
            </div>

         </div>
        
        </>
            
    
        
        );
    }
}

const connectedLazealAIPage = (LazealAIpage);
export { connectedLazealAIPage as LazealAIPage };