
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>

      {/* question answer section */}
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              How React Works ?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              We all know we can create React component using JSX and then render them on the web using React DOM. We also have access to incredible features like the state or the component lifecycle, but what is actually happening behind the scenes ?

              A React component that returns React element using JSX, the JavaScript XML. For React, the return value is an object. When we call the component, we get the real return value.

              When we Write a component it's a pure JavaScript code. We need to convert this JaavaScript code to HTML, beacouse that we saw in browser, everything is html code. For this convert prosses we use React, and this is prossesing in React DOM. React DOM helps to generate JS code in HTML file and this prosses is happen without reload the browser page.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Difference between props and state.
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              State and Props in React are used to control data in a component. State are mutable. For data that will be change, we use state for this. State is the core concept that let's you buid React components that can store data and automatically augment views based on data changes. Props is immutable. generally props are set by parent and passe to child components and they are fixed throughout the component. You can define states in the component itself, for props you can pass properties from parent component. The state is set and updated by object, for props determine the view upon creation and then they remain static. State is not a component property it's an attribute of component. To work withs state and props, you can access them by name, this name is an attribute of the object.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              How useState works ?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              useState is a hook that allows you to have state variables in functional components. it's a initial state.
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
