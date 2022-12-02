<script>
    import "../app.postcss";
    import "../lib/css/styles.css"
    import "flowbite/dist/flowbite.css";
    import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar>
    <slot/>
</Navbar>