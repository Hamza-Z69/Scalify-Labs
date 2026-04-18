import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <p
        className="text-[8rem] font-bold leading-none font-mono"
        style={{ color: 'var(--accent-primary)', opacity: 0.2 }}
      >
        404
      </p>
      <h1
        className="mt-4"
        style={{ fontSize: 'var(--text-h2)', fontFamily: 'var(--font-display)' }}
      >
        Page introuvable
      </h1>
      <p
        className="mt-4 max-w-md"
        style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-body-lg)' }}
      >
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <div className="mt-8">
        <Button href="/" variant="primary" size="lg">
          Retour à l&apos;accueil
        </Button>
      </div>
    </section>
  )
}
