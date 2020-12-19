import { publicGet, publicPost } from './publicAxios';
import type Order from './types/Order';

const BASE_URL = '/orders';

export const getOrders = (): Promise<Order[]> => publicGet(BASE_URL);

export const postOrder = (data: Order): Promise<void> => publicPost(BASE_URL, data);
