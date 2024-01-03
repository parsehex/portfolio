import { Logo, NavbarTwoColumns, Section } from 'astro-boilerplate-components';

const TheLogo = ({ name = 'Astro' }) => (
	<Logo
		icon={
			<svg
				className="mr-1 h-10 w-10"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				style={{
					filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.5))',
				}}
			>
				<style>
					{`
            .bar { transition: fill 0.3s ease; }
            .bar:hover { fill: #63b3ed; }
            .base-line { stroke: #63b3ed; }
          `}
				</style>
				<path d="M0 0h24v24H0z" stroke="none"></path>
				<rect
					x="3.5"
					y="12"
					width="5"
					height="8"
					rx="1"
					className="bar"
					fill="#4fd1c5"
				></rect>
				<rect
					x="9.5"
					y="8"
					width="5"
					height="12"
					rx="1"
					className="bar"
					fill="#68d391"
				></rect>
				<rect
					x="15.5"
					y="4"
					width="5"
					height="16"
					rx="1"
					className="bar"
					fill="#fedf63"
				></rect>
				<path d="M4.5 20h15" className="base-line"></path>
			</svg>
		}
		name={name}
	/>
);

const Navbar = () => (
	<Section>
		<NavbarTwoColumns>
			<a href="/">
				<TheLogo name="Thomas Mays" />
			</a>

			{/* <NavMenu> */}
			{/* <NavMenuItem href="/posts/">Blogs</NavMenuItem> */}
			{/* <NavMenuItem href="https://github.com/parsehex" target="_blank">
					GitHub
				</NavMenuItem> */}
			{/* <NavMenuItem href="/">Twitter</NavMenuItem> */}
			{/* </NavMenu> */}
		</NavbarTwoColumns>
	</Section>
);

export { Navbar };
