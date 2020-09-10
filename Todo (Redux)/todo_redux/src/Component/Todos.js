import React, {Component} from 'react'

class Todos extends Component {
    render() { 
        // let {text} = this.props
        return ( 
            <div>
                <li>{this.props.text}</li>
            </div>
         );
    }
}
 
export default Todos