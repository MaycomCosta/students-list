import axios from 'axios'

const URL = 'https://randomuser.me/api/'

async function getStudents() {
  const response = await axios.get(`${URL}?page=2&results=5&seed=abc`)

  console.log(response)

  return response
}
getStudents()
// async function updateUserName(userId: string, name: string): Promise<User> {
//   const response = await axios.put<User>(`${URL}users/${userId}`, { name });

//   return response.data;
// }

export const api = {
  getStudents
  // updateUserName
}
