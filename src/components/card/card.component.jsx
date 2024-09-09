//import { Component } from "react";
import "./card.styles.css";

const Card = ({ actor: { id, name, email }, actorType }) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${id}?set=set2&size=180x180`}
      alt={actorType + ` ${name}`}
    />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);

// class Card extends Component {
//   render() {
//     const { id, name, email } = this.props.actor;
//     return (
//       <div className="card-container" key={id}>
//         <img
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//           alt={this.props.actorType+` ${name}`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default Card;
