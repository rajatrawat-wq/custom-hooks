"use client"

// import React from "react";
// import useWindowDimensions from "@/app/components/useWindowDimensions";

// function App() {
//   const { width, height } = useWindowDimensions();

//   return (
//     <div>
//       <div className="flex flex-col bg-gray-400 w-[200px] rounded-2xl p-[30px] m-[30px]">
//           <p>Width: {width}px</p>
//           <p>Height: {height}px</p>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import useApi from "./components/useHTTP";
import useWindowDimensions from "./components/useWindowDimensions";

function App() {
  // const { width, height} = useWindowDimensions();

  const link ='https://dummyjson.com/todos';       
  // const link = 'https://dummyjson.com/todos/1';
  // const link = 'https://dummyjson.com/todos/add'; 
  // const link = 'https://dummyjson.com/todos/1';

  const propBody = {
    todo: 'Use DummyJSON in the project',
    completed: false,
    userId: 5,
  };

  const method = "GET";
  // const method = "PUT" ;
  // const method = "POST" ;
  // const method = "DELETE" ;

  const { data, ActionFunction } = useApi({
    url: link,
    method: method,
    body : propBody,
    action: (res :any) => {
      console.log(res);
    },
  });

  useEffect(() => {
    ActionFunction();
  }, []);

  const newData = data.reduce((acc : any, user) => {
  acc[user.id] = user;
  return acc;
}, {});
    

  return (<div>
    <button onClick={ActionFunction} className="flex flex-col bg-gray-400 w-[200px] rounded-2xl p-[30px] m-[30px]">send data</button>
    <div>
      {/* {
        newData.map((current) =>(
          key={current.id}
        ))
      } */}
      
      {/* {
        arrayToObject.map(current => (
            key={current.id}
        ))
      } */}

      {/* {data.map(current => (
       <p key={current.id}>
       {current.title}</p>
        ))} */}
    </div>

    
    <div>
      <div className="flex flex-col bg-gray-400 w-[200px] rounded-2xl p-[30px] m-[30px]">
          {/* <p>Width: {width}-px</p>
          <p>Height: {height}-px</p> */}
       </div>
     </div>
    </div>
  );
}

export default App;