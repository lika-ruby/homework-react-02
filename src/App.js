import './App.css';
import { Greeting } from "./Greeting.js";
import { Message } from "./Message.js";
import { Button } from "./Button.js";

function App() {
  return (
    <div className="App">
      <Greeting name="Carl" />
      <Message text="30/02/26" />
      <Button onClick={() => {
        console.log("Ти натиснув/ла на кнопку")
      }} />

    </div>
  );
}

export default App;
