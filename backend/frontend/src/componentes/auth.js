export const TOKEN_KEY = "&app-token";
export const ID_USUARIO = "&id-usuario";
export const NOME_USUARIO = "&nome";
export const USER_TYPE = "&user-type";

export const login = token => {localStorage.setItem(TOKEN_KEY, token);}
export const logout = () => {localStorage.removeItem(TOKEN_KEY);}

export const setIdUsuario = id => {localStorage.setItem(ID_USUARIO, id);}
export const getIdUsuario = () => {return localStorage.getItem(ID_USUARIO);}

export const setNomeUsuario = nome => {localStorage.setItem(NOME_USUARIO, nome);}
export const getNomeUsuario = () => {return localStorage.getItem(NOME_USUARIO);}