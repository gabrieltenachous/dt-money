import { Container } from "./styles";
import incomeImg from '../../assets/income.svg';
import intotal from '../../assets/total.svg';
import outcomeImg from '../../assets/outcome.svg';
import { TransactionsContext } from "../../TransactionsContext";
import { useContext } from "react";
 
export function Summary(){  
    const {transactions} = useContext(TransactionsContext);  
    const summary = transactions.reduce((acc,transaction) => {
        if(transaction.type ==='deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }else{
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;
    },{
        deposits:0,
        withdraws:0,
        total:0
    })
    return(
        <Container> 

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"/>
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',{
                    style:'currency',
                    currency:'BRL'
                }).format(summary.deposits)}</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Entradas"/>
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR',{
                    style:'currency',
                    currency:'BRL'
                }).format(summary.withdraws)}
                </strong>
                
            </div>
            <div className="highlight_background">
                <header>
                    <p>Entradas</p>
                    <img src={intotal} alt="Entradas"/>
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',{
                    style:'currency',
                    currency:'BRL'
                }).format(summary.total)}</strong>
            </div>
        </Container>
    );
}