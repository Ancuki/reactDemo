import ToDo from './component/toDo.js';

/* document.querySelector('button').addEventListener('click') normally how we do in js*/
function App() {
  return (
    <div>
      <h1>My To Dos</h1>
      <ToDo text='Eat'/>
      <ToDo text='Brush'/>
      <ToDo text='Sleep'/>
    </div>
  );
}

export default App;
