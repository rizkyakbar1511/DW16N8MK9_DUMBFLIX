import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { QueryClient, defaultShouldDehydrateQuery, isServer } from "@tanstack/react-query";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getYear(dateString: string) {
  return new Date(dateString).getFullYear();
}

export function matchRoute(path: string, route: string) {
  // Remove leading and trailing slashes, then split into segments
  const pathSegments = path.replace(/^\/|\/$/g, "").split("/");
  const routeSegments = route.replace(/^\/|\/$/g, "").split("/");

  // Check if the path starts with the route
  return routeSegments.every((segment, index) => segment === pathSegments[index]);
}

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
      dehydrate: {
        // include pending queries in dehydration
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) || query.state.status === "pending",
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

// src/lib/UrlBuilder.ts
export class UrlBuilder {
  private baseUrl: string;
  private endpoint: string;
  private pathParams: (string | number)[];
  private queryParams: URLSearchParams;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.endpoint = "";
    this.pathParams = [];
    this.queryParams = new URLSearchParams();
  }

  setEndpoint(endpoint: string): this {
    this.endpoint = endpoint;
    return this;
  }

  addPathParam(param: string | number): this {
    if (param) {
      this.pathParams.push(param);
    }
    return this;
  }

  addQueryParam(key: string, value: string | number | undefined | null): this {
    if (value !== undefined && value !== null) {
      this.queryParams.append(key, String(value));
    }
    return this;
  }

  build(): string {
    let url = `${this.baseUrl}${this.endpoint}`;

    // Append path parameters
    if (this.pathParams.length > 0) {
      url += "/" + this.pathParams.join("/");
    }

    // Append query parameters
    const queryString = this.queryParams.toString();
    if (queryString) {
      url += `?${queryString}`;
    }

    return url;
  }
}

// Factory function for creating UrlBuilder instances
export function createUrlBuilder(baseUrl: string): UrlBuilder {
  return new UrlBuilder(baseUrl);
}
