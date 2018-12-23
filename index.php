<!DOCTYPE html>
<html lang="en">
<?php require_once('head.php') ?>
<body>

	<div class="container">
		<section class="sec_start">
			<div class="row">
				<div class="col d-flex justify-content-center">
					<form  name="game" class="flex-column align-items-center justify-content-center d-flex">
						<p>Сложность игры :</p>
						<div>
							<input type="radio" checked="" name="hardly" id="easy_game" value="6">
							<label for="easy_game">Легко</label>
							<input type="radio" name="hardly" id="normal_game" value="4">
							<label for="normal_game">Нормально</label>
							<input type="radio" name="hardly" id="hard_game" value="2">
							<label for="hard_game">Сложно</label>
						</div>
						<p>Количество полей :</p> 
						<div>
							<input type="radio" checked="" name="cell" id="6_game" value="6">
							<label for="6_game"> 6 на 6 </label>
							<input type="radio" name="cell" id="8_game" value="7">
							<label for="8_game"> 7 на 7 </label>
							<input type="radio" name="cell" id="10_game" value="8">
							<label for="10_game"> 8  на 8 </label>
						</div>
						<div  class="start_game">Start</div>
					</form>
				</div>
			</div>

		</section>
		<section class="sec_game hide">
			<div class="row justify-content-center align-items-center">
				<div class="game_area"></div>
			</div>
			<p id="demo"></p>
		</section>
	</div>
	
	<script src="js/script.js"></script>
</body>
</html>




