<script>
    import { page } from '$app/stores';
    import Footer from "$lib/components/Footer.svelte";
    export let breadcrumb = false
    let breadcrumbs = $page.route.id.split('/').slice(1)
    let crumbData = {
        'shop': {title: 'Shop', href: '/shop'},
        'product': {title: 'Product', href: ''},
        'lightbox': {title: 'Lightbox', href: ''},
        'christmas-bundle': {title: 'Lightbox Christmas Bundle', href: '/shop/product/lightbox/christmas-bundle'},
    }
    let crumbs = breadcrumbs.map(item => crumbData[item] || item)
</script>

<div class="p-8 mt-16">
    {#if breadcrumb}
        <div class="text-sm breadcrumbs">
            <ul>
                {#each crumbs as {title, href}}
                    {#if href}
                        <li><a href="{href}">{title}</a></li>
                    {:else}
                        <li>{title}</li>
                    {/if}
                {/each}
            </ul>
        </div>
    {/if}
    <slot/>
</div>
<Footer/>