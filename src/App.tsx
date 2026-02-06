import "./styles.css";
import Autocomplete from "./components/Autocomplete";
import Description from "./components/Description";

const onItemSelected = (selected: string) => {
  alert("Selected:" + selected);
};

export default function App() {
  return (
    <div className="App">
      <div className="preview-cont">
        <h2>Preview</h2>
        <Autocomplete />
      </div>
      <Description />
    </div>
  );
}
