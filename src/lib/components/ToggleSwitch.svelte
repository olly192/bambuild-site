<script>
    export let checked = false;
</script>

<label>
    <input type="checkbox" class="sr-only peer" bind:checked>
    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-primary-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white peer-checked:after:bg-gray-800 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
    <span><slot/></span>
</label>

<style>
    label {
        @apply inline-flex relative items-center cursor-pointer;
    }
    span {
        @apply ml-3 text-sm font-medium;
    }
</style>