<style>
    a {
        font-family: "VT323", serif;
    }
</style>


<!-- <h1 class="bg-[#008080] text-3xl">Restauranger</h1> -->

<ul> 

     <!-- <div class="dropdown">
        <button class="dropbtn">7-Eleven</button>
        <div class="dropdown-content">
            <div onclick={() => showAlert('HTML')}>HTML</div>
            <div onclick={() => showAlert('CSS')}>CSS</div>
            <div onclick={() => showAlert('JavaScript')}>JavaScript</div>
        </div>
    </div> -->
    <div class= "flex flex-wrap relative">
        <img src="src/lib/img/w95-searchBar.svg" alt="Search bar" />
        <input class="border-none outline-none bg-transparent absolute top-1 left-12" type="text" id="myInput" onkeyup={() => search()} placeholder="Sök efter places.." title="Type in a name">
        <!-- <label>7-Eleven</label> -->
    </div>

    <ul id="myUL">
        <li class="text-2xl"><a href="/foodPlaces/coop">Coop Konsum Avenyn</a></li>
        <li class="text-2xl"><a href="/foodPlaces/golly">Golly!</a></li>
    </ul>

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

        <!-- <li class="text-2xl"><a href="/foodPlaces/coop">Coop Konsum Avenyn</a></li>
        <li class="text-2xl"><a href="/foodPlaces/golly">Golly!</a></li> -->
    </ul>

</ul>



<!-- <script src="foodList.js"></script> -->
<script>
    import {elevenChange} from './foodList'
    // import {search} from './foodList'

    import { foodPlaces } from "$lib/foodPlaces";

    // import { onMount } from 'svelte';
    // onMount(() => {
        function search() {
            var input, filter, ul, li, a, i, txtValue;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            ul = document.getElementById("myUL");
            li = ul.getElementsByTagName("li");
            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("a")[0];
                txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        }
    // });

    
</script>
