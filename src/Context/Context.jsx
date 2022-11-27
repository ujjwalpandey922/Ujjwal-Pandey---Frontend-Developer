import { createContext, useContext, useEffect, useState } from "react";

const CapsuleContext = createContext();

const Context = ({ children }) => {
  const [data, setData] = useState([]);
  const getphp = async () => {
    try {
      const resp = await fetch("http://localhost:3000/src/rest/index.php");
      const allResp = await resp.json();
      if (allResp) {
        setData(allResp);
      } else {
        setData(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getphp();
  }, []);
  return (
    <CapsuleContext.Provider value={{ data, setData, getphp }}>
      {children}
    </CapsuleContext.Provider>
  );
};

export default Context;
export const useCapsule = () => useContext(CapsuleContext);
