import Notes from "./Notes";
import HOC from "./hoc";
import Renderprops from "./renderprops";

const Feature = () => {
  const AuthCheck = HOC(Notes);
  return (
    <div>
      <Notes />
      <AuthCheck />
      <Renderprops
        render={(isOn) => {
          return isOn ? <div>Render is On</div> : <div>Render is Off</div>;
        }}
      />
    </div>
  );
};

export default Feature;
