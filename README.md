# 知乎日报 built with Vue.js

使用vue2 + vue-router + axios + ream + mint-ui实现的服务端渲染的知乎日报demo,只实现了今日日报列表和文章查看。

## 如何使用？

```sh
# local develop
npm run dev
# build for production
npm run build
# production server
npm run start
```

## 截图

![](https://github.com/LiuZhichao/vue-ssr-zhihu-daliy/raw/master/preview/01.png)
![](https://github.com/LiuZhichao/vue-ssr-zhihu-daliy/raw/master/preview/02.png)

## 小问题

知乎的API不可以跨域请求，我在这里借用了walleeeee(https://github.com/walleeeee) 的demo中代理的API获取数据。

