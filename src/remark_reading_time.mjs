import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remark_reading_time() {
	return function (tree, { data }) {
		data.astro.frontmatter.minutesRead = getReadingTime(toString(tree)).text;
	};
}