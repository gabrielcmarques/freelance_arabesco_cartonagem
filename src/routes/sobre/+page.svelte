<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="container max-w-7xl mx-auto">
	<div class="col-span-full text-center mt-10">
		<h2 class="text-3xl font-bold">– About Us –</h2>
	</div>
	<!-- BEGIN ABOUT US 1 -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		<div class="col-span-12 md:col-span-6 mt-10">
			<figure class="snip1374">
				<a href="#">
					<img
						src="https://cdn.shopify.com/s/files/1/2204/2817/files/featurette-10-1000x1000.jpg?98122347912348223"
						alt="sample66"
					/>
				</a>
			</figure>
			<div class="">
				<p class="text-4xl mt-20">
					We know how important it is to make a meaningful connection with your customer or consumer
					and that the right promotional product is part of the equation. The Swag Team at Active
					International is your dedicated resource for branded premiums, corporate gifts, and
					promotional items.
				</p>
			</div>
		</div>
	</div>
	<!-- END ABOUT US 1 -->

	<!-- ABOUT US  2 -->
	<div class="clear-both" />
	<hr class="my-8" />
	<div class="grid grid-cols-12 gap-8">
		<div class="col-span-12 md:col-span-6 md:col-start-7">
			<div class="info-text right md:text-right p-8 md:p-0">
				<p class="text-xl">
					With more than a decade of experience working with media companies, retailers, and
					manufacturers, our goal is to make sure your experience is exceptional, whether we’re
					recommending new ideas, managing creative, or ensuring fulfillment.
				</p>
			</div>
		</div>
		<div class="col-span-12 md:col-span-6 md:col-end-13">
			<div class="col-span-full">
				<figure class="snip1374">
					<a href="#"
						><img
							src="https://cdn.shopify.com/s/files/1/2204/2817/files/featurette-5-1000x1000.jpg?98122347912348223"
							alt="sample57"
						/></a
					>
				</figure>
			</div>
		</div>
	</div>
	<!-- END ABOUT US 2 -->
	<!-- ABOUT US 3 -->
	<div class="clear-both" />
	<hr class="my-8" />
	<div class="grid grid-cols-1 md:grid-cols-3 text-center pt-12">
		<h3 class="text-2xl pb-6 text-uppercase col-span-full">Contact us today for:</h3>
		<div class="col-span-12 md:col-span-4">
			<figure class="snip0078 blue">
				<img
					src="https://cdn.shopify.com/s/files/1/2204/2817/files/hottest_trends_2-0078.jpg?1369754927576680618"
					alt="sampl45"
				/>
				<figcaption>
					<h2>The Hottest <span> Trends</span></h2>
				</figcaption>
				<a href="#" />
			</figure>
		</div>
		<div class="col-span-12 md:col-span-4">
			<figure class="snip0078 red">
				<img
					src="https://cdn.shopify.com/s/files/1/2204/2817/files/budget_friendly_ideas_3-0078.jpg?15005372342585381625"
					alt="sample50"
				/>
				<figcaption>
					<h2>Budget Friendly <span>Ideas</span></h2>
				</figcaption>
				<a href="#" />
			</figure>
		</div>
		<div class="col-span-12 md:col-span-4">
			<figure class="snip0078 yellow">
				<img
					src="https://cdn.shopify.com/s/files/1/2204/2817/files/custom_proposals_2-0078.jpg?1369754927576680618"
					alt="sample46"
				/>
				<figcaption>
					<h2>Customized <span> Proposals</span></h2>
				</figcaption>
				<a href="#" />
			</figure>
		</div>
	</div>
	<!-- END ABOUT US 3 -->
</div>

<style>
	@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
	@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600|Oswald:600,700');
	figure.snip0078 {
		font-family: 'Oswald', Arial, sans-serif;
		color: #fff;
		position: relative;
		float: left;
		margin: 10px 1%;
		min-width: 220px;
		max-width: 350px;
		max-height: 310px;
		width: 100%;
		text-align: center;
	}

	figure.snip0078 * {
		-webkit-box-sizing: padding-box;
		box-sizing: padding-box;
	}

	figure.snip0078 img {
		opacity: 1;
		max-width: 100%;
		border: 10px solid #000000;
		-webkit-transition: all 0.3s;
		transition: all 0.3s;
		-webkit-transform: scale(0.85);
		transform: scale(0.85);
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
	}

	figure.snip0078 figcaption {
		bottom: 0;
		width: 60%;
		right: 0;
		position: absolute;
		background: #000000;
		padding: 12px;
		-webkit-transition: all 0.3s;
		transition: all 0.3s;
		-webkit-transform: translateY(0);
		transform: translateY(0);
		box-shadow: 0 0px 10px -10px #000000;
	}

	figure.snip0078 figcaption h2,
	figure.snip0078 figcaption p {
		margin: 0;
		color: #ffffff;
	}

	figure.snip0078 figcaption h2 {
		font-weight: 400;
		text-transform: uppercase;
	}

	figure.snip0078 figcaption h2 span {
		font-weight: 800;
	}

	figure.snip0078 figcaption p {
		font-size: 0.9em;
		font-weight: 500;
		opacity: 0.65;
	}

	figure.snip0078 a {
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		position: absolute;
		z-index: 1;
	}

	figure.snip0078.blue figcaption {
		background: #315e95;
	}

	figure.snip0078.blue img {
		border: 10px solid #315e95;
	}

	figure.snip0078.red figcaption {
		background: #81261d;
	}

	figure.snip0078.red img {
		border: 10px solid #81261d;
	}

	figure.snip0078.yellow figcaption {
		background: #a85913;
	}

	figure.snip0078.yellow img {
		border: 10px solid #a85913;
	}

	figure.snip0078:hover figcaption,
	figure.snip0078.hover figcaption {
		-webkit-transform: translateY(-8px);
		transform: translateY(-8px);
		box-shadow: 0 15px 15px -15px #000000;
	}

	figure.snip0078:hover.blue img,
	figure.snip0078.hover.blue img {
		border: 10px solid #2980b9;
	}

	figure.snip0078:hover.red img,
	figure.snip0078.hover.red img {
		border: 10px solid #c0392b;
	}

	figure.snip0078:hover.yellow img,
	figure.snip0078.hover.yellow img {
		border: 10px solid #e67e22;
	}

	.snip1374 {
		position: relative;
		float: left;
		overflow: hidden;
		margin: 10px 1%;
		min-width: 240px;
		max-width: 500px;
		width: 100%;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
		border-radius: 50%;
	}

	.snip1374 img {
		max-width: 100%;
		vertical-align: top;
		-webkit-transition: all 2s ease-out;
		transition: all 2s ease-out;
		-webkit-transform: scale(1.4);
		transform: scale(1.4);
	}

	.snip1374:hover img,
	.snip1374.hover img {
		-webkit-transform: scale(1);
		transform: scale(1);
	}
</style>
