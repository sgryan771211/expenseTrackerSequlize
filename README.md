#家庭記帳本

---

##Features - 產品功能
1. 使用者可以透過 Facebook 帳號登入
2. 使用者可以瀏覽所有支出
3. 使用者可以新增一筆支出
4. 使用者可以修改任何一筆支出
5. 使用者可以刪除任何一筆支出
6. 使用者可以依照月份或類別進行篩選
---
##Installing - 專案安裝流程
1. 打開你的 terminal，Clone 此專案至本機電腦
 ```
輸入 git clone https://github.com/sgryan771211/expenseTrackerSequlize.git
```
2. 進入存放此專案的資料夾
 ```
輸入cd expenseTrackerSequlize
```
3. 安裝 npm 套件
 ```
輸入 npm install
```
4. 建立records and users Table
 ```
輸入 npx sequelize db:migrate
```
5. 建立種子資料
 ```
輸入 npx sequelize-cli db:seed:all
```
6. 執行 app.js 檔案
 ```
輸入 npm run start
```
7. 開啟瀏覽器輸入 http://localhost:3000 後開始使用
8. 測試用帳號密碼
```
帳號：testuser@gmail.com
密碼：123456
```    
