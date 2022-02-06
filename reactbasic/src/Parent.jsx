import React, { Component} from 'react';
import Child from './Child';

class Parent extends Component{
     constructor(props){
        super()
        this.state = {
           name: 'shailendra'
        }
     }

     componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'shailendra'
            })
        }, 2000)
     }



    render(){
        console.log("==============parent=============")
        return(
            <div>
            Parent Component 
            <Child name= {this.state.name} />
            </div>
        )
    }
}



export default Parent;
