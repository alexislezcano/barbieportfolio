import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    slug: 'volta-identity',
    title: 'Volta Identity',
    category: 'Brand Identity',
    year: '2024',
    client: 'Volta Motors',
    description:
      'A comprehensive visual identity for a premium electric vehicle startup redefining sustainable mobility.',
    fullDescription:
      'Volta approached us with a vision to become the most design-forward electric vehicle company in Europe. The challenge was to craft an identity that communicated technological sophistication while remaining approachable and human. We developed a complete brand system from the ground up — wordmark, iconography, color palette, and motion language — all rooted in the concept of fluid energy. Every decision was made in service of a single idea: that sustainable design and premium craft are not in opposition.',
    services: ['Brand Strategy', 'Visual Identity', 'Typography System', 'Motion Language'],
    coverImage: '/images/portfolio/proyecto-1.jpg',
    images: [
      'https://picsum.photos/seed/volta1/1200/800',
      'https://picsum.photos/seed/volta2/1200/800',
      'https://picsum.photos/seed/volta3/1200/800',
    ],
    outcome:
      "The new identity launched across all touchpoints simultaneously, earning coverage in Wallpaper*, Dezeen, and It's Nice That within the first week.",
    nextProjectSlug: 'meridian-editorial',
  },
  {
    slug: 'meridian-editorial',
    title: 'Meridian Editorial',
    category: 'Editorial Design',
    year: '2024',
    client: 'Meridian Magazine',
    description:
      'A complete editorial redesign for an independent architecture and interiors publication.',
    fullDescription:
      "Meridian is an independent publication exploring the intersection of architecture, interior design, and contemporary living. The brief was to reimagine the magazine for a new generation of readers while honoring its 12-year editorial heritage. We built a new typographic system, grid architecture, and visual language that could carry complex spatial narratives with elegance. The typeface pairing — a refined grotesque with a humanist serif — became the backbone of every layout decision.",
    services: ['Art Direction', 'Typography', 'Grid System', 'Print Design'],
    coverImage: '/images/portfolio/proyecto-2.png',
    images: [
      'https://picsum.photos/seed/meridian1/1200/800',
      'https://picsum.photos/seed/meridian2/1200/800',
      'https://picsum.photos/seed/meridian3/1200/800',
    ],
    outcome:
      'The redesign led to a 40% increase in newsstand sales and three international design awards in its first year.',
    nextProjectSlug: 'flux-motion',
  },
  {
    slug: 'flux-motion',
    title: 'Flux Motion',
    category: 'Motion Design',
    year: '2023',
    client: 'Flux Studio',
    description:
      'A motion identity system for a creative production studio operating at the edge of film and digital art.',
    fullDescription:
      "Flux needed a motion identity that could function across broadcast, digital, and physical installation contexts. We designed a kinetic system built around the metaphor of light refraction — a fitting metaphor for a studio whose work consistently refracts familiar reality into something extraordinary. Working with a custom typeface and generative motion logic, the identity lives differently in every context while retaining a coherent visual DNA. Every element of the system was built with flexibility and temporal rhythm in mind.",
    services: ['Motion Identity', 'Storyboarding', 'Brand Animation', 'Sound Design Direction'],
    coverImage: '/images/portfolio/proyecto-3.png',
    images: [
      'https://picsum.photos/seed/flux1/1200/800',
      'https://picsum.photos/seed/flux2/1200/800',
      'https://picsum.photos/seed/flux3/1200/800',
    ],
    outcome:
      'The identity has since been used in over 200 productions and was nominated for a Cannes Lions in Brand Design.',
    nextProjectSlug: 'sage-packaging',
  },
  {
    slug: 'sage-packaging',
    title: 'Sage Packaging',
    category: 'Packaging Design',
    year: '2023',
    client: 'Sage Botanicals',
    description:
      'Minimal, tactile packaging for a premium botanical skincare brand focused on slow beauty.',
    fullDescription:
      "Sage Botanicals came to us with a product line of exceptional quality but packaging that didn't communicate their ethos. We stripped everything back — choosing unbleached papers, debossed typography, and restrained color to let the materiality speak. The structural forms reference traditional apothecary vessels, while the graphic system remains entirely contemporary. The result is a system that communicates the brand's core promise of slowness, care, and natural intelligence.",
    services: ['Packaging Design', 'Material Research', 'Typography', 'Art Direction'],
    coverImage: '/images/portfolio/proyecto-4.png',
    images: [
      'https://picsum.photos/seed/sage1/1200/800',
      'https://picsum.photos/seed/sage2/1200/800',
      'https://picsum.photos/seed/sage3/1200/800',
    ],
    outcome:
      'Sage won the Dieline Award for Sustainable Packaging and expanded into Selfridges and Le Bon Marché.',
    nextProjectSlug: 'noir-campaign',
  },
  {
    slug: 'noir-campaign',
    title: 'Noir Campaign',
    category: 'Art Direction',
    year: '2023',
    client: 'Noir Fragrance',
    description:
      'Art direction for a cinematic fragrance campaign exploring duality, tension, and desire.',
    fullDescription:
      "Noir required a campaign that could live equally well in print, digital, and out-of-home. We built a visual world around the fragrance's dual nature — the familiar made strange, the intimate made monumental. Working with photographer Elis Lund and director Camille Ferreira, we created a body of work that felt less like advertising and more like short cinema. The campaign ran across 14 markets and was designed to age gracefully over a three-year window.",
    services: ['Art Direction', 'Campaign Strategy', 'Photography Direction', 'Film Direction'],
    coverImage: '/images/portfolio/proyecto-5.png',
    images: [
      'https://picsum.photos/seed/noir1/1200/800',
      'https://picsum.photos/seed/noir2/1200/800',
      'https://picsum.photos/seed/noir3/1200/800',
    ],
    outcome:
      'The campaign achieved a 3× engagement rate above industry benchmarks and won at the Art Directors Club.',
    nextProjectSlug: 'arch-poster',
  },
  {
    slug: 'arch-poster',
    title: 'Arch Poster Series',
    category: 'Print Design',
    year: '2022',
    client: 'Arch Gallery',
    description:
      'A limited-edition poster series celebrating 50 years of brutalist architecture across Europe.',
    fullDescription:
      "To mark the 50th anniversary of the Arch Gallery's brutalist collection, we designed a series of twelve large-format posters. Each poster pairs an architectural photograph with a typographic composition that draws formally from the building it depicts — mirroring its proportions, weight, and geometry. The series was printed in three color variants on heavyweight uncoated stock. The edition of 300 per colorway was produced with a letterpress studio in Vienna.",
    services: ['Print Design', 'Typography', 'Art Direction', 'Production Management'],
    coverImage: '/images/portfolio/proyecto-6.png',
    images: [
      'https://picsum.photos/seed/arch1/1200/800',
      'https://picsum.photos/seed/arch2/1200/800',
      'https://picsum.photos/seed/arch3/1200/800',
    ],
    outcome:
      "The series sold out in 72 hours and was featured in Eye Magazine's annual print review.",
    nextProjectSlug: 'volta-identity',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAllProjects(): Project[] {
  return projects
}

export function getNextProject(slug: string): Project | undefined {
  const current = projects.find((p) => p.slug === slug)
  if (!current) return undefined
  return projects.find((p) => p.slug === current.nextProjectSlug)
}
