import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<"svg">>;
	description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
	{
		title: "Easy to Use",
		Svg: require("@site/static/img/gxplus.png").default,
		description: (
			<>
				GX+ was designed from the ground up to be easily installed and used to
				get your buses running smoothly.
			</>
		),
	},
	{
		title: "Powered by Roblox-TS",
		Svg: require("@site/static/img/rbxts.png"),
		description: (
			<>
				GX+ uses the latest and greatest development tools to make GX+ just that
				much better
			</>
		),
	},
];

function Feature({ title, Svg, description }: FeatureItem) {
	return (
		<div className={clsx("col col--6")}>
			<div className="text--center">
				{/* <Svg className={styles.featureSvg} role="img" /> */}
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
