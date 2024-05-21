import propTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  //   const title = props.title;
  const addHandler = () => {
    console.log("Added ✔");
  };
  const removeHandler = () => {
    console.log("Removed ✔");
  };
  const resetHandler = () => {
    console.log("reset ✔");
  };

  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button text="ADD" color="green" onClick={addHandler} />
      <Button text="REMOVE" color="red" onClick={removeHandler} />
      <Button text="RESET" color="#666" onClick={resetHandler} />
    </header>
  );
};

Header.propTypes = {
  title: propTypes.string.isRequired,
};

export default Header;
