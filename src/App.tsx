import "./App.css";
import Cookie from "./cookie";
// import DocTitle from "./components/custome-hook";
// import Notes from "./notes";

function App() {
  return (
    <div
      style={{
        width: "60%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "auto",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "15px",
        lineHeight: "1.5",
      }}
    >
      {/* <DocTitle /> */}
      {/* <Notes /> */}
      <Cookie />
    </div>
  );
}

export default App;
