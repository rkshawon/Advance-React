import { useEffect } from "react";

const Cookie = () => {
  useEffect(() => {
    const token = "static-token-12345";
    document.cookie = `authToken=${token}; path=/; secure; domain=example.com; samesite=strict;`;
  }, []);
  return <div>Test</div>;
};

export default Cookie;
