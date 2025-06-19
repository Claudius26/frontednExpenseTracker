export function getUserEmail(){
  
  const user = JSON.parse(localStorage.getItem('user'));
  return user.data.email;

}