import { useEffect } from "react";

const useDocTitle = (count: number) => {
  useEffect(() => {
    document.title = "Count - " + count;
  }, [count]);
};

export default useDocTitle;
