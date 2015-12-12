**设计思路**

-缩短链接和跳转的流程
    - 将每个原链接和相对应的短链接同时存储在链接array里的一个Object. 
    - 当用户点击"SHORTEN URL"按钮时, 处理按键功能会fire一个ajax call,将目前存储所有原链接和短链接的链接array放入一个object, 作为JSON的格式发送到后端.
    - 从客户端接收到的链接被存储在后端, 当用户访问链接时,后端根据短链接字符和链接OBJECT里的短链接进行对比,找到相符合的的长链接后跳转.

- 缩短链接的逻辑在客户端完成. 
    - 缩短长链接的算法将0-9a-zA-Z这58个alphanumeral数据组合成一个字符串,利用数学的随机方法从任意挑选5个字符并存储到一个新的array里.
    - 每当用户输入新的原链接, 前端的功能先调查原链接相对应的短链接是否已经存在,若存在的情况直接输出相对应的短链接.若不存在再生出新的短链接.

**API 文档**

"Get /"
   获取主页.
   
"POST /"
   生成的短链接发送到后端.
   
"Get /:shortCode"
   找到短字符相对应的原链接,跳转.

**运行指示:**

1. git clone <this repo link>
2. cd <project directory>
3. npm install
4. gulp
5. npm start
6. open browser, go to http://localhost:5000

