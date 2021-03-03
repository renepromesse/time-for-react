import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
    state = { 
        advice : ''
    }

    //method that road first when the page starts in react
    componentDidMount = () =>{
        console.log('COMPONENT DID MOUNT');
        this.getAdvice();
    }
    
    render() { 
        const {advice} = this.state;
        return ( 
            <div className="appMain">
                <div className="whiteCard">
                    <h4 className="cardHeading">"{advice}"</h4>
                    <button onClick={this.getAdvice} className="adviceButton">Get Me Advice</button>
                </div>
                
            </div>
        
        );
    }

   

    getAdvice = async () => {
        try {
            const response = await axios.get('https://api.adviceslip.com/advice')
            if (response.data) {
            const {advice}= result.data.slip;
            console.log(advice);
            this.setState({advice});
            } 
        } catch ((error) => {
            console.log(error)
        })
    }

}
 
export default App;
