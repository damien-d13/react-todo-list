import React from "react";

// const Test = () => {
//     return <p>This is a test.</p>;
// };

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
      </div>
    );
  }
}

export default App;
