

# TypeScript
TypeScript是一个开源的，基于JavaScript的语法超集，基于JavaScript扩展
2012年微软推出的开源项目
解决了什么问题，扩展了静态类型，完善了面向对象


TypeScript过程
1. 编写ts代码
2. 检查TS代码类型

# 为什么我们需要TypeScript
未知属性能否调用
函数参数传递约定
未知导致对象使用增加时间成本，项目
TypeScript存在就是可以动态制定更明确的对对象的使用规范
类型定义和严格的约束是一个复杂项目或大型项目的基础条件

# 项目解剖
```bash
package.json         # package 清单
tsconfig.json        # TypeScript 编译器设置
src/index.ts         # 项目主体
```

## package.json
```json
{
  "name": "TypeScript",
  "license": "NOLICENSE",
  "devDependencies": {
    "typescript": "^4.3.2" 
  },
  "scripts": {
    "dev": "tsc --watch --preserveWatchOutput" 
  }
}
```

## tsconfig.json
```json
{
  "compilerOptions": {
    "outDir": "dist", // 放置TS文件的地方
    "target": "ES3" // 支持的JS版本
  },
  "include": ["src"] // 包含要编译的文件，src下面的ts文件都会编译
}
```