import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    state = { advice : '' }

    componentDidMount = () =>{
        console.log('COMPONENT DID MOUNT');
        this.getAdvice();
    }

    getAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then(( result) => { 
            const {advice}= result.data.slip;
            console.log(advice);
            this.setState({advice});
        })
        .catch((error) => {console.log(error)});
    }
    render() { 
        const {advice} = this.state;
        return ( 
            <div className="appMain">
                <div className="whiteCard">
                    <h4 className="cardHeading">{this.state.advice}</h4>
                </div>
                
            </div>
        
        );
    }
}
 
export default App;