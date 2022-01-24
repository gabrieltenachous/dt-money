import { Summary } from "../Summary";
import { TransacetionTable } from "../TransacetionTable";
import { Container } from "./styles";
export function Dashboard(){
    return(
        <Container>
            <Summary/>
            <TransacetionTable></TransacetionTable>
        </Container>
    );
}