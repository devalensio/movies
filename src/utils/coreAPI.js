import axiosInstance from './axiosConfig';

export async function coreAPI(options) {
  try {
    const { data } = await axiosInstance(`${options.path}`, {
      method: options.method,
      headers: {
        'content-type': 'application/json;charset=utf-8',
      },
      ...(options.data ? { data: options.data } : ''),
    });

    return data;
  } catch (error) {
    throw error;
  }
}
