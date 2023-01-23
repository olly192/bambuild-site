<script>
    export let small = false;
    export let className = "";
</script>

<div role="status" class="animate-pulse rounded-lg flex justify-center items-center bg-gray-700 w-full {small ? 'h-32' : 'h-48'} {className}">
    <i class="text-6xl fa-solid fa-image"></i>
</div>