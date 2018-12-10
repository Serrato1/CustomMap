import React , {Component}  from 'react';


class Grid extends Component{
    render(){
        let {className, style} = this.props;
        return(
            <div className={className} style={style}>
                GRID
                {this.props.children}
            </div>
        )
    }



}

export default Grid;
