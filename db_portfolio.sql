-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 10, 2018 at 09:35 PM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_outside`
--

DROP TABLE IF EXISTS `tbl_outside`;
CREATE TABLE IF NOT EXISTS `tbl_outside` (
  `outside_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `outside_name` varchar(25) NOT NULL,
  PRIMARY KEY (`outside_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_outside`
--

INSERT INTO `tbl_outside` (`outside_id`, `outside_name`) VALUES
(1, 'Youtube'),
(2, 'Deviantart'),
(3, 'Github'),
(4, 'Drive');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_portfolio`
--

DROP TABLE IF EXISTS `tbl_portfolio`;
CREATE TABLE IF NOT EXISTS `tbl_portfolio` (
  `port_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `port_title` varchar(40) NOT NULL,
  `port_position` varchar(40) NOT NULL,
  `port_summary` text NOT NULL,
  `port_details` text NOT NULL,
  `port_date` date NOT NULL,
  `port_image` varchar(25) NOT NULL DEFAULT 'default.jpg',
  `port_outside` text NOT NULL,
  PRIMARY KEY (`port_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_portfolio`
--

INSERT INTO `tbl_portfolio` (`port_id`, `port_title`, `port_position`, `port_summary`, `port_details`, `port_date`, `port_image`, `port_outside`) VALUES
(1, 'Car Commercial', 'Animator/Editor', 'This was a project for my 3D animation class, using cameras to get different angles to film a car and different routes around the scene.', 'This was started off in Cinema 4D using splines to make a route that the car will go across and a different route for the camera. It was then exported and brought to Adobe After Effects and edited together with filters and effects added together along with text and shapes as overlays and exported as an mp4.', '2018-01-04', 'car-commercial', 'https://drive.google.com/file/d/10lH9JI0OdP1VaGUzQaMDMVlSXKdXMDqQ/view?usp=sharing'),
(2, 'Sportsnet', 'Creator/Animator/Editor', 'This was an assignment started in Cinema 4D with the class being given a few assets and creating the rest and animating them all in a grand scale with lights and textures.', 'This started off in Cinema 4D with the class being given a few basic models of assets including the trophy, the video screen, the video bar, a player screen, and a main screen, with a broad spectrum of what we were allowed to do. As a choice, I only used the trophy, the video bar and the video screen and gave them textures, and created everything else. I animated everything and lit it up like a Christmas tree. The time was appropriate.', '2017-12-22', 'sportsnet', 'https://drive.google.com/file/d/1Y8aSFrpFbzShmPcuI661RyRfQqkAnssx/view?usp=sharing'),
(3, 'Pretty Cure - I Like It Loud', 'Editor', 'This was something I did on my free time. I am a fairly big fan of the Pretty Cure series and find that their dance scenes can go well with some other music.', 'This was something I did on my free time. I am a fairly big fan of the pretty cure series and with all the dance sequences made every season, I find that they can go well with some other music. I was in a big phase of listening to Cash Cash at the time and found it goes rather well with the dance moves if timed correctly.', '2017-02-24', 'ilil', 'https://www.youtube.com/watch?v=dVkfjB4ffQ8'),
(4, 'Pretty Cure - Fishy Love', 'Editor', 'This was me practicing with After Effects and trying to create something different. Most of my Pretty Cure videos are just the dancing sequences, but with the lyrics of the Fishy Love song, I decided to try and use some of the other scenes.', 'This was me practicing with After Effects and trying to create something different. Most of my Pretty Cure videos are just the dancing sequences, but with the lyrics of the Fishy Love song, I decided to try and use some of the other scenes. I also found the song to be rather cheery and peppy like most of the songs that go along with the original scenes, so I practiced and gave it a shot.', '2017-10-22', 'fishy-love', 'https://www.youtube.com/watch?v=WbxiptmGMKs'),
(5, 'Seiho Yakumo', 'Creator', 'This was an original character I made for an anime called My Hero Academia. Decided to draw one of the main characters Seiho Yakumo. I sketched it out then finished it in Illustrator.', 'This was an original character I made for an anime called My Hero Academia. Decided to draw one of my main characters Seiho Yakumo. I was going for a space theme for this character, with my own love of the night and astronomy. I gave her black hair as a base for all the characters and a simple style as a casual character. I gave her highlights similar to a nebula, to show which character it is. I gave her a casual style and outfit to make her seem confident, but kinda hoydenish. I sketched it out on paper and then scanned it and redrew it and coloured it in Adobe Illustrator.', '2018-01-05', 'seiho', 'https://supersonicslash.deviantart.com/art/Seiho-Yakumo-My-Hero-Academia-OC-724604331?ga_submit_new=10%3A1515464804');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_port_out`
--

DROP TABLE IF EXISTS `tbl_port_out`;
CREATE TABLE IF NOT EXISTS `tbl_port_out` (
  `port_id` tinyint(3) UNSIGNED NOT NULL,
  `outside_id` tinyint(3) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_port_out`
--

INSERT INTO `tbl_port_out` (`port_id`, `outside_id`) VALUES
(1, 4),
(2, 4),
(3, 1),
(4, 1),
(5, 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_port_prog`
--

DROP TABLE IF EXISTS `tbl_port_prog`;
CREATE TABLE IF NOT EXISTS `tbl_port_prog` (
  `port_id` tinyint(3) UNSIGNED NOT NULL,
  `program_id` tinyint(3) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_port_prog`
--

INSERT INTO `tbl_port_prog` (`port_id`, `program_id`) VALUES
(1, 5),
(1, 11),
(2, 5),
(2, 11),
(3, 6),
(4, 5),
(5, 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_port_stag`
--

DROP TABLE IF EXISTS `tbl_port_stag`;
CREATE TABLE IF NOT EXISTS `tbl_port_stag` (
  `port_id` tinyint(3) UNSIGNED NOT NULL,
  `stages_id` tinyint(3) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_port_stag`
--

INSERT INTO `tbl_port_stag` (`port_id`, `stages_id`) VALUES
(1, 1),
(2, 3),
(3, 1),
(4, 1),
(5, 3),
(2, 1),
(2, 2),
(5, 1),
(5, 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_port_type`
--

DROP TABLE IF EXISTS `tbl_port_type`;
CREATE TABLE IF NOT EXISTS `tbl_port_type` (
  `port_id` tinyint(3) UNSIGNED NOT NULL,
  `type_id` tinyint(3) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_port_type`
--

INSERT INTO `tbl_port_type` (`port_id`, `type_id`) VALUES
(1, 3),
(2, 3),
(3, 2),
(4, 2),
(5, 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_programs`
--

DROP TABLE IF EXISTS `tbl_programs`;
CREATE TABLE IF NOT EXISTS `tbl_programs` (
  `program_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `program_name` varchar(50) NOT NULL,
  PRIMARY KEY (`program_id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_programs`
--

INSERT INTO `tbl_programs` (`program_id`, `program_name`) VALUES
(1, 'Photoshop'),
(2, 'Illustrator'),
(3, 'Dreamweaver'),
(4, 'Javascript'),
(5, 'After Effects'),
(6, 'Premiere Pro'),
(7, 'Foundation'),
(8, 'Git'),
(9, 'Visual Studio Code'),
(10, 'MySQL'),
(11, 'Cinema 4D');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_stages`
--

DROP TABLE IF EXISTS `tbl_stages`;
CREATE TABLE IF NOT EXISTS `tbl_stages` (
  `stages_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `stages_name` varchar(20) NOT NULL,
  PRIMARY KEY (`stages_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_stages`
--

INSERT INTO `tbl_stages` (`stages_id`, `stages_name`) VALUES
(1, 'Development'),
(2, 'Design'),
(3, 'Both'),
(4, 'Neither');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_type`
--

DROP TABLE IF EXISTS `tbl_type`;
CREATE TABLE IF NOT EXISTS `tbl_type` (
  `type_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `type_name` varchar(20) NOT NULL,
  PRIMARY KEY (`type_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_type`
--

INSERT INTO `tbl_type` (`type_id`, `type_name`) VALUES
(1, 'Professional'),
(2, 'Casual'),
(3, 'Project');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
