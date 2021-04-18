import "./App.css";
import React from "react";
import styled from "styled-components";
import _ from "lodash";
import { observer } from "mobx-react";
import { makeAutoObservable } from "mobx";
import MyContext from "./Context";
import SectionsList from "./SectionsList";

class Sections {
  secs = [];

  constructor() {
    makeAutoObservable(this);
  }
  // Behöver inte skapa nya objekt
  add(secton) {
    this.secs.push(secton);
  }

  remove(secton) {
    _.remove(this.secs, function (s) {
      return s.id === secton.id;
    });
  }

  reset() {
    this.secs = [];
  }
}

const mySections = new Sections();

const StyledApp = styled.div`
  text-align: center;
  margin: auto;
  width: 50%;
`;

const MyList = observer((props) => {
  return props.mySecs.map((s) => s.id + " ");
});
function App() {
  // Notera, inga state el liknande som skulle trigga en rendering
  return (
    <StyledApp>
      <MyContext.Provider value={mySections}>
        <h2>Mina ämnen:</h2>

        <MyList mySecs={mySections.secs} />
        <h2>Tillängliga ämnen:</h2>
        <SectionsList />
      </MyContext.Provider>
    </StyledApp>
  );
}

export default App;

// Model the application state.
// class Counter {
//   value = 0;

//   constructor() {
//     makeAutoObservable(this);
//   }

//   increase() {
//     this.value += 1;
//   }

//   decrease() {
//     this.value -= 1;
//   }

//   reset() {
//     this.value = 0;
//   }
// }

// const myCounter = new Counter();

// const CounterView = observer(({ counter }) => (
//   <>
//     <button onClick={() => counter.increase()}>Öka</button>
//     {counter.value}
//     <button onClick={() => counter.decrease()}>Minska</button>
//   </>
// ));

/* <CounterView counter={myCounter} /> */
