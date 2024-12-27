import { Link } from "react-router-dom"
import { Container, StyledHeader, List, ListItem } from "./styles"
import { useAuthContext } from "../../app/hooks/useAuthContext"
import { AuthenticadedActionList } from "./AuthenticadedActionList"
import { UnauthenticadedActionList } from "./UnauthenticadedActionList"
import { IconLogo } from "../../components/Icons"

export const Header = () => {
    const { session } = useAuthContext()
    return (<StyledHeader>
        <Container>
            <List>
                <ListItem>
                    <Link to="/">
                        <IconLogo />
                    </Link>
                </ListItem>
            </List>
            { session ? <AuthenticadedActionList /> : <UnauthenticadedActionList /> }
        </Container>
    </StyledHeader>)
}