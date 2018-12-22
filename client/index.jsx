import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Table from './table.jsx';
import HighlightAmens from './highlights.jsx';
import BuildingAmens from './building.jsx';
import ListingAmens from './listing.jsx';
import OutdoorAmens from './outdoor.jsx';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fullDescriptionBox: undefined,
            description: '',
            highlightAmens: [],
            buildingAmens: [],
            listingAmens: [],
            outdoorAmens: []
        }
        this.renderer = this.renderer.bind(this);
    }

    componentDidMount(){
        this.renderer();
    }

    renderer(){
        //console.log('renderer called')
        Axios.get('/streetBreezy/api/92')
        .then((response) => {
            //console.log(response.data);
            let data = response.data;
            this.setState({fullDescriptionBox: data, 
                description: data.description, 
                highlightAmens: data.highlightAmens, 
                buildingAmens: data.buildingAmens, 
                listingAmens: data.listingAmens, 
                outdoorAmens: data.outdoorAmens});
        })
    }

    render(){
        return(
        <div id='entireDescriptionBox'>
            <div>
                <Table />
            </div>
            <div>
                <h5>Description: </h5>
                <p id='description'>{this.state.description}</p>
            </div>
            <hr class='separator'/>
            <div>  
                <h5>Highlight Amenities </h5>
                <HighlightAmens highlights={this.state.highlightAmens}/>
                <h5>Building Amenities </h5>
                <BuildingAmens buildings={this.state.buildingAmens}/>
                <h5>Listing Amenities </h5>
                <ListingAmens listings={this.state.listingAmens}/>
                <h5>Outdoor Amenities </h5>
                <OutdoorAmens outdoors={this.state.outdoorAmens}/>
            </div>
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))





