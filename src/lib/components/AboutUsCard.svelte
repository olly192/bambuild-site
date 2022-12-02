<script>
    export let index = 0
    export let title = "Title"
</script>

<div class="w-100 rounded-lg shadow-md bg-gray-800 border-gray-700">
    <div class="px-5 py-5">
        <div class="flex flex-row items-center">
            <h1 class="heading-1 font-mono mb-0">{index}</h1>
            <h3 class="heading-3 ml-6">{title}</h3>
        </div>
        <slot/>
    </div>
</div>