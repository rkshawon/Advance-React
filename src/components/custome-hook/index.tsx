//React official doc for better understanding  https://legacy.reactjs.org/docs/hooks-custom.html

//For HOC ref: https://medium.com/@abhiman.max_44888/supercharge-your-react-components-with-higher-order-components-hocs-and-react-hooks-454eabb17de4#:~:text=Higher%2DOrder%20Components%20(HOCs),-We'll%20start&text=HOCs%20are%20a%20pattern%20in,with%20additional%20props%20or%20behavior.

import { useState } from "react";
import useDocTitle from "../../hooks/useDocTitle";

const DocTitle = () => {
  const [count, setCount] = useState(0);

  useDocTitle(count);
  return <button onClick={() => setCount(count + 1)}>Doc Title</button>;
};

export default DocTitle;
