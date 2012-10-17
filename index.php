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
			<h1 class="title">RED|DI<span style="color: #000;">SH</span></h1>
			<div class="app_block">
				<span class="app_block_title">Redis Settings: </span>
				<span class="block_button" id="redis_settings">+</span><br />
				<span id="settings_display"></span>
				<div class="redis_settings" style="display: none;">
					<br />
					<strong>Host name:</strong><br />
					<input type="text" name="hostname" /><br />
					<strong>Port:</strong><br />
					<input type="text" name="port" /><br />
					<input type="button" value="Connect" name="connect" />
				</div>
			</div>
			<hr />
			<div class="tab_headers">
				<div class="tab selected">
					<span class="app_block_title" id="manual_head">Manual Entry</span>
				</div>
				<div class="tab unselected">
					<span class="app_block_title" id="scripted_head">Scripted Entry</span>
				</div>
			</div>
			<div class="app_block" id="tabs">
				<div class="tab_body selected_body" id="manual_body">
					<p>This is the manual entry option.</p>
				</div>
				<div class="tab_body unselected_body" id="scripted_body">
					<p>This is the scripted entry option.</p>
				</div>
			</div>
		</div>
	</body>
</html>
