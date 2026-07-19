import { createDirectus, rest, readItems } from '@directus/sdk';
import { DirectusSchema, Service, NewsItem, TeamMember } from '@/types/directus';

const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055';

// Instantiate the SDK client with the type-safe schema and REST capability
export const directus = createDirectus<DirectusSchema>(directusUrl).with(rest());

/**
 * Returns the fully qualified URL of a Directus asset by its UUID.
 * @param imageId - The UUID of the image asset.
 * @returns The complete URL to the asset.
 */
export function getDirectusAssetUrl(imageId: string): string {
  if (!imageId) return '';
  return `${directusUrl}/assets/${imageId}`;
}

/**
 * Fetches all published services from Directus.
 */
export async function getServices(): Promise<Service[]> {
  try {
    const services = await directus.request(
      readItems('Services', {
        filter: {
          status: {
            _eq: 'published',
          },
        },
        sort: ['id'],
      })
    );
    return services;
  } catch (error) {
    console.error('[Directus] Failed to fetch services:', error);
    throw new Error('Could not retrieve services from database.');
  }
}

/**
 * Fetches all published news articles from Directus.
 */
export async function getNews(): Promise<NewsItem[]> {
  try {
    const news = await directus.request(
      readItems('News', {
        filter: {
          status: {
            _eq: 'published',
          },
        },
        sort: ['-date_created'], // Newest first
      })
    );
    return news;
  } catch (error) {
    console.error('[Directus] Failed to fetch news:', error);
    throw new Error('Could not retrieve news articles from database.');
  }
}

/**
 * Fetches all published team members from Directus.
 */
export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const team = await directus.request(
      readItems('Team_Members', {
        filter: {
          status: {
            _eq: 'published',
          },
        },
        sort: ['id'],
      })
    );
    return team;
  } catch (error) {
    console.error('[Directus] Failed to fetch team members:', error);
    throw new Error('Could not retrieve team members from database.');
  }
}
