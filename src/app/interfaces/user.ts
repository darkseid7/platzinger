//exporto la interface llamada User
//las interfaces son como clases que tienen propiedades
//el signo de interrogación es para decirle a mi interfaz que esa propiedad no es obligatoria
export interface User{
nick: string,
subnick?: string,
age?: number,
email: string,
friend: boolean,
uid: any,
status: string
}