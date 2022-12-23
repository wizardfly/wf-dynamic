<!--
// - - - - - - - - - - - - - - - - - - - - - - -
// W F D Y N A M I C [single]
// - - - - - - - - - - - - - - - - - - - - - - -
// deploy > v.00bond
// a wizardfly
// www.wizrdfly.rf.gd
// - - - - - - - - - - - - - - - - - - - - - - -
// #wf-202212091959
// #wf-202212092010
// - - - - - - - - - - - - - - - - - - - - - - -
-->
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- head -->
        <meta charset="utf-8" />
        <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" type="image/ico" href="img/favicon.ico" />

        <!-- fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&display=swap" rel="stylesheet" />

        <!-- icons -->
        <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-bold-rounded/css/uicons-bold-rounded.css"/>

        <!-- styles -->
        <link rel="stylesheet" href="css/styles.css" />

        <title>WF-Dynamic</title>
    </head>
    <body class="home">

        <!-- header -->
        <header class="section header" name="header">
            <div class="grid">
                <div class="left">
                    <!-- brand -->
                    <a href="index.html" title="WF-Dynamic" class="brand">
                        WF-Dynamic
                    </a>
                </div>
                <div class="right">
                    <!-- menu -->
                    <nav class="menu">
                        <ul>
                            <li>
                                <a href="home" title="Home">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="page-one" title="Page One">
                                    One
                                </a>
                            </li>
                            <li>
                                <a href="page-one#box-blue" title="Page One - Box Blue">
                                    One - Blue
                                </a>
                            </li>
                            <li>
                                <a href="page-two" title="Page Two">
                                    Two
                                </a>
                            </li>
                            <li>
                                <a href="page-two#box-red" title="Page Two - Box Red">
                                    Two - Red
                                </a>
                            </li>
                            <li>
                                <a href="page-three" title="Page Three">
                                    Three
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

        <!-- ::::::::::::::::: -->
        <!-- :::: SLIDER ::::: -->
        <!-- ::::::::::::::::: -->
        <!-- slider STYLES -->
        <link rel="stylesheet" type="text/css" href="css/slick.css"/>
        <link rel="stylesheet" type="text/css" href="css/slick-theme.css"/>

        <!-- slider BOXES -->
        <!-- <section class="section sld">
            <div class="grid">
                <div class="boxSld">
                    <div>
                        <h3>
                            SLD 01
                        </h3>
                    </div>
                    <div>
                        <h3>
                            SLD 02
                        </h3>
                    </div>
                    <div>
                        <h3>
                            SLD 03
                        </h3>
                    </div>
                    <div>
                        <h3>
                            SLD 04
                        </h3>
                    </div>
                    <div>
                        <h3>
                            SLD 05
                        </h3>
                    </div>
                </div>
            </div>
        </section> -->

        <!-- slider SCRIPTS -->
        <script type="text/javascript" src="js/jquery-1.11.0.min.js"></script>
        <script type="text/javascript" src="js/jquery-migrate-1.2.1.min.js"></script>
        <script type="text/javascript" src="js/slick.min.js"></script>

        <!-- slider FUNCTIONS -->
        <script>
            /*
            $('.boxSld').slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true,
                infinite: true,
                arrows: true,
                // centerMode: true,
                // autoplay: true,
                // autoplaySpeed: 2000,
            });
            */
        </script>
        <!-- ::::::::::::::::: -->

        <!-- <section class="section block">
            <div class="grid">
                <img src="img/loader.gif" alt=""/>
            </div>
        </section> -->

		<?php
			// echo $_SERVER['REQUEST_URI'];
			// echo "<br/>";
			// print_r(explode("/", $_SERVER['REQUEST_URI']));

			// var_dump($_GET);

			// echo '<hr>';

			// echo '<a href="sobre">Sobre</a>';
			// echo '<a href="test-adv">Test ADV</a>';

			// echo '<hr>';

			if ($_GET) {
				$url = explode('/', $_GET['url']);

				//require_once 'api/pages/'.$url[0].'.php';

				// CHANGE TO: GET "OBJECT 'pages.json'"


				// Read the JSON file
				$json = file_get_contents('api/pages.json');

				// Decode the JSON file
				// $json_data = json_decode($json, true);

				// Display data
				// print_r($json_data);

				// foreach(json_decode($json) as $key => $value) {
				// 	echo "$key = $value<br>";
				// }

				echo '<script>';
				echo 'window.wfdynamic = ' . $json . ';';
				echo '</script>';
			}
		?>

        <!-- wfDynamic -->
        <section class="wfDynamic">
            <!-- dynamic content -->
            <img src="img/loader.gif" alt=""/>
        </section>

        <!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quibusdam ex nihil quisquam dignissimos recusandae laudantium iure fuga eligendi in. Ducimus architecto veniam quasi, numquam nemo, labore odio. Autem, reprehenderit. -->

        <!-- footer -->
        <footer class="section footer" name="footer">
            <div class="grid">
                <p>
                    2k23 &copy;WF-Dynamic - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
            </div>
        </footer>

        <!-- scripts -->
        <script src="js/functions.js"></script>

    </body>
</html>