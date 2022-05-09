

//function App() {

const Person = (props) => {
return (
  <>
    <h1>First Name: {props.firstName}</h1>
    <h2>Last Name: {props.lastName}</h2>
    <h3>Age: {props.age}</h3>
  </>
)
}

const App = () => {
    // const name = "James"
    // const age = "40"
    // const eyes = "brown"

  return (
    <div className="App">
      <Person firstName='Adeola' lastName='Oni' age='26'/>
      <Person firstName='Adebanke' lastName='Amusa' age='25'/>
      <Person/>
      <Person/>
      {/* <h1>Hello, {name}!</h1>
      <h2>{age}</h2>
      <h3>I have {eyes} eyes</h3> */}
      
    </div>
  );
}

export default App;
