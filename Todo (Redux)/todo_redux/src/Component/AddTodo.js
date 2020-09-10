import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../Action/index'

class AddTodo extends Component {
    state = {
        inputText: ''
    }

    handleChange = (e) => {
        this.setState({ inputText: e.target.value })
        console.log('inputText:::' ,this.state.inputText)
        // console.log('State:::', this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)
        this.props.dispatch(addTodo(this.state.inputText ))
        this.setState({inputText: " "})
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value= {this.state.inputText} type="text" onChange = { this.handleChange } />
                    <button type='submit'>Add it!</button>
                </form>
            </div>
         );
    }
}
 
// const mapDispatchToProps = (dispatch) => {(
//     dispatch: addTodo(this.state.inputText)
// )}
export default connect()(AddTodo);