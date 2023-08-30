import axios from 'axios';

type Post = {
  firstName: string;
  lastName: string;
  email: string;
};

export async function getUsers() {
  try {
    const res = await axios.get('https://dummyapi.io/data/v1/user/', {
      method: 'get',
      headers: {
        'Content-type': 'application/json',
        'app-id': '64ed3b0dac0c0c321e9ed9e4'
      }
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function postUser() {
  try {
    const { data, status } = await axios.post<Post>(
      'https://dummyapi.io/data/v1/user/create',
      {
        firstName: 'Ricardo',
        lastName: 'Braga',
        email: 'rcardiobraga@gmail.com'
      },
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Accept: 'application/json',
          'app-id': '64ed3b0dac0c0c321e9ed9e4'
        }
      }
    );

    console.log(JSON.stringify(data, null, 4));

    console.log(status);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}
