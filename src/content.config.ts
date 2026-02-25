import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';
import githubReposLoader from 'github-repos-astro-loader';

const githubRepos = defineCollection({
  loader: githubReposLoader({
    username: 'bennlaufer',
    apiToken: import.meta.env.GITHUB_TOKEN,
    filter: (repo) => !repo.fork,
  }),
});

const projects = defineCollection({
  loader: file('src/data/projects.json'),
  schema: z.object({
    slug: z.string(),
    repoName: z.string(),
    title: z.string(),
    description: z.string(),
    category: z.enum(['data-science-ml', 'statistical-research', 'software-tools']),
    featured: z.boolean(),
    displayOrder: z.number(),
    tags: z.array(z.string()),
    liveUrl: z.string().optional(),
  }),
});

export const collections = { githubRepos, projects };
