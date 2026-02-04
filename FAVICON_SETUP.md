# Favicon Setup

## Quick Setup

Place the following files in the `app` directory:

1. **icon.png** or **icon.ico** - App icon (recommended: 512x512px)
2. **apple-icon.png** - Apple touch icon (recommended: 180x180px)
3. **favicon.ico** - Browser favicon (16x16px and 32x32px)

Next.js will automatically generate all required sizes and formats.

## Files to Create

### Option 1: Using a Design Tool

1. Create a square logo (512x512px)
2. Export as PNG with transparent background
3. Name it `icon.png`
4. Place in `app/` directory

### Option 2: Using Favicon Generator

1. Go to https://realfavicongenerator.net/
2. Upload your logo
3. Download the generated files
4. Extract and place in `app/` directory

## Icon Design Recommendations

For Ms. Khor Ling Ling's portfolio:

**Concept Ideas:**
- Letter "K" in the gradient style (matching the logo in navigation)
- Professional HR/leadership icon
- Simple, clean design with blue-purple gradient

**Colors to Use:**
- Primary: #4F46E5 (Indigo 600)
- Secondary: #9333EA (Purple 600)
- Background: White or transparent

## Current Placeholder

The site currently uses the Next.js default icon. Replace it with a custom icon for better branding.

## Metadata Configuration

Icons are automatically configured in `app/layout.tsx` through Next.js metadata API.

No additional configuration needed once files are placed in the `app/` directory.
