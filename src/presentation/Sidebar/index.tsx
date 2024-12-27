import { Aside, Link, List, ListItem } from "./styles"

export const Sidebar = () => {
    return (<Aside>
        <nav>
            <List>
                <ListItem $active>
                    <Link href="#">
                        Início
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="#">
                        Transferências
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="#">
                        Investimentos
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="#">
                        Outros serviços
                    </Link>
                </ListItem>
            </List>
        </nav>
    </Aside>)
}