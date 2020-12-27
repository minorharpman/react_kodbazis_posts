
import React, { useEffect, useState } from "react";

import ListaKomponens from "./components/listakomponens";
import FormKomponens from "./components/formkomponens";

// fetch: https://reactjs.org/docs/faq-ajax.html

function App() {

  const [items, setItems] = React.useState([]);
  //https://maxrozen.com/how-to-use-react-usestate-hook-initial-value/
  const [tipus, setTipus] = React.useState("comments");

 
  /*React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments").then((res) => (res.ok ? res.json() : [])).then((tartalom) => { 
      setItems(tartalom);
    });

  }, []);*/

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/" + tipus).then((res) => (res.ok ? res.json() : [])).then((tartalom) => {
      setItems(tartalom);
    });

  }, [tipus]);


  return (
    <div className="container">
      <div className="row m-5 border p-5">
        <FormKomponens setTipus={setTipus} />
        <ListaKomponens elemek={items} />
      </div>

    </div>
  );
}

/*
function FormKomponens({ setTipus }) {
  return (
    <form className="w-100" onSubmit={ (event) =>
    {event.preventDefault();
      setTipus(event.target.elements.contentType.value);
      
    }}>
      <select name="contentType" classNme="form-control mb-2">
      <option value="comments">Kommentek</option>
      <option value="posts">Posztok</option>
      </select>
      <button className="btn btn-primary mb-2">
      Kiválaszt
      </button>
    </form >
  )
}*/

/*
function ListaKomponens({ elemek }) {

  console.log("elemek:");
  let elementekTombje = [];
  for (let elem of elemek) {
    console.log(elem.body);
    elementekTombje.push(
      <li className="list-group-item">{elem.body}</li>
    )
  }
  return <ul>{elementekTombje}</ul>;
}
*/

//map fubction: https://kodbazis.hu/cikkek/a-leghasznosabb-tombfuggvenyek
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
/*function ListaKomponens({ elemek }) {

  return (<ul>aa
    {elemek.map((elem) => (
      <li key={elem.id}  className="list-group-item">{elem.body}</li>
    ))}
  </ul>);
}*/

/*
const ListaKomponens  = ({ elemek }) => {

  return (<ul>
    {elemek.map((elem) => (
      <li key={elem.id}  className="list-group-item">{elem.body}</li>
    ))}
  </ul>);
}*/

export default App;
