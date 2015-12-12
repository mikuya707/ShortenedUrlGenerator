**设计思路**
将每个原链接和相对应的短链接同时存储在链接array里的一个Object, 在griddle的表格component里设定这个array为rawdata. 
在自定义的Griddle Component - ShortenLinkComponent里设定表格里短链接数据的超链接为rawdata里相对应的原链接.
没有通过后端去跳转到原链接到原因是可以省去不必要的get request. 

缩短长链接的算法将0-9a-zA-Z这58个alphanumeral数据组合成一个字符串,利用数学的随机方法从任意挑选5个字符并存储到一个新的array里.
每当用户输入新的原链接, 前端的功能先调查原链接相对应的短链接是否已经存在,若存在的情况直接输出相对应的短链接.若不存在再生出新的短链接.

**API 文档**
Get /
   获取主页
Get /shortURL
   跳转网页的逻辑在客户端完成,这里结束获取指令.

**运行指示:**

1. git clone <this repo link>
2. cd <project directory>
3. npm install
4. gulp
5. npm start
6. open browser, go to http://localhost:5000

