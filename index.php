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
				<span class="block_button" id="redis_settings">-</span><br />
				<span class="status_display" id="redis_test_result"></span>
				<div class="redis_settings">
					<br />
					<strong>Host name:</strong><br />
					<input type="text" name="hostname" /><br />
					<strong>Port:</strong><br />
					<input type="text" name="port" value="6379" /><br />
					<input type="button" value="Test Server" name="test_server" />
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
					<h2 class="title">Key-Value Data</h2>
					<span class="block_button" id="key_value_data">+</span>
					<span class="status_display" id="put_result"></span><br />
					<strong>Key:</strong><br />
					<input type="text" name="key" /><br />
					<strong>Value:</strong><br />
					<input type="text" name="value" /><br />
					<input type="button" value="Set" name="redis_put">
					
					<hr />
					
					<h2 class="title">Hash Map Data</h2>
					<span class="block_button" id="hash_map_data">+</span>
					<span class="status_display" id="map_result"></span><br />
					<strong>Map Name:</strong><br />
					<input type="text" name="key" /><br />
					<strong>Map entries</strong>
					<table id="map_entry">
						<tr>
							<td>
								<strong>Key</strong>
							</td>
							<td>
								<strong>Value</strong>
							</td>
						</tr>
						<tr>
							<td>
								<input type="text" name="key[]" />
							</td>
							<td>
								<input type="text" name="value[]" />
							</td>
						</tr>
					</table>
					
					<input type="button" value="Set" name="redis_map_put" />
				</div>
				<div class="tab_body unselected_body" id="scripted_body">
					<p>This is the scripted entry option.</p>
				</div>
			</div>
		</div>
	</body>
</html>
