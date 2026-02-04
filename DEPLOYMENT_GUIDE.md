# 🚀 Deployment Guide - Khor Ling Ling Portfolio

This guide will walk you through deploying your Next.js portfolio to Vercel.

## Prerequisites

- A GitHub account
- A Vercel account (sign up at https://vercel.com)
- Resend account for email functionality (sign up at https://resend.com)

## Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done):
```bash
cd khor-portfolio
git init
git add .
git commit -m "Initial commit: Khor Ling Ling portfolio"
```

2. **Create a GitHub Repository**:
   - Go to https://github.com/new
   - Create a new repository (e.g., "khor-portfolio")
   - Don't initialize with README (we already have one)

3. **Push to GitHub**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/khor-portfolio.git
git branch -M main
git push -u origin main
```

## Step 2: Set Up Resend Email Service

1. **Sign up for Resend**:
   - Go to https://resend.com
   - Sign up for a free account

2. **Verify Your Domain** (or use test domain):
   - Option A: Add your own domain in Resend dashboard
   - Option B: Use `onboarding@resend.dev` for testing

3. **Get Your API Key**:
   - Go to API Keys section
   - Create a new API key
   - Copy the key (you'll need it for Vercel)

4. **Update Email Settings** in `app/api/contact/route.ts`:
   - Replace `from: 'Portfolio Contact <onboarding@resend.dev>'` with your verified domain
   - Replace `to: ['contact@khorlingling.com']` with actual email address

## Step 3: Deploy to Vercel

### Method A: Import from GitHub (Recommended)

1. **Go to Vercel Dashboard**:
   - Visit https://vercel.com/dashboard
   - Click "Add New" → "Project"

2. **Import Repository**:
   - Select "Import Git Repository"
   - Choose your GitHub repository
   - Click "Import"

3. **Configure Project**:
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

4. **Add Environment Variables**:
   Click on "Environment Variables" and add:
   ```
   Name: RESEND_API_KEY
   Value: [paste your Resend API key]
   ```

5. **Deploy**:
   - Click "Deploy"
   - Wait 1-2 minutes for deployment to complete
   - Your site will be live at `https://your-project.vercel.app`

### Method B: Deploy via Vercel CLI

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
cd khor-portfolio
vercel
```

4. **Add Environment Variables**:
```bash
vercel env add RESEND_API_KEY production
# Paste your Resend API key when prompted
```

5. **Redeploy with Environment Variables**:
```bash
vercel --prod
```

## Step 4: Upload Profile Photo

1. **Prepare Photo**:
   - Recommended size: 800x800px minimum
   - Format: JPG or PNG
   - Optimize for web (< 200KB recommended)

2. **Add to Project**:
   - Place photo in `public/images/` folder
   - Name it appropriately (e.g., `khor-ling-ling.jpg`)

3. **Update Code** in `app/page.tsx`:
   ```tsx
   <Image 
     src="/images/khor-ling-ling.jpg"  // Update this path
     alt="Ms Khor Ling Ling" 
     width={800}
     height={800}
     className="..."
     priority
   />
   ```

4. **Commit and Push**:
   ```bash
   git add .
   git commit -m "Add profile photo"
   git push
   ```

5. Vercel will automatically redeploy with the new photo.

## Step 5: Custom Domain (Optional)

1. **Purchase Domain** (if needed):
   - Recommended: Namecheap, Google Domains, or Vercel Domains

2. **Add Domain in Vercel**:
   - Go to Project Settings → Domains
   - Click "Add Domain"
   - Enter your domain (e.g., `khorlingling.com`)

3. **Update DNS Settings**:
   - Follow Vercel's instructions
   - Add the provided DNS records to your domain registrar
   - Wait for DNS propagation (can take 24-48 hours)

4. **Update Metadata** in `app/layout.tsx`:
   ```tsx
   metadataBase: new URL('https://your-domain.com'),
   ```

## Step 6: Verify Deployment

1. **Check Website**:
   - Visit your Vercel URL
   - Test all sections: Home, Journey, Expertise, Advocacy, Contact
   - Test mobile responsiveness

2. **Test Contact Form**:
   - Fill out the contact form
   - Submit a test message
   - Check if email is received

3. **Check Analytics**:
   - Analytics will start collecting data automatically
   - View in Vercel Dashboard → Analytics tab

4. **Test SEO**:
   - Use https://cards-dev.twitter.com/validator for Twitter cards
   - Use https://developers.facebook.com/tools/debug/ for Facebook
   - Check Google Search Console

## Step 7: Update LinkedIn Link

Once LinkedIn profile is ready:

1. **Update in** `app/page.tsx`:
   ```tsx
   <a href="https://www.linkedin.com/in/your-profile" className="...">
   ```

2. **Commit and Push**:
   ```bash
   git add .
   git commit -m "Add LinkedIn profile link"
   git push
   ```

## Troubleshooting

### Build Errors

If you encounter build errors:

1. **Check Logs**:
   - Go to Vercel Dashboard → Deployments
   - Click on failed deployment
   - Check build logs

2. **Common Issues**:
   - Missing environment variables
   - Syntax errors in code
   - Missing dependencies

3. **Local Testing**:
   ```bash
   npm run build
   npm start
   ```

### Email Not Sending

1. **Verify Resend API Key**:
   - Check it's correctly added in Vercel
   - Ensure no extra spaces

2. **Check Domain Verification**:
   - Resend requires verified domain for production
   - Use test domain for development

3. **Check API Route**:
   - Visit `/api/contact` in browser
   - Should return 405 Method Not Allowed (correct)

### Images Not Loading

1. **Check File Path**:
   - Images should be in `public/images/`
   - Reference as `/images/filename.jpg`

2. **Check Image Size**:
   - Large images can cause slow loading
   - Optimize images before uploading

## Performance Optimization

1. **Lighthouse Score**:
   - Run Lighthouse audit in Chrome DevTools
   - Aim for 90+ in all categories

2. **Image Optimization**:
   - Next.js automatically optimizes images
   - Use WebP format when possible

3. **Analytics**:
   - Monitor Core Web Vitals in Vercel Analytics
   - Optimize based on real user data

## Security Checklist

- [ ] Environment variables are set in Vercel (not committed to Git)
- [ ] `.env.local` is in `.gitignore`
- [ ] API routes validate input
- [ ] Email recipients are verified
- [ ] HTTPS is enabled (automatic with Vercel)

## Maintenance

### Regular Updates

```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Test locally
npm run build
npm start

# Deploy
git add .
git commit -m "Update dependencies"
git push
```

### Content Updates

To update content:
1. Edit files in `app/page.tsx`
2. Commit and push changes
3. Vercel will automatically deploy

## Support

If you need help:
- Check Vercel documentation: https://vercel.com/docs
- Check Next.js documentation: https://nextjs.org/docs
- Check Resend documentation: https://resend.com/docs

## Next Steps

After deployment:
1. ✅ Test all functionality
2. ✅ Add actual LinkedIn profile link
3. ✅ Upload profile photo
4. ✅ Set up custom domain (optional)
5. ✅ Submit to search engines
6. ✅ Share on social media

---

**Congratulations! Your portfolio is now live! 🎉**
