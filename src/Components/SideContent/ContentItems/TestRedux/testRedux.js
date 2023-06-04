import { Box } from "@mui/material";
import { useSelector, useDispatch, connect } from "react-redux";
import { counterActions } from "../../../../Store";
import { React, Component } from "react";

// function TestRedux() {
//   const dispatch = useDispatch();
//   const couter = useSelector((state) => state.counter);

//   const incrementHandler = () => {
//     dispatch(counterActions.increment());
//   };

//   const decrementHandler = () => {
//     dispatch({ type: "decrement" });
//   };

//   return (
//     <Box>
//       <div>{couter}</div>
//       <button onClick={incrementHandler}>Increment</button>
//       <button onClick={decrementHandler}>Decrement</button>
//     </Box>
//   );
// }

class TestRedux extends Component {
  incrementHandler = () => {
    this.props.increment();
  };

  decrementHandler = () => {
    this.props.decrement();
  };

  increaseCustomHandler = () => {
    this.props.increaseCustom();
  };

  render() {
    return (
      <Box>
        <div>{this.props.counter}</div>
        <button onClick={this.incrementHandler.bind(this)}>Increment</button>
        <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        <button onClick={this.increaseCustomHandler.bind(this)}>
          Increase Custom
        </button>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(counterActions.increment()),
    decrement: () => dispatch(counterActions.decrement()),
    increaseCustom: () => dispatch(counterActions.increaseCustom(10)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TestRedux);
