# Development
## Entry
`src/cli` 是应用入口，`src/index` 是项目编译入口

## Debug

```bash
# install dependencies
yarn && yarn link # link to global

yarn link "walle" # In other project you want to link walle
```

add scripts in `package.json` script

```json
  "api:init": "cross-env walle init",
  "api:gen": "cross-env walle gen"
```

## Commit Type

> build, ci, docs, feat, fix, perf, refactor, revert, style, test

## TO-DO

* [ ] 自定义 request 文件
* [ ] 自定义请求函数的模板
* [X] 省略请求参数，如：loginUserInfoDTO
* [ ] 接口函数和类型分为不同文件
* [ ] 支持 `@walle-ignore`