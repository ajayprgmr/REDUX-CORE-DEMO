import React, { useState } from 'react';
import { buyCake, addCake } from '../redux/cakes/cakeActions';
import { connect } from 'react-redux';

const CakeContainer = (props) => {
    const [noOfCakesToAdd, setNoOfCakesToAdd] = useState(1);  

    return (
        <div>
            <h2>No of Cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>  
                Buy Cake
            </button>

            <input 
                type='number' 
                value={noOfCakesToAdd} 
                placeholder='no. of cakes of add'
                onChange={(e) => setNoOfCakesToAdd(e.target.value)} 
            />
            <button onClick={() => props.addCake(noOfCakesToAdd)}> 
                Add Cake
            </button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake()),  
        addCake: (number) => dispatch(addCake(number))   
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
