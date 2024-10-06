import React, { useState } from 'react';
import { addIceCream, buyIceCream } from '../redux/icecream/actions';
import { connect } from 'react-redux';

const IceCreamContainer = (props) => {
    const [number, setNumber]=useState(1);
    return (
        <div>
            <h1>Connect Method</h1>
            <h2>No. of IceCreams - {props.noOfIceCream}</h2>
            <button onClick={props.buyIceCream}>Buy Ice Cream</button> 
            <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)} />
            <button onClick={()=>props.addIceCream(number)}>Add Ice Cream</button> 
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        noOfIceCream: state.iceCream.noOfIceCream
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addIceCream: (number) => dispatch(addIceCream(number)),
        buyIceCream: () => dispatch(buyIceCream())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
