## 动态规划

### 53.最大子序和

#### 题目
[原题](https://leetcode-cn.com/problems/maximum-subarray)

给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:
```js
输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
```

#### 题解
状态转移方程：
$$
F_{i} =  \left\{ \begin{array}{ll}
max(F_{i-1} + n_{i}, n_{i}) & i > 0 \\
n_{i} & i = 0
\end{array} \right
$$

初始值$F_{0} = nums_{0}$

### 70.爬楼梯

#### 题目
[原题](https://leetcode-cn.com/problems/climbing-stairs)
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：
```
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
```

示例 2：
```
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
```
#### 题解
状态转移方程：
$$
F_{i} = \left\{ \begin{array}{ll}
1 & i = 1 \\
2 & i = 2 \\
max(F_{i-1} + n_{i}, n_{i}) & i > 2 \\
\end{array} \right
$$

### 5.最长回文子串
> from https://leetcode-cn.com/problems/longest-palindromic-substring

#### 题目
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：
```
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
```

示例 2：
```
输入: "cbbd"
输出: "bb"
```

#### 题解
$$
F(i, j) = \left\{ \begin{array}{ll}
0 & S_{i, j} is not palindromic
1 & i == j
2 & i = j - 1 And S_{i} = S_{i + 1}
F(i + 1, j - 1) + 2 & i > j + 1 And F(i + 1, j - 1) \neq 0
\end{array} \right
$$