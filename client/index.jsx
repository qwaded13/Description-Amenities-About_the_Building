import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Table from './table.jsx';
import HighlightAmens from './highlights.jsx';
import BuildingAmens from './building.jsx';
import ListingAmens from './listing.jsx';
import OutdoorAmens from './outdoor.jsx';
import showMore from './addMore.js';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fullDescriptionBox: undefined,
            descriptionPreSpan: '',
            descriptionPostSpan: '',
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
        Axios.get('/streetBreezy/api/99')
        .then((response) => {
            //console.log(response.data);
            let data = response.data;
            this.setState({fullDescriptionBox: data, 
                descriptionPreSpan: data.description.slice(0,300), 
                descriptionPostSpan: data.description.slice(300),
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
                <p id='description'>{this.state.descriptionPreSpan}<span id='dots'>...</span><span id='moreText'>{this.state.descriptionPostSpan}</span></p>
                <button onClick={() => {showMore()}} id='readMore'>Read More</button>
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

ReactDOM.render(<App />, document.getElementById('app'));