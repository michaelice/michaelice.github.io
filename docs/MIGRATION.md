# Jekyll 架构迁移文档

## 迁移概述

本项目已从纯HTML静态网站迁移到Jekyll架构，获得了更好的可维护性和更丰富的功能。

## 迁移完成的内容

### ✅ 已完成

1. **Jekyll 基础结构**
   - ✓ 创建 `_config.yml` 配置文件
   - ✓ 创建 `Gemfile` 依赖管理
   - ✓ 复制所有布局文件到 `_layouts/`
   - ✓ 复制所有组件到 `_includes/`
   - ✓ 复制所有样式文件到 `_sass/`

2. **内容迁移**
   - ✓ 将原HTML内容转换为Markdown格式
   - ✓ 创建 `_pages/about.md` 作为主页
   - ✓ 保留所有PDF文件在 `pdf/` 目录
   - ✓ 复制并优化图片资源

3. **配置文件**
   - ✓ 更新个人信息到 `_config.yml`
   - ✓ 保留 CNAME 文件（yuanquan.online）
   - ✓ 创建 `.gitignore` 文件
   - ✓ 创建 `README.md` 文档

4. **备份文件**
   - ✓ `index.html.backup` - 原始HTML备份
   - ✓ `index.html.old` - 重命名的旧文件

## 文件结构对比

### 迁移前
```
michaelice.github.io/
├── index.html           # 单文件网站
├── jemdoc.css          # 简单样式
├── picture/            # 图片
└── pdf/                # PDF文件
```

### 迁移后
```
michaelice.github.io/
├── _config.yml         # Jekyll配置
├── _layouts/           # 页面布局
├── _includes/          # 可复用组件
├── _sass/              # 样式文件
├── _pages/             # 内容页面
│   └── about.md       # 主页内容
├── assets/             # 静态资源
├── images/             # 图片
├── pdf/                # PDF文件
├── Gemfile            # Ruby依赖
└── README.md          # 项目文档
```

## 主要改进

### 1. 内容与样式分离
- 内容使用Markdown编写（`_pages/about.md`）
- 样式使用SCSS管理（`_sass/`）
- 布局模板独立（`_layouts/`）

### 2. 响应式设计
- 自动适配桌面、平板、移动设备
- 现代化的UI设计
- 更好的可读性

### 3. SEO优化
- 自动生成sitemap
- 优化的meta标签
- 支持Google Analytics

### 4. 易于维护
- 只需编辑Markdown文件更新内容
- 样式统一管理
- Git友好的文件结构

## 后续步骤

### 本地测试

1. 安装依赖：
```bash
bundle install
```

2. 启动本地服务器：
```bash
bundle exec jekyll serve
# 或
bash run_server.sh
```

3. 访问 `http://localhost:4000` 预览网站

### 部署到GitHub Pages

1. 提交所有更改：
```bash
git add .
git commit -m "迁移到Jekyll架构"
```

2. 推送到GitHub：
```bash
git push origin main
```

3. 等待GitHub Pages自动构建（约1-2分钟）

4. 访问 https://yuanquan.online 查看效果

### 可选优化

1. **添加Google Scholar统计**
   - 在 `_config.yml` 中配置 Google Scholar ID
   - 启用自动更新脚本

2. **添加评论系统**
   - 可集成Disqus或Utterances

3. **添加更多页面**
   - 在 `_pages/` 目录创建新的Markdown文件
   - 使用YAML front matter配置页面

4. **自定义样式**
   - 编辑 `_sass/_variables.scss` 修改颜色和字体
   - 编辑 `_sass/_base.scss` 修改基础样式

## 注意事项

1. **保留的文件**
   - `CNAME` - 自定义域名配置
   - `pdf/` - 所有PDF文件
   - `picture/` - 原始图片（已复制到images/）
   - `index.html.backup` - 原始HTML备份

2. **已删除的文件**
   - `jemdoc.css` - 已被SCSS替代
   - `id`, `node` - 临时文件

3. **文件权限**
   - `run_server.sh` 已添加执行权限

## 常见问题

### Q: 网站无法访问？
A: 检查GitHub Pages设置，确保source设置为main分支。

### Q: 样式不正常？
A: 确保 `_sass/` 目录完整，运行 `bundle exec jekyll build` 重新构建。

### Q: 如何添加新内容？
A: 编辑 `_pages/about.md`，使用Markdown语法。

### Q: 如何修改个人信息？
A: 编辑 `_config.yml` 中的 `author` 部分。

## 技术支持

如有问题，请参考：
- [Jekyll官方文档](https://jekyllrb.com/docs/)
- [AcadHomepage模板文档](https://github.com/RayeRen/acad-homepage.github.io)
- 或联系：zhiqiang.you@yuanquan.tech

---

迁移日期：2025年1月
迁移者：AI Assistant






