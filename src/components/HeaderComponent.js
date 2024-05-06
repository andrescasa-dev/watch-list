export default function HeaderComponent(header) {
  const { title, link } = header

  return `
  <header class="bg-header gap-4 flex flex-col sm:flex-row md:px-32 sm:py-20 px-12 py-16 items-center justify-between">
    <h1 class="text-3xl md:text-5xl font-bold">${title}</h1>
    <a class="underline" href="${link.href}">${link.text} &rdsh;</a>
  </header>
  `
}