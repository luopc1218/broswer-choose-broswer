// 添加自定义对于webpack的配置
import path from "path";
module.exports = {
  // webpack配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      "@": path.resolve(__dirname, "src"),
    },
  },
};
// path.resolve() 该方法将一些的 路径/路径段 合并并解析为绝对路径。
