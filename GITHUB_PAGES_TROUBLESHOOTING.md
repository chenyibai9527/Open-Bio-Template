# GitHub Pages 部署故障排除指南

## 常见错误及解决方案

### 错误：Permission denied to github-actions[bot]

**症状：**
```
remote: Permission to <repo> denied to github-actions[bot].
fatal: unable to access 'https://github.com/<repo>.git/': The requested URL returned error: 403
```

**解决方案：**

1. **检查仓库设置**
   - 进入 Settings → Actions → General
   - 找到 "Workflow permissions"
   - 选择 "Read and write permissions"
   - 勾选 "Allow GitHub Actions to create and approve pull requests"

2. **检查 Pages 设置**
   - 进入 Settings → Pages
   - Build and deployment → Source 选择 "GitHub Actions"

3. **使用官方 GitHub Actions**
   - 我们已经更新了工作流使用 GitHub 官方 actions
   - 这避免了第三方 action 的权限问题

### 错误：找不到构建目录

**症状：**
```
cp: no such file or directory: ./dist
```

**解决方案：**
1. 确保 `npm run build` 命令能成功执行
2. 检查 `vite.config.ts` 中的输出目录配置
3. 验证 `package.json` 中的构建脚本

### 错误：基础路径不正确

**症状：**
- 页面加载空白
- 资源文件 404 错误

**解决方案：**
1. 检查 `vite.config.ts` 中的 `base` 路径配置
2. 确保与仓库名称匹配
3. 工作流中已添加自动检测：`VITE_BASE_PATH: '/${{ github.event.repository.name }}'`

## 验证步骤

### 1. 检查工作流运行状态
- 进入 Actions 标签页
- 查看最新的部署工作流
- 确保所有步骤都成功（绿色勾号）

### 2. 检查 Pages 部署状态
- 进入 Settings → Pages
- 查看部署历史记录
- 确认有成功的部署记录

### 3. 验证网站访问
- 使用提供的 GitHub Pages URL 访问网站
- 检查浏览器控制台是否有错误
- 验证所有资源是否正确加载

### 4. 检查分支和文件
- 确认 `gh-pages` 分支已创建（如果使用 peaceiris action）
- 检查分支中是否包含构建后的文件

## 手动测试构建

在本地测试构建过程：
```bash
# 安装依赖
npm install

# 运行构建
npm run build

# 检查构建输出
ls -la dist/

# 本地预览构建结果
npm run preview
```

## 环境变量配置

如果需要自定义基础路径，可以在工作流文件中添加：
```yaml
env:
  VITE_BASE_PATH: '/your-custom-path/'
```

## 获取帮助

如果问题仍然存在：
1. 检查 [GitHub Pages 官方文档](https://docs.github.com/en/pages)
2. 查看 [GitHub Actions 文档](https://docs.github.com/en/actions)
3. 在项目的 Issues 中寻求帮助

## 替代方案

如果 GitHub Pages 持续遇到问题，可以考虑：
1. **Vercel** - 一键部署，支持自定义域名
2. **Netlify** - 拖拽部署，功能丰富
3. **Cloudflare Pages** - 全球 CDN，性能优异

这些平台通常有更简单的部署流程。