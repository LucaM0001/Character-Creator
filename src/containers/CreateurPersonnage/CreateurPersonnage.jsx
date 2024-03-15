import { Component } from "react";
import Bouton from "../../components/Bouton/Bouton";
import TitreH1 from "../../components/Titres/TitreH1";
import Personnage from "./Personnage/Personnage";
import Armes from "./Armes/Armes";
import axios from "axios";

class CreateurPersonnage extends Component {
  state = {
    personnage: {
      image: 1,
      force: 0,
      agilite: 0,
      intelligence: 0,
      arme: null,
      loading: false,
    },
    nbPointsDisponibles: 7,
    armes: null,
    nom: "",
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    axios
      .get("https://creaperso-1fa75-default-rtdb.firebaseio.com/armes.json")
      .then((reponse) => {
        const armesArray = Object.values(reponse.data);
        this.setState({ armes: armesArray, loading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  };

  handleEnleverPoint = (carac) => {
    this.setState((oldState) => {
      if (oldState.personnage[carac] <= 0 || oldState.nbPointsDisponibles >= 7)
        return null;
      const newPersonnage = { ...oldState.personnage };
      const newNbPointsDisponible = oldState.nbPointsDisponibles + 1;
      newPersonnage[carac]--;

      return {
        personnage: newPersonnage,
        nbPointsDisponibles: newNbPointsDisponible,
      };
    });
  };

  handleAjouterPoint = (carac) => {
    this.setState((oldState) => {
      if (oldState.personnage[carac] >= 5 || oldState.nbPointsDisponibles <= 0)
        return null;
      const newPersonnage = { ...oldState.personnage };
      const newNbPointsDisponible = oldState.nbPointsDisponibles - 1;
      newPersonnage[carac]++;

      return {
        personnage: newPersonnage,
        nbPointsDisponibles: newNbPointsDisponible,
      };
    });
  };

  handleImagePrecedente = () => {
    this.setState((oldState) => {
      const newPersonnage = { ...oldState.personnage };
      if (oldState.personnage.image <= 1) newPersonnage.image = 3;
      else newPersonnage.image--;
      return { personnage: newPersonnage };
    });
  };

  handleImageSuivante = () => {
    this.setState((oldState) => {
      const newPersonnage = { ...oldState.personnage };
      if (oldState.personnage.image >= 3) newPersonnage.image = 1;
      else newPersonnage.image++;
      return { personnage: newPersonnage };
    });
  };

  handleChangeArme = (arme) => {
    const newPersonnage = { ...this.state.personnage };
    newPersonnage.arme = arme;

    this.setState({ personnage: newPersonnage });
  };

  handleReinitialisation = () => {
    this.setState({
      personnage: {
        image: 1,
        force: 0,
        agilite: 0,
        intelligence: 0,
        arme: null,
      },
      nbPointsDisponibles: 7,
      armes: ["epee", "fleau", "arc", "hache"],
    });
  };

  handleValidation = () => {
    this.setState({ loading: true });
    const player = {
      perso: { ...this.state.personnage },
      nom: this.state.nom,
    };

    axios
      .post(
        "https://creaperso-1fa75-default-rtdb.firebaseio.com/perso.json",
        player
      )
      .then((reponse) => {
        this.setState({ loading: false });
        this.handleReinitialisation();
        this.props.refresh();
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
        this.handleReinitialisation();
      });
  };

  render() {
    return (
      <div className="container">
        <TitreH1>Créateur de personnage</TitreH1>
        {this.state.loading && <div>Chargement...</div>}
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Nom
          </label>
          <input
            className="form-control"
            id="inputName"
            type="text"
            value={this.state.nom}
            onChange={(event) =>
              this.setState({ nom: event.currentTarget.value })
            }
          />
        </div>
        <Personnage
          moins={this.handleMoins}
          plus={this.handlePlus}
          {...this.state.personnage}
          precedente={this.handleImagePrecedente}
          suivante={this.handleImageSuivante}
          nbPointsDisponibles={this.state.nbPointsDisponibles}
          enleverPoint={this.handleEnleverPoint}
          ajouterPoint={this.handleAjouterPoint}
        />
        {this.state.loading && <div>Chargement...</div>}
        {this.state.armes && (
          <Armes
            listeArmes={this.state.armes}
            changeArme={this.handleChangeArme}
            currentArme={this.state.personnage.arme}
          />
        )}

        <div className="row no-gutters">
          <Bouton
            typeBtn="btn-danger"
            css="col-6"
            clic={this.handleReinitialisation}
          >
            Réinitialiser
          </Bouton>
          <Bouton
            typeBtn="btn-success"
            css="col-6"
            clic={this.handleValidation}
          >
            Créer
          </Bouton>
        </div>
      </div>
    );
  }
}

export default CreateurPersonnage;
