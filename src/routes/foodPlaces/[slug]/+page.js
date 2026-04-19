import { foodPlaces } from "$lib/foodPlaces";

export function load ({params}) {
    const foodPlace = foodPlaces.find(r => r.slug === params.slug);
    return {foodPlace};
}