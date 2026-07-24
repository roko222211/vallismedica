import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const specijalnosti = defineCollection({
  loader: glob({ pattern: '*.mdoc', base: './src/content/specijalnosti' }),
  schema: z.object({
    naslov: z.string(),
    broj: z.coerce.number().optional(),
    kratki: z.string().optional().default(''),
    usluge: z.array(z.string()).optional().default([]),
  }),
});

const novosti = defineCollection({
  loader: glob({ pattern: '*.mdoc', base: './src/content/novosti' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional().default(''),
    coverImage: z.string().nullable().optional(),
  }),
});

export const collections = { specijalnosti, novosti };
