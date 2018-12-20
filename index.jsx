import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class App extends React.Component{
    constructor(props){
        super(props),
        this.state = {
            fullDescriptionBox: undefined,
            description: '',
            highlightAmens: [],
            buildingAmens: [],
            listingAmens: [],
            outdoorAmens: []
        }
    }

    // componentDidMount(){
    //     while(this.state.dbCapacity < 100){
    //         this.populate();
    //     }
    // }

    // populate(){
    //     let description = {description: this.state.description, 
    //         highlightAmens: this.state.highlightAmens, 
    //         buildingAmens: this.state.buildingAmens, 
    //         listingAmens: this.state.listingAmens, 
    //         outdoorAmens: this.state.outdoorAmens}
    //     Axios.post('/streetBreezy', {description: description})
    //     .then((response) => {
    //         console.log(response.data);
    //         this.setState({fullDescriptionBox: response.data});
    //     })
    // }

    render(){
        <div>
        return(
            <div>
                <table>
                    <tr id='tableRow0'>
                        <th id='table0x0'>DAYS ON MARKET</th>
                        <th id='table1x0'>LAST PRICE CHANGE</th>
                        <th id='table2x0'>ESTIMATED PAYMENT</th>
                    </tr>
                    <tr id='tableRow1'>
                        <th id='table0x1'>MONTHLY TAXES</th>
                        <th id='table1x1'>MONTHLY MAINTENANCE</th>
                        <th id='table2x1'>TAX ABATEMENT</th>
                    </tr>
                </table>
                <button onClick={this.populate}>Populator</button>
            </div>
            <div>
                <p id='description'>Howdy Ho</p>
            </div>
            <div>   
                <div id='amenities'>Howdy Doo</div>
            </div>
        )
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('app'))