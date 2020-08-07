-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 07, 2020 at 04:15 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dumbflix`
--

-- --------------------------------------------------------

--
-- Table structure for table `Categories`
--

CREATE TABLE `Categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Categories`
--

INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'TV Series', '2020-06-17 08:28:09', '2020-06-17 08:28:09'),
(2, 'Movies', '2020-06-17 08:28:18', '2020-06-17 08:28:18');

-- --------------------------------------------------------

--
-- Table structure for table `Episodes`
--

CREATE TABLE `Episodes` (
  `id` int(11) NOT NULL,
  `filmId` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `thumbnailFilm` varchar(255) DEFAULT NULL,
  `linkFilm` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Episodes`
--

INSERT INTO `Episodes` (`id`, `filmId`, `title`, `thumbnailFilm`, `linkFilm`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'The WItcher : Episode 1', 'https://i.pinimg.com/736x/52/cb/be/52cbbe56ed6c0d496aa8b4d036055632.jpg', 'https://www.youtube.com/watch?v=-sfZuonnKe8&list=PLkLimRXN6NKxqV5nLSOfBzt_T0LJy8JIg', '2020-06-17 08:43:19', '2020-06-19 08:22:30'),
(2, 1, 'The WItcher : Episode 2', 'https://i.pinimg.com/736x/52/cb/be/52cbbe56ed6c0d496aa8b4d036055632.jpg', 'https://www.youtube.com/watch?v=cOXqqYT3zW4&list=PL0FHxKU3tEruAkG-Tmi1djx7cTcxXdg4f&index=23', '2020-06-19 07:38:46', '2020-06-19 08:22:50'),
(3, 1, 'The WItcher : Episode 3', 'https://i.pinimg.com/736x/52/cb/be/52cbbe56ed6c0d496aa8b4d036055632.jpg', 'https://www.youtube.com/watch?v=TZ23SGe1O30&list=PL0FHxKU3tEruAkG-Tmi1djx7cTcxXdg4f&index=32', '2020-06-19 07:40:29', '2020-06-19 08:23:03'),
(4, 2, 'Persona : Episode 1', 'https://static.zerochan.net/PERSONA3.THE.MOVIE.%E2%80%94%231.Spring.of.Birth%E2%80%94.full.1473421.jpg', 'https://www.youtube.com/watch?v=kid85gmnp-A&list=PLv8cf5WMYovL300A3i9XqqfMaVM96PsXU', '2020-06-19 07:42:02', '2020-06-19 08:23:19'),
(5, 2, 'Persona : Episode 2', 'https://static.zerochan.net/PERSONA3.THE.MOVIE.%E2%80%94%231.Spring.of.Birth%E2%80%94.full.1473421.jpg', 'https://www.youtube.com/watch?v=Va36VYSf3fk&list=PLv8cf5WMYovL300A3i9XqqfMaVM96PsXU&index=2', '2020-06-19 07:44:24', '2020-06-19 08:23:41'),
(6, 2, 'Persona : Episode 3', 'https://static.zerochan.net/PERSONA3.THE.MOVIE.%E2%80%94%231.Spring.of.Birth%E2%80%94.full.1473421.jpg', 'https://www.youtube.com/watch?v=ZD6nYmlu1dk&list=PLv8cf5WMYovL300A3i9XqqfMaVM96PsXU&index=3', '2020-06-19 07:45:00', '2020-06-19 08:24:05'),
(7, 3, 'Game Of Thrones : Episode 1', 'https://m.media-amazon.com/images/M/MV5BZWVjNDJlNzYtMDljNy00Nzc5LTk3YWYtYjNhNGRiZGQ0M2E1XkEyXkFqcGdeQXVyNzY4Njk5MTU@._V1_UY1200_CR113,0,630,1200_AL_.jpg', 'https://www.youtube.com/watch?v=7gQyk9DmtHg&list=PLvKSUO3IzggLlOktRRBUFMIebUS9TPZfs', '2020-06-19 08:29:20', '2020-06-19 08:29:59'),
(8, 3, 'Game Of Thrones : Episode 2', 'https://m.media-amazon.com/images/M/MV5BZWVjNDJlNzYtMDljNy00Nzc5LTk3YWYtYjNhNGRiZGQ0M2E1XkEyXkFqcGdeQXVyNzY4Njk5MTU@._V1_UY1200_CR113,0,630,1200_AL_.jpg', 'https://www.youtube.com/watch?v=AacImm1SHTg&list=PLvKSUO3IzggLlOktRRBUFMIebUS9TPZfs&index=6', '2020-06-19 08:31:43', '2020-06-19 08:31:43'),
(9, 3, 'Game Of Thrones : Episode 3', 'https://m.media-amazon.com/images/M/MV5BZWVjNDJlNzYtMDljNy00Nzc5LTk3YWYtYjNhNGRiZGQ0M2E1XkEyXkFqcGdeQXVyNzY4Njk5MTU@._V1_UY1200_CR113,0,630,1200_AL_.jpg', 'https://www.youtube.com/watch?v=Akl6OK2HUNA&list=PLvKSUO3IzggLlOktRRBUFMIebUS9TPZfs&index=7', '2020-06-19 08:32:22', '2020-06-19 08:32:22'),
(10, 4, 'Money Heist : Episode 1', 'https://filmdaily.co/wp-content/uploads/2020/05/money-heist-season-3-lede.jpg', 'https://www.youtube.com/watch?v=bZZ_my7A3KA&list=PLZ9wB1cLuTwemMyKVFZcdxUQNEWKZpALR', '2020-06-19 08:46:33', '2020-06-19 08:46:33'),
(11, 4, 'Money Heist : Episode 2', 'https://filmdaily.co/wp-content/uploads/2020/05/money-heist-season-3-lede.jpg', 'https://www.youtube.com/watch?v=RJ1o2iNyNIQ&list=PLZ9wB1cLuTwemMyKVFZcdxUQNEWKZpALR&index=5', '2020-06-19 08:47:28', '2020-06-19 08:47:28'),
(12, 4, 'Money Heist : Episode 3', 'https://filmdaily.co/wp-content/uploads/2020/05/money-heist-season-3-lede.jpg', 'https://www.youtube.com/watch?v=u_7yBOfr5dI&list=PLZ9wB1cLuTwemMyKVFZcdxUQNEWKZpALR&index=7', '2020-06-19 08:47:58', '2020-06-19 08:47:58'),
(13, 5, 'Breaking Bad : Episode 1', 'https://i.pinimg.com/originals/47/cc/e8/47cce8405c656b88d1fecb1d24949bbd.jpg', 'https://www.youtube.com/watch?v=Sc2CjxdqGGw&list=PLXxrO4_E5Gw9RZqygLS4bsyQrOEBUtyu4&index=37', '2020-06-19 08:53:10', '2020-06-19 08:53:10'),
(14, 5, 'Breaking Bad : Episode 2', 'https://i.pinimg.com/originals/47/cc/e8/47cce8405c656b88d1fecb1d24949bbd.jpg', 'https://www.youtube.com/watch?v=wzLFrgntT0k&list=PLXxrO4_E5Gw9RZqygLS4bsyQrOEBUtyu4&index=42', '2020-06-19 08:53:31', '2020-06-19 08:53:31'),
(15, 5, 'Breaking Bad : Episode 3', 'https://i.pinimg.com/originals/47/cc/e8/47cce8405c656b88d1fecb1d24949bbd.jpg', 'https://www.youtube.com/watch?v=kIs84Bh1hFk', '2020-06-19 08:54:26', '2020-06-19 08:54:26'),
(16, 6, 'Stranger Things : Episode 1', 'https://i.pinimg.com/originals/bb/82/75/bb8275502313a029711f78eb97ee990c.jpg', 'https://www.youtube.com/watch?v=CKtq-bZgS8I&list=PLy04b78hiiS7bcB0HITMru0RYPO_wIZ4K', '2020-06-19 08:58:39', '2020-06-19 08:58:39'),
(17, 6, 'Stranger Things : Episode 2', 'https://i.pinimg.com/originals/bb/82/75/bb8275502313a029711f78eb97ee990c.jpg', 'https://www.youtube.com/watch?v=3giXMVQT9Og&list=PLy04b78hiiS7bcB0HITMru0RYPO_wIZ4K&index=5', '2020-06-19 08:59:07', '2020-06-19 08:59:07'),
(18, 6, 'Stranger Things : Episode 3', 'https://i.pinimg.com/originals/bb/82/75/bb8275502313a029711f78eb97ee990c.jpg', 'https://www.youtube.com/watch?v=O75c3Jf5lQY&list=PLy04b78hiiS7bcB0HITMru0RYPO_wIZ4K&index=7', '2020-06-19 08:59:34', '2020-06-19 08:59:34'),
(19, 7, 'JOKER : Movie', 'https://www.joblo.com/assets/images/joblo/posters/2019/08/joker-poster-main2.jpg', 'https://www.youtube.com/watch?v=zAGVQLHvwOY&t=1s', '2020-06-19 09:02:57', '2020-06-19 09:02:57'),
(20, 8, 'Fractured : Movie', 'https://m.media-amazon.com/images/M/MV5BZTE0MWE4NzMtMzc4Ny00NWE4LTg2OTQtZmIyNDdhZjdiZmJhXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg', 'https://www.youtube.com/watch?v=S8obCz5NSog', '2020-06-19 09:03:58', '2020-06-19 09:03:58'),
(21, 9, 'Don\'t Breathe : Movie', 'https://cdna.artstation.com/p/assets/images/images/010/831/974/large/daniel-simmonds-dont-breathe-blue.jpg?1526463677', 'https://www.youtube.com/watch?v=b6oGkXhg7-k', '2020-06-19 09:05:27', '2020-06-19 09:05:27'),
(22, 10, 'Saving Private Ryan : Movie', 'https://blob.cede.ch/catalog/16204000/16204529_1_92.jpg?v=3', 'https://www.youtube.com/watch?v=cL5WTfWXLzM', '2020-06-19 09:06:46', '2020-06-19 09:06:46'),
(23, 11, 'Tomb Raider (2018) : Movie', 'https://fanart.tv/fanart/movies/338970/movieposter/tomb-raider-5a6591723ae30.jpg', 'https://www.youtube.com/watch?v=WI2TWgsqt5E&list=PLGq7iwZq7nd-Sx1BsCs5IaCaclBTCsD9S', '2020-06-19 09:08:33', '2020-06-19 09:08:33'),
(24, 12, 'Hacksaw Ridge : Movie', 'https://lh3.googleusercontent.com/proxy/FBZ3nj_O9cujuDt8WpfJCePW0RUNMQikaB5IGGGnG9PCEwk3-9-PRA7_L1zERMvt3e3pt4AbsY5PSoOhSy-N04vAtUviNzc8ZO4XmvY7VdARy_c', 'https://www.youtube.com/watch?v=v2r1ZOSd--A', '2020-06-19 09:09:45', '2020-06-19 09:09:45'),
(25, 5, 'Breaking Bad : Episode 4', 'https://i.pinimg.com/originals/47/cc/e8/47cce8405c...', 'https://www.youtube.com/watch?v=glBSrGOKSMg', '2020-06-21 05:10:38', '2020-06-21 05:10:38'),
(27, 3, 'Game Of Thrones : Episode 4 ', 'https://m.media-amazon.com/images/M/MV5BZWVjNDJlNzYtMDljNy00Nzc5LTk3YWYtYjNhNGRiZGQ0M2E1XkEyXkFqcGdeQXVyNzY4Njk5MTU@._V1_UY1200_CR113,0,630,1200_AL_.jpg', 'https://www.youtube.com/watch?v=glBSrGOKSMg', '2020-06-21 11:07:38', '2020-06-21 11:07:38'),
(28, 3, 'Game Of Thrones : Episode 4 ', 'https://m.media-amazon.com/images/M/MV5BZWVjNDJlNzYtMDljNy00Nzc5LTk3YWYtYjNhNGRiZGQ0M2E1XkEyXkFqcGdeQXVyNzY4Njk5MTU@._V1_UY1200_CR113,0,630,1200_AL_.jpg', 'https://www.youtube.com/watch?v=glBSrGOKSMg', '2020-06-21 11:08:33', '2020-06-21 11:08:33'),
(30, 23, 'Sherlock : Episode 1', 'https://ae01.alicdn.com/kf/HTB13aD3PVXXXXXPapXXq6xXFXXXH/Sherlock-Holmes-American-TV-Series-Home-Furnishing-Dekorasi-Kraft-Film-Retro-Poster-Gambar-Core-Stiker-Dinding.jpg', 'https://www.youtube.com/watch?v=80gidiItm1k', '2020-06-21 18:27:07', '2020-06-21 18:27:07'),
(31, 23, 'Sherlock : Episode 2', 'https://ae01.alicdn.com/kf/HTB13aD3PVXXXXXPapXXq6xXFXXXH/Sherlock-Holmes-American-TV-Series-Home-Furnishing-Dekorasi-Kraft-Film-Retro-Poster-Gambar-Core-Stiker-Dinding.jpg', 'https://www.youtube.com/watch?v=9l963C4HKL0&list=PL5hHBdeUMw0KCTkh578C6ueVFyeYWX91G&index=7', '2020-06-21 18:28:57', '2020-06-21 18:28:57'),
(32, 13, 'Extraction : Movie', 'https://www.movieandgamezone.com/wp-content/uploads/2020/06/feat-1024x1174.jpg', 'https://www.youtube.com/watch?v=29x7NYFhzXU', '2020-06-21 18:37:37', '2020-06-21 18:37:37'),
(37, 1, 'The Witcher : Episode 4', 'https://i.pinimg.com/736x/52/cb/be/52cbbe56ed6c0d496aa8b4d036055632.jpg', 'https://www.youtube.com/watch?v=fOto7RGS_IM', '2020-06-22 01:50:10', '2020-06-22 01:50:10'),
(38, 1, 'The Witcher : Episode 5', 'https://i.pinimg.com/originals/47/cc/e8/47cce8405c...', 'https://www.youtube.com/watch?v=oXrCKR7UzrI', '2020-06-22 03:26:21', '2020-06-22 03:26:21'),
(39, 1, 'The Witcher : Episode 6', 'https://m.media-amazon.com/images/M/MV5BZWVjNDJlNzYtMDljNy00Nzc5LTk3YWYtYjNhNGRiZGQ0M2E1XkEyXkFqcGdeQXVyNzY4Njk5MTU@._V1_UY1200_CR113,0,630,1200_AL_.jpg', 'https://www.youtube.com/watch?v=dO6YHdx_v8I', '2020-06-22 03:30:40', '2020-06-22 03:30:40'),
(40, 24, 'Tigertail : Movie', 'https://m.media-amazon.com/images/M/MV5BZWVjNDJlNzYtMDljNy00Nzc5LTk3YWYtYjNhNGRiZGQ0M2E1XkEyXkFqcGdeQXVyNzY4Njk5MTU@._V1_UY1200_CR113,0,630,1200_AL_.jpg', 'https://www.youtube.com/watch?v=i8lp_eI78ZM', '2020-06-22 03:34:57', '2020-06-22 03:34:57');

-- --------------------------------------------------------

--
-- Table structure for table `Films`
--

CREATE TABLE `Films` (
  `id` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `thumbnailFilm` varchar(255) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Films`
--

INSERT INTO `Films` (`id`, `categoryId`, `title`, `thumbnailFilm`, `year`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'The Witcher', 'https://i.pinimg.com/736x/52/cb/be/52cbbe56ed6c0d496aa8b4d036055632.jpg', 2019, 'The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.', '2020-06-17 08:37:14', '2020-06-17 08:37:14'),
(2, 1, 'Persona 3 The Movie', 'https://static.zerochan.net/PERSONA3.THE.MOVIE.%E2%80%94%231.Spring.of.Birth%E2%80%94.full.1473421.jpg', 2016, 'Japanese animated film and the first installment in a film series based on the Persona 3 video game by Atlus. Directed by Noriaki Akitaya and written by Jun Kumagai, it is based on the original story by Atlus and distributed by Aniplex.', '2020-06-18 12:23:14', '2020-06-18 12:23:14'),
(3, 1, 'Game Of Thrones', 'https://m.media-amazon.com/images/M/MV5BZWVjNDJlNzYtMDljNy00Nzc5LTk3YWYtYjNhNGRiZGQ0M2E1XkEyXkFqcGdeQXVyNzY4Njk5MTU@._V1_UY1200_CR113,0,630,1200_AL_.jpg', 2011, 'is an HBO series that tells the story of a medieval country\'s civil war. The series, which premiered in April 2011, is set on the fictional continents of Westeros and Essos in a world where seasons stretch on for years', '2020-06-18 12:25:34', '2020-06-18 12:25:34'),
(4, 1, 'Money Heist', 'https://filmdaily.co/wp-content/uploads/2020/05/money-heist-season-3-lede.jpg', 2017, '(Spanish: La casa de papel, The House of Paper) is a Spanish heist crime drama television series created by Álex Pina. The series traces two long-prepared heists led by the Professor (Álvaro Morte), one on the Royal Mint of Spain, and one on the Bank of S', '2020-06-18 12:28:03', '2020-06-18 12:28:03'),
(5, 1, 'Breaking Bad', 'https://i.pinimg.com/originals/47/cc/e8/47cce8405c656b88d1fecb1d24949bbd.jpg', 2019, 'Premise. Set in Albuquerque, New Mexico, between 2008 and 2010, Breaking Bad follows Walter White, a meek high school science teacher who transforms into a ruthless player in the local methamphetamine drug trade, driven by a desire to provide for his fami', '2020-06-18 12:32:01', '2020-06-18 12:32:01'),
(6, 1, 'Stranger Things', 'https://i.pinimg.com/originals/bb/82/75/bb8275502313a029711f78eb97ee990c.jpg', 2016, 'Stranger Things is set in the fictional rural town of Hawkins, Indiana, during the early 1980s. The nearby Hawkins National Laboratory ostensibly performs scientific research for the United States Department of Energy, but secretly does experiments into t', '2020-06-18 12:34:27', '2020-06-18 12:34:27'),
(7, 2, 'JOKER', 'https://www.joblo.com/assets/images/joblo/posters/2019/08/joker-poster-main2.jpg', 2019, 'In 1981, party clown and aspiring stand-up comedian Arthur Fleck lives with his mother, Penny, in Gotham City. Gotham is rife with crime and unemployment, leaving swathes of the population disenfranchised and impoverished. Arthur suffers from a medical di', '2020-06-18 12:44:08', '2020-06-18 12:44:08'),
(8, 2, 'Fractured', 'https://m.media-amazon.com/images/M/MV5BZTE0MWE4NzMtMzc4Ny00NWE4LTg2OTQtZmIyNDdhZjdiZmJhXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg', 2019, 'Fractured is more of a thriller than a horror, starring Sam Worthington (Avatar) as a man desperate to find his wife and child in a hospital that\'s determined to thwart him at every turn.', '2020-06-18 17:37:21', '2020-06-18 17:37:21'),
(9, 2, 'Don\'t Breathe', 'https://cdna.artstation.com/p/assets/images/images/010/831/974/large/daniel-simmonds-dont-breathe-blue.jpg?1526463677', 2016, 'The film stars Jane Levy, Dylan Minnette, Daniel Zovatto, and Stephen Lang, and focuses on three friends who get trapped inside a blind man\'s house while breaking into it.', '2020-06-18 17:39:56', '2020-06-18 17:39:56'),
(10, 2, 'Saving Private Ryan', 'https://blob.cede.ch/catalog/16204000/16204529_1_92.jpg?v=3', 1998, 'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.', '2020-06-18 17:42:36', '2020-06-18 17:42:36'),
(11, 2, 'Tomb Raider', 'https://fanart.tv/fanart/movies/338970/movieposter/tomb-raider-5a6591723ae30.jpg', 2018, 'Lara Croft (Alicia Vikander), the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she discovers the island where her father, Lord Richard Croft (Dominic West) disappeared.', '2020-06-18 17:45:17', '2020-06-18 17:45:17'),
(12, 2, 'Hacksaw Ridge', 'https://i.pinimg.com/564x/9e/91/e1/9e91e19c5a561b9ce27a8523fe9615fd.jpg', 2016, 'The film focuses on the World War II experiences of Desmond Doss, an American pacifist combat medic who, as a Seventh-day Adventist Christian, refused to carry or use a weapon or firearm of any kind.', '2020-06-18 17:47:31', '2020-06-19 18:05:43'),
(13, 2, 'Extraction', 'https://www.movieandgamezone.com/wp-content/uploads/2020/06/feat-1024x1174.jpg', 2020, 'Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he\'s enlisted to rescue the kidnapped son of an imprisoned international crime lord.', '2020-06-20 03:40:37', '2020-06-20 03:40:37'),
(23, 1, 'Sherlock (TV Series)', 'https://ae01.alicdn.com/kf/HTB13aD3PVXXXXXPapXXq6xXFXXXH/Sherlock-Holmes-American-TV-Series-Home-Furnishing-Dekorasi-Kraft-Film-Retro-Poster-Gambar-Core-Stiker-Dinding.jpg', 2010, 'Premise. Sherlock depicts \"consulting detective\" Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London.', '2020-06-20 07:09:57', '2020-06-20 07:09:57'),
(24, 2, 'Tigertail', 'https://i.pinimg.com/736x/52/cb/be/52cbbe56ed6c0d496aa8b4d036055632.jpg', 2020, 'asdasdasdasdasdasdasdasdasdas', '2020-06-22 03:29:25', '2020-06-22 03:29:25');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20200610094341-create-user.js'),
('20200611050526-create-category.js'),
('20200611050658-create-film.js'),
('20200611051652-create-transaction.js'),
('20200611052054-create-episode.js');

-- --------------------------------------------------------

--
-- Table structure for table `Transactions`
--

CREATE TABLE `Transactions` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `startDate` date DEFAULT NULL,
  `dueDate` date DEFAULT NULL,
  `attache` varchar(255) DEFAULT NULL,
  `status` enum('approved','pending','rejected') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Transactions`
--

INSERT INTO `Transactions` (`id`, `userId`, `startDate`, `dueDate`, `attache`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 1, '2020-06-17', '2020-08-03', '1592383596102-bca.JPG', 'approved', '2020-06-17 08:46:36', '2020-07-04 07:45:28'),
(2, 2, '2020-06-21', '2020-08-03', '1592719765180-bri.jpg', 'approved', '2020-06-21 06:09:25', '2020-07-04 07:45:34');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `subscribe` tinyint(1) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `fullName`, `email`, `password`, `gender`, `phone`, `address`, `subscribe`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'Muhammad Rizki Akbar', 'rizkyakbar1511@gmail.com', '$2b$10$VL62j/2sfRH5aeAqKMcKPOKzbwHYA6DJ7udojdjKjg3IxWxv6wTJ.', 'male', '083802595929', 'Jl.Sako Baru, Perum. Alam Sako Blok A11', 1, 1, '2020-06-17 08:18:23', '2020-07-04 07:45:28'),
(2, 'Deni Arman', 'deni@dumbflix.com', '$2b$10$ca38nN0qTos.RbqxixJZd.Zg3JN/NT5NEtlliCAHuO/bdpzwAE7X2', 'male', '0812345678901', 'Jl.11 Ulu Ampera, Palembang', 1, 0, '2020-06-17 08:26:51', '2020-07-04 07:45:34'),
(17, 'M Iqbal Alexander', 'iqbal@dumbflix.com', '$2b$10$1u8nSfp4btpY70moiio1xeAbkHQImizyANOTfJHUGYxlALbBtRFMm', 'male', '081273294728', 'Jl. Kenten Azhar No. 10', 0, 0, '2020-07-03 05:03:16', '2020-07-03 05:03:16'),
(18, 'Irvan Immaduddin', 'irvan@dumbflix.com', '$2b$10$lQcLRTHjct7KGABG1EafcuBs6DnhR4qNDNbGbSx3blEKpEhTxHLSy', 'male', '081238471923', 'Jl. Kalidoni, No 15', 0, 0, '2020-07-03 05:04:49', '2020-07-03 05:04:49'),
(19, 'Brigita Nabila', 'brigita@dumbflix.com', '$2b$10$4fKTn9u/tPKnlakybyCR5Oj/pA03V4IIWK2WsAwRqvGA4CA3KHJOu', 'female', '0858025949238', 'Jl. Matador No 300', 0, 0, '2020-07-10 07:36:54', '2020-07-10 07:36:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Categories`
--
ALTER TABLE `Categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Episodes`
--
ALTER TABLE `Episodes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `filmId` (`filmId`);

--
-- Indexes for table `Films`
--
ALTER TABLE `Films`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `Transactions`
--
ALTER TABLE `Transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Categories`
--
ALTER TABLE `Categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Episodes`
--
ALTER TABLE `Episodes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `Films`
--
ALTER TABLE `Films`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `Transactions`
--
ALTER TABLE `Transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Episodes`
--
ALTER TABLE `Episodes`
  ADD CONSTRAINT `Episodes_ibfk_1` FOREIGN KEY (`filmId`) REFERENCES `Films` (`id`);

--
-- Constraints for table `Films`
--
ALTER TABLE `Films`
  ADD CONSTRAINT `Films_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `Categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Transactions`
--
ALTER TABLE `Transactions`
  ADD CONSTRAINT `Transactions_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
