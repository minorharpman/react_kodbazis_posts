function ListaKomponens({ elemek }) {

    return (<ul>
      {elemek.map((elem) => (
        <li key={elem.id}  className="list-group-item">{elem.body}</li>
      ))}
    </ul>);
  }

/*
 function ListaKomponens({ elemek }) {

    console.log("elemek:");

    console.log(elemek);
    let elementekTombje = [];
    for (let elem of elemek) {
      console.log(elem.body);
      elementekTombje.push(
        <li className="list-group-item"> {elem.body}</li>
      )
    }
    return <ul>cc {elementekTombje}</ul>;
  }*/
/*
  const ListaKomponens  = ({ elemek }) => {

    return (<ul>
      {elemek.map((elem) => (
        <li key={elem.id}  className="list-group-item">{elem.body}</li>
      ))}
    </ul>);
  }*/


  export default ListaKomponens;