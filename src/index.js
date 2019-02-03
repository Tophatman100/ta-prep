import React from "react";
import ReactDOM from "react-dom";
import ToDoList from "./toDoList.js";
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [""],
      formValue: "",
      priority: 0
    };
  }
  componentDidMount() {
    let url = "/todos";
    Axios.get(url).then(response => {
      console.log(response.data, "<--response from onmount get request");
      let stuff = response.data;
      let newState = stuff.map(thing => thing.todo);
      this.setState({
        todos: newState
      });
    });
  }
  handlePost(e) {
    e.preventDefault();
    console.log(this);
    let url = "/todos";
    let payload = { value: this.state.formValue, priority: this.state.priority };

    Axios.post(url, { payload })
      .then(results => {
        console.log("successful post request");
      })
      .catch(err => {
        alert(err);
        console.log(err, "err in post request");
      });
  }

  render() {
    return (
      <div>
        <h1>ADD MORE TODOS BELOW SUKKA</h1>
        <form>
          <input
            type="text"
            onChange={e => {
              this.setState({ formValue: e.target.value });
            }}

          />
          <input type="submit" onClick={e => this.handlePost(e)} />
          <label for="highPriority">High Priority</label>
          <input onChange={e => { this.setState({ priority: 1 }); }} type="radio" id="highPriority" value="high" name="priority"></input>
          <label for="lowPriority">Low Priority</label>
          <input onChange={e => { this.setState({ priority: 0 }); }} type="radio" id="lowPriority" value="low" name="priority"></input>
        </form>
        <h1>HERES YO TODO LIST</h1>
        <ToDoList todos={this.state.todos} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));

//add a priority to each todo (high, low)

// when rendering todos, place high priority before low priority in the list of five

//schema
//db query
//sortin
//high/low selector(front end)
//send that in post as well
//check database username/password (delete drop db for the first time)
//

//insert 3 high, 3 low,
