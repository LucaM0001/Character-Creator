import ImagePerso1 from "../../../../assets/images/persos/player1.png";
import ImagePerso2 from "../../../../assets/images/persos/player2.png";
import ImagePerso3 from "../../../../assets/images/persos/player3.png";
import classes from "./ImagePerso.module.css";

const imagePersonnage = (props) => {
  let imgToPrint = "";
  switch (props.numImage) {
    case 1:
      imgToPrint = ImagePerso1;
      break;
    case 2:
      imgToPrint = ImagePerso2;
      break;
    case 3:
      imgToPrint = ImagePerso3;
      break;
    default:
      null;
  }
  return (
    <div className="d-flex justify-content-around align-items-center">
      <div
        className={[classes.fleche, classes.gauche].join(" ")}
        onClick={props.flecheGauche}
      ></div>
      <img src={imgToPrint} alt="perso" />
      <div
        className={[classes.fleche, classes.droite].join(" ")}
        onClick={props.flecheDroite}
      ></div>
    </div>
  );
};

export default imagePersonnage;
