import { Balance } from "../Balance";
import { Card, DateWrapper, GreetingWrapper, Heading } from "./styles"

const options: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
};

export const Account = () => {
    return (<Card>
        <GreetingWrapper>
            <DateWrapper>
                {new Date().toLocaleDateString('pt-BR', options)}
            </DateWrapper>
            <Heading>
                Olá, Joana! :)
            </Heading>
        </GreetingWrapper>
        <div>
            <Balance value={2500}/>
        </div>
    </Card>)
}