import Carac from "./Carac/Carac";

const caracPerso = (props) => {
  return (
    <>
      <div>
        Points restants :{" "}
        <span className="badge bg-success">{props.nbPointsDisponibles}</span>
      </div>
      <Carac
        moins={() => props.enleverPoint("force")}
        plus={() => props.ajouterPoint("force")}
        nbPoints={props.force}
      >
        Force
      </Carac>
      <Carac
        moins={() => props.enleverPoint("agilite")}
        plus={() => props.ajouterPoint("agilite")}
        nbPoints={props.agilite}
      >
        Agilite
      </Carac>
      <Carac
        moins={() => props.enleverPoint("intelligence")}
        plus={() => props.ajouterPoint("intelligence")}
        nbPoints={props.intelligence}
      >
        Intelligence
      </Carac>
    </>
  );
};

export default caracPerso;
