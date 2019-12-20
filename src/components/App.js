import React,{Component} from 'react';
import TodoList from './todoList';

class App extends Component{
    render(){
        return  (
            <div className="ui container">
                <TodoList/>
            </div>
        );
    }
};

export default App;