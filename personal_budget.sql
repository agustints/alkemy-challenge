-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         8.0.27-0ubuntu0.20.04.1 - (Ubuntu)
-- SO del servidor:              Linux
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para personal_budget
CREATE DATABASE IF NOT EXISTS `personal_budget` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `personal_budget`;

-- Volcando estructura para tabla personal_budget.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personal_budget.categories: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` (`id`, `name`) VALUES
	(1, 'Alimentos'),
	(2, 'Vivienda'),
	(3, 'Auto'),
	(4, 'Ropa'),
	(5, 'Trabajo'),
	(6, 'Varios');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;

-- Volcando estructura para tabla personal_budget.movements
CREATE TABLE IF NOT EXISTS `movements` (
  `id` int NOT NULL AUTO_INCREMENT,
  `concept` varchar(150) NOT NULL,
  `amount` decimal(20,6) NOT NULL,
  `date` date NOT NULL,
  `type` enum('income','expense') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personal_budget.movements: ~9 rows (aproximadamente)
/*!40000 ALTER TABLE `movements` DISABLE KEYS */;
INSERT INTO `movements` (`id`, `concept`, `amount`, `date`, `type`) VALUES
	(32, 'Salario', 46500.000000, '2022-01-15', 'income'),
	(33, 'Iluminaria de Casa', 550.000000, '2022-01-30', 'expense');
/*!40000 ALTER TABLE `movements` ENABLE KEYS */;

-- Volcando estructura para tabla personal_budget.movements_categories
CREATE TABLE IF NOT EXISTS `movements_categories` (
  `movement_id` int NOT NULL,
  `category_id` int DEFAULT NULL,
  PRIMARY KEY (`movement_id`),
  KEY `FK__categories` (`category_id`),
  CONSTRAINT `FK__categories` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `FK__movements` FOREIGN KEY (`movement_id`) REFERENCES `movements` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personal_budget.movements_categories: ~9 rows (aproximadamente)
/*!40000 ALTER TABLE `movements_categories` DISABLE KEYS */;
INSERT INTO `movements_categories` (`movement_id`, `category_id`) VALUES
	(33, 2),
	(32, 5);
/*!40000 ALTER TABLE `movements_categories` ENABLE KEYS */;

-- Volcando estructura para tabla personal_budget.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personal_budget.users: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name`, `lastname`, `email`, `password`, `status`) VALUES
	(1, 'Alkemy', 'Demo', 'alkemy@challenge.com', '$2a$12$.gGe908H8qkL5uay0honlOzFT8LhwtgDxNk4sgML0sJAVU10uy8cC', 1),
	(2, 'Agustín', 'Tornielli', 'agustintornielli25@gmail.com', '$2a$12$5yqlm7WHsictSoe.pPHvzeelqbuzQ/I0MmXKDYMqLdTqbxEb51PCi', 1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Volcando estructura para tabla personal_budget.user_movements
CREATE TABLE IF NOT EXISTS `user_movements` (
  `movement_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`movement_id`),
  KEY `FK_user_movements_users` (`user_id`),
  CONSTRAINT `FK_user_movements_movements` FOREIGN KEY (`movement_id`) REFERENCES `movements` (`id`),
  CONSTRAINT `FK_user_movements_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla personal_budget.user_movements: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `user_movements` DISABLE KEYS */;
INSERT INTO `user_movements` (`movement_id`, `user_id`) VALUES
	(32, 1),
	(33, 1);
/*!40000 ALTER TABLE `user_movements` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
