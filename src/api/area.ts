import { IArea, ILiveRoom, IPaging } from '../interface';
import request from './request';

export function fetchAreaAareLiveRoomList(params) {
  return request.get<IPaging<IArea>>('/area/area_live_room_list', { params });
}

export function fetchAreaLiveRoomList(params) {
  return request.get<IPaging<ILiveRoom>>('/area/live_room_list', { params });
}
