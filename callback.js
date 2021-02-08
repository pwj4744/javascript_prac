'use strict';

class UserStorage {
  loginUser(id, password, onSucess, onError) {
    setTimeout(() => {
      if (
        (id === 'wj' && password === 'dream') ||
        (id === 'wj2' && password === 'dream2')
      ) {
        onSucess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSucess, onError) {
    setTimeout(() => {
      if (user === 'wj') {
        onSucess({ name: 'wj', role: 'admin'});
      } else if (user === 'coder') {
        onSucess({ name: 'wj2', role: 'admin2'});
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}


const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {
        console.log(error);
      }
     
    );
  },
  error => {
    console.log(error);
  }
)
