# 🚀 快速启动指南

## 立即开始

### 1️⃣ 安装依赖

```bash
# 进入项目目录
cd /Users/armstrong/github/michaelice.github.io

# 安装Bundler（如果还没有）
gem install bundler

# 安装项目依赖
bundle install
```

### 2️⃣ 本地运行

```bash
# 启动开发服务器
bundle exec jekyll serve

# 或使用快捷脚本
./run_server.sh
```

### 3️⃣ 预览网站

在浏览器中打开：**http://localhost:4000**

网站会自动重载，修改文件后刷新浏览器即可看到效果。

## ✏️ 常用编辑任务

### 更新个人简介

编辑文件：`_pages/about.md`

```markdown
# 🔥 近期动态
- *2025.01*: 添加你的最新动态

# 📝 发明专利
添加新的专利信息...
```

### 修改个人信息

编辑文件：`_config.yml`

```yaml
author:
  name: "你的名字"
  email: "your.email@example.com"
  bio: "你的简介"
```


## 📤 部署到GitHub Pages

### 方法1：命令行

```bash
# 添加所有更改
git add .

# 提交更改
git commit -m "更新网站内容"

# 推送到GitHub
git push origin main
```

### 方法2：GitHub Desktop

1. 打开GitHub Desktop
2. 查看更改
3. 填写提交信息
4. 点击"Commit to main"
5. 点击"Push origin"

等待1-2分钟后，访问 https://yuanquan.online 查看更新。

## 🎨 自定义样式

### 修改颜色

编辑 `_sass/_variables.scss`：

```scss
$primary-color: #527bbd;  // 主色调
$text-color: #222;        // 文字颜色
$background-color: #fff;  // 背景色
```

### 修改字体

编辑 `_sass/_base.scss`：

```scss
body {
  font-family: "Your Font", sans-serif;
}
```

## 🔍 常见问题速查

| 问题 | 解决方案 |
|------|----------|
| 依赖安装失败 | 运行 `bundle update` |
| 服务器无法启动 | 检查4000端口是否被占用 |
| 样式不生效 | 清除缓存：`bundle exec jekyll clean` |
| 修改不显示 | 确保文件已保存，刷新浏览器 |

## 📁 重要文件位置

```
michaelice.github.io/
├── _config.yml          👈 网站配置
├── _pages/about.md      👈 主页内容
└── _sass/               👈 样式文件
    ├── _variables.scss  👈 颜色、字体变量
    └── _base.scss       👈 基础样式
```

## 💡 高效工作流

1. **本地预览**：`./run_server.sh`
2. **编辑内容**：修改 `_pages/about.md`
3. **查看效果**：浏览器自动刷新
4. **满意后提交**：`git add . && git commit -m "更新" && git push`

## 🆘 获取帮助

- 📖 [完整文档](README.md)
- 📋 [迁移指南](docs/MIGRATION.md)
- 🌐 [Jekyll官方文档](https://jekyllrb.com/docs/)
- 📧 Email: zhiqiang.you@yuanquan.tech

---

**祝你使用愉快！** 🎉






