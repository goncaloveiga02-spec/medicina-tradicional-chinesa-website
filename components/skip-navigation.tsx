export function SkipNavigation() {
  return (
    <a
      href="#main-content"
      className="skip-nav sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-emerald-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:no-underline"
    >
      Pular para o conteúdo principal
    </a>
  )
}
