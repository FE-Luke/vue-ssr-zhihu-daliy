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

在首次打开由服务器渲染的页面时，preFetch和asyncData拿出的router并不是当前页面所在的路由信息，找了很久也没有发现问题在哪。于是只能自己暂时把ream源代码的default-handler改了一点后，可以拿出来了。可能是我哪个地方没有写对，如果有人找到原因还请给我提issue😁

将node_modules/ream/app/default-handler.js中

将第19行：

`const route = router.currentRoute`

改为：

`const route = to`

或者在src/index中直接重写handler，具体请看ream的文档。

查看vue-router文档，router.currentRoute确实是可以拿出当前路由对象，但是不知道为什么我这里拿不出来。😅

知乎的API不可以跨域请求，我在这里借用了walleeeee(https://github.com/walleeeee) 的demo中代理的API获取数据。

