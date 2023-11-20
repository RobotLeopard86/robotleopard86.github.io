<script lang="ts">
  	import "../app.postcss";
	import { Navbar, NavBrand, NavUl, NavLi, CloseButton, Drawer, Sidebar, SidebarGroup, SidebarWrapper, Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-svelte";
	import { BarsOutline, HomeSolid, UserCircleOutline } from "flowbite-svelte-icons";
	import MainMenuItem from "$lib/MainMenuItem.svelte";
	import { cubicInOut } from "svelte/easing";

	let hideSideNav: boolean = true;
	let sideNavTransitionParams = {
		x: 320,
		duration: 500,
		easing: cubicInOut
	};
</script>

<Navbar fluid={true} class="px-2 sm:px-4 py-2.5 sticky w-full z-20 top-0 left-0 bg-gray-700">
	<NavBrand href="/">
		<img src="/static_content/pfp.png" class="mr-12 h-18 sm:h-24" alt="RobotLeopard86 Logo">
		<span class="font-black text-yellow-300 text-3xl">RobotLeopard86</span>
	</NavBrand>
	<NavUl>
		<NavLi on:click={ () => { hideSideNav = false; } }>
			<BarsOutline class="text-yellow-300 md:hover:text-white text-xl align-text-bottom" />
		</NavLi>
	</NavUl>
</Navbar>

<Drawer transitionType="fly" class="bg-neutral-800" placement="right" transitionParams={ sideNavTransitionParams } bind:hidden={ hideSideNav } id="sideNav">
	<div class="flex items-center">
		<h5 id="drawer-navigation-label-3" class="text-base font-semibold text-white">Main Menu</h5>
		<CloseButton on:click={() => (hideSideNav = true)} class="mb-4 text-white" />
	</div>
	<hr />
	<Sidebar>
		<SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded">
		  <SidebarGroup>
			<MainMenuItem text="Home" target="/" icon={ HomeSolid } />
			<MainMenuItem text="About" target="/about" icon={ UserCircleOutline } />
		  </SidebarGroup>
		</SidebarWrapper>
	  </Sidebar>
</Drawer>

<slot />

<Footer class="absolute bottom-0 left-0 z-20 w-full bg-neutral-900">
	<FooterCopyright href="/" by="RobotLeopard86" year={ 2023 } />
	<span class="text-gray-400 font-light">Created using SvelteKit</span>
</Footer>

<style lang="postcss">
	:global(html){
		background-color: #171717;
	}
</style>