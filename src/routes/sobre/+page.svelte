<section class="container max-w-7xl mx-auto my-16 text-white">
	<div>
		<!-- <div class="col-span-full text-center mt-10"> -->
		<h1 class="text-center text-6xl max-sm:text-4xl max-md:text-5xl mt-4">Sobre:</h1>
	</div>
	<!-- ABOUT US 1 -->
	<div class="gcontainer gap-2 mt-10 flex flex-col items-center">
		<div class="snip1374 aspect-square max-sm:w-5/6 max-md:w-3/6 mx-auto">
			<a href="/sobre">
				<img
					src="https://cdn.shopify.com/s/files/1/2204/2817/files/featurette-10-1000x1000.jpg?98122347912348223"
					alt="sample57"
					class="w-full h-full object-cover"
					width="500"
					height="500"
				/>
			</a>
		</div>

		<div class="p-2 text-center">
			<p class="text-xl md:text-2xl lg:text-3xl" style="line-height: 1.4;">
				Bem-vindo ao meu mundo artesanal! Sou a Miriam, criadora apaixonada de bijuterias e
				cartonagens únicas. Cada peça reflete qualidade e atenção aos detalhes, adicionando um toque
				especial ao seu estilo. Entrega em todo o Brasil, consulte o frete
				<a
					href="https://www2.correios.com.br/sistemas/precosPrazos/"
					class="text-blue-500 hover:underline">aqui</a
				>. Negócios diretos pelo WhatsApp, pagamento via Pix. Explore minha variedade artística e
				entre em contato para encomendas personalizadas. Obrigada por apoiar o artesanato!
			</p>
		</div>
	</div>
	<!-- END ABOUT US 1 -->

	<div class="clear-both" />
	<hr class="my-16" />
	<!-- ABOUT US 3 -->
	<div class="text-center mb-10 p-0">
		<h1 class="text-5xl font-bold">Conheça os meus produtos:</h1>
	</div>
	<div class="flex flex-wrap justify-center items-center gap-7">
		<div class="max-w-sm mx-2 my-4">
			<figure>
				<a href="/sobre">
					<img
						src="https://cdn.shopify.com/s/files/1/2204/2817/files/hottest_trends_2-0078.jpg?1369754927576680618"
						alt="sampl45"
						class="w-full"
						width="500"
						height="500"
					/></a
				>
				<figcaption class="mt-5">
					<h2 class="text-2xl lg:text-3xl leading-relaxed text-center">Bijuterias</h2>
				</figcaption>
			</figure>
		</div>
		<div class="max-w-sm mx-2 my-4">
			<figure>
				<a href="/sobre">
					<img
						src="https://cdn.shopify.com/s/files/1/2204/2817/files/budget_friendly_ideas_3-0078.jpg?15005372342585381625"
						alt="sample50"
						class="w-full"
						width="500"
						height="500"
					/></a
				>
				<figcaption class="mt-5">
					<h2 class="text-2xl lg:text-3xl leading-relaxed text-center">Cartonagens</h2>
				</figcaption>
			</figure>
		</div>
		<div class="max-w-sm mx-2 my-4">
			<figure>
				<a href="/sobre">
					<img
						src="https://cdn.shopify.com/s/files/1/2204/2817/files/custom_proposals_2-0078.jpg?1369754927576680618"
						alt="sample46"
						class="w-full"
						width="500"
						height="500"
					/>
				</a>
				<figcaption class="mt-5">
					<h2 class="text-2xl lg:text-3xl leading-relaxed text-center">Artesanato</h2>
				</figcaption>
			</figure>
		</div>
	</div>
	<!-- END ABOUT US 3 -->
</section>

<style>
	.snip1374 {
		overflow: hidden;
		border-radius: 50%;
	}

	.snip1374 :img {
		-webkit-transition: all 2s ease-out;
		transition: all 2s ease-out;
		-webkit-transform: scale(1.2);
		transform: scale(1.2);
	}

	.snip1374:hover :img,
	:img {
		-webkit-transform: scale(1);
		transform: scale(1.1);
	}

	.gcontainer {
		display: grid;
		grid-template-columns: 0.7fr 1.3fr;
		gap: 10px;
		grid-auto-flow: row;
		justify-items: stretch;
	}

	/* Tablet styles */
	@media (max-width: 1200px) {
		.gcontainer {
			grid-template-columns: 1fr 1fr;
		}
	}
	/* Tablet styles */
	@media (max-width: 768px) {
		.gcontainer {
			grid-template-columns: 1fr;
		}
	}
</style>
