import Link from 'next/link'

export default function Home() {
  return (
        <>
          <div>
            <Link href="/about/user">Click here for User</Link>
            <Link href="/about/settings">Cick here for Settings Page</Link>
          </div>
        </>
      )
}
