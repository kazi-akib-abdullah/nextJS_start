import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Eiusmod commodo nisi culpa elit aliqua et minim do enim eiusmod. Veniam ut enim dolore amet velit id ullamco eiusmod in magna pariatur laborum. Aliquip in do do adipisicing laborum laborum ut qui culpa non nisi deserunt. Consequat anim ad sunt duis incididunt exercitation laboris laborum esse ad proident elit ad veniam. Officia consectetur quis ullamco qui Lorem.Qui sint dolor irure consequat laboris id adipisicing sunt exercitation ut cillum excepteur minim.</p>
        <p className={styles.text}>Laborum adipisicing id do sunt id duis id exercitation. Nostrud non velit laborum nisi fugiat reprehenderit. Pariatur adipisicing quis deserunt non mollit nisi. Anim voluptate eiusmod do dolore officia ea Lorem aliqua culpa exercitation excepteur cupidatat in elit. Culpa commodo sit pariatur amet. Et ea proident voluptate aliquip nostrud minim eu cupidatat ipsum aute pariatur enim. Commodo eiusmod incididunt id sunt irure proident commodo non quis deserunt veniam consectetur occaecat.Voluptate amet laboris dolor irure laboris irure eiusmod ex consectetur.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
