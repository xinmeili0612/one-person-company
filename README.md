# One Person Company MVP

微信小程序 MVP：测一测，你最适合做哪种一人公司。

## 当前版本范围

- 首页：价值主张 + 开始测试
- 测试页：12 道单选题
- 结果页：4 类结果输出 + 7 天建议
- 留资页：收集联系方式与卡点
- 数据页：本地查看基础埋点样例

## 技术方案

- 前端：原生微信小程序
- 当前数据：本地存储模拟
- 下一步建议：接入微信云开发 / Supabase

## 目录

- `miniprogram/` 小程序主目录
- `docs/product-spec.md` 产品说明与题库

## 本地运行

1. 用微信开发者工具打开仓库根目录
2. 将 `miniprogram` 设为小程序目录
3. `project.config.json` 中补充你自己的 `appid`
4. 运行预览

## 下一步待接

- 云数据库：sessions / leads / events
- 留资提交入库
- 事件埋点上报
- 后台筛选和导出

## 分支

当前开发分支：`feat/mvp-miniprogram`
