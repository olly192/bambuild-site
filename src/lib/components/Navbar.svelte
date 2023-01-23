<script>
    import { page } from '$app/stores';
    let navItems = [
        {name: 'Home',      link: '/',          icon: 'fas fa-house'},
        {name: 'Contact',   link: '/contact',   icon: 'fas fa-address-book'},
        {name: 'About',     link: '/about',     icon: 'fas fa-user-group'},
        // {name: 'Pricing',   link: '/soon',      icon: 'fas fa-money-bill-wave'}
    ]
    let drawerOpen = false
</script>

<div class="drawer">
    <input id="sidebar-drawer" type="checkbox" class="drawer-toggle" bind:checked={drawerOpen}/>
    <div class="drawer-content flex flex-col">
        <div class="w-full navbar bg-gray-800 fixed top-0 z-50">
            <div class="navbar-start">
                <div class="flex-none md:hidden">
                    <label for="sidebar-drawer" class="btn btn-square btn-ghost">
                        <i class="fas fa-bars text-xl"></i>
                    </label>
                </div>
                <a class="btn btn-ghost normal-case text-xl" href="/">
                    <img class="w-10 h-10" src="/images/logo.png">
                    BamBuild
                </a>
            </div>
            <div class="navbar-center hidden md:flex">
                <ul class="menu menu-horizontal p-0">
                    {#each navItems as {name, link, icon}}
                        <li>
                            <a class="btn btn-lg btn-ghost link {$page.url.pathname === link ? 'link-active' : 'link-inactive'}" href={link}>
                                <i class="{icon}"></i>{name}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
            <div class="navbar-end">
                <a class="btn btn-primary" href="/shop">
                    <i class="fas fa-shop mr-2"></i>Shop
                </a>
            </div>
        </div>
        <!-- Page Content -->
        <slot/>
    </div>
    <div class="drawer-side">
        <label for="sidebar-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 bg-base-100">
            <li class="w-100 flex items-end">
                <button class="btn btn-square btn-ghost p-0" on:click={() => drawerOpen = false}>
                    <i class="fas fa-times text-xl"></i>
                </button>
            </li>
            Sidebar content here
            {#each navItems as {name, link, icon}}
                <li>
                    <a on:click={() => drawerOpen = false} class="btn btn-lg btn-ghost link-sidebar {$page.url.pathname === link ? 'link-active' : 'link-inactive'}" href={link}>
                        <i class="{icon}"></i>{name}
                    </a>
                </li>
            {/each}
        </ul>

    </div>
</div>

<style>
    .link {
        @apply py-1 px-2 mx-2 h-10 min-h-8;
        @apply rounded-xl no-underline;
    }
    .link-sidebar {
        @apply py-1 px-2 mx-2 h-14 min-h-12;
        @apply rounded-xl no-underline;
    }
    .link-inactive {
        @apply text-gray-400 hover:text-white;
        @apply md:hover:text-white;
    }
    .link-active {
        @apply text-primary-400;
    }
</style>