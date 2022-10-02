
const initialState = {
  validando: true,
  token: null,
  userName: '',
  nombre: ''
}

type AuthAction = { type: 'logout' }

export const authRequest = (state = initialState, action: AuthAction) => {
  switch (action.type) {
  case 'logout':
    return {
      validando: false,
      token: null,
      nombre: '',
      userName: ''
    }
  default:
    return state
  }
}
