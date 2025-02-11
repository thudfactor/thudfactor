declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"pages": Record<string, {
  id: string;
  slug: string;
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">;
  render(): Render[".md"];
}>;
"posts": {
"2019/11/humanities/index.mdx": {
	id: "2019/11/humanities/index.mdx";
  slug: "2019/11/humanities";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdx"] };
"2023/06/article-typography/index.mdx": {
	id: "2023/06/article-typography/index.mdx";
  slug: "2023/06/article-typography";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdx"] };
"2023/06/copilot/index.mdx": {
	id: "2023/06/copilot/index.mdx";
  slug: "2023/06/copilot";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdx"] };
"2023/06/image-of-a-cat/index.mdx": {
	id: "2023/06/image-of-a-cat/index.mdx";
  slug: "2023/06/image-of-a-cat";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdx"] };
"2023/06/this-is-an-alpha/index.md": {
	id: "2023/06/this-is-an-alpha/index.md";
  slug: "2023/06/this-is-an-alpha";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2023/07/resize/index.md": {
	id: "2023/07/resize/index.md";
  slug: "2023/07/resize";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2023/08/ai-art/index.mdx": {
	id: "2023/08/ai-art/index.mdx";
  slug: "2023/08/ai-art";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdx"] };
"2023/08/ai-code/index.md": {
	id: "2023/08/ai-code/index.md";
  slug: "2023/08/ai-code";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2023/11/goodbye-postcss/index.mdx": {
	id: "2023/11/goodbye-postcss/index.mdx";
  slug: "2023/11/goodbye-postcss";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdx"] };
"2023/12/exploring-hsl/index.mdx": {
	id: "2023/12/exploring-hsl/index.mdx";
  slug: "2023/12/exploring-hsl";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdx"] };
"2023/12/exploring-rgb/index.mdx": {
	id: "2023/12/exploring-rgb/index.mdx";
  slug: "2023/12/exploring-rgb";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdx"] };
"2023/12/prefers-reduced-motion/index.mdx": {
	id: "2023/12/prefers-reduced-motion/index.mdx";
  slug: "2023/12/prefers-reduced-motion";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdx"] };
"2024/01/blog-more/index.md": {
	id: "2024/01/blog-more/index.md";
  slug: "2024/01/blog-more";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2024/01/oatmeal/index.md": {
	id: "2024/01/oatmeal/index.md";
  slug: "2024/01/oatmeal";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2024/01/syntax-colors/index.md": {
	id: "2024/01/syntax-colors/index.md";
  slug: "2024/01/syntax-colors";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2024/02/punctuation/index.mdx": {
	id: "2024/02/punctuation/index.mdx";
  slug: "2024/02/punctuation";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdx"] };
"2024/02/redesign/index.md": {
	id: "2024/02/redesign/index.md";
  slug: "2024/02/redesign";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2024/03/font-stack/index.mdx": {
	id: "2024/03/font-stack/index.mdx";
  slug: "2024/03/font-stack";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdx"] };
"2024/03/pixels/index.mdx": {
	id: "2024/03/pixels/index.mdx";
  slug: "2024/03/pixels";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdx"] };
"2024/04/css-programming/index.mdx": {
	id: "2024/04/css-programming/index.mdx";
  slug: "2024/04/css-programming";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdx"] };
"2024/04/extra-capacity/index.md": {
	id: "2024/04/extra-capacity/index.md";
  slug: "2024/04/extra-capacity";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2024/04/looms/index.md": {
	id: "2024/04/looms/index.md";
  slug: "2024/04/looms";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2024/05/about-rules/index.mdx": {
	id: "2024/05/about-rules/index.mdx";
  slug: "2024/05/about-rules";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdx"] };
"2024/05/editor/index.md": {
	id: "2024/05/editor/index.md";
  slug: "2024/05/editor";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"2024/05/tooltips/index.mdx": {
	id: "2024/05/tooltips/index.mdx";
  slug: "2024/05/tooltips";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdx"] };
"2024/05/vim-1/index.mdx": {
	id: "2024/05/vim-1/index.mdx";
  slug: "2024/05/vim-1";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdx"] };
"2024/06/browser-testing/index.mdx": {
	id: "2024/06/browser-testing/index.mdx";
  slug: "2024/06/browser-testing";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdx"] };
"2024/06/new-hotness/index.mdx": {
	id: "2024/06/new-hotness/index.mdx";
  slug: "2024/06/new-hotness";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdx"] };
"2024/06/vim-2/index.mdx": {
	id: "2024/06/vim-2/index.mdx";
  slug: "2024/06/vim-2";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdx"] };
"2024/07/domain-shift/index.mdx": {
	id: "2024/07/domain-shift/index.mdx";
  slug: "2024/07/domain-shift";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdx"] };
"2024/10/colocation/index.mdx": {
	id: "2024/10/colocation/index.mdx";
  slug: "2024/10/colocation";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
