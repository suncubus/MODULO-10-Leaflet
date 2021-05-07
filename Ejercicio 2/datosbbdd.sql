-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-05-2021 a las 17:20:36
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `my_app`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `restaurant`
--

CREATE TABLE `restaurant` (
  `idRestaurant` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `address` varchar(150) NOT NULL,
  `latitude` decimal(10,8) NOT NULL,
  `longitude` decimal(11,8) NOT NULL,
  `kindFood` set('Mediterráneo','Vegetariano','Árabe','Italiano','Portugués') NOT NULL,
  `photo` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `restaurant`
--

INSERT INTO `restaurant` (`idRestaurant`, `name`, `address`, `latitude`, `longitude`, `kindFood`, `photo`) VALUES
(1, ' Restaurante Accés', 'Carrer d\'Aribau, 55, 08011 Barcelona\r\n', '41.38823522', '2.15889151', 'Mediterráneo', '01.jpg'),
(3, 'Damasco Arabian Restaurant', 'Carrer de Sant Pere Més Alt, 18, 08003 Barcelona\r\n\r\n', '41.37243610', '2.14714880', 'Árabe', '02.jpg'),
(5, 'Luigi', 'Carrer de Roger de Llúria, 50, 08009 Barcelona\r\n', '41.40133200', '2.18133650', 'Italiano', '03.jg'),
(6, 'Veggie garden', 'Gran Via de les Corts Catalanes, 602, 08007 Barcelona, B\r\n\r\n', '41.37548690', '2.11763260', 'Mediterráneo,Vegetariano', '04.jpg'),
(7, 'Clóset Restaurant', 'Carrer de l\'Hospital, 157, 08001 Barcelona\r\n\r\n', '41.37117170', '2.13398500', 'Mediterráneo,Italiano', '05.jpg'),
(8, 'Aladdin', 'Avinguda de Gaudí, 50, 08025 Barcelona\r\n', '41.37399490', '2.11787550', 'Árabe', '06.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`idRestaurant`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `idRestaurant` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
