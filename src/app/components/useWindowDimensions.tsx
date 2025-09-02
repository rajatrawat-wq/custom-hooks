import { useState, useEffect } from "react";

function useWindowDimensions() {
  const [inittalWindowSize, setInittalWindowSize] = useState({});

  useEffect(() => {
    if (typeof window !== undefined) { //it hsows error because of different server and client side and the client side doesn't have any window
      setInittalWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
  }, [])
  const [windowSize, setWindowSize] = useState(inittalWindowSize);

  useEffect(() => {
    const handleResize = () => {

      const size = {
        width: window.innerWidth,
        height: window.innerHeight,
      }
      setWindowSize(size);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default useWindowDimensions;
