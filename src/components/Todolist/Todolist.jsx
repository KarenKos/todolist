import React, {Component} from 'react';
import TextField from 'material-ui/TextField';


export default class ToDoList extends Component {
  constructor(props){
    super(props);

    this.state = {
      userInput: '',
      list: []
    }
  }

  changeUserInput(TextField){
this.setState({
  userInput: TextField
})
  }

addToList(TextField){
let listArray = this.state.list;

listArray.push(TextField);

this.setState({
  list: listArray,
  userInput: ''
})
}

  render(){
    return(

      <div className="to-do-list-main">
        <TextField
              hintText="To do"
              floatingLabelText="Add new task"

          onChange={ (e)=>this.changeUserInput(e.target.value)}
          value={this.state.userInput}
          type="text"
        />
         <button
          onClick={ ()=> this.addToList(this.state.userInput) }>
          Add
        </button>

        <ul>
            {this.state.list.map( (val)=> <li><input type="checkbox" /> {val}</li>)}
        </ul>
      </div>
    );
  }
}
