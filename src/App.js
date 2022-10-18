import './App.css';

function Inventory(props){
  return(
    <div class = "car">
      <h1 class = "carheader">The Car Dealership is selling a {props.model} {props.car} at this time.</h1>
      <img class = "carimage" src = {props.img} alt = "Car"></img>
    </div>
  )
}

function App() {
  const fullInventory = [{model:"Honda", car:"CRV", img:"/images/Honda.jpg"}, {model:"Nissan", car:"Altima", img:"/images/Nissan.jpg"}, {model:"Toyota", car:"Rav4", img:"/images/Toyota.jpg"}];
  const list = fullInventory.map((fullInventory) =>
    <Inventory model={fullInventory.model} car={fullInventory.car} img={fullInventory.img}/>
  );
  return (
    <div>
      <h1>
        {list}
      </h1>
    </div>
  )
}

export default App;
