export type userDataType = {
    token: string,
    usuario: {
    id: number,
    nombre: string,
    apellido: string,
    correo: string,
    cargo: string,
    tipoUsuario: string,
    activo: true,
    verificado: true,
    fechaRegistro: Date,
    fechaUltimoAcceso: Date,
    aceptarTerminos: true,
    roles: string[]
  }
};