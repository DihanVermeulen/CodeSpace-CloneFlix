let users = localStorage.getItem('users');
if (users == null || users == undefined) {
    localStorage.setItem('users', JSON.stringify([]));
};