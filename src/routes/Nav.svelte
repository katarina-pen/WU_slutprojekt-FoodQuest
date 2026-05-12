	<div class="relative">
		<img src={navbar} alt="Meny bar" />

		<div class="foodPlaces text-2xl"><a href="/foodPlaces">Restauranger</a></div>
		<div class="start text-2xl"><a href="/home">Start</a></div>
		<div class="info text-2xl"><a href="/info">Info</a></div>
		<div class="help text-2xl"><a href="/help">Hjälp</a></div>
	</div>

	<div id = "clock" class=" clockDisplay row-start-4 col-span-full text-2xl">00:00</div>



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
    .clockDisplay {
        position: absolute;
        top: 12px;
        left: 1180px;
	}

	div {
		font-family: 'VT323', serif;
	}
</style>

<script>
    
    import { onMount } from 'svelte';

     onMount(() => {
        function updateClock() {
        const now = new Date();

       

        let hour = now.getHours();
        let minutes = now.getMinutes();
        let second = now.getSeconds();

        

        hour = hour < 10 ? "0" + hour : hour;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        second = second < 10 ? "0" + second : second;

        const timeString = `${hour} : ${minutes}`;
        document.getElementById("clock").textContent = timeString;

    }
    updateClock();
    setInterval(updateClock, 1000);
    });

	import navbar from '$lib/img/w95-nav-blank.svg'


 </script>

