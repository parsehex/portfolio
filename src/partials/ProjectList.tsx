import {
	ColorTags,
	GradientText,
	// Project,
	Section,
	Tags,
} from 'astro-boilerplate-components';
import type { ReactNode } from 'react';

type IProjectProps = {
	img: {
		src: string;
		alt: string;
	};
	name: string;
	description: string;
	link: string;
	category: ReactNode;
	src?: string;
	date?: string;
};
const Project = (props: IProjectProps) => (
	<div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
		<div className="shrink-0">
			<a href={props.link} target="_blank">
				<img
					className="h-36 w-36"
					src={props.img.src}
					alt={props.img.alt}
					loading="lazy"
				/>
			</a>
		</div>
		<div>
			<div className="flex flex-col items-center gap-y-2 md:flex-row">
				<a className="hover:text-cyan-400" href={props.link} target="_blank">
					<div className="text-2xl font-bold">{props.name}</div>
				</a>
				<div className="ml-3 flex flex-wrap gap-2">{props.category}</div>
			</div>
			{props.date && (
				<>
					<span className="text-gray-400">{props.date}</span>
					{props.src && ' - '}
				</>
			)}
			{props.src && (
				<>
					{'('}
					<a
						className="text-small underline hover:text-cyan-400"
						href={props.src}
						target="_blank"
					>
						source code
					</a>
					{')'}
				</>
			)}

			<p className="mt-3 text-gray-400">{props.description}</p>
		</div>
	</div>
);

const ProjectList = () => (
	<Section
		title={
			<>
				Recent <GradientText>Projects</GradientText>
			</>
		}
	>
		<div className="flex flex-col gap-6">
			<Project
				name="Conway's Game of Life"
				date="2017"
				description="A vanilla JavaScript implementation of Conway's Game of Life, made as part of the FreeCodeCamp curriculum."
				link="https://parsehex.github.io/game-of-life/"
				src="https://github.com/parsehex/game-of-life"
				img={{
					src: '/assets/images/image-gameoflife-square.png',
					alt: 'Game of Life',
				}}
				category={
					<>
						<Tags color={ColorTags.LIME}>Web</Tags>
						<Tags color={ColorTags.GREEN}>FreeCodeCamp</Tags>
						<Tags color={ColorTags.YELLOW}>JavaScript</Tags>
						<Tags color={ColorTags.SKY}>Bootstrap</Tags>
					</>
				}
			/>
			<Project
				name="D3.js Bar Chart"
				date="Feb. 2017"
				description="A simple bar chart graphing the US's GDP from 1947 to 2015, made as part of the FreeCodeCamp curriculum."
				link="https://parsehex.github.io/bar-chart/"
				src="https://github.com/parsehex/bar-chart"
				img={{
					src: '/assets/images/image-barchartgdp.png',
					alt: 'Bar Chart screenshot',
				}}
				category={
					<>
						<Tags color={ColorTags.LIME}>Web</Tags>
						<Tags color={ColorTags.GREEN}>FreeCodeCamp</Tags>
						<Tags color={ColorTags.YELLOW}>JavaScript</Tags>
						<Tags color={ColorTags.VIOLET}>D3.js</Tags>
					</>
				}
			/>
			<Project
				name="Markdown Previewer"
				date="July 2017"
				description="A basic markdown previewer, made as part of FreeCodeCamp. Can edit multiple pages, uses LocalStorage to save data."
				link="https://parsehex.github.io/markdown-previewer/"
				src="https://github.com/parsehex/markdown-previewer"
				img={{
					src: '/assets/images/image-mdpreview.png',
					alt: 'Markdown Previewer screenshot',
				}}
				category={
					<>
						<Tags color={ColorTags.LIME}>Web</Tags>
						<Tags color={ColorTags.GREEN}>FreeCodeCamp</Tags>
						<Tags color={ColorTags.YELLOW}>JavaScript</Tags>
						<Tags color={ColorTags.SKY}>Bootstrap</Tags>
					</>
				}
			/>
			<Project
				name="Twitch.tv Channel Status"
				date="Feb. 2017"
				description="A simple app that shows the status of a Twitch.tv channel, made as part of the FreeCodeCamp curriculum."
				link="https://parsehex.github.io/twitch/"
				src="https://github.com/parsehex/twitch"
				img={{
					src: '/assets/images/image-twitch.png',
					alt: 'Twitch Channel app screenshot',
				}}
				category={
					<>
						<Tags color={ColorTags.LIME}>Web</Tags>
						<Tags color={ColorTags.GREEN}>FreeCodeCamp</Tags>
						<Tags color={ColorTags.YELLOW}>JavaScript</Tags>
						<Tags color={ColorTags.SKY}>Bootstrap</Tags>
					</>
				}
			/>
		</div>
	</Section>
);

export { ProjectList };
