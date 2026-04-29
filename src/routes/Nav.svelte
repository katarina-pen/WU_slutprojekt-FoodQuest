<div class="flex justify-around bg-[salmon]">
	<!-- <a href="/home">the quest</a> 
      <a href="/foodPlaces">restarunagnger</a> 
      <a href="/info">matkort info</a> 
      <a href="https://www.youtube.com/watch?v=DA7wDV4MbNo"> also mouse</a>  -->

	<div class="container">
		<img src="src/lib/img/w95-nav-blank.svg" />
		<div class="foodPlaces text-2xl"><a href="/foodPlaces">Restauranger</a></div>
		<div class="start text-2xl"><a href="/home">Start</a></div>
		<div class="info text-2xl">Info</div>
		<div class="help text-2xl">Help</div>
		<!-- <div class="centered">Centered</div> -->
	</div>
</div>

<style>
	.container {
		position: relative;
		text-align: center;
		color: white;
	}

	.foodPlaces {
		position: absolute;
		bottom: 15px;
		left: 150px;
		color: black;
	}

	.start {
		position: absolute;
		bottom: 15px;
		left: 55px;
		color: black;
	}

	.info {
		position: absolute;
		bottom: 15px;
		left: 320px;
		color: black;
	}

	.help {
		position: absolute;
		bottom: 15px;
		left: 400px;
		color: black;
	}

	/* .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  } */

	div {
		font-family: 'VT323', serif;
	}
</style>
