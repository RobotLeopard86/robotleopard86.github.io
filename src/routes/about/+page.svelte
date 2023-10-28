<script lang="ts">
	import { navigate } from "$lib";
	import { onMount } from "svelte";
	import { page } from "$app/stores";

	onMount(() => {
		if($page.url.searchParams.get("what") == "yes") navigate("what");
	});
</script>

<h1 class="text-white text-7xl font-black text-center tracking-widest">ABOUT ME</h1>