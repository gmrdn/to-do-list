import React from 'react';
import ToDoList from './ToDoList'
import NavBar from './NavBar'
import AddTask from './AddTask'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <section id="todo">
                <BrowserRouter>
                    <Switch>
                        <Route path="/add-task" component={AddTask} />
                        <Route path="/:filter?" component={ToDoList} />
                    </Switch>
                    <NavBar />
                </BrowserRouter>
            </section>
        )
    }
}

export default App