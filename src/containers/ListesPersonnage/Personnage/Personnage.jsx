import imagePlayer1 from "../../../assets/images/persos/player1.png";
import imagePlayer2 from "../../../assets/images/persos/player2.png";
import imagePlayer3 from "../../../assets/images/persos/player3.png";

import imageArc from "../../../assets/images/armes/arc.png";
import imageEpee from "../../../assets/images/armes/epee.png";
import imageFleau from "../../../assets/images/armes/fleau.png";
import imageHarche from "../../../assets/images/armes/hache.png";

const personnage = (props) => {
  let imgPerso = "";
  switch (props.image) {
    case 1:
      imgPerso = imagePlayer1;
      break;
    case 2:
      imgPerso = imagePlayer2;
      break;
    case 3:
      imgPerso = imagePlayer3;
      break;
  }

  let imgArme = "";
  switch (props.arme) {
    case "arc":
      imgArme = imageArc;
      break;
    case "epee":
      imgArme = imageEpee;
      break;
    case "fleau":
      imgArme = imageFleau;
      break;
    case "hache":
      imgArme = imageHarche;
      break;
  }

  return (
    <div className="row no-gutters">
      <div className="col-6">
        <h2>{props.nom}</h2>
        <img src={imgPerso} alt="personnnage" />
      </div>
      <div className="col-6">
        Force : {props.force}
        <br />
        Agilite: {props.agilite}
        <br />
        Intelligence : {props.intelligence}
        <br />
        <img src={imgArme} alt="arme" />
      </div>
    </div>
  );
};

export default personnage;
