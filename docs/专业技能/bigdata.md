# 大数据入门

## 第一章：大数据基础

### 1.1 什么是大数据

大数据指**无法用传统数据库处理**的海量、多样、快速的数据。

**大数据的5V特征：**
- Volume（体量大）
- Velocity（速度快）
- Variety（多样化）
- Value（价值密度低）
- Veracity（真实性）

### 1.2 大数据技术生态

```
数据采集    →  数据存储   →  数据处理   →  数据分析
Flume/Kafka  HDFS/HBase  MapReduce   Spark/Flink
                            ↓
                      Hive/Presto
```

### 1.3 Hadoop入门

Hadoop是大数据的基础框架：

- **HDFS**：分布式文件系统
- **MapReduce**：分布式计算
- **YARN**：资源调度

#### 安装Hadoop

```bash
# 下载
wget https://dlcdn.apache.org/hadoop/common/hadoop-3.3.6/hadoop-3.3.6.tar.gz
tar -xzf hadoop-3.3.6.tar.gz

# 配置环境变量
export HADOOP_HOME=/path/to/hadoop
export PATH=$PATH:$HADOOP_HOME/bin
```

#### HDFS命令

```bash
# 查看文件
hdfs dfs -ls /

# 上传文件
hdfs dfs -put localfile /hdfs/path

# 下载文件
hdfs dfs -get /hdfs/path localfile

# 创建目录
hdfs dfs -mkdir -p /user/data

# 查看文件内容
hdfs dfs -cat /path/file

# 删除
hdfs dfs -rm -r /path
```

### 1.4 Spark入门

Spark是更快的大数据计算引擎：

```python
# PySpark示例
from pyspark.sql import SparkSession

spark = SparkSession.builder \
    .appName("WordCount") \
    .getOrCreate()

# 读取文件
text = spark.read.text("hdfs://path/to/file")

# 词频统计
counts = text.rdd.flatMap(lambda line: line.value.split()) \
    .map(lambda word: (word, 1)) \
    .reduceByKey(lambda a, b: a + b)

# 输出结果
counts.saveAsTextFile("hdfs://output/path")

spark.stop()
```

### 1.5 Kafka入门

Kafka是分布式消息队列：

```bash
# 启动Zookeeper
bin/zookeeper-server-start.sh config/zookeeper.properties

# 启动Kafka
bin/kafka-server-start.sh config/server.properties

# 创建Topic
bin/kafka-topics.sh --create --topic mytopic --bootstrap-server localhost:9092

# 查看Topic
bin/kafka-topics.sh --list --bootstrap-server localhost:9092

# 生产消息
bin/kafka-console-producer.sh --topic mytopic --bootstrap-server localhost:9092

# 消费消息
bin/kafka-console-consumer.sh --topic mytopic --from-beginning --bootstrap-server localhost:9092
```

### 1.6 大数据常用命令

```bash
# Hadoop
hdfs dfs -ls /
hdfs dfs -put file /
hdfs dfs -get /file .

# Hive
hive -e "SELECT * FROM table LIMIT 10"

# Spark
spark-submit --class WordCount app.jar

# Kafka
kafka-topics.sh --describe --topic mytopic
```

### 1.7 练习

1. 安装单机版Hadoop
2. 使用HDFS命令操作文件
3. 编写简单的Spark程序

---

**下一步**： [第二章：大数据进阶](./advanced.html)
