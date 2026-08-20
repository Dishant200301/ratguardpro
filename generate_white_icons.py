import os

# Create target directories in public
folders = ["public/trust-badges", "public/icons"]
for folder in folders:
    os.makedirs(folder, exist_ok=True)

# 1. Industrial Grade Performance - Pure White SVG with transparent background
industrial_white_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
  <!-- Factory Chimneys -->
  <path d="M16 28V15h4v13" />
  <path d="M22 28V11h4v17" />
  <!-- Factory Sawtooth Body -->
  <path d="M14 28l9-6v6l9-6v6l9-6v6l9-6v14H14V28z" />
  <!-- Factory Windows -->
  <rect x="20" y="27" width="4" height="4" rx="0.5" stroke-width="1.8" />
  <rect x="30" y="27" width="4" height="4" rx="0.5" stroke-width="1.8" />
  <rect x="40" y="27" width="4" height="4" rx="0.5" stroke-width="1.8" />
  <!-- Platform Line -->
  <path d="M10 38h44" stroke-width="2.5" />
  <!-- Mechanical Gear / Cogwheel Base -->
  <path d="M13 41c2 1 3 3 2.5 5.5l-2.5 4.5 4.5 2.5c2-1 4.5-.5 5.5 1.5l1.5 5h5l1.5-5c1-2 3.5-2.5 5.5-1.5l4.5-2.5-2.5-4.5c-.5-2.5.5-4.5 2.5-5.5" stroke-width="2.2" />
  <path d="M24 45a8 8 0 0 0 16 0" stroke-width="2" />
</svg>"""

# 2. 50,000+ Happy Customers - Pure White SVG with transparent background
customers_white_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
  <!-- Center Person (Front) -->
  <circle cx="32" cy="18" r="5" />
  <path d="M23 34c0-5 4-9 9-9s9 4 9 9" />
  <!-- Left Person (Behind) -->
  <circle cx="20" cy="22" r="4" />
  <path d="M12 36c0-4.4 3.6-8 8-8 1.5 0 2.9.4 4.1 1.2" />
  <!-- Right Person (Behind) -->
  <circle cx="44" cy="22" r="4" />
  <path d="M39.9 29.2c1.2-.8 2.6-1.2 4.1-1.2 4.4 0 8 3.6 8 8" />
  <!-- 5 Stars Arc Below -->
  <path d="M12 43l1.2 2.5 2.8.4-2 2 .5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-2 2.8-.4z" stroke-width="1.3" fill="#FFFFFF" />
  <path d="M22 48l1.2 2.5 2.8.4-2 2 .5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-2 2.8-.4z" stroke-width="1.3" fill="#FFFFFF" />
  <path d="M32 50l1.2 2.5 2.8.4-2 2 .5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-2 2.8-.4z" stroke-width="1.3" fill="#FFFFFF" />
  <path d="M42 48l1.2 2.5 2.8.4-2 2 .5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-2 2.8-.4z" stroke-width="1.3" fill="#FFFFFF" />
  <path d="M52 43l1.2 2.5 2.8.4-2 2 .5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-2 2.8-.4z" stroke-width="1.3" fill="#FFFFFF" />
</svg>"""

# 3. 7-Day Money-Back Guarantee - Pure White SVG with transparent background
guarantee_white_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <!-- Outer Serrated/Ribbed Seal Circle -->
  <circle cx="32" cy="32" r="26" stroke-dasharray="3 2" stroke-width="2" />
  <!-- Inner Circles -->
  <circle cx="32" cy="32" r="22" stroke-width="1.5" />
  <circle cx="32" cy="32" r="17" stroke-width="1" stroke-dasharray="2 1.5" />
  <!-- 100% Center Badge -->
  <text x="32" y="30" text-anchor="middle" font-size="7.5" font-weight="900" fill="#FFFFFF" stroke="none" font-family="system-ui, -apple-system, sans-serif" letter-spacing="-0.5">100%</text>
  <!-- MONEY BACK Text -->
  <text x="32" y="36" text-anchor="middle" font-size="3.2" font-weight="800" fill="#FFFFFF" stroke="none" font-family="system-ui, -apple-system, sans-serif" letter-spacing="0.5">MONEY BACK</text>
  <!-- Top Arc Text GUARANTEE -->
  <text x="32" y="16" text-anchor="middle" font-size="3.5" font-weight="800" fill="#FFFFFF" stroke="none" font-family="system-ui, -apple-system, sans-serif" letter-spacing="1">GUARANTEE</text>
  <!-- Decorative Stars -->
  <path d="M22 22l.6 1.2 1.4.2-1 1 .2 1.4-1.2-.6-1.2.6.2-1.4-1-1 1.4-.2z" fill="#FFFFFF" stroke="none" />
  <path d="M42 22l.6 1.2 1.4.2-1 1 .2 1.4-1.2-.6-1.2.6.2-1.4-1-1 1.4-.2z" fill="#FFFFFF" stroke="none" />
  <path d="M26 43l.5 1 1.2.2-.8.8.2 1.2-1.1-.6-1.1.6.2-1.2-.8-.8 1.2-.2z" fill="#FFFFFF" stroke="none" />
  <path d="M32 44l.5 1 1.2.2-.8.8.2 1.2-1.1-.6-1.1.6.2-1.2-.8-.8 1.2-.2z" fill="#FFFFFF" stroke="none" />
  <path d="M38 43l.5 1 1.2.2-.8.8.2 1.2-1.1-.6-1.1.6.2-1.2-.8-.8 1.2-.2z" fill="#FFFFFF" stroke="none" />
</svg>"""

# 4. Made in India - Pure White SVG with transparent background
india_white_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <!-- Outer Stamp Circle -->
  <circle cx="32" cy="32" r="26" stroke-width="2" stroke-dasharray="4 2" />
  <circle cx="32" cy="32" r="22" stroke-width="1.5" />
  <!-- Center Banner Box for INDIA -->
  <rect x="13" y="24" width="38" height="16" rx="2" stroke-width="1.8" fill="none" />
  <text x="32" y="36" text-anchor="middle" font-size="9" font-weight="900" fill="#FFFFFF" stroke="none" font-family="system-ui, -apple-system, sans-serif" letter-spacing="1.5">INDIA</text>
  <!-- Top Text: MADE IN -->
  <text x="32" y="19" text-anchor="middle" font-size="4.2" font-weight="800" fill="#FFFFFF" stroke="none" font-family="system-ui, -apple-system, sans-serif" letter-spacing="1">MADE IN</text>
  <!-- Decorative Stars -->
  <path d="M20 18l.5 1 1.2.2-.8.8.2 1.2-1.1-.6-1.1.6.2-1.2-.8-.8 1.2-.2z" fill="#FFFFFF" stroke="none" />
  <path d="M44 18l.5 1 1.2.2-.8.8.2 1.2-1.1-.6-1.1.6.2-1.2-.8-.8 1.2-.2z" fill="#FFFFFF" stroke="none" />
  <!-- Bottom Chakra Motif -->
  <circle cx="32" cy="46" r="3.5" stroke-width="1.2" />
  <path d="M32 42.5v7M28.5 46h7M29.5 43.5l5 5M29.5 48.5l5-5" stroke-width="0.8" />
</svg>"""

files_map = {
    "industrial-grade.svg": industrial_white_svg,
    "happy-customers.svg": customers_white_svg,
    "money-back.svg": guarantee_white_svg,
    "made-in-india.svg": india_white_svg
}

for folder in folders:
    for filename, content in files_map.items():
        filepath = os.path.join(folder, filename)
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Wrote: {filepath}")

print("All white SVG icons generated successfully with transparent backgrounds!")
