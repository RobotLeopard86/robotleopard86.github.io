<script lang="ts">
	//Page imports
  	import Root from "./pages/Root.svelte";

	interface AppPage {
		path: string,
		component: ConstructorOfATypedSvelteComponent
	}

  	let currentPage: string = "/";

	let pages: AppPage[] = [
		{ path: "/", component: Root }
	]

	function changePage(page: string){
		if(pages.findIndex(search => search.path == page) != -1){
			currentPage = page;
		}
	}
</script>

<svelte:component this={ pages.find(page => page.path == currentPage).component } changePage={ changePage }/>