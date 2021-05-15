import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadTodos} from "./actions";

function App() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading)

    useEffect(() => {
        dispatch(loadTodos());
    }, [])

    return (
        <div className='app'>
            {loading?
                <div className='loader'>
                    Пожалуйста подождите,<br/>
                    данные загружаются...
                </div>
                : (todos.map((item, index) => {
                    return (
                        <div key={index}>
                            <div key={index} className='blok'>
                                <div className='id'>Задание {item.id}</div>
                                <div className='title'>{item.body}</div>
                                <div className='completed'>*</div>
                            </div>
                        </div>
                    )
                }))}
        </div>
    )
};

export default App;
