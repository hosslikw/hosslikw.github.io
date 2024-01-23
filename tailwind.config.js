/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    'pages/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    'app/**/*.{ts,tsx}',
    'src/**/*.{ts,tsx}',
    './custom.css'
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
      --white-000: rgb(241 240 238);
--white - 100: #f4f6f5;
--white - 200: #eceeed;
--white - 300: #dfe1e0;
--white - 400: #cfd1d0;
--divider - light - 2: #7c7b7b;
--divider - light - 1: #6c6b6b;
--black - 400: #727272;
--black - 300: #575656;
--black - 200: #454143;
--black - 100: #332c25;
--black-000: #221e12;
--indigo: #2c3e50;
  }

  /* TextBlocks */
  :root {
  --posture - black: rgb(41 41 41);
  --posture - white: rgb(235 235 235);
  --posture - dark: rgb(42 58 64);
  --posture - purple: rgb(111 104 115);
  --posture - snake: rgb(184 179 141);
  --posture - pumpkin: rgb(217 118 81 / 100 %);
  /* alpha value as a decimal between 0 and 1 */

  /* TextBlocks */
  --pumpkinpurple - text: rgb(255 137 94);
  --purplepumpkin - text: rgb(65 61 69);
  --snakepurple - text: rgb(220 224 168);
  --purplesnake - text: rgb(96 87 102);

  /* Gradients */
  --posture - gradient - snakesnakedark: linear - gradient(to right, #b8b38d 0 %, #b8b38d 54.1452677916361 %, #2a3a40 100 %);
  --posture - gradient - darkpurpledark: linear - gradient(to right,
        #2a3a40 0 %,
        #2a3a40 28.751788118146354 %,
        #6f6873 63.02274394717535 %,
        #2a3a40 81.51137197358767 %,
        #2a3a40 100 %);
  --posture - gradient - darkpurple: linear - gradient(to right,
        #2a3a40 0 %,
        #2a3a40 23.563747188795148 %,
        #6f6873 51.650770359501095 %,
    #f2f2f2 75.82538517975055 %,
    #f2f2f2 100 %);
  --posture - gradient - glaringpurple: linear - gradient(to right,
    #f2f2f2 0 %,
    #f2f2f2 23.563747188795148 %,
        #6f6873 51.650770359501095 %,
    #f2f2f2 75.82538517975055 %,
    #f2f2f2 100 %);
  --posture - gradient - darksnake: linear - gradient(to right,
        #2a3a40 0 %,
        #2a3a40 30.446161899190194 %,
    #b8b38d 51.06382978723404 %,
    #f4f4f2 76.40577507598783 %,
    #f4f4f2 100 %);
  --posture - gradient - purplesnake: linear - gradient(to right,
        #6f6873 0 %,
        #6f6873 30.446161899190194 %,
    #b8b38d 51.06382978723404 %,
    #f4f4f2 76.40577507598783 %,
    #f4f4f2 100 %);
  --posture - gradient - pumpkindirtwhite: linear - gradient(to right,
    #d57b4d 0 %,
        #806043 12.10564930300807 %,
        #806043 24.21129860601614 %,
    #fffefb 62.105649303008065 %,
    #fffefb 100 %);
  --posture - gradient - Seanbledout: linear - gradient(to right,
        #1f0900 7.953723788864786 %,
        #3f0b00 10.484454085321765 %,
        #3f0b00 15.61822125813449 %,
    #f3f3f3 57.80911062906724 %,
    #f3f3f3 100 %);
}

@media(prefers - color - scheme: dark) {
    :root {
    --color - background: var(--vt - c - black);
    --color - background - soft: var(--vt - c - black - soft);
    --color - background - mute: var(--vt - c - black - mute);
    --color - border: var(--vt - c - divider - dark - 2);
    --color - border - hover: var(--vt - c - divider - dark - 1);
    --color - heading: var(--vt - c - text - dark - 1);
    --color - text: var(--vt - c - text - dark - 2);
  }
}

/** @format */
@font-face {
  font - display: swap;
  font - family: "AcuminProWide_Sans";
  font - style: normal;
  font - weight: 400;
  src: url(https://use.typekit.net/hdq1wia.css);
}

@font-face {
  font - display: swap;
  font - family: Adieu - Regular;
  font - style: normal;
  font - weight: 400;
  src:
  url(dist / fonts / Adieu - Regular.wof2) format("woff2"),
    url(dist / fonts / Adieu - Regular.woff) format("woff");
}
border: "hsl(var(--border))",
  input: "hsl(var(--input))",
    ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
  primary: {
  DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
        },
secondary: {
  DEFAULT: "hsl(var(--secondary))",
    foreground: "hsl(var(--secondary-foreground))",
        },
destructive: {
  DEFAULT: "hsl(var(--destructive))",
    foreground: "hsl(var(--destructive-foreground))",
        },
muted: {
  DEFAULT: "hsl(var(--muted))",
    foreground: "hsl(var(--muted-foreground))",
        },
accent: {
  DEFAULT: "hsl(var(--accent))",
    foreground: "hsl(var(--accent-foreground))",
        },
popover: {
  DEFAULT: "hsl(var(--popover))",
    foreground: "hsl(var(--popover-foreground))",
        },
card: {
  DEFAULT: "hsl(var(--card))",
    foreground: "hsl(var(--card-foreground))",
        },
      },
borderRadius: {
  lg: "var(--radius)",
    md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
      },
keyframes: {
  "accordion-down": {
    from: { height: "0" },
    to: { height: "var(--radix-accordion-content-height)" },
  },
  "accordion-up": {
    from: { height: "var(--radix-accordion-content-height)" },
    to: { height: "0" },
  },
},
animation: {
  "accordion-down": "accordion-down 0.2s ease-out",
    "accordion-up": "accordion-up 0.2s ease-out",
      },

    }
    },
  },
plugins: [require("tailwindcss-animate")],
}