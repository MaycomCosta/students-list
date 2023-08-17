import axios from 'axios'

const URL = 'https://randomuser.me/api/'

async function getStudents() {
  const response = await axios.get(`${URL}?results=${5}`)

  return response.data.results
}
// async function updateUserName(userId: string, name: string): Promise<User> {
//   const response = await axios.put<User>(`${URL}users/${userId}`, { name });

//   return response.data;
// }

export const api = {
  getStudents
  // updateUserName
}
