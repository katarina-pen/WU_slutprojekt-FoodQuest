<style>
    font {
        font-family: "VT323", serif;
    }
</style>


<h1 class="bg-[#008080] text-3xl">Restauranger</h1>

<ul> 

     <!-- <div class="dropdown">
        <button class="dropbtn">7-Eleven</button>
        <div class="dropdown-content">
            <div onclick={() => showAlert('HTML')}>HTML</div>
            <div onclick={() => showAlert('CSS')}>CSS</div>
            <div onclick={() => showAlert('JavaScript')}>JavaScript</div>
        </div>
    </div> -->

    <input type="text" id="myInput" onkeyup={() => myFunction()} placeholder="Search for names.." title="Type in a name">
    <!-- <label>7-Eleven</label> -->

    <ul id= "myUL">
        <li>
            <select id="7ElevenSelect" onchange={() => elevenChange()}>
                <!-- <option value="" disabledselected>7-Eleven</option> -->
                <option value="7Eleven-all">7-Eleven </option>
                <option value="7Eleven-Centralstationen">Centralstationen</option>
                <option value="7Eleven-Korsetten">Korsetten</option>
                <!-- <option value="audi">Data Science</option> -->
            </select>
        </li>
        <!-- {#each foodPlaces as foodPlace}
            <a href="/foodPlaces/{foodPlace.slug}">{foodPlace.namn}</a>
        {/each} -->

        <li><a href="/foodPlaces/coop">Coop Konsum Avenyn</a></li>
        <li><a href="/foodPlaces/golly">Golly!</a></li>
    </ul>

</ul>



<!-- <script src="foodList.js"></script> -->
 <script>
    import {elevenChange} from './foodList'
    import {myFunction} from './foodList'

    import { foodPlaces } from "$lib/foodPlaces";
    
 </script>
