# 🎭 Les Corazon Singers — Site Vitrine Officiel

Site web moderne et professionnel pour l'association **Les Corazon Singers**, chorale du Collège Clos Jouvin à Jarrie (Isère).

## 🌐 Domaine
`corazonsingers.com`

## 🛠 Technologies
- **Framework** : Next.js 14 (App Router)
- **Styles** : Tailwind CSS
- **Animations** : CSS animations + Framer Motion ready
- **Images** : Next.js Image Optimization
- **Polices** : Playfair Display + Nunito + Pacifico
- **Déploiement** : Vercel

## 🚀 Installation & Développement

```bash
# Installer les dépendances
npm install

# Démarrer en développement
npm run dev

# Build de production
npm run build

# Démarrer en production
npm start
```

## 📂 Structure du projet

```
corazon-singers/
├── public/              # Images, logos, photos
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Layout racine + métadonnées SEO
│   │   ├── page.tsx     # Page principale
│   │   └── globals.css  # Styles globaux + animations
│   └── components/
│       └── sections/
│           ├── Navbar.tsx        # Navigation sticky
│           ├── HeroSection.tsx   # Section hero immersive
│           ├── AboutSection.tsx  # Histoire & Timeline
│           ├── ArtsSection.tsx   # Chant, Danse, Théâtre, Comédie
│           ├── ShowsSection.tsx  # Spectacles & Concerts
│           ├── GallerySection.tsx # Galerie photos avec lightbox
│           ├── VideosSection.tsx  # Section vidéos
│           ├── PressSection.tsx   # Presse & témoignages
│           ├── ContactSection.tsx # Formulaire de contact
│           └── Footer.tsx        # Footer avec réseaux sociaux
├── next.config.mjs
├── tailwind.config.ts
├── vercel.json
└── package.json
```

## 🎨 Design

- **Thème** : Sombre (dark), cinématographique, spectacle vivant
- **Couleurs principales** : Coral, Gold, Teal, Violet
- **Polices** : Playfair Display (titres) + Nunito (corps) + Pacifico (accents)
- **Animations** : Notes musicales flottantes, barres d'onde, marquee, shimmer

## 🚀 Déploiement sur Vercel

### Option 1 : Via l'interface Vercel
1. Créer un repo GitHub avec ce projet
2. Se connecter sur [vercel.com](https://vercel.com)
3. Importer le repo
4. Le déploiement est automatique !

### Option 2 : Via CLI Vercel
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Liaison du domaine corazonsingers.com
1. Dans le dashboard Vercel → Settings → Domains
2. Ajouter `corazonsingers.com`
3. Configurer les DNS selon les instructions Vercel :
   - Record A : `76.76.21.21`
   - Record CNAME www : `cname.vercel-dns.com`

## 📸 Images à remplacer
Les images sont dans `/public/`. Pour de meilleures performances :
- Utiliser des formats WebP/AVIF
- Optimiser avec [Squoosh](https://squoosh.app/)

## 🎬 Vidéos YouTube
Dans `VideosSection.tsx`, remplacer les URLs de recherche YouTube par les vraies URLs de vos vidéos une fois uploadées.

## 📧 Contact
Email de l'association : `closjouvinculture@orange.fr`

---

*Site créé avec ❤️ pour les Corazon Singers – Jarrie, Isère*
