import {
	GradientText,
	HeroAvatar,
	HeroSocial,
	Section,
} from 'astro-boilerplate-components';

const Hero = () => (
	<Section>
		<HeroAvatar
			title={
				<>
					Hi, I'm <GradientText>Thomas</GradientText> 👋
				</>
			}
			description={
				<>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus{' '}
					<a className="text-cyan-400 hover:underline" href="/">
						malesuada
					</a>{' '}
					nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit amet,{' '}
					<a className="text-cyan-400 hover:underline" href="/">
						consectetur
					</a>{' '}
					adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
				</>
			}
			avatar={
				<img
					className="h-80 w-64"
					src="/assets/images/avatar.svg"
					alt="Avatar image"
					loading="lazy"
				/>
			}
			socialButtons={
				<>
					<a href="https://github.com/parsehex" target="_blank">
						<HeroSocial
							src="/assets/images/github-icon.png"
							alt="GitHub icon"
						/>
					</a>
					{/* <a href="/">
						<HeroSocial
							src="/assets/images/twitter-icon.png"
							alt="Twitter icon"
						/>
					</a> */}
					{/* <a href="/">
						<HeroSocial
							src="/assets/images/facebook-icon.png"
							alt="Facebook icon"
						/>
					</a> */}
					{/* <a href="/">
						<HeroSocial
							src="/assets/images/linkedin-icon.png"
							alt="Linkedin icon"
						/>
					</a> */}
					{/* <a href="/">
						<HeroSocial
							src="/assets/images/youtube-icon.png"
							alt="Youtube icon"
						/>
					</a> */}
				</>
			}
		/>
		<p>
			<h2>Technologies I Use</h2>
			<ul className="ml-2">
				<li>
					<b>AI / Machine Learning</b> - Python
					<ul className="ml-4 list-inside">
						<li></li>
						<li>Diffusers, Transformers</li>
						<li>
							<b
								title={
									"These are tech that I've used in setting up AI projects."
								}
							>
								Project Setup
							</b>
							<ul className="ml-4 list-inside">
								<li>
									<a
										href="https://huggingface.co"
										target="_blank"
										title={'Hosts open source AI models'}
									>
										HuggingFace
									</a>
									: Source for models
								</li>
								<li>CUDA, PyTorch</li>
							</ul>
						</li>
					</ul>
				</li>
				<li>
					<b>Data Science</b> - Python
					<ul className="ml-4 list-inside">
						<li>Pandas</li>
						<li>PyQt6, PySide2</li>
					</ul>
				</li>
				<li>
					<b>Web</b> - HTML, CSS / SASS, JavaScript / TypeScript
					<ul className="ml-4 list-inside">
						<li>React, Vue</li>
						<li>Electron, NW.js</li>
					</ul>
				</li>
			</ul>
		</p>
	</Section>
);

export { Hero };
