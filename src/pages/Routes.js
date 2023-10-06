import { useState } from "react"
import { BrowserRouter, Route } from "react-router-dom"   // Switch
import { UsuarioContext } from "common/Usuario"
import Login from "./Login"
import Feira from "./Feira"
import Carrinho from "./Carrinho"


export const Routes = () => {

    const [nome, setNome] = useState("")

    const [saldo, setSaldo] = useState(0)


    return (
        <BrowserRouter>
            <Routes>
                {/* <Switch> */}
                <Route exact path="/">
                    <UsuarioContext.Provider value={{ nome, setNome, saldo, setSaldo }}>
                        <Login />
                    </UsuarioContext.Provider>
                </Route>
                <Route path="/feira">
                    <Feira />
                </Route>
                <Route path="/carrinho">
                    <Carrinho />
                </Route>
                {/* </Switch> */}
            </Routes>
        </BrowserRouter>
    )
}
export default Routes