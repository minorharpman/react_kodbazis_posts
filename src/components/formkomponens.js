function FormKomponens({ setTipus }) {
  return (
    <form className="w-100" onSubmit={ (event) =>
    {event.preventDefault();
      setTipus(event.target.elements.contentType.value);
      
    }}>
      <select name="contentType" className="form-control mb-2">
      <option value="comments">Kommentek</option>
      <option value="posts">Posztok</option>
      </select>
      <button className="btn btn-primary mb-2">
      Kiválaszt
      </button>
    </form >
  )
}
  export default FormKomponens;