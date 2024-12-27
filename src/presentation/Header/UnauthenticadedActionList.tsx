import { Button } from "../../components/Button"
import { List, ListItem } from "./styles"

export const UnauthenticadedActionList = () => {
    return (
        <List>
            <ListItem>
                <Button link to="/auth/register">
                    Abrir conta
                </Button>
            </ListItem>
            <ListItem>
                <Button outline link to="/auth/login">
                    Login
                </Button>
            </ListItem>
        </List>
    )
}