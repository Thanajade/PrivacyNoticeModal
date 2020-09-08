import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyModal from "./MyModal";

const styles = {
  container: {
    width: "800px"
  }
};

export default function App() {
  return (
    <div className="App">
      <MyModal style={styles.container} />
    </div>
  );
}
