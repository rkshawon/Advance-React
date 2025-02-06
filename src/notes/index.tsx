import Notes from "./Notes";
import HOC from "./hoc";

const Feature = () => {
  const AuthCheck = HOC(Notes);
  return (
    <div>
      <Notes />
      <AuthCheck />
    </div>
  );
};

export default Feature;
