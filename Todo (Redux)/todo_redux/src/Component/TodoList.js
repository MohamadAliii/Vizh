import React, {Component} from 'react'
import Todos from './Todos'
import {connect} from 'react-redux'

class TodoList extends Component {
    // state = { 
    //     todos: [
    //         {
    //             id: 1,
    //             text: 'todo 1'
    //         }, 
    //         {
    //             id: 2,
    //             text: 'todo 2'
    //         }
    //     ]
    //  }
    
    render() { 
    let {todos} = this.props
        return ( 
        <div>
            <ul>
                {
                    todos.map(todo =>  <Todos key={todo.id} {...todo} /> )
                }
            </ul>
        </div> 
        );
    }
}
 
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList);