import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Component/Timer'         

const App = () => {
    return <div><Timer /></div>
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
