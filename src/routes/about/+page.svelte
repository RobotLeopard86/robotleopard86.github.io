<script lang="ts">
	import { navigate } from "$lib";
	import { onMount } from "svelte";
	import { page } from "$app/stores";

	onMount(() => {
		if($page.url.searchParams.get("what") == "yes") navigate("what");
	});
</script>

<h1 class="text-white text-7xl font-black text-center tracking-widest">ABOUT ME</h1>

<br />
<br />

<p class="text-white text-xl text-center font-light">
	Hi. I'm RobotLeopard86. I'm a passionate programmer and gamer.
	<br />
	I will soon be starting my own YouTube channel, and I'm excited to see you there!
	<br />
	Regarding gaming, I play singleplayer games mostly, usually puzzle, strategy, or platformers.
	<br />
	When programming, I most commonly use C++ and Java, but I also sometimes use Svelte (with TypeScript) and C#.
	<br />
	Some of my favorite games are Portal 2, Will You Snail, A Hat in Time, Plague Inc: Evolved, and Minecraft.
	<br />
	Okay, that's enough about me. Go check out the other parts of my site!
</p>