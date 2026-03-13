# 存储技术

## 第一章：存储基础

### 1.1 存储层次结构

计算机存储分为几个层次：

```
寄存器 → L1/L2/L3缓存 → 内存(DRAM) → SSD → 机械硬盘 → 网络存储
  ↑                     ↑          ↑         ↑
  高性能                内存         固态       机械
  低延迟                断电丢失      快速       便宜
```

### 1.2 本地存储

#### 机械硬盘（HDD）

- 特点：便宜、容量大、速度慢
- 适用：冷数据、备份
- 接口：SATA、IDE

#### 固态硬盘（SSD）

- 特点：速度快、价格高、寿命
- 接口：SATA、M.2、NVMe
- 分类：SATA SSD、NVMe SSD

```bash
# Linux查看硬盘
lsblk
fdisk -l

# 查看磁盘IO
iostat -x 1

# 测速
dd if=/dev/zero of=test bs=1M count=1000 oflag=direct
```

### 1.3 文件系统

#### 常见文件系统

| 文件系统 | 特点 | 适用场景 |
|----------|------|----------|
| ext4 | Linux默认，稳定 | 通用 |
| XFS | 高性能，大文件 | 服务器 |
| NTFS | Windows兼容 | 双系统 |
| Btrfs | 快照，校验 | 新一代 |
| ZFS | 企业级，功能全 | 存储服务器 |

```bash
# 格式化
mkfs.ext4 /dev/sdb1

# 挂载
mount /dev/sdb1 /mnt/data

# 自动挂载（/etc/fstab）
/dev/sdb1 /mnt/data ext4 defaults 0 2
```

### 1.4 网络存储

#### NFS（Network File System）

```bash
# 服务端
sudo apt install nfs-kernel-server

# 配置 /etc/exports
/mnt/shared *(rw,sync,no_subtree_check)

# 客户端挂载
mount -t nfs server:/mnt/shared /mnt/nfs
```

#### SMB/CIFS

```bash
# 安装
sudo apt install cifs-utils

# 挂载Windows共享
mount -t cifs //server/share /mnt/share -o user=username
```

### 1.5 分布式存储

#### MinIO（对象存储）

```bash
# 使用Docker运行
docker run -p 9000:9000 -p 9001:9001 \
  -e MINIO_ROOT_USER=minioadmin \
  -e MINIO_ROOT_PASSWORD=minioadmin \
  minio/minio server /data --console-address ":9001"
```

#### Ceph

```bash
# 安装
sudo apt install ceph-deploy

# 初始化
ceph-deploy new node1
ceph-deploy mon create-initial
```

### 1.6 RAID

| RAID级别 | 特点 | 磁盘利用率 |
|----------|------|------------|
| RAID 0 | 条带，性能 | 100% |
| RAID 1 | 镜像，安全 | 50% |
| RAID 5 | 奇偶校验 | (n-1)/n |
| RAID 10 | 镜像+条带 | 50% |

```bash
# 创建RAID 5
mdadm --create /dev/md0 --level=5 --raid-devices=3 /dev/sdb /dev/sdc /dev/sdd
```

### 1.7 存储性能优化

```bash
# 查看IOPS
iostat -x 1

# 查看内存使用
free -h

# 清理缓存
sync; echo 3 > /proc/sys/vm/drop_caches

# SSD优化
echo "none" > /sys/block/sda/queue/scheduler
echo "noop" > /sys/block/sda/queue/scheduler
```

### 1.8 练习

1. 在虚拟机中添加新硬盘并格式化
2. 配置NFS共享
3. 搭建MinIO对象存储

---

**下一步**： [第二章：存储进阶](./advanced.html)
