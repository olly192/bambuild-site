<script>
    import ImagePlaceholder from "$lib/components/ImagePlaceholder.svelte";

    export let link = false
    export let title = "Product Title"
    export let columns = 1
    export let image = false
    export let small = false
</script>

<div class="rounded-lg shadow-md bg-gray-800 border-gray-700 flex flex-col justify-between max-w-2xl" style="grid-column: span {columns}">
    {#if link}
        <a href={link} class="h-full">
            <slot name="header">
                {#if image}
                    <img class="p-8 rounded-t-lg" style="height: inherit" src={image}/>
                {:else}
                    <ImagePlaceholder small={small}/>
                {/if}
            </slot>
        </a>
    {:else}
        <div class="h-full">
            <slot name="header">
                {#if image}
                    <img class="p-8 rounded-t-lg" style="height: inherit" src={image}/>
                {:else}
                    <ImagePlaceholder small={small}/>
                {/if}
            </slot>
        </div>
    {/if}
    <div class="{small ? 'px-3' : 'px-5'} {small ? 'pt-2' : 'pt-3'} {small ? 'pb-3' : 'pb-5'}">
        {#if link}
            <a href={link}>
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a>
        {:else}
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        {/if}
        <p class="font-normal text-gray-300"><slot/></p>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">
                <slot name="price"/>
            </span>
            {#if link}
                <a href={link} class="btn btn-sm btn-primary">View Product <i class="fas fa-arrow-right ml-2"></i></a>
            {:else}
                <button disabled class="btn btn-sm btn-primary">View Product <i class="fas fa-arrow-right ml-2"></i></button>
            {/if}
        </div>
    </div>
</div>
