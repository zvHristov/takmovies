import httpGCInstance from './httpInstance';

/**
 * Local Types
 **/

type userRegisterProvidedData = {
  locale: string,
  email: string,
  name: string,
  password: string,
  captcha: string,
}

export const httpGetUser: Function = async (): Promise<boolean> => {
    return httpGCInstance({
      method: 'GET',
      url: '/user',
    })
}

export const httpGetMovies: Function = async (): Promise<boolean> => {
    return httpGCInstance({
      method: 'GET',
      url: '/movies',
    })
}
export const httpMe: Function = async (): Promise<boolean> => {
  return httpGCInstance({
    method: 'GET',
    url: '/me',
  })
}

export const httpLogin: Function = async (): Promise<boolean> => {
  return httpGCInstance({
    method: 'POST',
    url: '/login',
  })
}

export const httpRegister: Function = async (user: { email: string, password: string }): Promise<boolean> => {
  return httpGCInstance({ method: 'POST', url: '/register', data: user, })
}