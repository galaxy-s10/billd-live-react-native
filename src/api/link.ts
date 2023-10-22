import { ILink, IPaging } from '../interface';
import request from './request';

export function fetchLinkList(params) {
  return request.get<IPaging<ILink>>('/link/list', { params });
}
