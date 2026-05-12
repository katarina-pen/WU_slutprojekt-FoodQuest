<style>
    a {
        font-family: "VT323", serif;
    }
</style>



<ul> 

 
    <div class= "flex flex-wrap relative">
        <img src="src/lib/img/w95-searchBar.svg" alt="Sök" />
        <input class="border-none outline-none bg-transparent absolute top-1 left-12" alt="Sökfält" type="text" id="myInput" onkeyup={() => search()} placeholder="Sök efter places.." title="Type in a name">
    </div>

    <ul id="myUL">
        <li class="text-2xl"><a href="/foodPlaces/coop">Coop Konsum Avenyn</a></li>
        <li class="text-2xl"><a href="/foodPlaces/golly">Golly!</a></li>
    </ul>

    <ul id= "myUL">
        <li>
            <select id="7ElevenSelect" onchange={() => elevenChange()}>
                <option value="7Eleven-all">7-Eleven </option>
                <option value="7Eleven-Centralstationen">Centralstationen</option>
                <option value="7Eleven-Korsetten">Korsetten</option>
            </select>
        </li>
   


    </ul>

</ul>



<script>
    import {elevenChange} from './foodList'

    import { foodPlaces } from "$lib/foodPlaces";


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

    
</script>
