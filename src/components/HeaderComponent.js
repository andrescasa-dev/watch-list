export default function HeaderComponent(header){
  const {title, link} = header
  
  return `
  <header class="bg-header flex px-32 py-20 items-center justify-between">
    <h1 class="text-5xl font-bold">${title}</h1>
    <a class="" href="${link.href}">${link.text}</a>
  </header>
  `
}