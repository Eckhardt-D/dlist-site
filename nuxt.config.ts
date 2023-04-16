export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "shortcut icon",
          href: "/favicon.png",
        },
      ],
    },
  },
  css: ["~/assets/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
