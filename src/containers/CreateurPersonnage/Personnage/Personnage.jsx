import CaracPerso from "./CaracPerso/CaracPerso";
import ImagePersonnage from "./ImagePerso/ImagePerso";

const personnage = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <ImagePersonnage
            flecheGauche={props.precedente}
            flecheDroite={props.suivante}
            numImage={props.image}
          />
        </div>
        <div className="col-6">
          <CaracPerso
            enleverPoint={props.enleverPoint}
            ajouterPoint={props.ajouterPoint}
            nbPointsDisponibles={props.nbPointsDisponibles}
            force={props.force}
            agilite={props.agilite}
            intelligence={props.intelligence}
          />
        </div>
      </div>
    </>
  );
};

export default personnage;
