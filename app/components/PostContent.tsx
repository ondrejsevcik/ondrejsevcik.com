import type { ReactNode } from "react";
import styles from "./PostContent.module.css";
import { formatDate } from "../../utils/formatDate";

export const PostContent = ({
	title,
	date,
	html,
	footer,
}: { title: string; date: Date; html: string; footer?: ReactNode }) => {
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
			{footer ? <footer className={styles.footer}>{footer}</footer> : null}
		</section>
	);
};
