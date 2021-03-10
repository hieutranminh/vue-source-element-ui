import { ApiService } from './api.service';

const BaseUrl = 'auth';

export function login(params = {}) {
  return ApiService.post(`${BaseUrl}/admin/login`, params).then((resp) => resp.data);
}

export function logout() {
  return ApiService.get(`${BaseUrl}/logout`).then((resp) => resp.data.data);
}
