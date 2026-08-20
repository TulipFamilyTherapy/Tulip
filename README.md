[README.md](https://github.com/user-attachments/files/31255932/README.md)
# Tulip Family Therapy

Static website for Tulip Family Therapy, Nairobi. Built the same way as The Table:
plain HTML with the CSS inlined per page, no build step, no dependencies, deployed
straight to GitHub Pages.

## What is in this repository

```
index.html                     Homepage
services.html                  All eight services, one anchored section each
programmes/roots-and-wings/
  index.html                   The Roots and Wings programme and its editions
assets/tulip.css               Shared design system, used by every page
assets/tulip.js                Menu, scroll reveals, root animation
assets/
  Logo.svg                     Full colour lockup, true vector
  White_Logo.svg               Reversed lockup for dark grounds
  Symbol.svg                   Tulip mark only
  White_Symbol.svg             Reversed mark
  roots-and-wings-cover.jpg    Front cover, web optimised
  roots-and-wings-back.jpg     Back cover, web optimised
  patricia-michubu.jpg         Portrait, taken from the company profile
covers/                        Print masters, archived here for safekeeping
  26-08-18_Tulip_FrontCover_A4_bleed3mm_FINAL.pdf
  26-08-18_Tulip_BackCover_A4_bleed3mm_FINAL.pdf
  26-08-18_Tulip_FrontCover_300dpi_FINAL.png
  26-08-18_Tulip_BackCover_300dpi_FINAL.png
  26-08-18_Tulip_Covers_Front_and_Back_FINAL.png
  Logo.pdf, White_Logo.pdf, Symbol.pdf, White_Symbol.pdf
README.md
```

## Structure

```
/                                    Homepage                        built
/services.html                       Eight services, anchored        built
/programmes/roots-and-wings/         Programme and its editions      built
/about.html                          Fuller practice history         optional
/brand.html                           The design system               built
```

Roots and Wings has its own page rather than a homepage section, because Tulip will add
other programmes later and each one needs room to grow. A new edition inside Roots and
Wings is a new HTML file in the same folder. A new programme is a new folder beside it.

See `GITHUB_GUIDE.md` for how to publish and how to add pages.

## Brand tokens

Sampled directly from the vector logo files, not estimated.

| Token | Value | Use |
|---|---|---|
| `--ink` | `#15506F` | Primary teal, body text, dark grounds |
| `--ink-2` | `#0E3A52` | Deep teal, footer and contact |
| `--gold` | `#DCA41F` | Accent, eyebrows, rules, roots |
| `--gold-2` | `#EFC463` | Gold on dark grounds |
| `--cream` | `#FBF3E2` | Warm section ground |
| `--paper` | `#FDF9F0` | Page ground |
| `--rose` | `#CE4E6B` | Reserved accent, used sparingly |

Typefaces: **Poppins** for structure and body, standing in for Mazzard H SemiBold,
the actual brand face used in the logo. **Lora Italic** carries the voice moments,
matching the serif italic on the printed covers. If a Mazzard licence is available,
swap Poppins for it and nothing else needs to change.

## Design notes

The homepage has one signature device: **the horizon**. Cream above, deep teal below,
the tulip sitting on the line with its roots growing down into the dark. It repeats the
printed front cover exactly, so the book and the website read as one object. The roots
draw themselves in once on load and are never animated again.

The second structural device is the **two lanes**: the young person's track and the
parent's track running side by side, joined by the bridge. That is not decoration. It is
the actual architecture of the workbook, which is written twice and meets in the middle.

## Deploying to GitHub Pages

1. Create a repository, for example `tulip-family-therapy/site`.
2. Push the contents of this folder to the `main` branch.
3. Settings, then Pages, then set Source to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. The site appears at `https://<org>.github.io/<repo>/` within a minute or two.

To use a custom domain such as `tulipfamilytherapy.co.ke`, add a file named `CNAME`
containing the domain, then point a DNS `CNAME` record at `<org>.github.io`.

## Quality floor

Responsive to 360px, visible keyboard focus rings, skip link, `prefers-reduced-motion`
respected, semantic landmarks, all images carry alt text, no external dependencies
beyond Google Fonts.
