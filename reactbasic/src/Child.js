import React, { PureComponent } from "react";

class Child extends PureComponent {
     render(){
         console.log("==============child===============")
         return(
             <div>
             child
             {this.props.name}
             </div>
         )
     }
}

export default Child;