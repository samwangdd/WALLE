# WALL-E
A tool to help you generate API files and TS types from YApi.
Form a movie named WALL-E. He's cute and goodness, work hard and never complain.

## Install
```bash
npm install -g @yapi/wallE-cli
```

## Usage
```bash
# init
apits init

# generate
apits gen
```

## Development
```bash
# install dependencies
yarn && yarn link # link to global

yarn link api-typescript # In other project you want to link apits
```
[Development Doc](doc/development.md)

add scripts in `package.json` script
```json
  "api:init": "cross-env apits init",
  "api:gen": "cross-env apits gen"
```

## Commit Type
> build, ci, docs, feat, fix, perf, refactor, revert, style, test

## TO-DO
[ ] 自定义 request 文件

[ ] 自定义请求函数的模板

[ ] 省略请求参数，如：loginUserInfoDTO

[ ] 接口函数和类型分为不同文件

[ ] 支持 `@walle-ignore`
