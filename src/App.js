import React from "react";

// const Test = () => {
//     return <p>This is a test.</p>;
// };

const Header = () => {
    return  <h1>Click the button</h1>;
}

class Button extends React.Component {
    render() {
        return <button>Click me !</button> ;
    }
}

class Test extends React.Component {
    render() {
        return <p>This is a test.</p>;
    }
}

// const App = () => {
//   return (
//         <div>
//             <h1>Hello World</h1>
//             <Test/>
//         </div>
//       );
// };

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Test/>
        <Header/>
        <Button/>
      </div>
    );
  }
}

export default App;
