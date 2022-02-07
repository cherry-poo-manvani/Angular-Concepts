import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../Model/user.model';

@Pipe({
  name: 'userfilter'
})
export class UserfilterPipe implements PipeTransform {

  transform(users: User[], Searchname: string): User[] {
    if (Searchname == '') {
      return users
    }


    return users.filter(data => {
      return data.firstname.toLowerCase().match(Searchname.toLowerCase())
    })
  }

}
