-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-04-2024 a las 21:46:08
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
-- Base de datos: `viajes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administradores`
--

CREATE TABLE `administradores` (
  `id_administradores` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `correo` varchar(150) NOT NULL,
  `fo_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `administradores`
--

INSERT INTO `administradores` (`id_administradores`, `nombre`, `correo`, `fo_usuario`) VALUES
(1, 'Mayra Guarin', 'alejandra.9131@gmail.com', 1),
(2, 'Martha Chaparro', 'martha_Chaparro56@gmail.com', 2),
(3, 'Jhon Sanchez', 'jjsanchez_45@gmail.com', 3),
(4, 'Lorena Saldarriaga', 'loressm_34@gmail.com', 4),
(5, 'Usuario General', 'usuario.usuariodv_4@gmail.com', 5),
(6, 'Mayra Guarin', 'alejandra.9131@gmail.com', 1),
(7, 'Martha Chaparro', 'martha_Chaparro56@gmail.com', 2),
(8, 'Jhon Sanchez', 'jjsanchez_45@gmail.com', 3),
(9, 'Lorena Saldarriaga', 'loressm_34@gmail.com', 4),
(10, 'Usuario General', 'usuario.usuariodv_4@gmail.com', 5),
(15, 'prueba', 'correo@gmail.com', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudad`
--

CREATE TABLE `ciudad` (
  `id_ciudad` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `fo_depto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `ciudad`
--

INSERT INTO `ciudad` (`id_ciudad`, `nombre`, `fo_depto`) VALUES
(1, 'Bogotá', 1),
(2, 'Medellín', 2),
(3, 'Cartagena', 3),
(4, 'Tunja', 4),
(5, 'Manizales', 5),
(6, 'Leticia', 6),
(7, 'Arauca', 7),
(8, 'Barranquilla', 8),
(9, 'Villavicencio', 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `id_cliente` int(11) NOT NULL,
  `identificacion` varchar(150) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `dirección` varchar(150) NOT NULL,
  `celular` varchar(10) NOT NULL,
  `correo` varchar(150) NOT NULL,
  `fo_ciudad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id_cliente`, `identificacion`, `nombre`, `dirección`, `celular`, `correo`, `fo_ciudad`) VALUES
(1, '1032345665', 'Margarita Paniagua', 'Cra 43 bb # 142 c 54', 'marpaniagu', '3112113389', 2),
(2, '71890032', 'Mario Bustamante', 'Calle 40 #23-21', '3016012212', 'mariob@gmail.com', 2),
(3, '3767009', 'Jorge Rodriguez', 'Avenida 59 #3-51', '3045667633', 'jorn01@gmail.com', 2),
(4, '1034565007', 'Monica Baena', 'Circular 20 #53-68', '3113232112', 'monica0455b@gmail.com', 1),
(5, '1000345554', 'Carlos Gonzalez', 'Carrera 102 #23 b-32', '3023458998', 'cmgonzam@gmail.com', 1),
(6, '72212567', 'Andres Reginfo', 'Avenida ciudadela #12-34', '3223455490', 'andyto@gmail.com', 2),
(7, '3456765', 'Ascencio Bermudez', 'Calle 45 # 102-34', '3222123454', 'Ascencio23@gmail.com', 2),
(8, '1034565667', 'Asly Born', 'Calle 32 # 10-45', '3221110098', 'aslyventy@gmail.com', 1),
(9, '3456099', 'Ester Honor', 'Carrera 87 # 12-45', '3016075565', 'hestertt@gmail.com', 1),
(10, '1000456667', 'Alan Asid', 'Calle Ecuador # 10-34', '3224445690', 'Asidalan@gmail.com', 2),
(11, '71232100', 'Ascencio asid', 'Calle 3 # 12-56', '3007789009', 'asidades23@gmail.com', 2),
(13, '1234567', 'Prueba', 'Cra Prueba', '3111230987', 'prueba@gmail.com', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contenidos`
--

CREATE TABLE `contenidos` (
  `id_contenido` int(100) NOT NULL,
  `fo_servicios` int(11) NOT NULL,
  `Informacion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `contenidos`
--

INSERT INTO `contenidos` (`id_contenido`, `fo_servicios`, `Informacion`) VALUES
(2, 2, 'La nueva curaduría del Museo Casa de Moneda narra los principales procesos económicos, sociales y culturales del país a través de su Colección Numismática e incorpora piezas arqueológicas, artísticas y documentales'),
(3, 3, 'El Pueblito Paisa de Medellín es uno de los sitios turísticos más visitados de la ciudad que combina tres elementos que todos amamos: la tradición antioqueña que se refleja en las artesanías, gastronomía y arquitectura del lugar'),
(4, 4, 'El Parque Metropolitano Simón Bolívar es el parque urbano más grande e importante de la ciudad de Bogotá, ​ se encuentra ubicado en el centro geográfico de Bogotá'),
(5, 5, 'La plaza de Bolívar es la plaza principal de la ciudad de Bogotá y de Colombia. Está ubicada en el centro histórico de la ciudad, entre las carreras Séptima y Octava con calles Décima y Once');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamento`
--

CREATE TABLE `departamento` (
  `id_depto` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `departamento`
--

INSERT INTO `departamento` (`id_depto`, `nombre`) VALUES
(1, 'Cundinamarca'),
(2, 'Antioquia'),
(3, 'Bolivar'),
(4, 'Boyaca'),
(5, 'Caldas'),
(6, 'Amazonas'),
(7, 'Arauca'),
(8, 'Atlantico'),
(9, 'Meta'),
(10, 'prueba'),
(12, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios`
--

CREATE TABLE `servicios` (
  `id_servicio` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `codigo` varchar(150) NOT NULL,
  `fo_ciudad` int(11) NOT NULL,
  `fo_depto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `servicios`
--

INSERT INTO `servicios` (`id_servicio`, `nombre`, `codigo`, `fo_ciudad`, `fo_depto`) VALUES
(3, 'Cerro Nutibara y Pueblito Paisa', 'MED0054M', 2, 2),
(4, 'Parque Central Simón Bolivar', 'BOG0034', 1, 1),
(5, 'Plaza de Bolivar', 'BOG0012', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `soporte`
--

CREATE TABLE `soporte` (
  `id_soporte` int(100) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Correo` varchar(30) NOT NULL,
  `inquietudes` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `soporte`
--

INSERT INTO `soporte` (`id_soporte`, `Nombre`, `Correo`, `inquietudes`) VALUES
(1, 'Alejandra', 'prueba123@gmail.com', 'No puedo acceder a ver mis contenidos guardados'),
(65, 'Prueba', 'Prueba', 'Prueba a ingresar'),
(67, 'MAYRA', 'MAYRA@gmail.com', 'NO PUEDO VER LAS IMAGENES DE MEDELLIN'),
(69, 'Mayra', 'prueba2@gmail.com', 'no puedo dar like al contenido del sitio turistico museo de antioquia'),
(73, 'mayra', 'MAYRA@gmail.com', 'No puedo ver las imagenes de Bogotá');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `clave` varchar(150) NOT NULL,
  `celular` varchar(10) NOT NULL,
  `tipo_usuario` varchar(150) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `usuario` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `clave`, `celular`, `tipo_usuario`, `nombre`, `usuario`) VALUES
(1, '54fd67812ecdf658747bd1cbba91b5246d1da8e4', '3113234333', 'soporte', 'Mayra Guarin', 'mguarin@gmail.com'),
(2, 'af14173e61891b3cfcdeae05f2ef58b82d3e70e7', '3224561785', 'administrador', 'lsaldarriaga45', 'lorenasaldar56@gmail.com'),
(3, 'cfc0fbebe49fd05fe111d36bf149a50b38de15dd', '3104511290', 'soporte', 'jsalgado12', 'salgadofedereck_893@gmail.com'),
(4, 'aeeef050931872669319fe73d787255db176ee78', '3018904554', 'soporte', 'Mgutierrez34', 'marioguti_34@gmail.com'),
(5, 'e9394b31ddcf8070b39b71769535dae13a3a7648', '3054566098', 'invitado', 'Agomez98', 'gomezflorez123@gmail.com'),
(76, '7c4a8d09ca3762af61e59520943dc26494f8941b', '123456789', 'Administrador', 'prueba2', 'prueba2@gmail.com'),
(147, '7c4a8d09ca3762af61e59520943dc26494f8941b', '2121221212', 'Usuario general', 'Mayra Guarin', 'mayraguarin@gmail.com'),
(148, '7c4a8d09ca3762af61e59520943dc26494f8941b', '1234567890', 'Usuario general', 'Andres', 'andres111@gmail.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administradores`
--
ALTER TABLE `administradores`
  ADD PRIMARY KEY (`id_administradores`),
  ADD KEY `fo_usuario` (`fo_usuario`);

--
-- Indices de la tabla `ciudad`
--
ALTER TABLE `ciudad`
  ADD PRIMARY KEY (`id_ciudad`),
  ADD KEY `fo_depto` (`fo_depto`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id_cliente`),
  ADD KEY `fo_ciudad` (`fo_ciudad`);

--
-- Indices de la tabla `contenidos`
--
ALTER TABLE `contenidos`
  ADD PRIMARY KEY (`id_contenido`),
  ADD KEY `id_contenido` (`id_contenido`);

--
-- Indices de la tabla `departamento`
--
ALTER TABLE `departamento`
  ADD PRIMARY KEY (`id_depto`);

--
-- Indices de la tabla `servicios`
--
ALTER TABLE `servicios`
  ADD PRIMARY KEY (`id_servicio`),
  ADD KEY `fo_ciudad` (`fo_ciudad`),
  ADD KEY `fo_depto` (`fo_depto`);

--
-- Indices de la tabla `soporte`
--
ALTER TABLE `soporte`
  ADD PRIMARY KEY (`id_soporte`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administradores`
--
ALTER TABLE `administradores`
  MODIFY `id_administradores` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `ciudad`
--
ALTER TABLE `ciudad`
  MODIFY `id_ciudad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `contenidos`
--
ALTER TABLE `contenidos`
  MODIFY `id_contenido` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `departamento`
--
ALTER TABLE `departamento`
  MODIFY `id_depto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `servicios`
--
ALTER TABLE `servicios`
  MODIFY `id_servicio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT de la tabla `soporte`
--
ALTER TABLE `soporte`
  MODIFY `id_soporte` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=149;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `administradores`
--
ALTER TABLE `administradores`
  ADD CONSTRAINT `administradores_ibfk_1` FOREIGN KEY (`fo_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `ciudad`
--
ALTER TABLE `ciudad`
  ADD CONSTRAINT `ciudad_ibfk_1` FOREIGN KEY (`fo_depto`) REFERENCES `departamento` (`id_depto`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD CONSTRAINT `cliente_ibfk_1` FOREIGN KEY (`fo_ciudad`) REFERENCES `ciudad` (`id_ciudad`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
