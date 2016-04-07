# node-learning-1
Learning note of nodejs block, unblock, get , post code and express 3.0 routing code

阻塞：采用将内容传递给服务器的方式（服务器等待router和handler处理， 返回的对象，在形成response）

非阻塞：采用将服务器“传递”给内容的方式。（response ---> router ---> handler）要形成何种response由handler指定，形成好了直接发送。

Post请求：
	服务器端处理所有所有来自请求的数据。
	data事件：收集所有post数据
	end事件：收集完毕，触发end ---> 回调函数调用route() ---> requestHandler()