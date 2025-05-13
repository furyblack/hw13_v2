import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  findUsers(term: string) {
    return [
      { id: 1, name: 'mih' },
      { id: 2, name: 'ojf' },
      { id: 3, name: 'andr' },
    ].filter((u) => !term || u.name.indexOf(term) > -1);
  }
}
