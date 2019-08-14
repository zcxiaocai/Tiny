SET NAMES UTF8;
DROP DATABASE IF EXISTS wj;
CREATE DATABASE wj CHARSET=UTF8;
USE wj;

#用户信息
CREATE TABLE wj_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名
  gender INT                  #性别
);
INSERT INTO wj_user VALUES(null,'root','password','1.png','管理员','1');

#发表
CREATE TABLE publish(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    uid INT,                #发表用户id
    text TEXT,              #发表内容
    addtime DATETIME,       #发表时间
    addimg VARCHAR(128),    #图片
    psc INT,                #收藏
    pgood INT,              #点赞
    ptype INT               #发表类型
);
INSERT INTO publish VALUES(null,1,'发表测试','2019-6-17 21:40:45','1.png',1,1,1);

#评论
CREATE TABLE comment(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    uid INT,            #评论者id
    text TEXT,          #评论内容
    ctime DATETIME,     #评论时间
    pid INT             #评论属于哪个贴
);
INSERT INTO comment VALUES(null,1,'评论测试','2019-6-17 21:50:51',1);
