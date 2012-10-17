<html>
	<head>
		<title>RedDish</title>
	</head>
	<link rel="stylesheet" href="red-dish.css" />
	<script type="text/javascript" language="javascript" src="jquery.js">
	</script>
	<script type="text/javascript" language="javascript" src="ready.js">
	</script>
	<body>
		<div class="body">
			<h1 class="title">RED|DI<span style="color: #bc084b;">SH</span></h1>
			<div class="app_block">
				<span class="app_block_title">Redis Settings: </span>
				<span class="block_button" id="redis_settings">+</span><br />
				<span id="settings_display"></span>
				<div class="redis_settings" style="display: none;">
					<br />
					<strong>Host name:</strong><br />
					<input type="text" name="hostname" /><br />
					<strong>Port:</string><br />
					<input type="text" name="port" /><br />
					<input type="button" value="Connect" name="connect" />
				</div>
			</div>
		</div>
	</body>
</html>
