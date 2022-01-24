import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal"; 
import { TransactionProvider, TransactionsContext } from "./TransactionsContext";

Modal.setAppElement("#root")
export function App() {
  const [isNewTransacetionModalOpen,setNewTransactionModalOpen] = useState(false);
 

  function handleOpenNewTransactionModal(){
      setNewTransactionModalOpen(true);
  }
  
  function handleCloseNewTransactionModal(){
      setNewTransactionModalOpen(false);
  }

  return (
    <TransactionProvider >
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/> 
      <Dashboard></Dashboard> 
      <NewTransactionModal 
        isOpen={isNewTransacetionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}></NewTransactionModal>
       <GlobalStyle></GlobalStyle>
    </TransactionProvider>
  );
} 
