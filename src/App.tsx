//import { Component } from "react";
import {ChangeEvent, useEffect, useState} from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonster] = useState(monsters);

  console.log("rendering");

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    }
    fetchUsers();
  }, []); // [] means this effect runs only once on component mounting

  useEffect(() => {
    setFilteredMonster(
      monsters.filter((m) => m.name.toLocaleLowerCase().includes(searchText))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monsters, searchText]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>):void => {
    const searchTextValue = event.target.value.toLocaleLowerCase();
    setSearchText(searchTextValue);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        dataType="monsters"
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
};

export default App;

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchText: "",
//     };

//     /*
//     // boiler plate code if arrow function is not used
//     this.onSearchChange = this.onSearchChange.bind(this);
//     */
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     const searchText = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchText };
//     });
//   };

//   render() {
//     const { monsters, searchText } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((m) =>
//       m.name.toLocaleLowerCase().includes(searchText)
//     );

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           className="monsters-search-box"
//           onChangeHandler={onSearchChange}
//           dataType="monsters"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

//export default App;
