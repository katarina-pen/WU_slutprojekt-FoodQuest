<h1 class="bg-amber-500 text-3xl">Restauranger</h1>

<ul> 

     <!-- <div class="dropdown">
        <button class="dropbtn">7-Eleven</button>
        <div class="dropdown-content">
            <div onclick={() => showAlert('HTML')}>HTML</div>
            <div onclick={() => showAlert('CSS')}>CSS</div>
            <div onclick={() => showAlert('JavaScript')}>JavaScript</div>
        </div>
    </div> -->

    <label>7-Eleven</label>
    <select id="7ElevenSelect" onchange={() => elevenChange()}>
        <!-- <option value="" disabledselected>7-Eleven</option> -->
        <option value="7Eleven-Centralstationen">Centralstationen </option>
        <option value="7Eleven-Korsetten">Korsetten</option>
        <option value="audi">Data Science</option>
    </select>

    {#each foodPlaces as foodPlace}
        <a href="/foodPlaces/{foodPlace.slug}">{foodPlace.namn}</a>
    {/each}

    <li>A&A pizzeria</li>
    <li>Bagelbaren</li>
    <li>Baguetteria No 1</li>
    <li>Benne Pastabar</li>
    <li>BROGYLLEN KONDITORI LANDALA</li>
    <li>Burger King FLERA PLATSER!!!</li>
    <li>Café Hedvalls</li>
    <li>Coop Konsum Avenyn</li>
    <li>Dahls Bageributik Gårda</li>
    <li>Golden Lee</li>
    <li>Golly!</li>
    <li>Happy Cup</li>
    <li>Indian Barbeque</li>
    <li>Jätte baguetter - Gunillas Baguetter</li> 
    <li>Kaffe Majas</li>
    <li>KFC</li> 
    <li>LEBANESE GRILLHOUSE</li>
    <li>Le Pain Francais</li> 
    <li>Max FLERA PLATSER!!!</li> 
    <li>Meat the Greek</li>
    <li>Naked Juice Bar</li>
    <li>Picadeli FLERA PLATSER!!!</li>
    <li>Pita Göteborg AB</li>
    <li>Pressbyrån</li>
    <li>Seaside</li> 
    <li>Soppa & Sunt</li>
    <li>Subway FLERA PLATSER!!!</li>
    <li>Sushi Vimi</li>
    <li>Sushi Wu</li>
    <li>TAJ MAHAL INDISK RESTAURANG</li>
    <li>Waffles & Shakes</li>

</ul>



<!-- <script src="foodList.js"></script> -->
 <script>
    import {elevenChange} from './foodList'
    import { foodPlaces } from "$lib/foodPlaces";
    
 </script>
