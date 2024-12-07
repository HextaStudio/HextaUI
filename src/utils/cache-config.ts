import { ImageResponse } from 'next/server';

export const imageCache = {
  edge: {
    maxAge: 60 * 60 * 24 * 30, // 30 days
  },
  browser: {
    maxAge: 60 * 60 * 24 * 7, // 7 days
  }
};

export const contentCache = {
  edge: {
    maxAge: 60 * 60 * 24, // 24 hours
  },
  browser: {
    maxAge: 60 * 60, // 1 hour
  }
};

export const staticCache = {
  edge: {
    maxAge: 60 * 60 * 24 * 365, // 1 year
  },
  browser: {
    maxAge: 60 * 60 * 24 * 30, // 30 days
  }
}; 