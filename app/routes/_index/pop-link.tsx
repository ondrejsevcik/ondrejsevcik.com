import styles from "./pop-link.module.css";

type PopLinkProps = {
	icon: React.ReactNode;
	label: string;
	href: string;
	rel?: string;
};

export function PopLink({ icon, label, href, rel }: PopLinkProps) {
	return (
		// biome-ignore lint/a11y/useAnchorContent: aria-label is provided.
		<a className={styles.link} aria-label={label} href={href} rel={rel}>
			<span className={styles.linkBg} aria-hidden="true" />
			<span className={styles.content} aria-hidden="true">
				{icon}
			</span>
		</a>
	);
}
