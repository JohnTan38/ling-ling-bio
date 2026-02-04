# Khor Ling Ling - Professional Portfolio

A modern, interactive portfolio website for Ms. Khor Ling Ling, showcasing her expertise as an HR Leader, Mentor, and Educator.

## 🌟 Features

- **Modern UI/UX**: Sleek design with blue-purple gradient theme
- **Responsive Design**: Fully responsive across all devices
- **Interactive Navigation**: Smooth tab-based navigation with animations
- **Contact Form**: Functional contact form with email notifications via Resend API
- **SEO Optimized**: Complete metadata and Open Graph tags for social sharing
- **Analytics Ready**: Integrated with Vercel Analytics
- **Performance**: Optimized images and fast page loads
- **Accessibility**: WCAG compliant with proper semantic HTML

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email Service**: Resend
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd khor-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.local.example .env.local
```

4. Add your Resend API key to `.env.local`:
```env
RESEND_API_KEY=your_resend_api_key_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### Email Setup (Resend)

1. Sign up at [Resend](https://resend.com)
2. Verify your domain or use their test domain
3. Get your API key from the dashboard
4. Add the API key to `.env.local`
5. Update the `from` email in `app/api/contact/route.ts` to use your verified domain
6. Update the `to` email to Ms. Khor's actual email address

### Image Upload

To replace the placeholder profile photo:

1. Add the photo to `public/images/` folder
2. Update the image path in `app/page.tsx`:
```tsx
<Image 
  src="/images/your-photo.jpg" 
  alt="Ms Khor Ling Ling"
  width={800}
  height={800}
  className="..."
  priority
/>
```

### Analytics Setup

Vercel Analytics is already integrated. It will automatically start tracking once deployed to Vercel.

For Google Analytics (optional):
1. Get your GA Measurement ID
2. Add to `.env.local`: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
3. Add Google Analytics script to `app/layout.tsx`

### LinkedIn Link

Update the LinkedIn URL in `app/page.tsx`:
```tsx
<a href="https://www.linkedin.com/in/your-profile" className="...">
```

## 📱 Sections

1. **Home**: Hero section with profile photo and call-to-action
2. **Journey**: Professional career highlights and experience
3. **Expertise**: Core competencies and skills
4. **Advocacy**: Mentorship and community involvement
5. **Contact**: Contact form and social links

## 🚢 Deployment to Vercel

### Method 1: Via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Add environment variables in Vercel dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add `RESEND_API_KEY`

### Method 2: Via GitHub Integration

1. Push your code to GitHub
2. Import the repository in Vercel dashboard
3. Add environment variables
4. Deploy

### Method 3: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy via Vercel dashboard by uploading the `.next` folder

## 🔒 Environment Variables

Required environment variables for production:

```env
RESEND_API_KEY=your_resend_api_key
```

Optional:
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 📋 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors

The design uses a blue-purple gradient theme. To customize:

1. Update colors in `app/page.tsx`
2. Modify Tailwind classes: `indigo-600`, `purple-600`, etc.

### Content

All content can be updated directly in `app/page.tsx`. Look for the section you want to modify and update the text accordingly.

### Animations

Animations are defined in `app/globals.css`. Modify keyframes to adjust animation behavior.

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 🤝 Support

For issues or questions:
- Email: contact@khorlingling.com
- Create an issue in the repository

## 🙏 Acknowledgments

Built with Next.js, Tailwind CSS, and modern web technologies to showcase professional excellence in HR leadership and mentorship.

---

**Empowering the next generation of global leaders.**
