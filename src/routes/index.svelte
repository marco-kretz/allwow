<script context="module">
    export async function load({ fetch }) {
        const res = await fetch('/api.json');

        if (res.ok) {
            return { props: { data: await res.json() } };
        }

        return { status: res.status, error: new Error() };
    }
</script>

<script>
    export let data;
</script>

<h2 class="text-white text-center mb-4">Addon-Manager</h2>

<div class="row row-cols-2 row-cols-md-4 g-3">
    {#each data.addonManagers as manager}
        <div class="col-3">
            <div class="card text-white bg-dark">
                <img src={manager.image} class="card-img-top manager-logo p-2" style="background-color: {manager.bgColor}" height="70px" width="auto" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-center">{manager.name}</h5>
                    {#if manager.pros}
                        <ul>
                            {#each manager.pros as pro}
                                <li>✔️ {pro}</li>
                            {/each}
                        </ul>
                    {/if}

                    {#if manager.cons}
                        <ul>
                            {#each manager.cons as con}
                                <li>❌ {con}</li>
                            {/each}
                        </ul>
                    {/if}
                    <a href={manager.url} class="btn btn-warning d-block" ref="noopener" target="_blank">Website</a>
                </div>
            </div>
        </div>
    {/each}
</div>
