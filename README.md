# Next Server Action Redirect Multi-Root Bug

This is a replication repo for a bug where Next.js server actions fail to properly redirect when crossing the boundary between multiple root layouts in different route groups.

# Steps to reproduce

1. Clone this repo
2. Run `pnpm install`
3. Run `pnpm dev`
4. Open `http://localhost:3000/1-1` in your browser
5. Click the button to "Go to another page in the same route group (1-2)".
  a. Note that this navigates to `http://localhost:3000/1-2` without issue.
6. Click the button to "Go to another page in the other route group (2-1)".
  a. Note that this navigation fails.