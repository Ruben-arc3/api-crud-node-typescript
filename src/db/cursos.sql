-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-11-2025 a las 00:36:23
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cursos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `fechaCreacion` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `fechaActualizacion` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `profesorId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`id`, `nombre`, `descripcion`, `fechaCreacion`, `fechaActualizacion`, `profesorId`) VALUES
(1, 'Algebra', 'Muito dificil', '2025-11-26 18:15:54.701807', '2025-11-26 18:15:54.701807', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudianteid`
--

CREATE TABLE `estudianteid` (
  `cursoId` int(11) NOT NULL,
  `estudiante_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiantes`
--

CREATE TABLE `estudiantes` (
  `id` int(11) NOT NULL,
  `cedula` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fechaCreacion` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `fechaActualizacion` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estudiantes`
--

INSERT INTO `estudiantes` (`id`, `cedula`, `nombre`, `apellido`, `email`, `fechaCreacion`, `fechaActualizacion`) VALUES
(6, '2020292', 'Mateo', 'Martinez', 'mateo@gmail.com', '2025-11-26 10:41:23.100708', '2025-11-26 10:41:23.100708'),
(8, '202292', 'Miguel', 'Santos', 'santos@gmail.com', '2025-11-26 13:15:49.431062', '2025-11-26 13:15:49.431062'),
(9, '192772', 'Ruben Dario', 'Mora', 'rubenx544q@gmail.com', '2025-11-26 18:15:00.962708', '2025-11-26 18:15:00.962708');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesores`
--

CREATE TABLE `profesores` (
  `id` int(11) NOT NULL,
  `cedula` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `profesion` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `fechaCreacion` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `fechaActualizacion` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `profesores`
--

INSERT INTO `profesores` (`id`, `cedula`, `nombre`, `apellido`, `email`, `profesion`, `telefono`, `fechaCreacion`, `fechaActualizacion`) VALUES
(1, '202292', 'Miguel', 'Santos', 'santos@gmail.com', 'Ingeniero', '292020202', '2025-11-26 17:32:37.597266', '2025-11-26 17:32:37.597266'),
(2, '0929292', 'Ruben Dario', 'Mora', '', 'Ingeniero', '9299292', '2025-11-26 18:15:25.067673', '2025-11-26 18:15:25.067673');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_d1603d55af5c55310dd8ca1cc01` (`profesorId`);

--
-- Indices de la tabla `estudianteid`
--
ALTER TABLE `estudianteid`
  ADD PRIMARY KEY (`cursoId`,`estudiante_Id`),
  ADD KEY `IDX_2b45fe4b8934ab0d45b27b886e` (`cursoId`),
  ADD KEY `IDX_f20dcb86e269ac658bf9f13bb2` (`estudiante_Id`);

--
-- Indices de la tabla `estudiantes`
--
ALTER TABLE `estudiantes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `profesores`
--
ALTER TABLE `profesores`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cursos`
--
ALTER TABLE `cursos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `estudiantes`
--
ALTER TABLE `estudiantes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `profesores`
--
ALTER TABLE `profesores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD CONSTRAINT `FK_d1603d55af5c55310dd8ca1cc01` FOREIGN KEY (`profesorId`) REFERENCES `profesores` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `estudianteid`
--
ALTER TABLE `estudianteid`
  ADD CONSTRAINT `FK_2b45fe4b8934ab0d45b27b886ef` FOREIGN KEY (`cursoId`) REFERENCES `cursos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_f20dcb86e269ac658bf9f13bb22` FOREIGN KEY (`estudiante_Id`) REFERENCES `estudiantes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
