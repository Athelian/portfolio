import { createContext, useEffect, useState } from "react";

export const DeviceContext = createContext();
export const DeviceContextConsumer = DeviceContext.Consumer;

export const DeviceContextProvider = ({ children }) => {
  const [device, setDevice] = useState("desktop");
  const isMobile = IsMobile();

  useEffect(() => {
    if (isMobile) setDevice("mobile");
  }, []);

  return <DeviceContext.Provider value={device}>{children}</DeviceContext.Provider>;
};
