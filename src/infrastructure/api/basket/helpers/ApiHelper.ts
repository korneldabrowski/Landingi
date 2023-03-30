import { RequestOptions, ApiResponse } from '../basket.types';

async function apiRequest<T>(
  apiUrl: string,
  path: string,
  options: RequestOptions
): Promise<ApiResponse<T>> {
  const url = new URL(`${apiUrl}${path}`);

  Object.entries(options.queryParams ?? {}).forEach(([key, value]) => {
    url.searchParams.set(key, String(value));
  });

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const fetchOptions: RequestInit = {
    method: options.method,
    headers: new Headers(headers),
    body: options.data ? JSON.stringify(options.data) : undefined,
  };

  const response = await fetch(url.toString(), fetchOptions);
  const responseData = (await response.json()) as T;

  if (!response.ok) {
    const errorResponse = responseData as unknown as { error: string };
    const error = new Error(
      `API request failed with status ${response.status}: ${errorResponse.error}`
    ) as Error & { response?: Response };
    error.response = response;
    throw error;
  }

  return { data: responseData };
}

export { apiRequest };
export type { ApiResponse };
