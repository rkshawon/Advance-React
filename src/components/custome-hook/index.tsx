//React official doc for better understanding  https://legacy.reactjs.org/docs/hooks-custom.html

import { useState } from "react";
import useDocTitle from "../../hooks/useDocTitle";

const DocTitle = () => {
  const [count, setCount] = useState(0);

  useDocTitle(count);
  return <button onClick={() => setCount(count + 1)}>Doc Title</button>;
};

export default DocTitle;
