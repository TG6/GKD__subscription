import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.allinone.callerid',
  name: 'Showcaller',
  groups: [
    {
      key: 1,
      name: '弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[id="mys-content"] > View > View > Button[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13696207',
        },
        {
          key: 1,
          matches: '[id="close-button"] > View > View > Image',
          snapshotUrls: 'https://i.gkd.li/i/13696205',
        },
      ],
    },
  ],
});
