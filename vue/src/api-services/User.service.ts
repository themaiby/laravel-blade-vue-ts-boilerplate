import api from '@/api-services/api';
import { unwrap } from '@/api-services/api.helpers';
import { apiRoutes } from '@/constants/api-routes';
import { IUser } from '@/interfaces/IUser';

export class UserService {
  /**
   * Get simple resource request
   * @param {number} id
   * @returns {Promise<IUser>}
   */
  public static get(id: number): Promise<IUser> {
    return api.get(apiRoutes.users.get(id)).then(unwrap);
  }
}
