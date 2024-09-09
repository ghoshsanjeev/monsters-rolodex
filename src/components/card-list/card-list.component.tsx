//import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";
import {Monster} from "../../App";

type CardListProps = {
  monsters: Monster[]
}

const CardList = ({ monsters }: CardListProps) => (
  <div className="card-list">
    {
    monsters.map((monster) => <Card key={monster.id} actor={monster} actorType="monster" />)
    }
  </div>
);

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return (
//             <Card actor={monster} actorType="monster"/>
//           );
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
