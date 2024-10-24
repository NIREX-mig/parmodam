"use client";

import { createContext, useRef, useState } from "react";

export const globalContext = createContext();

const Globalstate = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const deleteDialogRef = useRef();
  const editDialogRef = useRef();

  const [selectedPost, setSelectedPost] = useState({});
  const [nextId, setNextId] = useState('');
  const [deleteId, setDeleteId] = useState("");
  const [editId, setEditId] = useState("");

  return (
    <globalContext.Provider
      value={{
        menuOpen,
        setMenuOpen,
        mobileNavIsOpen,
        setMobileNavIsOpen,
        deleteDialogRef,
        editDialogRef,
        selectedPost,
        setSelectedPost,
        nextId,
        setNextId,
        editId,
        setEditId,
        deleteId,
        setDeleteId,
        tableData,
        setTableData,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default Globalstate;
