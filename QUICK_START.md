# 🚀 QUICK START REFERENCE CARD

## Immediate Next Steps (5 minutes)

1. **Extract the archive**
   ```bash
   tar -xzf khor-portfolio.tar.gz
   cd khor-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Test locally**
   ```bash
   npm run dev
   # Open http://localhost:3000
   ```

## Before Deployment (15 minutes)

### 1️⃣ Get Resend API Key
- Go to https://resend.com
- Sign up (free)
- Get API key from dashboard
- Save for step 4

### 2️⃣ Upload Profile Photo
- Add photo to `public/images/khor-ling-ling.jpg`
- Update line 103 in `app/page.tsx`:
  ```tsx
  src="/images/khor-ling-ling.jpg"
  ```

### 3️⃣ Add LinkedIn URL
- Update line 331 in `app/page.tsx`:
  ```tsx
  href="https://linkedin.com/in/your-profile"
  ```

### 4️⃣ Configure Email
- Update lines 23-24 in `app/api/contact/route.ts`:
  ```tsx
  from: 'Your Name <you@yourdomain.com>',
  to: ['actual-email@example.com'],
  ```

## Deploy to Vercel (10 minutes)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Deploy**
   - Go to https://vercel.com
   - Click "Import Project"
   - Select your GitHub repo
   - Add environment variable:
     - Name: `RESEND_API_KEY`
     - Value: [your Resend API key]
   - Click "Deploy"

3. **Done! 🎉**
   - Your site is live at `https://your-project.vercel.app`

## Essential Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Main content (edit here) |
| `app/layout.tsx` | SEO metadata |
| `app/api/contact/route.ts` | Email functionality |
| `PROJECT_SUMMARY.md` | Complete overview |
| `DEPLOYMENT_GUIDE.md` | Detailed deployment steps |

## Quick Commands

```bash
npm run dev      # Start development
npm run build    # Build for production
npm run lint     # Check code quality
npm start        # Run production build
```

## Need Help?

1. Read `PROJECT_SUMMARY.md` (this directory)
2. Check `DEPLOYMENT_GUIDE.md` for step-by-step
3. Read `README.md` for full documentation

## Current Status

✅ Production-ready codebase
✅ All features implemented
✅ SEO optimized
✅ Responsive design
✅ Contact form with email

⏳ Needs before going live:
- Profile photo
- Resend API key
- LinkedIn URL
- Email addresses

---

**Time to deploy: ~30 minutes total**

See DEPLOYMENT_GUIDE.md for detailed instructions.
