import React, {Component} from 'react' ;




class PropertyModal extends Component{
    render(){
        let visible = this.props.visible ? 'block' : 'none';
        return(
            <div style={{
                display: `${visible}`,
                position:'absolute',
                width: '90vw',
                height: '90vh',
                marginLeft : '5vw',
                marginTop: '5vh',
                background: 'black',
                zIndex : '50',
                'opacity' : '0.5'
            }}>
            </div>
        )
    }
}


export default PropertyModal 