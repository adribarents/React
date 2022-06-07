const Peli = (props) => {
  return (
    <div className="peli">
      <h2>{props.titulo}</h2>
      <div>
        <img src={props.imagen}/>
      </div>
      <p>({props.año})</p>
    </div>
  );
};

export default Peli;

