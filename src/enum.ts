export enum LiveLineEnum {
  rtc = 'rtc',
  hls = 'hls',
  flv = 'flv',
}

/** 直播间类型 */
export enum LiveRoomTypeEnum {
  /** 系统直播 */
  system,
  /** 主播使用webrtc直播 */
  user_wertc,
  /** 主播使用srs直播 */
  user_srs,
  /** 主播使用obs/ffmpeg直播 */
  user_obs,
  /** 主播使用msr直播 */
  user_msr,
}

export enum FrontendKeyEnum {
  'allow_qq_login' = 'allow_qq_login',
  'allow_github_login' = 'allow_github_login',
  'allow_email_login' = 'allow_email_login',
  'allow_comment' = 'allow_comment',
  'allow_link' = 'allow_link',
  'allow_shutdown_modal' = 'allow_shutdown_modal',
  'shutdown_modal_content' = 'shutdown_modal_content',
  'allow_home_modal' = 'allow_home_modal',
  'home_modal_content' = 'home_modal_content',
  'about_me' = 'about_me',
}

export enum FormTypeEnum {
  'input' = 'input',
  'password' = 'password',
  'number' = 'number',
  'select' = 'select',
  'radio' = 'radio',
  'checkbox' = 'checkbox',
  'markdown' = 'markdown',
  'switch' = 'switch',
  'upload' = 'upload',
  'treeSelect' = 'treeSelect',
  'datePicker' = 'datePicker',
}
