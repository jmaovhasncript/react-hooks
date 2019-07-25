lesson 1
React hooks can be used only on functional component
useState
useRef
useEffect

useState is to maintain state variable in the functional component

import React ,{useState} from 'react';

function hello (){
const [testValue,setTestValue] = useState("");
setTestValue("hello")
return (
<div>{testValue}</div>
)
}
