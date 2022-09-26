// 1. se crea el contexto y se puede disponer desde cualquier lugar, como módulo
import { createContext } from "react"; 
const Context = createContext({}); 
export default Context;