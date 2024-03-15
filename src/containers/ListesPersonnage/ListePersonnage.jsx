import axios from "axios";
import { Component } from "react";
import Personnage from "./Personnage/Personnage";
import Titreh1 from "../../components/Titres/TitreH1";

class ListePersonnage extends Component {
  state = {
    personnages: null,
    loading: false,
  };

  loadData = () => {
    this.setState({ loading: true });
    axios
      .get("https://creaperso-1fa75-default-rtdb.firebaseio.com/perso.json")
      .then((reponse) => {
        const personnages = Object.values(reponse.data);
        this.setState({ personnages, loading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  };

  componentDidMount = () => {
    this.loadData();
  };

  componentDidUpdate = (oldProps, oldState) => {
    if (oldProps.refresh !== this.props.refresh) this.loadData();
  };

  render() {
    return (
      <div className="container-fluid">
        {this.state.loading && <div>Chargement...</div>}
        {!this.state.loading && this.state.personnages && (
          <div className="row no-gutters">
            {this.state.personnages.map((perso, index) => {
              return (
                <div key={index} className="col-6">
                  <Titreh1>{perso.nom}</Titreh1>
                  <Personnage {...perso.perso} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default ListePersonnage;
