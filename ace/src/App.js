import Todo from "./components/Todo";
import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";

function App() {
  return (
    <div>
      <Todo text='This is one'/>
      <Todo text='This is another'/>
      <Todo text='Well, how about one more'/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
