<script>
    import "../styles/app.css";
</script>

<svelte:head>
    <title>ALLWOW</title>
</svelte:head>

<header>
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">ALLWOW</a>
        </div>
    </nav>
</header>

<main class="pt-4">
    <div class="container">
        <slot></slot>
    </div>
</main>

<footer></footer>
