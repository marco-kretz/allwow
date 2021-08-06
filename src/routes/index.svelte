<script context="module">
	import { base } from '$app/paths';

	export async function load({ fetch }) {
		const res = await fetch(`${base}/api.json`);

		if (res.ok) {
			return { props: { data: await res.json() } };
		}

		return { status: res.status, error: new Error() };
	}
</script>

<script>
	export let data;
</script>

<div class="alert alert-warning text-center" role="alert">
	Hey there!<br />
	<strong>ALLWOW</strong> is a collection of ressources for World of Warcraft. Everything you need, all
	in one place.
</div>

<h2 class="text-white text-center mb-4" id="addon-managers">Addon Managers</h2>
<div class="row g-3">
	{#each data.addonManagers as manager}
		<div class="col-6 col-md-3">
			<div class="card text-white bg-dark" style="height: 100%">
				<img
					src={manager.image}
					class="card-img-top manager-logo p-2"
					style="background-color: {manager.bgColor}"
					height="70px"
					width="auto"
					alt="..."
				/>
				<div class="card-body d-flex flex-column">
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
					<div class="flex-fill d-flex flex-column justify-content-end">
						<a href={manager.url} class="btn btn-warning d-block" ref="noopener" target="_blank"
							>Website</a
						>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>

<div class="row g-3">
	<!-- General Websites -->
	<div class="col-6 col-md-4">
		<h2 class="text-white text-center m-4" id="discord-servers">General Websites</h2>
		<div class="list-group text-white bg-dark">
			{#each data.generalWebsites as site}
				<a
					href={site.url}
					class="list-group-item list-group-item-action bg-dark text-white"
					rel="noopener"
					target="_blank"
					title="Visit website"
				>
					{#if site.image}
						<img src={site.image} class="d-block" height="40px" width="auto" alt="Website Icon" />
					{:else}
						<span class="d-block site-title">{site.title}</span>
					{/if}

					{site.description}
				</a>
			{/each}
		</div>
	</div>

	<!-- Class Specifics -->
	<div class="col-6 col-md-4">
		<h2 class="text-white text-center m-4" id="discord-servers">Class Specific</h2>
		<div class="accordion" id="accordionExample">
			{#each data.classSpecifics as specific}
				<div class="accordion-item bg-dark text-white">
					<h2 class="accordion-header" id="headingOne">
						<button
							class="accordion-button bg-dark text-white"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#class-collapse-{specific.class}"
							aria-controls="class-collapse-{specific.class}"
						>
							<img src={specific.icon} class="class-icon" alt="{specific.class} Icon" />
							{specific.class}
						</button>
					</h2>
					<div
						id="class-collapse-{specific.class}"
						class="accordion-collapse collapse"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">
							<div class="list-group">
								{#each specific.links as link}
									<a
										href={link.url}
										class="list-group-item list-group-item-action"
										rel="noopener"
										target="_blank"
									>
										{link.title}
									</a>
								{/each}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
