// src/stores/posts.ts

import { writable } from 'svelte/store';

// Create a writable store to hold the posts data
export const postsStore = writable([]);