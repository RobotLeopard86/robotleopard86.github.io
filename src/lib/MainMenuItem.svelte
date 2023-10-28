<script lang="ts">
	import { SidebarItem } from "flowbite-svelte";
    import type { ComponentType } from "svelte";

	export let text: string;
	export let target: string;
	export let icon: ComponentType;
</script>

<SidebarItem class="font-bold text-slate-300 hover:bg-neutral-800 hover:text-slate-500 transition duration-75" label={ text } href={ target }>
	<svelte:fragment slot="icon">
		<svelte:component this={ icon } class="w-5 h-5 text-slate-300 transition duration-75" />
	</svelte:fragment>
</SidebarItem>