# 数据库基础

## 第一章：数据库入门

### 1.1 什么是数据库

数据库是**结构化数据**的集合，通过数据库管理系统（DBMS）进行管理。

**数据库的核心概念：**
- 表（Table）：数据的二维结构
- 行（Row）：一条记录
- 列（Column）：字段
- 主键（Primary Key）：唯一标识
- 外键（Foreign Key）：表间关联

### 1.2 关系型数据库 vs 非关系型数据库

#### 关系型数据库（RDBMS）

| 特点 | 说明 |
|------|------|
| 结构化 | 固定的数据模型 |
| SQL | 使用SQL查询语言 |
| 事务 | ACID特性 |
| 示例 | MySQL、PostgreSQL、Oracle |

#### 非关系型数据库（NoSQL）

| 特点 | 说明 |
|------|------|
| 灵活 | 无固定结构 |
| 扩展性 | 水平扩展 |
| 高性能 | 高并发 |
| 示例 | MongoDB、Redis、Cassandra |

### 1.3 MySQL快速入门

#### 安装

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install mysql-server

# macOS
brew install mysql
```

#### 启动服务

```bash
# 启动
sudo service mysql start

# 登录
mysql -u root -p
```

#### 基本操作

```sql
-- 创建数据库
CREATE DATABASE myapp;

-- 使用数据库
USE myapp;

-- 创建表
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 插入数据
INSERT INTO users (username, email) VALUES ('john', 'john@example.com');

-- 查询数据
SELECT * FROM users;
SELECT username, email FROM users WHERE id = 1;

-- 更新数据
UPDATE users SET email = 'new@example.com' WHERE id = 1;

-- 删除数据
DELETE FROM users WHERE id = 1;
```

### 1.4 SQL查询进阶

#### 条件查询

```sql
-- WHERE子句
SELECT * FROM users WHERE age >= 18;

-- AND/OR
SELECT * FROM users WHERE age >= 18 AND city = 'Beijing';

-- IN
SELECT * FROM users WHERE city IN ('Beijing', 'Shanghai');

-- LIKE模糊查询
SELECT * FROM users WHERE name LIKE '%zhang%';
```

#### 排序和分页

```sql
-- 排序
SELECT * FROM users ORDER BY created_at DESC;

-- 分页
SELECT * FROM users LIMIT 10 OFFSET 20;

-- 限制结果数
SELECT * FROM users LIMIT 5;
```

#### 聚合函数

```sql
-- 计数
SELECT COUNT(*) FROM users;

-- 求和
SELECT SUM(amount) FROM orders;

-- 平均
SELECT AVG(price) FROM products;

-- 分组
SELECT city, COUNT(*) FROM users GROUP BY city;
```

#### 表连接

```sql
-- 内连接
SELECT orders.id, users.username 
FROM orders 
INNER JOIN users ON orders.user_id = users.id;

-- 左连接
SELECT users.username, orders.id 
FROM users 
LEFT JOIN orders ON users.id = orders.user_id;
```

### 1.5 索引

```sql
-- 创建索引
CREATE INDEX idx_username ON users(username);

-- 复合索引
CREATE INDEX idx_name_age ON users(name, age);

-- 查看查询计划
EXPLAIN SELECT * FROM users WHERE username = 'john';
```

### 1.6 事务

```sql
-- 开始事务
START TRANSACTION;

-- 执行操作
UPDATE accounts SET balance = balance - 100 WHERE user_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE user_id = 2;

-- 提交
COMMIT;

-- 回滚
ROLLBACK;
```

### 1.7 练习

1. 创建一个学生管理系统数据库
2. 实现增删改查操作
3. 设计合理的索引

---

**下一步**： [第二章：数据库进阶](./advanced.html)
