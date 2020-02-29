export default class UsersService {
  _paiBase = 'http://127.0.0.1:8000/api/';
  requestToApi = async (url, data) => {
    const request = await fetch(`${this._paiBase}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    });
    if (!request.ok) {
      throw new Error(`Ошибка ${request.status}`);
    }
  };

  createNewUser = async (data) => {
    await this.requestToApi('create_new_user/', data);
  };

  authUser = async (data) => {
    await this.requestToApi('auth_user/', data);
  };
}
