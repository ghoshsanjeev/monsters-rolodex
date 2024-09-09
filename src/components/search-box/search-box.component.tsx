//import { Component } from "react";
import "./search-box.styles.css";
import {ChangeEvent, ChangeEventHandler} from "react";

type SearchBoxProps = {
    className: string;
    dataType?: string;
    func: ChangeEventHandler; // can use these two lines interchangeably
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({className, dataType, onChangeHandler}: SearchBoxProps) => (
    <input
        className={`search-box ${className}`}
        type="search"
        placeholder={`Search for ${dataType}...`}
        onChange={onChangeHandler}
    />
);

export default SearchBox;
// class SearchBox extends Component {
//   render() {
//     const {className, dataType, onChangeHandler} = this.props;
//     return (
//       <input
//         className={`search-box ${className}`}
//         type="search"
//         placeholder={`Search for ${dataType}...`}
//         onChange={onChangeHandler}
//       />
//     );
//   }
// }

//export default SearchBox;
