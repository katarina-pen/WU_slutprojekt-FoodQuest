<script>
    let {data} = $props();
</script>


<style>
    h1,p {
        font-family: "VT323", serif;
        display: flex;
        justify-content: center;
        align-items: center;
    }


</style>

<h1 class="text-5xl">{data.foodPlace.namn}</h1>
<p class="text-[#FFFFFF] text-1xl">{data.foodPlace.adress}</p>
<p class="text-gray-800 p-8 text-2xl">{data.foodPlace.desc}</p>
<img class= "p-8 h-sm w-sm"src={data.foodPlace.img} alt="Bild på foodPlace" />
