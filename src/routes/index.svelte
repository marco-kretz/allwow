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

<h2>AddOn-Manager</h2>

<div class="row gx-3 gy-3">
    {#each data.addonManagers as manager}
        <div class="col-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{manager.name}</h5>
                    <p class="card-text">{manager.description}</p>
                    <a href={manager.url} class="btn btn-primary" ref="noopener" target="_blank">Download</a>
                </div>
            </div>
        </div>
    {/each}
</div>
