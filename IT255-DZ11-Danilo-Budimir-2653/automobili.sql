-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 01, 2017 at 04:20 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dz11`
--

-- --------------------------------------------------------

--
-- Table structure for table `automobili`
--

CREATE TABLE `automobili` (
  `id` int(11) NOT NULL,
  `proizvodjac` varchar(30) NOT NULL,
  `model` varchar(30) NOT NULL,
  `zapremina` varchar(30) NOT NULL,
  `snaga` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `automobili`
--

INSERT INTO `automobili` (`id`, `proizvodjac`, `model`, `zapremina`, `snaga`) VALUES
(1, 'audi', 'a4', '200', '200'),
(2, 'mercedes ', 's500', '5000', '450'),
(3, 'BMW', 'M4', '3200', '480');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `automobili`
--
ALTER TABLE `automobili`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `automobili`
--
ALTER TABLE `automobili`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
