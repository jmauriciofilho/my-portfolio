# My Portifolio

## Technologies Used

- Framework: [Next.js](https://nextjs.org/)
- Typography: [Vercel Geist Font](https://vercel.com/font)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Analytics: [Vercel Web Analytics](https://vercel.com/docs/speed-insights) and [Speed Insights](https://vercel.com/docs/speed-insights)
- Deployment: [Vercel](https://vercel.com/)

## Features

- **[MDX](https://mdxjs.com/) Support**: Use Markdown with JSX components for blog posts.
- **Light and Dark Mode Toggle**: Switch between themes for better readability.
- **Dynamic [OG Images](https://vercel.com/docs/functions/og-image-generation)**: Auto-generate Open Graph images for sharing.
- **SEO Optimization**: Enhance search visibility with sitemap, robots.txt, and JSON-LD schema.
- **Dynamic Feed Generation**: Automatic dynamic [RSS](https://nextfolio-template.vercel.app/rss.xml), [Atom](https://nextfolio-template.vercel.app/atom.xml), and [JSON](https://nextfolio-template.vercel.app/feed.json) feeds.
- **[KaTeX](https://katex.org/) Integration**: Render mathematical expressions smoothly.
- **Performance Tracking**: Monitor web performance with [Vercel Web Analytics](https://vercel.com/docs/speed-insights) and [Speed Insights](https://vercel.com/docs/speed-insights).
- **Interactive Embeds**: Easily embed interactive tweets and YouTube videos.
- **Captions**: Add descriptive captions to photos, tweets, and videos.
- **Image Grid**: Easily showcase image galleries or photos.

## Installation

My Portifolio uses [pnpm](https://pnpm.io/installation) for dependency management, so ensure it is installed on your system.

Install dependencies:

```
pnpm install
```

Start the development server:

```
pnpm dev
```

The server will be running at [http://localhost:3000](http://localhost:3000).

## Configuration

1. Update the site metadata and social links in `app/config.ts` to set up SEO, feeds, social links, and Open Graph settings.
2. Update your routes in `app/sitemap.ts` for SEO optimization.
3. Update your blog posts in the `/content` folder.

For more information about configuration, follow the instructions in the [Getting Started](https://nextfolio-template.vercel.app/blog/getting-started#configuration) post.

## Licence

Nextfolio is open-source and released under the MIT License.
