# 前端算法学习笔记

## 20.有效的括号

-   如果字符串 s 长度为奇数, 则括号一定不匹配直接返回 false
-   创建一个栈结构 stack
-   遍历字符串 s, 每次遍历得到的字符为 c
    -   如果 c 是左括号则 stack 执行入栈
    -   如果 c 是右括号
        -   匹配则 stack 执行出栈
        -   不匹配返回 false
-   遍历结束后返回值取决于 stack 的长度
    -   length 为 0 为返回 true
    -   否则返回 false;


## 933.最近的请求次数

while遍历数组判断第一个元素是否大于某个值

```js
const arr = [1, 2, 3, 4, 5, 6];
while (arr[0] < 4) {
    arr.shift();
}
console.log(arr);
// [4, 5, 6]
```