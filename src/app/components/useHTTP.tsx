//send a request of types -{methods - POST//Send the data , PUT//Update the data , DELETE//remove the data, }
//Method - POST , GET,, PUT, DELETE
//url - fixed
//body - body/Null
// ACtion - {}



import { useState, useCallback } from "react";

interface CustomProps {
  url : string
  method : "GET" | "POST" | "PUT" |"DELETE"
  body : object | null
  action : any
}

interface DataVariable {
  id: number;
  title: string;
  body: string;
}

function useApi({ url, method, body, action }: CustomProps){
  const [data, setData] = useState<DataVariable[]>([]);

  const ActionFunction = useCallback(async () => { // used because when many re-renders are available

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: method !== "GET" ? JSON.stringify(body) : undefined,
      });
      const result = await response.json();
      setData(result);
    } catch (err :any) {
      console.log(err.message);
    }
  }, [url, method, body, action]);

  return { data, ActionFunction };
}

export default useApi;