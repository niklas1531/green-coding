import React from 'react';

function CarouselItem(props) {
    return (
        <div className={props.active} style={{marginTop: "5%"}}>
            <p className="black-text-color">
                {props.content}
            </p>
        </div>
    );
}

export default CarouselItem;