import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="projekt-card">
            <div>
        <h1>404</h1>
        <p>Ups! Diese Seite gibt es nicht.</p>
        <p><a href="/">Zurück zur Startseite</a></p>
    </div>
    </div>
  )
}