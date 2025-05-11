import { Toaster } from "react-hot-toast";

export const AppProvider = ({ children }) => {
  return (
    <>
      <Toaster position="top-center" />
      {children}
    </>
  );
};
