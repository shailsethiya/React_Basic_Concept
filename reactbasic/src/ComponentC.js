import React, {Component} from 'react';
import { UserConsumer } from './UseContext';

class ComponentC extends Component{
   render(){
       return(
          <>
          <UserConsumer>
           {(username) => {
               return <div>Hello {username}</div>
           }}
          </UserConsumer>
          </>
       )
   }
}

export default ComponentC;