-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema my_app
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema my_app
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `my_app` DEFAULT CHARACTER SET utf8 ;
USE `my_app` ;

-- -----------------------------------------------------
-- Table `my_app`.`restaurant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `my_app`.`restaurant` (
  `idRestaurant` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30) NOT NULL,
  `address` VARCHAR(150) NOT NULL,
  `latitude` DECIMAL(11,8) NOT NULL,
  `longitude` DECIMAL(11,8) NOT NULL,
  `kindFood` SET('árabe', 'italiano', 'portuges') NOT NULL,
  `photo` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idRestaurant`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
