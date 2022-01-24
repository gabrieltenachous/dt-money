import Modal from 'react-modal';
import { Container, TransactionTypeContainer,RadioBox } from './styls';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg'; 
import { FormEvent, useState,useContext } from 'react';
import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContext';
interface NewTransactionModalProps{
    isOpen:boolean;
    onRequestClose:()=>void;
} 

export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps){
    const {createTransactions} = useContext(TransactionsContext);
    const transactions = useContext(TransactionsContext);
    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState(0);
    const [category,setCategory] = useState('');
    const [type,setType] = useState('deposit'); 


    async function handleCreateNewTransaction(event:FormEvent){
        event.preventDefault(); 
        await createTransactions({ 
            title,  
            amount:amount,
            category,
            type,
        });  
        setTitle('');
        setAmount(0);
        setType('deposit'); 
        setCategory('');
        onRequestClose();
    }
    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
         >
        <button type="button" onClick={onRequestClose} className="react-modal-close">
            <img src={closeImg} alt="Fechar modal"/>
        </button>
        <Container> 
            <h2>Cadastrar Transacao</h2> 
           
            <input
                type="text"
                placeholder="Titulo"
                value={title}
                onChange={event => setTitle(event.target.value)} />

            <input
                type="number"
                placeholder="Valor"
                value={amount}
                onChange={event => setAmount(Number(event.target.value))} />
                
            <TransactionTypeContainer>
                <RadioBox
                    type="button"
                    onClick={()=>{setType('deposit')}}
                    isActive={type === 'deposit'}
                    activeColor="green"> 
                    <img 
                        src={incomeImg} 
                        className={type === 'deposit' ? 'active' : ''}
                        alt="Entrada"
                        
                    />
                    <span>Entrada</span>
                </RadioBox>
                <RadioBox 
                    isActive={type === 'withdraw'}  
                    onClick={()=>{setType('withdraw')}}
                    type="button"
                    activeColor="red"> 
                    <img 
                        src={outcomeImg} 
                        alt="Saida"
                     />
                    <span>Saida</span>
                </RadioBox>
            </TransactionTypeContainer>
            <input
                placeholder="Categoria" 
                value={category}
                onChange={event => setCategory(event.target.value)}
                /> 
            <button type="submit" onClick={handleCreateNewTransaction}>
                Cadastrar
            </button>
        </Container>
        </Modal>

    );
}