import React, { useState } from 'react';
function HEXXIT(props){
let [chef, setChef]=useState(props.chef);
function count(){
setChef(chef+=1);
}
return(
<div>
<button onClick={count}>
{chef}
</button>
</div>
);
}
export default HEXXIT;