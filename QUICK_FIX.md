# 🚨 QUICK FIX: Site Broken on Vercel?

If your site deployed to Vercel looks broken with:
- ❌ No CSS/styling
- ❌ Missing profile picture
- ❌ Plain unstyled HTML

## The Problem
You likely have the `NEXT_PUBLIC_BASE_PATH` environment variable set in Vercel when it shouldn't be.

## The Solution (2 minutes)

### Step 1: Remove the Environment Variable
1. Open your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Find `NEXT_PUBLIC_BASE_PATH`
5. Click the **X** or **Delete** button
6. Confirm deletion

### Step 2: Redeploy
1. Go to **Deployments** tab
2. Click the **⋮** (three dots) on your latest deployment
3. Select **Redeploy**
4. Wait ~1 minute for build to complete

### Step 3: Verify
1. Open your site
2. CSS should now be loaded ✅
3. Profile picture should appear ✅
4. Site should look styled ✅

## Why This Happens

- **Vercel deployments** → CSS loads from `/_next/static/css/...`
- **GitHub Pages deployments** → CSS loads from `/repo-name/_next/static/css/...`

When `NEXT_PUBLIC_BASE_PATH` is set on Vercel, it tries to load CSS from the wrong path, causing 404 errors.

## Need More Help?

See the full troubleshooting guide: [VERCEL_DEPLOYMENT_TROUBLESHOOTING.md](./VERCEL_DEPLOYMENT_TROUBLESHOOTING.md)

## For GitHub Pages Users

If you're deploying to GitHub Pages (not Vercel), you SHOULD have `NEXT_PUBLIC_BASE_PATH` set to your repo name during build:

```bash
NEXT_PUBLIC_BASE_PATH=/your-repo-name npm run build
```

But this should be done in your GitHub Actions workflow, NOT in Vercel.
