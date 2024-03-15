import Arme from "./Arme/Arme";
import ImgArc from "../../../assets/images/armes/arc.png";
import ImgEpee from "../../../assets/images/armes/epee.png";
import ImgFleau from "../../../assets/images/armes/fleau.png";
import ImgHache from "../../../assets/images/armes/hache.png";

const armes = (props) => {
  return (
    <div className="row no-gutters text-center">
      {props.listeArmes.map((arme) => {
        let imgArme = "";
        switch (arme) {
          case "arc":
            imgArme = ImgArc;
            break;
          case "epee":
            imgArme = ImgEpee;
            break;
          case "fleau":
            imgArme = ImgFleau;
            break;
          case "hache":
            imgArme = ImgHache;
            break;
        }
        return (
          <div key={arme} className="col-3">
            <Arme
              imageArme={imgArme}
              isCurrentArme={props.currentArme === arme}
              clic={() => props.changeArme(arme)}
            >
              {arme}
            </Arme>
          </div>
        );
      })}
    </div>
  );
};

export default armes;
