<script>
    import { page } from '$app/stores';
    import Footer from "$lib/components/Footer.svelte";
    export let breadcrumb = false
    let crumbData = {
        'order': {
            'title': 'Order',
            'href': '',
            'lightbox': {
                'title': 'Lightbox',
                'href': '/order/lightbox'
            },
            'keyring': {
                'title': 'Keyring',
                'href': '/order/keyring'
            },
            'totebag': {
                'title': 'Tote Bag',
                'href': '/order/totebag'
            }
        },
        'shop': {
            'title': 'Shop',
            'href': '/shop',
            'product': {
                'title': 'Product',
                'href': '',
                'lightbox': {
                    'title': 'Lightbox',
                    'href': '/shop/product/lightbox'
                },
                'keyring': {
                    'title': 'Keyring',
                    'href': '/shop/product/keyring'
                },
                'totebag': {
                    'title': 'Tote Bag',
                    'href': '/shop/product/totebag'
                }
            }
        },
        'instructions': {
            'title': 'Instructions',
            'lightbox': {
                'title': 'Lightbox',
                'href': '/instructions/lightbox'
            }
        }
    }
    let crumbResolver = () => {
        let crumbs = []
        let breadcrumbs = $page.route.id.split('/').slice(1)
        let path = []
        breadcrumbs.forEach((item) => {
            path.push(item)
            let itemData = crumbData
            path.forEach((pathItem) => {
                itemData = itemData[pathItem]
            })
            crumbs.push({
                'title': itemData.title,
                'href': itemData.href
            })
        })
        return crumbs
    }
</script>

<div class="p-8 mt-16">
    {#if breadcrumb}
        <div class="text-sm breadcrumbs">
            <ul>
                {#each crumbResolver() as {title, href}}
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