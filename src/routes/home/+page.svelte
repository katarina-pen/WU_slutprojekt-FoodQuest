<style>
    div {
        font-family: "VT323", serif;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .clockDisplay {
        position: absolute;
        top: 12px;
        left: 1180px;
        /* color: red; */
	}

</style>

<div id = "clock" class=" clockDisplay row-start-4 col-span-full text-2xl" >00:00</div>

<div class="container">
    <img src="src/lib/img/w95-textBubble.svg" alt="Time left text bubble" class= "h-40 w-88 object-contain" >
    <div class="fixed right-180 top-25 text-[#FFFFFF]">Time left x ?</div>
    <h3 class="fixed right-115 top-35">Ditt foodquest sker varje vardag från <br>kl. 10.30-13.30, se till att hinna med den!</h3>
    <div id = "timeLeft" class="row-start-5 col-span-full text-3xl fixed right-145 top-47">00:00:00</div>

</div>

<div class="flex justify-center">
    <iframe src="https://www.google.com/maps/d/embed?mid=1miPxSsYcJW_8GEh7R48ZjLySZF4C-5M&ehbc=2E312F" style="border:5px solid #C3C3C3;" width="500" height="300"></iframe>
</div>



 <script>
    
    import { onMount } from 'svelte';

     onMount(() => {
        function updateClock() {
        const now = new Date();
       
        const target = new Date();
        target.setHours(13, 30, 0); // sätt måltiden till 13:30:00
        //  if (diffSeconds < 0) {
        // target.setDate(target.getDate() + 1);
        // }
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

    //     function update_timeLeft(){
    //         // function updateClock() {
    //         const now = new Date();
    //         let hour = now.getHours();
    //         let minutes = now.getMinutes();
    //         let second = now.getSeconds();

    //         hour = hour < 10 ? "0" + hour : hour;
    //         minutes = minutes < 10 ? "0" + minutes : minutes;
    //         second = second < 10 ? "0" + second : second;

    //         const timeString = `${hour} : ${minutes} : ${second}`;
    //         const timeLeftString = `${13-hour} : ${30-minutes} : ${second}`;
    //         // document.getElementById("clock").textContent = timeString;
    //         document.getElementById("timeLeft").textContent = timeLeftString;
    //     }
    // update_timeLeft();
    // setInterval(update_timeLeft, 1000);

    });

   
    
    // import {updateClock} from './clock'

 </script>