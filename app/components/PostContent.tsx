import type { ReactNode } from "react";
import { formatDate } from "../../utils/formatDate";
import styles from "./PostContent.module.css";

export const PostContent = ({
	title,
	date,
	html,
	children,
}: { title: string; date: Date; html: string; children?: ReactNode }) => {
	return (
		<section className={styles.blogPostWrapper}>
			<header>
				<h1 className={styles.postTitle}>{title}</h1>
				<time className={styles.meta} dateTime={date.toISOString()}>
					{formatDate(date)}
				</time>
			</header>
			<article
				className={styles.blogPostContent}
				// biome-ignore lint/security/noDangerouslySetInnerHtml: content is trusted.
				dangerouslySetInnerHTML={{ __html: html }}
			/>
			{children}
		</section>
	);
};
