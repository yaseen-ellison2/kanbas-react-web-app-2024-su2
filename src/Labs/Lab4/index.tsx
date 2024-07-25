import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";

function sayHello(){
  alert ("Hala Walla")
}


export default function Lab4(){
  return(
     <div id="wd-a4">
      <br />
      <h2>Lab 4 </h2>
      <h2>Testing Git </h2>
      <hr/>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
     </div>

  )
}