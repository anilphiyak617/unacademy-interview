import React from 'react';
import { useEffect, useState } from 'react';

class Counter extends React.Component {
  state = { value: 0 };
  componentDidMount() {
    console.log('Component did mount');
  }

  componentDidUpdate() {
    console.log('Component updated');
  }

  componentWillUnmount() {
    console.log('Component Unmounted');
  }

  handleClick() {
    console.log(this);
  }
  render() {
    return (
      <div>
        <button
          onClick={(value) =>
            console.log(
              this.setState((state) => {
                return { ...state, value: state.value + 1 };
              })
            )
          }
        >
          Add
        </button>
        {this.state.value}
      </div>
    );
  }
}

export default Counter;

// ** using functional component i.e hooks
// export default function Counter() {
//   const [value, setValue] = useState<number>(0);

//   useEffect(() => {
//     console.log('Component did mount / updated if using dependency array');

//     // cleanup function
//     return () => {
//       console.log('Component will unmount');
//     };
//   }, []);

//   return (
//     <>
//       <h1>{value}</h1>
//       <button
//         onClick={() => {
//           setValue((prev) => prev + 1);
//         }}
//       >
//         Increament
//       </button>
//     </>
//   );
// }
