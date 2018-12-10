import React , {Component} from 'react'
import authKey from './auth.js';
import initialize from './initialize.js';
import {createMarker, createMap,mapControls} from './functions.js';
class Map extends Component{
    componentDidMount(){
        initialize(authKey,this.initMap)
        this.initMap = this.initMap.bind(this);
    }

    initMap = ()=>{
        let google = window.google;
        let options = this.props;
        console.log(options);
        createMap(google,options,(map)=>{
            document.getElementById('map').setAttribute('class',options.className)
            let markers = this.props.children.length === 'undefined'? [this.props.children] : this.props.children ; 
            markers.map((marker,index)=>{
                let {lat,long,onClick} = marker.props;
                createMarker(google,map,{lat : lat,lng : long},'',onClick);
            })
            console.log('MAP', map);
        });
    }

    render(){
        return(
            <div id='map'>
            </div>
        )
    }
}
export default Map