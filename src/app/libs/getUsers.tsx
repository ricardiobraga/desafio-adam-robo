import axios from 'axios';

export default async function getUsers() {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    return res.data;
  } catch (error) {
    console.log(error);
  }
}
