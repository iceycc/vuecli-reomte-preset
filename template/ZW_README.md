## start
<!-- npm i --registry http://10.3.136.13:4873/ -->
npm i
npm run serve

## production
npm run build:prod

## 注意事项

项目使用eslint+prettire格式化代码(具体规则查看项目根目录下.prettierrc.js文件)    

vscode 编辑器安装 ESLint、Prettier 插件(如果有beautify插件，需在工作区禁用)，格式化选择prettier插件

webstorm 自带 ESLint、Prettier 插件

router和store按模块写，只需在对应module文件夹下建对应模块的js文件，无需手动引入，index.js会自动引入

定义路由时，务必填写路由name（命名务必是英文、唯一且有意义），页面之间跳转尽量使用name进行跳转，防止path易出错、过长、多页面引用修改后找不到等问题

styles使用scss已默认定义了一些全局变量和minix（已默认全部引入），可自行新添加，具体查看项目根目录下styles文件夹

## 命名
> 所有目录，文件名称以 中划线形式 命名（禁止中文）

|  目录，文件   | 建议命名  |
|  :----  | :----  |
| 首页  | index，index.vue，index.css，index.png |
| 产品列表  | product-list，product-list.vue，product-list.css，product-list.png |

> css 尽量以BEM规范命名

## git

> 代码提交时会默认进行lint，不规范的代码需及时改掉，否则会提交不成功

#### 分支规范
1. 当前项目主要分支有四种：
    - master（稳定的主分支，正式环境分支，无合并权限）
    - release（预发布分支，再测试分支上测试通过的功能将会合并到该分支进行测试，无合并权限）
    - develop  (测试分支，个人或小组开发分支完成的功能将在该分支进行测试验证)。
    - feature/* (个人或功能开发分支，feature分支上的内容最终会合并到develop分支进行测试，请保证提到该分支代码的纯粹性，有合并权限)。
    - hotfix/*  (紧急bug分支，处理紧急则从master拉去该分支，解决后提到release分支验证通过后直接和master)
2. 个人开发分支主要有两种feature和hotfix两种分支。
    - ****所有分支的起点都应该是master****
    - feature分支命名风格建议为 feature+个人姓名简称+功能点+时间点（feature_gsj_order_20191014）该分支主要用于功能开发，版本迭代使用。 分支生命周期为：feature_gsj_order_20191014====>develop====>release====>master
    - hotfix分支命名风格建议为 hotfix+个人姓名简称+功能点+时间点（hotfix_gsj_order_20191014）该分支用于解决紧急bug，分支生命周期为：hotfix_gsj_order_20191014 =====> release=====> master
    - 个人开发分支最终和入release 和 master 必须经过自测和代码审核。 
    
#### 上线流程
1. 合并代码以提pr的形式填写请求
2. 代码review
3. 项目部署上线


灵活运用CSS开发技巧(https://juejin.im/post/5d4d0ec651882549594e7293)
灵活运用JS开发技巧(https://juejin.im/post/5cc7afdde51d456e671c7e48)
