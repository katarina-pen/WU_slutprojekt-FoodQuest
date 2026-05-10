	<div class="relative">
		<!-- <img src="src/lib/img/w95-nav-blank.svg" /> -->
		<img src={navbar} alt="Navbar" />

		<div class="foodPlaces text-2xl"><a href="/foodPlaces">Restauranger</a></div>
		<div class="start text-2xl"><a href="/home">Start</a></div>
		<div class="info text-2xl"><a href="/info">Info</a></div>
		<div class="help text-2xl"><a href="/help">Help</a></div>
	</div>

	<div id = "clock" class=" clockDisplay row-start-4 col-span-full text-2xl" >00:00</div>



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
        /* color: red; */
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
       
        // const target = new Date();
        // target.setHours(13, 30, 0); // sätt måltiden till 13:30:00
      
        // if (target < now) {
        //     target.setDate(target.getDate() + 1);
        // }
        // const diffSeconds = Math.floor((target - now) / 1000);
        // const hoursLeft = Math.floor(diffSeconds / 3600);
        // const minutesLeft = Math.floor((diffSeconds % 3600) / 60);
        // const secondsLeft = diffSeconds % 60;
       

        let hour = now.getHours();
        let minutes = now.getMinutes();
        let second = now.getSeconds();

        

        hour = hour < 10 ? "0" + hour : hour;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        second = second < 10 ? "0" + second : second;

        const timeString = `${hour} : ${minutes}`;
        // const timeLeftString = `${hoursLeft} : ${minutesLeft} : ${secondsLeft}`;
        document.getElementById("clock").textContent = timeString;
        // document.getElementById("timeLeft").textContent = timeLeftString;

    }
    updateClock();
    setInterval(updateClock, 1000);
    });

	import navbar from '$lib/img/w95-nav-blank.svg'


 </script>

