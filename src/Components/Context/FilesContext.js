import {React, createContext, useContext, useState } from 'react';

const FilesContext = createContext();

export function FilesContextProvider({ children }) {
  const [firstFileData, setFirstFileData] = useState('');
  const [inquiryActive, setInquiryActive] = useState(false);

  const updateFirstFile = (data) => {
    setFirstFileData(data);
  };

  const toggleInquiry = () => {
    setInquiryActive(prevState => !prevState);
  };

  return (
    <FilesContext.Provider value={{ firstFileData, updateFirstFile, inquiryActive, toggleInquiry }}>
      {children}
    </FilesContext.Provider>
  );
}

export function useFiles() {
  return useContext(FilesContext);
}
