import React from 'react'
import { buyCake } from '../redux/cakes/cakeActions'
import { connect } from 'react-redux'
const cakeContainer = (props) => {
    return (
        <div>
            <h2>No of Cakes - {props.numOfCakes}</h2>
            <button
                onClick={props.buyCake}
            >
                Buy Cake
            </button>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(cakeContainer)
