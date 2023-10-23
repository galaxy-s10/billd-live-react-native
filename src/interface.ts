import { FormTypeEnum, FrontendKeyEnum, LiveRoomTypeEnum } from './enum';

export interface IArea {
  id?: number;
  name?: string;
  remark?: string;
  /** 权重 */
  weight?: number;
  area_live_rooms?: IAreaLiveRoom[];
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}
export interface IUserLiveRoom {
  id?: number;
  user_id?: number;
  live_room_id?: number;
  /** 用户信息 */
  user?: IUser;
  /** 直播间信息 */
  live_room?: ILiveRoom;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}
export interface ILiveRoom {
  id?: number;
  /** 用户信息 */
  user?: IUser;
  /** 用户信息 */
  users?: IUser[];
  /** 分区信息 */
  area?: IArea;
  /** 直播信息 */
  live?: ILive;
  user_live_room?: IUserLiveRoom & { user: IUser };
  name?: string;
  /** 1:使用cdn;2:不使用cdn */
  cdn?: number;
  /** 权重 */
  weight?: number;
  key?: string;
  type?: LiveRoomTypeEnum;
  cover_img?: string;
  rtmp_url?: string;
  flv_url?: string;
  hls_url?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}
export interface IAreaLiveRoom {
  id?: number;
  area_id?: number;
  live_room_id?: number;
  /** 分区信息 */
  area?: IUser;
  /** 直播间信息 */
  live_room?: ILiveRoom;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

export interface ILive {
  id?: number;
  /** 用户信息 */
  user?: IUser;
  /** 直播间信息 */
  live_room?: ILiveRoom;
  socket_id?: string;
  user_id?: number;
  live_room_id?: number;
  /** 1开启;2关闭 */
  track_video?: number;
  /** 1开启;2关闭 */
  track_audio?: number;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

export interface ISearchBase {
  keyWord?: string;
  nowPage?: string;
  pageSize?: string;
  orderBy?: string;
  orderName?: string;
  rangTimeType?: 'created_at' | 'updated_at' | 'deleted_at';
  rangTimeStart?: string;
  rangTimeEnd?: string;
}

export interface IList {
  nowPage?: number;
  pageSize?: number;
  orderBy?: string;
  orderName?: string;
  keyWord?: string;
}

export interface IPaging<T> {
  nowPage: number;
  pageSize: number;
  hasMore: boolean;
  total: number;
  rows: T[];
}

export interface ISequelizeTimestamps {
  created_at?: string;
  updated_at?: string;
  deleted_at?: any;
}

export type ISearch<T, Origin = ISearchBase> = T & Origin;

export interface IThirdUser extends ISequelizeTimestamps {
  id?: number;
  user_id?: number;
  third_user_id?: number;
  third_platform?: number;
}

export interface IStar extends ISequelizeTimestamps {
  id?: number;
  article_id?: number;
  comment_id?: number;
  from_user_id?: number;
  to_user_id?: number;
  from_user?: IUser;
  to_user?: IUser;
  article?: any;
  comment?: any;
}

export interface IFrontend extends ISequelizeTimestamps {
  id?: number;
  key?: FrontendKeyEnum;
  value?: string;
  desc?: string;
  type?: FormTypeEnum;
}

export interface IBackend extends ISequelizeTimestamps {
  id?: number;
  key?: string;
  value?: string;
  desc?: string;
  type?: FormTypeEnum;
}

export interface IComment extends ISequelizeTimestamps {
  id?: number;
  from_user_id?: number;
  content?: string;
  children_comment_total?: number;
  ua?: string;
  ip?: string;
  ip_data?: string;
  parent_comment_id?: number;
  reply_comment_id?: number;
  article_id?: number;
  to_user_id?: number;
  p_comment?: any[];
  to_user?: IUser;
  from_user?: IUser;
  stars?: any[];
  star_total?: number;
  status?: number;
}

export interface IAuth extends ISequelizeTimestamps {
  id?: number;
  auth_name?: string;
  auth_value?: string;
  type?: number;
  priority?: number | string;
  p_id?: number | null;
  c_auths?: number[];
}

export interface IRole extends ISequelizeTimestamps {
  id?: number;
  role_name?: string;
  role_value?: string;
  type?: number;
  priority?: number | string;
  p_id?: number | null;
  role_auths?: number[];
  c_roles?: number[];
}

export interface ITheme extends ISequelizeTimestamps {
  id?: number;
  model?: number;
  key?: string;
  value?: string;
  lang?: string;
  desc?: string;
}

export interface IArticle extends ISequelizeTimestamps {
  id?: number;
  title?: string;
  desc?: string;
  content?: string;
  head_img?: string | any[] | null;
  is_comment?: number;
  priority?: number;
  status?: number;
  click?: number;
  tags?: number[] | ITag[];
  types?: number[] | IType[];
  users?: number[] | IUser[];
  keyword?: string;
}

export interface IQiniuData extends ISequelizeTimestamps {
  id?: number;
  user_id?: number;
  prefix?: string;
  bucket?: string;
  qiniu_key?: string;
  qiniu_hash?: string;
  qiniu_fsize?: number;
  qiniu_mimeType?: string;
  qiniu_putTime?: number;
  qiniu_type?: number;
  qiniu_status?: number;
  qiniu_md5?: string;
}

export interface ILog extends ISequelizeTimestamps {
  id?: number;
  user_id?: number;
  api_user_agent?: string;
  api_duration?: number;
  api_from?: number;
  api_forwarded_for?: string;
  api_referer?: string;
  api_real_ip?: string;
  api_host?: string;
  api_hostname?: string;
  api_method?: string;
  api_path?: string;
  api_query?: string;
  api_body?: string;
  api_status_code?: number;
  api_error?: string;
  api_err_msg?: string;
  api_err_code?: number;
}

export interface IVisitorLog extends ISequelizeTimestamps {
  id?: number;
  user_id?: number;
  ip?: string;
  status?: number;
  ip_data?: string;
}

export interface IBlacklist extends ISequelizeTimestamps {
  id?: number;
  ip?: string;
  user_id?: number;
  type?: number;
  msg?: string;
}

export interface IMonit extends ISequelizeTimestamps {
  id?: number;
  type?: number;
  info?: string;
}

export interface IEmailUser extends ISequelizeTimestamps {
  id?: number;
  email?: string;
}

export interface IGithubUser extends ISequelizeTimestamps {
  id?: number;
  client_id?: string;
  login?: string;
  github_id?: number;
  node_id?: string;
  avatar_url?: string;
  gravatar_id?: string;
  url?: string;
  html_url?: string;
  type?: string;
  site_admin?: string;
  name?: string;
  company?: string;
  blog?: string;
  location?: string;
  email?: any;
  hireable?: any;
  bio?: string;
  twitter_username?: any;
  public_repos?: number;
  public_gists?: number;
  followers?: number;
  following?: number;
  github_created_at?: string;
  github_updated_at?: string;
  private_gists?: number;
  total_private_repos?: number;
  owned_private_repos?: number;
  disk_usage?: number;
  collaborators?: number;
  two_factor_authentication?: string;
}

export interface IUser extends ISequelizeTimestamps {
  id?: number;
  username?: string;
  password?: string;
  status?: number;
  avatar?: string;
  desc?: string;
  token?: string;
  user_roles?: number[];
  github_users?: IGithubUser[];
  qq_users?: IQqUser[];
  email_users?: IEmailUser[];
}

export interface IQqUser extends ISequelizeTimestamps {
  id?: number;
  client_id?: number;
  openid?: string;
  unionid?: string;
  nickname?: string;
  figureurl?: string;
  figureurl_1?: string;
  figureurl_2?: string;
  figureurl_qq_1?: string;
  figureurl_qq_2?: string;
  constellation?: string;
  gender?: string;
  city?: string;
  province?: string;
  year?: string;
}

export interface ILink extends ISequelizeTimestamps {
  id?: number;
  email?: string;
  name?: string;
  avatar?: string;
  desc?: string;
  url?: string;
  status?: number;
}

export interface IMusic extends ISequelizeTimestamps {
  id?: number;
  name?: string;
  cover_pic?: string | any[] | null;
  author?: string;
  audio_url?: string | any[] | null;
  status?: number;
}

export interface IWorks extends ISequelizeTimestamps {
  id?: number;
  name?: string;
  desc?: string;
  url?: string;
  bg_url?: string | any[] | null;
  priority?: string;
  status?: number;
}

export interface ITag extends ISequelizeTimestamps {
  id?: number;
  name?: string;
  color?: string;
  article_total?: number;
}

export interface IType extends ISequelizeTimestamps {
  id?: number;
  name?: string;
}
