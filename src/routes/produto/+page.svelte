<section class="my-20 grid grid-cols-2 mx-auto py-5 max-w-5xl bg-white rounded-lg p-2 ">
	<div class="bg-white rounded-lg shadow-md">
		<div class="relative max-w-md flex items-center justify-center">
			<div class="photo-main rounded-lg">
				<img
					class="my-24 px-8"
					src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png"
					alt="green apple slice"
				/>
			</div>
		</div>
	</div>
	<div class="p-4">
		<div class="title">
			<h1 class="mb-1 text-4xl text-black">Delicious Apples</h1>
			<span class="text-secondary text-xs text-black">COD: 45999</span>
		</div>

		<div class="price mx-0 my-4 text-highlight">
			R$ <span class="pl-1 text-5xl text-red">7.93</span>
		</div>

		<div class="variant overflow-auto">
			<h3 class="mb-4">SELECT A COLOR</h3>
			<ul class="flex gap-2">
				<li class="w-15 h-15 border border-transparent rounded cursor-pointe">
					<img
						src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png"
						alt="green apple"
					/>
				</li>
				<li class="w-15 h-15 border border-transparent rounded cursor-pointe">
					<img
						src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png"
						alt="yellow apple"
					/>
				</li>
				<li class="w-15 h-15 border border-transparent rounded cursor-pointe">
					<img
						src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png"
						alt="orange apple"
					/>
				</li>
				<li class="w-15 h-15 border border-transparent rounded cursor-pointe">
					<img
						src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png"
						alt="red apple"
					/>
				</li>
			</ul>
		</div>

		<div class="description clear-left mt-8">
			<h3 class="mb-4">BENEFITS</h3>
			<ul class="text-sm list-disc pl-4">
				<li class="mb-2 text-black">Apples are nutritious</li>
				<li class="mb-2 text-black">Apples may be good for weight loss</li>
				<li class="mb-2 text-black">Apples may be good for bone health</li>
				<li class="mb-2 text-black">They're linked to a lower risk of diabetes</li>
			</ul>
		</div>

		<button
			class="buy--btn border-none font-bold mt-5 py-6 px-12 rounded-lg hover:shadow-2xl shadow-xl"
		>
			ADD TO CART
		</button>
	</div>
</section>

<style>
	/* ----- Variables ----- */
	:root {
		--color-primary: #4c4c4c;
		--color-secondary: #a6a6a6;
		--color-highlight: #ff3f40;
	}

	/* ----- Global ----- */
	* {
		box-sizing: border-box;
	}

	html,
	body {
		height: 100%;
	}

	body {
		display: grid;
		grid-template-rows: 1fr;
		font-family: 'Raleway', sans-serif;
		background-color: #01e37f;
	}

	h3 {
		font-size: 0.7em;
		letter-spacing: 1.2px;
		color: var(--color-secondary);
	}

	img {
		max-width: 100%;
		filter: drop-shadow(1px 1px 3px var(--color-secondary));
	}

	/* ----- Product Section ----- */

	/* ----- Photo Section ----- */

	.photo-main {
		background-color: #9be010;
		background: radial-gradient(#e5f89e, #96e001);
	}

	.photo-main img {
		filter: saturate(150%) contrast(120%) hue-rotate(10deg)
			drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));
	}

	/* ----- Informations Section ----- */

	.price {
		color: var(--color-highlight);
	}

	.variant li:first-child,
	.variant li:hover {
		border: 1px solid var(--color-secondary);
	}

	.buy--btn {
		letter-spacing: 1.3px;
		background-color: var(--color-highlight);
	}

	.buy--btn:active {
		transform: scale(0.95);
	}
</style>
