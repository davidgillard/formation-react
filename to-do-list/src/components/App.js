import React from 'react';
import NavBar from './NavBar'
import ToDoList from './ToDoList'
import AddTask from './AddTask';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends React.Component{
    render(){
        return(
            <section id="todo">
                <BrowserRouter>
                  <Switch>
                    <Route path="/add-task" Component={AddTask} />
                    <Route path="/" Component={ToDoList} />
                  </Switch>
                  <NavBar />
                </BrowserRouter>
            </section>
        )
    }
}

export default App
