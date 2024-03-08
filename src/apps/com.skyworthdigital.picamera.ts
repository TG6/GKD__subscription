import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.skyworthdigital.picamera',
  name: '创维智慧云',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      rules: [
        {
          key: 0,
          matches: '[vid="splash_container"] >4 View[clickable=true]',
          exampleUrls:
            'https://m.gkd.li/101449500/576447d9-56ce-476d-9d2f-4de479c82f96',
          snapshotUrls: 'https://i.gkd.li/i/14537292',
        },
        // 补充全局规则
        {
          key: 1,
          quickFind: true,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
        },
        {
          key: 2,
          matches:
            '[childCount=0][visibleToUser=true][(text.length<10 && (text*="跳过" || text*="跳過" || text*="skip" || text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || desc*="跳过" || desc*="skip" || (vid*="count" && vid*="down" && vid!*="countdown" && vid!*="load" && vid!*="add" && vid!*="ead")]',
        },
      ],
    },
  ],
});