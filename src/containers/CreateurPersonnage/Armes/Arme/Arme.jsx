const arme = (props) => {
  return (
    <>
      <img
        style={{ cursor: "pointer", opacity: props.isCurrentArme ? 1 : 0.5 }}
        src={props.imageArme}
        alt={props.children}
        onClick={props.clic}
      ></img>
      <h2>{props.children}</h2>
    </>
  );
};

export default arme;
