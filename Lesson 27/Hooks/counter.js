import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    const [count, setCount] = useState(props.count)
    const [text, setText] = useState('')

    return (
        <div>
            <p>The current {text || 'count'} is {count}</p>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(props.count)}>reset</button>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <input value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
    )
}

App.defaultProps = {
    count: 0
}

ReactDOM.render(<App count={2}/>, document.getElementById('root'));
