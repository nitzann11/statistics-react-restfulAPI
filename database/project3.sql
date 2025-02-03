-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: project3
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add countries model',7,'add_countriesmodel'),(26,'Can change countries model',7,'change_countriesmodel'),(27,'Can delete countries model',7,'delete_countriesmodel'),(28,'Can view countries model',7,'view_countriesmodel'),(29,'Can add user model',8,'add_usermodel'),(30,'Can change user model',8,'change_usermodel'),(31,'Can delete user model',8,'delete_usermodel'),(32,'Can view user model',8,'view_usermodel'),(33,'Can add vacation model',9,'add_vacationmodel'),(34,'Can change vacation model',9,'change_vacationmodel'),(35,'Can delete vacation model',9,'delete_vacationmodel'),(36,'Can view vacation model',9,'view_vacationmodel'),(37,'Can add likes model',10,'add_likesmodel'),(38,'Can change likes model',10,'change_likesmodel'),(39,'Can delete likes model',10,'delete_likesmodel'),(40,'Can view likes model',10,'view_likesmodel');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `countries` (
  `countryId` int NOT NULL AUTO_INCREMENT,
  `countryName` varchar(56) NOT NULL,
  PRIMARY KEY (`countryId`),
  UNIQUE KEY `countryName` (`countryName`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
INSERT INTO `countries` VALUES (19,'Argentina'),(12,'Australia'),(4,'Brazil'),(2,'Canada'),(17,'China'),(15,'Egypt'),(6,'France'),(7,'Germany'),(20,'Iceland'),(10,'India'),(8,'Italy'),(11,'Japan'),(3,'Mexico'),(13,'New Zealand'),(16,'Russia'),(14,'South Africa'),(9,'Spain'),(18,'Thailand'),(5,'United Kingdom'),(1,'United States');
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(7,'api','countriesmodel'),(10,'api','likesmodel'),(8,'api','usermodel'),(9,'api','vacationmodel'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2025-01-21 17:46:55.081576'),(2,'auth','0001_initial','2025-01-21 17:46:55.806789'),(3,'admin','0001_initial','2025-01-21 17:46:56.020740'),(4,'admin','0002_logentry_remove_auto_add','2025-01-21 17:46:56.032738'),(5,'admin','0003_logentry_add_action_flag_choices','2025-01-21 17:46:56.044741'),(6,'api','0001_initial','2025-01-21 17:46:56.406270'),(7,'contenttypes','0002_remove_content_type_name','2025-01-21 17:46:56.526809'),(8,'auth','0002_alter_permission_name_max_length','2025-01-21 17:46:56.611734'),(9,'auth','0003_alter_user_email_max_length','2025-01-21 17:46:56.648738'),(10,'auth','0004_alter_user_username_opts','2025-01-21 17:46:56.661739'),(11,'auth','0005_alter_user_last_login_null','2025-01-21 17:46:56.736834'),(12,'auth','0006_require_contenttypes_0002','2025-01-21 17:46:56.739831'),(13,'auth','0007_alter_validators_add_error_messages','2025-01-21 17:46:56.752366'),(14,'auth','0008_alter_user_username_max_length','2025-01-21 17:46:56.841816'),(15,'auth','0009_alter_user_last_name_max_length','2025-01-21 17:46:56.932503'),(16,'auth','0010_alter_group_name_max_length','2025-01-21 17:46:56.960384'),(17,'auth','0011_update_proxy_permissions','2025-01-21 17:46:56.976905'),(18,'auth','0012_alter_user_first_name_max_length','2025-01-21 17:46:57.063738'),(19,'sessions','0001_initial','2025-01-21 17:46:57.121274'),(20,'api','0002_alter_usermodel_managers_usermodel_date_joined_and_more','2025-01-22 20:38:29.710445');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `vacationId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `likes_userId_ee1d8176_fk_users_userId` (`userId`),
  KEY `likes_vacationId_241430c8_fk_vacations_vacationId` (`vacationId`),
  CONSTRAINT `likes_userId_ee1d8176_fk_users_userId` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`),
  CONSTRAINT `likes_vacationId_241430c8_fk_vacations_vacationId` FOREIGN KEY (`vacationId`) REFERENCES `vacations` (`vacationId`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES (1,3,5),(2,4,10),(3,5,15),(4,6,20),(5,3,8),(6,4,12),(7,5,7),(8,6,3),(9,3,14),(10,4,1),(11,5,11),(12,6,6),(13,3,2),(14,4,9),(15,5,4),(16,3,5),(17,4,10),(18,5,15),(19,6,20),(20,3,8),(21,4,12),(22,5,7),(23,6,3),(24,3,14),(25,4,1),(26,5,11),(27,6,6),(28,3,2),(29,4,9),(30,5,4);
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `roleId` int NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'nitzan','bz','admin@example.com','securepassword123',1,'2025-01-22 20:38:28.653769',1,0,0,NULL),(2,'John','Doe','johndoe@example.com','SecurePassword123',2,'2025-01-22 21:10:11.970482',1,0,0,NULL),(3,'Johnathan','Doe','johndoe1@example.com','pbkdf2_sha256$870000$GQ1jz3VQ3Assx6KxdQqC8i$XZrBVefmLGpiz7f+I2TtQXgkyoRVPTGry4iBqeAq8Ew=',2,'2025-01-22 21:19:34.323558',1,0,0,NULL),(4,'nitzan','bz','baalzedaka@gmail.com','pbkdf2_sha256$870000$zItvLYcOd3fhBrooNPi3JR$yXEemKm30QzkuE3KlGQNEUE6FZ0WkkgwFUO6ZAfwt90=',2,'2025-01-25 16:44:57.461277',1,0,0,NULL),(5,'nitzan2','bz','baalzedaka1@gmail.com','pbkdf2_sha256$870000$mjulgNjl8SHkcCVyafYxk0$P1/P3cklbxjVlSkhXLWtBDv/dXQGsCKnUhUKYrmx1dc=',2,'2025-01-25 17:40:09.643519',1,0,0,NULL),(6,'xy@gmail.com','xy','xy@gmail.com','pbkdf2_sha256$870000$tANEfSYLaimAG9WWrKv3k4$X1rCgk4GADTih+Ah6zDFHPTh3/JunSI+qAoJXZRIgPY=',2,'2025-01-25 22:25:09.141602',1,0,0,NULL),(7,'testing','test','test@gmail.com','pbkdf2_sha256$870000$99d54aCHiEKeX4hiaZMtuw$E6ywRYDPB33BFuW8lG31BHnEMjLz6SCqJozJu5Q5g2M=',2,'2025-01-27 15:36:34.900936',1,0,0,NULL),(8,'testing','test2','test2@gmail.com','pbkdf2_sha256$870000$G1owaDtfTfE39ZhjoZogGS$D/qaubYMnTPyqweIcKqOL8ylH+Bu7XH/eqrqF6pk+uQ=',2,'2025-01-27 15:39:49.424421',1,0,0,NULL),(9,'test','test3','test3@gmail.com','pbkdf2_sha256$870000$hAK16F4sXFs3MBWrKCCHyg$BxPuU+kqJnGUGUhYqXBYEbMa/HPlEDfc3LbGLRCCZeA=',2,'2025-01-27 15:42:20.914266',1,0,0,NULL),(10,'test4','test4','test4@gmail.com','pbkdf2_sha256$870000$tgRDPjHy8ULDYFCK3p7Tvm$5eGaJKY+kT2BhLOvgnUYdCrfd/4B5wtWgxqGhdg0E6A=',2,'2025-01-28 10:52:02.789738',1,0,0,NULL),(11,'aron','aron','aron@gmail.com','pbkdf2_sha256$870000$Vc7is5De29VdZguEnpk2N0$IfJBkxWH+Hd8rwny6sLK8icCdJ4+ErslUcAFvG5t2J4=',2,'2025-02-03 13:47:00.675689',1,0,0,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_groups`
--

DROP TABLE IF EXISTS `users_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `usermodel_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_groups_usermodel_id_group_id_a61c11e3_uniq` (`usermodel_id`,`group_id`),
  KEY `users_groups_group_id_2f3517aa_fk_auth_group_id` (`group_id`),
  CONSTRAINT `users_groups_group_id_2f3517aa_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `users_groups_usermodel_id_50be6985_fk_users_userId` FOREIGN KEY (`usermodel_id`) REFERENCES `users` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_groups`
--

LOCK TABLES `users_groups` WRITE;
/*!40000 ALTER TABLE `users_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_user_permissions`
--

DROP TABLE IF EXISTS `users_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `usermodel_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_user_permissions_usermodel_id_permission_id_084eb3fa_uniq` (`usermodel_id`,`permission_id`),
  KEY `users_user_permissio_permission_id_6d08dcd2_fk_auth_perm` (`permission_id`),
  CONSTRAINT `users_user_permissio_permission_id_6d08dcd2_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `users_user_permissions_usermodel_id_6b298a0c_fk_users_userId` FOREIGN KEY (`usermodel_id`) REFERENCES `users` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_user_permissions`
--

LOCK TABLES `users_user_permissions` WRITE;
/*!40000 ALTER TABLE `users_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vacations`
--

DROP TABLE IF EXISTS `vacations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacations` (
  `vacationId` int NOT NULL AUTO_INCREMENT,
  `vacationInfo` longtext,
  `vacationStart` date NOT NULL,
  `vacationEnd` date NOT NULL,
  `price` int NOT NULL,
  `picName` varchar(450) DEFAULT NULL,
  `countryId` int NOT NULL,
  PRIMARY KEY (`vacationId`),
  KEY `vacations_countryId_12cecdd2_fk_countries_countryId` (`countryId`),
  CONSTRAINT `vacations_countryId_12cecdd2_fk_countries_countryId` FOREIGN KEY (`countryId`) REFERENCES `countries` (`countryId`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacations`
--

LOCK TABLES `vacations` WRITE;
/*!40000 ALTER TABLE `vacations` DISABLE KEYS */;
INSERT INTO `vacations` VALUES (1,'Relaxing Beach Vacation','2025-03-01','2025-03-07',1500,'beach.png',1),(2,'Adventure in the Alps','2025-04-10','2025-04-20',2200,'alps.png',2),(3,'Cultural Tour of Japan','2025-05-15','2025-05-25',3000,'japan.png',11),(4,'Luxury Cruise in the Caribbean','2025-06-01','2025-06-10',5000,'cruise.png',3),(5,'Historical Sites in Greece','2025-07-05','2025-07-12',1800,'greece.png',8),(6,'Safari Adventure in Africa','2025-08-15','2025-08-25',3500,'safari.png',14),(7,'Skiing in Canada','2025-12-20','2025-12-27',2000,'canada.png',2),(8,'Relaxing Retreat in Bali','2025-09-01','2025-09-10',2500,'bali.png',18),(9,'City Tour of New York','2025-10-01','2025-10-07',1200,'newyork.png',1),(10,'Cultural Tour of India','2025-11-15','2025-11-25',2200,'india.png',10),(11,'Wine Tasting in France','2025-04-01','2025-04-07',1500,'france.png',6),(12,'Hiking in Patagonia','2025-03-20','2025-03-30',2700,'patagonia.png',19),(13,'Exploring the Amazon','2025-05-01','2025-05-10',3200,'amazon.png',4),(14,'Island Hopping in Thailand','2025-06-15','2025-06-25',2800,'thailand.png',18),(15,'Luxury Stay in Dubai','2025-07-20','2025-07-27',4000,'dubai.png',5),(16,'Northern Lights in Iceland','2025-11-01','2025-11-10',2900,'iceland.png',20),(17,'Cultural Exploration in Egypt','2025-10-15','2025-10-22',1700,'egypt.png',15),(18,'Deep Sea Diving in the Maldives','2025-12-01','2025-12-10',3500,'maldives.png',18),(19,'Cultural Heritage in Mexico','2025-09-15','2025-09-22',1800,'mexico.png',3),(20,'Mountain Climbing in Nepal','2025-08-10','2025-08-20',2500,'nepal.png',10),(21,'City Break in London','2025-02-15','2025-02-20',2200,'london.png',5),(22,'Wildlife Tour in Australia','2025-01-10','2025-01-20',4000,'australia.png',12),(23,'Romantic Getaway in Paris','2025-03-05','2025-03-10',3200,'paris.png',6),(24,'Mediterranean Cruise','2025-04-15','2025-04-25',4500,'mediterranean.png',8),(25,'Hiking in Switzerland','2025-06-01','2025-06-10',3000,'switzerland.png',7),(26,'Test Vacation Info','2025-01-24','2025-01-29',1000,'test-image.jpg',1);
/*!40000 ALTER TABLE `vacations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-03 16:37:28
