# CyberGirls Alumni Portal

The public-facing home for the CyberGirls alumni network at `alumni.cybersafefoundation.org`.

This is the front door. It introduces the CyberGirls programme to the public, serves as a hub for alumni to find their tools and resources, and routes traffic to the appropriate services (letters tracker, events, research, etc.) as they are built.

## Architecture

This portal is the only project with a custom domain. Other alumni services run as separate Vercel deployments and are transparently proxied through Next.js rewrites:

```
alumni.cybersafefoundation.org/           → this app (portal)
alumni.cybersafefoundation.org/letters/*  → letters-self.vercel.app (letters tracker)
```

Adding a new service means deploying it separately and adding one rewrite entry in `next.config.ts`.

## Local Development

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a New Service

1. Deploy the new service to Vercel (it gets its own `*.vercel.app` URL)
2. Add a rewrite in `next.config.ts`:
   ```ts
   { source: "/your-service/:path*", destination: "https://your-app.vercel.app/your-service/:path*" }
   ```
3. Add a card for it in `src/app/page.tsx` under the Alumni Services section
4. Push — Vercel auto-deploys

## Deployment

Deployed on Vercel. The DNS CNAME for `alumni.cybersafefoundation.org` points to this project. No other project should have the custom domain attached.
