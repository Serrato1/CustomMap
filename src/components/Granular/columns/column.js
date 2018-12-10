import React from 'react';




function Col(props,colSize,colSpan,style){
    return(
        <div className='' style={style}>
            This is a column
            {props.children}
        </div>
    )
}

export default Col;