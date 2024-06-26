import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'yyc.xk',
  name: '星空视频壁纸',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      rules: [
        {
          key: 0,
          name: '腾讯SDK',
          matches: '[vid="XK"] >n FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/14011298', //另一个x为假x
        },
      ],
    },
  ],
});
