# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


react 
tailwindcss
react router
react-icons
auth 0
zustand
ant design mobile


1. zustand
2. auth0 × 登录方案是UID（Miniapp） + Auth0 两套机制（WebApp）
3. prisma orm（SSR）

1. record enter、exist time and duration
2. 


// 定义 search_history 表
model SearchHistory {
id               Int      @id @default(autoincrement())
user_id          String
search_content   String
search_timestamp DateTime @default(now())
}

// 定义 favorite 表
model Favorite {
id                  Int      @id @default(autoincrement())
song_id             String
user_id             String
favorite_timestamp DateTime @default(now())
// 声明 song_id 字段作为外键，关联到 song 表的 id 字段
song                Song?    @relation(fields: [song_id], references: [id])
}
