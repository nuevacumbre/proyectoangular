CREATE DATABASE ng_games_db;

USE ng_games_db;

CREATE TABLE game(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

RENAME TABLE game to games;

DESCRIBE games;

CREATE TABLE `marca` (
  `idMarca` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`idMarca`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Marca de un equipo';

ALTER TABLE marca
    MODIFY idMarca varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, AUTO_INCREMENT = 1;

CREATE TABLE `modelo` (
  `idModelo` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `descripcion` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`idModelo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Modelo de un equipo';

ALTER TABLE modelo
    MODIFY idModelo varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, AUTO_INCREMENT = 1;