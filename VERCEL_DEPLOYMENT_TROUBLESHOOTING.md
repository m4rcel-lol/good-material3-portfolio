# Vercel Deployment Troubleshooting Guide

## Issue: CSS Not Loading / Site Looks Broken on Vercel

If your site looks broken on Vercel with missing CSS and styling, follow these steps:

### Step 1: Check Environment Variables in Vercel

The most common cause is having `NEXT_PUBLIC_BASE_PATH` set in your Vercel environment variables when it shouldn't be.

**Fix:**
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Check if `NEXT_PUBLIC_BASE_PATH` is set
4. **If it exists, DELETE IT** - this variable should ONLY be used for GitHub Pages deployments
5. Redeploy your site

### Step 2: Verify Build Settings

Make sure your Vercel build settings are correct:

**Build Settings:**
- **Framework Preset:** Next.js
- **Build Command:** `npm run build` (default)
- **Output Directory:** Leave empty (Next.js auto-detects)
- **Install Command:** `npm install` (default)

### Step 3: Check Your `next.config.ts`

Your `next.config.ts` should look like this:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
}
```

**Important:** The `basePath` should dynamically use the environment variable, NOT be hardcoded.

### Why This Happens

- **For Vercel (custom domain):** basePath should be empty (`''`)
- **For GitHub Pages (subdirectory):** basePath should be set to `/repo-name`

When `NEXT_PUBLIC_BASE_PATH` is incorrectly set on Vercel:
- CSS tries to load from: `https://yoursite.com/repo-name/_next/static/css/...`
- But the actual file is at: `https://yoursite.com/_next/static/css/...`
- Result: 404 errors, no CSS, broken site

### Step 4: Redeploy

After removing the environment variable:
1. Go to **Deployments** in Vercel
2. Click the three dots menu on your latest deployment
3. Select **Redeploy**
4. Wait for the deployment to complete

### Step 5: Verify CSS Loading

After deployment:
1. Open your site
2. Open browser DevTools (F12)
3. Go to the **Console** tab
4. Look for any 404 errors related to CSS files
5. If CSS files load successfully, your site should display correctly

### Still Having Issues?

Check the following:
- Clear your browser cache
- Try opening the site in an incognito/private window
- Check the **Network** tab in DevTools to see which files are failing to load
- Verify the build completed successfully in Vercel deployment logs

## Correct Deployment Configurations

### For Vercel (Custom Domain or yourname.vercel.app)
- ❌ **DO NOT** set `NEXT_PUBLIC_BASE_PATH`
- ✅ Just connect your repo and deploy
- ✅ CSS will load from root path

### For GitHub Pages (Subdirectory)
- ✅ **DO** set `NEXT_PUBLIC_BASE_PATH=/your-repo-name` **BEFORE building**
- ✅ Build locally: `NEXT_PUBLIC_BASE_PATH=/repo-name npm run build`
- ✅ Or use GitHub Actions with the environment variable
- ✅ CSS will load from subdirectory path

## Quick Fix Summary

**If your site is broken on Vercel:**
1. Delete the `NEXT_PUBLIC_BASE_PATH` environment variable in Vercel
2. Redeploy
3. Done! ✓

**If deploying to GitHub Pages:**
1. Set `NEXT_PUBLIC_BASE_PATH=/your-repo-name` in build command
2. Build and deploy
3. Done! ✓
