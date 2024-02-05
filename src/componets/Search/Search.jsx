import "../../main.css";
import "./search.css";

export function Search({ region, value }) {
  
  return <option value={value}>{region}</option>;
}
