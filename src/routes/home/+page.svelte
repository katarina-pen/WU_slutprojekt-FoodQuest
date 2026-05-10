<style>
    div {
        font-family: "VT323", serif;
        display: flex;
        justify-content: center;
        align-items: center;
    }


</style>


<div class="container">
    <img src="src/lib/img/w95-textBubble.svg" alt="Time left text bubble" class= "h-40 w-88 object-contain" >
    <div class="absolute right-164 top-25 text-[#FFFFFF]">Countdown till kl 13.30</div>
    <h3 class="absolute right-115 top-35">Ditt foodquest sker varje vardag från <br>kl. 10.30-13.30, se till att hinna med den!</h3>
    <div id = "timeLeft" class="row-start-5 col-span-full text-3xl absolute right-145 top-47">00:00:00</div>

</div>

<div class="flex justify-center">
    <iframe src="https://www.google.com/maps/d/embed?mid=1miPxSsYcJW_8GEh7R48ZjLySZF4C-5M&ehbc=2E312F" title="Map of all restaurants" style="border:5px solid #C3C3C3;" width="500" height="300"></iframe>
</div>



<script>
    
    import { onMount } from 'svelte';

     onMount(() => {
        function updateClock() {
        const now = new Date();
       
        const target = new Date();
        target.setHours(13, 30, 0); // sätt måltiden till 13:30:00
      
        if (target < now) {
            target.setDate(target.getDate() + 1);
        }
        const diffSeconds = Math.floor((target - now) / 1000);
        const hoursLeft = Math.floor(diffSeconds / 3600);
        const minutesLeft = Math.floor((diffSeconds % 3600) / 60);
        const secondsLeft = diffSeconds % 60;
       

        let hour = now.getHours();
        let minutes = now.getMinutes();
        let second = now.getSeconds();

        

        hour = hour < 10 ? "0" + hour : hour;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        second = second < 10 ? "0" + second : second;

        const timeString = `${hour} : ${minutes}`;
        const timeLeftString = `${hoursLeft} : ${minutesLeft} : ${secondsLeft}`;
        document.getElementById("clock").textContent = timeString;
        document.getElementById("timeLeft").textContent = timeLeftString;

    }
    updateClock();
    setInterval(updateClock, 1000);
    });

	import navbar from '$lib/img/w95-nav-blank.svg'
    import emptyBar from '$lib/img/w95-emptyBar.svg'


 </script>