import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1710380_2xuyienslq8.js' // 在 iconfont.cn 上生成
});
export default props => <MyIcon {...props} />;
