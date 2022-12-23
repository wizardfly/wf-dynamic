<?php
    // $base_dir = __DIR__;
    // echo $base_dir
?>

<!--
// - - - - - - - - - - - - - - - - - - - - - - -
// W F D Y N A M I C [single]
// - - - - - - - - - - - - - - - - - - - - - - -
// deploy > v.00bond
// a wizardfly
// www.wizrdfly.rf.gd
// - - - - - - - - - - - - - - - - - - - - - - -
// #wf-202212091959
// #wf-202212231818
// - - - - - - - - - - - - - - - - - - - - - - -
-->
<!DOCTYPE html>
<html lang="en">
    <head>

        <?php include 'inc/head.php'; ?>

    </head>
    <body>

        <?php include 'inc/header.php'; ?>

		<?php
			if ($_GET) {
				$url = explode('/', $_GET['url']);

                // echo "<hr/>";
                // echo $url;

                // echo "<br/>";
                // echo $url[0];
                // echo "<hr/>";

                if ($url[0]) {
                    $filename = 'api/pages/' . $url[0] . '.json';

    				//require_once 'api/pages/'.$url[0].'.php';

                    // CHANGE TO: GET "OBJECT 'pages.json'"

    				// CHECK FILE
                    if (file_exists($filename)) {
                        // Read the JSON file
        				// $json = file_get_contents('api/pages.json');
                        $json = file_get_contents($filename);

        				// Decode the JSON file
        				// $json_data = json_decode($json, true);

        				// Display data
        				// print_r($json_data);

        				// foreach(json_decode($json) as $key => $value) {
        				// 	echo "$key = $value<br>";
        				// }

                        // if ($json) {
            				echo '<script>';
            				// echo 'window.wfdynamic = ' . $json . ';';
                            echo 'window.WFDynamic = ' . $json . ';';
            				echo '</script>';
                        // }
                    }
                }
			}
		?>

        <!-- wfDynamic -->
        <section class="wfDynamic">
            <!-- dynamic content -->
            <img src="img/loader.gif" alt=""/>
        </section>

        <?php include 'inc/footer.php'; ?>

        <?php include 'inc/scripts.php'; ?>

    </body>
</html>