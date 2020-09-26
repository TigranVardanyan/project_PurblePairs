<!DOCTYPE html>
<html lang="en">
<?php require_once('head.php') ?>
<body>

	<div class="container">
		<section class="sec_start">
			<div class="row">
				<div class="col d-flex justify-content-center">
					<form  name="game" class="flex-column align-items-center justify-content-center d-flex">
						<p>Difficulty level :</p>
						<div>
							<input type="radio" checked="" name="difficulty_level" id="game_easy" value="game_easy">
							<label for="easy_game">Easy</label>
              <input type="radio" name="difficulty_level" id="game_normal" value="game_normal">
              <label for="hard_game">Normal</label>
              <input type="radio" name="difficulty_level" id="game_hard" value="game_hard">
              <label for="hard_game">Hard</label>
						</div>
						<p>Area type :</p>
						<div>
							<input type="radio" checked="" name="arena_type" id="arena_easy" value="arena_easy">
							<label for="6_game"> 6x8 </label> |
              <input type="radio" name="arena_type" id="arena_normal" value="arena_normal">
              <label for="8_game"> 8x10 </label> |
              <input type="radio" name="arena_type" id="arena_hard" value="arena_hard">
              <label for="8_game"> 10x12 </label>
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
		</section>
	</div>
	
	<script src="js/script.js"></script>
</body>
</html>




