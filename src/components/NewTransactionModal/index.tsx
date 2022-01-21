import Modal from 'react-modal';
import { Container, TransactionTypeContainer,RadioBox } from './styls';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg'; 
import { useState } from 'react';
interface NewTransactionModalProps{
    isOpen:boolean;
    onRequestClose:()=>void;
} 
export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps){
    const [type,setType] = useState('deposit');

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
                placeholder="Titulo" />

            <input
                type="number"
                placeholder="Valor" />
            <TransactionTypeContainer>
                <RadioBox
                    type="button"
                    onClick={()=>{setType('deposit')}}
                    isActive={type === 'deposit'}> 
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
                    type="button"> 
                    <img 
                        src={outcomeImg} 
                        alt="Saida"
                     />
                    <span>Saida</span>
                </RadioBox>
            </TransactionTypeContainer>
            <input
                placeholder="Categoria" />
            
            <button type="submit">
                Cadastrar
            </button>
        </Container>
        </Modal>

    );
}