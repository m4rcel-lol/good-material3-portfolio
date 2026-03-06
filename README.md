This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Customization Guide

### Adding Your Profile Picture

To add your profile picture to the portfolio:

1. **Add your image file** to the `/public` folder (e.g., `/public/profile.jpg`, `/public/avatar.png`)
   - Recommended size: 256x256px or larger (square images work best)
   - Supported formats: JPG, PNG, WebP, AVIF

2. **Update the profile configuration** in `/src/data/profile.ts`:
   ```typescript
   export const profile = {
     // ... other fields
     profileImage: "/profile.jpg", // Path to your image in /public
     fallbackInitial: "MR", // Text shown if image fails to load
   }
   ```

3. **Test your changes**: The profile picture will appear in the Hero section with a circular frame and online status indicator.

**Note**: If `profileImage` is set to `null`, the fallback text (`fallbackInitial`) will be displayed instead. This is useful during development or if you prefer a text-based avatar.

### CSS & Styling System

This portfolio uses **Material Design 3** (MD3) with **Tailwind CSS**. The styling system is built on design tokens for consistent, themeable design.

#### Material Design 3 Color System

The project uses Material Design 3's semantic color system defined in `/src/app/globals.css`. Colors automatically adapt between light and dark themes.

**Key Color Tokens:**
- `--md-sys-color-primary`: Primary brand color (purple by default)
- `--md-sys-color-on-primary`: Text/icons on primary surfaces
- `--md-sys-color-surface`: Base surface color (background for cards, containers)
- `--md-sys-color-on-surface`: Text on surface
- `--md-sys-color-surface-container`: Elevated surface (cards, panels)
- `--md-sys-color-outline`: Borders and dividers

**Surface Elevation Levels:**
- `surface-container-lowest`: Deepest level
- `surface-container-low`: Low elevation
- `surface-container`: Default elevation
- `surface-container-high`: High elevation
- `surface-container-highest`: Highest elevation

#### Using MD3 Colors in Tailwind

All Material Design colors are available as Tailwind utilities with the `md-` prefix:

```tsx
// Background colors
className="bg-md-primary"
className="bg-md-surface-container"

// Text colors
className="text-md-on-surface"
className="text-md-primary"

// Border colors
className="border-md-outline"

// With opacity
className="bg-md-primary/50"
className="border-md-outline-variant/30"
```

#### Customizing Colors

To customize the color scheme:

1. **Generate MD3 tokens**: Use the [Material Theme Builder](https://m3.material.io/theme-builder) to generate a custom color scheme based on your brand color.

2. **Update `/src/app/globals.css`**: Replace the CSS custom properties in both `:root` (dark theme) and `.light` (light theme) sections:
   ```css
   :root {
     --md-sys-color-primary: #YOUR_COLOR;
     --md-sys-color-on-primary: #YOUR_COLOR;
     /* ... update other tokens */
   }
   ```

3. **Tailwind automatically inherits** these changes through the config in `/tailwind.config.ts`.

#### Shape & Border Radius

Material Design 3 shape tokens are also available:

```tsx
// Border radius utilities
className="rounded-md-sm"     // Small corners (8px)
className="rounded-md-md"     // Medium corners (12px)
className="rounded-md-lg"     // Large corners (16px)
className="rounded-md-xl"     // Extra large (28px)
className="rounded-md-full"   // Full circle (9999px)
```

These are defined in `/src/app/globals.css` as `--md-sys-shape-corner-*` variables.

#### Custom Animations

The project includes several custom Tailwind animations defined in `/tailwind.config.ts`:

- `animate-float`: Gentle floating motion (hero avatar)
- `animate-blob`: Morphing blob shapes (background)
- `animate-shimmer`: Shimmer effect for loading states
- `animate-cursor-blink`: Blinking cursor effect
- `animate-fade-in-up`: Fade in with upward motion

**Example usage:**
```tsx
<div className="animate-float">Floating element</div>
<div className="animate-blob">Morphing blob</div>
```

#### Extending the Tailwind Config

To add custom colors, animations, or utilities:

1. Edit `/tailwind.config.ts`
2. Add to the `extend` section:
   ```typescript
   extend: {
     colors: {
       'custom-accent': '#FF6B6B',
     },
     animation: {
       'custom-spin': 'spin 3s linear infinite',
     },
   }
   ```

#### Theme Switching

The site supports automatic light/dark theme switching. The theme toggle button is in the top-right corner (see `/src/components/ThemeToggle.tsx`).

**How it works:**
- Dark theme (default): Uses `:root` CSS variables
- Light theme: Applies `.light` class to `<html>`, which overrides variables

**To modify theme behavior**, edit the `ThemeToggle` component or the `.light` class in `globals.css`.

### Component Styling Patterns

**Material Design principles used:**
- **Elevation**: Surface containers at different heights (using `surface-container-*`)
- **Typography**: Semantic text sizes and weights
- **Motion**: Framer Motion for animations with reduced motion support
- **Spacing**: Consistent gap and padding using Tailwind's spacing scale

**Best practices:**
- Use semantic MD3 color tokens instead of arbitrary colors
- Maintain elevation hierarchy (lowest → highest)
- Keep animations subtle and respect `prefers-reduced-motion`
- Use Tailwind utilities; avoid inline styles unless necessary for dynamic values

### Editing Content

All portfolio content is centralized in `/src/data/profile.ts`:
- Personal information (name, location, handles)
- Tech stack and skills
- Project listings
- Social links

Update this file to customize your portfolio content without touching component code.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

This project is configured for static export and can be deployed to various platforms. The CSS and asset paths are automatically configured based on your deployment type.

### Deploy to Custom Domain (Vercel, Netlify, etc.)

For deployments to a custom domain or root path (e.g., `https://yourdomain.com/`):

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy the `out/` folder** to your hosting platform:
   - **Vercel**: Connect your repo and deploy (automatic)
   - **Netlify**: Drag the `out/` folder or connect via Git
   - **Other hosts**: Upload the `out/` folder contents

The CSS and assets will work correctly without any additional configuration.

#### ⚠️ IMPORTANT: Vercel Deployment Issue

**If your site looks broken on Vercel (CSS not loading, no styling):**

The most common cause is having the `NEXT_PUBLIC_BASE_PATH` environment variable set in Vercel when it shouldn't be.

**Quick Fix:**
1. Go to your Vercel project → **Settings** → **Environment Variables**
2. **DELETE** the `NEXT_PUBLIC_BASE_PATH` variable if it exists
3. Redeploy your site

**Why:** The `NEXT_PUBLIC_BASE_PATH` variable is only for GitHub Pages subdirectory deployments. When set on Vercel, it causes CSS and assets to try loading from the wrong path (e.g., `/repo-name/_next/...` instead of `/_next/...`), resulting in 404 errors.

📖 **See [VERCEL_DEPLOYMENT_TROUBLESHOOTING.md](./VERCEL_DEPLOYMENT_TROUBLESHOOTING.md) for detailed troubleshooting steps.**

### Deploy to GitHub Pages (Repository)

For GitHub Pages deployment at a subpath (e.g., `https://username.github.io/repo-name/`):

1. **Set the base path** before building:
   ```bash
   # For repository named "good-material3-portfolio"
   NEXT_PUBLIC_BASE_PATH=/good-material3-portfolio npm run build
   ```

2. **Deploy the `out/` folder** to GitHub Pages:
   - Enable GitHub Pages in repository settings
   - Set source to "GitHub Actions" or upload `out/` to `gh-pages` branch

3. **Or use GitHub Actions** (recommended):

   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: '20'
         - run: npm ci
         - run: NEXT_PUBLIC_BASE_PATH=/good-material3-portfolio npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

   **Important:** Replace `/good-material3-portfolio` with your actual repository name.

### Understanding Base Path Configuration

The `next.config.ts` includes:
```typescript
basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
```

This ensures:
- **Custom domain**: CSS links use `/path/to/asset.css` (works at root)
- **GitHub Pages**: CSS links use `/repo-name/path/to/asset.css` (works in subdirectory)

**Never hardcode the basePath** - always use the environment variable for flexibility.

### Verifying Your Deployment

After deploying, verify that:
1. The page loads without styling issues
2. Dark/light theme toggle works
3. All images and assets load correctly
4. Navigation links work properly

If CSS doesn't load, check:
- Browser console for 404 errors on CSS files
- Base path matches your deployment URL structure
- The `out/` folder contains `_next/static/` directory
