# 尤志强 (Zhi-Qiang You) 个人主页

这是基于Jekyll构建的个人学术主页，使用了现代化的响应式设计。

## 🌐 在线访问

- 主站: [https://yuanquan.online](https://yuanquan.online)
- GitHub Pages: [https://michaelice.github.io](https://michaelice.github.io)

## 📝 关于

尤志强，计算机科学专家，目前担任AI大模型应用创新公司的算法总监，负责智能体架构和强化学习工作。研究领域包括：
- 大语言模型（LLM）智能体
- 强化学习
- 隐私计算与联邦学习
- 复杂网络与网络科学
- 机器学习与深度学习

## 🛠️ 技术栈

- **框架**: Jekyll 静态网站生成器
- **主题**: 基于 AcadHomepage 学术主页模板
- **样式**: SCSS (Sass)
- **托管**: GitHub Pages
- **域名**: yuanquan.online

## 📂 项目结构

```
michaelice.github.io/
├── _config.yml           # Jekyll 配置文件
├── _layouts/             # 页面布局模板
├── _includes/            # 可复用组件
├── _sass/                # SCSS 样式文件
├── _pages/               # 页面内容
│   └── about.md         # 主页内容
├── assets/               # 静态资源
├── images/               # 图片文件
├── pdf/                  # PDF 文件（论文、专利等）
├── Gemfile              # Ruby 依赖
└── README.md            # 本文件
```

## 🚀 本地开发

### 前置要求

- Ruby >= 2.7
- RubyGems
- GCC 和 Make

### 安装依赖

```bash
# 安装 Bundler
gem install bundler

# 安装项目依赖
bundle install
```

### 本地运行

```bash
# 启动开发服务器
bundle exec jekyll serve

# 或使用提供的脚本
bash run_server.sh
```

然后在浏览器中访问 `http://localhost:4000`

### 实时预览

Jekyll 支持实时重载，修改文件后浏览器会自动刷新。

## ✏️ 内容更新

### 修改个人信息

编辑 `_config.yml` 文件中的以下字段：
- `title`: 网站标题
- `description`: 网站描述
- `author`: 作者信息
  - `name`: 姓名
  - `avatar`: 头像路径
  - `bio`: 个人简介
  - `email`: 邮箱地址
  - 其他社交链接

### 更新主页内容

编辑 `_pages/about.md` 文件，使用 Markdown 格式编写内容。

### 添加 PDF 文件

将 PDF 文件放入 `pdf/` 目录，然后在 Markdown 中使用相对路径引用：

```markdown
[[PDF]](pdf/your-paper.pdf)
```

### 更换头像

替换 `images/profile.png` 文件。

## 🎨 样式定制

样式文件位于 `_sass/` 目录，使用 SCSS 语法。修改后 Jekyll 会自动编译。

主要样式文件：
- `_sass/_variables.scss` - 变量定义
- `_sass/_base.scss` - 基础样式
- `_sass/_layout.scss` - 布局样式

## 📱 响应式设计

网站已针对不同屏幕尺寸进行优化：
- 桌面端（>= 1024px）
- 平板端（768px - 1023px）
- 移动端（< 768px）

## 🔍 SEO 优化

网站包含以下 SEO 优化：
- 元标签（keywords, description）
- Sitemap 自动生成
- Google Analytics 支持
- 搜索引擎验证支持

在 `_config.yml` 中配置相关 ID。

## 📊 Google Scholar 统计

如需启用 Google Scholar 引用统计：
1. 在 `_config.yml` 中设置 `google_scholar_stats_use_cdn: true`
2. 配置 GitHub Action 自动更新统计数据

## 🤝 贡献

欢迎提出问题和改进建议！

## 📄 许可证

本项目基于 AcadHomepage 模板，遵循相应的开源许可证。

## 🙏 致谢

- 模板基于 [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io)
- 灵感来源于 [minimal-mistakes](https://github.com/mmistakes/minimal-mistakes)
- 图标使用 [Font Awesome](https://fontawesome.com/)

## 📧 联系方式

- Email: zhiqiang.you@yuanquan.tech
- CSDN: [yuanquan's square](https://armstrong.blog.csdn.net/)
- GitHub: [michaelice](https://github.com/michaelice)

---

最后更新：2025年1月
