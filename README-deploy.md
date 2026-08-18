# Deploying Haveli Restaurant to Vercel

## 1. Deploy to Vercel
1. Fork or push the repository to GitHub.  
2. In Vercel, click **“New Project”** and import the GitHub repo.  
3. Vercel will auto‑detect the **Next.js (App Router)** framework.  
4. In the **Environment Variables** section, add the variables from `.env.example`.  
5. Click **Deploy**. Vercel will build and publish the site automatically.

## 2. Environment Variables
| Variable | Description | Where to obtain |
|----------|-------------|-----------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL (client‑side) | Supabase Dashboard → Project Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public anon key for client access | Supabase Dashboard → Project Settings → API |

## 3. First‑time Supabase Setup
1. **Create a Supabase project** (if you don’t have one).  
2. In the Supabase dashboard, open the **SQL editor** and run the schema for the tables listed in `ARCHITECT_PLAN.md` (`reservations`, `private_events`, `menu_items`, `testimonials`, `newsletter_subscribers`).  
3. Enable **Row Level Security (RLS)** for each table and create the appropriate policies (e.g., allow inserts from the client, reads for public data).  
4. (Optional) Set up **email notifications** using Supabase’s `pg_net` or Vercel Functions if you plan to send reservation confirmations.  

After the database is ready and the env vars are set, the deployed site will be fully functional with reservations, menu browsing, and other dynamic features.