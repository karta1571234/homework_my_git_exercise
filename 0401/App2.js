import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return(
    <div>
      <Header/>
      <Content/>
    </div>
  );
}
function Header() {
  return(
    <div>
      <h1>Header</h1>
    </div>
  );
}
function Content() {
  return(
    <div>
      <h2>Content</h2>
      <p>The content text!!!</p>
      <p>This is function</p>
    </div>
  );
}

export default App;